[**Solid**Start](../..)

- [Core](../../../index.md)
- [Router](../../../solid-router)
- [SolidStart](../..)
- [Meta](../../../solid-meta)

[](https://github.com/solidjs/solid-start)[](https://discord.com/invite/solidjs)

LearnReference

- Entrypoints
  
  - [app.config.ts](../entrypoints/app-config.md)
  - [app.tsx](../entrypoints/app.md)
  - [entry-client.tsx](../entrypoints/entry-client.md)
  - [entry-server.tsx](../entrypoints/entry-server.md)
- Config
  
  - [defineConfig](../config/define-config.md)
- Routing
  
  - [FileRoutes](../routing/file-routes.md)
- Client
  
  - [clientOnly](client-only.md)
  - [mount](mount.md)
  - [StartClient](start-client.md)
- Server
  
  - ["use server"](../server/use-server.md)
  - [createHandler](../server/create-handler.md)
  - [createMiddleware](../server/create-middleware.md)
  - [GET](../server/get.md)
  - [getServerFunctionMeta](../server/get-server-function-meta.md)
  - [HttpHeader](../server/http-header.md)
  - [HttpStatusCode](../server/http-status-code.md)
  - [StartServer](../server/start-server.md)

Client

# mount

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/client/mount.mdx)

`mount` is a method that calls either [`hydrate`](../../../reference/rendering/hydrate.md) (server rendering) or [`render`](../../../reference/rendering/render.md) (client rendering) depending on the configuration. It is used in [`entry-client.tsx`](../entrypoints/entry-client.md) to bootstrap an application.

```


import { mount, StartClient } from "@solidjs/start/client";




mount(() => <StartClient />, document.getElementById("app")!);
```

If you set `{ ssr: false }` in the [`defineConfig`](../config/define-config.md), effectively deactivating hydration, then `mount` becomes the same as [`render`](../../../reference/rendering/render.md).

* * *

## [Parameters](mount.md#parameters)

Proptypedescriptionfn() =&gt; JSX.ElementFunction that returns the application code.elMountableElementDOM Element to mount the application to

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fclient%2Fmount.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fclient%2Fmount)

Previous[← clientOnly](client-only.md)

Next[StartClient →](start-client.md)

On this page

1. [Overview](#_top)
2. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/client/mount.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fclient%2Fmount.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fclient%2Fmount)