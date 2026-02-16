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
  
  - [DEV](dev.md)
  - [hydrate](hydrate.md)
  - [hydrationScript](hydration-script.md)
  - [isServer](is-server.md)
  - [render](render.md)
  - [renderToStream](render-to-stream.md)
  - [renderToString](render-to-string.md)
  - [renderToStringAsync](render-to-string-async.md)
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

Rendering

# renderToStream

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/render-to-stream.mdx)

```


import { renderToStream } from "solid-js/web"




function renderToStream<T>(

  fn: () => T,

  options?: {

    nonce?: string

    renderId?: string

    onCompleteShell?: () => void

    onCompleteAll?: () => void

  }

): {

  pipe: (writable: { write: (v: string) => void }) => void

  pipeTo: (writable: WritableStream) => void

}
```

This method renders to a stream. It renders the content synchronously including any Suspense fallback placeholders, and then continues to stream the data and HTML from any async resource as it completes.

```


// node

renderToStream(App).pipe(res)




// web stream

const { readable, writable } = new TransformStream()

renderToStream(App).pipeTo(writable)
```

`onCompleteShell` fires when synchronous rendering is complete before writing the first flush to the stream out to the browser. `onCompleteAll` is called when all server Suspense boundaries have settled. `renderId` is used to namespace renders when having multiple top level roots.

note

This API replaces the previous pipeToWritable and pipeToNodeWritable APIs.

* * *

## [Options](render-to-stream.md#options)

NameTypeDescriptionnoncestringThe nonce to use for inline scripts.renderIdstringThe id to use for this render.onCompleteShell() =&gt; voidA callback that fires when the shell is complete.onCompleteAll() =&gt; voidA callback that fires when all Suspense boundaries have settled.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Frendering%2Frender-to-stream.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Frendering%2Frender-to-stream)

Previous[← render](render.md)

Next[renderToString →](render-to-string.md)

On this page

1. [Overview](#_top)
2. [Options](#options)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/render-to-stream.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Frendering%2Frender-to-stream.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Frendering%2Frender-to-stream)