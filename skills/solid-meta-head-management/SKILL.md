---
name: solid-meta-head-management
description: "Apply solid-meta head and metadata primitives with deterministic SSR-safe behavior. Use for title/meta/link/style/base management across route and layout boundaries."
outputs:
  schema: ../../skills/contracts/domain-guidance-output.schema.json
  format: metadata-guidance-checklist
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs-normalized/taxonomy.json
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-meta-head-management
  - node tools/scripts/validate-solid-corpus.mjs
---

# solid-meta-head-management

## Trigger

Use for metadata strategy with `MetaProvider`, `Title`, `Meta`, `Link`, `Style`, and related head composition requirements.

## Required Inputs

- Route/layout metadata ownership boundaries.
- SSR and client update expectations.
- SEO and social metadata requirements.

## Workflow

1. Define metadata ownership hierarchy across app/layout/route boundaries.
2. Choose solid-meta primitives for each metadata type.
3. Document SSR-safe update expectations and collision handling.
4. Provide handoff to macro skill with testable metadata assertions.

## Failure Modes

- Multiple owners for same metadata field without precedence: resolve precedence first.
- Missing SSR behavior note: output invalid.
- Metadata changes without validation checks: add checks before completion.

## Output Contract

Return `DomainGuidanceOutput` with metadata decisions, handoff steps, and citations that include normalized `doc_id`.

## Validation

- `node tools/scripts/validate-skills.mjs --skill solid-meta-head-management`
- `node tools/scripts/validate-solid-corpus.mjs`

## References

- `../../references/solidjs-normalized/docs/solid-meta/reference/meta/metaprovider.md`
- `../../references/solidjs-normalized/docs/solid-meta/reference/meta/title.md`
- `../../references/solidjs-normalized/docs/solid-meta/reference/meta/meta.md`
- `../../references/solidjs-normalized/docs/solid-meta/reference/meta/link.md`
- `../../references/solidjs-normalized/manifest.jsonl`
