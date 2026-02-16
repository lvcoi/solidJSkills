[**Solid**Start](..)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](..)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid-start)[](https://discord.com/invite/solidjs)

LearnReference

- [Overview](..)
- [Getting started](../getting-started.md)
- Building your application
  
  - [Routing](../building-your-application/routing.md)
  - [API routes](../building-your-application/api-routes.md)
  - [CSS and styling](../building-your-application/css-and-styling.md)
  - [Data fetching](../building-your-application/data-fetching.md)
  - [Data mutation](../building-your-application/data-mutation.md)
  - [Head and metadata](../building-your-application/head-and-metadata.md)
  - [Route Pre-rendering](../building-your-application/route-prerendering.md)
  - [Static assets](../building-your-application/static-assets.md)
- Advanced
  
  - [Middleware](../advanced/middleware.md)
  - [Sessions](../advanced/session.md)
  - [Request events](../advanced/request-events.md)
  - [Returning responses](../advanced/return-responses.md)
  - [Auth](../advanced/auth.md)
  - [WebSocket endpoint](../advanced/websocket.md)
- Guides
  
  - [Security](security.md)
  - [Data fetching](data-fetching.md)
  - [Data mutation](data-mutation.md)
  - [Service workers](service-workers.md)

Guides

# Data fetching

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/data-fetching.mdx)

This guide provides practical examples of common data-fetching tasks in SolidStart.

Here's an example showing how to create a [`query`](../../solid-router/reference/data-apis/query.md) and access its data with the [`createAsync` primitive](../../solid-router/reference/data-apis/create-async.md):

TypeScriptJavaScript

```


// src/routes/index.tsx

import { For } from "solid-js";

import { query, createAsync } from "@solidjs/router";




const getPosts = query(async () => {

  const posts = await fetch("https://my-api.com/posts");

  return await posts.json();

}, "posts");




export default function Page() {

  const posts = createAsync(() => getPosts());

  return (

    <ul>

      <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

    </ul>

  );

}
```

```


// src/routes/index.jsx

import { For } from "solid-js";

import { query, createAsync } from "@solidjs/router";




const getPosts = query(async () => {

  const posts = await fetch("https://my-api.com/posts");

  return await posts.json();

}, "posts");




export default function Page() {

  const posts = createAsync(() => getPosts());

  return (

    <ul>

      <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

    </ul>

  );

}
```

* * *

## [Showing loading UI](data-fetching.md#showing-loading-ui)

To show a loading UI during data fetching:

1. Import [`Suspense`](../../reference/components/suspense.md) from `solid-js`.
2. Wrap your data rendering in `<Suspense>`, and use the `fallback` prop to show a component during data fetching.

TypeScriptJavaScript

```


// src/routes/index.tsx

import { Suspense, For } from "solid-js";

import { query, createAsync } from "@solidjs/router";




const getPosts = query(async () => {

  const posts = await fetch("https://my-api.com/posts");

  return await posts.json();

}, "posts");




export default function Page() {

  const posts = createAsync(() => getPosts());

  return (

    <ul>

      <Suspense fallback={<div>Loading...</div>}>

        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

      </Suspense>

    </ul>

  );

}
```

```


// src/routes/index.jsx

import { Suspense, For } from "solid-js";

import { query, createAsync } from "@solidjs/router";




const getPosts = query(async () => {

  const posts = await fetch("https://my-api.com/posts");

  return await posts.json();

}, "posts");




export default function Page() {

  const posts = createAsync(() => getPosts());

  return (

    <ul>

      <Suspense fallback={<div>Loading...</div>}>

        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

      </Suspense>

    </ul>

  );

}
```

* * *

## [Handling errors](data-fetching.md#handling-errors)

To show a fallback UI if the data fetching fails:

1. Import [`ErrorBoundary`](../../reference/components/error-boundary.md) from `solid-js`.
2. Wrap the data rendering in `<ErrorBoundary>`, and use the `fallback` prop to show a component if an error occurs.

