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
  
  - [action](action.md)
  - [cache (deprecated)](cache.md)
  - [createAsync](create-async.md)
  - [createAsyncStore](create-async-store.md)
  - [query](query.md)
  - [revalidate](revalidate.md)
  - [useAction](use-action.md)
  - [useSubmission](use-submission.md)
  - [useSubmissions](use-submissions.md)
- Preload functions
  
  - [preload](../preload-functions/preload.md)
- Primitives
  
  - [useBeforeLeave](../primitives/use-before-leave.md)
  - [useCurrentMatches](../primitives/use-current-matches.md)
  - [useIsRouting](../primitives/use-is-routing.md)
  - [useLocation](../primitives/use-location.md)
  - [useMatch](../primitives/use-match.md)
  - [useNavigate](../primitives/use-navigate.md)
  - [useParams](../primitives/use-params.md)
  - [usePreloadRoute](../primitives/use-preload-route.md)
  - [useSearchParams](../primitives/use-search-params.md)
- Response helpers
  
  - [json](../response-helpers/json.md)
  - [redirect](../response-helpers/redirect.md)
  - [reload](../response-helpers/reload.md)

Data APIs

# query

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/query.mdx)

The `query` function wraps an asynchronous function (the fetcher) and returns a query.

The primary purpose of a query is to prevent redundant data fetching. When a query is called, a key is generated from its name and arguments. This key is used to internally cache the result of the fetcher. If a query with the same key is called, the cached result is used in these scenarios:

- **For preloading:** After a route's data is preloaded, a subsequent call to the same query within a 5-second window uses the preloaded data.
- **For active subscriptions:** When a query is actively being used by a component (e.g., via [`createAsync`](create-async.md)), its data is reused without expiration.
- **On native history navigation:** When navigating with the browser's back or forward buttons, the data is reused instead of being re-fetched.
- **For server-side deduplication:** Within a single server-side rendering (SSR) request, repeated calls to the same query reuse the same value.
- **During client hydration:** If SSR has provided data for a key, that data is used immediately on the client without a new network request.

* * *

## [Import](query.md#import)

```


import { query } from "@solidjs/router";
```

* * *

## [Type](query.md#type)

```


function query<T extends (...args: any) => any>(

  fn: T,

  name: string

): CachedFunction<T>;
```

* * *

## [Parameters](query.md#parameters)

### [`fetcher`](query.md#fetcher)

- **Type:** `T extends (...args: any) => any`
- **Required:** Yes

An asynchronous function that handles the logic for fetching data. All arguments passed to this function must be JSON-serializable.

### [`name`](query.md#name)

- **Type:** `string`
- **Required:** Yes

A string used as a namespace for the query. Solid Router combines this with the query's arguments to generate a unique key for deduplication.

* * *

## [Return value](query.md#return-value)

`query` returns a new function with the same call signature as the fetcher. This returned function has the following properties attached to it:

### [`key`](query.md#key)

The base key for the query, derived from its name.

### [`keyFor`](query.md#keyfor)

A function that takes the same arguments as the fetcher and returns a string representing a specific key for that set of arguments.

* * *

## [Example](query.md#example)

### [Basic usage](query.md#basic-usage)

```


import { query } from "@solidjs/router";




const getUserProfileQuery = query(async (userId: string) => {

  const response = await fetch(

    `https://api.example.com/users/${encodeURIComponent(userId)}`

  );

  const json = await response.json();




  if (!response.ok) {

    throw new Error(json?.message ?? "Failed to load user profile.");

  }




  return json;

}, "userProfile");
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Fquery.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Fquery)

Previous[← createAsyncStore](create-async-store.md)

Next[revalidate →](revalidate.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [fetcher](#fetcher)
   2. [name](#name)
5. [Return value](#return-value)
   
   1. [key](#key)
   2. [keyFor](#keyfor)
6. [Example](#example)
   
   1. [Basic usage](#basic-usage)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/query.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Fquery.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Fquery)