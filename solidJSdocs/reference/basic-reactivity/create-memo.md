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

# createMemo

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-memo.mdx)

The `createMemo` function creates a read-only signal that derives its value from other reactive values. The calculated value is memoized: the calculation runs only when dependencies change, and is reused when the value is read. When a dependency changes, the calculation re-executes. If the new result is equal to the previous result (according to the [`equals`](create-memo.md#equals) option), the memo suppresses downstream updates.

* * *

## [Import](create-memo.md#import)

```


import { createMemo } from "solid-js";
```

* * *

## [Type](create-memo.md#type)

```


function createMemo<T>(

  fn: (v: T) => T,

  value?: T,

  options?: { equals?: false | ((prev: T, next: T) => boolean); name?: string }

): () => T;
```

* * *

## [Parameters](create-memo.md#parameters)

### [`fn`](create-memo.md#fn)

- **Type:** `(v: T) => T`
- **Required:** Yes

The function that calculates the memo's value.

It receives the value returned from the previous execution as its argument. On the first execution, it receives the `value` parameter (if provided) or `undefined`.

This function should be pure (it should not modify other reactive values).

### [`value`](create-memo.md#value)

- **Type:** `T`
- **Required:** No

The initial value passed to `fn` on its first execution.

### [`options`](create-memo.md#options)

- **Type:** `{ equals?: false | ((prev: T, next: T) => boolean); name?: string }`
- **Required:** No

An optional configuration object with the following properties:

#### [`equals`](create-memo.md#equals)

- **Type:** `false | ((prev: T, next: T) => boolean)`
- **Required:** No

A function that runs after each execution of `fn` to determine if the memo value has changed. It receives the previous and the new value. If it returns `true`, the values are considered equal and the memo does not trigger downstream updates.

If set to `false` (instead of a function), the memo triggers updates whenever it re-executes, even if the value is unchanged.

Defaults to a function that compares values using strict equality (`===`).

#### [`name`](create-memo.md#name)

- **Type:** `string`
- **Required:** No

A debug name for the memo. It is used for identification in debugging tools like the [Solid Debugger](https://github.com/thetarnav/solid-devtools).

* * *

## [Return value](create-memo.md#return-value)

- **Type:** `() => T`

`createMemo` returns a read-only accessor function. Calling this function returns the current memoized value.

* * *

## [Examples](create-memo.md#examples)

### [Basic usage](create-memo.md#basic-usage)

```


import { createSignal, createMemo, For } from "solid-js";




const NAMES = ["Alice Smith", "Bob Jones", "Charlie Day", "David Lee"];




function FilterList() {

  const [query, setQuery] = createSignal("");




  // The function executes immediately to calculate the initial value.

  // It re-executes only when the `query` signal changes.

  const filteredNames = createMemo(() => {

    console.log("Calculating list...");

    return NAMES.filter((name) => {

      return name.toLowerCase().includes(query().toLowerCase());

    });

  });




  return (

    <div>

      <input

        value={query()}

        onInput={(e) => setQuery(e.currentTarget.value)}

        placeholder="Search..."

      />




      {/* Accessing the memo. If dependencies haven't changed, returns cached value. */}

      <div>Count: {filteredNames().length}</div>




      <ul>

        {/* Accessing the memo again does not trigger re-execution. */}

        <For each={filteredNames()}>{(name) => <li>{name}</li>}</For>

      </ul>

    </div>

  );

}
```

### [Custom equality check](create-memo.md#custom-equality-check)

```


import { createSignal, createMemo, createEffect } from "solid-js";




function DateNormalizer() {

  const [dateString, setDateString] = createSignal("2024-05-10");




  const dateObject = createMemo(

    () => {

      return new Date(dateString());

    },

    undefined,

    {

      // Overrides the default strict equality check (===).

      // If this returns true, observers (like the Effect below) are NOT notified.

      equals: (prev, next) => {

        return prev.getTime() === next.getTime();

      },

    }

  );




  createEffect(() => {

    // This effect runs only when the numeric time value changes,

    // ignoring new Date object references.

    console.log("Date changed to:", dateObject().toISOString());

  });




  return (

    <div>

      <input

        value={dateString()}

        onInput={(e) => setDateString(e.currentTarget.value)}

      />

      {/* Setting the same date string creates a new Date object,

          but `equals` prevents the update propagation. */}

      <button onClick={() => setDateString("2024-05-10")}>

        Reset to the same date

      </button>

    </div>

  );

}
```

### [Accessing previous value](create-memo.md#accessing-previous-value)

```


import { createSignal, createMemo } from "solid-js";




function TrendTracker() {

  const [count, setCount] = createSignal(0);




  const trend = createMemo(

    // The first argument `prev` is the return value of the previous execution.

    (prev) => {

      const current = count();

      if (current === prev.value) return { value: current, label: "Same" };

      return {

        value: current,

        label: current > prev.value ? "Up" : "Down",

      };

    },

    // The second argument provides the initial value for `prev`.

    { value: 0, label: "Same" }

  );




  return (

    <div>

      <div>Current: {trend().value}</div>

      <div>Direction: {trend().label}</div>




      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>

    </div>

  );

}
```

* * *

## [Related](create-memo.md#related)

- [`createComputed`](../secondary-primitives/create-computed.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fbasic-reactivity%2Fcreate-memo.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fbasic-reactivity%2Fcreate-memo)

Previous[← createEffect](create-effect.md)

Next[createResource →](create-resource.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [fn](#fn)
   2. [value](#value)
   3. [options](#options)
5. [Return value](#return-value)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)
   2. [Custom equality check](#custom-equality-check)
   3. [Accessing previous value](#accessing-previous-value)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-memo.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fbasic-reactivity%2Fcreate-memo.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fbasic-reactivity%2Fcreate-memo)