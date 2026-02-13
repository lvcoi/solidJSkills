# Gemini MCP Extension Blueprint (v1)

## 1. Purpose

Define how Gemini-based MCP extension behavior should route and evaluate SolidJS development tasks.

## 2. Routing Model

1. Detect user intent category.
2. Map intent to one primary SolidJS skill.
3. Load only relevant reference files.
4. Produce output using skill-defined checklist structure.

## 3. Intent Categories

- Component implementation -> `skills/solid-component-builder`
- Refactor/migration -> `skills/solid-refactor-assistant`
- PR review/audit -> `skills/solid-reviewer`
- New project/module setup -> `skills/solid-scaffold-bootstrap`
- Architecture decision -> `skills/solid-design-patterns`

## 4. Required Quality Gates

- Reactivity correctness explicit.
- Control flow primitive usage justified.
- Async/loading/error states addressed.
- SSR/hydration implications considered when applicable.
- Validation commands/checklist included.

## 5. Failure/Fallback Behavior

- Missing context: ask for smallest missing inputs.
- Skill mismatch: choose closest skill and annotate decision.
- Large context risk: summarize and load only targeted references.
