# solidJSkills

A SolidJS-first repository for deterministic agent skills, references, and tooling.

## Mission

Provide a practical operating system for SolidJS engineering work with strict contracts:

1. Build high-quality SolidJS components.
2. Refactor safely with explicit invariants.
3. Review changes with prioritized findings.
4. Scaffold projects with predictable defaults.
5. Route intent consistently across Solid core, Router, SolidStart, and solid-meta.

Blueprint:

- `guides/solidjs-v2-blueprint.md`

## v2 Architecture

### Macro skills

- `skills/solid-component-builder/`
- `skills/solid-refactor-assistant/`
- `skills/solid-reviewer/`
- `skills/solid-scaffold-bootstrap/`
- `skills/solid-design-patterns/`

### Router + domain subskills

- `skills/solid-intent-router/`
- `skills/solid-reactivity-core-expert/`
- `skills/solid-control-flow-rendering/`
- `skills/solid-state-architecture/`
- `skills/solid-router-data-navigation/`
- `skills/solid-start-server-runtime/`
- `skills/solid-ssr-hydration-debugger/`
- `skills/solid-meta-head-management/`
- `skills/solid-testing-quality-gates/`

### Contracts and validation

- Skill contract schema: `tools/schemas/skill-contract.schema.json`
- Output schemas: `skills/contracts/*.schema.json`
- Skill validator: `tools/scripts/validate-skills.mjs`
- Contract validator: `tools/scripts/validate-output-contracts.mjs`

### Corpus pipeline

- Raw source (optional local source): `solidJSdocs/` (not committed)
- Normalized corpus (source of truth): `references/solidjs-normalized/docs/`
- Manifest: `references/solidjs-normalized/manifest.jsonl`
- Taxonomy: `references/solidjs-normalized/taxonomy.json`
- Normalizer: `tools/scripts/normalize-solid-docs.mjs`
- Corpus validator: `tools/scripts/validate-solid-corpus.mjs`

## Quality commands

Run from repo root:

```bash
node tools/scripts/normalize-solid-docs.mjs --check
node tools/scripts/validate-solid-corpus.mjs
node tools/scripts/validate-skills.mjs
node tools/scripts/validate-output-contracts.mjs
node tools/scripts/run-smoke-evals.mjs
```

## MCP alignment

- MCP server: `mcp-server/src/index.js`
- Routing map: `tools/gemini-mcp-extension/skill-routing-map.md`
- System prompt template: `tools/gemini-mcp-extension/prompts/solidjs-system-instructions.md`

## Legacy note

Non-Solid meta skills remain in `skills/` for repository maintenance tasks, but SolidJS v2 skills and corpus tooling are the default operating path.
