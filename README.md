# solidJSkills

A practical repository for **AI skill design concepts**, **agentic workflow engineering**, and reusable templates for building robust `SKILL.md`-based skill systems.

## What this repo contains

- `guides/` — semantic guides for designing skills, tools, workflows, rules, and system prompts.
- `skills/` — starter skills that show clear directory structure and instruction quality.
- `tools/templates/` — reusable templates you can copy when authoring new skill components.

## Design goals

1. Standardize how AI skills are scoped, named, and documented.
2. Make workflows predictable and testable.
3. Reduce prompt ambiguity by establishing explicit rules and failure modes.
4. Provide templates that turn a user prompt into a production-ready skill package quickly.

## Quick start

1. Read `guides/skill-creation-guide.md` for end-to-end authoring flow.
2. Pick a template from `tools/templates/`.
3. Clone one of the starter skills from `skills/`.
4. Fill in domain-specific details and validation checks.

## Skill directory pattern

```text
skills/<skill-name>/
├── SKILL.md
├── references/
├── scripts/      (optional)
└── assets/       (optional)
```

Use this pattern to keep instructions concise in `SKILL.md`, while moving detailed references and deterministic automation into bundled resources.
