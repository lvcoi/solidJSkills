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

# on:*

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/on.mdx)

For events with capital letters, listener options, or if you need to attach event handlers directly to a DOM element instead of optimized delegating via the document, use `on:*` in place of `on*`.

```


<div on:DOMContentLoaded={(e) => console.log("Welcome!")} />
```

This directly attaches an event handler (via [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)) to the `div`.

note

New in v1.9.0

An aditional special syntax that allows full control of [`capture`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#capture), [`passive`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#passive), [`once`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#once) and [`signal`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#signal) is an intersection or combination of `EventListenerObject` & `AddEventListenerOptions`, as follows:

```


const handler = {

  handleEvent(e) {

    console.log(e)

  },

  once:true,

  passive:false,

  capture:true

}




<div on:wheel={handler} />




// or inline




<div on:click={{passive:true, handleEvent(e) { console.log("Weeeee!")}}} />
```

This new syntax replaces the now deprecated `oncapture:` and it's future proof for any posible new event listener options.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fjsx-attributes%2Fon.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fjsx-attributes%2Fon)

Previous[← innerHTML](innerhtml.md)

Next[on* →](on_.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/on.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fjsx-attributes%2Fon.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fjsx-attributes%2Fon)