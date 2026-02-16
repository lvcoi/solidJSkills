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

# batch

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/batch.mdx)

```


import { batch } from "solid-js"




function batch<T>(fn: () => T): T
```

`batch` is a low-level API that batches updates together. More precisely, `batch(fn)` holds the execution of downstream computations during the `fn` block, executing them all together once the block `fn` returns. Thus, instead of a downstream computation executing after every dependency update, it will update just once at the end of the batch.

Batching improves performance by avoiding unnecessary recalculation. Suppose you have a downstream memo `down` that depends on multiple upstream signals `up1`, `up2`, and `up3`:

```


import { createSignal, createMemo, createEffect } from "solid-js"

const [up1, setUp1] = createSignal(1)

const [up2, setUp2] = createSignal(2)

const [up3, setUp3] = createSignal(3)

const down = createMemo(() => up1() + up2() + up3())

// For illustration, monitor when `down` gets recomputed:

createEffect(() => console.log(down())) // outputs 6
```

If you directly update all of the upstream signals outside of batch mode, then `down` will recompute every time.

```


setUp1(4) // recomputes down, outputs 9

setUp2(5) // recomputes down, outputs 12

setUp3(6) // recomputes down, outputs 15
```

If instead you update the upstream signals within a `batch`, then `down` will update only once at the end:

```


batch(() => {

  setUp1(10) // doesn't update down yet

  setUp2(10) // doesn't update down yet

  setUp3(10) // doesn't update down yet

}) // recomputes down, outputs 30
```

The impact is even more dramatic if you have *m* downstream computations (memos, effects, etc.) that each depends on *n* upstream signals. Without batching, modifying all *n* upstream signals would cause *m n* updates to the downstream computations. With batching, modifying all *n* upstream signals would cause *m* updates to the downstream computations. Given that each update takes at least *n* time (just to read the upstream signals), this cost savings can be significant. Batching is also especially helpful when the downstream effects include DOM updates, which can be expensive.

Solid uses `batch` internally to automatically batch updates for you in a few cases:

- Within [`createEffect`](../basic-reactivity/create-effect.md) and [`onMount`](../lifecycle/on-mount.md) (unless they are outside a [root](create-root.md))
- Within the [setter of a store](../store-utilities/create-store.md#setter) (which can update several properties at once)
- Within array methods (e.g. `Array.prototype.splice`) of a [mutable store](../store-utilities/create-mutable.md) (which can update several elements at once)

These save you from having to use `batch` yourself in many cases. For the most part, automatic batching should be transparent to you, because accessing a signal or memo will cause it to update if it is out of date (as of Solid 1.4). For example:

```


batch(() => {

  setUp1(11) // doesn't update down yet

  setUp2(11) // doesn't update down yet

  setUp3(11) // doesn't update down yet

  console.log(down()) // recomputes down, outputs 33

  setUp1(12) // doesn't update down yet

  setUp2(12) // doesn't update down yet

  setUp3(12) // doesn't update down yet

}) // recomputes down, outputs 36
```

You can think of `batch(fn)` as setting a global "batch mode" variable, calling the function `fn`, and then restoring the global variable to its previous value. This means that you can nest `batch` calls, and they will form one big batch. It also means that, if `fn` is asynchronous, only the updates before the first `await` will be batched.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Freactive-utilities%2Fbatch.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Freactive-utilities%2Fbatch)

Previous[← onMount](../lifecycle/on-mount.md)

Next[catchError →](catch-error.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/batch.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Freactive-utilities%2Fbatch.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Freactive-utilities%2Fbatch)