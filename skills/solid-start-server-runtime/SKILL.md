---
name: solid-start-server-runtime
description: "Guide SolidStart server runtime patterns for handlers, middleware, server functions, and request events with explicit runtime constraints. Use for server-side SolidStart architecture and API behavior."
outputs:
  schema: ../../skills/contracts/domain-guidance-output.schema.json
  format: solidstart-runtime-guidance
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
  - ../../references/solidjs-normalized/taxonomy.json
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill solid-start-server-runtime
  - node tools/scripts/validate-solid-corpus.mjs
---

# solid-start-server-runtime

## Trigger
Use for SolidStart server runtime concerns: handlers, middleware, server functions, request event usage, and response behavior.

## Required Inputs
- Server runtime target and deployment constraints.
- Route/API behavior and auth/session requirements.
- Error/status/header handling expectations.

## Workflow
1. Map endpoint responsibilities to SolidStart server primitives.
2. Select middleware boundaries and request event usage.
3. Define response/status/header semantics and failure handling.
4. Produce handoff notes for implementation and security checks.

## Failure Modes
- Runtime/deployment target unspecified: request target before decisions.
- Mixed client/server concerns without boundaries: enforce boundary split.
- Missing auth/session model for protected endpoints: block completion.

## Output Contract
Return `DomainGuidanceOutput` with runtime decisions, handoff steps, validation commands, and citations including `doc_id`.

## Validation
- `node tools/scripts/validate-skills.mjs --skill solid-start-server-runtime`
- `node tools/scripts/validate-solid-corpus.mjs`

## References
- `../../references/solidjs-normalized/docs/solid-start/reference/server/create-handler.md`
- `../../references/solidjs-normalized/docs/solid-start/reference/server/create-middleware.md`
- `../../references/solidjs-normalized/docs/solid-start/reference/server/use-server.md`
- `../../references/solidjs-normalized/docs/solid-start/advanced/request-events.md`
- `../../references/solidjs-normalized/manifest.jsonl`
