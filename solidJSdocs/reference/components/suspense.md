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

# &lt;Suspense&gt;

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/components/suspense.mdx)

A component that tracks all resources read under it and shows a fallback placeholder state until they are resolved. What makes `Suspense` different than `Show` is that it is non-blocking in the sense that both branches exist at the same time even if not currently in the DOM. This means that the fallback can be rendered while the children are loading. This is useful for loading states and other asynchronous operations.

```


import { Suspense } from "solid-js"

import type { JSX } from "solid-js"




function Suspense(props: {

  fallback?: JSX.Element

  children: JSX.Element

}): JSX.Element
```

Here's an example of a `Suspense` component that shows a loading spinner while the `User` component is loading.

```


<Suspense fallback={<LoadingSpinner />}>

  <AsyncComponent />

</Suspense>
```

* * *

## [Nested Suspense](suspense.md#nested-suspense)

`<Suspense>` is triggered whenever a resource is read under the suspense boundary, and waits until all resources read under the suspense boundary have resolved. Often, however, you may not want this behavior. For example, if your entire page is wrapped in suspense, you may not want a resource that only populates a certain part of the page to trigger suspense. In that case, you can wrap that resource usage in its own suspense boundary, and the resource will only trigger the closest suspense boundary.

For example, in the code below, only the `title()` resource will trigger the top level suspense boundary, and only the `data()` resource will trigger the nested suspense boundary:

```


const MyComponent = () => {

  const [title] = createResource(async () => { /* fetcher code here */ })

  const [data] = createResource(async () => { /* fetcher code here */ })

  <Suspense>

    <h1>{title()}</h1>

    <Suspense>

      <DataComponent>{data()}</DataComponent>

    </Suspense>

  </Suspense>

}
```

* * *

## [The purpose of `<Suspense>`](suspense.md#the-purpose-of-suspense)

To understand the purpose of suspense, let's consider the following code snippets. These snippets will have some drawbacks which we will solve by using suspense. We will also see how it is possible to use `Suspense` yet not reap its benefits.

Our example use case is to display a user profile. A naive snippet would look like this:

```


const MyComponentWithOptionalChaining = () => {

  const [profile] = createResource(async () => {

    /* fetcher code here */

  })

  return (

    <>

      <div>{profile()?.name}</div>

      <div>{profile()?.email}</div>

    </>

  )

}
```

In this code, `profile()` starts as `undefined`, and when the fetcher code finishes, resolves to an object with `name` and `email` properties. Although the resource has not resolved yet, the two `div`s are already created and attached to the document body, albeit with empty text nodes. Once the resource resolves, the `div`s are updated with the appropriate data.

The downside of this approach is that the user is shown an empty component - let's see if we can do better than that in this next snippet:

```


const MyComponentWithShow = () => {

  const [profile] = createResource(async () => {

    /* fetcher code here */

  })

  return (

    <Show when={profile()} fallback={<div>fetching user data</div>}>

      <div>{profile().name}</div>

      <div>{profile().email}</div>

    </Show>

  )

}
```

In this snippet, we first show a fallback when the resource hasn't resolved yet, and then switch to showing the profile data once it has. This results in a better user experience.

On the other hand, there is a slight downside to this approach. In our first example (using optional chaining), the divs were created immediately, and once the resource resolves all that is needed to be done is to fill in the text of the `div`s. But in our second example (using `<Show>`), the `div`s are only created once the resource has resolved, which means there is more work that needs to be done after the resource has resolved before the data can be shown to the user (of course, in this toy example the amount of DOM work is relatively trivial).

We can have the best of both worlds by using &lt;Suspense&gt;:

```


const MyComponentWithSuspense = () => {

  const [profile] = createResource(async () => {

    /* fetcher code here */

  })

  return (

    <Suspense fallback={<div>fetching user data</div>}>

      <div>{profile()?.name}</div>

      <div>{profile()?.email}</div>

    </Suspense>

  )

}
```

In this case, the `div`s are created immediately, but instead of being attached to the document body, the fallback is shown. Once the resource resolves, the text in the `div`s is updated, and then they are attached to the document (and the fallback removed).

It is important to note that *the execution of the component does not pause* when using suspense. Instead, when a resource is read under a suspense boundary, it ensures that the nodes are not attached to the document until after the resource has resolved. Suspense allows us to have the best of both worlds: do as much work as we can *before* the resource resolves, and also show a fallback until then.

With this in mind, we can understand that there isn't much gained from suspense in the following code:

```


const MyComponentWithSuspenseAndShow = () => {

  const [profile] = createResource(async () => {

    /* fetcher code here */

  })

  return (

    <Suspense fallback={<div>fetching user data</div>}>

      <Show when={profile()}>

        <div>{profile().name}</div>

        <div>{profile().email}</div>

      </Show>

    </Suspense>

  )

}
```

In this code, we don't create *any* DOM nodes inside &lt;Suspense&gt; before the resource resolves, so it is pretty much the same as the second example where we only used `<Show>`.

note

Suspense is triggered by reading a resource inside the &lt;Suspense&gt; boundary. Components wrapped with suspense still run fully, just as they would without suspense. However, code wrapped in `onMount` and `createEffect` only run after the resource resolves.

* * *

## [Props](suspense.md#props)

NameTypeDescription`fallback``JSX.Element`The fallback component to render while the children are loading.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponents%2Fsuspense.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponents%2Fsuspense)

Previous[← &lt;Show&gt;](show.md)

Next[&lt;SuspenseList&gt; →](suspense-list.md)

On this page

1. [Overview](#_top)
2. [Nested Suspense](#nested-suspense)
3. [The purpose of &lt;Suspense&gt;](#the-purpose-of-suspense)
4. [Props](#props)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/components/suspense.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponents%2Fsuspense.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponents%2Fsuspense)