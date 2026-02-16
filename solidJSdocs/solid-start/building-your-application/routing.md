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

# Routing

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/routing.mdx)

Routing serves as a key component of web applications. Within SolidStart, there are two types:

- **UI routes** — define the user interface in your app
- [**API routes**](api-routes.md) — define the serverless functions in your app

To read more about API routes, [see the API Routes section.](api-routes.md)

* * *

## [Creating new routes](routing.md#creating-new-routes)

SolidStart uses file based routing which is a way of defining your routes by creating files and folders in your project. This includes your pages and API routes.

SolidStart traverses your `routes` directory, collects all of the routes, and then makes them accessible using the [`<FileRoutes />`](../reference/routing/file-routes.md). This component will only include your UI routes, not your API routes. Rather than manually defining each `Route` inside a `Router` component, `<FileRoutes />` will generate the routes for you based on the file system.

Because `<FileRoutes />` returns a routing config object, you can use it with the router of your choice. In this example, we use [`solid-router`](../../solid-router):

```


import { Suspense } from "solid-js";

import { Router } from "@solidjs/router";

import { FileRoutes } from "@solidjs/start/router";




export default function App() {

  return (

    <Router root={(props) => <Suspense>{props.children}</Suspense>}>

      <FileRoutes />

    </Router>

  );

}
```

The `<Router />` component expects a `root` prop which functions as the root layout of your entire app. You will want to make sure `props.children` is wrapped in `<Suspense />` since each component will be lazy-loaded automatically. Without this, you could see some unexpected hydration errors.

`<FileRoutes />` will generate a route for each file in the `routes` directory and its subdirectories. For a route to be rendered as a page, it must default export a component. This component represents the content that will be rendered when users visit the page:

```


export default function Index() {

  return <div>Welcome to my site!</div>;

}
```

This means that all you have to do is create a file in your `routes` folder and SolidStart takes care of everything else needed to make that route available to visit in your application!

* * *

## [File based routing](routing.md#file-based-routing)

Each file in the `routes` directory is treated as a route. To create a new route or page in your application, simply create a new file in the `routes` directory. The file name will be the URL path for the route:

- `example.com/blog` ➜ `/routes/blog.tsx`
- `example.com/contact` ➜ `/routes/contact.tsx`
- `example.com/directions` ➜ `/routes/directions.tsx`

### [Nested routes](routing.md#nested-routes)

If you need nested routes, you can create a directory with the name of the preceding route segment, and create new files in that directory:

- `example.com/blog/article-1` ➜ `/routes/blog/article-1.tsx`
- `example.com/work/job-1` ➜ `/routes/work/job-1.tsx`

When a file is named `index`, it will be rendered when there are no additional URL route segments being requested for a matching directory:

- `example.com` ➜ `/routes/index.tsx`
- `example.com/socials` ➜ `/routes/socials/index.tsx`

### [Nested layouts](routing.md#nested-layouts)

If you want to create nested layouts you can create a file with the same name as a route folder.

```


|-- routes/

    |-- blog.tsx                   // layout file

    |-- blog/

        |-- article-1.tsx         // example.com/blog/article-1

        |-- article-2.tsx        // example.com/blog/article-2
```

In this case, the `blog.tsx` file will act as a layout for the articles in the `blog` folder. You can reference the child's content by using `props.children` in the layout.

TypeScriptJavaScript

```


// routes/blog.tsx

import { RouteSectionProps } from "@solidjs/router";




export default function BlogLayout(props: RouteSectionProps) {

  return <div>{props.children}</div>;

}
```

```


// routes/blog.jsx

export default function BlogLayout(props) {

  return <div>{props.children}</div>;

}
```

**Note**: Creating a `blog/index.tsx` or `blog/(blogIndex).tsx` is not the same as it would only be used for the index route.

* * *

## [Renaming Index](routing.md#renaming-index)

By default, the component that is rendered for a route comes from the default export of the `index.tsx` file in each folder. However, this can make it difficult to find the correct `index.tsx` file when searching, since there will be multiple files with that name.

To avoid this, you can rename the `index.tsx` file to the name of the folder it is in, enclosed in parentheses.

This way, it will be treated as the default export for that route:

```


|-- routes/                       // example.com

    |-- blog/

        |-- article-1.tsx         // example.com/blog/article-1

        |-- article-2.tsx

    |-- work/

        |-- job-1.tsx             // example.com/work/job-1

        |-- job-2.tsx

    |-- socials/

        |-- (socials).tsx           // example.com/socials
```

#### [Escaping nested routes](routing.md#escaping-nested-routes)

When you have a path that is nested but wish for it to have a separate Layout, you can escape the nested route by applying a name between `( )`. This will allow you to create a new route that is not nested under the previous route:

