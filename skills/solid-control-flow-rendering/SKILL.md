---
name: solid-control-flow-rendering
description: "Select and enforce SolidJS control-flow and rendering primitives with explicit branch semantics. Use for conditional/list rendering, suspense boundaries, and dynamic rendering choices."
outputs:
  schema: ../../skills/contracts/domain-guidance-output.schema.json
  format: rendering-guidance-checklist
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs/control-flow.md
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-control-flow-rendering
  - node tools/scripts/validate-solid-corpus.mjs
---

# solid-control-flow-rendering

## Trigger

Use when deciding between `<Show>`, `<For>`, `<Index>`, `<Switch>/<Match>`, `<Suspense>`, and related rendering primitives.

## Required Inputs

- Branching conditions and list identity expectations.
- Async rendering expectations.
- SSR/hydration and accessibility constraints.

## Workflow

1. Map each branch/list requirement to a specific control-flow primitive.
2. Declare fallback rendering for loading and empty states.
3. Validate list key/identity assumptions and update behavior.
4. Provide handoff notes for macro skill implementation or review.

## Failure Modes

- Ternary nesting for multi-branch logic: replace with `Switch/Match` guidance.
- List identity ambiguity: block completion until key semantics are clear.
- Async branch without fallback: add explicit fallback path.

## Output Contract

Return `DomainGuidanceOutput` with primitive decisions, handoff steps, and citations keyed by `doc_id`.

## Validation

- `node tools/scripts/validate-skills.mjs --skill solid-control-flow-rendering`
- `node tools/scripts/validate-solid-corpus.mjs`

## References

- `../../references/solidjs/control-flow.md`
- `../../references/solidjs-normalized/docs/reference/components/show.md`
- `../../references/solidjs-normalized/docs/reference/components/for.md`
- `../../references/solidjs-normalized/docs/reference/components/switch-and-match.md`
- `../../references/solidjs-normalized/docs/reference/components/suspense.md`
