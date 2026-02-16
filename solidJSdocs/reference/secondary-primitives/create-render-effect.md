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
  
  - [createComputed](create-computed.md)
  - [createDeferred](create-deferred.md)
  - [createReaction](create-reaction.md)
  - [createRenderEffect](create-render-effect.md)
  - [createSelector](create-selector.md)
- Store utilities
  
  - [createMutable](../store-utilities/create-mutable.md)
  - [createStore](../store-utilities/create-store.md)
  - [modifyMutable](../store-utilities/modify-mutable.md)
  - [produce](../store-utilities/produce.md)
  - [reconcile](../store-utilities/reconcile.md)
  - [unwrap](../store-utilities/unwrap.md)
- Server utilities
  
  - [getRequestEvent](../server-utilities/get-request-event.md)

Secondary primitives

# createRenderEffect

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-render-effect.mdx)

The `createRenderEffect` primitive creates a reactive computation that automatically tracks reactive values, such as [signals](../../concepts/signals.md), accessed within the provided function. This function re-runs whenever any of its dependencies change.

* * *

## [Execution Timing](create-render-effect.md#execution-timing)

### [Initial Run](create-render-effect.md#initial-run)

- A render effect runs **synchronously during the current rendering phase**, while DOM elements are being created or updated.
- It **runs before elements are mounted** to the DOM.
- **[Refs](../../concepts/refs.md) are not set** during this initial run.

### [Subsequent Runs](create-render-effect.md#subsequent-runs)

- After the initial render, the render effect **re-runs whenever any of its tracked dependencies change**.
- Re-runs occur **after** all pure computations (such as [memos](../../concepts/derived-values/memos.md)) have completed within the same update cycle.
- When multiple dependencies change within the same batch, the render effect **runs once per batch**.
- The **order of re-runs** among multiple render effects is **not guaranteed**.

### [Server-Side Rendering](create-render-effect.md#server-side-rendering)

- During SSR, render effects **run once on the server**, since they are part of the synchronous rendering phase.
- On the client, an initial run still occurs during the client rendering phase to initialize the reactive system; that client initial run is separate from the server run.
- After hydration, subsequent runs occur on the client when dependencies change.

* * *

## [Import](create-render-effect.md#import)

```


import { createRenderEffect } from "solid-js";
```

* * *

## [Type](create-render-effect.md#type)

```


function createRenderEffect<Next>(

  fn: EffectFunction<undefined | NoInfer<Next>, Next>

): void;

function createRenderEffect<Next, Init = Next>(

  fn: EffectFunction<Init | Next, Next>,

  value: Init,

  options?: { name?: string }

): void;

function createRenderEffect<Next, Init>(

  fn: EffectFunction<Init | Next, Next>,

  value?: Init,

  options?: { name?: string }

): void;
```

* * *

## [Parameters](create-render-effect.md#parameters)

### [`fn`](create-render-effect.md#fn)

- **Type:** `EffectFunction<undefined | NoInfer<Next> | EffectFunction<Init | Next, Next>`
- **Required:** Yes

A function to be executed as the render effect.

It receives the value returned from the previous run, or the initial `value` during the first run. The value returned by `fn` is passed to the next run.

### [`value`](create-render-effect.md#value)

- **Type:** `Init`
- **Required:** No

The initial value passed to `fn` during its first run.

### [`options`](create-render-effect.md#options)

- **Type:** `{ name?: string }`
- **Required:** No

An optional configuration object with the following properties:

#### [`name`](create-render-effect.md#name)

- **Type:** `string`
- **Required:** No

A name for the render effect, which can be useful for identification in debugging tools like the [Solid Debugger](https://github.com/thetarnav/solid-devtools).

* * *

## [Return value](create-render-effect.md#return-value)

`createRenderEffect` does not return a value.

* * *

## [Examples](create-render-effect.md#examples)

### [Basic Usage](create-render-effect.md#basic-usage)

```


import { createSignal, createRenderEffect } from "solid-js";




function Counter() {

  const [count, setCount] = createSignal(0);




  // This runs immediately during render, and re-runs when the count changes.

  createRenderEffect(() => {

    console.log("Count: ", count());

  });




  return (

    <div>

      <p>Count: {count()}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

    </div>

  );

}
```

### [Execution Timing](create-render-effect.md#execution-timing-1)

```


import { createSignal, createEffect, createRenderEffect } from "solid-js";




function Counter() {

  const [count, setCount] = createSignal(0);




  // This is part of the component's synchronous execution.

  console.log("Hello from counter");




  // This effect is scheduled to run after the initial render is complete.

  createEffect(() => {

    console.log("Effect:", count());

  });




  // By contrast, a render effect runs synchronously during the render phase.

  createRenderEffect(() => {

    console.log("Render effect:", count());

  });




  // Setting a signal during the render phase re-runs render effects, but not effects, which are

  // still scheduled.

  setCount(1);




  // A microtask is scheduled to run after the current synchronous code (the render phase) finishes.

  queueMicrotask(() => {

    // Now that rendering is complete, signal updates will trigger effects immediately.

    setCount(2);

  });

}




// Output:

// Hello from counter

// Render effect: 0

// Render effect: 1

// Effect: 1

// Render effect: 2

// Effect: 2
```

* * *

## [Related](create-render-effect.md#related)

- [`createEffect`](../basic-reactivity/create-effect.md)
- [`onCleanup`](../lifecycle/on-cleanup.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fsecondary-primitives%2Fcreate-render-effect.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fsecondary-primitives%2Fcreate-render-effect)

Previous[← createReaction](create-reaction.md)

Next[createSelector →](create-selector.md)

On this page

1. [Overview](#_top)
2. [Execution Timing](#execution-timing)
   
   1. [Initial Run](#initial-run)
   2. [Subsequent Runs](#subsequent-runs)
   3. [Server-Side Rendering](#server-side-rendering)
3. [Import](#import)
4. [Type](#type)
5. [Parameters](#parameters)
   
   1. [fn](#fn)
   2. [value](#value)
   3. [options](#options)
6. [Return value](#return-value)
7. [Examples](#examples)
   
   1. [Basic Usage](#basic-usage)
   2. [Execution Timing](#execution-timing-1)
8. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-render-effect.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fsecondary-primitives%2Fcreate-render-effect.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fsecondary-primitives%2Fcreate-render-effect)