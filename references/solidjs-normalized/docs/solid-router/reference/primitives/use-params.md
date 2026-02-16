# useParams

The `useParams` function reads the path parameters of the current route.

* * *

## Import

```
import { useParams } from "@solidjs/router";
```
* * *

## Type

```
function useParams<T extends Record<string, string>>(): T;
```
* * *

## Parameters

`useParams` takes no arguments.

* * *

## Return value

- **Type**: `T`

`useParams` returns a reactive object where keys match the dynamic segments defined in the route path. Accessing a property within a tracking scope registers a dependency, causing the computation to re-run when the parameter changes.

* * *

## Examples

### Basic usage

```
import { createMemo } from "solid-js";

import { useParams } from "@solidjs/router";

// Rendered via <Route path="/users/:id" component={UserPage} />

function UserPage() {

  const params = useParams();

  // Derived value updates when the route parameter changes.

  const title = createMemo(() => `Profile for ${params.id}`);

  return <h1>{title()}</h1>;

}
```
* * *

## Related

- [useLocation](use-location.md)
- [useSearchParams](use-search-params.md)
