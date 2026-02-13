# Pattern Selection Matrix

| Driver | Prefer | Avoid |
|---|---|---|
| Local UI state clarity | Component-local signals | Global store by default |
| Shared cross-feature state | Context/store with clear boundaries | Prop drilling across many layers |
| Expensive derived values | Memoized derivations | Recompute per render branch |
| Complex async orchestration | Resource-based separation + explicit status | Ad-hoc effect chains |
