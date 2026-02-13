# Solid Reactivity Smells

- Signal created but never read.
- `createEffect` used for derivation that should be `createMemo`.
- Mutating objects in place without notifying dependents.
- Large components mixing data-fetching and deep rendering branches.
- Hidden dependencies captured in closures causing stale reads.
