# Component Patterns

## Component contract checklist

Every SolidJS component should declare:

1. **Props interface** — typed, with documented defaults.
2. **State ownership** — which signals/stores live here vs. received via props/context.
3. **Reactive boundaries** — where memos derive, where effects fire.
4. **Render states** — loading, error, empty, success (when async data is present).
5. **SSR safety** — any browser-only code guarded by `isServer` or `onMount`.

## Preferred patterns

| Pattern | When to use |
|---|---|
| Props spreading with `splitProps` | Forwarding subsets of props to children without breaking reactivity |
| `mergeProps` for defaults | Setting default values while preserving prop reactivity |
| Render props / `children` helper | Building composable wrapper components |
| `lazy(() => import(...))` | Code-splitting at component boundaries |

## Anti-patterns

- **Mega-components** — split when a component owns more than 3 unrelated signals.
- **Hidden side effects in render** — effects that fire during initial JSX evaluation.
- **Destructuring props** — breaks reactivity; use `props.x` or `splitProps`.
- **Nested effects for derived state** — use `createMemo` instead.

## Corpus references

- `solid-core.concepts.components`
- `solid-core.concepts.props`
- `solid-core.reference.component-apis.children`
- `solid-core.reference.component-apis.lazy`
- `solid-core.reference.reactive-utilities.merge-props`
- `solid-core.reference.reactive-utilities.split-props`
