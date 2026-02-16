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

# &lt;SuspenseList&gt;

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/components/suspense-list.mdx)

SuspenseList allows for coordinating multiple parallel Suspense and SuspenseList components. It controls the order in which content is revealed to reduce layout thrashing and has an option to collapse or hide fallback states.

```


import { SuspenseList } from "solid-js"

import type { JSX } from "solid-js"




function SuspenseList(props: {

  children: JSX.Element

  revealOrder: "forwards" | "backwards" | "together"

  tail?: "collapsed" | "hidden"

}): JSX.Element
```

**Note**: SuspenseList is still in the experimental stage and does not have full `SSR` support.

Here's an example of how to use SuspenseList:

```


<SuspenseList revealOrder="forwards" tail="collapsed">

  <ProfileDetails user={resource.user} />

  <Suspense fallback={<h2>Loading posts...</h2>}>

    <ProfileTimeline posts={resource.posts} />

  </Suspense>

  <Suspense fallback={<h2>Loading fun facts...</h2>}>

    <ProfileTrivia trivia={resource.trivia} />

  </Suspense>

</SuspenseList>
```

* * *

## [Props](suspense-list.md#props)

NameTypeDefaultDescription`revealOrder``"forwards" | "backwards" | "together"``"forwards"`Determines the order in which the SuspenseList children should be revealed.`tail``"collapsed" | "hidden"``undefined`TODO

### [`revealOrder`](suspense-list.md#revealorder)

`"forwards" | "backwards" | "together"`

- `"forwards"`: Reveals each item in the list once the previous item has finished rendering. This is the default.
- `"backwards"`: Reveals each item in the list once the next item has finished rendering.
- `"together"`: Reveals all items in the list at the same time.

### [`tail`](suspense-list.md#tail)

`"collapsed" | "hidden"`

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponents%2Fsuspense-list.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponents%2Fsuspense-list)

Previous[← &lt;Suspense&gt;](suspense.md)

Next[&lt;Switch&gt; / &lt;Match&gt; →](switch-and-match.md)

On this page

1. [Overview](#_top)
2. [Props](#props)
   
   1. [revealOrder](#revealorder)
   2. [tail](#tail)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/components/suspense-list.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponents%2Fsuspense-list.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponents%2Fsuspense-list)