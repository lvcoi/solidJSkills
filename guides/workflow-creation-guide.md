# Workflow Creation Guide

## Objective

Convert task intent into a repeatable, debuggable sequence that an agent can execute safely.

## Workflow blueprint

1. Input normalization.
2. Environment/context discovery.
3. Plan generation.
4. Execution in bounded steps.
5. Verification.
6. Final reporting with evidence.

## Decision design

For each step, document:

- Preconditions.
- Action.
- Success criteria.
- Failure branch.
- Recovery action.

## Reliability rules

- Prefer small steps over large monolithic actions.
- Add checkpoints after meaningful state changes.
- Keep rollback guidance near risky actions.
- Emit structured output summaries.

## Observability

Track:

- Commands executed.
- Files changed.
- Test outcomes.
- Known limitations.
