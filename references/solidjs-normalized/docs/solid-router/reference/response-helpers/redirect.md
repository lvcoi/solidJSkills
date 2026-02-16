# redirect

The `redirect` function returns a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object that instructs the router to navigate to a different route when returned or thrown from a [query](../data-apis/query.md) or [action](../../concepts/actions.md).

This works both in client and server (e.g., using a server function) environments.

* * *

## Import

```
import { redirect } from "@solidjs/router";
```
* * *

## Type

```
function redirect(

  url: string,

  init?:

    | number

    | {

        revalidate?: string | string[];

        headers?: HeadersInit;

        status?: number;

        statusText?: string;

      }

): CustomResponse<never>;
```
* * *

## Parameters

### `url`

- **Type:** `string`
- **Required:** Yes

The absolute or relative URL to which the redirect should occur.

### `init`

- **Type:** `number | { revalidate?: string | string[]; headers?: HeadersInit; status?: number; statusText?: string; }`
- **Required:** No

Either a number representing the status code or a configuration object with the following properties:

#### `revalidate`

- **Type:** `string | string[]`
- **Required:** No

A query key or an array of query keys to revalidate on the destination route.

#### `status`

- **Type:** `number`
- **Required:** No

The HTTP status code for the redirect. Defaults to [`302 Found`)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/302).

* * *

## Examples

### Basic Usage

```
import { query, redirect } from "@solidjs/router";

const getCurrentUserQuery = query(async () => {

  const response = await fetch("/api/me");

  if (response.status === 401) {

    return redirect("/login");

  }

  return await response.json();

}, "currentUser");
```
### Configuring Query Revalidation

```
import { action, redirect } from "@solidjs/router";

const loginAction = action(async (formData: FormData) => {

  const username = formData.get("username")?.toString();

  const password = formData.get("password")?.toString();

  await fetch("/api/login", {

    method: "POST",

    body: JSON.stringify({ username, password }),

  }).then((response) => response.json());

  return redirect("/users", { revalidate: ["currentUser"] });

}, "login");
```
* * *

## Related

- [`query`](../data-apis/query.md)
- [`action`](../data-apis/action.md)
