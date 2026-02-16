# SolidJS Async and Data Loading

## Core primitives

| Primitive | Signature | Purpose |
|---|---|---|
| `createResource` | `createResource(source, fetcher, opts?)` → `[data, {mutate, refetch}]` | Async data tied to reactive source signal |
| `<Suspense>` | `<Suspense fallback={<Loading/>}>` | Shows fallback while resources resolve |
| `<SuspenseList>` | `<SuspenseList revealOrder="forwards">` | Coordinates reveal order of multiple Suspense boundaries |
| `startTransition` | `startTransition(fn)` | Defers UI update until async work completes |
| `useTransition` | `useTransition()` → `[pending, start]` | Like `startTransition` with a `pending` signal for UX feedback |

## Required rendering states

Every async boundary must declare all four states:

1. **Loading** — `<Suspense fallback={}>` or resource `.loading` check.
2. **Success** — render the resolved data.
3. **Empty** — handle `data()` resolving to `[]` or `null`.
4. **Error** — `<ErrorBoundary>` or resource `.error` check.

## Data flow patterns

- **Local resource** — `createResource` inside the component that consumes it.
- **Shared resource** — lift into context or pass as prop; avoid duplicate fetches.
- **Optimistic update** — use `mutate()` for instant UI, `refetch()` after server confirms.
- **Streaming** — in SolidStart, resources auto-stream during SSR via `<Suspense>`.

## Common pitfalls

- Forgetting `<Suspense>` above a `createResource` causes unhandled promise behavior.
- Calling `.refetch()` without reactivity tracking won't trigger dependent effects.
- Nested resources without coordinating `<SuspenseList>` causes layout thrash.

## Corpus references

- `solid-core.reference.basic-reactivity.create-resource`
- `solid-core.reference.components.suspense`
- `solid-core.reference.components.suspense-list`
- `solid-core.reference.reactive-utilities.start-transition`
- `solid-core.concepts.derived-signals.async-derivations`
- `solid-core.guides.fetching-data`
