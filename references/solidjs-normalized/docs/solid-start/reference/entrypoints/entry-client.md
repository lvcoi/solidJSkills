# entry-client.tsx

`entry-client.tsx` is where an application starts in the browser. It does this by passing [`<StartClient>`](../client/start-client.md) and a DOM Element (the mounting point), to the [`mount`](../client/mount.md) function.

```
import { mount, StartClient } from "@solidjs/start/client";

mount(() => <StartClient />, document.getElementById("app")!);
```
This file is an ideal place to run any client specific code that is needed on startup, such as registering service workers. This is important if you are performing client-only rendering or using other modes of server-side rendering.
