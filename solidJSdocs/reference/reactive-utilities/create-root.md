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

# createRoot

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/create-root.mdx)

The `createRoot` function creates a new owned context, which requires explicit disposal of computations it owns.

* * *

## [Import](create-root.md#import)

```


import { createRoot } from "solid-js";
```

* * *

## [Type](create-root.md#type)

```


function createRoot<T>(

  fn: (dispose: () => void) => T,

  detachedOwner?: Owner

): T;
```

* * *

## [Parameters](create-root.md#parameters)

### [`fn`](create-root.md#fn)

- **Type:** `(dispose: () => void) => T`
- **Required:** Yes

The function executes within a newly created owned context. The computations created within this function are managed by the root and will only be disposed of when the provided `dispose` function is called.

If a function is passed without a `dispose` parameter, an unowned root is created. In this case, the computations are not managed for disposal, which may lead to memory leaks.

This function itself does not track dependencies and only runs once.

### [`detachedOwner`](create-root.md#detachedowner)

- **Type:** `Owner`
- **Required:** No

An optional owner that establishes the root's position in the ownership hierarchy. When provided, the root becomes owned by this owner and inherits its contextual state (such as [contexts](../../concepts/context.md)).

* * *

## [Return Value](create-root.md#return-value)

`createRoot` returns the value returned by the `fn` function.

* * *

## [Examples](create-root.md#examples)

### [Basic Usage](create-root.md#basic-usage)

```


import { createSignal, createEffect, createRoot } from "solid-js";




function createCounter(initial = 0) {

  const [count, setCount] = createSignal(initial);




  createEffect(() => {

    console.log(`Count changed, new value: ${count()}`);

  });




  function increment() {

    setCount((c) => c + 1);

  }




  function reset() {

    setCount(initial);

  }




  return { count, increment, reset };

}




test("createCounter works correctly", () => {

  createRoot((dispose) => {

    const { count, increment, reset } = createCounter(10);




    expect(count()).toBe(10);

    increment();

    expect(count()).toBe(11);

    reset();

    expect(count()).toBe(10);




    dispose();

  });

});
```

### [Returning Values](create-root.md#returning-values)

```


import { createRoot, createSignal, onCleanup } from "solid-js";




const counter = createRoot((dispose) => {

  const [count, setCount] = createSignal(0);




  onCleanup(() => {

    console.log("Dispose was called!");

  });




  return {

    value: count,

    increment: () => setCount((c) => c + 1),

    dispose,

  };

});




console.log(counter.value()); // 0

counter.increment();

console.log(counter.value()); // 1

counter.dispose(); // Logs "Dispose was called!"
```

* * *

## [Related](create-root.md#related)

- [`render`](../rendering/render.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Freactive-utilities%2Fcreate-root.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Freactive-utilities%2Fcreate-root)

Previous[← catchError](catch-error.md)

Next[from →](from.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [fn](#fn)
   2. [detachedOwner](#detachedowner)
5. [Return Value](#return-value)
6. [Examples](#examples)
   
   1. [Basic Usage](#basic-usage)
   2. [Returning Values](#returning-values)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/create-root.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Freactive-utilities%2Fcreate-root.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Freactive-utilities%2Fcreate-root)