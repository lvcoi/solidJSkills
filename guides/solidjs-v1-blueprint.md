# SolidJS Skills Repository: v1 Concrete Blueprint

## 1) Target State

Deliver a SolidJS-focused repo that provides practical, reusable guidance for:

- Component creation
- Refactoring
- Code review
- Scaffolding
- Bootstrapping
- Design/architecture decision-making

## 2) v1 Directory Blueprint

```text
.
├── AGENTS.md
├── README.md
├── guides/
│   └── solidjs-v1-blueprint.md
├── references/
│   └── solidjs/
│       ├── reactivity-core.md
│       ├── control-flow.md
│       ├── async-data.md
│       ├── stores-context.md
│       ├── component-patterns.md
│       ├── performance-ssr.md
│       └── review-checklist.md
└── skills/
    ├── solid-component-builder/
    │   ├── SKILL.md
    │   └── references/
    ├── solid-refactor-assistant/
    │   ├── SKILL.md
    │   └── references/
    ├── solid-reviewer/
    │   ├── SKILL.md
    │   └── references/
    ├── solid-scaffold-bootstrap/
    │   ├── SKILL.md
    │   └── references/
    └── solid-design-patterns/
        ├── SKILL.md
        └── references/
```

## 3) Skill Responsibilities

### `solid-component-builder`

- Input: component requirements, UX constraints, data dependencies.
- Output: implementation plan + component skeleton + reactivity choices + acceptance checklist.

### `solid-refactor-assistant`

- Input: existing code + refactor objective + risk constraints.
- Output: safe transformation plan, ordered patch strategy, regression checklist.

### `solid-reviewer`

- Input: diff/PR context.
- Output: prioritized findings (correctness, performance, maintainability, accessibility, SSR).

### `solid-scaffold-bootstrap`

- Input: project type and constraints.
- Output: folder/module skeleton, baseline tooling decisions, onboarding steps.

### `solid-design-patterns`

- Input: architecture problem statement.
- Output: recommended pattern with tradeoffs, anti-pattern watchlist, migration notes.

## 4) Quality Gates (v1)

For every skill output:

1. Reactivity model is explicit.
2. Solid control flow primitives are intentionally selected.
3. Async/loading/error states are defined.
4. Performance and hydration implications are noted.
5. Output includes deterministic validation checklist.

## 5) Incremental Delivery Plan

### Phase A: Foundation

- Add `AGENTS.md` and SolidJS shared references.
- Stand up all five skill directories with working `SKILL.md` files.

### Phase B: Consistency

- Align naming conventions and output contracts across all skills.
- Add standard checklists and failure modes.

### Phase C: Validation

- Trial each skill against one real scenario.
- Capture observed gaps and patch references/checklists.

## 6) Definition of Done for v1

- Repository intent in `README.md` is SolidJS-first.
- `AGENTS.md` defines enforceable SolidJS standards.
- Shared SolidJS references exist and are linked by skills.
- All five skills contain executable workflow instructions.
- Quality gates/checklists are present in each skill.
