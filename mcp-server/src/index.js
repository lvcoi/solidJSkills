#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');

const ALLOWED_DIRS = ['skills', 'guides', path.join('tools', 'templates')];

function normalizePath(inputPath) {
  if (typeof inputPath !== 'string' || inputPath.trim() === '') {
    throw new Error("'path' must be a non-empty string.");
  }

  const cleaned = inputPath.replace(/^\/*/, '');
  const resolved = path.resolve(repoRoot, cleaned);

  if (!resolved.startsWith(`${repoRoot}${path.sep}`) && resolved !== repoRoot) {
    throw new Error('Path escapes repository root.');
  }

  const isAllowed = ALLOWED_DIRS.some((dir) => {
    const allowedRoot = path.resolve(repoRoot, dir);
    return resolved === allowedRoot || resolved.startsWith(`${allowedRoot}${path.sep}`);
  });

  if (!isAllowed) {
    throw new Error(`Path must be inside one of: ${ALLOWED_DIRS.join(', ')}`);
  }

  return resolved;
}

async function walkFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === '.git') continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

async function listRepositoryDocs() {
  const roots = ALLOWED_DIRS.map((d) => path.resolve(repoRoot, d));
  const output = [];

  for (const root of roots) {
    const files = await walkFiles(root);
    for (const file of files) {
      output.push(path.relative(repoRoot, file));
    }
  }

  return output.sort((a, b) => a.localeCompare(b));
}

const server = new McpServer({
  name: 'solidjskills-mcp',
  version: '1.1.0'
});

server.registerTool(
  'list_docs',
  {
    description: 'List all docs under skills/, guides/, and tools/templates/.',
    inputSchema: z.object({}).shape
  },
  async () => {
    const docs = await listRepositoryDocs();
    return {
      content: [
        {
          type: 'text',
          text: docs.join('\n')
        }
      ]
    };
  }
);

server.registerTool(
  'read_doc',
  {
    description:
      'Read one document by repository-relative path. Allowed roots: skills/, guides/, tools/templates/.',
    inputSchema: z
      .object({
        path: z.string().min(1).describe('Repository-relative path, e.g. skills/workflow-planner/SKILL.md')
      })
      .shape
  },
  async ({ path: documentPath }) => {
    const fullPath = normalizePath(documentPath);
    const contents = await fs.readFile(fullPath, 'utf8');
    const relativePath = path.relative(repoRoot, fullPath);

    return {
      content: [
        {
          type: 'text',
          text: `# ${relativePath}\n\n${contents}`
        }
      ]
    };
  }
);

server.registerTool(
  'search_docs',
  {
    description: 'Search docs by case-insensitive substring match over file paths.',
    inputSchema: z
      .object({
        query: z.string().min(1).describe('Case-insensitive search query')
      })
      .shape
  },
  async ({ query }) => {
    const docs = await listRepositoryDocs();
    const matches = docs.filter((doc) => doc.toLowerCase().includes(query.toLowerCase()));

    return {
      content: [
        {
          type: 'text',
          text:
            matches.length > 0
              ? matches.join('\n')
              : `No matching documents found for '${query}'.`
        }
      ]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
