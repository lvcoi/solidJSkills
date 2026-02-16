---
name: solid-reviewer
description: "Review SolidJS diffs for correctness, reactivity safety, SSR/hydration risk, and maintainability with deterministic severity ordering. Use when auditing PRs or producing final review findings."
outputs:
  schema: ../../skills/contracts/review-output.schema.json
  format: severity-ordered-findings-with-fixes
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs-normalized/taxonomy.json
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-reviewer
  - node tools/scripts/validate-output-contracts.mjs
---

# solid-reviewer

## Trigger
Use this skill for PR/diff audits where findings must be prioritized and mapped to concrete remediation.

## Required Inputs
- Diff or changed files.
- Runtime context (client, SSR, SolidStart server usage if applicable).
- Known risk constraints (performance budget, accessibility requirements, release urgency).

## Workflow
1. Triage by severity in strict order: correctness, performance, maintainability, accessibility.
2. Validate reactive boundaries first: derivations vs effects, dependency explosion, stale closures.
3. Evaluate control flow and async completeness (`loading`, `empty`, `error`, `success`).
4. Check SSR/hydration and browser-only assumptions in render paths.
5. Ensure every finding includes file reference and concrete fix direction.
6. Return validation commands relevant to touched surface.

## Failure Modes
- Missing diff context: fail and request files or patch.
- Findings without reproducible impact: downgrade to question or remove.
- Suggestions without file-level anchor: invalid until anchored.
- No findings detected: explicitly state "No findings" and list residual test gaps.

## Output Contract
Return output matching `ReviewOutput` schema at `../../skills/contracts/review-output.schema.json` with:
- `summary`, `findings`, `open_questions`, `validation_commands`.
- `findings` ordered by severity and containing `file` (and `line` when available).
- `citations`: every standards claim must include normalized `doc_id` + `claim`.

## Validation
- `node tools/scripts/validate-skills.mjs --skill solid-reviewer`
- `node tools/scripts/validate-output-contracts.mjs`

## References
- `../../references/solidjs-normalized/manifest.jsonl`
- `../../references/solidjs-normalized/taxonomy.json`
- `../../references/solidjs/review-checklist.md`
- `../../references/solidjs/control-flow.md`
- `../../references/solidjs/performance-ssr.md`
