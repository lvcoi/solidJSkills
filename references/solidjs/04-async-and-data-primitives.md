# Async and Data Primitives

## `createResource`

```tsx
const [user] = createResource(userId, fetchUser)
```

- Source signal (`userId`) triggers refetch.
- Track status with `user.loading`, `user.error`, and value via `user()`.
- Keep fetchers deterministic and side-effect focused.

## Suspense

```tsx
<Suspense fallback={<Spinner />}>
  <UserProfile user={user()} />
</Suspense>
```

- Wrap UI that depends on resources.
- Keep fallback lightweight and layout-stable.

## Transitions

```ts
const [pending, start] = useTransition()
start(() => setQuery(nextQuery))
```

- Use transitions for non-urgent updates (search/filter/navigation-like updates).
- Show subtle pending states to avoid jank.

## Practical guidance

- Co-locate resource creation near feature boundaries.
- Avoid duplicate resource requests; share resources via context where useful.
- Use route-level data loaders when routing library supports it.
