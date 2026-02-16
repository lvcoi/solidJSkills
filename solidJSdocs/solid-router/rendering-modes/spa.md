[Solid **Router**](..)

- [Core](../../index.md)
- [Router](..)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid-router)[](https://discord.com/invite/solidjs)

LearnReference

- [Overview](..)
- Getting started
  
  - [Installation and setup](../getting-started/installation-and-setup.md)
  - [Component routing](../getting-started/component.md)
  - [Config-based routing](../getting-started/config.md)
- Concepts
  
  - [Navigation](../concepts/navigation.md)
  - [Path parameters](../concepts/path-parameters.md)
  - [Search parameters](../concepts/search-parameters.md)
  - [Catch-all routes](../concepts/catch-all.md)
  - [Nesting routes](../concepts/nesting.md)
  - [Layouts](../concepts/layouts.md)
  - [Alternative routers](../concepts/alternative-routers.md)
  - [Actions](../concepts/actions.md)
- Rendering modes
  
  - [Single page applications](spa.md)
  - [Server side rendering](ssr.md)
- Data fetching
  
  - [Queries](../data-fetching/queries.md)
  - [Streaming](../data-fetching/streaming.md)
  - [Revalidation](../data-fetching/revalidation.md)
  - How to
    
    - [Preload data](../data-fetching/how-to/preload-data.md)
    - [Handle pending and error states](../data-fetching/how-to/handle-error-and-loading-states.md)
- Advanced concepts
  
  - [Preloading](../advanced-concepts/preloading.md)
  - [Lazy loading](../advanced-concepts/lazy-loading.md)
- Guides
  
  - [Migration from v0.9.x](../guides/migration.md)

Rendering modes

# Single page applications

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/rendering-modes/spa.mdx)

When deploying applications that use a client-side router without relying on Server-Side Rendering, it is important that redirects to the index page are handled properly. This prevents the CDN or hosting service from returning a "not found" error when accessing URLs that do not correspond to files.

Each provider has a different way of doing this. For example, Netlify provides a `_redirects` file that contains:

```


/*   /index.html   200
```

Vercel, on the other hand, requires a rewrites section in your `vercel.json`:

```


{

  "rewrites": [

    {

      "source": "/(.*)",

      "destination": "/index.html"

    }

  ]

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Frendering-modes%2Fspa.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Frendering-modes%2Fspa)

Previous[← Actions](../concepts/actions.md)

Next[Server side rendering →](ssr.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/rendering-modes/spa.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Frendering-modes%2Fspa.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Frendering-modes%2Fspa)