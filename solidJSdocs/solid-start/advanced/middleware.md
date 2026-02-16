[**Solid**Start](..)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](..)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid-start)[](https://discord.com/invite/solidjs)

LearnReference

- [Overview](..)
- [Getting started](../getting-started.md)
- Building your application
  
  - [Routing](../building-your-application/routing.md)
  - [API routes](../building-your-application/api-routes.md)
  - [CSS and styling](../building-your-application/css-and-styling.md)
  - [Data fetching](../building-your-application/data-fetching.md)
  - [Data mutation](../building-your-application/data-mutation.md)
  - [Head and metadata](../building-your-application/head-and-metadata.md)
  - [Route Pre-rendering](../building-your-application/route-prerendering.md)
  - [Static assets](../building-your-application/static-assets.md)
- Advanced
  
  - [Middleware](middleware.md)
  - [Sessions](session.md)
  - [Request events](request-events.md)
  - [Returning responses](return-responses.md)
  - [Auth](auth.md)
  - [WebSocket endpoint](websocket.md)
- Guides
  
  - [Security](../guides/security.md)
  - [Data fetching](../guides/data-fetching.md)
  - [Data mutation](../guides/data-mutation.md)
  - [Service workers](../guides/service-workers.md)

Advanced

# Middleware

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/middleware.mdx)

Middleware intercepts HTTP requests and responses to perform tasks like authentication, redirection, logging, and more. It also enables sharing request-scoped data across the application using the `event.locals` object.

* * *

## [Common use cases](middleware.md#common-use-cases)

Here are some common use cases for middleware:

- **Request and response header management:** Middleware allows modifying headers to control caching (e.g., `Cache-Control`), improve security (e.g., `Content-Security-Policy`), or implement custom behaviour based on request characteristics.
- **Global data sharing:** The `event.locals` object allows storing and sharing request-scoped data between middleware and any server-side context (e.g., API routes, server-only queries/actions). This is useful for passing information like user authentication status, feature flags, or other request-related data.
- **Server-side redirects:** Middleware can redirect users based on various request properties, such as locale, authentication state, or custom query parameters.
- **Request preprocessing:** Middleware can perform lightweight preprocessing tasks, such as validating tokens or normalizing paths.

* * *

## [Limitations](middleware.md#limitations)

While middleware is powerful, certain tasks are better handled in other parts of your application for performance, maintainability, or security reasons:

- **Authorization:** Middleware does *not* run on every request, especially during client-side navigations. Relying on it for authorization would create a significant security vulnerability. As a result, authorization checks should be performed as close to the data source as possible. This means it within API routes, server-only queries/actions, or other server-side utilities.
- **Heavy computation or long-running processes:** Middleware should be lightweight and execute quickly to avoid impacting performance. CPU-intensive tasks, long-running processes, or blocking operations (e.g., complex calculations, external API calls) are best handled by dedicated route handlers, server-side utilities, or background jobs.
- **Database operations:** Performing direct database queries within middleware can lead to performance bottlenecks and make your application harder to maintain. Database interactions should be handled by server-side utilities or route handlers, which will create better management of database connections and handling of potential errors.

* * *

## [Basic usage](middleware.md#basic-usage)

Middleware is configured by exporting a configuration object from a dedicated file (e.g., `src/middleware/index.ts`). This object, created using the [`createMiddleware`](../reference/server/create-middleware.md) function, defines when middleware functions execute throughout the request lifecycle.

```


import { createMiddleware } from "@solidjs/start/middleware";




export default createMiddleware({

  onRequest: (event) => {

    console.log("Request received:", event.request.url);




    event.locals.startTime = Date.now();

  },

  onBeforeResponse: (event) => {

    const endTime = Date.now();

    const duration = endTime - event.locals.startTime;

    console.log(`Request took ${duration}ms`);

  },

});
```

For SolidStart to recognize the configuration object, the file path is declared in `app.config.ts`:

```


import { defineConfig } from "@solidjs/start/config";




export default defineConfig({

  middleware: "src/middleware/index.ts",

});
```

