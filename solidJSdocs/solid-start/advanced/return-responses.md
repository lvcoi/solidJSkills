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
  
  - [Middleware](middleware.md)
  - [Sessions](session.md)
  - [Request events](request-events.md)
  - [Returning responses](return-responses.md)
  - [Auth](auth.md)
  - [WebSocket endpoint](websocket.md)
- Guides
  
  - [Security](../guides/security.md)
  - [Data fetching](../guides/data-fetching.md)
  - [Data mutation](../guides/data-mutation.md)
  - [Service workers](../guides/service-workers.md)

Advanced

# Returning responses

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/return-responses.mdx)

In SolidStart, it is possible to return a Response object from a server function. [`solid-router`](../../solid-router) knows how to handle certain responses with its [`query`](../../solid-router/reference/data-apis/query.md) and [`action`](../../solid-router/reference/data-apis/action.md) APIs. For TypeScript, when returning a response using `solid-router`'s `redirect`, `reload`, or `json` helpers, they will not impact the return value of the server function.

While we suggest depending on the type of the function to handle errors differently, you can always return or throw a response.

* * *

## [Examples](return-responses.md#examples)

In the following example, the `hello` function will return a value of type `Promise<{ hello: string }>`:

```


import { json } from "@solidjs/router";

import { GET } from "@solidjs/start";




const hello = GET(async (name: string) => {

  "use server";

  return json(

    { hello: new Promise<string>((r) => setTimeout(() => r(name), 1000)) },

    { headers: { "cache-control": "max-age=60" } }

  );

});
```

However, in this example, since `redirect` and `reload` return `never` as their type, `getUser` can only return a value of type `Promise<User>`:

```


export async function getUser() {

  "use server";




  const session = await getSession();

  const userId = session.data.userId;

  if (userId === undefined) return redirect("/login");




  try {

    const user: User = await db.user.findUnique({ where: { id: userId } });

    // throwing can be awkward.

    if (!user) return redirect("/login");

    return user;

  } catch {

    // do stuff

    throw redirect("/login");

  }

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fadvanced%2Freturn-responses.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fadvanced%2Freturn-responses)

Previous[← Request events](request-events.md)

Next[Auth →](auth.md)

On this page

1. [Overview](#_top)
2. [Examples](#examples)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/return-responses.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fadvanced%2Freturn-responses.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fadvanced%2Freturn-responses)