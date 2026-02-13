---
name: solid-scaffold-bootstrap
description: "Bootstrap SolidJS project scaffolds with deterministic structure, baseline tooling, and optional feature presets. Use when initializing new Solid repos or adding standardized project foundations."
---

# Solid Scaffold Bootstrap

Create consistent SolidJS project foundations with explicit options and reproducible setup.

## Trigger Conditions

Use this skill when the user asks to:
- Initialize a new Solid project.
- Add baseline tooling (lint, format, test, CI skeleton).
- Apply a standard folder structure or starter preset.

Do **not** use for feature-level component implementation or deep refactors.

## Input Contract (Required)

Require:
1. `project_name`
2. `package_manager` (`npm`/`pnpm`/`yarn`)
3. `language` (`ts` or `js`)
4. `tooling_options` (lint/test/format/router/state)
5. `deployment_target` (optional)
6. `constraints` (enterprise policy or minimal deps)

If package manager or language is missing, default and state assumptions.

## Output Contract (Required)

Return:
1. Scaffold plan with concrete commands.
2. Files/folders created or modified.
3. Post-setup verification commands.
4. Deferred optional improvements list.

## Deterministic Checklist

1. Use a single package manager consistently.
2. Ensure scripts (`dev`, `build`, `test`, `lint`) are coherent with installed tools.
3. Ensure directory structure matches declared preset.
4. Ensure starter app compiles/runs.
5. Ensure README/setup notes reflect actual commands.

## Failure Modes

- **Conflicting tooling selections**: choose minimal compatible set and report dropped options.
- **Template command unavailable**: provide equivalent fallback and mark divergence.
- **Dependency installation failure**: keep generated files, report exact failing step.
- **Undeclared runtime constraints**: block production claims and request constraint details.

## References

Load only when needed:
- `references/scaffold-presets.md` for baseline project layouts.
- `references/tooling-compatibility.md` for package/tool compatibility rules.
