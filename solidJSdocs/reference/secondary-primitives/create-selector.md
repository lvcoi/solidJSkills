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

# createSelector

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-selector.mdx)

```


import { createSelector } from "solid-js"




function createSelector<T, U>(

  source: () => T,

  fn?: (a: U, b: T) => boolean

): (key: U) => boolean
```

Creates a parameterized derived boolean signal `selector(key)` that indicates whether `key` is equal to the current value of the `source` signal. These signals are optimized to notify each subscriber only when their `key` starts or stops matching the reactive `source` value (instead of every time `key` changes). If you have *n* different subscribers with different keys, and the `source` value changes from `a` to `b`, then instead of all *n* subscribers updating, at most two subscribers will update: the signal with key `a` will change to `false`, and the signal with key `b` will change to `true`. Thus it reduces from *n* updates to 2 updates.

Useful for defining the selection state of several selectable elements. For example:

```


const [selectedId, setSelectedId] = createSignal()

const isSelected = createSelector(selectedId)




<For each={list()}>

  {(item) => <li classList={{ active: isSelected(item.id) }}>{item.name}</li>}

</For>
```

In the code above, each `li` element receives an `active` class exactly when the corresponding `item.id` is equal to `selectedId()`. When the `selectedId` signal changes, the `li` element(s) that previously had previously matching `id` get the `active` class removed, and the `li` element(s) that now have a matching `id` get the `active` class added. All other `li` elements get skipped, so if `id`s are distinct, only 2 DOM operations get performed.

By contrast, the following code would perform `list().length` DOM operations every time the `selectedId` signal changes:

```


const [selectedId, setSelectedId] = createSignal()




<For each={list()}>

  {(item) => <li classList={{ active: selectedId() === item.id }}>{item.name}</li>}

</For>
```

* * *

## [Arguments](create-selector.md#arguments)

NameTypeDescription`source``() => T`The source signal to get the value from and compare with keys.`fn``(a: U, b: T) => boolean`A function to compare the key and the value, returning whether they should be treated as equal. Default: `===`

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fsecondary-primitives%2Fcreate-selector.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fsecondary-primitives%2Fcreate-selector)

Previous[← createRenderEffect](create-render-effect.md)

Next[createMutable →](../store-utilities/create-mutable.md)

On this page

1. [Overview](#_top)
2. [Arguments](#arguments)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-selector.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fsecondary-primitives%2Fcreate-selector.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fsecondary-primitives%2Fcreate-selector)