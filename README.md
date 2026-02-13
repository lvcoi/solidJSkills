# solidJSkills

`solidJSkills` is a **SolidJS-focused skill and tooling workspace** for teams building, reviewing, and evolving Solid applications with consistent, agent-friendly engineering practices.

## Mission

This repository exists to help teams ship high-quality SolidJS code faster by codifying:

- repeatable component architecture patterns,
- reliable refactoring and migration workflows,
- review heuristics aligned with Solid reactivity,
- and practical scaffolding playbooks for new features and apps.

## Who this is for

- **SolidJS app teams** building product features with predictable patterns.
- **Design system maintainers** creating reusable, composable Solid component libraries.
- **Agent-assisted contributors** using AI workflows to generate, refactor, and validate SolidJS code safely.

## Skill map

| SolidJS skill | Primary focus | Practical outcome |
| --- | --- | --- |
| [Component Creator](#component-creation-standards) | Authoring components, props APIs, and composability boundaries | New components ship with consistent interfaces, predictable reactivity, and testable behavior |
| [Refactor & Migration Operator](#refactoring-and-migration-playbooks) | Incremental modernization and architecture cleanup | Legacy code is migrated with lower regression risk and clear rollback checkpoints |
| [Solid Pattern Reviewer](#code-review-heuristics-for-solidjs-patterns-signals-memos-resources-control-flow) | Reviewing correctness/performance of reactive primitives | PRs catch common anti-patterns in signals, memos, resources, and control-flow usage |
| [Scaffold & Bootstrap Engineer](#scaffoldingbootstrapping-workflows) | Bootstrapping apps, modules, and feature slices | Teams start new work with standardized project shape, tooling, and quality gates |

## Component creation standards

When creating SolidJS components, skills in this workspace should enforce:

1. **Clear props contracts**
   - Prefer typed props with explicit optionality.
   - Keep public API minimal; avoid leaking internal state shape.
2. **Reactive correctness**
   - Use `createSignal` for local mutable state.
   - Use `createMemo` for derived values (never for side effects).
   - Use `createEffect` only for imperative reactions.
3. **Composition-first design**
   - Favor small, focused components.
   - Isolate UI primitives from feature orchestration logic.
4. **Solid control flow conventions**
   - Prefer `<Show>`, `<For>`, and `<Switch>/<Match>` over ad-hoc imperative branching in JSX.
5. **Testability and accessibility**
   - Build with semantic HTML and accessible labels/roles.
   - Keep component behavior deterministic for unit and interaction testing.

## Refactoring and migration playbooks

Refactors and migrations should follow structured, low-risk playbooks:

1. **Baseline first**
   - Capture current behavior with tests/screenshots before major edits.
2. **Small, reversible steps**
   - Split changes into reviewable commits with clear intent.
3. **Reactivity audits**
   - Verify signals/memos/resources remain minimal and correctly scoped.
4. **Compatibility checkpoints**
   - Validate API compatibility for shared components and design-system consumers.
5. **Post-migration cleanup**
   - Remove dead code paths and document new patterns in skill references.

## Code review heuristics for SolidJS patterns (signals, memos, resources, control flow)

Use these heuristics in reviews:

- **Signals**
  - Is state truly local and mutable?
  - Are writes batched or minimized where possible?
- **Memos**
  - Is memoization used for derivation only?
  - Any hidden side effects inside memo callbacks?
- **Resources**
  - Are async dependencies explicit and cancel-safe?
  - Is loading/error/success UI handled deterministically?
- **Control flow**
  - Are `<Show>`, `<For>`, and `<Switch>/<Match>` used idiomatically?
  - Are keyed list/rendering expectations clear?
- **General reactivity hygiene**
  - Any over-subscription or accidental recomputation hotspots?
  - Is ownership/cleanup clear for effects and async work?

## Scaffolding/bootstrapping workflows

Skills should support repeatable bootstrapping flows for:

1. **New Solid app setup** (tooling, linting, test harness, baseline CI checks).
2. **Feature module scaffolding** (route/component/store/resource/test skeletons).
3. **Design-system package initialization** (tokens, primitives, docs/examples).
4. **Migration kickoff templates** (audit checklist, risk log, rollout plan).

## Repository layout

- `guides/` — reference guides for skill, tool, workflow, rule, and system-prompt authoring.
- `skills/` — skill packages and starter patterns.
- `tools/templates/` — reusable templates for creating new skill artifacts.

## Legacy/meta tooling note

This repo still includes generic skill-engineering guides/templates where useful, but they are now positioned as supporting infrastructure for SolidJS-focused skill workflows.
