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
  
  - [Migration from v0.9.x](migration.md)

Guides

# Migration from v0.9.x

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/guides/migration.mdx)

v0.10.0 brings some big changes to support the future of routing including Islands/Partial Hydration hybrid solutions. Most notably there is no Context API available in non-hydrating parts of the application.

The biggest changes are around *removed APIs* that need to be replaced.

* * *

## [`<Outlet>`, `<Routes>`, `useRoutes`](migration.md#outlet-routes-useroutes)

These components are no longer present in the new router version. Instead, `props.children` is passed into the page components in the place of outlets. This keeps the outlet directly passed from its page and avoids trying to use context across Islands boundaries. Similarly, nested `<Routes>` components cause waterfalls and are `<Outlets>` themselves thus sharing the same concerns.

With no `<Routes>` means the `<Router>` API has changed. The `<Router>` component acts as the `<Routes>` component now and its children must now be `<Route>` components. The top-level layout should go in the root prop of the router [as shown here](../concepts/layouts.md#root-level-layouts).

* * *

## [`element` prop removed from `Route`](migration.md#element-prop-removed-from-route)

Related without Outlet component it has to be passed in manually. At which point the `element` prop has less value. Removing the second way to define route components to reduce confusion and edge cases.

* * *

## [`data` functions & `useRouteData`](migration.md#data-functions--useroutedata)

`data` functions & `useRouteData` have been replaced by a load mechanism. This allows link hover preloads, since the preload function can be run as much as wanted without worrying about reactivity.

This supports deduping/cache APIs which give more control over how things are cached. It also addresses TypeScript issues with getting the right types in the Component without `typeof` checks.

That being said the old pattern can be reproduced by turning off preloads at the router level and then injecting your own Context:

```


import { lazy } from "solid-js";

import { Router, Route } from "@solidjs/router";




const User = lazy(() => import("./pages/users/[id].js"));




// preload function

function preloadUser({ params, location }) {

  const [user] = createResource(() => params.id, fetchUser);

  return user;

}




// Pass it in the route definition

<Router preload={false}>

  <Route path="/users/:id" component={User} preload={preloadUser} />

</Router>;
```

And then in your component taking the page props and putting them in a Context.

```


import { createContext, useContext } from "solid-js";




const UserContext = createContext();




function User(props) {

  <UserContext.Provider value={props.data()}>

    {/* my component content that includes <UserDetails /> in any depth  */}

  </UserContext.Provider>;

}




function UserDetails() {

  const user = useContext(UserContext);

  // render stuff

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fguides%2Fmigration.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fguides%2Fmigration)

Previous[← Lazy loading](../advanced-concepts/lazy-loading.md)

On this page

1. [Overview](#_top)
2. [&lt;Outlet&gt;, &lt;Routes&gt;, useRoutes](#outlet-routes-useroutes)
3. [element prop removed from Route](#element-prop-removed-from-route)
4. [data functions & useRouteData](#data-functions--useroutedata)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/guides/migration.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fguides%2Fmigration.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fguides%2Fmigration)