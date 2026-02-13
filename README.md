# solidJSkills

A SolidJS-first repository for **agent-ready skills, tools, guides, and standards** used to build, refactor, review, scaffold, and bootstrap SolidJS codebases.

## What is this?

This repository is a **Gemini CLI MCP extension** that provides SolidJS-focused agent skills, reference documentation, and guides accessible via MCP (Model Context Protocol) tools. It enables AI agents to access curated SolidJS knowledge, coding patterns, and workflows through a structured documentation interface.

The repository contains both the documentation content (skills, guides, references) and an MCP server that exposes this content as browsable tools for Gemini CLI or any MCP-compatible client.

## Mission

Provide a practical, reusable operating system for SolidJS engineering work:

1. Build consistent, high-quality SolidJS components.
2. Refactor safely with reactivity correctness and performance in mind.
3. Review code against SolidJS-specific quality gates.
4. Scaffold and bootstrap new SolidJS projects with predictable defaults.
5. Keep an agent-facing workflow (`SKILL.md`) aligned with real SolidJS practices.

## Prerequisites

- **Node.js** ≥ 18 (required by `@modelcontextprotocol/sdk`)
- **npm** (or yarn/pnpm)
- **Gemini CLI** (if using this as a Gemini extension)

## Installation

```bash
# Clone the repository
git clone https://github.com/lvcoi/solidJSkills.git

# Navigate to the MCP server directory
cd solidJSkills/mcp-server

# Install dependencies
npm install
```

## Quickstart

```bash
# Start the MCP server
cd mcp-server
npm start

# Or run directly:
node src/index.js
```

The server starts on stdio transport and exposes 3 tools:
- `list_docs` — Lists all documents under `skills/`, `guides/`, and `tools/templates/`
- `read_doc` — Reads a single document by repository-relative path
- `search_docs` — Searches documents by keyword

**Note:** The MCP server is designed to be launched by Gemini CLI as a subprocess via the extension manifest, not as a standalone HTTP server.

## v1 Repository Blueprint

- Core blueprint: `guides/solidjs-v1-blueprint.md`
- Agent standards: `AGENTS.md`
- Shared SolidJS reference pack: `references/solidjs/`
- SolidJS skills:
  - `skills/solid-component-builder/`
  - `skills/solid-refactor-assistant/`
  - `skills/solid-reviewer/`
  - `skills/solid-scaffold-bootstrap/`
  - `skills/solid-design-patterns/`

## Repository Layout

```
solidJSkills/
├── mcp-server/          # MCP server (Node.js) — the runtime that exposes skills/guides as tools
│   ├── src/index.js     # Server entry point, registers list_docs, read_doc, search_docs tools
│   └── package.json     # Dependencies: @modelcontextprotocol/sdk, zod
├── skills/              # Agent skill definitions (SKILL.md files consumed by the MCP server)
│   ├── solid-component-builder/     # Build SolidJS components with explicit reactivity choices
│   ├── solid-refactor-assistant/    # Plan and execute safe SolidJS refactors
│   ├── solid-reviewer/              # Enforce SolidJS quality standards in code reviews
│   ├── solid-scaffold-bootstrap/    # Bootstrap new SolidJS projects with consistent defaults
│   ├── solid-design-patterns/       # Choose architecture patterns for SolidJS apps
│   ├── skill-authoring/             # (legacy/meta) Generic skill creation guidance
│   ├── workflow-planner/            # (legacy/meta) Workflow planning templates
│   └── system-prompt-engineer/      # (legacy/meta) System prompt engineering guidance
├── guides/              # Markdown guides for skill creation, system prompting, etc.
├── references/solidjs/  # Shared SolidJS knowledge base (reactivity, patterns, checklists)
├── tools/               # Gemini MCP extension blueprint and routing docs
│   ├── gemini-mcp-extension/        # SolidJS-aligned Gemini extension configuration
│   └── templates/                   # Reusable templates
├── AGENTS.md            # Agent-facing coding standards for this repo
├── GEMINI.md            # Extension context file (loaded by Gemini CLI)
└── gemini-extension.json # Gemini CLI extension manifest
```

## Skill Map

| Skill | Primary Outcome | Use Cases |
|---|---|---|
| `solid-component-builder` | Generate production-ready components | New UI components, feature modules, stateful UI flows |
| `solid-refactor-assistant` | Reduce risk during structural changes | Prop/API rewrites, signal/store migrations, decomposition |
| `solid-reviewer` | Enforce SolidJS quality standards | PR reviews, architecture sanity checks, performance audits |
| `solid-scaffold-bootstrap` | Start projects and feature slices consistently | New app setup, package conventions, baseline tooling |
| `solid-design-patterns` | Choose architecture patterns intentionally | State/data layer decisions, rendering strategy, composition |

## Directory Pattern

```text
skills/<skill-name>/
├── SKILL.md
├── references/
├── scripts/      (optional)
└── assets/       (optional)
```

## Who this is for

- SolidJS product teams shipping app features rapidly.
- Design system maintainers building reusable component libraries.
- Teams using agent-assisted workflows for implementation and review.

## Gemini Extension Configuration

The `gemini-extension.json` file is the **Gemini CLI extension manifest**. When this repository is registered as a Gemini extension, Gemini CLI reads this file to discover and launch the MCP server.

**Field-by-field explanation:**

```json
{
  "name": "solidjskills",              // Extension name shown in Gemini CLI
  "version": "1.1.0",                  // Semantic version
  "description": "Browse solidJSkills docs from Gemini CLI via MCP tools.",
  "contextFileName": "GEMINI.md",      // File Gemini loads for extension context
  "mcpServers": {
    "solidjskills-docs": {             // Server identifier
      "command": "node",               // Command to launch the server
      "args": ["${extensionPath}${/}mcp-server${/}src${/}index.js"],
      "cwd": "${extensionPath}"        // Working directory = repo root
    }
  }
}
```

**How to register as a Gemini extension:**

1. Ensure the Gemini CLI is installed and configured
2. Register the extension by pointing to this repository:
   ```bash
   gemini extensions add /path/to/solidJSkills
   ```
3. The extension will be available in Gemini CLI sessions
4. Use the MCP tools (`list_docs`, `read_doc`, `search_docs`) to browse the documentation

## Note on legacy content

Some legacy generic skill-authoring guides remain in `guides/` and older starter skills in `skills/`. They can be retained for meta-work, but SolidJS-first materials are the default direction for this repo.

## Gemini MCP / Extension Alignment

A SolidJS-aligned Gemini MCP extension blueprint is available at:

- `tools/gemini-mcp-extension/`

Use it to keep intent routing, system instructions, and quality gates synchronized with the SolidJS skill set.
