# AGENTS.md

## Scope
This repository is **SolidJS-first**. All contributor and agent changes should prioritize SolidJS idioms, correctness, and long-term maintainability for SolidJS applications, libraries, skills, and guides.

## SolidJS Coding Standards

### Reactivity correctness
- Prefer `createSignal`, `createMemo`, `createStore`, and derived computations over imperative state synchronization.
- Never destructure reactive sources in ways that break tracking (for example, pulling non-accessor values out of reactive objects/signals and expecting updates).
- Keep tracking boundaries explicit. If a computation should react, ensure reads happen inside tracked contexts (`createMemo`, `createEffect`, JSX expressions, etc.).
- Avoid unnecessary effects; represent derivations as memoized values whenever possible.

### Side-effect boundaries
- Keep side effects isolated in `createEffect`, `onMount`, cleanup callbacks (`onCleanup`), or explicit service modules.
- Effects must not accidentally write to dependencies they read unless carefully guarded; avoid feedback loops.
- Network I/O, timers, subscriptions, and DOM integrations must always include cleanup paths where applicable.
- Keep rendering functions/pure utilities side-effect free.

### Memo/resource usage
- Use `createMemo` for expensive or shared derived values used in multiple places.
- Use `createResource` for async state tied to reactive keys; define clear loading/error/empty handling.
- Avoid over-memoization: only memoize when derivation cost or identity stability matters.
- Avoid creating new object/array literals in hot reactive paths unless identity churn is intentional.

## Component Conventions

### File layout
- One primary component per file.
- Co-locate component-specific helper functions/types when small; extract reusable logic into nearby `hooks/` or shared modules.
- Keep example/test/story/demo files adjacent to the component when practical.

### Props typing strategy
- Use explicit `type`/`interface` for props.
- Prefer narrow prop contracts with sensible defaults over large catch-all prop bags.
- For wrapper components, pass through intrinsic attributes intentionally and type them explicitly.

### Naming
- Components: `PascalCase`.
- Signals/accessors: descriptive nouns (for example `count`, `user`, `isOpen`).
- Event handlers/callback props: `onX` naming.
- Boolean props and accessors should read naturally (`disabled`, `isLoading`, `hasError`).

### Co-location rules
- Keep style files, tests, and fixtures near the owning component or feature.
- Keep cross-feature utilities in shared locations, not deep inside one feature tree.
- Do not introduce circular dependencies between co-located modules.

## Refactor Policy
- Prefer behavior-preserving, incremental transformations.
- Preserve public APIs unless changes are explicitly planned and documented.
- High regression-risk hotspots requiring extra care:
  - SSR/hydration-sensitive code paths.
  - Shared primitives/utilities used across multiple skills/guides.
  - Reactive graph changes (memo/effect/resource dependency rewiring).
- For non-trivial refactors, include before/after rationale in the commit or PR summary.

## Review Checklist
Before merging, verify:
- **Performance:** no avoidable reactive recomputation, no obvious identity churn in critical render paths.
- **Hydration safety:** client output matches server assumptions; no browser-only APIs during SSR without guards.
- **Accessibility:** semantic structure, keyboard interaction, labels/roles, and focus behavior are preserved.
- **Test impact:** update/add tests when behavior changes; confirm existing tests still reflect intended behavior.

## Scaffolding and Bootstrap Expectations
- New templates/scaffolds should produce clean, runnable SolidJS baselines with minimal but practical tooling.
- Keep bootstrap output lean: avoid unnecessary dependencies or heavy abstractions in starter artifacts.
- Baseline expectations:
  - Lint/format configuration appropriate for SolidJS.
  - Basic test setup or clear testing hook points.
  - Clear dev/build scripts and predictable project layout.

## Documentation Requirements for New SolidJS Skills/Guides/Tools
Any new SolidJS-focused skill, guide, or tool must include:
- Purpose and scope (what it is for, and what it is not for).
- Prerequisites and environment assumptions.
- Step-by-step usage workflow with at least one concrete example.
- Known pitfalls (especially around reactivity, side effects, and hydration).
- Validation guidance (how to test/verify output quality).
- Maintenance notes (how to update templates/rules/examples over time).
