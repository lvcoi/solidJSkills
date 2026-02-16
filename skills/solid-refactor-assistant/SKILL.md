---
name: solid-refactor-assistant
description: "Plan and execute SolidJS refactors with explicit invariants, rollback-safe sequencing, and citation-backed verification. Use when changing boundaries, state shape, rendering flow, or public props interfaces."
outputs:
  schema: ../../skills/contracts/refactor-plan-output.schema.json
  format: ordered-refactor-plan-plus-regression-checklist
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs-normalized/taxonomy.json
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-refactor-assistant
  - node tools/scripts/validate-output-contracts.mjs
---

# solid-refactor-assistant

## Trigger
Use this skill when existing SolidJS code needs structural or behavioral changes with low regression tolerance.

## Required Inputs
- Current behavior and invariants to preserve.
- Refactor objective and non-goals.
- Public interfaces that cannot break (props/events/routes/contracts).
- Validation surface: tests, manual scenarios, and performance constraints.

## Workflow
1. Capture baseline invariants as pass/fail statements.
2. Break refactor into rollback-safe increments; each step must be independently verifiable.
3. Preserve reactivity semantics: avoid effect-driven derivations and accidental dependency widening.
4. Flag API changes and provide compatibility branch (adapter/deprecation note) when needed.
5. Include targeted SSR/hydration and async-state checks where rendering paths changed.
6. Output regression checklist and command sequence aligned to touched scope.

## Failure Modes
- Invariants undefined: fail early and request explicit invariant list.
- Multi-axis refactor in one step: split into smaller ordered steps.
- Missing rollback path: output is invalid until rollback instructions exist.
- Refactor touches async/render logic without state matrix: add matrix before finalizing.

## Output Contract
Return output matching `RefactorPlanOutput` schema at `../../skills/contracts/refactor-plan-output.schema.json` with:
- `summary`, `invariants`, `stepwise_plan`, `risk_controls`, and `rollback_strategy`.
- `verification_checklist`, `validation_commands`.
- `citations`: each claim must cite normalized `doc_id` entries.

## Validation
- `node tools/scripts/validate-skills.mjs --skill solid-refactor-assistant`
- `node tools/scripts/validate-output-contracts.mjs`

## References
- `../../references/solidjs-normalized/manifest.jsonl`
- `../../references/solidjs-normalized/taxonomy.json`
- `../../references/solidjs/reactivity-core.md`
- `../../references/solidjs/performance-ssr.md`
- `../../references/solidjs/async-data.md`
