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
  
  - [batch](batch.md)
  - [catchError](catch-error.md)
  - [createRoot](create-root.md)
  - [from](from.md)
  - [getOwner](get-owner.md)
  - [indexArray](index-array.md)
  - [mapArray](map-array.md)
  - [mergeProps](merge-props.md)
  - [observable](observable.md)
  - [on](on-util.md)
  - [runWithOwner](run-with-owner.md)
  - [splitProps](split-props.md)
  - [startTransition](start-transition.md)
  - [untrack](untrack.md)
  - [useTransition](use-transition.md)
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

Reactive utilities

# runWithOwner

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/run-with-owner.mdx)

```


import { runWithOwner } from "solid-js"

import type { Owner } from "solid-js"




function runWithOwner<T>(owner: Owner, fn: (() => void) => T): T
```

Executes the given function under the provided owner, instead of (and without affecting) the owner of the outer scope. By default, computations created by `createEffect`, `createMemo`, etc. are owned by the owner of the currently executing code (the return value of `getOwner`), so in particular these will get disposed when their owner does. Calling `runWithOwner` provides a way to override this default to a manually specified owner (typically, the return value from a previous call to `getOwner`), enabling more precise control of when computations get disposed.

Having a (correct) owner is important for two reasons:

- Computations without an owner cannot be cleaned up. For example, if you call `createEffect` without an owner (e.g., in the global scope), the effect will continue running forever, instead of being disposed when its owner gets disposed.
- `useContext` obtains context by walking up the owner tree to find the nearest ancestor providing the desired context. So without an owner you cannot look up any provided context (and with the wrong owner, you might obtain the wrong context).

Manually setting the owner is especially helpful when doing reactivity outside of any owner scope. In particular, asynchronous computation (via either `async` functions or callbacks like `setTimeout`) lose their automatically set owner, so remembering the original owner via `getOwner` and restoring it via `runWithOwner` is necessary in these cases. For example:

```


const owner = getOwner()

setTimeout(() => {

  // This callback gets run without owner.

  // Restore owner via runWithOwner:

  runWithOwner(owner, () => {

    const foo = useContext(FooContext)

    createEffect(() => {

      console.log(foo)

    })

  })

}, 1000)
```

**Note:** that owners are not what determines dependency tracking, so `runWithOwner` does not help with tracking in asynchronous functions; use of reactive state in the asynchronous part (e.g. after the first `await`) will not be tracked as a dependency.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Freactive-utilities%2Frun-with-owner.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Freactive-utilities%2Frun-with-owner)

Previous[← on](on-util.md)

Next[splitProps →](split-props.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/run-with-owner.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Freactive-utilities%2Frun-with-owner.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Freactive-utilities%2Frun-with-owner)