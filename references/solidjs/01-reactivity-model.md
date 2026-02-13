# Reactivity Model

## Core mental model

- **Signals are the source of truth** (`createSignal`). Reading a signal tracks dependency.
- **Memos derive values** (`createMemo`) and cache until dependencies change.
- **Effects run side effects** (`createEffect`) when tracked dependencies update.
- **Updates are fine-grained**: only consumers of changed signals re-run.

## Signals

```ts
const [count, setCount] = createSignal(0)
const increment = () => setCount(c => c + 1)
```

- Use function updates (`setCount(c => c + 1)`) to avoid stale reads.
- Keep signal values minimal; derive complex values in memos.

## Memos

```ts
const doubled = createMemo(() => count() * 2)
```

- Use memos for derived state used in multiple places.
- Avoid writing to signals from inside memos (keeps derivations pure).

## Effects

```ts
createEffect(() => {
  console.log('count changed:', count())
})
```

- Effects should handle I/O, logging, subscriptions, interop.
- Prefer `onCleanup` for teardown when effects create resources.

## Batching

```ts
batch(() => {
  setFirstName('Ada')
  setLastName('Lovelace')
})
```

- Use `batch` when multiple writes should trigger one downstream recomputation wave.

## Untracking

```ts
createEffect(() => {
  const id = userId()         // tracked
  const token = untrack(auth) // not tracked
  fetchUser(id, token)
})
```

- `untrack` reads reactive values without subscribing current computation.
- Useful when a read is needed *now* but should not trigger re-runs.

## Common pitfalls

- Reading signals outside a reactive scope and expecting updates.
- Putting expensive derivation logic in effects instead of memos.
- Overusing `untrack` and accidentally making updates non-reactive.
