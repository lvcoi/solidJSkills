# SolidJS Reference Documentation

This directory contains the **core SolidJS knowledge base** used by all skills in the solidJSkills repository. These reference documents provide detailed guidance on SolidJS reactivity, patterns, and best practices.

## Available References

| File | Purpose |
|------|---------|
| **reactivity-core.md** | Core reactivity primitives (`createSignal`, `createMemo`, `createEffect`, `batch`, `untrack`) — how and when to use each primitive |
| **component-patterns.md** | Component composition defaults and anti-patterns — prop design, component boundaries, and reusability guidelines |
| **control-flow.md** | SolidJS control flow components (`<Show>`, `<For>`, `<Switch>/<Match>`) — when to use each and common pitfalls |
| **stores-context.md** | State management patterns — when to use signals vs stores vs context for different types of state |
| **async-data.md** | `createResource`, `Suspense`, and async data loading patterns — handling loading states, errors, and refetching |
| **performance-ssr.md** | Performance optimization checks and SSR/hydration guidance — server-side rendering considerations and client hydration |
| **review-checklist.md** | Standard review checklist for SolidJS artifacts — quality gates for code reviews, PR audits, and validation |

## How These References Are Used

### By Skills

All SolidJS skills (`solid-component-builder`, `solid-refactor-assistant`, `solid-reviewer`, `solid-scaffold-bootstrap`, `solid-design-patterns`) reference these documents during their workflows to ensure:

- **Correctness** — Reactivity is used properly
- **Performance** — No unnecessary recomputation or effects
- **Consistency** — All code follows the same patterns
- **Quality** — Standard checklist items are validated

### By Agents

When the MCP server exposes these references via the `read_doc` tool, AI agents can:

1. Look up specific patterns during component building
2. Validate refactoring decisions against established standards
3. Cross-check code reviews with the review checklist
4. Learn SolidJS best practices on demand

### Alignment with AGENTS.md

These references implement the SolidJS coding and design standards defined in `/AGENTS.md` at the repository root. Keep both aligned when updating either.

## Maintenance

When updating these references:

1. **Keep focused** — Each file should cover one topic area thoroughly
2. **Show examples** — Include code snippets for both correct and incorrect patterns
3. **Be prescriptive** — Give clear guidance, not just options
4. **Update skills** — If references change, review skills that depend on them
5. **Sync with AGENTS.md** — Ensure repository-level standards stay aligned
