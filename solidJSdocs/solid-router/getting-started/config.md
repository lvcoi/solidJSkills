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

# Config-based routing

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/getting-started/config.mdx)

Solid Router supports config-based routing, which offers the same capabilities as [component routing](component.md). The decision to use config-based routing over component routing depends largely on personal preference.

To define a single route, a route definition object can be passed to the [`<Router>`](../reference/components/router.md) component:

```


import { lazy } from "solid-js";

import { render } from "solid-js/web";

import { Router } from "@solidjs/router";




const routes = {

    path: "/",

    component: lazy(() => import("/routes/index.js")),

}







render(() => <Router>{routes}</Router>, document.getElementById("app"));
```

In the route definition object, a `path` property must be provided to define the path to match and a `component` property that specifies the component (or element) to render when the path matches.

To define multiple routes, an array of route definition objects can be passed to the `<Router>` component:

```


import { lazy } from "solid-js";

import { render } from "solid-js/web";

import { Router } from "@solidjs/router";




const routes = [

    {

        path: "/",

        component: lazy(() => import("/routes/index.js")),

    },

    {

        path: "/hello-world",

        component: () => <h1>Hello, World!</h1>

    },

    {

        path: "/about",

        component: lazy(() => import("/routes/about.js")),

    }

]







render(() => <Router>{routes}</Router>, document.getElementById("app"));
```

Each path in the array of route definition objects will be matched against the current URL, and the corresponding component will be rendered when a match is found. In the example above, the root path (`/`) renders the `Home` page, the path `/hello-world` renders an `h1` element, and the path `/about` renders the `About` component.

Lazy Loading

When using configuration-based routing, it is best practice to use the [`lazy`](../../reference/component-apis/lazy.md) component to load components asynchronously. This will help improve the performance of your application by only loading the components when they are needed.

```


import { lazy } from "solid-js";

import { render } from "solid-js/web";

import { Router } from "@solidjs/router";




const routes = [

    {

        path: "/",

        component: lazy(() => import("/routes/index.js")),

    },

    {

        path: "/hello-world",

        component: () => <h1>Hello, World!</h1>

    },

    {

        path: "/about",

        component: lazy(() => import("/routes/about.js")),

    }

]







render(() => <Router>{routes}</Router>, document.getElementById("app"));
```

To learn more about lazy loading, see the page on [lazy loading components](../advanced-concepts/lazy-loading.md).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fgetting-started%2Fconfig.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fgetting-started%2Fconfig)

Previous[← Component routing](component.md)

Next[Navigation →](../concepts/navigation.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/getting-started/config.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fgetting-started%2Fconfig.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fgetting-started%2Fconfig)