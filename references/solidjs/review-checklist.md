# SolidJS Review Checklist

## Reactivity

- [ ] Primitives chosen intentionally (`createSignal` vs `createMemo` vs `createEffect`).
- [ ] No `createEffect` used as a derivation when `createMemo` would suffice.
- [ ] `batch` used when multiple signals are updated together.
- [ ] `untrack` applied where reactive reads should not create subscriptions.
- [ ] No props destructuring that would break reactivity.

## Control flow

- [ ] `<Show>`, `<For>`, `<Switch>/<Match>` used over ternaries and `.map()`.
- [ ] `<For>` for keyed objects, `<Index>` for primitive arrays.
- [ ] All `fallback` props provided on conditional/list components.

## Async and data

- [ ] Every `createResource` wrapped in `<Suspense>` with a fallback.
- [ ] Error boundaries placed around async regions.
- [ ] All four states handled: loading, success, empty, error.
- [ ] `mutate`/`refetch` used correctly for optimistic updates.

## Component design

- [ ] Props interface typed and documented.
- [ ] State ownership clearly defined (local, lifted, or context).
- [ ] `splitProps`/`mergeProps` used instead of spreading or destructuring.
- [ ] Components are focused — no mega-components with unrelated concerns.

## Accessibility

- [ ] Semantic HTML elements used (`button`, `nav`, `main`, etc.).
- [ ] Interactive elements reachable via keyboard.
- [ ] ARIA attributes used where native semantics are insufficient.
- [ ] Dynamic content changes announced to screen readers.

## SSR/hydration

- [ ] Server and client initial renders produce identical output.
- [ ] Browser-only APIs guarded by `isServer` or `onMount`.
- [ ] `<HydrationScript>` included when using streaming SSR.
- [ ] Tested with `DEV` mode to catch hydration mismatch warnings.

## Validation commands

```bash
node tools/scripts/validate-skills.mjs
node tools/scripts/validate-solid-corpus.mjs
node tools/scripts/validate-output-contracts.mjs
```
