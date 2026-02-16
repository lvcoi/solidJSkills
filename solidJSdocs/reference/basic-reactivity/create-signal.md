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

# createSignal

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-signal.mdx)

Creates a reactive state primitive consisting of a getter (accessor) and a setter function that forms the foundation of Solid's reactivity system. Signals use a pull-based reactivity model where tracking subscriptions (reads) is lightweight, while updates (writes) trigger dependency tracking and effect re-execution, making them optimized for frequent reads and infrequent writes.

* * *

## [Import](create-signal.md#import)

```


import { createSignal } from "solid-js";
```

* * *

## [Type signature](create-signal.md#type-signature)

```


function createSignal<T>(): Signal<T | undefined>;

function createSignal<T>(value: T, options?: SignalOptions<T>): Signal<T>;




type Signal<T> = [get: Accessor<T>, set: Setter<T>];




type Accessor<T> = () => T;




type Setter<T> = {

  <U extends T>(value: Exclude<U, Function> | ((prev: T) => U)): U;

  <U extends T>(value: (prev: T) => U): U;

  <U extends T>(value: Exclude<U, Function>): U;

  <U extends T>(value: Exclude<U, Function> | ((prev: T) => U)): U;

};




interface SignalOptions<T> {

  name?: string;

  equals?: false | ((prev: T, next: T) => boolean);

  internal?: boolean;

}
```

* * *

## [Parameters](create-signal.md#parameters)

### [`value`](create-signal.md#value)

- **Type:** `T`
- **Default:** `undefined`

The initial value for the signal. If no initial value is provided, the signal's type is automatically extended with `undefined`.

### [`options`](create-signal.md#options)

- **Type:** `SignalOptions<T>`
- **Default:** `undefined`

Configuration object for the signal.

#### [`name`](create-signal.md#name)

- **Type:** `string`
- **Default:** `undefined`

A name for the signal used by debugging tools like [Solid devtools](https://github.com/thetarnav/solid-devtools). It works only in development mode and is removed from the production bundle.

#### [`equals`](create-signal.md#equals)

- **Type:** `false | ((prev: T, next: T) => boolean)`
- **Default:** `false`

A custom comparison function to determine when the signal should update. By default, signals use reference equality (`===`) to compare previous and next values. When set to `false`, the signal will always update regardless of value equality, which is useful for creating signals that trigger manual updates in the reactive system.

When providing a custom function, it should be pure and return `true` if the values are equal (no update needed) or `false` if they differ (trigger update). Impure functions can create unexpected side effects and performance issues.

#### [`internal`](create-signal.md#internal)

- **Type:** `boolean`
- **Default:** `false`

Marks the signal as internal, preventing it from appearing in development tools. This is primarily used by Solid's internal systems.

* * *

## [Return value](create-signal.md#return-value)

- **Type:** `Signal<T>`

Returns a tuple `[getter, setter]` where:

- **getter**: An accessor function that returns the current value and tracks dependencies when called within a reactive context
- **setter**: A function that updates the signal's value and notifies all dependent computations

* * *

## [Examples](create-signal.md#examples)

### [Basic usage](create-signal.md#basic-usage)

```


import { createSignal } from "solid-js";




function Counter() {

  const [count, setCount] = createSignal(0);




  return (

    <div>

      <button onClick={() => setCount(count() + 1)}>+</button>

      <span>{count()}</span>

    </div>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fbasic-reactivity%2Fcreate-signal.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fbasic-reactivity%2Fcreate-signal)

Previous[← createResource](create-resource.md)

Next[children →](../component-apis/children.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type signature](#type-signature)
4. [Parameters](#parameters)
   
   1. [value](#value)
   2. [options](#options)
5. [Return value](#return-value)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-signal.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fbasic-reactivity%2Fcreate-signal.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fbasic-reactivity%2Fcreate-signal)