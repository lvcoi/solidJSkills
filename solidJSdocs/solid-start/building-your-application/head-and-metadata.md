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

# Head and metadata

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/head-and-metadata.mdx)

SolidStart does not come with a metadata library. In cases where you want to customize the content in the `head` of your `document`, you can use the `@solidjs/meta` library.

```


npm i @solidjs/meta
```

The common elements used in the [`head`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) are:

- [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title): Specifies the title of the page, used by the browser tab and headings of search results.
- [`meta`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta): Specifies a variety of metadata about the page specified by `name`, ranging from favicon, character set to OG tags for SEO.
- [`link`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link): Adds assets like stylesheets or scripts for the browser to load for the page.
- [`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style): Adds inline styles to the page.

* * *

## [Inside a Route component](head-and-metadata.md#inside-a-route-component)

When applying metadata to a specific route, you can use the `Title`:

```


import { Title } from "@solidjs/meta";




export default function About() {

  return (

    <>

      <Title>About</Title>

      <h1>About</h1>

    </>

  );

}
```

These tags will be applied for that specific route only and will be removed from `document.head` once a user navigates away from the page. `routeData` can also be used here to create titles and SEO metadata that is specific to the dynamic parts of the route.

* * *

## [Adding a site suffix in Title](head-and-metadata.md#adding-a-site-suffix-in-title)

Custom components can be created to wrap the `Title` component to add a site-specific prefix to all the titles:

```


export default function MySiteTitle(props) {

  return <Title>{props.children} | My Site</Title>;

}
```

```


import MySiteTitle from "~/components/MySiteTitle";




export default function About() {

  return (

    <>

      <MySiteTitle>About</MySiteTitle>

      <h1>About</h1>

    </>

  );

}
```

* * *

## [Using async data in `Title`](head-and-metadata.md#using-async-data-in-title)

Resources can be used to create titles specific to the dynamic parts of the route:

```


import { Title } from "@solidjs/meta";

import { RouteSectionProps } from "@solidjs/router";

import { createResource, Show } from "solid-js";




export default function User(props: RouteSectionProps) {

  const [user] = createResource(() => fetchUser(props.params.id));




  return (

    <Show when={user()}>

      <Title>{user()?.name}</Title>

      <h1>{user()?.name}</h1>

    </Show>

  );

}
```

For this example, `routeData` can be used to retrieve the user's name from the `id` in `/users/:id` and use it in the `Title` component. Similarly, other information can be used to build up other tags for SEO.

* * *

## [Adding SEO tags](head-and-metadata.md#adding-seo-tags)

SEO tags like `og:title`, `og:description`, `og:image`, use the `Meta` component. Since these tags may want to be used across multiple routes, they can be added inside the `Head` of the `root.tsx` file.

```


export default function Root() {

  return (

    <Html lang="en">

      <Head>

        <Meta

          property="og:image"

          content="https://example.com/image.jpg"

        />

        <Meta

          property="og:image:alt"

          content="Welcome to my site"

        />

        <Meta property="og:image:width" content="1200" />

        <Meta property="og:image:height" content="600" />

        <Meta property="og:site_name" content="GitHub" />

      </Head>

    </Html>

  );

}
```

If you need to add route-specific information inside your route, much like the `Title` component, you can use the `Meta` component within the desired route. This overrides the `Meta` tags used within the `Head` component.

```


import MySiteTitle from "~/components/MySiteTitle";




export default function About() {

  return (

    <>

      <MySiteTitle>About</MySiteTitle>

      <Meta name="description" content="This is my content tag." />

      <Meta

        property="og:title"

        content="Welcome to my site!"

      />

      <Meta

        property="og:description"

        content="A website"

      />

      <h1>About</h1>

    </>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fbuilding-your-application%2Fhead-and-metadata.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fbuilding-your-application%2Fhead-and-metadata)

Previous[← Data mutation](data-mutation.md)

Next[Route Pre-rendering →](route-prerendering.md)

On this page

1. [Overview](#_top)
2. [Inside a Route component](#inside-a-route-component)
3. [Adding a site suffix in Title](#adding-a-site-suffix-in-title)
4. [Using async data in Title](#using-async-data-in-title)
5. [Adding SEO tags](#adding-seo-tags)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/head-and-metadata.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fbuilding-your-application%2Fhead-and-metadata.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fbuilding-your-application%2Fhead-and-metadata)