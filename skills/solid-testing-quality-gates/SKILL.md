---
name: solid-testing-quality-gates
description: "Define and enforce SolidJS testing and quality gates with deterministic pass/fail criteria. Use when specifying validation strategy for components, routing, SSR, and regressions."
outputs:
  schema: ../../skills/contracts/domain-guidance-output.schema.json
  format: test-gate-plan
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs/review-checklist.md
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-testing-quality-gates
  - node tools/scripts/validate-solid-corpus.mjs
---

# solid-testing-quality-gates

## Trigger

Use when defining validation strategy, acceptance checks, and CI quality gates for SolidJS work.

## Required Inputs

- Change scope (component, routing, server runtime, metadata, hydration).
- Risk profile and regression tolerance.
- Required commands and environment constraints.

## Workflow

1. Map change scope to deterministic test/check categories.
2. Define minimum validation commands and pass/fail criteria.
3. Include SSR/hydration and accessibility checks when relevant.
4. Provide handoff checklist to macro skill and CI pipeline.

## Failure Modes

- Validation plan without pass/fail criteria: invalid.
- Missing command list: fail until commands are explicit.
- High-risk change without regression checks: fail output.

## Output Contract

Return `DomainGuidanceOutput` with quality-gate decisions, handoff actions, validation commands, and `citations` with `doc_id`.

## Validation

- `node tools/scripts/validate-skills.mjs --skill solid-testing-quality-gates`
- `node tools/scripts/validate-solid-corpus.mjs`

## Key Corpus References

Use these `doc_id` values with the `read_corpus_doc` MCP tool:

- `solid-core.guides.testing` — SolidJS testing patterns and setup
- `solid-core.reference.rendering.render-to-string` — SSR output for test assertions
- `solid-router.solid-router.data-fetching.how-to.handle-error-and-loading-states` — error state testing
- `solid-core.reference.rendering.render` — client render for component tests
- `solid-core.reference.rendering.dev` — DEV mode for catching hydration warnings

## References

- `../../references/solidjs/review-checklist.md`
- `../../references/solidjs-normalized/docs/guides/testing.md`
- `../../references/solidjs-normalized/docs/solid-router/data-fetching/how-to/handle-error-and-loading-states.md`
- `../../references/solidjs-normalized/docs/reference/rendering/render-to-string.md`
- `../../references/solidjs-normalized/manifest.jsonl`
