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

# Alternative routers

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/alternative-routers.mdx)

While the default router uses the browser's `location.pathname` to determine the current route, you can use alternative routers to change this behavior. This includes:

- [**Hash mode**](alternative-routers.md#hash-mode): Uses the hash portion of the URL to determine the current route.
- [**Memory mode**](alternative-routers.md#memory-mode): Keeps the history of the router in memory, useful for testing.

* * *

## [Hash mode](alternative-routers.md#hash-mode)

Hash mode routing uses the hash portion of the URL to manage an application's state and navigation. Unlike the [default router](../reference/components/router.md), the hash portion of the URL will not be handled by the server meaning this is a client-side only routing. To use hash mode, replace the `<Router />` component in the application with [`<HashRouter />`](../reference/components/hash-router.md).

```


import { render } from "solid-js/web";

import {

    Router

    HashRouter,

    Route

    } from "@solidjs/router";




const App = (props) => (

    <>

        <h1>Root header</h1>

        {props.children}

    </>

);




render(

    () => <Router root={App}>{/*... routes */}</Router>,

    () => <HashRouter root={App}>{/*... routes */}</HashRouter>,

    document.getElementById("app")

);
```

* * *

## [Memory mode](alternative-routers.md#memory-mode)

Unlike the default router and hash, the memory router does not interact with the browser's URL. This means that while the URL in the browser's address bar will change, the router will not navigate to the new route. This gives you the ability to control the router's state and history in memory which can be useful for testing purposes.

To use memory mode, replace the `<Router />` component in the application with [`<MemoryRouter />`](../reference/components/memory-router.md):

```


import { render } from "solid-js/web";

import {

    Router

    MemoryRouter,

    Route

    } from "@solidjs/router";




const App = (props) => (

    <>

        <h1>Root header</h1>

        {props.children}

    </>

);




render(

    () => <Router root={App}>{/*... routes */}</Router>,

    () => <MemoryRouter root={App}>{/*... routes */}</MemoryRouter>,

    document.getElementById("app")

);
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Falternative-routers.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Falternative-routers)

Previous[← Layouts](layouts.md)

Next[Actions →](actions.md)

On this page

1. [Overview](#_top)
2. [Hash mode](#hash-mode)
3. [Memory mode](#memory-mode)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/alternative-routers.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Falternative-routers.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Falternative-routers)