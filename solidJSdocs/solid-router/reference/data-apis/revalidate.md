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

# revalidate

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/revalidate.mdx)

The `revalidate` function triggers revalidation of [queries](../../data-fetching/queries.md) by their keys. Each query with active subscribers re-executes and updates its dependents; queries without subscribers are marked stale but don't execute until subscribed.

* * *

## [Import](revalidate.md#import)

```


import { revalidate } from "@solidjs/router";
```

* * *

## [Type](revalidate.md#type)

```


function revalidate(

  key?: string | string[] | void,

  force?: boolean

): Promise<void>;
```

* * *

## [Parameters](revalidate.md#parameters)

### [`key`](revalidate.md#key)

- **Type:** `string | string[] | void`
- **Required:** No

The query key or array of query keys to revalidate. If not provided, all queries on the current page are revalidated.

### [`force`](revalidate.md#force)

- **Type:** `boolean`
- **Required:** No
- **Default:** `true`

When `true`, clears the internal cache used for deduplication. When `false`, allows cached data to be reused if available.

* * *

## [Return value](revalidate.md#return-value)

`revalidate` returns a `Promise` that resolves when the revalidation transition completes.

* * *

## [Examples](revalidate.md#examples)

### [Basic usage](revalidate.md#basic-usage)

```


import { query, createAsync, revalidate } from "@solidjs/router";




const getUserQuery = query(async () => {

  // ... Fetches user data.

  return { name: "John" };

}, "user");




function UserProfile() {

  const user = createAsync(() => getUserQuery());




  function refreshUser() {

    revalidate(getUserQuery.key);

  }




  return (

    <div>

      <button onClick={refreshUser}>Refresh</button>

      <p>{user()?.name}</p>

    </div>

  );

}
```

### [Revalidating multiple queries](revalidate.md#revalidating-multiple-queries)

```


import { query, revalidate } from "@solidjs/router";




const getUsersQuery = query(async () => {

  // ... Fetches users.

}, "users");




const getPostsQuery = query(async () => {

  // ... Fetches posts.

}, "posts");




function refreshAll() {

  revalidate([getUsersQuery.key, getPostsQuery.key]);

}
```

* * *

## [Related](revalidate.md#related)

- [`query`](query.md)
- [`createAsync`](create-async.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Frevalidate.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Frevalidate)

Previous[← query](query.md)

Next[useAction →](use-action.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [key](#key)
   2. [force](#force)
5. [Return value](#return-value)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)
   2. [Revalidating multiple queries](#revalidating-multiple-queries)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/revalidate.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Frevalidate.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Frevalidate)