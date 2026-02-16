[Solid **Router**](..)

- [Core](../../index.md)
- [Router](..)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid-router)[](https://discord.com/invite/solidjs)

LearnReference

- [Overview](..)
- Getting started
  
  - [Installation and setup](installation-and-setup.md)
  - [Component routing](component.md)
  - [Config-based routing](config.md)
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
  
  - [Preloading](../advanced-concepts/preloading.md)
  - [Lazy loading](../advanced-concepts/lazy-loading.md)
- Guides
  
  - [Migration from v0.9.x](../guides/migration.md)

Getting started

# Component routing

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/getting-started/component.mdx)

In Solid Router, routes can be defined directly in an application's template using JSX. This is the most common way to define routes in Solid Router.

To define routes using JSX, the [`Route`](../reference/components/route.md) is added to the [`<Router>`](../reference/components/router.md) component for each path you want to define:

```


import { render } from "solid-js/web";

import { Router, Route } from "@solidjs/router";




import Home from "./routes/Home";




render(

    () => (

        <Router>

            <Route path="/" component={Home} />

        </Router>

    ),

    document.getElementById("app")

);
```

The Route component takes a `path` prop, which is the path to match, and a `component` prop, where you pass the component (or element) to render when the path matches. In the example above, the `Home` page is rendered when the user navigates to the root path `/`.

To apply multiple routes to the router, add additional `Route` components to the `Router`:

```


import { render } from "solid-js/web";

import { Router, Route } from "@solidjs/router";




import Home from "./routes/index.jsx";

import About from "./routes/about.jsx";




render(

    () => (

        <Router>

            <Route path="/" component={Home} />

            <Route path="/hello-world" component={() => <h1>Hello World!</h1>} />

            <Route path="/about" component={About} />

        </Router>

    ),

    document.getElementById("app")

);
```

This example defines three routes: the root path (`/`) which renders the `Home` page, the path `/hello-world` which renders an `h1` element, and the path `/about` which renders the `About` component.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fgetting-started%2Fcomponent.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fgetting-started%2Fcomponent)

Previous[← Installation and setup](installation-and-setup.md)

Next[Config-based routing →](config.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/getting-started/component.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fgetting-started%2Fcomponent.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fgetting-started%2Fcomponent)