* * *

## [Lifecycle events](middleware.md#lifecycle-events)

A middleware function executes at specific points in the request lifecycle, using two key events: `onRequest` and `onBeforeResponse`.

### [`onRequest`](middleware.md#onrequest)

The `onRequest` event is triggered at the beginning of the request lifecycle, before the request is handled by the route handler. This is the ideal place to:

- Store request-scoped data in `event.locals` for use in later middleware functions or route handlers.
- Set or modify request headers.
- Perform early redirects.

### [`onBeforeResponse`](middleware.md#onbeforeresponse)

The `onBeforeResponse` event is triggered after a request has been processed by the route handler but before the response is sent to the client. This is the ideal place to:

- Set or modify response headers.
- Log response metrics or perform other post-processing tasks.
- Modify the response body.

* * *

## [Locals](middleware.md#locals)

In web applications, there's often a need to share request-specific data across different parts of the server-side code. This data might include user authentication status, trace IDs for debugging, or client metadata (e.g., user agent, geolocation).

The `event.locals` is a plain JavaScript object that can hold any JavaScript value. This object provides a temporary, request-scoped storage layer to address this need. Any data stored within it is only available during the processing of a single HTTP request and is automatically cleared afterward.

```


import { createMiddleware } from "@solidjs/start/middleware";




export default createMiddleware({

  onRequest: (event) => {

    event.locals.user = {

      name: "John Wick",

    };

    event.locals.sayHello = () => {

      return "Hello, " + event.locals.user.name;

    };

  },

});
```

Within middleware, `event.locals` can be accessed and modified directly. Other server-side contexts must use the [`getRequestEvent`](../../reference/server-utilities/get-request-event.md) function to access the `event.locals` object.

```


import { getRequestEvent } from "solid-js/web";

import { query, createAsync } from "@solidjs/router";




const getUser = query(async () => {

  "use server";

  const event = getRequestEvent();

  return {

    name: event?.locals?.user?.name,

    greeting: event?.locals?.sayHello(),

  };

}, "user");




export default function Page() {

  const user = createAsync(() => getUser());




  return (

    <div>

      <p>Name: {user()?.name}</p>

      <button onClick={() => alert(user()?.greeting)}>Say Hello</button>

    </div>

  );

}
```

* * *

## [Headers](middleware.md#headers)

