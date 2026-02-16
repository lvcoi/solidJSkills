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
  
  - [Navigation](navigation.md)
  - [Path parameters](path-parameters.md)
  - [Search parameters](search-parameters.md)
  - [Catch-all routes](catch-all.md)
  - [Nesting routes](nesting.md)
  - [Layouts](layouts.md)
  - [Alternative routers](alternative-routers.md)
  - [Actions](actions.md)
- Rendering modes
  
  - [Single page applications](../rendering-modes/spa.md)
  - [Server side rendering](../rendering-modes/ssr.md)
- Data fetching
  
  - [Queries](../data-fetching/queries.md)
  - [Streaming](../data-fetching/streaming.md)
  - [Revalidation](../data-fetching/revalidation.md)
  - How to
    
    - [Preload data](../data-fetching/how-to/preload-data.md)
    - [Handle pending and error states](../data-fetching/how-to/handle-error-and-loading-states.md)
- Advanced concepts
  
  - [Preloading](../advanced-concepts/preloading.md)
  - [Lazy loading](../advanced-concepts/lazy-loading.md)
- Guides
  
  - [Migration from v0.9.x](../guides/migration.md)

Concepts

# Layouts

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/layouts.mdx)

To maintain consistency across an application's page you can use layouts. Layouts are components that wrap the content of a route and can be used to define a common structure for all pages or specific sections of an application.

* * *

## [Root-level layouts](layouts.md#root-level-layouts)

A root-level layout acts as a container surrounding all routes within your application. To define a root-level layout, pass the layout component to the `root` prop of the `Router` component:

```


import { render } from "solid-js/web";

import { Router, Route } from "@solidjs/router";




import Home from "./pages/Home";




const Layout = (props) => {

    return (

        <>

            <header>Header</header>

            {props.children}

            <footer>Footer</footer>

        </>

    );

};




render(

    () => (

        <Router root={Layout}>

            <Route path="/" component={Home} />

            <Route path="/hello-world" component={() => <div>Hello world!</div>} />

        </Router>

    ),

    document.getElementById("app")

);
```

With the root-level layout, `props.children` will be replaced with the content of the current route. This means that while the words "Header" and "Footer" will be displayed on every page, the content between them will change depending on the current route. For example, when the route is `/hello-world`, you will see the text "Hello world!" between the header and footer.

* * *

## [Nested layouts](layouts.md#nested-layouts)

When you want to create a layout that is specific to a group of routes, you can nest routes within a layout component. This can be done by passing `props.children` to the component where the nested routes are defined:

```


function PageWrapper(props) {

  return (

    <div>

      <h1> We love our users! </h1>

      {props.children}

      <A href="/">Back Home</A>

    </div>

  );

}
```

While the routes are still configured the same, the route's elements will appear inside the parent element where the `props.children` was declared. For `PageWrapper` to be used as a layout, in this case, you can pass it as a component to the parent route:

```


<Router>

    <Route path="/users" component={PageWrapper}>

        <Route path="/" component={Users} />

        <Route path="/:id" component={User} />

    </Route>

</Router>
```

Now, when the route is `/users`, the content of the `Users` component will be displayed inside the `PageWrapper` component. Similarly, when navigating to `/users/1`, the content of the `User` component will be displayed inside the `PageWrapper` component as well.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Flayouts.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Flayouts)

Previous[← Nesting routes](nesting.md)

Next[Alternative routers →](alternative-routers.md)

On this page

1. [Overview](#_top)
2. [Root-level layouts](#root-level-layouts)
3. [Nested layouts](#nested-layouts)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/layouts.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Flayouts.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Flayouts)