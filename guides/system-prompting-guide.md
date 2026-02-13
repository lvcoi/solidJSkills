# System Prompting Guide

## Objective

Define system prompts that constrain behavior, preserve flexibility where needed, and reduce hallucination-prone ambiguity.

## Prompt architecture

1. Role and operating context.
2. Non-negotiable constraints.
3. Tool usage policy.
4. Workflow expectations.
5. Output format contract.
6. Failure-handling instructions.

## Engineering heuristics

- Put hard constraints early.
- Use explicit precedence language.
- Define what to do when info is missing.
- Require evidence-backed final summaries.

## Common failure modes

- Overly broad role definitions.
- Missing hierarchy between conflicting instructions.
- No specified behavior for blocked actions.

## Prompt QA checklist

- Are constraints testable?
- Are outputs structurally defined?
- Are trade-offs (speed vs quality) explicit?
- Is fallback behavior deterministic?
