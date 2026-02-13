---
name: solid-design-patterns
description: "Apply SolidJS-specific design patterns for state, composition, data flow, and UI architecture. Use when selecting or implementing maintainable patterns across Solid components and modules."
---

# Solid Design Patterns

Select and apply Solid-native patterns with explicit tradeoffs.

## Trigger Conditions

Use this skill when the user asks to:
- Choose architecture or composition patterns for Solid features.
- Standardize state and data-flow approaches across components.
- Compare alternatives and justify one pattern for a use case.

Do **not** use for one-off bug fixes with no architectural impact.

## Input Contract (Required)

Require:
1. `problem_statement`
2. `current_constraints` (team size, performance, SSR, etc.)
3. `scope` (single component, feature module, app-wide)
4. `decision_drivers` (readability, performance, testability, velocity)
5. `forbidden_patterns` (optional)

If decision drivers are missing, assume readability + correctness and state that.

## Output Contract (Required)

Return:
1. Recommended pattern with concise rationale.
2. Rejected alternatives with reason.
3. Implementation sketch (files or pseudocode-level steps).
4. Adoption checklist and rollback criteria.

## Deterministic Checklist

1. Map each recommendation to at least one decision driver.
2. Prefer Solid-native primitives over framework-transplanted patterns.
3. Define state ownership boundaries and update pathways.
4. Clarify scaling behavior under increased complexity.
5. Include migration/rollback path for existing code.

## Failure Modes

- **No concrete constraints**: provide two bounded options, mark provisional decision.
- **Pattern mismatch to scope**: downscope recommendation and flag architectural debt.
- **Unclear ownership boundaries**: block final recommendation until boundaries are defined.
- **Tradeoffs omitted**: incomplete result; must include downside analysis.

## References

Load only when needed:
- `references/pattern-selection-matrix.md` for decision mapping.
- `references/solid-pattern-catalog.md` for concise pattern definitions.
