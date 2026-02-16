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
  
  - [Middleware](../advanced/middleware.md)
  - [Sessions](../advanced/session.md)
  - [Request events](../advanced/request-events.md)
  - [Returning responses](../advanced/return-responses.md)
  - [Auth](../advanced/auth.md)
  - [WebSocket endpoint](../advanced/websocket.md)
- Guides
  
  - [Security](security.md)
  - [Data fetching](data-fetching.md)
  - [Data mutation](data-mutation.md)
  - [Service workers](service-workers.md)

Guides

# Service workers

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/service-workers.mdx)

To register a service worker:

1. Place your service-worker file in the `public` directory (e.g., `public/sw.js`), making it available at the root URL (`/sw.js`).
2. Add registration logic to the `entry-client.tsx` file.

```


// @refresh reload

import { mount, StartClient } from "@solidjs/start/client";




mount(() => <StartClient />, document.getElementById("app")!);




if ("serviceWorker" in navigator && import.meta.env.PROD) {

  window.addEventListener("load", () => {

    navigator.serviceWorker.register("/sw.js");

  });

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fguides%2Fservice-workers.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fguides%2Fservice-workers)

Previous[← Data mutation](data-mutation.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/service-workers.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fguides%2Fservice-workers.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fguides%2Fservice-workers)