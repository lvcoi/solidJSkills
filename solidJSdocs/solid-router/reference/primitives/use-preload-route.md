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

# usePreloadRoute

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-preload-route.mdx)

The `usePreloadRoute` function is a utility for manually preloading a route.

* * *

## [Import](use-preload-route.md#import)

```


import { usePreloadRoute } from "@solidjs/router";
```

* * *

## [Type](use-preload-route.md#type)

```


const usePreloadRoute: () => (

  url: string | URL,

  options?: { preloadData?: boolean }

) => void;
```

* * *

## [Parameters](use-preload-route.md#parameters)

### [`url`](use-preload-route.md#url)

**Type:** `string | URL` **Required:** Yes

The route path to preload. Accepts either a `string` path or a [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) object.

### [`options`](use-preload-route.md#options)

- **Type:** `{ preloadData?: boolean }`
- **Required:** No

A configuration object with the following properties:

#### [`preloadData`](use-preload-route.md#preloaddata)

- **Type:** `boolean`
- **Default:** `false`

When `true`, triggers the route's data loading in addition to preloading the route itself.

* * *

## [Return value](use-preload-route.md#return-value)

None.

* * *

## [Examples](use-preload-route.md#examples)

### [Basic usage](use-preload-route.md#basic-usage)

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

## [Related](use-preload-route.md#related)

- [`<A>`](../components/a.md)
- [`preload`](../preload-functions/preload.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-preload-route.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-preload-route)

Previous[← useParams](use-params.md)

Next[useSearchParams →](use-search-params.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [url](#url)
   2. [options](#options)
5. [Return value](#return-value)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-preload-route.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-preload-route.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-preload-route)