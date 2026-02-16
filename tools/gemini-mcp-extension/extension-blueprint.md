# Gemini MCP Extension Blueprint (v2)

## 1. Purpose

Route and enforce SolidJS engineering work with deterministic, citation-backed skill contracts.

## 2. Routing Model

1. Detect package and intent signals.
2. Route through `solid-intent-router`.
3. Select one macro skill + one domain subskill.
4. Load only relevant normalized references from `references/solidjs-normalized/`.
5. Produce output conforming to the selected macro skill output schema.

## 3. Skill Layers

### Macro skills

- `solid-component-builder`
- `solid-refactor-assistant`
- `solid-reviewer`
- `solid-scaffold-bootstrap`
- `solid-design-patterns`

### Domain subskills

- `solid-reactivity-core-expert`
- `solid-control-flow-rendering`
- `solid-state-architecture`
- `solid-router-data-navigation`
- `solid-start-server-runtime`
- `solid-ssr-hydration-debugger`
- `solid-meta-head-management`
- `solid-testing-quality-gates`

## 4. Required Quality Gates

- Reactivity correctness explicit.
- Control flow primitive usage justified.
- Async/loading/error states addressed.
- SSR/hydration implications considered.
- Validation commands/checklist included.
- Claims include citation with normalized `doc_id`.

## 5. Failure/Fallback Behavior

- Missing context: ask for smallest required inputs from skill `Required Inputs` section.
- Skill mismatch: re-route using precedence in `skill-routing-map.md` and report rationale.
- Low confidence routing: default to `solid-component-builder` + `solid-reactivity-core-expert`.
