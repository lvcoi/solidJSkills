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

# useParams

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-params.mdx)

The `useParams` function reads the path parameters of the current route.

* * *

## [Import](use-params.md#import)

```


import { useParams } from "@solidjs/router";
```

* * *

## [Type](use-params.md#type)

```


function useParams<T extends Record<string, string>>(): T;
```

* * *

## [Parameters](use-params.md#parameters)

`useParams` takes no arguments.

* * *

## [Return value](use-params.md#return-value)

- **Type**: `T`

`useParams` returns a reactive object where keys match the dynamic segments defined in the route path. Accessing a property within a tracking scope registers a dependency, causing the computation to re-run when the parameter changes.

* * *

## [Examples](use-params.md#examples)

### [Basic usage](use-params.md#basic-usage)

```


import { createMemo } from "solid-js";

import { useParams } from "@solidjs/router";




// Rendered via <Route path="/users/:id" component={UserPage} />

function UserPage() {

  const params = useParams();




  // Derived value updates when the route parameter changes.

  const title = createMemo(() => `Profile for ${params.id}`);




  return <h1>{title()}</h1>;

}
```

* * *

## [Related](use-params.md#related)

- [useLocation](use-location.md)
- [useSearchParams](use-search-params.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-params.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-params)

Previous[← useNavigate](use-navigate.md)

Next[usePreloadRoute →](use-preload-route.md)

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

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-params.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-params.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-params)