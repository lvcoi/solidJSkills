# Branching Patterns

## Standard branch

- If check passes: continue to next step.
- If check fails: stop, capture diagnostics, apply recovery action, then re-check.

## Recovery template

1. Identify failure source.
2. Apply smallest corrective action.
3. Re-run only impacted checks.
4. Continue or escalate with clear reason.
