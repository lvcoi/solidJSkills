---
name: <skill-name>
description: "<what the skill does + when to use it>"
outputs:
  schema: ../../skills/contracts/<output-schema>.schema.json
  format: <output-format>
requires_references:
  - ../../references/solidjs-normalized/manifest.jsonl
validation_commands:
  - node tools/scripts/validate-skills.mjs --skill <skill-name>
---

# <Skill Title>

## Trigger
<exact trigger conditions>

## Required Inputs
- <required input 1>
- <required input 2>

## Workflow
1. <deterministic step 1>
2. <deterministic step 2>
3. <deterministic step 3>

## Failure Modes
- <failure mode and fallback>

## Output Contract
- Follow `<schema>`.
- Include citations with `doc_id` and claim.

## Validation
- <validation command>

## References
- <reference file>
