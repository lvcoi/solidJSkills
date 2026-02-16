#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const defaultSourceRoot = path.join(repoRoot, 'solidJSdocs');
const defaultOutputRoot = path.join(repoRoot, 'references', 'solidjs-normalized');
const defaultOutputDocsDir = path.join(defaultOutputRoot, 'docs');
const manifestPath = path.join(defaultOutputRoot, 'manifest.jsonl');
const taxonomyPath = path.join(defaultOutputRoot, 'taxonomy.json');

function parseArgs(argv) {
  const args = { check: false, sourceRoot: defaultSourceRoot, outputRoot: defaultOutputRoot };
  for (const arg of argv) {
    if (arg === '--check') args.check = true;
    else if (arg.startsWith('--source=')) args.sourceRoot = path.resolve(repoRoot, arg.slice('--source='.length));
    else if (arg.startsWith('--out=')) args.outputRoot = path.resolve(repoRoot, arg.slice('--out='.length));
    else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return args;
}

async function listMarkdownFiles(rootDir) {
  const files = [];

  async function walk(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });
    entries.sort((a, b) => a.name.localeCompare(b.name));
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }

  await walk(rootDir);
  return files;
}

function titleCase(value) {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
}

function sanitizePathSegment(segment, isFile = false) {
  const ext = isFile ? path.extname(segment) : '';
  const stem = isFile ? segment.slice(0, -ext.length || undefined) : segment;

  let safe = stem.toLowerCase();
  if (/_+$/.test(safe)) {
    safe = `${safe.replace(/_+$/, '')}-star`;
  }
  safe = safe.replace(/_+/g, '-');
  safe = safe.replace(/\*/g, '-star-');
  safe = safe.replace(/[^a-z0-9.-]+/g, '-');
  safe = safe.replace(/-+/g, '-').replace(/^-|-$/g, '');
  if (safe.length === 0) safe = 'doc';

  return isFile ? `${safe}${ext.toLowerCase() || '.md'}` : safe;
}

function normalizeRelativePath(sourceRelativePath) {
  const parts = sourceRelativePath.split('/');
  const normalized = parts.map((part, index) => sanitizePathSegment(part, index === parts.length - 1));
  return normalized.join('/');
}

function detectPackage(sourceRelativePath) {
  if (sourceRelativePath.startsWith('solid-router/')) return 'solid-router';
  if (sourceRelativePath.startsWith('solid-start/')) return 'solid-start';
  if (sourceRelativePath.startsWith('solid-meta/')) return 'solid-meta';
  return 'solid-core';
}

function detectTopic(sourceRelativePath, packageName) {
  const parts = sourceRelativePath.split('/');
  if (packageName === 'solid-core') {
    if (parts[0] === 'reference') return `reference/${parts[1] || 'general'}`;
    return parts[0].replace(/\.md$/, '');
  }
  return (parts[1] || 'general').replace(/\.md$/, '');
}

function toDocId(packageName, normalizedRelativePath) {
  const stem = normalizedRelativePath.replace(/\.md$/, '');
  const dotted = stem
    .split('/')
    .map((part) => part.replace(/[^a-z0-9-]/g, '-'))
    .join('.');
  return `${packageName}.${dotted}`;
}

function toCanonicalUrl(sourceRelativePath) {
  const stem = sourceRelativePath.replace(/\.md$/, '');
  if (stem === 'index') return 'https://docs.solidjs.com/';
  if (stem.endsWith('/index')) return `https://docs.solidjs.com/${stem.slice(0, -'/index'.length)}`;
  return `https://docs.solidjs.com/${stem}`;
}

