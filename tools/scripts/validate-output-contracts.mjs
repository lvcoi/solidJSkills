#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const contractsDir = path.join(repoRoot, 'skills', 'contracts');

const requiredSchemas = [
  'component-build-output.schema.json',
  'refactor-plan-output.schema.json',
  'review-output.schema.json',
  'scaffold-output.schema.json',
  'design-decision-output.schema.json'
];

const macroSkillSchemaMap = {
  'solid-component-builder': '../../skills/contracts/component-build-output.schema.json',
  'solid-refactor-assistant': '../../skills/contracts/refactor-plan-output.schema.json',
  'solid-reviewer': '../../skills/contracts/review-output.schema.json',
  'solid-scaffold-bootstrap': '../../skills/contracts/scaffold-output.schema.json',
  'solid-design-patterns': '../../skills/contracts/design-decision-output.schema.json'
};

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?/);
  return match ? match[1] : null;
}

function outputSchemaPath(frontmatter) {
  const outputsMatch = frontmatter.match(/^outputs:\s*\n([\s\S]*?)(?=^[a-z0-9_-]+:|\Z)/im);
  if (!outputsMatch) return null;
  const schemaMatch = outputsMatch[1].match(/^\s{2,}schema:\s*(.+)$/m);
  return schemaMatch ? schemaMatch[1].trim() : null;
}

function ensureCitationProperty(schema, errors, label) {
  if (!schema.properties || !schema.properties.citations) {
    errors.push(`${label}: missing top-level citations property.`);
    return;
  }

  const citations = schema.properties.citations;
  if (citations.type !== 'array') {
    errors.push(`${label}: citations must be type array.`);
    return;
  }

  const itemRef = citations.items;
  if (!itemRef || (!itemRef.$ref && !itemRef.properties)) {
    errors.push(`${label}: citations.items must define citation object shape.`);
  }
}

function ensureBaseSchemaShape(schema, errors, label) {
  if (schema.type !== 'object') {
    errors.push(`${label}: schema.type must be object.`);
  }

  if (!Array.isArray(schema.required) || schema.required.length === 0) {
    errors.push(`${label}: schema.required must be a non-empty array.`);
  }

  if (!schema.$id || typeof schema.$id !== 'string') {
    errors.push(`${label}: schema.$id is required.`);
  }

  if (!schema.properties || typeof schema.properties !== 'object') {
    errors.push(`${label}: schema.properties is required.`);
  }

  ensureCitationProperty(schema, errors, label);
}

async function validateSchemaFile(schemaFile) {
  const fullPath = path.join(contractsDir, schemaFile);
  const errors = [];
  let parsed;

  try {
    parsed = JSON.parse(await fs.readFile(fullPath, 'utf8'));
  } catch (error) {
    errors.push(`Invalid JSON: ${error instanceof Error ? error.message : String(error)}`);
    return { schemaFile, errors };
  }

  ensureBaseSchemaShape(parsed, errors, schemaFile);

  if (schemaFile === 'review-output.schema.json') {
    const findings = parsed.properties?.findings;
    const findingItem = findings?.items;
    const severity = findingItem?.properties?.severity;
    if (!severity || !Array.isArray(severity.enum)) {
      errors.push('review-output.schema.json: findings[].severity enum is required.');
    }
    if (!findingItem?.properties?.file) {
      errors.push('review-output.schema.json: findings[].file is required.');
    }
  }

  return { schemaFile, errors };
}

async function validateMacroSkillBindings() {
  const errors = [];

  for (const [skillName, expectedSchemaRef] of Object.entries(macroSkillSchemaMap)) {
    const skillFile = path.join(repoRoot, 'skills', skillName, 'SKILL.md');
    let content;
    try {
      content = await fs.readFile(skillFile, 'utf8');
    } catch {
      errors.push(`Missing macro skill file: skills/${skillName}/SKILL.md`);
      continue;
    }

    const frontmatter = extractFrontmatter(content);
    if (!frontmatter) {
      errors.push(`skills/${skillName}/SKILL.md: missing frontmatter.`);
      continue;
    }

    const schemaRef = outputSchemaPath(frontmatter);
    if (schemaRef !== expectedSchemaRef) {
      errors.push(
        `skills/${skillName}/SKILL.md: outputs.schema must be ${expectedSchemaRef} (found ${schemaRef || 'none'}).`
      );
    }
  }

  return errors;
}

async function run() {
  const missingFiles = [];
  for (const schemaFile of requiredSchemas) {
    try {
      await fs.access(path.join(contractsDir, schemaFile));
    } catch {
      missingFiles.push(schemaFile);
    }
  }

  if (missingFiles.length > 0) {
    console.error('validate-output-contracts failed: missing schema files');
    for (const file of missingFiles) console.error(`- skills/contracts/${file}`);
    process.exitCode = 1;
    return;
  }

  const schemaResults = await Promise.all(requiredSchemas.map((schemaFile) => validateSchemaFile(schemaFile)));
  const schemaFailures = schemaResults.filter((result) => result.errors.length > 0);
  const bindingErrors = await validateMacroSkillBindings();

  if (schemaFailures.length > 0 || bindingErrors.length > 0) {
    console.error('validate-output-contracts failed:');
    for (const failure of schemaFailures) {
      console.error(`- skills/contracts/${failure.schemaFile}`);
      for (const error of failure.errors) console.error(`  - ${error}`);
    }
    for (const error of bindingErrors) {
      console.error(`- ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`validate-output-contracts passed for ${requiredSchemas.length} schemas.`);
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
