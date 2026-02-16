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

# app.tsx

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/app.mdx)

The `App` component is the isomorphic (shared on server and browser) entry point into your application. This is where the code runs on both sides. This is like the classic entry point where you can define your router, and other top level components.

* * *

## [Basic example (with routing)](app.md#basic-example-with-routing)

This is where routers setup navigation between the pages discovered by the [`FileRouter`](../routing/file-routes.md).

```


import { A, Router } from "@solidjs/router";

import { FileRoutes } from "@solidjs/start/router";

import { Suspense } from "solid-js";




export default function App() {

  return (

    <Router

      root={(props) => (

          <A href="/">Index</A>

          <A href="/about">About</A>

          <Suspense>{props.children}</Suspense>

      )}

    >

      <FileRoutes />

    </Router>

  );

}
```

See a similar example in [StackBlitz](https://stackblitz.com/github/solidjs/solid-start/tree/main/examples/basic?file=src%2Fapp.tsx)

* * *

## [Bare example (no routing)](app.md#bare-example-no-routing)

Since SolidStart does not come packaged with a router, you can simply return your template of choice:

```


export default function App() {

  return (

    <main>

      <h1>Hello world!</h1>

    </main>

  );

}
```

See this example in [StackBlitz](https://stackblitz.com/github/solidjs/solid-start/tree/main/examples/bare?file=src%2Fapp.tsx)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fentrypoints%2Fapp.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fentrypoints%2Fapp)

Previous[← app.config.ts](app-config.md)

Next[entry-client.tsx →](entry-client.md)

On this page

1. [Overview](#_top)
2. [Basic example (with routing)](#basic-example-with-routing)
3. [Bare example (no routing)](#bare-example-no-routing)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/app.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fentrypoints%2Fapp.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fentrypoints%2Fapp)