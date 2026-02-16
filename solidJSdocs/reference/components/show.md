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

# &lt;Show&gt;

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/components/show.mdx)

The `<Show>` component is used for conditionally rendering UI elements. It takes a `when` prop that defines the condition for rendering. When the `when` prop is truthy, the children of the `<Show>` component are displayed. Additionally, an optional `fallback` prop can be provided to specify an element that is shown when the condition is falsy.

```


import { createSignal, Show } from "solid-js";




function Example() {

  const [value, setValue] = createSignal(true);

  return (

    <div>

      <button onClick={() => setValue((prev) => !prev)}>Toggle Show</button>

      <Show when={value()} fallback={<div>Fallback Element</div>}>

        <div>Child Element</div>

      </Show>

    </div>

  );

}
```

* * *

## [Keyed rendering](show.md#keyed-rendering)

When the `keyed` is set to `true`, any change to the `when` prop — including changes in its reference — will cause the `<Show>` component to re-render its children.

```


import { createSignal, Show } from "solid-js";




function KeyedExample() {

  const [user, setUser] = createSignal({ name: "John Wick" });




  function update() {

    // This operation changes the reference of the user object.

    setUser({ ...user() });

  }




  return (

    <div>

      <button onClick={update}>Update</button>

      <Show when={user()} keyed>

        <p>Name: {user().name}</p>

        {/* Updates shown with each click */}

        <p>Last updated: {Date.now()}</p>

      </Show>

    </div>

  );

}
```

* * *

## [Render function](show.md#render-function)

The `<Show>` component can also accept a render function as its child. In this case, the first argument of the render function is an *accessor* to the `when` prop. However, when the `keyed` prop is set to `true`, the argument is the `when` prop itself instead of an accessor.

When a render function is used, it is internally wrapped with [`untrack`](../reactive-utilities/untrack.md). As a result, signals accessed directly within the render function's scope will not react to updates.

For example, in the following code, the count displayed in the first `<Show>` component does not update when the `count` signal changes. However, the second `<Show>` component does update since the `count` signal is accessed within a JSX element, which creates a tracking scope.

```


import { createSignal, Show } from "solid-js";




function RenderFunctionExample() {

  const [count, setCount] = createSignal(0);

  return (

    <div>

      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      {/* This does not update. */}

      <Show when={count()}>{(c) => count()}</Show>

      {/* This will update. */}

      <Show when={count()}>{(c) => <>{count()}</>}</Show>

    </div>

  );

}
```

* * *

## [Props](show.md#props)

NameTypeDescription`when``T | undefined | null | false`The condition value.`keyed``boolean`Whether to key the block to the value of when.`fallback``JSX.Element`The fallback to render when the `when` prop is falsy.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponents%2Fshow.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponents%2Fshow)

Previous[← &lt;Portal&gt;](portal.md)

Next[&lt;Suspense&gt; →](suspense.md)

On this page

1. [Overview](#_top)
2. [Keyed rendering](#keyed-rendering)
3. [Render function](#render-function)
4. [Props](#props)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/components/show.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponents%2Fshow.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponents%2Fshow)