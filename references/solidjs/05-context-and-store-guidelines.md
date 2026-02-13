# Context and Store Usage Guidelines

## Context

Use context for cross-cutting dependencies (auth, theme, app services), not for every shared value.

```tsx
const AuthContext = createContext<AuthState>()
export const useAuth = () => useContext(AuthContext)!
```

Guidelines:

- Expose **small, stable API surfaces** from providers.
- Prefer custom hooks/helpers (`useAuth`) over direct `useContext` calls everywhere.
- Keep providers near app roots or feature roots.

## Stores (`createStore`)

Use stores for nested/object state requiring ergonomic partial updates.

```ts
const [state, setState] = createStore({ user: { name: '', role: 'guest' } })
setState('user', 'name', 'Ada')
```

Guidelines:

- Prefer signals for primitive/independent values.
- Use stores when state is nested and patch-like updates improve clarity.
- Avoid mixing multiple state models in same feature without clear reason.

## Mutability expectations

- Treat state as immutable from consumer side.
- Update through `setState`/signal setters only.
- Avoid direct object mutation (`state.user.name = ...`).
