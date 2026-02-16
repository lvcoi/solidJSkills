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

# HttpStatusCode

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/http-status-code.mdx)

`HttpStatusCode` sets the HTTP status code for the page response while server-side rendering.

```


import { HttpStatusCode } from "@solidjs/start";




<HttpStatusCode code={404} />;
```

* * *

## [Setting a 404 status code for the unmatched routes](http-status-code.md#setting-a-404-status-code-for-the-unmatched-routes)

As a page is rendered, you may want to set the status code to the `Response` depending on what happens. The `HttpStatusCode` component does this for you by taking the `code` passed in and setting it to the `Response` status in the browser.

Since `HttpStatusCode` is just a component, it can be used with [`ErrorBoundary`](../../../reference/components/error-boundary.md), [`Show`](../../../reference/components/show.md), [`Switch`](../../../reference/components/switch-and-match.md) or any of the other JSX control-flow components. This means the same logic used when deciding what to render can inform what status code you are setting, allowing that logic to sit together.

Status codes are important tools for things like caching and SEO, so it is a good practice to send meaningful status codes. For example, for a `NotFound` page, you should send a `404` status code.

```


import { HttpStatusCode } from "@solidjs/start";




export default function NotFound() {

  return (

    <div>

      <HttpStatusCode code={404} />

      <h1>Page not found</h1>

    </div>

  );

}
```

* * *

## [Setting a 404 status code for missing pages for dynamic routes](http-status-code.md#setting-a-404-status-code-for-missing-pages-for-dynamic-routes)

When using dynamic params in routes, setting a 404 status code if the given parameter for a segment points to a missing resource is important. Usually, the param is discovered to be missing when doing an async request with that parameter.

Errors can be thrown from inside these fetchers and caught by the nearest [`<ErrorBoundary>`](../../../reference/components/error-boundary.md) component from where the data is accessed. `<HttpStatusCode>` pairs very well with error boundaries because you can inspect the error in the ErrorBoundary's fallback. If the fetcher throws an error indicating the data was not found, you can render `<HttpStatusCode code={404} />`.

Note that when streaming responses [`renderStream`](../../../reference/rendering/render-to-stream.md), the HTTP Status can only be included if added *before* the stream first flushed. It is important to add `deferStream` to any resources calls that need to be loaded before responding.

```


import { Show, ErrorBoundary } from "solid-js";

import { query, createAsync } from "@solidjs/router";

import { HttpStatusCode } from "@solidjs/start";




const getHouse = query(async (house: string) => {

  if (house != "gryffindor") {

    throw new Error("House not found");

  }

  return house;

}, "house");




export default function House(props: { name: string }) {

  const house = createAsync(() => getHouse(props.name), { deferStream: true });

  return (

    <ErrorBoundary

      fallback={(e) => (

        <Show when={e.message === "House not found"}>

          <HttpStatusCode code={404} />

        </Show>

      )}

    >

      <div>{house()}</div>

    </ErrorBoundary>

  );

}
```

* * *

## [Parameters](http-status-code.md#parameters)

PropertyTypeDescriptioncodenumberThe HTTP status code

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fhttp-status-code.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fhttp-status-code)

Previous[← HttpHeader](http-header.md)

Next[StartServer →](start-server.md)

On this page

1. [Overview](#_top)
2. [Setting a 404 status code for the unmatched routes](#setting-a-404-status-code-for-the-unmatched-routes)
3. [Setting a 404 status code for missing pages for dynamic routes](#setting-a-404-status-code-for-missing-pages-for-dynamic-routes)
4. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/http-status-code.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fhttp-status-code.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fhttp-status-code)