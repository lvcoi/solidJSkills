[**Solid**Start](../..)

- [Core](../../../index.md)
- [Router](../../../solid-router)
- [SolidStart](../..)
- [Meta](../../../solid-meta)

[](https://github.com/solidjs/solid-start)[](https://discord.com/invite/solidjs)

LearnReference

- Entrypoints
  
  - [app.config.ts](app-config.md)
  - [app.tsx](app.md)
  - [entry-client.tsx](entry-client.md)
  - [entry-server.tsx](entry-server.md)
- Config
  
  - [defineConfig](../config/define-config.md)
- Routing
  
  - [FileRoutes](../routing/file-routes.md)
- Client
  
  - [clientOnly](../client/client-only.md)
  - [mount](../client/mount.md)
  - [StartClient](../client/start-client.md)
- Server
  
  - ["use server"](../server/use-server.md)
  - [createHandler](../server/create-handler.md)
  - [createMiddleware](../server/create-middleware.md)
  - [GET](../server/get.md)
  - [getServerFunctionMeta](../server/get-server-function-meta.md)
  - [HttpHeader](../server/http-header.md)
  - [HttpStatusCode](../server/http-status-code.md)
  - [StartServer](../server/start-server.md)

Entrypoints

# entry-client.tsx

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/entry-client.mdx)

`entry-client.tsx` is where an application starts in the browser. It does this by passing [`<StartClient>`](../client/start-client.md) and a DOM Element (the mounting point), to the [`mount`](../client/mount.md) function.

```


import { mount, StartClient } from "@solidjs/start/client";




mount(() => <StartClient />, document.getElementById("app")!);
```

This file is an ideal place to run any client specific code that is needed on startup, such as registering service workers. This is important if you are performing client-only rendering or using other modes of server-side rendering.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fentrypoints%2Fentry-client.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fentrypoints%2Fentry-client)

Previous[← app.tsx](app.md)

Next[entry-server.tsx →](entry-server.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/entry-client.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fentrypoints%2Fentry-client.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fentrypoints%2Fentry-client)