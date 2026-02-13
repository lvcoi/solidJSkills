---
name: system-prompt-engineer
description: "Author and review system prompts for agent behavior control, instruction precedence, safety constraints, and output contracts. Use when defining or auditing operational prompts for reliability."
---

# System Prompt Engineer

Build high-clarity prompts that reduce ambiguity and enforce policy.

## Authoring Flow

1. Declare role and domain context.
2. List non-negotiable constraints and precedence.
3. Specify tool usage and prohibited actions.
4. Define required output format and evidence rules.
5. Add fallback behavior for unknowns and blocked operations.

## Validation

- Test prompt against at least three realistic scenarios.
- Verify precedence handling under conflicting instructions.
- Confirm output is structurally consistent.

## References

Load `references/prompt-audit.md` to perform prompt quality review.
