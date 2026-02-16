#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const skillsRoot = path.join(repoRoot, 'skills');
const requiredFrontmatterKeys = [
  'name',
  'description',
  'outputs',
  'requires_references',
  'validation_commands'
];
const requiredSections = [
  'Trigger',
  'Required Inputs',
  'Workflow',
  'Failure Modes',
  'Output Contract',
  'Validation',
  'References'
];

function parseArgs(argv) {
  const args = { skill: null };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--skill') {
      args.skill = argv[i + 1];
      i += 1;
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }
  return args;
}

async function listSolidSkillFiles() {
  const entries = await fs.readdir(skillsRoot, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (!entry.name.startsWith('solid-')) continue;
    const skillFile = path.join(skillsRoot, entry.name, 'SKILL.md');
    try {
      await fs.access(skillFile);
      files.push(skillFile);
    } catch {
      // ignore directories without SKILL.md
    }
  }

  files.sort((a, b) => a.localeCompare(b));
  return files;
}

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return null;
  return match[1];
}

function extractSections(content) {
  return content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^##\s+/.test(line))
    .map((line) => line.replace(/^##\s+/, '').trim());
}

function hasFrontmatterKey(frontmatter, key) {
  return new RegExp(`^${key}:`, 'm').test(frontmatter);
}

function hasNonEmptyList(frontmatter, key) {
  const pattern = new RegExp(`^${key}:\\s*\\n(?:\\s{2,}-\\s+.+\\n?)+`, 'm');
  return pattern.test(frontmatter);
}

function frontmatterValue(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!match) return null;
  return match[1].trim();
}

function outputSchemaPath(frontmatter) {
  const outputsMatch = frontmatter.match(/^outputs:\s*\n([\s\S]*?)(?=^[a-z0-9_-]+:|\Z)/im);
  if (!outputsMatch) return null;
  const schemaMatch = outputsMatch[1].match(/^\s{2,}schema:\s*(.+)$/m);
  if (!schemaMatch) return null;
  return schemaMatch[1].trim();
}

function outputFormat(frontmatter) {
  const outputsMatch = frontmatter.match(/^outputs:\s*\n([\s\S]*?)(?=^[a-z0-9_-]+:|\Z)/im);
  if (!outputsMatch) return null;
  const formatMatch = outputsMatch[1].match(/^\s{2,}format:\s*(.+)$/m);
  if (!formatMatch) return null;
  return formatMatch[1].trim();
}

async function validateSkill(skillFile) {
  const rel = path.relative(repoRoot, skillFile);
  const content = await fs.readFile(skillFile, 'utf8');
  const errors = [];

  const frontmatter = extractFrontmatter(content);
  if (!frontmatter) {
    errors.push('Missing YAML frontmatter block.');
    return { rel, errors };
  }

  for (const key of requiredFrontmatterKeys) {
    if (!hasFrontmatterKey(frontmatter, key)) {
      errors.push(`Missing frontmatter key: ${key}`);
    }
  }

  const name = frontmatterValue(frontmatter, 'name');
  if (!name || !/^[a-z0-9-]{3,63}$/.test(name)) {
    errors.push('Frontmatter "name" must match ^[a-z0-9-]{3,63}$.');
  }

  const description = frontmatterValue(frontmatter, 'description');
  if (!description || description.length < 20) {
    errors.push('Frontmatter "description" must be at least 20 characters.');
  }

  if (!hasNonEmptyList(frontmatter, 'requires_references')) {
    errors.push('Frontmatter "requires_references" must contain at least one list item.');
  }

  if (!hasNonEmptyList(frontmatter, 'validation_commands')) {
    errors.push('Frontmatter "validation_commands" must contain at least one list item.');
  }

  const schemaRef = outputSchemaPath(frontmatter);
  if (!schemaRef) {
    errors.push('Frontmatter outputs.schema is required.');
  } else {
    const resolvedSchema = path.resolve(path.dirname(skillFile), schemaRef);
    try {
      await fs.access(resolvedSchema);
    } catch {
      errors.push(`outputs.schema not found: ${schemaRef}`);
    }
  }

  const formatRef = outputFormat(frontmatter);
  if (!formatRef || formatRef.length < 3) {
    errors.push('Frontmatter outputs.format is required.');
  }

  const sections = extractSections(content);
  for (const section of requiredSections) {
    if (!sections.includes(section)) {
      errors.push(`Missing required section heading: ## ${section}`);
    }
  }

  const outputContractSection = content.match(/##\s+Output Contract\n([\s\S]*?)(?:\n##\s+|$)/);
  if (!outputContractSection) {
    errors.push('Missing Output Contract section body.');
  } else {
    const body = outputContractSection[1];
    if (!/doc_id/.test(body)) {
      errors.push('Output Contract must require citations with doc_id.');
    }
  }

  const validationSection = content.match(/##\s+Validation\n([\s\S]*?)(?:\n##\s+|$)/);
  if (!validationSection || !/node\s+tools\/scripts\//.test(validationSection[1])) {
    errors.push('Validation section must include at least one repo validator command.');
  }

  return { rel, errors };
}

async function run() {
  const args = parseArgs(process.argv.slice(2));
  let skillFiles = await listSolidSkillFiles();

  if (args.skill) {
    skillFiles = skillFiles.filter((file) => path.basename(path.dirname(file)) === args.skill);
    if (skillFiles.length === 0) {
      throw new Error(`No matching solid skill found for --skill ${args.skill}`);
    }
  }

  if (skillFiles.length === 0) {
    throw new Error('No solid skill files found.');
  }

  const results = await Promise.all(skillFiles.map((file) => validateSkill(file)));
  const failures = results.filter((result) => result.errors.length > 0);

  if (failures.length > 0) {
    console.error('validate-skills failed:');
    for (const failure of failures) {
      console.error(`- ${failure.rel}`);
      for (const error of failure.errors) {
        console.error(`  - ${error}`);
      }
    }
    process.exitCode = 1;
    return;
  }

  console.log(`validate-skills passed for ${results.length} solid skill files.`);
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
