# Stores and Context

## State scope decision table

| Scope | Primitive | When to use |
|---|---|---|
| Component-local | `createSignal` | Simple, isolated values (toggles, counters, form fields) |
| Structured local | `createStore` | Nested objects/arrays where you need path-level reactivity |
| Subtree-shared | `createContext` + `useContext` | Cross-component data without prop drilling |
| Mutable escape hatch | `createMutable` | Interop with imperative libraries (rare; prefer `createStore`) |

## Store APIs

| API | Purpose |
|---|---|
| `createStore(init)` → `[store, setStore]` | Immutable-style nested reactive state |
| `produce(fn)` | Immer-like mutation syntax for store updates |
| `reconcile(data)` | Replace store subtree while preserving identity for unchanged parts |
| `unwrap(store)` | Get underlying plain object (for serialization, not for reactivity) |
| `modifyMutable(mutable, fn)` | Batch updates on mutable stores |

## Context patterns

1. **Define** — `const Ctx = createContext(defaultValue)`.
2. **Provide** — `<Ctx.Provider value={...}>`.
3. **Consume** — `useContext(Ctx)` inside any descendant.
4. **Document boundary** — always note which subtree the provider wraps.

## Common pitfalls

- Overusing context for local state creates hidden coupling and makes testing harder.
- Forgetting `reconcile` when replacing store data causes full subtree re-render.
- Destructuring store values breaks reactivity — access paths directly.

## Corpus references

- `solid-core.reference.store-utilities.create-store`
- `solid-core.reference.store-utilities.produce`
- `solid-core.reference.store-utilities.reconcile`
- `solid-core.reference.store-utilities.create-mutable`
- `solid-core.reference.store-utilities.unwrap`
- `solid-core.reference.component-apis.create-context`
- `solid-core.reference.component-apis.use-context`
