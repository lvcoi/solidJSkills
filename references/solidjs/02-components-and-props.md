# Components and Props Patterns

## Component shape

- Components are functions that execute once to set up reactive graph.
- JSX expressions re-evaluate through signals/memos, not component re-renders.

```tsx
function Counter(props: { initial?: number }) {
  const [count, setCount] = createSignal(props.initial ?? 0)
  return <button onClick={() => setCount(c => c + 1)}>{count()}</button>
}
```

## Props handling

- Read props directly for normal use.
- Use `splitProps` when passing subsets.
- Use `mergeProps` for defaults.

```tsx
const merged = mergeProps({ size: 'md' }, props)
const [local, rest] = splitProps(merged, ['size', 'children'])
```

## Children and composition

- Use `props.children` for simple passthrough.
- Use `children(() => props.children)` helper if children need memoized access.
- Prefer composition over deeply configurable mega-components.

## Event + data flow

- Keep data ownership close to where it changes.
- Pass callbacks down, signals/memos where read-only behavior is needed.
- Avoid mutating object props in-place; update via setters/stores.

## Pattern recommendations

- **Presentational + container split** for larger components.
- **Controlled component API** when parent owns state.
- **Uncontrolled local state** for internal UI details.
