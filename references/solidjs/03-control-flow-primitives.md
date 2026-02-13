# Control Flow Primitives

## `<Show>`

Use for conditional rendering.

```tsx
<Show when={user()} fallback={<LoginPrompt />}>
  <Dashboard user={user()!} />
</Show>
```

- `when` should be cheap and clear.
- Use `fallback` instead of ternaries for larger branches.

## `<For>`

Use for list rendering with keyed behavior.

```tsx
<For each={todos()}>{todo => <TodoRow todo={todo} />}</For>
```

- Prefer stable item identity (`id`) in list data.
- Keep child computations localized per row.

## `<Switch>` + `<Match>`

Use for multi-branch conditions.

```tsx
<Switch fallback={<NotFound />}>
  <Match when={route() === 'home'}><Home /></Match>
  <Match when={route() === 'settings'}><Settings /></Match>
</Switch>
```

- Better readability than nested `<Show>`/ternaries for many branches.

## Selection guide

- One true/false branch: `<Show>`.
- Collection rendering: `<For>`.
- 3+ exclusive branches: `<Switch>/<Match>`.
