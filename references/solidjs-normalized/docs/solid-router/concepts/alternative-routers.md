# Alternative routers

While the default router uses the browser's `location.pathname` to determine the current route, you can use alternative routers to change this behavior. This includes:

- [**Hash mode**](alternative-routers.md#hash-mode): Uses the hash portion of the URL to determine the current route.
- [**Memory mode**](alternative-routers.md#memory-mode): Keeps the history of the router in memory, useful for testing.

* * *

## Hash mode

Hash mode routing uses the hash portion of the URL to manage an application's state and navigation. Unlike the [default router](../reference/components/router.md), the hash portion of the URL will not be handled by the server meaning this is a client-side only routing. To use hash mode, replace the `<Router />` component in the application with [`<HashRouter />`](../reference/components/hash-router.md).

```
import { render } from "solid-js/web";

import {

    Router

    HashRouter,

    Route

    } from "@solidjs/router";

const App = (props) => (

    <>

        <h1>Root header</h1>

        {props.children}

    </>

);

render(

    () => <Router root={App}>{/*... routes */}</Router>,

    () => <HashRouter root={App}>{/*... routes */}</HashRouter>,

    document.getElementById("app")

);
```
* * *

## Memory mode

Unlike the default router and hash, the memory router does not interact with the browser's URL. This means that while the URL in the browser's address bar will change, the router will not navigate to the new route. This gives you the ability to control the router's state and history in memory which can be useful for testing purposes.

To use memory mode, replace the `<Router />` component in the application with [`<MemoryRouter />`](../reference/components/memory-router.md):

```
import { render } from "solid-js/web";
import { Router, MemoryRouter, Route } from "@solidjs/router";
const App = (props) => (

    <>

        <h1>Root header</h1>

        {props.children}

    </>

);

render(

    () => <Router root={App}>{/*... routes */}</Router>,

    () => <MemoryRouter root={App}>{/*... routes */}</MemoryRouter>,

    document.getElementById("app")

);
```
