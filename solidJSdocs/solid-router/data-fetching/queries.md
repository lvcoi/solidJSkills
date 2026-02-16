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
  
  - [Queries](queries.md)
  - [Streaming](streaming.md)
  - [Revalidation](revalidation.md)
  - How to
    
    - [Preload data](how-to/preload-data.md)
    - [Handle pending and error states](how-to/handle-error-and-loading-states.md)
- Advanced concepts
  
  - [Preloading](../advanced-concepts/preloading.md)
  - [Lazy loading](../advanced-concepts/lazy-loading.md)
- Guides
  
  - [Migration from v0.9.x](../guides/migration.md)

Data fetching

# Queries

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/data-fetching/queries.mdx)

Queries are the core building blocks for data fetching in Solid Router. They provide an elegant solution for managing data fetching.

* * *

## [Defining queries](queries.md#defining-queries)

They are defined using the [`query` function](../reference/data-apis/query.md). It wraps the data-fetching logic and extends it with powerful capabilities like [request deduplication](queries.md#deduplication) and [automatic revalidation](queries.md#revalidation).

The `query` function takes two parameters: a **fetcher** and a **name**.

- The **fetcher** is an asynchronous function that fetches data from any source, such as a remote API.
- The **name** is a unique string used to identify the query. When a query is called, Solid Router uses this name and the arguments passed to the query to create a unique key, which is used for the internal deduplication mechanism.

```


import { query } from "@solidjs/router";




const getUserProfileQuery = query(async (userId: string) => {

  const response = await fetch(

    `https://api.example.com/users/${encodeURIComponent(userId)}`

  );

  const json = await response.json();




  if (!response.ok) {

    throw new Error(json?.message ?? "Failed to load user profile.");

  }




  return json;

}, "userProfile");
```

In this example, the defined query fetches a user's profile from an API. If the request fails, the fetcher will throw an error that will be caught by the nearest [`<ErrorBoundary>`](../../reference/components/error-boundary.md) in the component tree.

* * *

## [Using queries in components](queries.md#using-queries-in-components)

Defining a query does not by itself fetch any data. To access its data, the query can be used with the [`createAsync` primitive](../reference/data-apis/create-async.md). `createAsync` takes an asynchronous function, such as a query, and returns a signal that tracks its result.

```


import { For, Show } from "solid-js";

import { query, createAsync } from "@solidjs/router";




const getArticlesQuery = query(async () => {

  // ... Fetches a list of articles from an API.

}, "articles");




function Articles() {

  const articles = createAsync(() => getArticlesQuery());




  return (

    <Show when={articles()}>

      <For each={articles()}>{(article) => <p>{article.title}</p>}</For>

    </Show>

  );

}
```

In this example, `createAsync` is used to call the query. Once the query completes, `articles` holds the result, which is then rendered.

tip

When working with complex data types, such as arrays or deeply nested objects, the [`createAsyncStore` primitive](../reference/data-apis/create-async-store.md) offers a more ergonomic and performant solution. It works like `createAsync`, but returns a [store](../../concepts/stores.md) for easier state management..

* * *

## [Deduplication](queries.md#deduplication)

A key feature of queries is their ability to deduplicate requests, preventing redundant data fetching in quick succession.

One common use case is preloading: when a user hovers over a link, the application can begin preloading the data for the destination page. If the user then clicks the link, the query has already been completed, and the data is available instantly without triggering another network request. This mechanism is fundamental to the performance of Solid Router applications.

Deduplication also applies when multiple components on the same page use the same query. As long as at least one component is actively using the query, Solid Router will reuse the cached result instead of refetching the data.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fdata-fetching%2Fqueries.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fdata-fetching%2Fqueries)

Previous[← Server side rendering](../rendering-modes/ssr.md)

Next[Streaming →](streaming.md)

On this page

1. [Overview](#_top)
2. [Defining queries](#defining-queries)
3. [Using queries in components](#using-queries-in-components)
4. [Deduplication](#deduplication)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/data-fetching/queries.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fdata-fetching%2Fqueries.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fdata-fetching%2Fqueries)