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

# on*

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/on_.mdx)

Event handlers in Solid typically take the form of `onclick` or `onClick` depending on style.

```


<div onClick={(e) => console.log(e.currentTarget)} />
```

Conceptually, this example attaches a `click` event listener (via [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)) to the `div`. However, Solid actually handles common UI events that bubble and are composed (such as `click`) at the document level, and then synthetically implements delegation (capturing and bubbling). This improves performance for these common events by reducing the number of event handlers.

Note that `onClick` handles the event `click`; in general, event names get mapped to lower case. If you need to work with event names containing capital letters, or use listener options such once, passive, capture see [`on:`](on.md) which attaches event handlers directly (also avoiding fancy delegation via document).

Solid also supports passing a two-element array to the event handler to bind a value to the first argument of the event handler. This doesn't use `bind` or create an additional closure, so it is a highly optimized way of delegating events.

```


function handler(itemId, e) {

  /*...*/

}




<ul>

  <For each={state.list}>{(item) => <li onClick={[handler, item.id]} />}</For>

</ul>;
```

Events are never rebound and the bindings are not reactive, as it is expensive to attach and detach listeners. Since event handlers are called like any other function each time an event fires, there is no need for reactivity; shortcut your handler if desired.

```


// if defined, call it; otherwise don't.

<div onClick={() => props.handleClick?.()} />
```

Note that `onChange` and `onInput` work according to their native behavior (unlike, say, React). [`onInput`](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event) will fire immediately after the value has changed; for most `<input>` fields, [`onChange`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) will only fire after the field loses focus. The event's `currentTarget` refers to the element that the event was attached to, while `target` gives the element that actually triggered the event (e.g. the user clicked on).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fjsx-attributes%2Fon_.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fjsx-attributes%2Fon_)

Previous[← on:\*](on.md)

Next[prop:* →](prop.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/on_.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fjsx-attributes%2Fon_.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fjsx-attributes%2Fon_)