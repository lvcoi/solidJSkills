[**Solid**](../../index.md)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- Basic reactivity
  
  - [createEffect](create-effect.md)
  - [createMemo](create-memo.md)
  - [createResource](create-resource.md)
  - [createSignal](create-signal.md)
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
  
  - [createMutable](../store-utilities/create-mutable.md)
  - [createStore](../store-utilities/create-store.md)
  - [modifyMutable](../store-utilities/modify-mutable.md)
  - [produce](../store-utilities/produce.md)
  - [reconcile](../store-utilities/reconcile.md)
  - [unwrap](../store-utilities/unwrap.md)
- Server utilities
  
  - [getRequestEvent](../server-utilities/get-request-event.md)

Basic reactivity

# createResource

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-resource.mdx)

Creates a reactive resource that manages asynchronous data fetching and loading states, automatically tracking dependencies and providing a simple interface for reading, refreshing, and error handling. It integrates with Solid's reactivity system and Suspense boundaries.

* * *

## [Import](create-resource.md#import)

```


import { createResource } from "solid-js";
```

* * *

## [Type](create-resource.md#type)

```


// Without source

function createResource<T, R = unknown>(

  fetcher: ResourceFetcher<true, T, R>,

  options?: ResourceOptions<T>

): ResourceReturn<T, R>;




// With source

function createResource<T, S, R = unknown>(

  source: ResourceSource<S>,

  fetcher: ResourceFetcher<S, T, R>,

  options?: ResourceOptions<T, S>

): ResourceReturn<T, R>;
```

### [Related types](create-resource.md#related-types)

```


type ResourceReturn<T, R = unknown> = [Resource<T>, ResourceActions<T, R>];




type Resource<T> = {

  (): T | undefined;

  state: "unresolved" | "pending" | "ready" | "refreshing" | "errored";

  loading: boolean;

  error: any;

  latest: T | undefined;

};




type ResourceActions<T, R = unknown> = {

  mutate: (value: T | undefined) => T | undefined;

  refetch: (info?: R) => Promise<T> | T | undefined;

};




type ResourceSource<S> =

  | S

  | false

  | null

  | undefined

  | (() => S | false | null | undefined);




type ResourceFetcher<S, T, R = unknown> = (

  source: S,

  info: { value: T | undefined; refetching: R | boolean }

) => T | Promise<T>;




interface ResourceOptions<T, S = unknown> {

  initialValue?: T;

  name?: string;

  deferStream?: boolean;

  ssrLoadFrom?: "initial" | "server";

  storage?: (

    init: T | undefined

  ) => [Accessor<T | undefined>, Setter<T | undefined>];

  onHydrated?: (k: S | undefined, info: { value: T | undefined }) => void;

}
```

* * *

## [Parameters](create-resource.md#parameters)

### [`source`](create-resource.md#source)

- **Type:** `ResourceSource<S>`
- **Default:** `undefined`

Reactive data source evaluated before the fetcher runs. When the value is `undefined`, `null`, or `false`, the fetcher is not called. Otherwise the current value is passed as the first fetcher argument. Each change triggers the fetcher again.

### [`fetcher`](create-resource.md#fetcher)

- **Type:** `ResourceFetcher<S, T, R>`

Function that receives the source value (or `true` if no source), the current resource info, and returns a value or Promise.

### [`options`](create-resource.md#options)

- **Type:** `ResourceOptions<T, S>`
- **Default:** `{}`

Configuration options for the resource.

#### [`initialValue`](create-resource.md#initialvalue)

- **Type:** `T`
- **Default:** `undefined`

Initial value for the resource. When provided, the resource starts in "ready" state and the type excludes `undefined`.

#### [`name`](create-resource.md#name)

- **Type:** `string`
- **Default:** `undefined`

A name for debugging purposes in development mode.

#### [`deferStream`](create-resource.md#deferstream)

- **Type:** `boolean`
- **Default:** `false`

Controls streaming behavior during server-side rendering.

#### [`ssrLoadFrom`](create-resource.md#ssrloadfrom)

- **Type:** `"initial" | "server"`
- **Default:** `"server"`

Determines how the resource loads during SSR hydration.

- "server": Uses the server-fetched value during hydration.
- "initial": Re-fetches on the client after hydration.