Request and response headers can be accessed and modified using the `event.request.headers` and `event.response.headers` objects. These follow the [standard Web API `Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) interface, exposing built-in methods for reading/updating headers.

```


import { createMiddleware } from "@solidjs/start/middleware";




export default createMiddleware({

  onRequest: (event) => {

    // Reading client metadata for later use

    const userAgent = event.request.headers.get("user-agent");

    // Adding custom headers to request/response

    event.request.headers.set("x-custom-request-header", "hello");

    event.response.headers.set("x-custom-response-header1", "hello");

  },

  onBeforeResponse: (event) => {

    // Finalizing response headers before sending to client

    event.response.headers.set("x-custom-response-header2", "hello");

  },

});
```

Headers set in `onRequest` are applied **before** the route handler processes the request, allowing downstream middleware or route handlers to override them. Headers set in `onBeforeResponse` are applied **after** the route handler and are finalized for the client.

* * *

## [Cookies](middleware.md#cookies)

HTTP cookies are accessible through the `Cookie` request header and `Set-Cookie` response header. While these headers can be manipulated directly, [Vinxi](https://vinxi.vercel.app), the underlying server toolkit powering SolidStart, provides helpers to simplify cookie management. See the [Vinxi Cookies documentation](https://vinxi.vercel.app/api/server/cookies.html) for more information.

```


import { createMiddleware } from "@solidjs/start/middleware";

import { getCookie, setCookie } from "vinxi/http";




export default createMiddleware({

  onRequest: (event) => {

    // Reading a cookie

    const theme = getCookie(event.nativeEvent, "theme");




    // Setting a secure session cookie with expiration

    setCookie(event.nativeEvent, "session", "abc123", {

      httpOnly: true,

      secure: true,

      maxAge: 60 * 60 * 24, // 1 day

    });

  },

});
```

* * *

## [Custom responses](middleware.md#custom-responses)

Returning a value from a middleware function immediately terminates the request processing pipeline and sends the returned value as the response to the client. This means no further middleware functions or route handlers will be executed.

```


import { createMiddleware } from "@solidjs/start/middleware";




export default createMiddleware({

  onRequest: () => {

    return new Response("Unauthorized", { status: 401 });

  },

});
```

Only [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects can be returned from middleware functions. Returning any other value will result in an error.

### [Redirects](middleware.md#redirects)

[Solid Router](../../solid-router) provides the [`redirect` helper function](../../solid-router/reference/response-helpers/redirect.md) which simplifies creating redirect responses.

```


import { createMiddleware } from "@solidjs/start/middleware";

import { redirect } from "@solidjs/router";




const REDIRECT_MAP: Record<string, string> = {

  "/signup": "/auth/signup",

  "/login": "/auth/login",

};




export default createMiddleware({

  onRequest: (event) => {

    const { pathname } = new URL(event.request.url);




    // Redirecting legacy routes permanently to new paths

    if (pathname in REDIRECT_MAP) {

      return redirect(REDIRECT_MAP[pathname], 301);

    }

  },

});
```

This example checks the requested path and returns a redirect response if it matches a predefined path. The 301 status code indicates a permanent redirect. Other redirect status codes (e.g., 302, 307) are available as needed.

### [JSON responses](middleware.md#json-responses)

Solid Router provides the [`json` helper function](../../solid-router/reference/response-helpers/json.md) which simplifies sending custom JSON responses.

```


import { createMiddleware } from "@solidjs/start/middleware";

import { json } from "@solidjs/router";




export default createMiddleware({

  onRequest: (event) => {

    // Rejecting unauthorized API requests with a JSON error

    const authHeader = event.request.headers.get("Authorization");

    if (!authHeader) {

      return json({ error: "Unauthorized" }, { status: 401 });

    }

  },

});
```

* * *

## [Chaining middleware functions](middleware.md#chaining-middleware-functions)

`onRequest` and `onBeforeResponse` options in `createMiddleware` can accept either a single function or an array of middleware functions. When an array is provided, these functions execute sequentially within the same lifecycle event. This enables composing smaller, more-focused middleware functions, rather than handling all logic in a single, large middleware function.

```


import { createMiddleware } from "@solidjs/start/middleware";

import { type FetchEvent } from "@solidjs/start/server";




function middleware1(event: FetchEvent) {

  event.request.headers.set("x-custom-header1", "hello-from-middleware1");

}




function middleware2(event: FetchEvent) {

  event.request.headers.set("x-custom-header2", "hello-from-middleware2");

}




export default createMiddleware({

  onRequest: [middleware1, middleware2],

});
```

The order of middleware functions in the array determines their execution order. Dependent middleware functions should be placed after the middleware functions they rely on. For example, authentication middleware should typically run before logging middleware.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fadvanced%2Fmiddleware.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fadvanced%2Fmiddleware)

Previous[← Static assets](../building-your-application/static-assets.md)

Next[Sessions →](session.md)

On this page

01. [Overview](#_top)
02. [Common use cases](#common-use-cases)
03. [Limitations](#limitations)
04. [Basic usage](#basic-usage)
05. [Lifecycle events](#lifecycle-events)
    
    1. [onRequest](#onrequest)
    2. [onBeforeResponse](#onbeforeresponse)
06. [Locals](#locals)
07. [Headers](#headers)
08. [Cookies](#cookies)
09. [Custom responses](#custom-responses)
    
    1. [Redirects](#redirects)
    2. [JSON responses](#json-responses)
10. [Chaining middleware functions](#chaining-middleware-functions)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/middleware.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fadvanced%2Fmiddleware.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fadvanced%2Fmiddleware)