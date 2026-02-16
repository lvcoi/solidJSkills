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

# GET

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/get.mdx)

`GET` helps to create a server function which is accessed via an [HTTP GET request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET). When this function is called, arguments are serialized into the URL, thus allowing the use of [HTTP cache-control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) headers.

For example, `GET` can be used to make a streaming promise with a 60 second cache life:

```


import { json } from "@solidjs/router";

import { GET } from "@solidjs/start";




const hello = GET(async (name: string) => {

  "use server";

  return json(

    { hello: new Promise<string>((r) => setTimeout(() => r(name), 1000)) },

    { headers: { "cache-control": "max-age=60" } }

  );

});
```

* * *

## [Parameters](get.md#parameters)

`GET<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T>`

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fget.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fget)

Previous[← createMiddleware](create-middleware.md)

Next[getServerFunctionMeta →](get-server-function-meta.md)

On this page

1. [Overview](#_top)
2. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/get.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fget.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fget)