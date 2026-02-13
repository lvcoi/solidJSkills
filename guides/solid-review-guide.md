# SolidJS Review Guide

## Purpose

Review SolidJS pull requests with a consistent framework that balances correctness, maintainability, and product impact.

## Decision criteria and tradeoffs

- **Correctness vs delivery speed**
  - Block on defects that can cause user-facing breakage or data inconsistency.
  - Defer non-critical polish with explicit follow-up issues.
- **Readability vs cleverness**
  - Prefer understandable reactive flows over condensed abstractions.
  - Allow complex patterns only when documented and justified.
- **Strictness vs momentum**
  - Enforce architectural constraints that protect long-term quality.
  - Avoid style-only blocking comments if lint/format already covers them.
- **Local optimization vs system consistency**
  - Accept local compromises when they align with shared conventions.
  - Reject isolated patterns that increase cognitive load repo-wide.

## Step-by-step workflow

1. **Scan intent first**
   - Read PR summary and confirm claimed scope.
2. **Review architecture and boundaries**
   - Check state ownership, component responsibilities, and coupling.
3. **Inspect reactive correctness**
   - Validate `createSignal`/`createMemo`/`createEffect` usage.
4. **Check UI and accessibility impact**
   - Verify semantics, keyboard flow, and conditional rendering behavior.
5. **Evaluate test and validation evidence**
   - Confirm core paths are covered by tests or explicit manual checks.
6. **Assess maintainability**
   - Evaluate naming, file structure, and future extension cost.
7. **Leave prioritized feedback**
   - Separate blocking issues from suggestions.
8. **Approve only with clear confidence**
   - Ensure tradeoffs are documented and acceptable.

## Code smells and anti-patterns

- Review comments focused only on formatting while logic risks remain unaddressed.
- Unchallenged side-effects in render-critical paths.
- Missing rationale for non-obvious reactive patterns.
- Silent acceptance of large mixed-purpose diffs.
- “Works on my machine” approvals without reproducible checks.
- Vague feedback with no concrete remediation direction.

## Validation checklist

- PR scope matches implementation.
- State changes and side-effects are predictable.
- Failure and empty states are handled.
- Accessibility expectations are preserved.
- Tests/manual checks are adequate for risk level.
- Reviewer feedback is actionable and prioritized.
- Approval rationale is explicit.

## Done definition (PR quality)

A review is done when the reviewer can clearly articulate why the change is safe to merge, what tradeoffs were accepted, and which risks remain (if any), with concrete evidence that reactive behavior, UX quality, and maintainability standards were evaluated.
