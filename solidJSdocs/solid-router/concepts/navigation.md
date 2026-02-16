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

# Navigation

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/navigation.mdx)

When using Solid Router, you can use the standard standard HTML [`<a>` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), which triggers [soft navigation](../reference/components/a.md#soft-navigation). In addition to using this, Solid Router offers other options for navigating between routes:

- The [`<A>` component](../reference/components/a.md).
- The [`useNavigate` primitive](../reference/primitives/use-navigate.md).
- The [`redirect` function](../reference/response-helpers/redirect.md).

* * *

## [`<A>` component](navigation.md#a-component)

The `<A>` component extends the native `<a>` element by automatically applying the base URL path and, additionally, supports relative paths.

```


import { A } from "@solidjs/router";




function DashboardPage() {

  return (

    <main>

      <nav>

        <A href="/">Home</A>

      </nav>

      {/* This is a relative path that, from /dashboard, links to /dashboard/users */}

      <A href="users">Users</A>

    </main>

  );

}
```

See the [`<A>` API reference](../reference/components/a.md) for more information.

### [Styling](navigation.md#styling)

The `<A>` component allows you to style links based on their active state using the `activeClass` and `inactiveClass` props. When provided, these props apply the corresponding CSS classes to the link. If omitted, the default classes `active` and `inactive` are used.

By default, a link is considered active when the current route matches the link's `href` or any of its descendant routes. For example, a link with `href="/dashboard"` is active when the current route is `/dashboard`, `/dashboard/users`, or `/dashboard/users/1/profile`.

To match an exact route, the prop `end` can be used. When `true`, it ensures that the link is only considered active if the `href` exactly matches the current route. This is useful for root route links (href="/"), which might otherwise match all routes.

```


import { A } from "@solidjs/router";




function Navbar() {

  return (

    <nav>

      <A href="/" end={true}>

        Home

      </A>

      <A

        href="/login"

        activeClass="text-blue-900"

        inactiveClass="text-blue-500"

      >

        Login

      </A>

    </nav>

  );

}
```

* * *

## [`useNavigate` primitive](navigation.md#usenavigate-primitive)

The `useNavigate` primitive allows for programmatically navigating to a specified route.

```


import { useNavigate } from "@solidjs/router";




function LoginPage() {

  const navigate = useNavigate();




  return (

    <button

      onClick={() => {

        // Login logic

        navigate("/dashboard", { replace: true });

      }}

    >

      Login

    </button>

  );

}
```

This example redirects the user to `/dashboard` after login. By using `replace: true`, the login page is removed from the browser's history stack and replaced with the `/dashboard` route. This prevents the user from navigating back to the login page using the back button.

See the [`useNavigate` API reference](../reference/primitives/use-navigate.md) for more information.

* * *

## [`redirect` function](navigation.md#redirect-function)

The `redirect` function returns a [`Response` object](https://developer.mozilla.org/en-US/docs/Web/API/Response), which enables navigation to a specified route within [query](../reference/data-apis/query.md) or [action](../reference/data-apis/action.md).

```


import { action, redirect } from "@solidjs/router";




const logout = action(async () => {

  localStorage.remove("token");

  throw redirect("/");

});
```

See the [`redirect` API reference](../reference/response-helpers/redirect.md) for more information.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Fnavigation.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Fnavigation)

Previous[← Config-based routing](../getting-started/config.md)

Next[Path parameters →](path-parameters.md)

On this page

1. [Overview](#_top)
2. [&lt;A&gt; component](#a-component)
   
   1. [Styling](#styling)
3. [useNavigate primitive](#usenavigate-primitive)
4. [redirect function](#redirect-function)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/navigation.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Fnavigation.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Fnavigation)