# Performance and SSR/Hydration

## Performance checklist

- [ ] No `createEffect` used where `createMemo` suffices.
- [ ] `batch` wraps multi-signal updates to prevent intermediate renders.
- [ ] `<For>` used for keyed object lists; `<Index>` for primitive lists.
- [ ] `lazy()` applied at route/feature boundaries for code splitting.
- [ ] Large lists use virtual scrolling or pagination, not unbounded `<For>`.
- [ ] `untrack` used where reads are intentionally non-reactive.

## SSR/hydration checklist

- [ ] Initial render output is identical on server and client.
- [ ] Browser-only APIs (`window`, `document`, `localStorage`) guarded by `isServer` or `onMount`.
- [ ] `<Suspense>` boundaries placed around every `createResource`.
- [ ] `<HydrationScript>` included in the HTML head for streaming SSR.
- [ ] No conditional rendering differences between SSR and client (mismatch = broken hydration).

## Key SSR APIs

| API | Purpose |
| --- | --- |
| `renderToString(fn)` | Synchronous SSR for simple pages |
| `renderToStringAsync(fn)` | Waits for all resources before returning HTML |
| `renderToStream(fn)` | Streaming SSR with Suspense-aware progressive rendering |
| `isServer` | Boolean constant — tree-shaken in client builds |
| `hydrate(fn, el)` | Attach client reactivity to server-rendered DOM |
| `<HydrationScript>` | Injects hydration bootstrapper into HTML |

## Common pitfalls

- Using `renderToString` with resources causes empty output — use async or streaming variant.
- Accessing `window` at top-level of a module breaks SSR even if the component is client-only.
- Hydration mismatches are silent in production — test with `DEV` mode enabled.

## Corpus references

- `solid-core.reference.rendering.render-to-string`
- `solid-core.reference.rendering.render-to-string-async`
- `solid-core.reference.rendering.render-to-stream`
- `solid-core.reference.rendering.hydrate`
- `solid-core.reference.rendering.hydration-script`
- `solid-core.reference.rendering.is-server`
- `solid-core.reference.component-apis.lazy`
