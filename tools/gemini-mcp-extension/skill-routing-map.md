# Gemini MCP Skill Routing Map (SolidJS v2)

## Deterministic precedence

Apply rules in this order. First match wins.

1. `solid-meta`/metadata/head/title/meta/link -> `solid-design-patterns` + `solid-meta-head-management`
2. `solid-start`/server/use server/middleware/request event/session/auth -> `solid-refactor-assistant` + `solid-start-server-runtime`
3. `hydration`/SSR mismatch/isServer/no hydration/renderToString -> `solid-reviewer` + `solid-ssr-hydration-debugger`
4. `router`/route/navigation/params/search/query/action/revalidate -> `solid-component-builder` + `solid-router-data-navigation`
5. `store`/context/shared state/provider boundary -> `solid-design-patterns` + `solid-state-architecture`
6. `Show`/`For`/`Switch`/rendering branch/suspense fallback -> `solid-component-builder` + `solid-control-flow-rendering`
7. `signal`/memo/effect/resource/untrack/batch -> `solid-component-builder` + `solid-reactivity-core-expert`
8. `test`/quality gate/checklist/regression -> `solid-reviewer` + `solid-testing-quality-gates`
9. `scaffold`/bootstrap/new app/setup -> `solid-scaffold-bootstrap` + `solid-testing-quality-gates`
10. fallback -> `solid-component-builder` + `solid-reactivity-core-expert`

## Intent map

| User Intent Signal | Primary Macro Skill | Secondary Domain Skill |
|---|---|---|
| build component, new UI, props contract | `solid-component-builder` | `solid-reactivity-core-expert` |
| refactor, migrate, restructure | `solid-refactor-assistant` | `solid-state-architecture` |
| review this PR, audit, code review | `solid-reviewer` | `solid-testing-quality-gates` |
| bootstrap app, scaffold module | `solid-scaffold-bootstrap` | `solid-testing-quality-gates` |
| architecture choice, pattern decision | `solid-design-patterns` | `solid-state-architecture` |
| routing, actions, navigation, query | `solid-component-builder` | `solid-router-data-navigation` |
| server runtime, middleware, request event | `solid-refactor-assistant` | `solid-start-server-runtime` |
| hydration mismatch, SSR issue | `solid-reviewer` | `solid-ssr-hydration-debugger` |
| head/meta/title strategy | `solid-design-patterns` | `solid-meta-head-management` |

## Fallback behavior

- If multiple signals tie: prefer package-specific signals (`solid-router`, `solid-start`, `solid-meta`) over generic terms.
- If still tied: route to `solid-design-patterns` and include tie rationale in output.
- If insufficient context: route using highest-confidence match and list missing required inputs.
