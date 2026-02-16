---
name: solid-component-builder
description: "Build or improve SolidJS components with deterministic reactivity decisions and citation-backed guidance. Use when implementing a component, feature slice, or reusable UI primitive in SolidJS."
outputs:
  schema: ../../skills/contracts/component-build-output.schema.json
  format: markdown-checklist-plus-structured-json
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs-normalized/taxonomy.json
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-component-builder
  - node tools/scripts/validate-output-contracts.mjs
---

# solid-component-builder

## Trigger

Use this skill for new or modified SolidJS components where component contract, reactivity, async behavior, accessibility, and SSR/hydration safety must be explicit.

## Required Inputs

- Component goal and user-facing behavior.
- Prop interface and expected defaults.
- Data dependencies and async boundaries.
- Rendering context (client-only, SSR, or mixed).
- Acceptance constraints (performance, accessibility, test expectations).

## Workflow

1. Define component contract before implementation: props, emitted callbacks, ownership of state, and external dependencies.
2. Choose primitives by rule: pure derivations use `createMemo`; side effects use `createEffect`; async data uses `createResource`; grouped updates use `batch`.
3. Select control-flow primitives explicitly (`<Show>`, `<For>`, `<Switch>/<Match>`) and document why each is used.
4. Declare loading, empty, error, and success rendering states when async data is present.
5. Add SSR/hydration checks for browser-only behavior and deterministic initial render.
6. Produce validation checklist and commands before returning final output.

## Failure Modes

- Missing prop or data contracts: stop and request exact missing input keys.
- Ambiguous state ownership: default to local ownership and document escalation path.
- Missing async states: fail output and add explicit loading/error/empty branches.
- Hydration mismatch risk: require server/client render parity note before completion.

## Output Contract

Return output matching `ComponentBuildOutput` schema at `../../skills/contracts/component-build-output.schema.json` with:

- `summary`, `implementation_plan`, and `component_contract`.
- `reactivity_decisions`, `acceptance_checklist`, and `validation_commands`.
- `citations`: each item must include `doc_id` and `claim` sourced from normalized references.

## Validation

- `node tools/scripts/validate-skills.mjs --skill solid-component-builder`
- `node tools/scripts/validate-output-contracts.mjs`

## References

- `../../references/solidjs-normalized/manifest.jsonl`
- `../../references/solidjs-normalized/taxonomy.json`
- `../../references/solidjs/reactivity-core.md`
- `../../references/solidjs/component-patterns.md`
- `../../references/solidjs/performance-ssr.md`
