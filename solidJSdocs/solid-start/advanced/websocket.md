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

# WebSocket endpoint

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/websocket.mdx)

WebSocket endpoint may be included by passing the ws handler file you specify in your start config. Note that this feature is [experimental on the Nitro server](https://nitro.build/guide/websocket#opt-in-to-the-experimental-feature) and its config may change in future releases of SolidStart. Use it with caution.

```


import { defineConfig } from "@solidjs/start/config";




export default defineConfig({

  server: {

    experimental: {

      websocket: true,

    },

  },

}).addRouter({

  name: "ws",

  type: "http",

  handler: "./src/ws.ts",

  target: "server",

  base: "/ws",

});
```

Inside the ws file, you can export an eventHandler function to manage WebSocket connections and events:

```


import { eventHandler } from "vinxi/http";




export default eventHandler({

  handler() {},

  websocket: {

    async open(peer) {

      console.log("open", peer.id, peer.url);

    },

    async message(peer, msg) {

      const message = msg.text();

      console.log("msg", peer.id, peer.url, message);

    },

    async close(peer, details) {

      console.log("close", peer.id, peer.url);

    },

    async error(peer, error) {

      console.log("error", peer.id, peer.url, error);

    },

  },

});
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fadvanced%2Fwebsocket.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fadvanced%2Fwebsocket)

Previous[← Auth](auth.md)

Next[Security →](../guides/security.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/websocket.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fadvanced%2Fwebsocket.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fadvanced%2Fwebsocket)