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

# entry-server.tsx

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/entry-server.mdx)

`entry-server.tsx` is where an application starts on the server. This happens by `entry-server.tsx` providing a document component to [`<StartServer>`](../server/start-server.md) and passing it into [`createHandler`](../server/create-handler.md) for server side rendering. A typical `entry-server.tsx` for a new project looks like this:

```


import { createHandler, StartServer } from "@solidjs/start/server";




export default createHandler(() => (

  <StartServer

    document={({ assets, children, scripts }) => (

      <html lang="en">

        <head>

          <meta charset="utf-8" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="icon" href="/favicon.ico" />

          {assets}

        </head>

        <body>

          <div id="app">{children}</div>

          {scripts}

        </body>

      </html>

    )}

  />

));
```

For setting different SSR modes (sync | async | stream), see [`createHandler`](../server/create-handler.md).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fentrypoints%2Fentry-server.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fentrypoints%2Fentry-server)

Previous[← entry-client.tsx](entry-client.md)

Next[defineConfig →](../config/define-config.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/entry-server.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fentrypoints%2Fentry-server.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fentrypoints%2Fentry-server)