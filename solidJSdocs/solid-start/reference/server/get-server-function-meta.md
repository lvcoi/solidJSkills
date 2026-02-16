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
  
  - [clientOnly](../client/client-only.md)
  - [mount](../client/mount.md)
  - [StartClient](../client/start-client.md)
- Server
  
  - ["use server"](use-server.md)
  - [createHandler](create-handler.md)
  - [createMiddleware](create-middleware.md)
  - [GET](get.md)
  - [getServerFunctionMeta](get-server-function-meta.md)
  - [HttpHeader](http-header.md)
  - [HttpStatusCode](http-status-code.md)
  - [StartServer](start-server.md)

Server

# getServerFunctionMeta

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/get-server-function-meta.mdx)

`getServerFunctionMeta` returns a function-specific id string, that is stable across all instances when server functions are run in parallel on multiple CPU cores or workers.

This `id` property can and *will* change between builds.

```


import { getServerFunctionMeta } from "@solidjs/start";




// or some in-memory db

const appCache: any = globalThis;




const counter = async () => {

  "use server";

  const { id } = getServerFunctionMeta()!;

  const key = `counter_${id}`;

  appCache[key] = appCache[key] ?? 0;

  appCache[key]++;




  return appCache[key] as number;

};
```

* * *

## [Parameters](get-server-function-meta.md#parameters)

`getServerFunctionMeta(): { id: string }`

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fget-server-function-meta.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fget-server-function-meta)

Previous[← GET](get.md)

Next[HttpHeader →](http-header.md)

On this page

1. [Overview](#_top)
2. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/get-server-function-meta.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fget-server-function-meta.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fget-server-function-meta)