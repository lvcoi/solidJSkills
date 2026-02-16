# useSearchParams

The `useSearchParams` function reads the URL query parameters for the current route and provides a function to update them.

* * *

## Import

```
import { useSearchParams } from "@solidjs/router";
```
* * *

## Type

```
function useSearchParams<T extends Record<string, string | string[]>>(): [

  Partial<T>,

  (params: SetSearchParams, options?: Partial<NavigateOptions>) => void,

];
```
* * *

## Parameters

`useSearchParams` takes no arguments.

* * *

## Return value

- **Type:** `[ Partial<T>, (params: SetSearchParams, options?: Partial<NavigateOptions>) => void ]`

`useSearchParams` returns an array with two items.

The first item is a reactive object containing the current query parameters. Accessing a property within a tracking scope registers a dependency, causing the computation to re-run when the parameter changes. Values are always strings.

The second item is a function that updates the query string. It merges the object provided as its first argument with the current query parameters. Passing an empty string (`""`), an empty array (`[]`), `undefined`, or `null` as a value removes the key. It accepts the same options as [`useNavigate`](use-navigate.md) as the second parameter. By default, the `resolve` and `scroll` options are set to `false`.

* * *

## Examples

### Basic usage

```
import { useSearchParams } from "@solidjs/router";

function Paginator() {

  const [params, setParams] = useSearchParams();

  const page = () => Number(params.page || "1");

  return (

    <div>

      <span>Current Page: {page()}</span>

      <button onClick={() => setParams({ page: page() + 1 })}>Next</button>

    </div>

  );

}
```
* * *

## Related

- [`useParams`](use-params.md)
- [`useLocation`](use-location.md)
- [`useNavigate`](use-navigate.md)
