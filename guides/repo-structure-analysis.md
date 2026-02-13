# AI Skill Repository Structure Analysis

## Common structure in popular skill repos

Across public skill ecosystems, the most resilient pattern is:

1. One folder per skill.
2. A required `SKILL.md` file as the entrypoint.
3. Optional but strongly recommended subfolders:
   - `references/` for domain docs, schemas, policy rules.
   - `scripts/` for deterministic and repeatable execution.
   - `assets/` for templates and output resources.

## Semantic layout conventions

- **Top-level by capability**: skills are grouped by domain or task class.
- **Single responsibility per skill**: avoid broad “do everything” skills.
- **Frontmatter triggers**: `name` + description encode when the skill should activate.
- **Thin control layer**: SKILL body defines flow and decision points, not encyclopedic detail.

## Typical quality markers

- Concrete trigger language in description.
- Explicit input requirements and output contract.
- Decision branches for normal and failure states.
- Tight references to reusable resources.
- Verification commands with pass/fail criteria.

## Document length guidance

- `SKILL.md`: 80–250 lines for most skills.
- Large domain specifics: move into `references/`.
- Repetitive mechanics: move into `scripts/`.

## Tooling patterns seen most often

- Search and extraction tools for repository/API context.
- Local scripts for data cleanup, validation, and scaffolding.
- Template-driven generation for repeatable outputs.
- Check scripts for lint/test/build gates.
