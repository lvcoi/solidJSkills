# createAsync

The `createAsync` primitive manages asynchronous data fetching by tracking the result of a promise-returning function.

`createAsync` is currently a thin wrapper over `createResource`. While `createResource` offers similar functionality, **`createAsync` is the recommended primitive for most asynchronous data fetching**. It is intended to be the standard async primitive in a future Solid 2.0 release.

* * *

## Import

```
import { createAsync } from "@solidjs/router";
```
* * *

## Type

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

## Parameters

### `fetcher`

- **Type:** `(prev: T | undefined) => Promise<T>`
- **Required:** Yes

An asynchronous function or a function that returns a `Promise`. The resolved value of this `Promise` is what `createAsync` tracks. This function is reactive and will automatically re-execute if any of its dependencies change.

### `options`

- **Type:** `{ name?: string; initialValue?: T; deferStream?: boolean; }`
- **Required:** No

An object for configuring the primitive. It has the following properties:

#### `name`

- **Type:** `string`
- **Required:** No

A name for the resource, used for identification in debugging tools like [Solid Debugger](https://github.com/thetarnav/solid-devtools).

#### `initialValue`

- **Type:** `T`
- **Required:** No

The initial value of the returned signal before the fetcher finishes executing.

#### `deferStream`

- **Type:** `boolean`
- **Required:** No

If `true`, [streaming](../../data-fetching/streaming.md) will be deferred until the fetcher finishes executing.

* * *

## Return value

`createAsync` returns a derived signal that contains the resolved value of the fetcher.

While the fetcher is executing for the first time, unless an `initialValue` is specified, the signal's value is `undefined`.

* * *

## Examples

### Basic usage

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
### With parameter

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
### With error handling and pending state

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

## Related

- [`query`](query.md)
- [`<Suspense>`](../../../reference/components/suspense.md)
- [`<ErrorBoundary>`](../../../reference/components/error-boundary.md)