TypeScriptJavaScript

```


// src/routes/index.tsx

import { ErrorBoundary, Suspense, For } from "solid-js";

import { query, createAsync } from "@solidjs/router";




const getPosts = query(async () => {

  const posts = await fetch("https://my-api.com/posts");

  return await posts.json();

}, "posts");




export default function Page() {

  const posts = createAsync(() => getPosts());

  return (

    <ul>

      <ErrorBoundary fallback={<div>Something went wrong!</div>}>

        <Suspense fallback={<div>Loading...</div>}>

          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

        </Suspense>

      </ErrorBoundary>

    </ul>

  );

}
```

```


// src/routes/index.jsx

import { ErrorBoundary, Suspense, For } from "solid-js";

import { query, createAsync } from "@solidjs/router";




const getPosts = query(async () => {

  const posts = await fetch("https://my-api.com/posts");

  return await posts.json();

}, "posts");




export default function Page() {

  const posts = createAsync(() => getPosts());

  return (

    <ul>

      <ErrorBoundary fallback={<div>Something went wrong!</div>}>

        <Suspense fallback={<div>Loading...</div>}>

          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

        </Suspense>

      </ErrorBoundary>

    </ul>

  );

}
```

* * *

## [Preloading data](data-fetching.md#preloading-data)

To preload data before a route renders:

1. Export a `route` object with a [`preload`](../../solid-router/reference/preload-functions/preload.md) function.
2. Run your query inside the `preload` function.
3. Use the query as usual in your component.

TypeScriptJavaScript

```


// src/routes/index.tsx

import { ErrorBoundary } from "solid-js";

import { query, createAsync, type RouteDefinition } from "@solidjs/router";




const getPosts = query(async () => {

  const posts = await fetch("https://my-api.com/posts");

  return await posts.json();

}, "posts");




export const route = {

  preload: () => getPosts(),

} satisfies RouteDefinition;




export default function Page() {

  const post = createAsync(() => getPosts());

  return (

    <div>

      <ErrorBoundary fallback={<div>Something went wrong!</div>}>

        <h1>{post().title}</h1>

      </ErrorBoundary>

    </div>

  );

}
```

```


// src/routes/index.jsx

import { ErrorBoundary } from "solid-js";

import { query, createAsync } from "@solidjs/router";




const getPosts = query(async () => {

  const posts = await fetch("https://my-api.com/posts");

  return await posts.json();

}, "posts");




export const route = {

  preload: () => getPosts(),

};




export default function Page() {

  const post = createAsync(() => getPosts());

  return (

    <div>

      <ErrorBoundary fallback={<div>Something went wrong!</div>}>

        <h1>{post().title}</h1>

      </ErrorBoundary>

    </div>

  );

}
```

* * *

## [Passing parameters to queries](data-fetching.md#passing-parameters-to-queries)

When creating a query that accepts parameters, define your query function to take any number of parameters:

TypeScriptJavaScript

```


// src/routes/posts/[id]/index.tsx

import { ErrorBoundary } from "solid-js";

import { query, createAsync, type RouteDefinition } from "@solidjs/router";




const getPost = query(async (id: string) => {

  const post = await fetch(`https://my-api.com/posts/${id}`);

  return await post.json();

}, "post");




export const route = {

  preload: ({ params }) => getPost(params.id),

} satisfies RouteDefinition;




export default function Page() {

  const postId = 1;

  const post = createAsync(() => getPost(postId));

  return (

    <div>

      <ErrorBoundary fallback={<div>Something went wrong!</div>}>

        <h1>{post().title}</h1>

      </ErrorBoundary>

    </div>

  );

}
```

```


// src/routes/posts/[id]/index.jsx

import { ErrorBoundary } from "solid-js";

import { query, createAsync } from "@solidjs/router";




const getPost = query(async (id) => {

  const post = await fetch(`https://my-api.com/posts/${id}`);

  return await post.json();

}, "post");




