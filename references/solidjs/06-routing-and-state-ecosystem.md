# Routing and State Management Ecosystem Notes

## Routing (`@solidjs/router`)

Common patterns:

- File/route definitions with nested layouts.
- Route params as reactive sources.
- Data loading via route-level patterns (where applicable).

Guidelines:

- Keep URL as source of truth for navigational/filter state when shareable/bookmarkable.
- Put feature-local transient UI state in component signals/stores.
- Co-locate route components with route-specific data loaders.

## State ecosystem choices

- **Built-in primitives first**: signals, memos, stores, context.
- Add external state libs only when requirements exceed built-ins (time travel, cross-app sync, complex cache policies).

## Suggested layering

1. URL/router state (location, params, query).
2. Server/cache state (`createResource`, route loaders).
3. App/shared client state (context + signals/stores).
4. Local component UI state.

Keep boundaries explicit to avoid duplicated or conflicting state.