function cleanupLinkedHeading(line) {
  const match = line.match(/^(#{1,6})\s+\[([^\]]+)\]\([^\)]+\)\s*$/);
  if (!match) return line;
  return `${match[1]} ${match[2].trim()}`;
}

// Concatenated tab-selector labels left by the SolidJS docs tabbed UI scraper.
const TAB_SELECTOR_LABELS = new Set([
  'npmpnpmyarnbundeno',
  'typescriptjavascript',
  'javascripttypescript'
]);

// Bare admonition labels left when a callout component is scraped without its wrapper.
const ADMONITION_LABELS = new Set(['note', 'tip', 'caution', 'info', 'warning']);

function removeBoilerplateSections(rawContent) {
  const lines = rawContent.replace(/\r\n/g, '\n').replace(/\uFEFF/g, '').split('\n');
  const cleaned = [];

  let inCodeBlock = false;
  let inLearnReference = false;
  let inOnThisPage = false;
  let inContribute = false;

  for (const originalLine of lines) {
    const line = originalLine;
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      cleaned.push(line);
      continue;
    }

    if (inCodeBlock) {
      cleaned.push(line);
      continue;
    }

    if (trimmed === 'LearnReference') {
      inLearnReference = true;
      continue;
    }

    if (inLearnReference) {
      if (
        trimmed === '' ||
        trimmed.startsWith('- ') ||
        line.startsWith('  ') ||
        line.startsWith('\t')
      ) {
        continue;
      }
      inLearnReference = false;
    }

    if (trimmed === 'On this page') {
      inOnThisPage = true;
      continue;
    }

    if (inOnThisPage) {
      if (trimmed === 'Contribute') {
        inOnThisPage = false;
        inContribute = true;
        continue;
      }
      if (trimmed === '' || /^\d+\.\s+/.test(trimmed) || trimmed.startsWith('- ')) {
        continue;
      }
      inOnThisPage = false;
    }

    if (trimmed === 'Contribute') {
      inContribute = true;
      continue;
    }

    if (inContribute) {
      if (trimmed === '' || /^\d+\.\s+/.test(trimmed) || trimmed.startsWith('- ')) {
        continue;
      }
      inContribute = false;
    }

    if (
      /^\[\*\*Solid\*\*(?:Start)?\]\(/.test(trimmed) ||
      /^- \[(Core|Router|SolidStart|Meta)\]\(/.test(trimmed) ||
      /^\[\]\(https:\/\/github\.com\/[^\)]+\)\[\]\(https:\/\/discord\.com\/invite\/solidjs\)$/.test(trimmed) ||
      /^\[Edit this page\]\(/.test(trimmed) ||
      /^\[Report an issue with this page\]\(/.test(trimmed) ||
      /^Previous\[/.test(trimmed) ||
      /^Next\[/.test(trimmed)
    ) {
      continue;
    }

    // Strip tab-selector labels (e.g. "npmpnpmyarnbundeno").
    if (TAB_SELECTOR_LABELS.has(trimmed.toLowerCase())) {
      continue;
    }

    // Strip bare admonition labels (e.g. standalone "note", "tip").
    if (ADMONITION_LABELS.has(trimmed.toLowerCase())) {
      continue;
    }

    cleaned.push(cleanupLinkedHeading(line));
  }

  let text = cleaned.join('\n');

  // Remove extraction artifacts: isolated numeric code blocks such as ```\n01\n```
  text = text.replace(/```\s*\n(?:\s*\d+\s*\n)+```\s*\n?/g, '');

  // Strip leading blank lines inside code blocks (scraping artifact from line-number extraction).
  text = text.replace(/(```[^\n]*)\n(?:\s*\n)+/g, '$1\n');

  // Normalize repeated blank lines.
  text = text.replace(/\n{3,}/g, '\n\n').trim();
  return text;
}

function deriveTitle(sourceRelativePath, content) {
  const firstH1 = content
    .split('\n')
    .map((line) => line.trim())
    .find((line) => /^#\s+/.test(line));
  if (firstH1) {
    return firstH1.replace(/^#\s+/, '').trim();
  }

  const firstNonEmpty = content
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line.length > 0);
  if (firstNonEmpty) {
    const linkLeadMatch = firstNonEmpty.match(/^\[([^\]]+)\]\([^)]+\)/);
    if (linkLeadMatch) {
      return linkLeadMatch[1].trim();
    }
  }

  const noExt = sourceRelativePath.replace(/\.md$/, '');
  if (noExt === 'index') return 'SolidJS Documentation';

  if (noExt.endsWith('/index')) {
    const parent = path.posix.basename(path.posix.dirname(noExt));
    return `${titleCase(parent)} Documentation`;
  }

  const base = path.posix.basename(noExt);
  return titleCase(base);
}

function ensureExactlyOneH1(sourceRelativePath, content) {
  const lines = content.split('\n');
  const out = [];
  let h1Count = 0;

  for (const line of lines) {
    if (/^#\s+/.test(line)) {
      h1Count += 1;
      if (h1Count > 1) {
        out.push(line.replace(/^#\s+/, '## '));
      } else {
        out.push(line);
      }
      continue;
    }
    out.push(line);
  }

  if (h1Count === 0) {
    const title = deriveTitle(sourceRelativePath, content);
    return `# ${title}\n\n${out.join('\n').trim()}`.trim();
  }

  return out.join('\n').trim();
}

function trimBeforeFirstH1(content) {
  const lines = content.split('\n');
  const firstH1Index = lines.findIndex((line) => /^#\s+/.test(line.trim()));
  if (firstH1Index <= 0) return content;
  return lines.slice(firstH1Index).join('\n').trim();
}

function extractHeadings(content) {
  return content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^#{1,6}\s+/.test(line))
    .map((line) => line.replace(/^#{1,6}\s+/, '').trim());
}

function kebabToCamel(value) {
  return value.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

function extractSymbols(sourceRelativePath, content) {
  const symbols = new Set();
  const base = path.posix.basename(sourceRelativePath, '.md');
  const sanitizedBase = base.replace(/[^a-zA-Z0-9-]/g, '-');
  if (sanitizedBase) {
    symbols.add(sanitizedBase);
    if (sanitizedBase.includes('-')) symbols.add(kebabToCamel(sanitizedBase));
  }

  const codeTokenPattern = /`([^`]+)`/g;
  let match;
  while ((match = codeTokenPattern.exec(content))) {
    const token = match[1].trim();
    if (/^[A-Za-z][A-Za-z0-9:_-]{1,63}$/.test(token)) {
      symbols.add(token);
    }
  }

  return Array.from(symbols).sort((a, b) => a.localeCompare(b));
}

function extractTags(packageName, topic, sourceRelativePath, headings) {
  const tags = new Set();
  tags.add(packageName);
  for (const part of topic.split('/')) tags.add(part);
  for (const part of sourceRelativePath.replace(/\.md$/, '').split('/')) {
    if (part) tags.add(part);
  }
  for (const heading of headings) {
    for (const token of heading.toLowerCase().split(/[^a-z0-9]+/)) {
      if (token.length >= 3) tags.add(token);
    }
  }
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}

function buildTaxonomy(entries, generatedAt) {
  const packageTopicDocs = {};
  const apiSymbolDocs = {};

  for (const entry of entries) {
    if (!packageTopicDocs[entry.package]) packageTopicDocs[entry.package] = {};
    if (!packageTopicDocs[entry.package][entry.topic]) packageTopicDocs[entry.package][entry.topic] = [];
    packageTopicDocs[entry.package][entry.topic].push(entry.doc_id);

    for (const symbol of entry.symbols) {
      if (!apiSymbolDocs[symbol]) apiSymbolDocs[symbol] = [];
      apiSymbolDocs[symbol].push(entry.doc_id);
    }
  }

  for (const pkg of Object.keys(packageTopicDocs)) {
    for (const topic of Object.keys(packageTopicDocs[pkg])) {
      packageTopicDocs[pkg][topic].sort((a, b) => a.localeCompare(b));
    }
  }
  for (const symbol of Object.keys(apiSymbolDocs)) {
    apiSymbolDocs[symbol].sort((a, b) => a.localeCompare(b));
  }

  return {
    generated_at: generatedAt,
    package_topic_docs: packageTopicDocs,
    api_symbol_docs: apiSymbolDocs
  };
}

function normalizeDoc(sourceRelativePath, rawContent) {
  const packageName = detectPackage(sourceRelativePath);
  const topic = detectTopic(sourceRelativePath, packageName);
  const normalizedRelativePath = normalizeRelativePath(sourceRelativePath);

  const withoutBoilerplate = removeBoilerplateSections(rawContent);
  const normalizedContent = ensureExactlyOneH1(
    sourceRelativePath,
    trimBeforeFirstH1(withoutBoilerplate)
  );

  const headings = extractHeadings(normalizedContent);
  const symbols = extractSymbols(sourceRelativePath, normalizedContent);
  const tags = extractTags(packageName, topic, sourceRelativePath, headings);

  const docId = toDocId(packageName, normalizedRelativePath);

  return {
    doc_id: docId,
    package: packageName,
    topic,
    source_path: sourceRelativePath,
    normalized_path: normalizedRelativePath,
    canonical_url: toCanonicalUrl(sourceRelativePath),
    tags,
    headings,
    symbols,
    content: normalizedContent
  };
}

function serializeManifest(entries) {
  const lines = entries.map((entry) => {
    const { content, ...manifestEntry } = entry;
    return JSON.stringify(manifestEntry);
  });
  return `${lines.join('\n')}\n`;
}

function rewriteLocalLinks(entry, sourceToNormalizedMap) {
  const lines = entry.content.split('\n');
  const out = [];
  let inCodeBlock = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      out.push(line);
      continue;
    }

    if (inCodeBlock) {
      out.push(line);
      continue;
    }

    const rewritten = line.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (full, label, target) => {
      const rawTarget = String(target).trim();
      if (
        rawTarget.startsWith('http://') ||
        rawTarget.startsWith('https://') ||
        rawTarget.startsWith('mailto:') ||
        rawTarget.startsWith('#')
      ) {
        return full;
      }

      const [pathPart, anchorPart] = rawTarget.split('#');
      const sourceCandidate = pathPart.startsWith('/')
        ? pathPart.slice(1)
        : path.posix.normalize(path.posix.join(path.posix.dirname(entry.source_path), pathPart));

      if (!sourceToNormalizedMap.has(sourceCandidate)) {
        return full;
      }

      const mappedTarget = sourceToNormalizedMap.get(sourceCandidate);
      let relativeTarget = path.posix.relative(path.posix.dirname(entry.normalized_path), mappedTarget);
      if (!relativeTarget || relativeTarget.length === 0) {
        relativeTarget = path.posix.basename(mappedTarget);
      }

      const nextTarget = anchorPart ? `${relativeTarget}#${anchorPart}` : relativeTarget;
      return `[${label}](${nextTarget})`;
    });

    out.push(rewritten);
  }

  return { ...entry, content: out.join('\n') };
}

async function fileExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function run() {
  const args = parseArgs(process.argv.slice(2));
  const sourceRoot = args.sourceRoot;
  const outputRoot = args.outputRoot;
  const outputDocsDir = path.join(outputRoot, 'docs');
  const outputManifestPath = path.join(outputRoot, 'manifest.jsonl');
  const outputTaxonomyPath = path.join(outputRoot, 'taxonomy.json');

  if (!(await fileExists(sourceRoot))) {
    throw new Error(`Source directory not found: ${sourceRoot}`);
  }

  const sourceFiles = await listMarkdownFiles(sourceRoot);
  if (sourceFiles.length === 0) {
    throw new Error(`No markdown files found under ${sourceRoot}`);
  }

  const entries = [];
  let maxMtimeMs = 0;

  for (const sourceFile of sourceFiles) {
    const sourceRelativePath = path.relative(sourceRoot, sourceFile).split(path.sep).join('/');
    const rawContent = await fs.readFile(sourceFile, 'utf8');
    const stat = await fs.stat(sourceFile);
    maxMtimeMs = Math.max(maxMtimeMs, stat.mtimeMs);

    const doc = normalizeDoc(sourceRelativePath, rawContent);
    doc.last_normalized_at = stat.mtime.toISOString();
    entries.push(doc);
  }

  const sourceToNormalizedMap = new Map(entries.map((entry) => [entry.source_path, entry.normalized_path]));
  const linkedEntries = entries.map((entry) => rewriteLocalLinks(entry, sourceToNormalizedMap));

  linkedEntries.sort((a, b) => a.doc_id.localeCompare(b.doc_id));
  const manifestText = serializeManifest(linkedEntries);
  const taxonomy = buildTaxonomy(linkedEntries, new Date(maxMtimeMs).toISOString());
  const taxonomyText = `${JSON.stringify(taxonomy, null, 2)}\n`;

  if (args.check) {
    const mismatches = [];

    if (!(await fileExists(outputManifestPath))) {
      mismatches.push(`Missing manifest file: ${path.relative(repoRoot, outputManifestPath)}`);
    } else {
      const currentManifest = await fs.readFile(outputManifestPath, 'utf8');
      if (currentManifest !== manifestText) {
        mismatches.push(`Manifest is stale: ${path.relative(repoRoot, outputManifestPath)}`);
      }
    }

    if (!(await fileExists(outputTaxonomyPath))) {
      mismatches.push(`Missing taxonomy file: ${path.relative(repoRoot, outputTaxonomyPath)}`);
    } else {
      const currentTaxonomy = await fs.readFile(outputTaxonomyPath, 'utf8');
      if (currentTaxonomy !== taxonomyText) {
        mismatches.push(`Taxonomy is stale: ${path.relative(repoRoot, outputTaxonomyPath)}`);
      }
    }

    for (const entry of linkedEntries) {
      const docPath = path.join(outputDocsDir, entry.normalized_path);
      if (!(await fileExists(docPath))) {
        mismatches.push(`Missing normalized doc: ${path.relative(repoRoot, docPath)}`);
        continue;
      }
      const currentDoc = await fs.readFile(docPath, 'utf8');
      if (currentDoc !== `${entry.content}\n`) {
        mismatches.push(`Stale normalized doc: ${path.relative(repoRoot, docPath)}`);
      }
    }

    if (mismatches.length > 0) {
      console.error('normalize-solid-docs --check failed:');
      for (const mismatch of mismatches) console.error(`- ${mismatch}`);
      process.exitCode = 1;
      return;
    }

    console.log(`normalize-solid-docs --check passed for ${linkedEntries.length} docs.`);
    return;
  }

  await fs.mkdir(outputRoot, { recursive: true });
  await fs.rm(outputDocsDir, { recursive: true, force: true });
  await fs.mkdir(outputDocsDir, { recursive: true });

  for (const entry of linkedEntries) {
    const docPath = path.join(outputDocsDir, entry.normalized_path);
    await fs.mkdir(path.dirname(docPath), { recursive: true });
    await fs.writeFile(docPath, `${entry.content}\n`, 'utf8');
  }

  await fs.writeFile(outputManifestPath, manifestText, 'utf8');
  await fs.writeFile(outputTaxonomyPath, taxonomyText, 'utf8');

  console.log(`Normalized ${linkedEntries.length} docs to ${path.relative(repoRoot, outputRoot)}`);
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
