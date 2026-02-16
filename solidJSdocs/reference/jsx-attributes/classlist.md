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
  
  - [@once](once.md)
  - [attr:\*](attr.md)
  - [bool:\*](bool.md)
  - [classList](classlist.md)
  - [innerHTML](innerhtml.md)
  - [on:\*](on.md)
  - [on\*](on_.md)
  - [prop:\*](prop.md)
  - [ref](ref.md)
  - [style](style.md)
  - [textContent](textcontent.md)
  - [use:\*](use.md)
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

JSX attributes

# classList

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/classlist.mdx)

Solid offers two attributes to set the class of an element: `class` and `classList`.

First, `class` can be set like other attributes. For example:

```


// Two static classes

<div class="active editing" />




// One dynamic class, deleting class attribute if it's not needed

<div class={state.active ? 'active' : undefined} />




// Two dynamic classes

<div class={`${state.active ? 'active' : ''} ${state.currentId === row.id ? 'editing' : ''}`} />
```

note

Note that `className` was deprecated in Solid 1.4 in favor of `class`.

Alternatively, the `classList` pseudo-attribute lets you specify an object, where each key is a class and the value is treated as a boolean representing whether to include that class. For example (matching the last example):

```


<div

  classList={{

    active: state.active,

    editing: state.currentId === row.id,

  }}

/>
```

This example compiles to a render effect that dynamically calls [element.classList.toggle](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) to turn each class on or off, only when the corresponding boolean changes. For example, when `state.active` becomes true \[false], the element gains \[loses] the `active` class.

The value passed into `classList` can be any expression (including a signal getter) that evaluates to an appropriate object. Some examples:

```


// Dynamic class name and value

<div classList={{ [className()]: classOn() }} />




// Signal class list

const [classes, setClasses] = createSignal({})

setClasses((c) => ({ ...c, active: true }))

<div classList={classes()} />
```

While possible, mixing `class` and `classList` in Solid can lead to unexpected behavior. The safest approach is to use a static string (or nothing) for `class` and keep `classList` reactive. You can also use a static computed value for class, such as `class={baseClass()}`, however you must make sure it comes before any `classList` pseudo-attributes. If both `class` and `classList` are reactive, changes to `class` will overwrite the entire `class` attribute, potentially undoing any updates made by `classList`.

Because classList is a compile-time pseudo-attribute, it does not work in a prop spread like `<div {...props} />` or in `<Dynamic>`.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fjsx-attributes%2Fclasslist.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fjsx-attributes%2Fclasslist)

Previous[← bool:\*](bool.md)

Next[innerHTML →](innerhtml.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/classlist.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fjsx-attributes%2Fclasslist.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fjsx-attributes%2Fclasslist)