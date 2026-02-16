# useNavigate

The `useNavigate` function provides a function for programmatically navigating to a new route.

* * *

## Import

```
import { useNavigate } from "@solidjs/router";
```
* * *

## Type

```
interface NavigateOptions<S = unknown> {

  resolve: boolean;

  replace: boolean;

  scroll: boolean;

  state: S;

}

function useNavigate(): (

  to: string,

  options?: Partial<NavigateOptions>

) => void;

function useNavigate(delta: number): void;
```
* * *

## Parameters

`useNavigate` takes no arguments.

* * *

## Return value

- **Type:** `(to: string | number, options?: NavigateOptions) => void | (delta: number) => void`

Returns a function that accepts two arguments:

### `to`

- **Type:** `string | number`
- **Required:** Yes

The target destination.

- `string`: A path to navigate to.
- `number`: A history delta (e.g., `-1` for back, `1` for forward). If provided, the `options` argument is ignored.

### `options`

- **Type:** `NavigateOptions`
- **Required:** No

Configuration object for the navigation.

#### `resolve`

- **Type:** `boolean`
- **Default:** `true`

Resolves the path relative to the current route. If `false`, the path is resolved against the root (`/`).

If `to` is a query-only string (e.g., `?sort=asc`), this defaults to `false` to preserve the current pathname.

#### `replace`

- **Type**: `boolean`
- **Default**: `false`

Replaces the current history entry instead of adding a new one. Used for redirects or state updates to prevent the user from navigating back to the previous state.

#### `scroll`

- **Type**: `boolean`
- **Default**: `true`

Scrolls the window to the top after navigation.

- `true`: Scrolls to the top or to the element matching the hash.
- `false`: Maintains the current scroll position (unless a hash matches).

#### `state`

- **Type**: `any`
- **Default**: `undefined`

Arbitrary state stored in `history.state`. This value is accessible via `useLocation().state`.

State is serialized using the [structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), which supports most built-in types but not functions or DOM nodes.

* * *

## Examples

### Basic usage

```
import { useNavigate } from "@solidjs/router";

const navigate = useNavigate();

navigate("/users/123");
```
### With `replace`

```
import { useNavigate } from "@solidjs/router";

const navigate = useNavigate();

// Redirect (replace history)

function login() {

  navigate("/dashboard", { replace: true });

}
```
### With `delta`

```
import { useNavigate } from "@solidjs/router";

const navigate = useNavigate();

// Go back one page

function goBack() {

  navigate(-1);

}
```
### With `state`

```
import { useNavigate } from "@solidjs/router";

const navigate = useNavigate();

// Pass custom state

navigate("/checkout", {

  state: { from: "cart", total: 100 },

});
```
* * *

## Related

- [useLocation](use-location.md)
- [redirect](../response-helpers/redirect.md)
