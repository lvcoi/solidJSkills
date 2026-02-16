---
name: solid-router-data-navigation
description: "Apply Solid Router routing, navigation, and data APIs with deterministic loading/error and revalidation behavior. Use for route layout, params, query/action, and navigation flows."
outputs:
  schema: ../../skills/contracts/domain-guidance-output.schema.json
  format: router-guidance-checklist
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs-normalized/taxonomy.json
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-router-data-navigation
  - node tools/scripts/validate-solid-corpus.mjs
---

# solid-router-data-navigation

## Trigger

Use for Solid Router requests involving routes, params/search params, queries/actions, preloading, and navigation semantics.

## Required Inputs

- Route structure and navigation behavior.
- Data loading/mutation expectations.
- Error and revalidation strategy.

## Workflow

1. Resolve route structure and nesting strategy.
2. Choose data APIs (`query`, `action`, `createAsync`, `revalidate`) based on mutation/read flow.
3. Declare loading, pending submission, success, and error states.
4. Provide integration handoff to macro skill and testing checks.

## Failure Modes

- Route param/search ambiguity: require explicit URL contract.
- Data mutation without revalidation policy: add policy before completion.
- Missing error/loading handling: output invalid until state matrix exists.

## Output Contract

Return `DomainGuidanceOutput` with router API decisions, handoff steps, and citations referencing normalized `doc_id` values.

## Validation

- `node tools/scripts/validate-skills.mjs --skill solid-router-data-navigation`
- `node tools/scripts/validate-solid-corpus.mjs`

## References

- `../../references/solidjs-normalized/docs/solid-router/reference/components/router.md`
- `../../references/solidjs-normalized/docs/solid-router/reference/primitives/use-navigate.md`
- `../../references/solidjs-normalized/docs/solid-router/reference/data-apis/query.md`
- `../../references/solidjs-normalized/docs/solid-router/reference/data-apis/action.md`
- `../../references/solidjs-normalized/manifest.jsonl`
