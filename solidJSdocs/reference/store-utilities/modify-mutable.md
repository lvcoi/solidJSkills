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
  
  - [createComputed](../secondary-primitives/create-computed.md)
  - [createDeferred](../secondary-primitives/create-deferred.md)
  - [createReaction](../secondary-primitives/create-reaction.md)
  - [createRenderEffect](../secondary-primitives/create-render-effect.md)
  - [createSelector](../secondary-primitives/create-selector.md)
- Store utilities
  
  - [createMutable](create-mutable.md)
  - [createStore](create-store.md)
  - [modifyMutable](modify-mutable.md)
  - [produce](produce.md)
  - [reconcile](reconcile.md)
  - [unwrap](unwrap.md)
- Server utilities
  
  - [getRequestEvent](../server-utilities/get-request-event.md)

Store utilities

# modifyMutable

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/modify-mutable.mdx)

`modifyMutable` streamlines the process of making multiple changes to a mutable Store, as obtained through the use of [`createMutable`](create-mutable.md).

It operates within a single [`batch`](../reactive-utilities/batch.md), ensuring that dependent computations are updated just once, rather than triggering updates for each individual change.

```


import { modifyMutable } from "solid-js/store"




function modifyMutable<T>(mutable: T, modifier: (state: T) => T): void
```

The function takes two arguments:

1. The first argument is the mutable Store that needs modification.
2. The second argument is a Store modifier, which could be one of those returned by [`reconcile`](reconcile.md).

caution

When passing in your own modifier function, it's important to be aware that its argument is an unwrapped version of the store.

For example, if the UI depends on multiple fields of a mutable:

```


import { createMutable } from "solid-js/store"




const state = createMutable({

  user: {

    firstName: "John",

    lastName: "Smith",

  },

});




<h1>Hello {state.user.firstName + " " + state.user.lastName}</h1>;
```

Modifying n fields in sequence will cause the UI to update n times:

```


state.user.firstName = "Jane";

state.user.lastName = "Doe";
```

To trigger just a single update, the fields can be modified using a `batch`:

```


import { batch } from "solid-js"




batch(() => {

  state.user.firstName = "Jane";

  state.user.lastName = "Doe";

});
```

`modifyMutable` combined with [`reconcile`](reconcile.md) or [`produce`](produce.md) provides two alternate ways to do similar things:

```


import { modifyMutable, reconcile } from "solid-js/store"




// Replace state.user with the specified object (deleting any other fields)

modifyMutable(

  state.user,

  reconcile({

    firstName: "Jane",

    lastName: "Doe",

  })

);
```

```


import { modifyMutable, produce } from "solid-js/store"




// Modify two fields in a batch, triggering just one update

modifyMutable(

  state,

  produce((state) => {

    state.user.firstName = "Jane";

    state.user.lastName = "Doe";

  })

);
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fstore-utilities%2Fmodify-mutable.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fstore-utilities%2Fmodify-mutable)

Previous[← createStore](create-store.md)

Next[produce →](produce.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/modify-mutable.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fstore-utilities%2Fmodify-mutable.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fstore-utilities%2Fmodify-mutable)