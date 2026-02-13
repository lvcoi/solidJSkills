---
name: solid-refactor-assistant
description: Plan and execute safe SolidJS refactors with low-regression sequencing and explicit reactivity validation. Use when changing component boundaries, state shape, props interfaces, or rendering patterns in existing SolidJS code.
---

# solid-refactor-assistant

## Workflow

1. Identify current behavior and invariants to preserve.
2. Propose an ordered refactor sequence with rollback-safe increments.
3. Apply transformations while preserving SolidJS reactivity semantics.
4. Validate with `../../references/solidjs/reactivity-core.md` and `../../references/solidjs/performance-ssr.md`.
5. Output a regression checklist and recommended verification commands.

## Usage Example

**Example prompt that triggers this skill:**

> "Refactor this component to use createResource instead of manual fetch in createEffect"

**Expected output format:**

1. **Ordered refactor plan** with numbered steps:
   - Step 1: Extract fetch logic into a fetcher function
   - Step 2: Replace `createEffect` + `createSignal` with `createResource`
   - Step 3: Update component to handle `resource.loading` and `resource.error`
   - Step 4: Remove manual loading state signals

2. **Code patches** for each step with clear before/after examples

3. **Regression checklist:**
   - [ ] Data fetching triggers on same conditions as before
   - [ ] Loading state displays correctly
   - [ ] Error handling preserves previous behavior
   - [ ] Component unmount cancels pending fetches
   - [ ] SSR hydration works (if applicable)

4. **Verification commands:**
   ```bash
   npm run test -- ComponentName.test.tsx
   npm run build
   ```

**Relationship to reference docs:**
- Follows reactivity patterns from `references/solidjs/reactivity-core.md`
- Validates against SSR considerations in `references/solidjs/performance-ssr.md`
- Aligns with async patterns in `references/solidjs/async-data.md`

**Note:** This is an **agent-facing skill definition** that guides safe, incremental refactoring of SolidJS code.
