# Tool Creation Guide

## Purpose

Design tools that improve determinism, reduce token overhead, and enforce quality gates inside skill workflows.

## Tool categories

- **Scaffolding tools**: create folder/file skeletons.
- **Validation tools**: lint, type-check, schema-check, policy-check.
- **Transformation tools**: convert, format, and normalize data.
- **Reporting tools**: summarize outputs and diagnostics.

## Implementation standards

- Keep CLI input explicit and strongly typed.
- Return machine-parsable success/failure messages.
- Separate pure transformation from side effects.
- Document examples and failure codes.

## Minimum tool contract

- Inputs and defaults.
- Output schema.
- Error modes.
- Example invocation.
- Test coverage expectations.

## Integration tips for skills

- Call tools by exact command syntax.
- Add fallback path when tool fails.
- Avoid embedding large code snippets when script exists.
