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

# cache

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/cache.mdx)

Deprecation Warning

This API is deprecated since `v0.15.0` of Solid Router. Use [query](query.md) instead. It will be removed in an upcoming release.

`cache` is a [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) designed to create a new function with the same signature as the function passed to it. When this newly created function is called for the first time with a specific set of arguments, the original function is run, and its return value is stored in a cache and returned to the caller of the created function. The next time the created function is called with the same arguments (as long as the cache is still valid), it will return the cached value instead of re-executing the original function.

note

`cache` can be defined anywhere and then used inside your components with [`createAsync`](create-async.md).

However, using `cache` directly in [`createResource`](../../../reference/basic-reactivity/create-resource.md) will not work since the fetcher is not reactive and will not invalidate properly.

* * *

## [Usage](cache.md#usage)

```


const getUser = query(

  (id, options = {}) =>

    fetch(`/api/users/${id}?summary=${options.summary || false}`).then((r) =>

      r.json()

    ),

  "usersById"

);




getUser(123); // Causes a GET request to /api/users/123?summary=false

getUser(123); // Does not cause a GET request

getUser(123, { summary: true }); // Causes a GET request to /api/users/123?summary=true

setTimeout(() => getUser(123, { summary: true }), 999000); // Eventually causes another GET request to /api/users/123?summary=true
```

### [With preload functions](cache.md#with-preload-functions)

Using it with a [preload function](../preload-functions/preload.md):

```


import { lazy } from "solid-js";

import { Route } from "@solidjs/router";

import { getUser } from ... // the cache function




const User = lazy(() => import("./pages/users/[id].js"));




// preload function

function preloadUser({params, location}) {

  void getUser(params.id)

}




// Pass it in the route definition

<Route path="/users/:id" component={User} preload={preloadUser} />;
```

### [Inside a route's component](cache.md#inside-a-routes-component)

Using it inside a route's component:

```


// pages/users/[id].js

import { getUser } from ... // the cache function




export default function User(props) {

  const user = createAsync(() => getUser(props.params.id));

  return <h1>{user().name}</h1>;

}
```

* * *

## [Cache function capabilities](cache.md#cache-function-capabilities)

`cache` accomplishes the following:

1. Deduping on the server for the lifetime of the request.
2. Preloading the cache in the browser - this lasts 5 seconds. When a route is preloaded on hover or when preload is called when entering a route it will make sure to dedupe calls.
3. A reactive refetch mechanism based on key. This prevents routes that are not new from retriggering on action revalidation.
4. Serve as a back/forward cache for browser navigation for up to 5 minutes. Any user based navigation or link click bypasses it. Upon revalidation or new fetch the cache is updated.

* * *

## [Cache keys](cache.md#cache-keys)

To ensure that the cache keys are consistent and unique, arguments are deterministically serialized using JSON.stringify. Before serialization, key/value pairs in objects are sorted so that the order of properties does not affect the serialization. For instance, both `{ name: 'Ryan', awesome: true }` and `{ awesome: true, name: 'Ryan' }` will serialize to the same string so that they produce the same cache key.

* * *

## [Return value](cache.md#return-value)

The return value is a `CachedFunction`, a function that has the same signature as the function you passed to `cache`. This cached function stores the return value using the cache key. Under most circumstances, this temporarily prevents the passed function from running with the same arguments, even if the created function is called repeatedly.

* * *

## [Arguments](cache.md#arguments)

argumenttypedescription`fn``(...args: any) => any`A function whose return value you'd like to be cached.`name`\*stringAny arbitrary string that you'd like to use as the rest of the cache key.

\*Since the internal cache is shared by all the functions using `cache`, the string should be unique for each function passed to `cache`. If the same key is used with multiple functions, one function might return the cached result of the other.

* * *

## [Methods](cache.md#methods)

### [`.key` and `.keyFor`](cache.md#key-and-keyfor)

Cached functions provide `.key` and `.keyFor`, are useful when retrieving the keys used in cases involving invalidation:

```


let id = 5;

getUser.key; // returns "users"

getUser.keyFor(id); // returns "users[5]"
```

### [`revalidate`](cache.md#revalidate)

The cache can be revalidated using the `revalidate` method or the `revalidate` keys that are set on the response from the actions. If the entire key is passed, it will invalidate all entries for the cache (ie. `users` in the example above). If only a single entry needs to be invalidated, `keyFor` is provided. To revalidate everything in the cache, pass `undefined` as the key.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Fcache.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Fcache)

Previous[← action](action.md)

Next[createAsync →](create-async.md)

On this page

1. [Overview](#_top)
2. [Usage](#usage)
   
   1. [With preload functions](#with-preload-functions)
   2. [Inside a route's component](#inside-a-routes-component)
3. [Cache function capabilities](#cache-function-capabilities)
4. [Cache keys](#cache-keys)
5. [Return value](#return-value)
6. [Arguments](#arguments)
7. [Methods](#methods)
   
   1. [.key and .keyFor](#key-and-keyfor)
   2. [revalidate](#revalidate)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/cache.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Fcache.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Fcache)