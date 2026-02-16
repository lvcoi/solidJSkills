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

# createContext

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/create-context.mdx)

Context provides a form of dependency injection in Solid. It is used to save from needing to pass data as props through intermediate components (aka **prop drilling**). This function creates a new context object that can be used with [useContext](use-context.md) and offers the Provider control flow. The default value is used when no Provider is found above in the hierarchy.

* * *

## [Usage](create-context.md#usage)

To avoid reinstatiating a new context when Hot-Module Replacement (HMR) occurs, it is recommended to use `createContext` in its own module (file).

Hot-Module Replacement

When using HMR, the context is lost when the module is reloaded. Which will cause an error to be thrown as `useContext` will try to access it while it is still reloading.

For example:

```


import { createContext } from "solid-js";




export const INITIAL_COUNT = 0;




const INITIAL_STORE_SETTER = {

  increment: () => {},

  decrement: () => {}

};




export const CounterContext = createContext([

  { count: INITIAL_COUNT },

  INITIAL_STORE_SETTER

]);
```

With the context created in its own module, you can use to instantiate the context provider.

```


import { createStore } from 'solid-js/store';

import { CounterContext, INITIAL_COUNT } from "./counter.ts";




export function CounterProvider(props) {

    const [value, setValue] = createStore({ count: props.initialCount || INITIAL_COUNT })




    const counter = [

        value,

        {

            increment() {

                setValue("count", currentCount => currentCount + 1)

            },

            decrement() {

                setValue("count", currentCount => currentCount - 1)

            },

        },

    ]




    return (

        <CounterContext.Provider value={counter}>

            {props.children}

        </CounterContext.Provider>

    )

}
```

A few imporant notes on how to pass data through the context API:

- The value passed to provider is passed to `useContext` as is.
- Wrapping as a reactive expression will not work.
- You should pass in Signals and Stores directly instead of accessing them in the JSX.

To learn how to consume the context, see the [useContext](use-context.md) documentation and the [Context concepts entry](../../concepts/context.md).

* * *

## [Default Values](create-context.md#default-values)

`createContext()` takes an optional "default value" as an argument. If `useContext` is called and there is no corresponding context provider above it in the component hierarchy, then the value passed as `defaultValue` is returned.

However, if no `defaultValue` was passed, then `undefined` is returned in this case. Also, `defaultValue` (or `undefined`) is returned if `useContext` is called inside an event callback, as it is then outside of the component hierarchy.

This has implications for TS. If no `defaultValue` is passed, then it is possible that `useContext()` will return `undefined`, and the types reflect this.

Another (used in the example in the previous section) is provide a default value to `createContext()`. In that case, `useContext()` will always return a value, and therefore TS will not complain either. The pitfall with this approach is that if you *unintentionally* use `useContext` outside of a provider, it may not be immediately apparent, because the context is still providing a valid value. Therefore, if you expect to always use `useContext` within a provider, it is best to use the error based approach described above.

* * *

## [Type signature](create-context.md#type-signature)

```


interface Context<T> {

  id: symbol

  Provider: (props: { value: T; children: any }) => any

  defaultValue: T

}




function createContext<T>(defaultValue?: T): Context<T | undefined>
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponent-apis%2Fcreate-context.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponent-apis%2Fcreate-context)

Previous[← children](children.md)

Next[createUniqueId →](create-unique-id.md)

On this page

1. [Overview](#_top)
2. [Usage](#usage)
3. [Default Values](#default-values)
4. [Type signature](#type-signature)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/create-context.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponent-apis%2Fcreate-context.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponent-apis%2Fcreate-context)