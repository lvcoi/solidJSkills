---
name: solid-scaffold-bootstrap
description: "Scaffold SolidJS projects or feature modules with deterministic production defaults and extension points. Use when creating new app layouts, modules, or foundational project structure."
outputs:
  schema: ../../skills/contracts/scaffold-output.schema.json
  format: layout-plan-checklist-and-command-sequence
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs-normalized/taxonomy.json
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-scaffold-bootstrap
  - node tools/scripts/validate-output-contracts.mjs
---

# solid-scaffold-bootstrap

## Trigger

Use this skill when starting a SolidJS project/module and you need repeatable structure, tooling, and quality gates.

## Required Inputs

- Project type (SPA, SSR, SolidStart app, library package, feature module).
- Constraints (package manager, deployment target, testing baseline).
- Team requirements (folder conventions, linting/formatting, CI expectations).

## Workflow

1. Select minimal production-realistic structure aligned to project type.
2. Define baseline conventions for routing, state ownership, async data, and testing.
3. Document extension points for scaling teams (feature boundaries, shared modules, server boundaries).
4. Include accessibility and semantic defaults for UI scaffolds.
5. Attach validation commands and post-bootstrap acceptance checks.

## Failure Modes

- Missing project type: pause and request one concrete target shape.
- Over-scaffold risk: remove optional layers and keep deterministic minimum.
- Missing test/check strategy: fail output until commands are listed.
- SSR target without hydration guardrails: add SSR-specific checks before finalizing.

## Output Contract

Return output matching `ScaffoldOutput` schema at `../../skills/contracts/scaffold-output.schema.json` with:

- `summary`, `project_layout`, `baseline_conventions`, `bootstrap_steps`.
- `acceptance_checklist`, `validation_commands`.
- `citations`: include normalized `doc_id` references for major scaffolding decisions.

## Validation

- `node tools/scripts/validate-skills.mjs --skill solid-scaffold-bootstrap`
- `node tools/scripts/validate-output-contracts.mjs`

## References

- `../../references/solidjs-normalized/manifest.jsonl`
- `../../references/solidjs-normalized/taxonomy.json`
- `../../references/solidjs/component-patterns.md`
- `../../references/solidjs/async-data.md`
- `../../references/solidjs/performance-ssr.md`
