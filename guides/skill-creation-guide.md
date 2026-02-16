# Skill Creation Guide

## Purpose

Create a robust skill from a user prompt with minimal back-and-forth and predictable output quality.

## Authoring workflow

1. **Classify request**
   - Identify domain, scope, and expected artifact.
2. **Ask clarifying questions**
   - Collect missing constraints (format, tools, risk tolerance, deadlines).
3. **Define success contract**
   - Specify expected outputs and acceptance checks.
4. **Design structure**
   - Create `SKILL.md` + only needed resource folders.
5. **Implement deterministic pieces**
   - Add scripts for repetitive or fragile operations.
6. **Validate**
   - Run checks and include troubleshooting steps.

## Clarifying questions checklist

- What exact output should be produced?
- What tools can/cannot be used?
- What quality or policy constraints apply?
- What edge cases must be handled?
- What does failure look like?

## SKILL.md standards

- Keep frontmatter precise and trigger-oriented.
- Include `outputs`, `requires_references`, and `validation_commands` in frontmatter.
- Write body instructions in imperative style.
- Include clear execution sequence and branching.
- Use required sections: Trigger, Required Inputs, Workflow, Failure Modes, Output Contract, Validation, References.
- Reference external docs instead of duplicating them.
- Add a verification section with explicit commands.
- Require citation-backed claims with normalized corpus `doc_id` values.

## Anti-patterns

- Vague “do your best” steps.
- Huge SKILL files with mixed references.
- No error handling path.
- Unclear output destination.
