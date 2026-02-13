---
name: solid-refactor-assistant
description: Plan and execute safe SolidJS refactors with low-regression sequencing and explicit reactivity validation. Use when changing component boundaries, state shape, props interfaces, or rendering patterns in existing SolidJS code.
---

# solid-refactor-assistant

1. Identify current behavior and invariants to preserve.
2. Propose an ordered refactor sequence with rollback-safe increments.
3. Apply transformations while preserving SolidJS reactivity semantics.
4. Validate with `../../references/solidjs/reactivity-core.md` and `../../references/solidjs/performance-ssr.md`.
5. Output a regression checklist and recommended verification commands.
