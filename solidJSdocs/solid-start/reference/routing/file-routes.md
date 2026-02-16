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
  
  - [FileRoutes](file-routes.md)
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

Routing

# FileRoutes

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/routing/file-routes.mdx)

`FileRoutes` is a component that creates a [`Route`](../../../solid-router/reference/components/route.md) for each file in the `/src/routes` directory. This creates a `route` export to define the route configuration for the router of your choice.

For example, using [`solid-router`](../../../solid-router) would look like the following:

```


import { Suspense } from "solid-js";

import { Router } from "@solidjs/router";

import { FileRoutes } from "@solidjs/start/router";




export default function App() {

  return (

    <Router root={(props) => <Suspense>{props.children}</Suspense>}>

      <FileRoutes />

    </Router>

  );

}
```

See the [SolidStart routing guide](../../building-your-application/routing.md) for more details.

caution

If removing the `FileRoutes` component from your `app.tsx` file, you will need to manually add all of your routes.

While this is possible it does come with tradeoffs. For example, optimizations such as preloaded script tags will no longer be available.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Frouting%2Ffile-routes.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Frouting%2Ffile-routes)

Previous[← defineConfig](../config/define-config.md)

Next[clientOnly →](../client/client-only.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/routing/file-routes.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Frouting%2Ffile-routes.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Frouting%2Ffile-routes)