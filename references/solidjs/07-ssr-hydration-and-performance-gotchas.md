# SSR, Hydration, and Performance Gotchas

## SSR/hydration alignment

- Ensure server-rendered markup matches client expectations exactly.
- Avoid environment-specific branches in initial render output unless guarded carefully.
- Keep random/time-dependent values stable across server + client on first paint.

## Data during SSR

- Prefer SSR-aware data loading paths when framework supports them.
- Avoid waterfalls caused by deeply nested async dependencies.
- Use suspense boundaries intentionally to stream progressive UI.

## Performance gotchas

- Creating too many broad effects can cause avoidable recomputations.
- Expensive derived calculations belong in memos.
- Overly large reactive objects can reduce clarity and tuning control.

## Optimization checklist

- Minimize tracked dependencies inside effects.
- Split components when reactive scopes become too broad.
- Batch related updates.
- Profile before introducing non-obvious optimizations.
