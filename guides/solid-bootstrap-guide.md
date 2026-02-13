# SolidJS Bootstrap Guide

## Purpose

Bootstrap a new SolidJS application or domain area with reliable defaults for architecture, quality checks, and team onboarding.

## Decision criteria and tradeoffs

- **Starter simplicity vs production readiness**
  - Simple starters maximize onboarding speed.
  - Production-ready setups reduce future migration effort.
- **Convention strictness vs flexibility**
  - Strong conventions improve consistency and review speed.
  - Excessive strictness can slow experimentation in early stages.
- **Tooling depth**
  - Minimal tooling keeps setup lightweight.
  - Rich tooling (lint/type/test/CI) catches defects earlier.
- **State strategy at bootstrap**
  - Keep initial state local until sharing needs are proven.
  - Early global state setup can help if cross-feature coordination is expected.

## Step-by-step workflow

1. **Initialize project foundation**
   - Create app with approved SolidJS starter and package manager.
2. **Configure quality gates**
   - Add linting, formatting, type-checking, and test scripts.
3. **Establish folder architecture**
   - Define core directories for components, routes, state, and utilities.
4. **Create baseline app shell**
   - Add layout, navigation, and not-found/error boundaries.
5. **Set up data and state patterns**
   - Document preferred signal/store/context usage patterns.
6. **Add CI-ready scripts**
   - Ensure checks run reproducibly in local and CI environments.
7. **Seed developer documentation**
   - Add getting-started, coding conventions, and PR expectations.
8. **Verify onboarding flow**
   - Validate that a new contributor can install, run, and validate quickly.

## Code smells and anti-patterns

- Bootstrapping without lint/type/test scripts.
- Early adoption of heavy architecture without concrete need.
- Inconsistent folder and naming conventions from the first commit.
- Missing error boundaries and fallback UX states.
- Hidden setup steps not captured in documentation.
- CI pipeline that diverges from local developer workflows.

## Validation checklist

- App installs and runs with documented commands.
- Quality checks are available and passing.
- Directory structure and conventions are documented.
- Baseline UX handles loading and failure paths.
- CI scripts align with local scripts.
- New contributors can follow setup docs without tribal knowledge.
- Initial architecture choices include rationale and tradeoffs.

## Done definition (PR quality)

A bootstrap PR is done when the project starts from a stable, documented, and enforceable foundation: contributors can get productive quickly, quality gates are operational, and core architectural choices are explicit enough to scale safely.
