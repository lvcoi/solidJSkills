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

# useSearchParams

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-search-params.mdx)

The `useSearchParams` function reads the URL query parameters for the current route and provides a function to update them.

* * *

## [Import](use-search-params.md#import)

```


import { useSearchParams } from "@solidjs/router";
```

* * *

## [Type](use-search-params.md#type)

```


function useSearchParams<T extends Record<string, string | string[]>>(): [

  Partial<T>,

  (params: SetSearchParams, options?: Partial<NavigateOptions>) => void,

];
```

* * *

## [Parameters](use-search-params.md#parameters)

`useSearchParams` takes no arguments.

* * *

## [Return value](use-search-params.md#return-value)

- **Type:** `[ Partial<T>, (params: SetSearchParams, options?: Partial<NavigateOptions>) => void ]`

`useSearchParams` returns an array with two items.

The first item is a reactive object containing the current query parameters. Accessing a property within a tracking scope registers a dependency, causing the computation to re-run when the parameter changes. Values are always strings.

The second item is a function that updates the query string. It merges the object provided as its first argument with the current query parameters. Passing an empty string (`""`), an empty array (`[]`), `undefined`, or `null` as a value removes the key. It accepts the same options as [`useNavigate`](use-navigate.md) as the second parameter. By default, the `resolve` and `scroll` options are set to `false`.

* * *

## [Examples](use-search-params.md#examples)

### [Basic usage](use-search-params.md#basic-usage)

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

## [Related](use-search-params.md#related)

- [`useParams`](use-params.md)
- [`useLocation`](use-location.md)
- [`useNavigate`](use-navigate.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-search-params.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-search-params)

Previous[← usePreloadRoute](use-preload-route.md)

Next[json →](../response-helpers/json.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
5. [Return value](#return-value)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-search-params.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-search-params.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-search-params)