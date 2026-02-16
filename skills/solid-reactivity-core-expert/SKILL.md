---
name: solid-reactivity-core-expert
description: "Apply SolidJS fine-grained reactivity primitives with strict derivation-vs-side-effect rules. Use for signal/memo/effect/resource decisions and dependency correctness."
outputs:
  schema: ../../skills/contracts/domain-guidance-output.schema.json
  format: domain-guidance-checklist
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs/reactivity-core.md
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-reactivity-core-expert
  - node tools/scripts/validate-solid-corpus.mjs
---

# solid-reactivity-core-expert

## Trigger
Use for reactivity correctness decisions involving `createSignal`, `createMemo`, `createEffect`, `createResource`, `batch`, `untrack`.

## Required Inputs
- State ownership and mutation boundaries.
- Current or planned derivations.
- Side effects and async behavior.

## Workflow
1. Classify each reactive operation as state, derivation, side effect, or async boundary.
2. Replace effect-driven derivations with memo/signal derivations when possible.
3. Confirm dependency tracking is minimal and explicit.
4. Provide handoff notes to macro skill for implementation/refactor/review.

## Failure Modes
- Unknown state ownership: require explicit owner boundary.
- Effect loops detected: mark as blocking issue and propose memo-driven rewrite.
- Async without loading/error semantics: add resource state matrix.

## Output Contract
Return `DomainGuidanceOutput` with decisions, handoff steps, validation commands, and citations containing `doc_id`.

## Validation
- `node tools/scripts/validate-skills.mjs --skill solid-reactivity-core-expert`
- `node tools/scripts/validate-solid-corpus.mjs`

## References
- `../../references/solidjs/reactivity-core.md`
- `../../references/solidjs-normalized/manifest.jsonl`
- `../../references/solidjs-normalized/docs/reference/basic-reactivity/create-signal.md`
- `../../references/solidjs-normalized/docs/reference/basic-reactivity/create-memo.md`
- `../../references/solidjs-normalized/docs/reference/basic-reactivity/create-effect.md`
