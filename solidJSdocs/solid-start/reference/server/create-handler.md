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

# createHandler

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/create-handler.mdx)

The `createHandler` is used to start the server in [`entry-server.tsx`](../entrypoints/entry-server.md). It takes a function that returns a static document (often created with [`<StartServer>`](start-server.md)), and serves it using one of the three function for server side rendering (SSR):

- [`renderToString`](../../../reference/rendering/render-to-string.md) - "sync"
- [`renderToStringAsync`](../../../reference/rendering/render-to-string-async.md) - "async"
- [`renderToStream`](../../../reference/rendering/render-to-stream.md) - "stream"

The SSR mode can be configured through the `mode` property on the options object:

```


import { createHandler, StartServer } from "@solidjs/start/server";




export default createHandler(() => (

  <StartServer document={...}

  />

), {

  mode: "async"

});
```

* * *

## [Parameters](create-handler.md#parameters)

ArgumentTypeDefaultDescriptionfnfn: (context: PageEvent)A function that returns the static document for your application.options.modestring"stream"The SSR mode. Options are 'sync', 'async' and 'stream'.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fcreate-handler.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fcreate-handler)

Previous[← "use server"](use-server.md)

Next[createMiddleware →](create-middleware.md)

On this page

1. [Overview](#_top)
2. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/create-handler.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fcreate-handler.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fcreate-handler)