---
name: solid-ssr-hydration-debugger
description: "Diagnose and prevent SolidJS SSR/hydration mismatches with deterministic reproduction and remediation steps. Use for server-client render inconsistencies, hydration errors, and browser-only boundary issues."
outputs:
  schema: ../../skills/contracts/domain-guidance-output.schema.json
  format: ssr-hydration-debug-report
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs/performance-ssr.md
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-ssr-hydration-debugger
  - node tools/scripts/validate-solid-corpus.mjs
---

# solid-ssr-hydration-debugger

## Trigger

Use when SSR output and client hydration diverge, or browser-only assumptions leak into server render paths.

## Required Inputs

- Reproduction steps and environment mode.
- Affected route/component boundaries.
- Error logs and observed mismatch behavior.

## Workflow

1. Build deterministic reproduction path with explicit route/component inputs.
2. Isolate mismatch class: non-deterministic render, browser-only access, async timing, or conditional render drift.
3. Recommend fix strategy using SSR-safe primitives and hydration boundaries.
4. Provide verification checklist for server/client parity.

## Failure Modes

- Non-reproducible issue report: request exact steps and route context.
- Fix without root-cause classification: mark invalid output.
- Browser API in server path unresolved: fail until guarded.

## Output Contract

Return `DomainGuidanceOutput` with root-cause decisions, remediation handoff, and citations referencing normalized `doc_id` values.

## Validation

- `node tools/scripts/validate-skills.mjs --skill solid-ssr-hydration-debugger`
- `node tools/scripts/validate-solid-corpus.mjs`

## References

- `../../references/solidjs/performance-ssr.md`
- `../../references/solidjs-normalized/docs/reference/rendering/hydrate.md`
- `../../references/solidjs-normalized/docs/reference/rendering/is-server.md`
- `../../references/solidjs-normalized/docs/reference/components/no-hydration.md`
- `../../references/solidjs-normalized/docs/solid-router/rendering-modes/ssr.md`
