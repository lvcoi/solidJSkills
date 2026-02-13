# solidJSkills

A SolidJS-first repository for **agent-ready skills, tools, guides, and standards** used to build, refactor, review, scaffold, and bootstrap SolidJS codebases.

## Mission

Provide a practical, reusable operating system for SolidJS engineering work:

1. Build consistent, high-quality SolidJS components.
2. Refactor safely with reactivity correctness and performance in mind.
3. Review code against SolidJS-specific quality gates.
4. Scaffold and bootstrap new SolidJS projects with predictable defaults.
5. Keep an agent-facing workflow (`SKILL.md`) aligned with real SolidJS practices.

## v1 Repository Blueprint

- Core blueprint: `guides/solidjs-v1-blueprint.md`
- Agent standards: `AGENTS.md`
- Shared SolidJS reference pack: `references/solidjs/`
- SolidJS skills:
  - `skills/solid-component-builder/`
  - `skills/solid-refactor-assistant/`
  - `skills/solid-reviewer/`
  - `skills/solid-scaffold-bootstrap/`
  - `skills/solid-design-patterns/`

## Skill Map

| Skill | Primary Outcome | Use Cases |
|---|---|---|
| `solid-component-builder` | Generate production-ready components | New UI components, feature modules, stateful UI flows |
| `solid-refactor-assistant` | Reduce risk during structural changes | Prop/API rewrites, signal/store migrations, decomposition |
| `solid-reviewer` | Enforce SolidJS quality standards | PR reviews, architecture sanity checks, performance audits |
| `solid-scaffold-bootstrap` | Start projects and feature slices consistently | New app setup, package conventions, baseline tooling |
| `solid-design-patterns` | Choose architecture patterns intentionally | State/data layer decisions, rendering strategy, composition |

## Directory Pattern

```text
skills/<skill-name>/
├── SKILL.md
├── references/
├── scripts/      (optional)
└── assets/       (optional)
```

## Who this is for

- SolidJS product teams shipping app features rapidly.
- Design system maintainers building reusable component libraries.
- Teams using agent-assisted workflows for implementation and review.

## Note on legacy content

Some legacy generic skill-authoring guides remain in `guides/` and older starter skills in `skills/`. They can be retained for meta-work, but SolidJS-first materials are the default direction for this repo.

## Gemini MCP / Extension Alignment

A SolidJS-aligned Gemini MCP extension blueprint is available at:

- `tools/gemini-mcp-extension/`

Use it to keep intent routing, system instructions, and quality gates synchronized with the SolidJS skill set.
