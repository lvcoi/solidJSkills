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

# createAsync

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/create-async.mdx)

The `createAsync` primitive manages asynchronous data fetching by tracking the result of a promise-returning function.

note

`createAsync` is currently a thin wrapper over `createResource`. While `createResource` offers similar functionality, **`createAsync` is the recommended primitive for most asynchronous data fetching**. It is intended to be the standard async primitive in a future Solid 2.0 release.

* * *

## [Import](create-async.md#import)

```


import { createAsync } from "@solidjs/router";
```

* * *

## [Type](create-async.md#type)

```


function createAsync<T>(

  fn: (prev: T) => Promise<T>,

  options: {

    name?: string;

    initialValue: T;

    deferStream?: boolean;

  }

): AccessorWithLatest<T>;




function createAsync<T>(

  fn: (prev: T | undefined) => Promise<T>,

  options?: {

    name?: string;

    initialValue?: T;

    deferStream?: boolean;

  }

): AccessorWithLatest<T | undefined>;
```

* * *

## [Parameters](create-async.md#parameters)

### [`fetcher`](create-async.md#fetcher)

- **Type:** `(prev: T | undefined) => Promise<T>`
- **Required:** Yes

An asynchronous function or a function that returns a `Promise`. The resolved value of this `Promise` is what `createAsync` tracks. This function is reactive and will automatically re-execute if any of its dependencies change.

### [`options`](create-async.md#options)

- **Type:** `{ name?: string; initialValue?: T; deferStream?: boolean; }`
- **Required:** No

An object for configuring the primitive. It has the following properties:

#### [`name`](create-async.md#name)

- **Type:** `string`
- **Required:** No

A name for the resource, used for identification in debugging tools like [Solid Debugger](https://github.com/thetarnav/solid-devtools).

#### [`initialValue`](create-async.md#initialvalue)

- **Type:** `T`
- **Required:** No

The initial value of the returned signal before the fetcher finishes executing.

#### [`deferStream`](create-async.md#deferstream)

- **Type:** `boolean`
- **Required:** No

If `true`, [streaming](../../data-fetching/streaming.md) will be deferred until the fetcher finishes executing.

* * *

## [Return value](create-async.md#return-value)

`createAsync` returns a derived signal that contains the resolved value of the fetcher.

While the fetcher is executing for the first time, unless an `initialValue` is specified, the signal's value is `undefined`.

* * *

## [Examples](create-async.md#examples)

### [Basic usage](create-async.md#basic-usage)

```


import { createAsync, query } from "@solidjs/router";




const getCurrentUser = query(async () => {

  // ... Fetches the current authenticated user from the server.

}, "currentUser");




function UserProfile() {

  const user = createAsync(() => getCurrentUser());




  return <div>{user()?.name}</div>;

}
```

### [With parameter](create-async.md#with-parameter)

```


import { createAsync, query } from "@solidjs/router";




const getInvoiceQuery = query(async (invoiceId: string) => {

  // ... Fetches the invoice details from the server.

}, "invoice");




function InvoiceDetails(props: { invoiceId: string }) {

  const invoice = createAsync(() => getInvoiceQuery(props.invoiceId));




  return (

    <div>

      <h2>Invoice #{invoice()?.number}</h2>

      <p>Total: ${invoice()?.total}</p>

    </div>

  );

}
```

### [With error handling and pending state](create-async.md#with-error-handling-and-pending-state)

```


import { createAsync, query } from "@solidjs/router";

import { Suspense, ErrorBoundary, For } from "solid-js";




const getAllRecipesQuery = query(async () => {

  // ... Fetches the recipes from the server and throws an error if an issue occurred.

}, "recipes");




function Recipes() {

  const recipes = createAsync(() => getAllRecipesQuery());




  return (

    <ErrorBoundary fallback={<p>Couldn't fetch any recipes!</p>}>

      <Suspense fallback={<p>Fetching recipes...</p>}>

        <For each={recipes()}>

          {(recipe) => (

            <div>

              <h3>{recipe.name}</h3>

              <p>Cook time: {recipe.time}</p>

            </div>

          )}

        </For>

      </Suspense>

    </ErrorBoundary>

  );

}
```

* * *

## [Related](create-async.md#related)

- [`query`](query.md)
- [`<Suspense>`](../../../reference/components/suspense.md)
- [`<ErrorBoundary>`](../../../reference/components/error-boundary.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Fcreate-async.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Fcreate-async)

Previous[← cache](cache.md)

Next[createAsyncStore →](create-async-store.md)

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
   2. [With parameter](#with-parameter)
   3. [With error handling and pending state](#with-error-handling-and-pending-state)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/create-async.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Fcreate-async.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Fcreate-async)