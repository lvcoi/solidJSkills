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

# Streaming

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/data-fetching/streaming.mdx)

In traditional server-rendered applications, the server must fetch all data before rendering and sending the page to the browser. If some queries are slow, this delays the initial load. **Streaming** solves this by sending the page’s HTML shell immediately and progressively streaming data-dependent sections as they become ready.

When a query is accessed during a server-side render, Solid suspends the UI until the data resolves. By default, this suspension affects the entire page.

To control this behavior, you can use suspense boundaries - regions of the component tree defined by a [`<Suspense>` component](../../reference/components/suspense.md). It isolates asynchronous behavior to a specific section of the page.

Content inside the boundary is managed by Solid’s concurrency system: if it isn’t ready, the boundary’s fallback UI is shown while the rest of the page renders and streams immediately. Once the data resolves, the server streams the final HTML for that section, replacing the fallback and letting users see and interact with most of the page much sooner.

```


import { Suspense, For } from "solid-js";

import { query, createAsync } from "@solidjs/router";




const getAccountStatsQuery = query(async () => {

  // ... Fetches account statistics.

}, "accountStats");




const getRecentTransactionsQuery = query(async () => {

  // ... Fetches a list of recent transactions.

}, "recentTransactions");




function Dashboard() {

  const stats = createAsync(() => getAccountStatsQuery());

  const transactions = createAsync(() => getRecentTransactionsQuery());




  return (

    <div>

      <h1>Dashboard</h1>

      <Suspense fallback={<p>Loading account stats...</p>}>

        <For each={stats()}>

          {(stat) => (

            <p>

              {stat.label}: {stat.value}

            </p>

          )}

        </For>

      </Suspense>




      <Suspense fallback={<p>Loading recent transactions...</p>}>

        <For each={transactions()}>

          {(transaction) => (

            <h2>

              {transaction.description} - {transaction.amount}

            </h2>

          )}

        </For>

      </Suspense>

    </div>

  );

}
```

For example, each `<Suspense>` component creates its own independent boundary. The server can stream the heading `<h1>Dashboard</h1>` immediately, while the `stats` and `transactions` are handled separately. If the `transactions` query is slow, only its boundary will display a fallback, while `stats` will render as soon as its data is ready.

* * *

## [When to disable streaming](streaming.md#when-to-disable-streaming)

While streaming is powerful, there are cases where it is better to wait for the data to load on the server. In these situations, you can use the `deferStream` option in `createAsync`.

When `deferStream` is set to `true`, the server waits for the query to resolve before sending the initial HTML.

A common reason to disable streaming is for Search Engine Optimization (SEO). Some search engine crawlers may not wait for streamed content to load. If critical data, such as a page title or meta description, affects SEO, it should be included in the initial server response.

```


import { query, createAsync } from "@solidjs/router";




const getArticleQuery = query(async () => {

  // ... Fetches an article.

}, "article");




function ArticleHeader() {

  const article = createAsync(() => getArticleQuery(), {

    deferStream: true,

  });




  return <h1>{article()?.title}</h1>;

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fdata-fetching%2Fstreaming.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fdata-fetching%2Fstreaming)

Previous[← Queries](queries.md)

Next[Revalidation →](revalidation.md)

On this page

1. [Overview](#_top)
2. [When to disable streaming](#when-to-disable-streaming)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/data-fetching/streaming.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fdata-fetching%2Fstreaming.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fdata-fetching%2Fstreaming)