export const route = {

  preload: ({ params }) => getPost(params.id),

};




export default function Page() {

  const postId = 1;

  const post = createAsync(() => getPost(postId));

  return (

    <div>

      <ErrorBoundary fallback={<div>Something went wrong!</div>}>

        <h1>{post().title}</h1>

      </ErrorBoundary>

    </div>

  );

}
```

* * *

## [Using a database or an ORM](data-fetching.md#using-a-database-or-an-orm)

To safely interact with your database or ORM in a query, use a [server function](../reference/server/use-server.md):

TypeScriptJavaScript

```


// src/routes/index.tsx

import { For, ErrorBoundary } from "solid-js";

import { query, createAsync, type RouteDefinition } from "@solidjs/router";

import { db } from "~/lib/db";




const getPosts = query(async () => {

  "use server";

  return await db.from("posts").select();

}, "posts");




export const route = {

  preload: () => getPosts(),

} satisfies RouteDefinition;




export default function Page() {

  const posts = createAsync(() => getPosts());

  return (

    <ul>

      <ErrorBoundary fallback={<div>Something went wrong!</div>}>

        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

      </ErrorBoundary>

    </ul>

  );

}
```

```


// src/routes/index.jsx

import { For, ErrorBoundary } from "solid-js";

import { query, createAsync } from "@solidjs/router";

import { db } from "~/lib/db";




const getPosts = query(async () => {

  "use server";

  return await db.from("posts").select();

}, "posts");




export const route = {

  preload: () => getPosts(),

};




export default function Page() {

  const posts = createAsync(() => getPosts());

  return (

    <ul>

      <ErrorBoundary fallback={<div>Something went wrong!</div>}>

        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

      </ErrorBoundary>

    </ul>

  );

}
```

* * *

## [Fetching data on the client](data-fetching.md#fetching-data-on-the-client)

To fetch data only on the client, use the [`createResource`](../../reference/basic-reactivity/create-resource.md) primitive:

TypeScriptJavaScript

```


// src/routes/index.tsx

import { createResource, ErrorBoundary, Suspense, For } from "solid-js";




export default function Page() {

  const [posts] = createResource(async () => {

    const posts = await fetch("https://my-api.com/posts");

    return await posts.json();

  });

  return (

    <ul>

      <ErrorBoundary fallback={<div>Something went wrong!</div>}>

        <Suspense fallback={<div>Loading...</div>}>

          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

        </Suspense>

      </ErrorBoundary>

    </ul>

  );

}
```

```


// src/routes/index.jsx

import { createResource, ErrorBoundary, Suspense, For } from "solid-js";




export default function Page() {

  const [posts] = createResource(async () => {

    const posts = await fetch("https://my-api.com/posts");

    return await posts.json();

  });

  return (

    <ul>

      <ErrorBoundary fallback={<div>Something went wrong!</div>}>

        <Suspense fallback={<div>Loading...</div>}>

          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

        </Suspense>

      </ErrorBoundary>

    </ul>

  );

}
```

See the [`createResource`](../../reference/basic-reactivity/create-resource.md) API reference for more information.

Advanced Data Handling

For advanced features like automatic background re-fetching or infinite queries, you can use [TanStack Query](https://tanstack.com/query/latest/docs/framework/solid/overview).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fguides%2Fdata-fetching.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fguides%2Fdata-fetching)

Previous[← Security](security.md)

Next[Data mutation →](data-mutation.md)

On this page

1. [Overview](#_top)
2. [Showing loading UI](#showing-loading-ui)
3. [Handling errors](#handling-errors)
4. [Preloading data](#preloading-data)
5. [Passing parameters to queries](#passing-parameters-to-queries)
6. [Using a database or an ORM](#using-a-database-or-an-orm)
7. [Fetching data on the client](#fetching-data-on-the-client)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/data-fetching.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fguides%2Fdata-fetching.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fguides%2Fdata-fetching)