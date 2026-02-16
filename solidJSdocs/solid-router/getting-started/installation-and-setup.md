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

# Installation and setup

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/getting-started/installation-and-setup.mdx)

Solid Router is the universal router for Solid which works for rendering on the client or the server. It was inspired by and combines paradigms of [React Router](https://reactrouter.com/en/main) and the [Ember Router](https://guides.emberjs.com/release/routing/).

A router provides a way to change a user's view based on the URL in the browser. This allows a "single-page" application to simulate a traditional multipage site. To use Solid Router, components called Routes that depend on the value of the URL (the "path") are specified, and the router handles the mechanism of swapping them in and out.

* * *

## [Setup](installation-and-setup.md#setup)

To get started with Solid Router, install it using your preferred package manager.

npmpnpmyarnbundeno

```


npm i @solidjs/router
```

```


pnpm i @solidjs/router
```

```


yarn add @solidjs/router
```

```


bun i @solidjs/router
```

```


deno add npm:@solidjs/router
```

* * *

## [Configure the routes](installation-and-setup.md#configure-the-routes)

The [`Router`](../reference/components/router.md) component is the root component of the router. It is responsible for managing the URL and rendering the appropriate [`Route`](../reference/components/route.md) based on the URL.

To configure your routes, import the `Router` component and then start the application by rendering the router component.

```


import { render } from "solid-js/web";

import { Router } from "@solidjs/router";




const wrapper = document.getElementById("app");




if (!wrapper) {

  throw new Error("Wrapper div not found");

}




render(() => <Router />, wrapper)
```

This sets up the router that will match on the url and render the appropriate route.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fgetting-started%2Finstallation-and-setup.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fgetting-started%2Finstallation-and-setup)

Previous[← Overview](..)

Next[Component routing →](component.md)

On this page

1. [Overview](#_top)
2. [Setup](#setup)
3. [Configure the routes](#configure-the-routes)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/getting-started/installation-and-setup.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fgetting-started%2Finstallation-and-setup.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fgetting-started%2Finstallation-and-setup)