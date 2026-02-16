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
  
  - [children](children.md)
  - [createContext](create-context.md)
  - [createUniqueId](create-unique-id.md)
  - [lazy](lazy.md)
  - [useContext](use-context.md)
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

Component APIs

# lazy

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/lazy.mdx)

The `lazy` helper wraps a dynamic import and returns a component that loads on demand. Lazy components accept the same props as their eager counterparts and integrate with `<Suspense>` boundaries.

* * *

## [Import](lazy.md#import)

```


import { lazy } from "solid-js"
```

* * *

## [Type](lazy.md#type)

```


function lazy<T extends Component<any>>(

  fn: () => Promise<{ default: T }>

): T & { preload: () => Promise<T> }
```

* * *

## [Parameters](lazy.md#parameters)

### [`fn`](lazy.md#fn)

- **Type:** `() => Promise<{ default: T }>`
- **Required:** Yes

Dynamic import that resolves to the component module, exposing the component as the `default` export.

* * *

## [Return value](lazy.md#return-value)

`lazy` returns a renderable component compatible with `T`. The component exposes a `preload()` method that resolves the underlying module.

PropertyTypeDescription`preload``() => Promise<T>`Loads the module without rendering and returns the resolved component.

* * *

## [Examples](lazy.md#examples)

### [Basic usage](lazy.md#basic-usage)

```


import { lazy } from "solid-js"




const ComponentA = lazy(() => import("./ComponentA"))




function App(props: { title: string }) {

  return <ComponentA title={props.title} />

}
```

### [Preloading nested lazy components](lazy.md#preloading-nested-lazy-components)

```


import { lazy } from "solid-js"

import type { Component } from "solid-js"




const Nested = lazy(() => import("./Nested"))




const ComponentWithPreload = () => {

  const [showNested, setShowNested] = createSignal(false)




  return (

  <div>

    <button

        onMouseEnter={() => Nested.preload()}

        onClick={() => setShowNested(true)}

      >Preload Nested Component</button>

      <Show when={showNested()}>

      <Nested />

      </Show>

  </div>

  )

}
```

* * *

## [See also](lazy.md#see-also)

- [`Suspense`](https://docs.solidjs.com/reference/component-apis/suspense)
- [Router preloading guide](../../solid-router/advanced-concepts/preloading.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponent-apis%2Flazy.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponent-apis%2Flazy)

Previous[← createUniqueId](create-unique-id.md)

Next[useContext →](use-context.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [fn](#fn)
5. [Return value](#return-value)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)
   2. [Preloading nested lazy components](#preloading-nested-lazy-components)
7. [See also](#see-also)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/lazy.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponent-apis%2Flazy.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponent-apis%2Flazy)