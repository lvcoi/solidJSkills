# Gemini MCP Extension (SolidJS Alignment)

This directory provides a SolidJS-aligned blueprint for a Gemini MCP/extension layer.

## Goals

- Keep Gemini-side routing aligned with the repository's SolidJS-first mission.
- Route component/refactor/review/scaffold/design requests to the corresponding SolidJS skills.
- Enforce consistent review and quality gate behavior across tool invocations.

## Contents

- `extension-blueprint.md` — architecture and integration model.
- `skill-routing-map.md` — intent-to-skill routing table.
- `prompts/solidjs-system-instructions.md` — baseline system instruction template for SolidJS tasks.

## How This Relates to the Extension

This directory documents the **design and configuration model** for integrating the solidJSkills repository as a Gemini CLI extension. The actual extension is configured via:

- **`/gemini-extension.json`** (root) — The extension manifest that Gemini CLI reads to discover and launch the MCP server
- **`/mcp-server/`** (root) — The Node.js MCP server that exposes skills/guides as browsable tools

When you register the solidJSkills repository as a Gemini extension, these components work together:

1. Gemini CLI reads `gemini-extension.json` to learn how to start the MCP server
2. Gemini CLI launches `mcp-server/src/index.js` as a subprocess
3. The MCP server exposes `list_docs`, `read_doc`, and `search_docs` tools
4. Gemini CLI loads `GEMINI.md` as extension context
5. The blueprint and routing maps in this directory serve as **reference documentation** for understanding the intended routing model and design patterns (not runtime configuration)

## Setup and Integration Instructions

### Customizing Skill Routing

If you want to customize how user intents are routed to SolidJS skills:

1. **Edit `skill-routing-map.md`** — Update the intent-to-skill mapping table
2. **Update system instructions** — Modify `prompts/solidjs-system-instructions.md` to reflect new routing logic
3. **Sync with extension context** — Ensure changes align with `GEMINI.md` at the repository root

### Understanding the Blueprint

- **`extension-blueprint.md`** defines the overall integration architecture
  - Explains the relationship between Gemini CLI, MCP server, and skills
  - Documents the intent routing model
  - Describes how skills are discovered and invoked

- **`skill-routing-map.md`** provides a concrete mapping of user intents to skills
  - Use this as a reference when configuring Gemini's routing behavior
  - Update when adding new SolidJS skills to the repository

- **`prompts/solidjs-system-instructions.md`** is the baseline system prompt template
  - Provides SolidJS-specific coding standards and conventions
  - Used as the foundation for skill-specific prompts
  - Keep aligned with `AGENTS.md` at the repository root

### Adding New Skills

When adding a new SolidJS skill to the repository:

1. Create the skill directory under `/skills/`
2. Write the `SKILL.md` file following the established format
3. Update `skill-routing-map.md` with the new skill's trigger conditions
4. Update `GEMINI.md` to include the new skill in the available skills list
5. Test the routing by asking Gemini to perform tasks that should trigger the new skill

## v1 Implementation Notes

- Treat this as a reference implementation contract.
- Keep prompts concise and deterministic.
- Update routing whenever new SolidJS skills are added.
