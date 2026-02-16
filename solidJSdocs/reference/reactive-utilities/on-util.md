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

# on

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/on-util.mdx)

```


import { on } from "solid-js"




function on<T extends Array<() => any> | (() => any), U>(

  deps: T,

  fn: (input: T, prevInput: T, prevValue?: U) => U,

  options: { defer?: boolean } = {}

): (prevValue?: U) => U | undefined
```

`on` is designed to be passed into a computation to make its dependencies explicit. If an array of dependencies is passed, `input` and `prevInput` are arrays.

```


createEffect(on(a, (v) => console.log(v, b())));




// is equivalent to:

createEffect(() => {

  const v = a();

  untrack(() => console.log(v, b()));

});
```

You can also not run the computation immediately and instead opt in for it to only run on change by setting the defer option to true.

```


// doesn't run immediately

createEffect(on(a, (v) => console.log(v), { defer: true }));




setA("new"); // now it runs
```

* * *

## [Using `on` with stores](on-util.md#using-on-with-stores)

note

Please note that on stores and mutable, adding or removing a property from the parent object will trigger an effect. See [`createMutable`](../store-utilities/create-mutable.md)

```


const [state, setState] = createStore({ a: 1, b: 2 });




// this will not work

createEffect(on(state.a, (v) => console.log(v)));




setState({ a: 3 }); // logs nothing




// instead, use an arrow function

createEffect(

  on(

    () => state.a,

    (v) => console.log(v)

  )

);




setState({ a: 4 }); // logs 4
```

* * *

## [Arguments and options](on-util.md#arguments-and-options)

ArgumentTypeDescriptiondeps`T`The dependencies to watch.fn`(input: T, prevInput: T, prevValue?: U) => U`The function to run when the dependencies change.options`{ defer?: boolean }`Options to configure the effect.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Freactive-utilities%2Fon-util.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Freactive-utilities%2Fon-util)

Previous[← observable](observable.md)

Next[runWithOwner →](run-with-owner.md)

On this page

1. [Overview](#_top)
2. [Using on with stores](#using-on-with-stores)
3. [Arguments and options](#arguments-and-options)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/on-util.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Freactive-utilities%2Fon-util.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Freactive-utilities%2Fon-util)