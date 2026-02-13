# Do / Don’t Examples

## 1) Derive data

**Do** use `createMemo` for reusable derived values.

```ts
const filtered = createMemo(() => items().filter(i => i.done))
```

**Don’t** recompute heavy derivations in multiple JSX expressions.

```tsx
// Avoid repeated expensive filter calls in view
<div>{items().filter(i => i.done).length}</div>
```

## 2) Update from previous state

**Do** use functional setters.

```ts
setCount(c => c + 1)
```

**Don’t** depend on closed-over stale value in async flows.

```ts
setTimeout(() => setCount(count() + 1), 100)
```

## 3) Conditional rendering

**Do** use `<Show>` for readable branches.

```tsx
<Show when={user()} fallback={<LoginPrompt />}>
  <Dashboard />
</Show>
```

**Don’t** stack dense nested ternaries in JSX.

## 4) List rendering

**Do** use `<For each={list()}>`.

```tsx
<For each={todos()}>{todo => <TodoRow todo={todo} />}</For>
```

**Don’t** use array `.map` directly when Solid control flow is clearer and more optimized for reactive updates.

## 5) Cross-tree shared state

**Do** use context + helper hook.

```ts
export const useTheme = () => useContext(ThemeContext)!
```

**Don’t** prop-drill through many intermediary components.
