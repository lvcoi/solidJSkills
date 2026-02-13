# Rule Creation Guide

## Goal

Create rules that are enforceable, testable, and minimally ambiguous.

## Rule schema

- **Rule name**
- **Intent**
- **Scope**
- **Hard requirement**
- **Allowed exceptions**
- **Validation method**
- **Violation response**

## Good rule properties

- Binary pass/fail interpretation.
- Context-aware scope.
- Low contradiction with adjacent rules.
- Traceable to a quality or safety objective.

## Priority layering

1. Safety/legal constraints.
2. System/developer instructions.
3. Project conventions.
4. User style preferences.

## Validation strategy

Attach one command or test per critical rule whenever possible.
