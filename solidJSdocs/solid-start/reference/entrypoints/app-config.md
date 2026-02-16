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

# app.config.ts

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/app-config.mdx)

The `app.config.ts` is the root of every SolidStart app and the main point of configuration. This file exports a configuration for SolidStart, [Vinxi](https://vinxi.vercel.app/), [Vite](https://vitejs.dev) and [Nitro](https://nitro.build/). The easiest way to generate a configuration is to use the [`defineConfig`](../config/define-config.md) helper.

Here [`defineConfig`](../config/define-config.md) is used to create a minimal configuration with default settings.

```


import { defineConfig } from "@solidjs/start/config";




export default defineConfig({});
```

To see more configuration options, see [`defineConfig`](../config/define-config.md).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fentrypoints%2Fapp-config.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fentrypoints%2Fapp-config)

Next[app.tsx →](app.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/app-config.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fentrypoints%2Fapp-config.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fentrypoints%2Fapp-config)