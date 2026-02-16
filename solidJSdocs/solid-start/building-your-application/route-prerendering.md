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
  
  - [Routing](routing.md)
  - [API routes](api-routes.md)
  - [CSS and styling](css-and-styling.md)
  - [Data fetching](data-fetching.md)
  - [Data mutation](data-mutation.md)
  - [Head and metadata](head-and-metadata.md)
  - [Route Pre-rendering](route-prerendering.md)
  - [Static assets](static-assets.md)
- Advanced
  
  - [Middleware](../advanced/middleware.md)
  - [Sessions](../advanced/session.md)
  - [Request events](../advanced/request-events.md)
  - [Returning responses](../advanced/return-responses.md)
  - [Auth](../advanced/auth.md)
  - [WebSocket endpoint](../advanced/websocket.md)
- Guides
  
  - [Security](../guides/security.md)
  - [Data fetching](../guides/data-fetching.md)
  - [Data mutation](../guides/data-mutation.md)
  - [Service workers](../guides/service-workers.md)

Building your application

# Route Pre-rendering

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/route-prerendering.mdx)

Route pre-rendering powers Static Site Generation (SSG) by producing static HTML pages during the build process. This results in faster load times and better SEO, making it especially useful for content-rich sites such as documentation, blogs, and marketing pages. Static files are served without server-side processing at runtime.

Configure prerendering for specific routes using the `routes` option

```


import { defineConfig } from "@solidjs/start/config";




export default defineConfig({

  server: {

    prerender: {

      routes: ["/", "/about"]

    }

  }

});
```

Or to pre-render all routes, you can pass `true` to the `crawlLinks` option

```


import { defineConfig } from "@solidjs/start/config";




export default defineConfig({

  server: {

    prerender: {

      crawlLinks: true

    }

  }

});
```

For advanced pre-rendering options, refer to [Nitro's documentation](https://nitro.build/config#prerender).

[SolidBase](https://solidbase.dev) simplifies SSG development with built-in support for fast, pre-rendered Markdown and MDX pages.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fbuilding-your-application%2Froute-prerendering.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fbuilding-your-application%2Froute-prerendering)

Previous[← Head and metadata](head-and-metadata.md)

Next[Static assets →](static-assets.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/route-prerendering.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fbuilding-your-application%2Froute-prerendering.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fbuilding-your-application%2Froute-prerendering)