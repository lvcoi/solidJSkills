# SolidJS Control Flow

## Primitive decision table

| Primitive | Use when | Key behavior |
|---|---|---|
| `<Show when={} fallback={}>` | Single boolean condition | Mounts/unmounts children; avoids falsy-path rendering |
| `<For each={} fallback={}>` | List with stable identity per item | Keyed by reference — updates items in place |
| `<Index each={} fallback={}>` | List keyed by index position | Recreates items when position changes; better for primitives |
| `<Switch>/<Match>` | Multi-branch conditions | First matching `<Match>` renders; replaces deep ternary nests |
| `<Suspense fallback={}>` | Async child content | Shows fallback while `createResource` resolves |
| `<ErrorBoundary fallback={}>` | Error containment | Catches thrown errors in child tree |
| `<Portal mount={}>` | Render outside DOM parent | Modals, tooltips, overlays |
| `<Dynamic component={}>` | Polymorphic rendering | Swaps rendered component by signal value |

## Decision rules

1. **Single condition** → `<Show>`. Never use `{cond && <X/>}` (evaluates both branches).
2. **List of objects** → `<For>`. Use `<Index>` only for primitive arrays.
3. **2+ exclusive branches** → `<Switch>/<Match>` over nested `<Show>`.
4. **Async data boundary** → wrap in `<Suspense>` with a meaningful fallback.
5. **Error boundary** → place `<ErrorBoundary>` around each async region.

## Common pitfalls

- Using ternaries instead of `<Show>` loses fine-grained reactivity.
- `<For>` with primitive arrays causes full list re-render — use `<Index>`.
- Missing `fallback` on `<Suspense>` leaves a blank flash during loading.

## Corpus references

- `solid-core.reference.components.show`
- `solid-core.reference.components.for`
- `solid-core.reference.components.index-component`
- `solid-core.reference.components.switch-and-match`
- `solid-core.reference.components.suspense`
- `solid-core.reference.components.error-boundary`
- `solid-core.reference.components.portal`
- `solid-core.reference.components.dynamic`
