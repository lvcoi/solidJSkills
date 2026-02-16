# createHandler

The `createHandler` is used to start the server in [`entry-server.tsx`](../entrypoints/entry-server.md). It takes a function that returns a static document (often created with [`<StartServer>`](start-server.md)), and serves it using one of the three function for server side rendering (SSR):

- [`renderToString`](../../../reference/rendering/render-to-string.md) - "sync"
- [`renderToStringAsync`](../../../reference/rendering/render-to-string-async.md) - "async"
- [`renderToStream`](../../../reference/rendering/render-to-stream.md) - "stream"

The SSR mode can be configured through the `mode` property on the options object:

```
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (

  <StartServer document={...}

  />

), {

  mode: "async"

});
```
* * *

## Parameters

ArgumentTypeDefaultDescriptionfnfn: (context: PageEvent)A function that returns the static document for your application.options.modestring"stream"The SSR mode. Options are 'sync', 'async' and 'stream'.
