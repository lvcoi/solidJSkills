# HttpHeader

`HttpHeader` provides a way to set headers on HTTPs response sent by the server.

```
import { HttpHeader } from "@solidjs/start";

<HttpHeader name="x-robots-tag" value="noindex" />;
```
* * *

## Setting a header for catch-all routes

```
import { HttpHeader, HttpStatusCode } from "@solidjs/start";

export default function NotFound() {

  return (

    <div>

      <HttpStatusCode code={404} />

      <HttpHeader name="my-header" value="header-value" />

    </div>

  );

}
```
As a page is rendered, you may want to add additional HTTP headers to the response and the `HttpHeader` component will do that for you. By passing it a `name` and `value`, they will get added to the `Response` headers sent back to the browser.

When streaming responses with [`renderToStream`](../../../reference/rendering/render-to-stream.md), HTTP headers can only be added before the stream is first flushed. This requires adding `deferStream` to any resources that need to be loaded before responding.

* * *

## Parameters

PropertyTypeDescriptionnamestringThe name of the header to setvaluestringThe value of the header to set
