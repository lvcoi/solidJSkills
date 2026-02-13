---
name: skill-authoring
description: "Design, draft, and refine SKILL.md-based agent skills with clear trigger criteria, execution flow, validation checks, and reusable references. Use when creating a new skill or improving an existing one."
---

# Skill Authoring

Define skill scope, build concise instructions, and package reusable context.

## Workflow

1. Extract user intent and expected artifacts.
2. Ask only the minimum clarifying questions required to avoid rework.
3. Draft frontmatter with explicit trigger conditions.
4. Write procedural body instructions with validation and failure handling.
5. Move domain-heavy detail into `references/`.
6. Add deterministic utilities in `scripts/` when repetition exists.

## Output Requirements

- Include required frontmatter fields.
- Keep action steps ordered and testable.
- Include at least one verification section.
- Avoid redundant reference duplication.

## References

Load `references/checklist.md` before finalizing output.
