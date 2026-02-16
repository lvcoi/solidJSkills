[**Solid**](../../index.md)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- Basic reactivity
  
  - [createEffect](../basic-reactivity/create-effect.md)
  - [createMemo](../basic-reactivity/create-memo.md)
  - [createResource](../basic-reactivity/create-resource.md)
  - [createSignal](../basic-reactivity/create-signal.md)
- Component APIs
  
  - [children](../component-apis/children.md)
  - [createContext](../component-apis/create-context.md)
  - [createUniqueId](../component-apis/create-unique-id.md)
  - [lazy](../component-apis/lazy.md)
  - [useContext](../component-apis/use-context.md)
- Components
  
  - [&lt;Dynamic&gt;](../components/dynamic.md)
  - [&lt;ErrorBoundary&gt;](../components/error-boundary.md)
  - [&lt;For&gt;](../components/for.md)
  - [&lt;Index&gt;](../components/index-component.md)
  - [&lt;NoHydration&gt;](../components/no-hydration.md)
  - [&lt;Portal&gt;](../components/portal.md)
  - [&lt;Show&gt;](../components/show.md)
  - [&lt;Suspense&gt;](../components/suspense.md)
  - [&lt;SuspenseList&gt;](../components/suspense-list.md)
  - [&lt;Switch&gt; / &lt;Match&gt;](../components/switch-and-match.md)
- JSX attributes
  
  - [@once](../jsx-attributes/once.md)
  - [attr:\*](../jsx-attributes/attr.md)
  - [bool:\*](../jsx-attributes/bool.md)
  - [classList](../jsx-attributes/classlist.md)
  - [innerHTML](../jsx-attributes/innerhtml.md)
  - [on:\*](../jsx-attributes/on.md)
  - [on\*](../jsx-attributes/on_.md)
  - [prop:\*](../jsx-attributes/prop.md)
  - [ref](../jsx-attributes/ref.md)
  - [style](../jsx-attributes/style.md)
  - [textContent](../jsx-attributes/textcontent.md)
  - [use:\*](../jsx-attributes/use.md)
- Lifecycle
  
  - [onCleanup](../lifecycle/on-cleanup.md)
  - [onMount](../lifecycle/on-mount.md)
- Reactive utilities
  
  - [batch](../reactive-utilities/batch.md)
  - [catchError](../reactive-utilities/catch-error.md)
  - [createRoot](../reactive-utilities/create-root.md)
  - [from](../reactive-utilities/from.md)
  - [getOwner](../reactive-utilities/get-owner.md)
  - [indexArray](../reactive-utilities/index-array.md)
  - [mapArray](../reactive-utilities/map-array.md)
  - [mergeProps](../reactive-utilities/merge-props.md)
  - [observable](../reactive-utilities/observable.md)
  - [on](../reactive-utilities/on-util.md)
  - [runWithOwner](../reactive-utilities/run-with-owner.md)
  - [splitProps](../reactive-utilities/split-props.md)
  - [startTransition](../reactive-utilities/start-transition.md)
  - [untrack](../reactive-utilities/untrack.md)
  - [useTransition](../reactive-utilities/use-transition.md)
- Rendering
  
  - [DEV](../rendering/dev.md)
  - [hydrate](../rendering/hydrate.md)
  - [hydrationScript](../rendering/hydration-script.md)
  - [isServer](../rendering/is-server.md)
  - [render](../rendering/render.md)
  - [renderToStream](../rendering/render-to-stream.md)
  - [renderToString](../rendering/render-to-string.md)
  - [renderToStringAsync](../rendering/render-to-string-async.md)
- Secondary primitives
  
  - [createComputed](../secondary-primitives/create-computed.md)
  - [createDeferred](../secondary-primitives/create-deferred.md)
  - [createReaction](../secondary-primitives/create-reaction.md)
  - [createRenderEffect](../secondary-primitives/create-render-effect.md)
  - [createSelector](../secondary-primitives/create-selector.md)
- Store utilities
  
  - [createMutable](../store-utilities/create-mutable.md)
  - [createStore](../store-utilities/create-store.md)
  - [modifyMutable](../store-utilities/modify-mutable.md)
  - [produce](../store-utilities/produce.md)
  - [reconcile](../store-utilities/reconcile.md)
  - [unwrap](../store-utilities/unwrap.md)
- Server utilities
  
  - [getRequestEvent](get-request-event.md)

Server utilities

# getRequestEvent

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/server-utilities/get-request-event.mdx)

Solid uses Async Local Storage as a way of injecting the request context anywhere on the server. The server provides a utility function to access this context (called a `RequestEvent`).

```


import { getRequestEvent } from "solid-js/web"

import type { RequestEvent } from "solid-js/web"




function getRequestEvent(): RequestEvent | undefined
```

You can retrieve the request event by calling `getRequestEvent`:

```


import { getRequestEvent } from "solid-js/web"




const event = getRequestEvent()
```

* * *

## [Request](get-request-event.md#request)

`.request` is the most important property of the `RequestEvent`. This is a Web [Request object](https://developer.mozilla.org/en-US/docs/Web/API/Request) that represents the current request to the server. You can access properties off of it such as `url` and `headers`. `body`, however, does not typically need to be handled directly for things such as server functions or rendering, which already handle mapping.

```


import { getRequestEvent } from "solid-js/web"




const event = getRequestEvent();

if (event) {

  const auth = event.request.headers.get("Authorization");

}
```

* * *

## [Response](get-request-event.md#response)

The `getRequestEvent` can also be used to stub out the Response - this extends the [options that can be passed to the `Response constructor`](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#options). This is kept up to date so it can be used to read and write headers and status for the current response.

```


import { getRequestEvent } from "solid-js/web"




const event = getRequestEvent();

if (event) {

  event.response.headers.append("Set-Cookie", "foo=hello");

  event.response.status = 201;

}
```

### [Change event.response or create a new Response](get-request-event.md#change-eventresponse-or-create-a-new-response)

The `getRequestEvent` event is considered global and lasts the life of the request. Therefore, if you are calling a server function on the server during SSR or an RPC call, setting values on `event.response` will reflect on that request.

The returned response will only impact the response when it is an RPC call. This is important because some headers previously set may not be needed to be set for the whole page, but only for a specific request.

**Note:** This is important to keep in mind when choosing where to set headers and responses.

Usage with SolidStart

See this guide on [Request Events](../../solid-start/advanced/request-events.md).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fserver-utilities%2Fget-request-event.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fserver-utilities%2Fget-request-event)

Previous[← unwrap](../store-utilities/unwrap.md)

On this page

1. [Overview](#_top)
2. [Request](#request)
3. [Response](#response)
   
   1. [Change event.response or create a new Response](#change-eventresponse-or-create-a-new-response)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/server-utilities/get-request-event.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fserver-utilities%2Fget-request-event.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fserver-utilities%2Fget-request-event)