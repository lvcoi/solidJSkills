# Server side rendering

Solid Router supports all of Solid's SSR capabilities. In addition, it has Solid's transitions included, so it can be used freely with [suspense](../../reference/components/suspense.md), [resources](../../reference/basic-reactivity/create-resource.md), and [lazy components](../../reference/component-apis/lazy.md).

When using SSR, there is the option to use the static router directly or let the browser router default to it on the server by passing in the URL.

```
import { isServer } from "solid-js/web";

import { Router } from "@solidjs/router";

<Router url={isServer ? req.url : ""} />;
```
Solid Router also provides a way to define a `preload` function that loads parallel to the routes [render-as-you-fetch](https://epicreact.dev/render-as-you-fetch/).
