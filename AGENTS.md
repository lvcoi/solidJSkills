# AGENTS.md (SolidJS Repository Standard)

Scope: entire repository.

## Repository Intent

Treat this repository as SolidJS-first. Prefer creating or updating SolidJS skills, references, guides, and tooling over generic AI meta-guidance.

## Operating Priorities

1. Preserve SolidJS reactivity correctness.
2. Optimize readability and maintainability before micro-optimization.
3. Favor deterministic workflows and checklists in skills.
4. Keep `SKILL.md` concise; move detailed knowledge into `references/`.

## SolidJS Coding and Design Standards

- Prefer fine-grained reactivity primitives intentionally (`createSignal`, `createMemo`, `createEffect`, `createResource`, `batch`, `untrack`).
- Avoid unnecessary effects when derivation is sufficient.
- Keep side effects explicit and isolated.
- Use Solid control flow primitives (`<Show>`, `<For>`, `<Switch>`, `<Match>`) for clarity and performance.
- Design props and component boundaries to minimize hidden coupling.
- Account for hydration/SSR behavior in guidance and review criteria.

## Skill Authoring Standards

When adding or updating a SolidJS skill:

1. Use clear trigger language in frontmatter `description` (when to use).
2. Include deterministic workflow steps with acceptance checks.
3. Define failure modes and fallback paths.
4. Link to only relevant reference files.
5. Include output format expectations (checklists, plans, patches, review notes).
6. Require citation-backed claims using normalized corpus `doc_id` values.

## Required Review Checklist for SolidJS Artifacts

- Reactivity correctness verified.
- Unnecessary recomputation avoided.
- Control flow primitives chosen appropriately.
- Async and loading states explicit.
- Accessibility and semantic markup considered.
- SSR/hydration concerns addressed where relevant.
- Tests/check commands listed for validation.
- Citations include normalized `doc_id` references for non-trivial claims.

## Scaffolding and Bootstrap Expectations

- Prefer minimal, production-realistic defaults.
- Document package/tooling choices and tradeoffs.
- Provide clear extension points for scaling teams.
- Keep generated structures simple and predictable.
