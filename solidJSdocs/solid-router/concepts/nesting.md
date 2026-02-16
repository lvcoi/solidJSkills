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
  
  - [Navigation](navigation.md)
  - [Path parameters](path-parameters.md)
  - [Search parameters](search-parameters.md)
  - [Catch-all routes](catch-all.md)
  - [Nesting routes](nesting.md)
  - [Layouts](layouts.md)
  - [Alternative routers](alternative-routers.md)
  - [Actions](actions.md)
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

Concepts

# Nesting routes

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/nesting.mdx)

Nested routes are a way to create a hierarchy of routes in your application. This is useful for creating a [layout](layouts.md) that is consistent across multiple pages, or for creating a relationship between pages that are related to each other.

In Solid Router, the following two route definitions have the same result:

```


<Route path="/users/:id" component={User} />




// is equivalent to




<Route path="/users">

  <Route path="/:id" component={User} />

</Route>
```

In both cases, the `User` component will render when the URL is `/users/:id`. The difference, however, is that in the first case, `/users/:id` is the only route, and in the second case, `/users` is also a route.

**Note:** visit the [config-based nesting](nesting.md#config-based-nesting) section for more information on how to nest routes using the configuration-based approach.

* * *

## [Limitations](nesting.md#limitations)

When nesting routes, only the innermost `Route` component will become its own route. For example, if you were to nest a route, only the innermost route will become its own route, even if the parent routes are also specified and provided with a component:

```


<Route path="/users" component={Users}>

  <Route path="/:id" component={User} />

</Route>
```

For a parent route to become its own route, it must be specified separately. This can be done by explicitly defining the parent route as well as the nested route:

```


<Route path="/users" component={Users} />

<Route path="/users/:id" component={User} />
```

Another way to achieve the same result is to nest the routes and explicitly define the parent route through the use of an empty path, and then specify the nested route:

```


<Route path="/users">

  <Route path="/" component={Users} />

  <Route path="/:id" component={User} />

</Route>
```

In both cases, the `Users` component will render when the URL is `/users`, and the `User` component will render when the URL is `/users/:id`.

* * *

## [Config-based nesting](nesting.md#config-based-nesting)

When using configuration-based routing, nesting can be achieved through passing your route definitions into the `children` property of a parent route definition object:

```


import { render } from "solid-js/web";

import { Router } from "@solidjs/router";




const routes = {

  path: "/",

  component: lazy(() => import("/routes/index.js")),

  children: [

    {

      path: "/users",

      component: lazy(() => import("/routes/users.js")),

      children: [

        {

          path: "/:id",

          component: lazy(() => import("/routes/user.js")),

        },

      ],

    },

  ],

};




render(() => <Router>{routes}</Router>, document.getElementById("app"));
```

In this example, when you navigate to `/users/:id`, the `User` component will render. Similarly, when you navigate to `/users`, the `Users` component will render.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Fnesting.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Fnesting)

Previous[← Catch-all routes](catch-all.md)

Next[Layouts →](layouts.md)

On this page

1. [Overview](#_top)
2. [Limitations](#limitations)
3. [Config-based nesting](#config-based-nesting)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/nesting.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Fnesting.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Fnesting)