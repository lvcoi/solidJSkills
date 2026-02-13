# SolidJS Reactivity Core

## Key primitives

- `createSignal`: local reactive state.
- `createMemo`: cached derivation.
- `createEffect`: side effects reacting to dependencies.
- `batch`: group updates to avoid redundant recomputation.
- `untrack`: read without dependency tracking.

## Guidance

- Prefer `createMemo` for pure derivations.
- Use `createEffect` only for side effects.
- Avoid effect-driven state loops when computation can be direct.
