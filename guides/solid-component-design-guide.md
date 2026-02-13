# SolidJS Component Design Guide

## Purpose

Design SolidJS components that stay easy to reason about as state, composition, and performance demands grow.

## Decision criteria and tradeoffs

- **Component boundary size**
  - Prefer smaller boundaries when logic can be shared and independently tested.
  - Prefer larger boundaries when splitting would increase prop drilling and coordination overhead.
- **Props vs context vs stores**
  - Start with props for explicit dependencies.
  - Introduce context for deeply shared dependencies within a subtree.
  - Use stores/signals for shared reactive state; avoid global state by default.
- **Presentational vs smart components**
  - Keep UI-only components presentational and data-agnostic.
  - Keep data loading, mutations, and side-effects in smart/container layers.
- **Reactivity granularity**
  - Fine-grained signals minimize rerenders and improve responsiveness.
  - Too many micro-signals can reduce readability if naming and ownership are unclear.
- **Composition strategy**
  - Prefer composition slots/children over flag-based branching for extensibility.
  - Excessive composition layers can make control flow harder to discover.

## Step-by-step workflow

1. **Define responsibilities**
   - Write a 1–2 sentence contract for what the component owns.
2. **Map data flow**
   - Identify inputs, derived state, and output events.
3. **Choose state placement**
   - Place state at the lowest level that needs to own changes.
4. **Design the public API**
   - Keep props minimal, typed, and intention-revealing.
5. **Implement with Solid primitives**
   - Use `createSignal`, `createMemo`, and `createEffect` deliberately.
6. **Split view from behavior**
   - Extract reusable rendering parts and logic helpers where beneficial.
7. **Evaluate render behavior**
   - Confirm reactivity updates only where expected.
8. **Document assumptions**
   - Add comments for non-obvious lifecycle or reactivity decisions.

## Code smells and anti-patterns

- Props with vague names (`data`, `item`, `config`) and unclear shape.
- Components that fetch data, normalize data, and render complex UI all together.
- `createEffect` used for value derivation that should be `createMemo`.
- Hidden coupling to external stores without explicit contract.
- Boolean prop explosions (`isCompact`, `isSimple`, `isCard`, `isInline`) instead of composition.
- Multiple unrelated responsibilities in one component file.

## Validation checklist

- Component has a clear single responsibility.
- Public props are minimal and strongly typed.
- Side-effects are isolated and justified.
- Derived values use `createMemo` instead of imperative mutation.
- Conditional rendering paths are understandable and covered.
- Accessibility semantics (labels, roles, keyboard behavior) are preserved.
- Component can be reused without pulling hidden dependencies.

## Done definition (PR quality)

A PR is done when component boundaries are explicit, reactivity choices are intentional, and the API is easy for another engineer to consume without reverse engineering internal state flow. The PR should include rationale for tradeoffs, evidence that render behavior is predictable, and a concise checklist confirming maintainability and accessibility expectations.
