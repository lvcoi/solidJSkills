# useLocation

The `useLocation` function provides information about the current URL, including pathname, query strings, hash, and navigation state.

* * *

## Import

```
import { useLocation } from "@solidjs/router";
```
* * *

## Type

```
const useLocation: <S = unknown>() => Location<S>;

interface Location<S = unknown> extends Path {

  query: SearchParams;

  state: Readonly<Partial<S>> | null;

}

interface Path {

  pathname: string;

  search: string;

  hash: string;

}
```
* * *

## Parameters

None.

* * *

## Return value

`useLocation` returns a reactive `Location` object containing the current URL information.

The `Location` object contains:

### `pathname`

**Type:** `string`

The path portion of the URL, beginning with a `/` and excluding the query string and hash.

### `search`

**Type:** `string`

The query string portion of the URL, including the leading `?` character if a parameter exists.

### `hash`

**Type:** `string`

The hash fragment of the URL, including the leading `#` character if a hash exists.

### `state`

**Type:** `Readonly<Partial<S>> | null`

Custom state passed from [`useNavigate`](use-navigate.md).

### `query`

**Type:** `SearchParams`

A reactive object containing the parsed query parameters from the URL.

* * *

## Examples

### Basic usage

```
import { useLocation } from "@solidjs/router";

function ProductFilter() {

  const location = useLocation();

  const category = () => location.query.category || "all";

  const page = () => location.query.page || "1";

  return (

    <div>

      <p>

        Filtering by: {category()}, Page {page()}

      </p>

    </div>

  );

}
```
* * *

## Related

- [`useNavigate`](use-navigate.md)
- [`useParams`](use-params.md)
- [`useSearchParams`](use-search-params.md)
