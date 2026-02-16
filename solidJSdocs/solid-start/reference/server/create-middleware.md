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

# createMiddleware

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/create-middleware.mdx)

`createMiddleware` creates a configuration object for SolidStart that specifies when middleware functions are executed during the request lifecycle.

There are two lifecycle events available: `onRequest` and `onBeforeResponse`.

- The `onRequest` event is triggered at the beginning of the request lifecycle, before the request is handled by the route handler.
- The `onBeforeResponse` event is triggered after a request has been processed by the route handler but before the response is sent to the client.

note

SolidStart will only execute the middleware functions if the path to the middleware file is configured within `app.config.ts` using the `middleware` option. This file must export the configuration using `export default`.

Learn more about middleware in the [Middleware documentation](../../advanced/middleware.md).

* * *

## [Parameters](create-middleware.md#parameters)

`createMiddleware` takes an object with the following keys:

- `onRequest` (optional): A middleware function or an array of functions to execute at the `onRequest` event. If an array is provided, the middleware functions will be executed one by one, in the order they appear in the array.
- `onBeforeResponse` (optional): A middleware function or an array of functions to execute at the `onBeforeResponse` event. If an array is provided, the middleware functions will be executed one by one, in the order they appear in the array.

* * *

## [Example](create-middleware.md#example)

```


import { createMiddleware } from "@solidjs/start/middleware";




export default createMiddleware({

  onRequest: (event) => {

    console.log("Request received:", event.request.url);

  },

  onBeforeResponse: (event) => {

    console.log("Sending response:", event.response.status);

  },

});
```

```


import { defineConfig } from "@solidjs/start/config";




export default defineConfig({

  middleware: "src/middleware/index.ts",

});
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fcreate-middleware.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fcreate-middleware)

Previous[← createHandler](create-handler.md)

Next[GET →](get.md)

On this page

1. [Overview](#_top)
2. [Parameters](#parameters)
3. [Example](#example)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/create-middleware.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fcreate-middleware.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fcreate-middleware)