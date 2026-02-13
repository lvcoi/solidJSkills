---
name: solid-reviewer
description: "Review SolidJS code changes for correctness, reactivity safety, accessibility, and maintainability with actionable findings. Use when auditing pull requests or local diffs in Solid projects."
---

# Solid Reviewer

Perform strict, evidence-based reviews for SolidJS changes.

## Trigger Conditions

Use this skill when the user asks to:
- Review Solid-related diffs or pull requests.
- Identify bugs, reactive hazards, or maintainability issues.
- Provide merge readiness assessment.

Do **not** use for implementing requested features directly.

## Input Contract (Required)

Require:
1. `diff_scope` (files or commit range)
2. `review_focus` (correctness, performance, a11y, API stability)
3. `severity_scheme` (`critical`, `major`, `minor`)
4. `release_context` (optional risk context)

If no diff is provided, review cannot proceed.

## Output Contract (Required)

Return:
1. Findings list grouped by severity.
2. For each finding: evidence, impact, and recommended fix.
3. Explicit list of checks performed.
4. Final recommendation: `approve`, `approve-with-notes`, or `request-changes`.

## Deterministic Checklist

1. Validate Solid primitive usage and reactive correctness.
2. Validate control-flow rendering and list behavior.
3. Validate type-safety/public interface changes.
4. Validate accessibility for interactive elements.
5. Validate test or verification coverage for changed behavior.
6. Validate no obvious dead code/debug artifacts.

## Failure Modes

- **Incomplete diff scope**: return partial review + explicit gap list.
- **No reproducible evidence**: downgrade certainty and avoid definitive claims.
- **Missing severity mapping**: apply default scheme and state it.
- **Unsupported environment for checks**: report limitation, keep code review static.

## References

Load only when needed:
- `references/review-severity-rubric.md` for consistent prioritization.
- `references/solid-pr-review-checks.md` for Solid-focused audit prompts.
