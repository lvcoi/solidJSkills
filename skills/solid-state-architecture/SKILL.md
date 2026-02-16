---
name: solid-state-architecture
description: "Define SolidJS state ownership across signals, stores, and context with explicit coupling boundaries. Use for shared-state and context architecture decisions."
outputs:
  schema: ../../skills/contracts/domain-guidance-output.schema.json
  format: state-architecture-guidance
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs/stores-context.md
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-state-architecture
  - node tools/scripts/validate-solid-corpus.mjs
---

# solid-state-architecture

## Trigger

Use when deciding local vs shared state, context boundaries, store shape, and update pathways.

## Required Inputs

- Domain entities and update paths.
- Component tree boundaries.
- Cross-tree dependency requirements.

## Workflow

1. Assign state scope: local signal, structured store, or context provider.
2. Document provider boundaries and mutation pathways.
3. Identify hidden coupling risks and propose boundary refactors.
4. Hand off explicit ownership map to macro skill.

## Failure Modes

- Context used as default for local state: mark anti-pattern and propose local alternative.
- Store updates without explicit mutation path: fail until path is listed.
- Shared state without consumer boundaries: require boundary map.

## Output Contract

Return `DomainGuidanceOutput` with scope decisions, handoff actions, and citations with `doc_id`.

## Validation

- `node tools/scripts/validate-skills.mjs --skill solid-state-architecture`
- `node tools/scripts/validate-solid-corpus.mjs`

## References

- `../../references/solidjs/stores-context.md`
- `../../references/solidjs-normalized/docs/concepts/stores.md`
- `../../references/solidjs-normalized/docs/reference/store-utilities/create-store.md`
- `../../references/solidjs-normalized/docs/reference/component-apis/create-context.md`
