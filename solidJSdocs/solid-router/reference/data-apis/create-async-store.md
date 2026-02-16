[Solid **Router**](../..)

- [Core](../../../index.md)
- [Router](../..)
- [SolidStart](../../../solid-start)
- [Meta](../../../solid-meta)

[](https://github.com/solidjs/solid-router)[](https://discord.com/invite/solidjs)

LearnReference

- Components
  
  - [A](../components/a.md)
  - [HashRouter](../components/hash-router.md)
  - [MemoryRouter](../components/memory-router.md)
  - [Navigate](../components/navigate.md)
  - [Route](../components/route.md)
  - [Router](../components/router.md)
- Data APIs
  
  - [action](action.md)
  - [cache (deprecated)](cache.md)
  - [createAsync](create-async.md)
  - [createAsyncStore](create-async-store.md)
  - [query](query.md)
  - [revalidate](revalidate.md)
  - [useAction](use-action.md)
  - [useSubmission](use-submission.md)
  - [useSubmissions](use-submissions.md)
- Preload functions
  
  - [preload](../preload-functions/preload.md)
- Primitives
  
  - [useBeforeLeave](../primitives/use-before-leave.md)
  - [useCurrentMatches](../primitives/use-current-matches.md)
  - [useIsRouting](../primitives/use-is-routing.md)
  - [useLocation](../primitives/use-location.md)
  - [useMatch](../primitives/use-match.md)
  - [useNavigate](../primitives/use-navigate.md)
  - [useParams](../primitives/use-params.md)
  - [usePreloadRoute](../primitives/use-preload-route.md)
  - [useSearchParams](../primitives/use-search-params.md)
- Response helpers
  
  - [json](../response-helpers/json.md)
  - [redirect](../response-helpers/redirect.md)
  - [reload](../response-helpers/reload.md)

Data APIs

# createAsyncStore

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/create-async-store.mdx)

The `createAsyncStore` primitive manages asynchronous data fetching by tracking the result of a promise-returning function in a [store](../../../concepts/stores.md).

The main difference from [createAsync](create-async.md) is its use of reconciliation: when new data arrives, it intelligently merges with the existing store, updating only changed fields while preserving unchanged state.

* * *

## [Import](create-async-store.md#import)

```


import { createAsyncStore } from "@solidjs/router";
```

* * *

## [Type](create-async-store.md#type)

```


function createAsyncStore<T>(

  fn: (prev: T) => Promise<T>,

  options: {

    name?: string;

    initialValue: T;

    deferStream?: boolean;

    reconcile?: ReconcileOptions;

  }

): AccessorWithLatest<T>;




function createAsyncStore<T>(

  fn: (prev: T | undefined) => Promise<T>,

  options?: {

    name?: string;

    initialValue?: T;

    deferStream?: boolean;

    reconcile?: ReconcileOptions;

  }

): AccessorWithLatest<T | undefined>;
```

* * *

## [Parameters](create-async-store.md#parameters)

### [`fetcher`](create-async-store.md#fetcher)

- **Type:** `(prev: T | undefined) => Promise<T>`
- **Required:** Yes

An asynchronous function or a function that returns a `Promise`. The resolved value of this `Promise` is what `createAsyncStore` tracks. This function is reactive and will automatically re-execute if any of its dependencies change.

### [`options`](create-async-store.md#options)

- **Type:** `{ name?: string; initialValue?: T; deferStream?: boolean; reconcile?: ReconcileOptions; }`
- **Required:** No

An object for configuring the primitive. It has the following properties.

#### [`name`](create-async-store.md#name)

- **Type:** `string`
- **Required:** No

A name for the resource, used for identification in debugging tools like [Solid Debugger](https://github.com/thetarnav/solid-devtools).

#### [`initialValue`](create-async-store.md#initialvalue)

- **Type:** `T`
- **Required:** No

The initial value of the returned store before the fetcher resolves.

#### [`deferStream`](create-async-store.md#deferstream)

- **Type:** `boolean`
- **Required:** No

If `true`, [streaming](../../data-fetching/streaming.md) will be deferred until the resource has resolved.

#### [`reconcile`](create-async-store.md#reconcile)

- **Type:** `ReconcileOptions`
- **Required:** No

[Options](../../../reference/store-utilities/reconcile.md#options) passed directly to the `reconcile` function. It controls how new data is merged with the existing store.

* * *

## [Return value](create-async-store.md#return-value)

`createAsyncStore` returns a derived signal that contains the resolved value of the fetcher as a store.

While the fetcher is executing for the first time, unless an `initialValue` is specified, the store's value is `undefined`.

* * *

## [Examples](create-async-store.md#examples)

### [Basic usage](create-async-store.md#basic-usage)

```


import { For, createSignal } from "solid-js";

import { createAsyncStore, query } from "@solidjs/router";




const getNotificationsQuery = query(async (unreadOnly: boolean) => {

  // ... Fetches the list of notifications from the server.

}, "notifications");




function Notifications() {

  const [unreadOnly, setUnreadOnly] = createSignal(false);

  const notifications = createAsyncStore(() =>

    getNotificationsQuery(unreadOnly())

  );




  return (

    <div>

      <button onClick={() => setUnreadOnly(!unreadOnly())}>

        Toggle unread

      </button>

      <ul>

        <For each={notifications()}>

          {(notification) => (

            <li>

              <div>{notification.message}</div>

              <div>{notification.user.name}</div>

            </li>

          )}

        </For>

      </ul>

    </div>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Fcreate-async-store.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Fcreate-async-store)

Previous[← createAsync](create-async.md)

Next[query →](query.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [fetcher](#fetcher)
   2. [options](#options)
5. [Return value](#return-value)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/create-async-store.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Fcreate-async-store.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Fcreate-async-store)