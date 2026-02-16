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

# HttpHeader

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/http-header.mdx)

`HttpHeader` provides a way to set headers on HTTPs response sent by the server.

```


import { HttpHeader } from "@solidjs/start";




<HttpHeader name="x-robots-tag" value="noindex" />;
```

* * *

## [Setting a header for catch-all routes](http-header.md#setting-a-header-for-catch-all-routes)

```


import { HttpHeader, HttpStatusCode } from "@solidjs/start";




export default function NotFound() {

  return (

    <div>

      <HttpStatusCode code={404} />

      <HttpHeader name="my-header" value="header-value" />

    </div>

  );

}
```

As a page is rendered, you may want to add additional HTTP headers to the response and the `HttpHeader` component will do that for you. By passing it a `name` and `value`, they will get added to the `Response` headers sent back to the browser.

When streaming responses with [`renderToStream`](../../../reference/rendering/render-to-stream.md), HTTP headers can only be added before the stream is first flushed. This requires adding `deferStream` to any resources that need to be loaded before responding.

* * *

## [Parameters](http-header.md#parameters)

PropertyTypeDescriptionnamestringThe name of the header to setvaluestringThe value of the header to set

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fhttp-header.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fhttp-header)

Previous[← getServerFunctionMeta](get-server-function-meta.md)

Next[HttpStatusCode →](http-status-code.md)

On this page

1. [Overview](#_top)
2. [Setting a header for catch-all routes](#setting-a-header-for-catch-all-routes)
3. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/http-header.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fhttp-header.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fhttp-header)