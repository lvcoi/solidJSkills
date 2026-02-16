---
name: solid-design-patterns
description: "Choose SolidJS architecture patterns with explicit tradeoffs, migration paths, and deterministic recommendation rules. Use when deciding state ownership, rendering/data flow, or boundary design."
outputs:
  schema: ../../skills/contracts/design-decision-output.schema.json
  format: option-matrix-plus-adoption-plan
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs-normalized/taxonomy.json
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-design-patterns
  - node tools/scripts/validate-output-contracts.mjs
---

# solid-design-patterns

## Trigger

Use this skill for architecture decisions where multiple SolidJS patterns are viable and tradeoffs must be explicit.

## Required Inputs

- Problem statement and constraints.
- Performance and SSR/hydration expectations.
- Team maintainability constraints.
- Migration constraints from current architecture.

## Workflow

1. Frame decision boundaries and non-negotiable constraints.
2. Compare 2-3 options with explicit fit/cost profile.
3. Call out anti-patterns and regression risks for each option.
4. Recommend one option with phased adoption path.
5. Include validation commands and measurable acceptance criteria.

## Failure Modes

- Constraint ambiguity: do not recommend until constraints are explicit.
- Single-option output: invalid unless alternatives are infeasible and reason is documented.
- Recommendation without migration path: add phased plan before completion.
- No verification criteria: output fails validation.

## Output Contract

Return output matching `DesignDecisionOutput` schema at `../../skills/contracts/design-decision-output.schema.json` with:

- `decision_statement`, `constraints`, `options`, `recommended_option`.
- `tradeoffs`, `adoption_plan`, `validation_commands`.
- `citations`: each architectural claim must cite normalized `doc_id` and rationale.

## Validation

- `node tools/scripts/validate-skills.mjs --skill solid-design-patterns`
- `node tools/scripts/validate-output-contracts.mjs`

## References

- `../../references/solidjs-normalized/manifest.jsonl`
- `../../references/solidjs-normalized/taxonomy.json`
- `../../references/solidjs/stores-context.md`
- `../../references/solidjs/async-data.md`
- `../../references/solidjs/performance-ssr.md`
