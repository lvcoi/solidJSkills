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
  
  - [Middleware](../advanced/middleware.md)
  - [Sessions](../advanced/session.md)
  - [Request events](../advanced/request-events.md)
  - [Returning responses](../advanced/return-responses.md)
  - [Auth](../advanced/auth.md)
  - [WebSocket endpoint](../advanced/websocket.md)
- Guides
  
  - [Security](security.md)
  - [Data fetching](data-fetching.md)
  - [Data mutation](data-mutation.md)
  - [Service workers](service-workers.md)

Guides

# Security

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/security.mdx)

* * *

## [XSS (Cross Site Scripting)](security.md#xss-cross-site-scripting)

Solid automatically escape values passed to JSX expressions to reduce the risk of XSS attacks. However, this protection does not apply when using [`innerHTML`](../../reference/jsx-attributes/innerhtml.md).

To protect your application from XSS attacks:

- Set a [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).
- Validate and sanitize user inputs, especially form inputs on the server and client.
- Avoid using `innerHTML` when possible. If necessary, make sure to sanitize user-supplied data with libraries such as [DOMPurify](https://github.com/cure53/DOMPurify).
- Sanitize attributes containing user-supplied data within `<noscript>` elements. This includes both the attributes of the `<noscript>` element itself and its children.
- When URLs are provided or constructed via user input validate its `origin` and `protocol` (to avoid evaluating code via `javascript:` URLs) using the [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) API.

It is highly recommended to read the [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) for further guidance.

* * *

## [Content Security Policy (CSP)](security.md#content-security-policy-csp)

To configure the `Content-Security-Policy` HTTP header, a [middleware](../advanced/middleware.md) can be used.

### [With nonce (recommended)](security.md#with-nonce-recommended)

If you want to use a [strict CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#strict_csp) with nonces:

1. Create a middleware that configures the CSP header. It must then be registered using the [`onRequest`](../advanced/middleware.md#onrequest) event.
2. Create a nonce using a cryptographic random value generator, such as the [`randomBytes`](https://nodejs.org/api/crypto.html#cryptorandombytessize-callback) function from the `crypto` module.
3. Store the nonce in the [`locals`](../advanced/middleware.md#locals) object.
4. Configure SolidStart to use the nonce in your [`entry-server.tsx`](../reference/entrypoints/entry-server.md) file.

Middlewareentry-server.tsx

```


import { createMiddleware } from "@solidjs/start/middleware";

import { randomBytes } from "crypto";




export default createMiddleware({

  onRequest: (event) => {

    const nonce = randomBytes(16).toString("base64");




    event.locals.nonce = nonce;




    const csp = `

      default-src 'self';

      script-src 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval';

      object-src 'none';

      base-uri 'none';

      frame-ancestors 'none';

      form-action 'self';

    `.replace(/\s+/g, " ");




    event.response.headers.set("Content-Security-Policy", csp);

  },

});
```

```


// src/entry-server.tsx

// @refresh reload

import { createHandler, StartServer } from "@solidjs/start/server";




export default createHandler(

  () => <StartServer /* ... */ />,

  (event) => ({ nonce: event.locals.nonce })

);
```

### [Without nonce](security.md#without-nonce)

To configure CSP without a nonce, a middleware that sets the CSP header is required, and it should be registered to run during the [`onBeforeResponse`](../advanced/middleware.md#onbeforeresponse) event:

```


import { createMiddleware } from "@solidjs/start/middleware";




export default createMiddleware({

  onBeforeResponse: (event) => {

    const csp = `

      default-src 'self';

      font-src 'self'  ;

      object-src 'none';

      base-uri 'none';

      frame-ancestors 'none';

      form-action 'self';

    `.replace(/\s+/g, " ");




    event.response.headers.set("Content-Security-Policy", csp);

  },

});
```

* * *

## [CORS (Cross-Origin Resource Sharing)](security.md#cors-cross-origin-resource-sharing)

When other applications need access to API endpoints, a middleware that configures the CORS headers is needed:

```


import { createMiddleware } from "@solidjs/start/middleware";

import { json } from "@solidjs/router";




const TRUSTED_ORIGINS = ["https://my-app.com", "https://another-app.com"];




export default createMiddleware({

  onBeforeResponse: (event) => {

    const { request, response } = event;




    response.headers.append("Vary", "Origin, Access-Control-Request-Method");




    const origin = request.headers.get("Origin");

    const requestUrl = new URL(request.url);

    const isApiRequest = requestUrl && requestUrl.pathname.startsWith("/api");




    if (isApiRequest && origin && TRUSTED_ORIGINS.includes(origin)) {

      // Handle preflight requests.

      if (

        request.method === "OPTIONS" &&

        request.headers.get("Access-Control-Request-Method")

      ) {

        // Preflight requests are standalone, so we immediately send a response.

        return json(null, {

          headers: {

            "Access-Control-Allow-Origin": origin,

            "Access-Control-Allow-Methods": "OPTIONS, POST, PUT, PATCH, DELETE",

            "Access-Control-Allow-Headers": "Authorization, Content-Type",

          },

        });

      }




      // Handle normal requests.

      response.headers.set("Access-Control-Allow-Origin", origin);

    }

  },

});
```

* * *

## [CSRF (Cross-Site Request Forgery)](security.md#csrf-cross-site-request-forgery)

To prevent basic CSRF attacks, a middleware can be used to block untrusted requests:

```


import { createMiddleware } from "@solidjs/start/middleware";

import { json } from "@solidjs/router";




const SAFE_METHODS = ["GET", "HEAD", "OPTIONS", "TRACE"];

const TRUSTED_ORIGINS = ["https://another-app.com"];




export default createMiddleware({

  onRequest: (event) => {

    const { request } = event;




    if (!SAFE_METHODS.includes(request.method)) {

      const requestUrl = new URL(request.url);

      const origin = request.headers.get("Origin");




      // If we have an Origin header, check it against our allowlist.

      if (origin) {

        const parsedOrigin = new URL(origin);




        if (

          parsedOrigin.origin !== requestUrl.origin &&

          !TRUSTED_ORIGINS.includes(parsedOrigin.host)

        ) {

          return json({ error: "origin invalid" }, { status: 403 });

        }

      }




      // If we are serving via TLS and have no Origin header, prevent against

      // CSRF via HTTP man-in-the-middle attacks by enforcing strict Referer

      // origin checks.

      if (!origin && requestUrl.protocol === "https:") {

        const referer = request.headers.get("Referer");




        if (!referer) {

          return json({ error: "referer not supplied" }, { status: 403 });

        }




        const parsedReferer = new URL(referer);




        if (parsedReferer.protocol !== "https:") {

          return json({ error: "referer invalid" }, { status: 403 });

        }




        if (

          parsedReferer.host !== requestUrl.host &&

          !TRUSTED_ORIGINS.includes(parsedReferer.host)

        ) {

          return json({ error: "referer invalid" }, { status: 403 });

        }

      }

    }

  },

});
```

This example demonstrates a basic CSRF protection that verifies the `Origin` and `Referer` headers, blocking requests from untrusted origins. **Please note both of these headers can be forged.** Additionally, consider implementing a more robust CSRF protection mechanism, such as the [Double-Submit Cookie Pattern](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#alternative-using-a-double-submit-cookie-pattern).

For further guidance, you can look at the [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fguides%2Fsecurity.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fguides%2Fsecurity)

Previous[← WebSocket endpoint](../advanced/websocket.md)

Next[Data fetching →](data-fetching.md)

On this page

1. [Overview](#_top)
2. [XSS (Cross Site Scripting)](#xss-cross-site-scripting)
3. [Content Security Policy (CSP)](#content-security-policy-csp)
   
   1. [With nonce (recommended)](#with-nonce-recommended)
   2. [Without nonce](#without-nonce)
4. [CORS (Cross-Origin Resource Sharing)](#cors-cross-origin-resource-sharing)
5. [CSRF (Cross-Site Request Forgery)](#csrf-cross-site-request-forgery)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/security.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fguides%2Fsecurity.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fguides%2Fsecurity)