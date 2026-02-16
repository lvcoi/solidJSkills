#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const normalizedRoot = path.join(repoRoot, 'references', 'solidjs-normalized');
const docsRoot = path.join(normalizedRoot, 'docs');
const manifestPath = path.join(normalizedRoot, 'manifest.jsonl');
const taxonomyPath = path.join(normalizedRoot, 'taxonomy.json');

const requiredFields = [
  'doc_id',
  'package',
  'topic',
  'source_path',
  'canonical_url',
  'tags',
  'headings',
  'last_normalized_at'
];

function parseManifest(content) {
  const entries = [];
  const lines = content.split('\n').map((line) => line.trim()).filter(Boolean);
  for (const line of lines) {
    entries.push(JSON.parse(line));
  }
  return entries;
}

function filenameHasAnomaly(relativePath) {
  const parts = relativePath.split('/');
  const fileName = parts[parts.length - 1];
  if (!fileName.endsWith('.md')) return true;

  for (let i = 0; i < parts.length; i += 1) {
    const part = i === parts.length - 1 ? fileName.slice(0, -3) : parts[i];
    if (!/^[a-z0-9][a-z0-9.-]*$/.test(part)) return true;
  }

  return false;
}

function findLocalLinks(markdown) {
  const links = [];
  const pattern = /\[[^\]]*\]\(([^)]+)\)/g;
  let match;

  while ((match = pattern.exec(markdown))) {
    const rawTarget = match[1].trim();
    if (!rawTarget || rawTarget.startsWith('http://') || rawTarget.startsWith('https://')) continue;
    if (rawTarget.startsWith('mailto:') || rawTarget.startsWith('#')) continue;
    if (rawTarget.startsWith('/assets/')) continue;
    const pathOnly = rawTarget.split('#')[0];
    if (!pathOnly.includes('/') && !pathOnly.endsWith('.md')) continue;
    links.push(rawTarget);
  }

  return links;
}

async function exists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function resolveLocalLink(filePath, linkTarget) {
  const [targetWithoutAnchor] = linkTarget.split('#');
  if (!targetWithoutAnchor || targetWithoutAnchor === '') return true;

  const candidatePaths = [];
  if (targetWithoutAnchor.startsWith('/')) {
    candidatePaths.push(path.join(docsRoot, targetWithoutAnchor.slice(1)));
  } else {
    candidatePaths.push(path.resolve(path.dirname(filePath), targetWithoutAnchor));
  }

  const expanded = new Set();
  for (const candidate of candidatePaths) {
    expanded.add(candidate);
    if (!candidate.endsWith('.md')) expanded.add(`${candidate}.md`);
    expanded.add(path.join(candidate, 'index.md'));
  }

  for (const candidate of expanded) {
    if (await exists(candidate)) return true;
  }

  return false;
}

async function run() {
  const errors = [];
  const warnings = [];

  if (!(await exists(manifestPath))) {
    throw new Error(`Missing manifest: ${path.relative(repoRoot, manifestPath)}`);
  }

  if (!(await exists(taxonomyPath))) {
    throw new Error(`Missing taxonomy: ${path.relative(repoRoot, taxonomyPath)}`);
  }

  const taxonomy = JSON.parse(await fs.readFile(taxonomyPath, 'utf8'));
  if (!taxonomy.package_topic_docs || !taxonomy.api_symbol_docs) {
    errors.push('taxonomy.json must include package_topic_docs and api_symbol_docs.');
  }

  const manifestEntries = parseManifest(await fs.readFile(manifestPath, 'utf8'));
  if (manifestEntries.length === 0) {
    errors.push('manifest.jsonl is empty.');
  }

  const docIds = new Set();
  const normalizedPaths = new Set();

  for (const entry of manifestEntries) {
    for (const field of requiredFields) {
      if (!(field in entry)) errors.push(`manifest entry missing field "${field}" for doc_id=${entry.doc_id || 'unknown'}`);
    }

    if (docIds.has(entry.doc_id)) {
      errors.push(`Duplicate doc_id in manifest: ${entry.doc_id}`);
    }
    docIds.add(entry.doc_id);

    const normalizedPath = entry.normalized_path || entry.source_path;
    if (!normalizedPath) {
      errors.push(`Missing normalized_path/source_path for doc_id=${entry.doc_id}`);
      continue;
    }

    if (normalizedPaths.has(normalizedPath)) {
      errors.push(`Duplicate normalized path in manifest: ${normalizedPath}`);
    }
    normalizedPaths.add(normalizedPath);

    if (filenameHasAnomaly(normalizedPath)) {
      errors.push(`Filename anomaly in normalized path: ${normalizedPath}`);
    }

    if (entry.source_path && filenameHasAnomaly(entry.source_path)) {
      warnings.push(`Source filename anomaly preserved from raw docs: ${entry.source_path}`);
    }

    const normalizedFile = path.join(docsRoot, normalizedPath);
    if (!(await exists(normalizedFile))) {
      errors.push(`Missing normalized doc file: ${path.relative(repoRoot, normalizedFile)}`);
      continue;
    }

    const normalizedContent = await fs.readFile(normalizedFile, 'utf8');
    const h1Count = normalizedContent
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => /^#\s+/.test(line)).length;

    if (h1Count !== 1) {
      errors.push(`Expected exactly one H1 in ${path.relative(repoRoot, normalizedFile)}, found ${h1Count}`);
    }

    const links = findLocalLinks(normalizedContent);
    for (const link of links) {
      const ok = await resolveLocalLink(normalizedFile, link);
      if (!ok) {
        errors.push(`Broken local link in ${path.relative(repoRoot, normalizedFile)} -> ${link}`);
      }
    }
  }

  if (errors.length > 0) {
    console.error('validate-solid-corpus failed:');
    for (const error of errors) console.error(`- ${error}`);
    if (warnings.length > 0) {
      console.error('Warnings:');
      for (const warning of warnings) console.error(`- ${warning}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`validate-solid-corpus passed for ${manifestEntries.length} normalized docs.`);
  if (warnings.length > 0) {
    console.log('Warnings:');
    for (const warning of warnings) console.log(`- ${warning}`);
  }
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
