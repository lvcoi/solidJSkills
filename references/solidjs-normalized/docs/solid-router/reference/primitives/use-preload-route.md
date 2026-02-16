# usePreloadRoute

The `usePreloadRoute` function is a utility for manually preloading a route.

* * *

## Import

```
import { usePreloadRoute } from "@solidjs/router";
```
* * *

## Type

```
const usePreloadRoute: () => (

  url: string | URL,

  options?: { preloadData?: boolean }

) => void;
```
* * *

## Parameters

### `url`

**Type:** `string | URL` **Required:** Yes

The route path to preload. Accepts either a `string` path or a [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) object.

### `options`

- **Type:** `{ preloadData?: boolean }`
- **Required:** No

A configuration object with the following properties:

#### `preloadData`

- **Type:** `boolean`
- **Default:** `false`

When `true`, triggers the route's data loading in addition to preloading the route itself.

* * *

## Return value

None.

* * *

## Examples

### Basic usage

```
import { usePreloadRoute } from "@solidjs/router";

function SettingsButton() {

  const preload = usePreloadRoute();

  return (

    <button onClick={() => preload("/users/settings", { preloadData: true })}>

      Load settings

    </button>

  );

}
```
* * *

## Related

- [`<A>`](../components/a.md)
- [`preload`](../preload-functions/preload.md)
