# StartServer

`StartServer` takes a function returning a document component and converts it to a static document which can be used in [`createHandler`](create-handler.md) to bootstrap the server.

```
import { StartServer } from "@solidjs/start/server";
```
* * *

## Parameters

PropertyTypeDescriptiondocumentFunctionA function that returns the static document for your application.
