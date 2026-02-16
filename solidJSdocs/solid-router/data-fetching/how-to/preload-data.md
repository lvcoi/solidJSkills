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

# Preload data

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/data-fetching/how-to/preload-data.mdx)

Preloading data improves perceived performance by fetching the data for an upcoming page before the user navigates to it.

Solid Router initiates preloading in two scenarios:

- When a user indicates intent to navigate to the page (e.g., by hovering over a link).
- When the route's component is rendering.

This ensures data fetching starts as early as possible, often making data ready once the component renders.

Preloading is configured using the [`preload`](../../reference/preload-functions/preload.md) prop on a [`Route`](../../reference/components/route.md). This prop accepts a function that calls one or more queries. When triggered, the queries execute and their results are stored in a short-lived internal cache. Once the user navigates and the destination route’s component renders, any `createAsync` calls within the page will consume the preloaded data. Thanks to the [deduplication mechanism](preload-data.md#deduplication), no redundant network requests are made.

```


import { Show } from "solid-js";

import { Route, query, createAsync } from "@solidjs/router";




const getProductQuery = query(async (id: string) => {

  // ... Fetches product details for the given ID.

}, "product");




function ProductDetails(props) {

  const product = createAsync(() => getProductQuery(props.params.id));




  return (

    <Show when={product()}>

      <h1>{product().name}</h1>

    </Show>

  );

}




function preloadProduct({ params }: { params: { id: string } }) {

  getProductQuery(params.id);

}




function Routes() {

  return (

    <Route

      path="/products/:id"

      component={ProductDetails}

      preload={preloadProduct}

    />

  );

}
```

In this example, hovering a link to `/products/:id` triggers `preloadProduct`. When the `ProductDetails` component renders, its `createAsync` call will instantly resolve with the preloaded data.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fdata-fetching%2Fhow-to%2Fpreload-data.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fdata-fetching%2Fhow-to%2Fpreload-data)

Previous[← Revalidation](../revalidation.md)

Next[Handle pending and error states →](handle-error-and-loading-states.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/data-fetching/how-to/preload-data.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fdata-fetching%2Fhow-to%2Fpreload-data.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fdata-fetching%2Fhow-to%2Fpreload-data)