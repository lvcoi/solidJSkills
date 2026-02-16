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

# Path parameters

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/path-parameters.mdx)

Parameters within a route are used to capture dynamic values from the URL. This is useful for creating routes that are more flexible and can handle different values.

```


<Route path="/users/:id" component={User} />
```

In this example, the `:id` parameter will capture any value that comes after `/users/` in the URL. The colon `:` is used to denote a parameter, and `id` is the name of the parameter. When a URL matches this route, the `User` component will be rendered.

Animations & Transitions

Routes that share the same path match will be treated as the same route. If a force re-render is needed, you can wrap your component in a keyed [`Show`](../../reference/components/show.md) component:

```


<Show when={params.something} keyed>

  <MyComponent />

</Show>
```

* * *

## [Accessing parameters](path-parameters.md#accessing-parameters)

You can retrieve the values captured by parameters using [`useParams`](../reference/primitives/use-params.md).

```


import { useParams } from "@solidjs/router";




function User() {

    const params = useParams();

    return <div>User ID: {params.id}</div>; {/* Output: User ID: 123 */}

}
```

* * *

## [Validating parameters](path-parameters.md#validating-parameters)

Each path parameter can be validated using the `MatchFilter` on the `Route` component. Rather than checking for the presence of a parameter manually, you can use a `MatchFilter` to ensure that the parameter is in the correct format.

```


import { lazy } from "solid-js";

import { render } from "solid-js/web";

import { Router, Route } from "@solidjs/router";




const User = import("./pages/User");




const filters = {

  parent: ["mom", "dad"], // allow enum values

  id: /^\d+$/, // only allow numbers

  withHtmlExtension: (v: string) => v.length > 5 && v.endsWith(".html"), // we want an `*.html` extension

};




render(() => (

  <Router>

    <Route

      path="/users/:parent/:id/:withHtmlExtension"

      component={User}

      matchFilters={filters}

    />

  </Router>

), document.getElementById("app"));
```

Here, the `matchFilter` prop validates the `parent`, `id`, and `withHtmlExtension` parameters against the specified filters defined in the `filters` object. If the validation fails, the route will not match and the component will not be rendered.

In this example, that means:

- `/users/mom/123/contact.html` would match,
- `/users/dad/456/about.html` would match,
- `/users/aunt/123/contact.html` would not match as `:parent` is not 'mom' or 'dad',
- `/users/mom/me/contact.html` would not match as `:id` is not a number,
- `/users/dad/123/contact` would not match as `:withHtmlExtension` is missing .html.

* * *

## [Optional parameters](path-parameters.md#optional-parameters)

Parameters can be made optional by adding a `?` after the parameter name.

```


<Route path="/users/:id?" component={User} />
```

With this setup, the route would match both `/users` and `/users/123`. However, it is important to note that the `?` only makes the parameter optional for the last segment of the path. As a result, paths beyond the optional parameter will *not* be matched. For instance, `/users/123/contact` would not match.

* * *

## [Wildcard routes](path-parameters.md#wildcard-routes)

Wildcard routes can be used to match any number of segments in a path. To create a wildcard route, use `*` followed by the parameter name.

```


<Route path="/users/*" component={User} />
```

Using an asterisk `*` as a parameter will match any number of segments after `/users`. This includes `/users`, `/users/123`, `/users/123/contact`, and so on.

If you need to expose the wildcard segments of the path, you can name them:

```


<Route path="/users/*rest" component={User} />
```

In this case, `rest` will contain the rest of the path after `/users/`.

It is important to note that wildcard routes must be located at the **end of the path**. If you place a wildcard route before the end, such as `/users/*rest/:id`, no routes will be matched.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Fpath-parameters.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Fpath-parameters)

Previous[← Navigation](navigation.md)

Next[Search parameters →](search-parameters.md)

On this page

1. [Overview](#_top)
2. [Accessing parameters](#accessing-parameters)
3. [Validating parameters](#validating-parameters)
4. [Optional parameters](#optional-parameters)
5. [Wildcard routes](#wildcard-routes)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/path-parameters.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Fpath-parameters.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Fpath-parameters)