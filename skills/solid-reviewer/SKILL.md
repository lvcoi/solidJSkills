---
name: solid-reviewer
description: Review SolidJS diffs/PRs for reactivity correctness, control-flow quality, async safety, SSR/hydration issues, and maintainability. Use when auditing changes, preparing feedback, or generating prioritized review findings for SolidJS codebases.
---

# solid-reviewer

## Workflow

1. Triage findings by severity: correctness, performance, maintainability, accessibility.
2. Check reactivity and side-effect boundaries first.
3. Evaluate control flow and async state completeness.
4. Run checklist from `../../references/solidjs/review-checklist.md`.
5. Return prioritized findings with concrete fixes.

## Usage Example

**Example prompt that triggers this skill:**

> "Review this PR diff for SolidJS reactivity issues"

**Expected output format:**

**Prioritized Findings Table:**

| Severity | Category | Description | Location | Fix |
|----------|----------|-------------|----------|-----|
| 🔴 Critical | Reactivity | Signal accessed outside tracking context | `UserList.tsx:45` | Wrap in `createMemo` or move inside JSX |
| 🟡 Warning | Performance | Unnecessary effect re-runs | `Header.tsx:12` | Replace `createEffect` with `createMemo` |
| 🟢 Suggestion | Maintainability | Inline signal could be extracted | `Form.tsx:78` | Extract to named const for clarity |

**Review Summary:**
- **Correctness issues:** 1 critical (must fix before merge)
- **Performance issues:** 1 warning (should fix)
- **Suggestions:** 1 enhancement (optional)

**Recommended actions:**
1. Fix critical reactivity issue in UserList.tsx
2. Run `npm test` to verify no regressions
3. Consider performance optimization in Header.tsx

**Reference checklist:** Findings validated against `references/solidjs/review-checklist.md`

**Note:** This is an **agent-facing skill definition** that produces structured code review output for SolidJS pull requests.
