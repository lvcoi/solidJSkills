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

# createStore

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/create-store.mdx)

Stores were intentionally designed to manage data structures like objects and arrays but are capable of handling other data types, such as strings and numbers.

* * *

## [Types Signature](create-store.md#types-signature)

```


import { createStore } from "solid-js/store"

import type { StoreNode, Store, SetStoreFunction } from "solid-js/store"




function createStore<T extends StoreNode>(

  state: T | Store<T>

): [get: Store<T>, set: SetStoreFunction<T>];




type Store<T> = T; // conceptually readonly, but not typed as such
```

* * *

## [Usage](create-store.md#usage)

```


import { createStore } from "solid-js/store";




// Initialize store

const [store, setStore] = createStore({

  userCount: 3,

  users: [

    {

      id: 0,

      username: "felix909",

      location: "England",

      loggedIn: false,

    },

    {

      id: 1,

      username: "tracy634",

      location: "Canada",

      loggedIn: true,

    },

    {

      id: 1,

      username: "johny123",

      location: "India",

      loggedIn: true,

    },

  ],

});
```

* * *

## [Getter](create-store.md#getter)

Store objects support the use of getters to store derived values.

```


const [state, setState] = createStore({

  user: {

    firstName: "John",

    lastName: "Smith",

    get fullName() {

      return `${this.firstName} ${this.lastName}`;

    },

  },

});
```

* * *

## [Setter](create-store.md#setter)

Changes can take the form of function that passes previous state and returns new state or a value. Objects are always shallowly merged. Set values to undefined to delete them from the Store. In TypeScript, you can delete a value by using a non-null assertion, like `undefined!`.

```


const [state, setState] = createStore({

  firstName: "John",

  lastName: "Miller",

});




setState({ firstName: "Johnny", middleName: "Lee" });

// ({ firstName: 'Johnny', middleName: 'Lee', lastName: 'Miller' })




setState((state) => ({ preferredName: state.firstName, lastName: "Milner" }));

// ({ firstName: 'Johnny', preferredName: 'Johnny', middleName: 'Lee', lastName: 'Milner' })
```

* * *

To learn more about using stores check the [Stores Guide](../../concepts/stores.md), and the **Store utilities** section for more advanced APIs.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fstore-utilities%2Fcreate-store.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fstore-utilities%2Fcreate-store)

Previous[← createMutable](create-mutable.md)

Next[modifyMutable →](modify-mutable.md)

On this page

1. [Overview](#_top)
2. [Types Signature](#types-signature)
3. [Usage](#usage)
4. [Getter](#getter)
5. [Setter](#setter)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/create-store.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fstore-utilities%2Fcreate-store.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fstore-utilities%2Fcreate-store)