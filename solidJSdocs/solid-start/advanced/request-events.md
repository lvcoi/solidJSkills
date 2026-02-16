[**Solid**Start](..)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](..)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid-start)[](https://discord.com/invite/solidjs)

LearnReference

- [Overview](..)
- [Getting started](../getting-started.md)
- Building your application
  
  - [Routing](../building-your-application/routing.md)
  - [API routes](../building-your-application/api-routes.md)
  - [CSS and styling](../building-your-application/css-and-styling.md)
  - [Data fetching](../building-your-application/data-fetching.md)
  - [Data mutation](../building-your-application/data-mutation.md)
  - [Head and metadata](../building-your-application/head-and-metadata.md)
  - [Route Pre-rendering](../building-your-application/route-prerendering.md)
  - [Static assets](../building-your-application/static-assets.md)
- Advanced
  
  - [Middleware](middleware.md)
  - [Sessions](session.md)
  - [Request events](request-events.md)
  - [Returning responses](return-responses.md)
  - [Auth](auth.md)
  - [WebSocket endpoint](websocket.md)
- Guides
  
  - [Security](../guides/security.md)
  - [Data fetching](../guides/data-fetching.md)
  - [Data mutation](../guides/data-mutation.md)
  - [Service workers](../guides/service-workers.md)

Advanced

# Request events

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/request-events.mdx)

Request events in SolidStart are retrieved using the [`getRequestEvent`](../../reference/server-utilities/get-request-event.md) from `@solidjs/web`. These requests happen anywhere on the server.

* * *

## [Locals](request-events.md#locals)

SolidStart uses `event.locals` to pass around a local context where needed.

When adding fields to `event.locals`, the fields can be typed:

```


/// <reference types="@solidjs/start/env" />

declare module App {

  interface RequestEventLocals {

    /**

     * Declare your getRequestEvent().locals here

     */

  }

}
```

* * *

## [nativeEvent](request-events.md#nativeevent)

Sometimes access is still needed to the underlying event from [Vinxi](https://vinxi.vercel.app/). This can be accessed that using the `.nativeEvent` property, which is the underlying H3Event used, and can be passed to the helpers available in the ecosystem. Note that Vinxi HTTP helpers *do not* treeshake so you can only import them in files that do not contain client or isomorphic code.

Many of these events support Async Local Storage so this may not be needed.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fadvanced%2Frequest-events.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fadvanced%2Frequest-events)

Previous[← Sessions](session.md)

Next[Returning responses →](return-responses.md)

On this page

1. [Overview](#_top)
2. [Locals](#locals)
3. [nativeEvent](#nativeevent)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/request-events.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fadvanced%2Frequest-events.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fadvanced%2Frequest-events)