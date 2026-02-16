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
  
  - [Single page applications](../rendering-modes/spa.md)
  - [Server side rendering](../rendering-modes/ssr.md)
- Data fetching
  
  - [Queries](../data-fetching/queries.md)
  - [Streaming](../data-fetching/streaming.md)
  - [Revalidation](../data-fetching/revalidation.md)
  - How to
    
    - [Preload data](../data-fetching/how-to/preload-data.md)
    - [Handle pending and error states](../data-fetching/how-to/handle-error-and-loading-states.md)
- Advanced concepts
  
  - [Preloading](preloading.md)
  - [Lazy loading](lazy-loading.md)
- Guides
  
  - [Migration from v0.9.x](../guides/migration.md)

Advanced concepts

# Lazy loading

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/advanced-concepts/lazy-loading.mdx)

Lazy loading allows you to load only the necessary resources when they are needed. This can be useful when you have a large application with a lot of routes and components, and you want to reduce the initial load time.

In Solid Router, you can lazy load components using the `lazy` function from Solid:

```


import { lazy } from "solid-js";

import { Router, Route } from "@solidjs/router";




const Home = lazy(() => import("./Home"));




const Users = lazy(() => import("./Users"));




const App = () => (

  <Router>

    <Route path="/" component={Home} />

    <Route path="/users" component={Users} />

  </Router>

);
```

In the example above, the `Users` component is lazy loaded using the `lazy` function. The `lazy` function takes a function that returns a promise, which resolves to the component you want to load. When the route is matched, the component will be loaded and rendered.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fadvanced-concepts%2Flazy-loading.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fadvanced-concepts%2Flazy-loading)

Previous[← Preloading](preloading.md)

Next[Migration from v0.9.x →](../guides/migration.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/advanced-concepts/lazy-loading.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fadvanced-concepts%2Flazy-loading.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fadvanced-concepts%2Flazy-loading)