```


|-- routes/                       // example.com

    |-- users/

        |-- index.tsx            // example.com/users

        |-- projects.tsx         // example.com/users/projects

    |-- users(details)/

        |-- [id].tsx            // example.com/users/1
```

Additionally, you can incorporate nested layouts of their own:

```


|-- routes/

    |-- users.tsx

    |-- users(details).tsx

    |-- users/

        |-- index.tsx

        |-- projects.tsx

    |-- users(details)/

        |-- [id].tsx
```

### [Dynamic routes](routing.md#dynamic-routes)

Dynamic routes are routes that can match any value for one segment of the route. When your URL path contains a dynamic segment, square brackets (`[]`) are used to define the dynamic segment:

- `example.com/users/:id` ➜ `/routes/users/[id].tsx`
- `example.com/users/:id/:name` ➜ `/routes/users/[id]/[name].tsx`
- `example.com/*missing` ➜ `/routes/[...missing].tsx`

This allows you to create a single route that can match any value for that segment of the URL path. For example, `/users/1` and `/users/2` are both valid routes and rather than defining separate routes for each user, you can use a dynamic route to match any value for the `id` segment.

```


|-- routes/

    |-- users/

        |-- [id].tsx
```

For example, using `solid-router`, you could use the [`useParams`](../../solid-router/reference/primitives/use-params.md) primitive to match the dynamic segment:

```


import { useParams } from "@solidjs/router";




export default function UserPage() {

  const params = useParams();

  return <div>User {params.id}</div>;

}
```

#### [Optional parameter](routing.md#optional-parameter)

If you have optional parameters in your route, you can use the double square brackets (`[[id]]`) to define the dynamic segment. This will match a route with or without a parameter.

```


|-- routes/

    |-- users/

        |-- [[id]].tsx
```

In this case, some pages that could be matched include:

- `/users`
- `/users/1`
- `/users/abc`

#### [Catch-all routes](routing.md#catch-all-routes)

Catch-all routes are a special type of dynamic route that can match any number of segments. They are defined using square brackets with `...` before the label for the route (e.g. `[...post]`).

```


|-- routes/

    |-- blog/

        |-- index.tsx

        |-- [...post].tsx
```

A catch-all route will have one parameter which is a forward-slash delimited string of all the URL segments after the last valid segment. For example, with the route `[...post]` and a URL path of `/post/foo` the `params` object returned from the `useParams` primitive will have a `post` property with the value of `post/foo`. For a URL path of `/post/foo/baz` it will be `post/foo/baz`.

```


import { useParams } from "@solidjs/router";




export default function BlogPage() {

  const params = useParams();

  return <div>Blog {params.post}</div>;

}
```

* * *

## [Route groups](routing.md#route-groups)

Using route groups, you can organize your routes in a way that makes sense for your application, without affecting the URL structure. Since file-based routing is based on the file system, it can be difficult to organize your routes in a way that makes sense for your application.

In SolidStart, route groups are defined by using parenthesis (`()`) surrounding the folder name:

```


|-- routes/

    |-- (static)

        |-- about-us                // example.com/about-us

            |-- index.tsx

        |-- contact-us              // example.com/contact-us

            |-- index.tsx
```

* * *

## [Additional route config](routing.md#additional-route-config)

SolidStart offers a way to add additional route configuration outside of the file system. Since SolidStart supports the use of other routers, you can use the `route` export provided by `<FileRoutes />` to define the route configuration for the router of your choice.

TypeScriptJavaScript

```


import type { RouteSectionProps, RouteDefinition } from "@solidjs/router";




export const route = {

  preload() {

    // define preload function

  }

} satisfies RouteDefinition




export default function UsersLayout(props: RouteSectionProps) {

  return (

    <div>

      <h1>Users</h1>

      {props.children}

    </div>

  );

}
```

```


export const route = {

  preload() {

    // define preload function

  }

};




export default function UsersLayout(props) {

  return (

    <div>

      <h1>Users</h1>

      {props.children}

    </div>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fbuilding-your-application%2Frouting.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fbuilding-your-application%2Frouting)

Previous[← Getting started](../getting-started.md)

Next[API routes →](api-routes.md)

On this page

1. [Overview](#_top)
2. [Creating new routes](#creating-new-routes)
3. [File based routing](#file-based-routing)
   
   1. [Nested routes](#nested-routes)
   2. [Nested layouts](#nested-layouts)
4. [Renaming Index](#renaming-index)
   
   1. [Escaping nested routes]()
   2. [Dynamic routes](#dynamic-routes)
5. [Route groups](#route-groups)
6. [Additional route config](#additional-route-config)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/routing.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fbuilding-your-application%2Frouting.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fbuilding-your-application%2Frouting)