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

# Auth

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/auth.mdx)

Server functions can be used to protect sensitive resources like user data.

```


"use server"




async function getPrivatePosts() {

  const user = await getUser()

  if(!user) {

    return null  // or throw an error

  }




  return db.getPosts({ userId: user.id, private: true })

}
```

The `getUser` function can be [implemented using sessions](session.md).

* * *

## [Protected Routes](auth.md#protected-routes)

Routes can be protected by checking the user or session object during data fetching. This example uses [Solid Router](../../solid-router).

```


const getPrivatePosts = query(async function() {

  "use server"

  const user = await getUser()

  if(!user) {

    throw redirect("/login");

  }




  return db.getPosts({ userId: user.id, private: true })

})




export default function Page() {

  const posts = createAsync(() => getPrivatePosts(), { deferStream: true });

}
```

Once the user hits this route, the router will attempt to fetch `getPrivatePosts` data. If the user is not signed in, `getPrivatePosts` will throw and the router will redirect to the login page.

To prevent errors when opening the page directly, set `deferStream: true`. This would ensure `getPrivatePosts` resolves before the page loads since server-side redirects cannot occur after streaming has started.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fadvanced%2Fauth.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fadvanced%2Fauth)

Previous[← Returning responses](return-responses.md)

Next[WebSocket endpoint →](websocket.md)

On this page

1. [Overview](#_top)
2. [Protected Routes](#protected-routes)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/auth.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fadvanced%2Fauth.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fadvanced%2Fauth)