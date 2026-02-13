---
name: solid-refactor-assistant
description: "Refactor SolidJS code safely with behavior parity, clearer reactive boundaries, and reduced complexity. Use when reorganizing components, stores, and reactive logic without changing product intent."
---

# Solid Refactor Assistant

Refactor SolidJS code with deterministic safety checks and explicit non-goals.

## Trigger Conditions

Use this skill when the user asks to:
- Improve readability/maintainability of existing Solid files.
- Split large components/composables into smaller units.
- Remove anti-patterns or dead code while preserving behavior.
- Standardize reactive logic and state ownership.

Do **not** use for greenfield component creation or full project scaffolding.

## Input Contract (Required)

Require:
1. `target_files`
2. `refactor_goal` (complexity, naming, separation, performance)
3. `non_goals` (what must not change)
4. `behavioral_invariants` (UI/output/interaction that must remain)
5. `risk_tolerance` (`low`, `medium`, `high`)

If invariants are absent, infer from existing behavior and mark assumptions.

## Output Contract (Required)

Return:
1. Refactor plan (ordered steps).
2. Applied changes with before/after rationale.
3. Risk report listing touched invariants.
4. Verification checklist outcomes.

## Deterministic Checklist

1. Preserve public props/events and exported symbols unless approved.
2. Keep reactive dependencies explicit and localized.
3. Remove unused imports, signals, and helper functions.
4. Reduce nesting/branch complexity where possible.
5. Keep naming consistent with existing codebase conventions.
6. Re-run checks/tests and report deltas.

## Failure Modes

- **No measurable refactor goal**: block and request concrete target.
- **Invariant conflicts with requested change**: prioritize invariants and report blocked items.
- **High-risk file coupling discovered**: downscope to safe subset and report deferred work.
- **Behavior parity unverified**: mark as incomplete; do not claim safe refactor.

## References

Load only when needed:
- `references/refactor-strategy-matrix.md` for choosing safe refactor shape.
- `references/solid-reactivity-smells.md` for common Solid anti-patterns.
