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

# Data mutation

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/data-mutation.mdx)

Mutating data on a server is a common task in most applications. [Solid Router](../../solid-router) provides [actions](../../solid-router/concepts/actions.md) to manage data mutations effectively.

SolidStart builds upon the capabilities of actions, extending their scope to provide a comprehensive, full-stack solution for data mutations.

This page does not cover the foundational concepts from Solid Router. If you are a beginner, we highly recommend starting with the [actions documentation](../../solid-router/concepts/actions.md). You can also find many practical examples in the [data mutation how-to guide](../guides/data-mutation.md).

* * *

## [Server functions and actions](data-mutation.md#server-functions-and-actions)

Server functions allow an action to run exclusively on the server. This enables performing sensitive operations—such as writing to a database or working with sessions—directly within the action.

```


import { action, redirect } from "@solidjs/router";

import { useSession } from "vinxi/http";

import { db } from "./db";




const logoutAction = action(async () => {

  "use server";

  const session = await useSession({

    password: process.env.SESSION_SECRET as string,

    name: "session",

  });




  if (session.data.sessionId) {

    await session.clear();

    await db.session.delete({ id: sessionId });

  }




  throw redirect("/");

}, "logout");
```

In this example, the entire `logoutAction` runs on the server. It safely accesses the session to retrieve the `sessionId` and performs a database deletion without exposing this logic to the client. The `redirect` then navigates the user back to the home page.

* * *

## [Single-flight mutations](data-mutation.md#single-flight-mutations)

When a piece of data changes on the server, the new data needs to be fetched so the UI doesn't fall out of sync. Traditionally, this is done in two separate HTTP requests: one to update the data, and a second to fetch the new data.

Single-flight mutations are a unique feature of SolidStart that handles this pattern in a single request. This is enabled when two requirements are met:

1. The action that updates the data must execute on the server using server functions.
2. The data that the action updated must be preloaded. If the action performs a redirect, preloading needs to happen on the destination page.

```


import {

  action,

  query,

  createAsync,

  type RouteDefinition,

  type RouteSectionProps,

} from "@solidjs/router";

import { db } from "./db";




const updateProductAction = action(async (id: string, formData: FormData) => {

  "use server";

  const name = formData.get("name")?.toString();

  await db.products.update(id, { name });

}, "updateProduct");




const getProductQuery = query(async (id: string) => {

  "use server";

  return await db.products.get(id);

}, "product");




export const route = {

  preload: ({ params }) => getProductQuery(params.id as string),

} satisfies RouteDefinition;




export default function ProductDetail(props: RouteSectionProps) {

  const product = createAsync(() => getProductQuery(props.params.id as string));




  return (

    <div>

      <p>Current name: {props.data.product?.name}</p>

      <form

        action={updateProductAction.with(props.params.id as string)}

        method="post"

      >

        <input name="name" placeholder="New name" />

        <button>Save</button>

      </form>

    </div>

  );

}
```

In this example, `updateProductAction` updates the product within a server function, and `getProductQuery` is responsible for fetching the product data. Note that `getProductQuery` is preloaded on the route.

When a user submits the form, a single POST request is sent to the server. After the action completes, `getProductQuery` is automatically revalidated. Because it's preloaded, SolidStart can trigger the revalidation on the server and stream the result back to the client in the same response.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fbuilding-your-application%2Fdata-mutation.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fbuilding-your-application%2Fdata-mutation)

Previous[← Data fetching](data-fetching.md)

Next[Head and metadata →](head-and-metadata.md)

On this page

1. [Overview](#_top)
2. [Server functions and actions](#server-functions-and-actions)
3. [Single-flight mutations](#single-flight-mutations)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/data-mutation.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fbuilding-your-application%2Fdata-mutation.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fbuilding-your-application%2Fdata-mutation)