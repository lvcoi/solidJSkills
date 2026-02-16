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
  
  - [&lt;Dynamic&gt;](dynamic.md)
  - [&lt;ErrorBoundary&gt;](error-boundary.md)
  - [&lt;For&gt;](for.md)
  - [&lt;Index&gt;](index-component.md)
  - [&lt;NoHydration&gt;](no-hydration.md)
  - [&lt;Portal&gt;](portal.md)
  - [&lt;Show&gt;](show.md)
  - [&lt;Suspense&gt;](suspense.md)
  - [&lt;SuspenseList&gt;](suspense-list.md)
  - [&lt;Switch&gt; / &lt;Match&gt;](switch-and-match.md)
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
  
  - [getRequestEvent](../server-utilities/get-request-event.md)

Components

# &lt;ErrorBoundary&gt;

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/components/error-boundary.mdx)

The `<ErrorBoundary>` component catches errors that occur during the rendering or updating of its children and shows a fallback UI instead. This includes:

- Errors that occur while rendering JSX.
- Errors that occur within `createEffect`, `createMemo`, and other state management primitives.
- Errors that occur within `createResource` and other asynchronous state management or data-fetching primitives.

However, errors occurring outside the rendering process are **not** captured by error boundaries. For instance:

- Errors that occur inside event handlers.
- Errors that occur after a `setTimeout`.

* * *

## [Props](error-boundary.md#props)

### [`fallback`](error-boundary.md#fallback)

**Type**: `JSX.Element | ((err: any, reset: () => void) => JSX.Element)`

`fallback` provides content to display when an error occurs. If a function is passed, it receives two parameters:

- `err`: The caught error object.
- `reset`: A function that forces the `<ErrorBoundary>` to re-render its children and clear the error state.

If there's an error within the `fallback` itself, however, it is not caught by the same `<ErrorBoundary>`. Instead, it will bubble up to any parent error boundaries.

* * *

## [Example](error-boundary.md#example)

```


import { ErrorBoundary } from "solid-js";

import { ErrorProne } from "./components";




function Example() {

  return (

    <ErrorBoundary

      fallback={(error, reset) => (

        <div>

          <p>{error.message}</p>

          <button onClick={reset}>Try Again</button>

        </div>

      )}

    >

      <ErrorProne />

    </ErrorBoundary>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponents%2Ferror-boundary.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponents%2Ferror-boundary)

Previous[← &lt;Dynamic&gt;](dynamic.md)

Next[&lt;For&gt; →](for.md)

On this page

1. [Overview](#_top)
2. [Props](#props)
   
   1. [fallback](#fallback)
3. [Example](#example)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/components/error-boundary.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponents%2Ferror-boundary.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponents%2Ferror-boundary)