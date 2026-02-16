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
  
  - [Routing](routing.md)
  - [API routes](api-routes.md)
  - [CSS and styling](css-and-styling.md)
  - [Data fetching](data-fetching.md)
  - [Data mutation](data-mutation.md)
  - [Head and metadata](head-and-metadata.md)
  - [Route Pre-rendering](route-prerendering.md)
  - [Static assets](static-assets.md)
- Advanced
  
  - [Middleware](../advanced/middleware.md)
  - [Sessions](../advanced/session.md)
  - [Request events](../advanced/request-events.md)
  - [Returning responses](../advanced/return-responses.md)
  - [Auth](../advanced/auth.md)
  - [WebSocket endpoint](../advanced/websocket.md)
- Guides
  
  - [Security](../guides/security.md)
  - [Data fetching](../guides/data-fetching.md)
  - [Data mutation](../guides/data-mutation.md)
  - [Service workers](../guides/service-workers.md)

Building your application

# Data fetching

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/data-fetching.mdx)

Fetching data from a remote API or database is a core task for most applications. [Solid](../../index.md) and [Solid Router](../../solid-router) provide foundational tools like the [`createResource` primitive](../../guides/fetching-data.md) and [queries](../../solid-router/data-fetching/queries.md) to manage asynchronous data.

SolidStart builds on these capabilities, extending them to provide a comprehensive solution for data fetching in a full-stack environment.

This page assumes you are familiar with the fundamental concepts of Solid and Solid Router. If you are a beginner, we highly recommend starting with the [queries documentation](../../solid-router/data-fetching/queries.md). You can also find many practical examples in the [data fetching how-to guide](../guides/data-fetching.md).

* * *

## [Server functions and queries](data-fetching.md#server-functions-and-queries)

Server functions provide a way to write functions that run exclusively on the server. This makes it safe to fetch data directly from a database without relying on a separate API endpoint.

Server functions integrate seamlessly with queries, as they can be used as the fetcher for a query.

```


import { query, redirect } from "@solidjs/router";

import { useSession } from "vinxi/http";

import { db } from "./db";




const getCurrentUserQuery = query(async (id: string) => {

  "use server";

  const session = await useSession({

    password: process.env.SESSION_SECRET as string,

    name: "session",

  });




  if (session.data.userId) {

    return await db.users.get({ id: session.data.userId });

  } else {

    throw redirect("/login");

  }

}, "currentUser");
```

In this example, the `getCurrentUserQuery` retrieves the session data, and if an authenticated user exists, it gets their information from the database and returns it. Otherwise, it redirects the user to the login page. All of these operations are performed completely on the server regardless of how the query is called.

Modifying headers after streaming

Once streaming begins, response headers (including status and cookies) are sent and cannot be changed. Any header-modifying logic within a server function, such as redirects or APIs like `useSession` that set cookies, must run before streaming starts; otherwise, this error will occur: `Cannot set headers after they are sent to the client.`

To avoid this, disable streaming for queries that may modify headers by enabling the [`deferStream`](../../solid-router/reference/data-apis/create-async.md#deferstream) option.

```


const user = createAsync(() => getCurrentUserQuery(), { deferStream: true });
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fbuilding-your-application%2Fdata-fetching.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fbuilding-your-application%2Fdata-fetching)

Previous[← CSS and styling](css-and-styling.md)

Next[Data mutation →](data-mutation.md)

On this page

1. [Overview](#_top)
2. [Server functions and queries](#server-functions-and-queries)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/data-fetching.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fbuilding-your-application%2Fdata-fetching.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fbuilding-your-application%2Fdata-fetching)