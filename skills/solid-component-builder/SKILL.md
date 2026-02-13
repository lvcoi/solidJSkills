---
name: solid-component-builder
description: "Build production-ready SolidJS components from explicit UI and behavior requirements. Use when creating or extending Solid components, props contracts, styling hooks, and accessibility semantics."
---

# Solid Component Builder

Create focused SolidJS components with deterministic structure and stable public API.

## Trigger Conditions

Use this skill when the user asks to:
- Create a new Solid component (presentational or stateful).
- Add props, slots (`children`), or event callbacks to an existing component.
- Implement accessibility-aware UI behavior in Solid.
- Convert UI requirements into Solid JSX + TypeScript component code.

Do **not** use when the primary request is project bootstrapping, large-scale refactor planning, or architecture review.

## Input Contract (Required)

Collect or infer these fields before coding:
1. `component_name` (PascalCase)
2. `purpose` (1 sentence)
3. `props` (name, type, required/optional, default behavior)
4. `state_and_events` (signals, handlers, derived values)
5. `render_constraints` (conditional branches, lists, empty states)
6. `styling_strategy` (CSS module, utility classes, inline)
7. `a11y_requirements` (labels, roles, keyboard support)

If any required field is missing and cannot be safely inferred, stop and return a blocked response.

## Output Contract (Required)

Return:
1. Final component implementation.
2. Prop contract summary table.
3. Explicit assumptions list.
4. Verification notes mapped to checklist items.

## Deterministic Checklist

1. Validate `component_name` and prop names are consistent.
2. Ensure each prop is used or documented as intentionally unused.
3. Ensure signal usage is minimal and local.
4. Ensure control flow uses Solid primitives (`<Show>`, `<For>`, `<Switch>`) where appropriate.
5. Ensure event handlers are stable and typed.
6. Ensure accessibility attributes/labels match behavior.
7. Ensure output includes no dead imports or placeholder text.

## Failure Modes

- **Ambiguous behavior spec**: refuse to guess interaction semantics.
- **Contradictory prop rules**: ask for precedence or return blocked.
- **Missing accessibility requirement for interactive UI**: mark incomplete and block finalization.
- **Over-coupled component scope**: split into child components and report rationale.

## References

Load only when needed:
- `references/component-contract-template.md` for prop/event contract format.
- `references/solid-rendering-checklist.md` for rendering and reactivity guardrails.
