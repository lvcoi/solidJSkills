[Solid **Router**](../..)

- [Core](../../../index.md)
- [Router](../..)
- [SolidStart](../../../solid-start)
- [Meta](../../../solid-meta)

[](https://github.com/solidjs/solid-router)[](https://discord.com/invite/solidjs)

LearnReference

- [Overview](../..)
- Getting started
  
  - [Installation and setup](../../getting-started/installation-and-setup.md)
  - [Component routing](../../getting-started/component.md)
  - [Config-based routing](../../getting-started/config.md)
- Concepts
  
  - [Navigation](../../concepts/navigation.md)
  - [Path parameters](../../concepts/path-parameters.md)
  - [Search parameters](../../concepts/search-parameters.md)
  - [Catch-all routes](../../concepts/catch-all.md)
  - [Nesting routes](../../concepts/nesting.md)
  - [Layouts](../../concepts/layouts.md)
  - [Alternative routers](../../concepts/alternative-routers.md)
  - [Actions](../../concepts/actions.md)
- Rendering modes
  
  - [Single page applications](../../rendering-modes/spa.md)
  - [Server side rendering](../../rendering-modes/ssr.md)
- Data fetching
  
  - [Queries](../queries.md)
  - [Streaming](../streaming.md)
  - [Revalidation](../revalidation.md)
  - How to
    
    - [Preload data](preload-data.md)
    - [Handle pending and error states](handle-error-and-loading-states.md)
- Advanced concepts
  
  - [Preloading](../../advanced-concepts/preloading.md)
  - [Lazy loading](../../advanced-concepts/lazy-loading.md)
- Guides
  
  - [Migration from v0.9.x](../../guides/migration.md)

How to

# Handle pending and error states

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/data-fetching/how-to/handle-error-and-loading-states.mdx)

The `createAsync` primitive is designed to work with Solid's native components for managing asynchronous states. It reports its pending state to the nearest [`<Suspense>` boundary](../../../reference/components/suspense.md) to display loading fallbacks, and propagate errors to an [`<ErrorBoundary>`](../../../reference/components/error-boundary.md) for handling and displaying error messages.

```


import { Suspense, ErrorBoundary, For } from "solid-js";

import { query, createAsync } from "@solidjs/router";




const getNewsQuery = query(async () => {

  // ... Fetches the latest news from an API.

}, "news");




function NewsFeed() {

  const news = createAsync(() => getNewsQuery());




  return (

    <ErrorBoundary fallback={<p>Could not fetch news.</p>}>

      <Suspense fallback={<p>Loading news...</p>}>

        <ul>

          <For each={news()}>{(item) => <li>{item.headline}</li>}</For>

        </ul>

      </Suspense>

    </ErrorBoundary>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fdata-fetching%2Fhow-to%2Fhandle-error-and-loading-states.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fdata-fetching%2Fhow-to%2Fhandle-error-and-loading-states)

Previous[← Preload data](preload-data.md)

Next[Preloading →](../../advanced-concepts/preloading.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/data-fetching/how-to/handle-error-and-loading-states.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fdata-fetching%2Fhow-to%2Fhandle-error-and-loading-states.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fdata-fetching%2Fhow-to%2Fhandle-error-and-loading-states)