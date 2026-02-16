# solidJSkills

![SolidJS Skills Logo](Logo.png)

**A SolidJS "Second Brain" for AI Agents**

`solidJSkills` is a curated knowledge base and toolset designed to give AI agents (like Windsurf, Cursor, Antigravity, and others) deep understanding of SolidJS best practices. It provides a deterministic "operating system" for writing high-quality SolidJS code.

## For Humans

While this repository contains code, it is primarily a **knowledge graph** for your AI assistant.

When you connect an AI agent to this repository via the Model Context Protocol (MCP), your agent gains:
1.  **Expert Knowledge**: Access to `guides/` and `references/` for SolidJS v2 patterns.
2.  **Specialized Skills**: Deterministic workflows in `skills/` for tasks like refactoring, testing, and component building.
3.  **Strict Validation**: Tools to ensure code meets SolidJS reactivity contracts.

## Quick Start (MCP Server)

To use `solidJSkills` with your AI agent, you need to run the included MCP server.

### 1. Installation

The MCP server is located in the `mcp-server` directory.

```bash
cd mcp-server
npm install
```

### 2. Verify Installation

You can test that the server starts correctly (it communicates via stdio, so it will wait for input):

```bash
node src/index.js
```

*(Press `Ctrl+C` to exit)*

## IDE Integration

### Windsurf / Cascade

Add the following to your `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "solidjskills": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/solidJSkills/mcp-server/src/index.js"],
      "cwd": "/ABSOLUTE/PATH/TO/solidJSkills/mcp-server"
    }
  }
}
```

**Note:** Replace `/ABSOLUTE/PATH/TO/...` with the actual absolute path to this repository on your machine.

### Cursor

1.  Open **Cursor Settings** > **Features** > **MCP**.
2.  Click **+ Add New MCP Server**.
3.  Fill in the details:
    *   **Name**: `solidjskills`
    *   **Type**: `command`
    *   **Command**: `node /ABSOLUTE/PATH/TO/solidJSkills/mcp-server/src/index.js`
4.  Click **Save**.

### Antigravity & Generic MCP Clients

Most MCP-compliant clients require the command to start the server. Use the absolute path to ensure reliability:

*   **Command**: `node`
*   **Args**: `/ABSOLUTE/PATH/TO/solidJSkills/mcp-server/src/index.js`

## Contributing Skills

To add new skills or knowledge:

1.  **Skills**: Create a new directory in `skills/` (e.g., `skills/solid-my-new-skill/`).
2.  **Definition**: Add a `SKILL.md` file following the template in `tools/templates/SKILL-template.md`.
3.  **Docs**: Place detailed documentation in `references/`.

---

## Technical Architecture (Advanced)

### Mission

Provide a practical operating system for SolidJS engineering work with strict contracts:

1.  Build high-quality SolidJS components.
2.  Refactor safely with explicit invariants.
3.  Review changes with prioritized findings.
4.  Scaffold projects with predictable defaults.
5.  Route intent consistently across Solid core, Router, SolidStart, and solid-meta.

### Blueprint

-   `guides/solidjs-v2-blueprint.md`

### v2 Architecture

#### Macro skills

-   `skills/solid-component-builder/`
-   `skills/solid-refactor-assistant/`
-   `skills/solid-reviewer/`
-   `skills/solid-scaffold-bootstrap/`
-   `skills/solid-design-patterns/`

#### Router + domain subskills

-   `skills/solid-intent-router/`
-   `skills/solid-reactivity-core-expert/`
-   `skills/solid-control-flow-rendering/`
-   `skills/solid-state-architecture/`
-   `skills/solid-router-data-navigation/`
-   `skills/solid-start-server-runtime/`
-   `skills/solid-ssr-hydration-debugger/`
-   `skills/solid-meta-head-management/`
-   `skills/solid-testing-quality-gates/`

#### Contracts and validation

-   Skill contract schema: `tools/schemas/skill-contract.schema.json`
-   Output schemas: `skills/contracts/*.schema.json`
-   Skill validator: `tools/scripts/validate-skills.mjs`
-   Contract validator: `tools/scripts/validate-output-contracts.mjs`

#### Corpus pipeline

-   Raw source (optional local source): `solidJSdocs/` (not committed)
-   Normalized corpus (source of truth): `references/solidjs-normalized/docs/`
-   Manifest: `references/solidjs-normalized/manifest.jsonl`
-   Normalizer: `tools/scripts/normalize-solid-docs.mjs`
-   Corpus validator: `tools/scripts/validate-solid-corpus.mjs`

### Quality commands

Run from repo root:

```bash
node tools/scripts/normalize-solid-docs.mjs --check
node tools/scripts/validate-solid-corpus.mjs
node tools/scripts/validate-skills.mjs
node tools/scripts/validate-output-contracts.mjs
node tools/scripts/run-smoke-evals.mjs
```

### MCP alignment

-   MCP server: `mcp-server/src/index.js`
-   Routing map: `tools/gemini-mcp-extension/skill-routing-map.md`
-   System prompt template: `tools/gemini-mcp-extension/prompts/solidjs-system-instructions.md`

### Legacy note

Non-Solid meta skills remain in `skills/` for repository maintenance tasks, but SolidJS v2 skills and corpus tooling are the default operating path.
