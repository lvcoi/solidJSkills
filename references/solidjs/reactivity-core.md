# SolidJS Reactivity Core

## Key primitives

| Primitive | Signature | Purpose |
| --- | --- | --- |
| `createSignal` | `createSignal(init, opts?)` → `[get, set]` | Local reactive state |
| `createMemo` | `createMemo(fn, init?, opts?)` → `get` | Cached derivation, recomputes only when deps change |
| `createEffect` | `createEffect(fn)` | Side effect that tracks deps automatically |
| `createResource` | `createResource(source, fetcher, opts?)` → `[data, {mutate, refetch}]` | Async data tied to reactive source |
| `batch` | `batch(fn)` | Group updates into one flush |
| `untrack` | `untrack(fn)` | Read reactive values without tracking |
| `on` | `on(deps, fn, opts?)` | Explicit dependency declaration for effects/memos |

## Decision rules

1. **Pure derivation** → `createMemo`, never `createEffect` with a setter.
2. **Side effect** (DOM mutation, logging, network) → `createEffect`.
3. **Async data** → `createResource`; wrap in `<Suspense>` for UX.
4. **Grouped updates** → `batch` when multiple signals update together.
5. **Break tracking** → `untrack` to read without subscribing.

## Common pitfalls

- Using `createEffect` to derive state instead of `createMemo` causes unnecessary reruns.
- Forgetting `batch` when updating several signals produces intermediate renders.
- Nested effects can create ownership leaks — prefer flat reactive graphs.

## Corpus references

- `solid-core.reference.basic-reactivity.create-signal`
- `solid-core.reference.basic-reactivity.create-effect`
- `solid-core.reference.basic-reactivity.create-memo`
- `solid-core.reference.basic-reactivity.create-resource`
- `solid-core.reference.reactive-utilities.batch`
- `solid-core.reference.reactive-utilities.untrack`
- `solid-core.reference.reactive-utilities.on-util`
