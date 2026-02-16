# Gemini MCP Extension (SolidJS Alignment)

This directory defines the SolidJS v2 routing and quality contract for Gemini MCP integration.

## Goals

- Route requests through `solid-intent-router`.
- Select one macro skill plus one domain subskill deterministically.
- Enforce citation-backed outputs using normalized corpus `doc_id` references.

## Contents

- `extension-blueprint.md` — v2 routing and quality architecture.
- `skill-routing-map.md` — deterministic precedence and intent map.
- `prompts/solidjs-system-instructions.md` — baseline system instruction template.

## Maintenance

- Update routing map and smoke fixtures together.
- Keep prompts aligned with skill contract section order.
- Run `node tools/scripts/run-smoke-evals.mjs` after routing changes.
