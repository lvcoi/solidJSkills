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

# &lt;Switch&gt; / &lt;Match&gt;

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/components/switch-and-match.mdx)

Useful for when there are more than 2 mutual exclusive conditions. It is a more flexible version of the if-else-if-else-if-else-... chain.

```


import { Switch, Match } from "solid-js"

import type { MatchProps, JSX } from "solid-js"




function Switch(props: {

  fallback?: JSX.Element

  children: JSX.Element

}): () => JSX.Element




type MatchProps<T> = {

  when: T | undefined | null | false

  children: JSX.Element | ((item: T) => JSX.Element)

}

function Match<T>(props: MatchProps<T>)
```

A super simple implementation of this component would be:

```


function Switch(props) {

  let children = props.children




  if (!Array.isArray(children)) children = [children]




  for (let i = 0; i < children.length; i++) {

    const child = children[i]

    if (child.props.when) return child

  }




  return props.fallback

}
```

For example, it can be used to perform basic routing:

```


<Switch fallback={<div>Not Found</div>}>

  <Match when={state.route === "home"}>

    <Home />

  </Match>

  <Match when={state.route === "settings"}>

    <Settings />

  </Match>

</Switch>
```

Match also supports function children to serve as keyed flow.

* * *

## [Props](switch-and-match.md#props)

### [Switch](switch-and-match.md#switch)

NameTypeDefaultDescription`fallback``JSX.Element``undefined`The fallback element to render if no `Match` component has a truthy `when` prop.

### [Match](switch-and-match.md#match)

NameTypeDefaultDescription`when``T | undefined | null | false``undefined`The condition to check. If it is truthy, the `children` will be rendered.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponents%2Fswitch-and-match.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponents%2Fswitch-and-match)

Previous[← &lt;SuspenseList&gt;](suspense-list.md)

Next[@once →](../jsx-attributes/once.md)

On this page

1. [Overview](#_top)
2. [Props](#props)
   
   1. [Switch](#switch)
   2. [Match](#match)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/components/switch-and-match.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponents%2Fswitch-and-match.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponents%2Fswitch-and-match)