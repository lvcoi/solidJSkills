# solidJSkills MCP Server

## Overview

This is a **Model Context Protocol (MCP) server** that exposes the solidJSkills repository content (skills, guides, templates) as browsable tools for Gemini CLI or any MCP-compatible client.

The server makes SolidJS-focused documentation, agent skills, and reference materials accessible through a structured tool interface, enabling AI agents to discover and read relevant content on demand.

## Dependencies

- **@modelcontextprotocol/sdk** (^1.17.3) — Core MCP protocol implementation
- **zod** (^3.23.8) — Schema validation for tool inputs
- **Node.js** ≥ 18 — Required by the MCP SDK

## Installation and Running

```bash
# Navigate to the mcp-server directory
cd mcp-server

# Install dependencies
npm install

# Start the server
npm start
```

You can also run the server directly:

```bash
node src/index.js
```

## Available Tools

The server exposes 3 tools for browsing repository documentation:

| Tool | Description | Input Parameters |
|------|-------------|------------------|
| `list_docs` | Lists all documents under `skills/`, `guides/`, and `tools/templates/` | None |
| `read_doc` | Reads a single document by repository-relative path | `path` (string) — e.g., `skills/solid-reviewer/SKILL.md` |
| `search_docs` | Searches documents by case-insensitive keyword match | `query` (string) — e.g., `reactivity` |

### Tool Examples

**list_docs:**
```json
// Request
{}

// Response
[
  "skills/solid-component-builder/SKILL.md",
  "skills/solid-reviewer/SKILL.md",
  "guides/solidjs-v1-blueprint.md",
  ...
]
```

**read_doc:**
```json
// Request
{ "path": "skills/solid-component-builder/SKILL.md" }

// Response
// Full file contents with path header
```

**search_docs:**
```json
// Request
{ "query": "reactivity" }

// Response
// List of matching file paths
```

## Allowed Directories

For safety, document reads are **intentionally restricted** to:

- `skills/` — Agent skill definitions and workflows
- `guides/` — Documentation and how-to guides
- `tools/templates/` — Reusable templates

Any attempt to read files outside these directories will be rejected with an error.

## Transport

The server uses **StdioServerTransport**, which means:

- It communicates over standard input/output (stdin/stdout)
- It is designed to be launched by Gemini CLI as a subprocess
- It is **not** a standalone HTTP server
- It should not be accessed directly by users via HTTP

When registered as a Gemini extension, the Gemini CLI launches this server automatically and manages the stdio communication channel.

## Architecture

The server is implemented in `src/index.js` and follows this structure:

1. **Path normalization and validation** — Ensures all file accesses are within allowed directories
2. **File walking** — Recursively discovers all files in allowed directories
3. **Tool registration** — Registers `list_docs`, `read_doc`, and `search_docs` with the MCP server
4. **Server initialization** — Connects to stdio transport and starts listening

The repository root is automatically detected relative to the server script location, enabling the extension to work regardless of where it's installed on the filesystem.
