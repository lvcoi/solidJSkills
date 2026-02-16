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

# &lt;For&gt;

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/components/for.mdx)

The `<For>` component is used to render a list of items. It is similar to the `.map()` function in JavaScript.

```


import { For } from "solid-js"

import type { JSX } from "solid-js"




function For<T, U extends JSX.Element>(props: {

  each: readonly T[]

  fallback?: JSX.Element

  children: (item: T, index: () => number) => U

}): () => U[]
```

A referentially keyed loop with efficient updating of only changed items. The callback takes the current item as the first argument:

```


<For each={state.list} fallback={<div>Loading...</div>}>

  {(item) => <div>{item}</div>}

</For>
```

The `each` prop can also be a function that returns a list. This is useful for creating a loop that depends on a state value:

```


<For each={stateSignal()}>{(item) => <div>{item}</div>}</For>
```

The optional second argument is an index signal:

```


<For each={state.list} fallback={<div>Loading...</div>}>

  {(item, index) => (

    <div>

      #{index()} {item}

    </div>

  )}

</For>
```

* * *

## [Props](for.md#props)

NameTypeDescription`each``readonly T[]`The list of items to render.`fallback``JSX.Element`A fallback element to render while the list is loading.`children``(item: T, index: () => number) => U`A callback that returns a JSX element for each item in the list.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponents%2Ffor.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponents%2Ffor)

Previous[← &lt;ErrorBoundary&gt;](error-boundary.md)

Next[&lt;Index&gt; →](index-component.md)

On this page

1. [Overview](#_top)
2. [Props](#props)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/components/for.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponents%2Ffor.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponents%2Ffor)