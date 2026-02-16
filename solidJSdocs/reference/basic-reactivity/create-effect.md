[**Solid**](../../index.md)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- Basic reactivity
  
  - [createEffect](create-effect.md)
  - [createMemo](create-memo.md)
  - [createResource](create-resource.md)
  - [createSignal](create-signal.md)
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
  
  - [getRequestEvent](../server-utilities/get-request-event.md)

Basic reactivity

# createEffect

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-effect.mdx)

The `createEffect` primitive creates a reactive computation. It automatically tracks reactive values, such as [signals](../../concepts/signals.md), accessed within the provided function. This function will re-run whenever any of its dependencies change.

* * *

## [Execution Timing](create-effect.md#execution-timing)

### [Initial Run](create-effect.md#initial-run)

- The initial run of effects is **scheduled to occur after the current rendering phase completes**.
- It runs after all synchronous code in a component has finished and DOM elements have been created, but **before the browser paints them on the screen**.
- **[Refs](../../concepts/refs.md) are set** before the first run, even though DOM nodes may not yet be attached to the main document tree. This is relevant when using the [`children`](../component-apis/children.md) helper.

### [Subsequent Runs](create-effect.md#subsequent-runs)

- After the initial run, the effect **re-runs whenever any tracked dependency changes**.
- When multiple dependencies change within the same batch, the effect **runs once per batch**.
- The **order of runs** among multiple effects is **not guaranteed**.
- Effects always run **after** all pure computations (such as [memos](../../concepts/derived-values/memos.md)) within the same update cycle.

### [Server-Side Rendering](create-effect.md#server-side-rendering)

- Effects **never run during SSR**.
- Effects also **do not run during the initial client hydration**.

* * *

## [Import](create-effect.md#import)

```


import { createEffect } from "solid-js";
```

* * *

## [Type](create-effect.md#type)

```


function createEffect<Next>(

  fn: EffectFunction<undefined | NoInfer<Next>, Next>

): void;

function createEffect<Next, Init = Next>(

  fn: EffectFunction<Init | Next, Next>,

  value: Init,

  options?: { name?: string }

): void;

function createEffect<Next, Init>(

  fn: EffectFunction<Init | Next, Next>,

  value?: Init,

  options?: { name?: string }

): void;
```

* * *

## [Parameters](create-effect.md#parameters)

### [`fn`](create-effect.md#fn)

- **Type:** `EffectFunction<undefined | NoInfer<Next> | EffectFunction<Init | Next, Next>`
- **Required:** Yes

A function to be executed as the effect.

It receives the value returned from the previous run, or the initial `value` during the first run. The value returned by `fn` is passed to the next run.

### [`value`](create-effect.md#value)

- **Type:** `Init`
- **Required:** No

The initial value passed to `fn` during its first run.

### [`options`](create-effect.md#options)

- **Type:** `{ name?: string }`
- **Required:** No

An optional configuration object with the following properties:

#### [`name`](create-effect.md#name)

- **Type:** `string`
- **Required:** No

A name for the effect, which can be useful for identification in debugging tools like the [Solid Debugger](https://github.com/thetarnav/solid-devtools).

* * *

## [Return value](create-effect.md#return-value)

`createEffect` does not return a value.

* * *

## [Examples](create-effect.md#examples)

### [Basic Usage](create-effect.md#basic-usage)

```


import { createSignal, createEffect } from "solid-js";




function Counter() {

  const [count, setCount] = createSignal(0);




  // Every time count changes, this effect re-runs.

  createEffect(() => {

    console.log("Count incremented! New value: ", count());

  });




  return (

    <div>

      <p>Count: {count()}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

    </div>

  );

}
```

### [Execution Timing](create-effect.md#execution-timing-1)

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

## [Related](create-effect.md#related)

- [`createRenderEffect`](../secondary-primitives/create-render-effect.md)
- [`onCleanup`](../lifecycle/on-cleanup.md)
- [`onMount`](../lifecycle/on-mount.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fbasic-reactivity%2Fcreate-effect.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fbasic-reactivity%2Fcreate-effect)

Next[createMemo →](create-memo.md)

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

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-effect.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fbasic-reactivity%2Fcreate-effect.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fbasic-reactivity%2Fcreate-effect)