[**Solid**Start](../..)

- [Core](../../../index.md)
- [Router](../../../solid-router)
- [SolidStart](../..)
- [Meta](../../../solid-meta)

[](https://github.com/solidjs/solid-start)[](https://discord.com/invite/solidjs)

LearnReference

- Entrypoints
  
  - [app.config.ts](../entrypoints/app-config.md)
  - [app.tsx](../entrypoints/app.md)
  - [entry-client.tsx](../entrypoints/entry-client.md)
  - [entry-server.tsx](../entrypoints/entry-server.md)
- Config
  
  - [defineConfig](../config/define-config.md)
- Routing
  
  - [FileRoutes](../routing/file-routes.md)
- Client
  
  - [clientOnly](client-only.md)
  - [mount](mount.md)
  - [StartClient](start-client.md)
- Server
  
  - ["use server"](../server/use-server.md)
  - [createHandler](../server/create-handler.md)
  - [createMiddleware](../server/create-middleware.md)
  - [GET](../server/get.md)
  - [getServerFunctionMeta](../server/get-server-function-meta.md)
  - [HttpHeader](../server/http-header.md)
  - [HttpStatusCode](../server/http-status-code.md)
  - [StartServer](../server/start-server.md)

Client

# clientOnly

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/client/client-only.mdx)

The `clientOnly` function allows components or pages to render exclusively on the client side, bypassing server-side rendering (*SSR*). This is useful for code that relies on the browser-specific APIs, such as `window` or `document`.

* * *

## [How to Use `clientOnly` in Components](client-only.md#how-to-use-clientonly-in-components)

1. **Isolate Client-Only Logic**: Create a separate file for the component that depends on browser-specific features, such as DOM or browser APIs.
   
   ```
   
   
   export default function ClientOnlyComponent() {
   
     const location = document.location.href;
   
     return <div>Current URL: {location}</div>;
   
   }
   ```
2. **Import with `clientOnly`** : Use `clientOnly` to dynamically import the isolated component in your parent component or page.
   
   ```
   
   
   import { clientOnly } from "@solidjs/start";
   
   
   
   
   const ClientOnlyComp = clientOnly(() => import("./ClientOnlyComponent"));
   
   
   
   
   export default function IsomorphicComponent() {
   
     return <ClientOnlyComp />;
   
   }
   ```
3. **Add a Fallback (Optional)**: Provide a `fallback` prop to display content while the client-only component is loading.
   
   ```
   
   
   <ClientOnlyComp fallback={<div>Loading...</div>} />
   ```

* * *

## [Disabling SSR for Entire Pages](client-only.md#disabling-ssr-for-entire-pages)

To disable SSR for an entire page, apply `clientOnly` at the page level. This ensures the page renders only on the client.

```


import { clientOnly } from "@solidjs/start";




export default clientOnly(async () => ({ default: Page }), { lazy: true });




function Page() {

  // This code runs only on the client

  return <div>Client-only page content</div>;

}
```

* * *

## [Parameters](client-only.md#parameters)

ArgumentTypeDescription`fn``() => Promise<{ default: () => JSX.Element }>`A function that dynamically imports a component to be rendered only on the client side.`options``{ lazy?: boolean }`An optional object to configure loading behavior. Set `lazy: false` for eager loading`props``Record<string, any> & { fallback?: JSX.Element }`Props passed to the component, including an optional `fallback` for rendering while the component loads.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fclient%2Fclient-only.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fclient%2Fclient-only)

Previous[← FileRoutes](../routing/file-routes.md)

Next[mount →](mount.md)

On this page

1. [Overview](#_top)
2. [How to Use clientOnly in Components](#how-to-use-clientonly-in-components)
3. [Disabling SSR for Entire Pages](#disabling-ssr-for-entire-pages)
4. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/client/client-only.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fclient%2Fclient-only.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fclient%2Fclient-only)