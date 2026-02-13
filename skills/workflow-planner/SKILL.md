---
name: workflow-planner
description: "Transform user requests into structured execution plans with checkpoints, branch logic, and verification gates. Use when tasks need multi-step orchestration and clear progress tracking."
---

# Workflow Planner

Create reliable execution plans for agentic tasks.

## Plan Construction

1. Define task objective and constraints.
2. Break work into sequential milestones.
3. Attach preconditions and success checks to each milestone.
4. Add recovery branches for expected failure modes.
5. Emit a final checklist that confirms completion.

## Quality Rules

- Keep one active step at a time.
- Prefer short, testable actions.
- Include explicit evidence requirements.

## References

Load `references/branching-patterns.md` for failure-handling patterns.
