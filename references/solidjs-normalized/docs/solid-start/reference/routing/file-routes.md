# FileRoutes

`FileRoutes` is a component that creates a [`Route`](../../../solid-router/reference/components/route.md) for each file in the `/src/routes` directory. This creates a `route` export to define the route configuration for the router of your choice.

For example, using [`solid-router`](../../../solid-router) would look like the following:

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
See the [SolidStart routing guide](../../building-your-application/routing.md) for more details.

If removing the `FileRoutes` component from your `app.tsx` file, you will need to manually add all of your routes.

While this is possible it does come with tradeoffs. For example, optimizations such as preloaded script tags will no longer be available.
