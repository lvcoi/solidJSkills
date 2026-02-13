# Solid Rendering Checklist

1. Prefer `<Show>` over ternaries for non-trivial conditional branches.
2. Prefer `<For>` for list rendering with stable item keys when available.
3. Keep `createSignal` near usage; avoid global mutable state in component files.
4. Derive values with `createMemo` only when recomputation cost/clarity justifies it.
5. Avoid React-only patterns (`useEffect`, `setState` semantics).
