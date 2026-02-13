# SolidJS Scaffolding Guide

## Purpose

Scaffold new SolidJS features or modules in a way that establishes maintainable defaults from day one.

## Decision criteria and tradeoffs

- **Template reuse vs customization**
  - Reuse known templates to reduce inconsistency and setup errors.
  - Customize only where feature constraints demand divergence.
- **Speed vs completeness**
  - Start with minimal viable scaffolding for rapid iteration.
  - Include additional structure early when requirements are stable.
- **Folder granularity**
  - Keep structure shallow for small features.
  - Introduce subfolders when ownership and growth justify it.
- **Abstraction level**
  - Begin with direct Solid patterns.
  - Add wrappers/utilities only after repeated usage emerges.

## Step-by-step workflow

1. **Define feature scope**
   - Clarify routes, state needs, and integration boundaries.
2. **Create baseline files**
   - Add component, styles, tests, and index exports as needed.
3. **Set naming conventions**
   - Apply consistent naming for files, components, and signals.
4. **Wire data dependencies**
   - Add placeholder props/context/store boundaries.
5. **Add default UX states**
   - Include loading, empty, and error states from the start.
6. **Establish test hooks**
   - Prepare selectors and test seams for key flows.
7. **Run baseline checks**
   - Ensure scaffold compiles and passes lint/type checks.
8. **Document extension points**
   - Note where future logic should be added.

## Code smells and anti-patterns

- Copy-pasted scaffolds with stale names and unrelated dependencies.
- Deep folder nesting before feature complexity warrants it.
- Missing exports that force brittle relative imports.
- Scaffolding without empty/error/loading placeholders.
- Implicit coupling to app-wide stores in initial skeleton.
- Placeholder code committed without TODO ownership.

## Validation checklist

- Generated structure matches feature scope.
- Naming is consistent with repository conventions.
- Public exports are discoverable and stable.
- Baseline states (loading/empty/error) exist.
- New files compile and pass static checks.
- Testability is considered in component structure.
- Follow-up TODOs are explicit and actionable.

## Done definition (PR quality)

A scaffolding PR is done when it provides a clean, convention-aligned starting point that compiles, is test-ready, and makes future feature work faster without introducing accidental architectural debt.
