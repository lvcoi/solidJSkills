# mount

`mount` is a method that calls either [`hydrate`](../../../reference/rendering/hydrate.md) (server rendering) or [`render`](../../../reference/rendering/render.md) (client rendering) depending on the configuration. It is used in [`entry-client.tsx`](../entrypoints/entry-client.md) to bootstrap an application.

```
import { mount, StartClient } from "@solidjs/start/client";

mount(() => <StartClient />, document.getElementById("app")!);
```
If you set `{ ssr: false }` in the [`defineConfig`](../config/define-config.md), effectively deactivating hydration, then `mount` becomes the same as [`render`](../../../reference/rendering/render.md).

* * *

## Parameters

Proptypedescriptionfn() =&gt; JSX.ElementFunction that returns the application code.elMountableElementDOM Element to mount the application to