#### [`storage`](create-resource.md#storage)

- **Type:** `(init: T | undefined) => [Accessor<T | undefined>, Setter<T | undefined>]`
- **Default:** `createSignal`

Custom storage function for the resource value, useful for persistence or custom state management.

#### [`onHydrated`](create-resource.md#onhydrated)

- **Type:** `(k: S | undefined, info: { value: T | undefined }) => void`
- **Default:** `undefined`

Callback fired when the resource hydrates on the client side.

* * *

## [Return value](create-resource.md#return-value)

- **Type:** `[Resource<T>, ResourceActions<T, R>]`

Returns a tuple containing the resource accessor and resource actions.

### [`Resource`](create-resource.md#resource)

```


type Resource<T> = {

  (): T | undefined;

  state: "unresolved" | "pending" | "ready" | "refreshing" | "errored";

  loading: boolean;

  error: any;

  latest: T | undefined;

};
```

- `state`: Current state of the resource. See the table below for state descriptions.
- `loading`: Indicates if the resource is currently loading.
- `error`: Error information if the resource failed to load.
- `latest`: The latest value of the resource.

StateDescriptionLoadingErrorLatest`unresolved`Initial state, not yet fetched`false``undefined``undefined``pending`Fetching in progress`true``undefined``undefined``ready`Successfully fetched`false``undefined``T``refreshing`Refetching while keeping previous value`true``undefined``T``errored`Fetching failed`false``any``undefined`

### [`ResourceActions`](create-resource.md#resourceactions)

```


type ResourceActions<T, R = unknown> = {

  mutate: (value: T | undefined) => T | undefined;

  refetch: (info?: R) => Promise<T> | T | undefined;

};
```

- `mutate`: Function to manually overwrite the resource value without calling the fetcher. Allows you to optimistically update the resource value locally, without making a network request.
- `refetch`: Function to re-run the fetcher without changing the source. If a parameter is provided to `refetch`, it will be passed to the fetcher's `refetching` property.

* * *

## [Examples](create-resource.md#examples)

### [Basic usage](create-resource.md#basic-usage)

```


const [data] = createResource(async () => {

  const response = await fetch("/api/data");

  return response.json();

});




// Access data

console.log(data()); // undefined initially, then fetched data

console.log(data.loading); // true during fetch

console.log(data.state); // "pending" → "ready"
```

### [With source](create-resource.md#with-source)

```


const [userId, setUserId] = createSignal(1);




const [user] = createResource(userId, async (id) => {

  const response = await fetch(`/api/users/${id}`);

  return response.json();

});




// Automatically refetches when userId changes

setUserId(2);
```

### [With actions](create-resource.md#with-actions)

```


const [posts, { refetch, mutate }] = createResource(fetchPosts);




// Manual refetch

await refetch();




// Optimistic update

mutate((posts) => [...posts, newPost]);
```

### [Error handling](create-resource.md#error-handling)

```


const [data] = createResource(async () => {

  const response = await fetch('/api/data');

  if (!response.ok) throw new Error('Failed to fetch');

  return response.json();

});




// In JSX

<ErrorBoundary fallback={<div>Error loading data</div>}>

  <div>{data()?.title}</div>

</ErrorBoundary>
```

### [With initial value](create-resource.md#with-initial-value)

```


const [user] = createResource(() => fetchUser(), {

  initialValue: { name: "Loading...", id: 0 },

});




// user() is never undefined

console.log(user().name); // "Loading..." initially
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fbasic-reactivity%2Fcreate-resource.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fbasic-reactivity%2Fcreate-resource)

Previous[← createMemo](create-memo.md)

Next[createSignal →](create-signal.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
   
   1. [Related types](#related-types)
4. [Parameters](#parameters)
   
   1. [source](#source)
   2. [fetcher](#fetcher)
   3. [options](#options)
5. [Return value](#return-value)
   
   1. [Resource](#resource)
   2. [ResourceActions](#resourceactions)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)
   2. [With source](#with-source)
   3. [With actions](#with-actions)
   4. [Error handling](#error-handling)
   5. [With initial value](#with-initial-value)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-resource.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fbasic-reactivity%2Fcreate-resource.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fbasic-reactivity%2Fcreate-resource)