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
  
  - [action](../data-apis/action.md)
  - [cache (deprecated)](../data-apis/cache.md)
  - [createAsync](../data-apis/create-async.md)
  - [createAsyncStore](../data-apis/create-async-store.md)
  - [query](../data-apis/query.md)
  - [revalidate](../data-apis/revalidate.md)
  - [useAction](../data-apis/use-action.md)
  - [useSubmission](../data-apis/use-submission.md)
  - [useSubmissions](../data-apis/use-submissions.md)
- Preload functions
  
  - [preload](../preload-functions/preload.md)
- Primitives
  
  - [useBeforeLeave](use-before-leave.md)
  - [useCurrentMatches](use-current-matches.md)
  - [useIsRouting](use-is-routing.md)
  - [useLocation](use-location.md)
  - [useMatch](use-match.md)
  - [useNavigate](use-navigate.md)
  - [useParams](use-params.md)
  - [usePreloadRoute](use-preload-route.md)
  - [useSearchParams](use-search-params.md)
- Response helpers
  
  - [json](../response-helpers/json.md)
  - [redirect](../response-helpers/redirect.md)
  - [reload](../response-helpers/reload.md)

Primitives

# useNavigate

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-navigate.mdx)

The `useNavigate` function provides a function for programmatically navigating to a new route.

* * *

## [Import](use-navigate.md#import)

```


import { useNavigate } from "@solidjs/router";
```

* * *

## [Type](use-navigate.md#type)

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

## [Parameters](use-navigate.md#parameters)

`useNavigate` takes no arguments.

* * *

## [Return value](use-navigate.md#return-value)

- **Type:** `(to: string | number, options?: NavigateOptions) => void | (delta: number) => void`

Returns a function that accepts two arguments:

### [`to`](use-navigate.md#to)

- **Type:** `string | number`
- **Required:** Yes

The target destination.

- `string`: A path to navigate to.
- `number`: A history delta (e.g., `-1` for back, `1` for forward). If provided, the `options` argument is ignored.

### [`options`](use-navigate.md#options)

- **Type:** `NavigateOptions`
- **Required:** No

Configuration object for the navigation.

#### [`resolve`](use-navigate.md#resolve)

- **Type:** `boolean`
- **Default:** `true`

Resolves the path relative to the current route. If `false`, the path is resolved against the root (`/`).

If `to` is a query-only string (e.g., `?sort=asc`), this defaults to `false` to preserve the current pathname.

#### [`replace`](use-navigate.md#replace)

- **Type**: `boolean`
- **Default**: `false`

Replaces the current history entry instead of adding a new one. Used for redirects or state updates to prevent the user from navigating back to the previous state.

#### [`scroll`](use-navigate.md#scroll)

- **Type**: `boolean`
- **Default**: `true`

Scrolls the window to the top after navigation.

- `true`: Scrolls to the top or to the element matching the hash.
- `false`: Maintains the current scroll position (unless a hash matches).

#### [`state`](use-navigate.md#state)

- **Type**: `any`
- **Default**: `undefined`

Arbitrary state stored in `history.state`. This value is accessible via `useLocation().state`.

State is serialized using the [structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), which supports most built-in types but not functions or DOM nodes.

* * *

## [Examples](use-navigate.md#examples)

### [Basic usage](use-navigate.md#basic-usage)

```


import { useNavigate } from "@solidjs/router";




const navigate = useNavigate();




navigate("/users/123");
```

### [With `replace`](use-navigate.md#with-replace)

```


import { useNavigate } from "@solidjs/router";




const navigate = useNavigate();




// Redirect (replace history)

function login() {

  navigate("/dashboard", { replace: true });

}
```

### [With `delta`](use-navigate.md#with-delta)

```


import { useNavigate } from "@solidjs/router";




const navigate = useNavigate();




// Go back one page

function goBack() {

  navigate(-1);

}
```

### [With `state`](use-navigate.md#with-state)

```


import { useNavigate } from "@solidjs/router";




const navigate = useNavigate();




// Pass custom state

navigate("/checkout", {

  state: { from: "cart", total: 100 },

});
```

* * *

## [Related](use-navigate.md#related)

- [useLocation](use-location.md)
- [redirect](../response-helpers/redirect.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-navigate.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-navigate)

Previous[← useMatch](use-match.md)

Next[useParams →](use-params.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
5. [Return value](#return-value)
   
   1. [to](#to)
   2. [options](#options)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)
   2. [With replace](#with-replace)
   3. [With delta](#with-delta)
   4. [With state](#with-state)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-navigate.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-navigate.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-navigate)