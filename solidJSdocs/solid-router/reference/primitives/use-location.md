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

# useLocation

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-location.mdx)

The `useLocation` function provides information about the current URL, including pathname, query strings, hash, and navigation state.

* * *

## [Import](use-location.md#import)

```


import { useLocation } from "@solidjs/router";
```

* * *

## [Type](use-location.md#type)

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

## [Parameters](use-location.md#parameters)

None.

* * *

## [Return value](use-location.md#return-value)

`useLocation` returns a reactive `Location` object containing the current URL information.

The `Location` object contains:

### [`pathname`](use-location.md#pathname)

**Type:** `string`

The path portion of the URL, beginning with a `/` and excluding the query string and hash.

### [`search`](use-location.md#search)

**Type:** `string`

The query string portion of the URL, including the leading `?` character if a parameter exists.

### [`hash`](use-location.md#hash)

**Type:** `string`

The hash fragment of the URL, including the leading `#` character if a hash exists.

### [`state`](use-location.md#state)

**Type:** `Readonly<Partial<S>> | null`

Custom state passed from [`useNavigate`](use-navigate.md).

### [`query`](use-location.md#query)

**Type:** `SearchParams`

A reactive object containing the parsed query parameters from the URL.

* * *

## [Examples](use-location.md#examples)

### [Basic usage](use-location.md#basic-usage)

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

## [Related](use-location.md#related)

- [`useNavigate`](use-navigate.md)
- [`useParams`](use-params.md)
- [`useSearchParams`](use-search-params.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-location.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-location)

Previous[← useIsRouting](use-is-routing.md)

Next[useMatch →](use-match.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
5. [Return value](#return-value)
   
   1. [pathname](#pathname)
   2. [search](#search)
   3. [hash](#hash)
   4. [state](#state)
   5. [query](#query)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-location.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-location.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-location)