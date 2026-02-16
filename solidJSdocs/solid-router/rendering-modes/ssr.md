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

# Server side rendering

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/rendering-modes/ssr.mdx)

Solid Router supports all of Solid's SSR capabilities. In addition, it has Solid's transitions included, so it can be used freely with [suspense](../../reference/components/suspense.md), [resources](../../reference/basic-reactivity/create-resource.md), and [lazy components](../../reference/component-apis/lazy.md).

When using SSR, there is the option to use the static router directly or let the browser router default to it on the server by passing in the URL.

```


import { isServer } from "solid-js/web";

import { Router } from "@solidjs/router";




<Router url={isServer ? req.url : ""} />;
```

Solid Router also provides a way to define a `preload` function that loads parallel to the routes [render-as-you-fetch](https://epicreact.dev/render-as-you-fetch/).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Frendering-modes%2Fssr.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Frendering-modes%2Fssr)

Previous[← Single page applications](spa.md)

Next[Queries →](../data-fetching/queries.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/rendering-modes/ssr.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Frendering-modes%2Fssr.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Frendering-modes%2Fssr)