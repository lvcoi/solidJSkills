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

# Catch-all routes

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/catch-all.mdx)

Catch-all routes are used to match any URL that does not match any other route in the application. This is useful for displaying a 404 page or redirecting to a specific route when a user enters an invalid URL.

To create a catch-all route, place a route with an asterisk (`*`) as the path at the end of the route list. Optionally, you can name the parameter to access the unmatched part of the URL.

```


import { Router, Route } from "@solidjs/router";




import Home from "./Home";

import About from "./About";

import NotFound from "./NotFound";




const App = () => (

  <Router>

    <Route path="/home" component={Home} />

    <Route path="/about" component={About} />

    <Route path="*404" component={NotFound} />

  </Router>

);
```

Now, if a user navigates to a URL that does not match `/home` or `/about`, the `NotFound` component will be rendered.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Fcatch-all.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Fcatch-all)

Previous[← Search parameters](search-parameters.md)

Next[Nesting routes →](nesting.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/catch-all.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Fcatch-all.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Fcatch-all)