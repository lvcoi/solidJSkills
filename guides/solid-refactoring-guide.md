# SolidJS Refactoring Guide

## Purpose

Refactor SolidJS code safely while improving clarity, reusability, and reactive performance.

## Decision criteria and tradeoffs

- **Incremental vs broad refactor**
  - Incremental changes reduce risk and simplify review.
  - Broad rewrites can remove systemic complexity faster but increase regression risk.
- **Behavior preservation vs API cleanup**
  - Preserve behavior first when risk is high.
  - Bundle API cleanup only when migration cost is clear and documented.
- **Extraction depth**
  - Extract reusable hooks/helpers when duplication is recurring.
  - Avoid over-extraction that hides local intent.
- **Performance focus**
  - Optimize reactive hotspots that are measured or user-visible.
  - Avoid speculative micro-optimizations without evidence.

## Step-by-step workflow

1. **Establish current baseline**
   - Capture existing behavior and key user flows.
2. **Identify refactor targets**
   - Prioritize highest-maintenance or highest-risk modules.
3. **Define non-negotiables**
   - List behaviors that must not change.
4. **Refactor in slices**
   - Separate structural cleanup, naming cleanup, and logic changes.
5. **Preserve contracts**
   - Maintain prop/event signatures unless intentionally versioned.
6. **Re-check reactive semantics**
   - Verify effects, memos, and signals still update at the right granularity.
7. **Run validation and compare**
   - Ensure baseline flows behave the same or better.
8. **Document migration notes**
   - Add reviewer notes for any contract or pattern shifts.

## Code smells and anti-patterns

- Big-bang rewrites without incremental checkpoints.
- Mixing behavior changes with formatting-only churn in one commit.
- Leaving dead signals/effects after extraction.
- Renaming symbols without improving clarity or consistency.
- Replacing explicit data flow with implicit global state.
- Ignoring obsolete comments/docs after code movement.

## Validation checklist

- Baseline behavior remains intact for core flows.
- Diff is organized into reviewable logical chunks.
- Removed duplication results in clearer ownership.
- No orphaned imports, effects, or helper utilities remain.
- Updated names improve readability and consistency.
- Any API changes include migration guidance.
- Performance is unchanged or improved for targeted paths.

## Done definition (PR quality)

A refactoring PR is done when it reduces complexity without ambiguity, preserves agreed behavior, and gives reviewers confidence through scoped commits, explicit tradeoff notes, and validation evidence that no reactive regressions were introduced.
