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
  
  - [json](json.md)
  - [redirect](redirect.md)
  - [reload](reload.md)

Response helpers

# reload

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/response-helpers/reload.mdx)

The `reload` function returns a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object that instructs the router to revalidate specific queries when returned or thrown from a [query](../data-apis/query.md) or [action](../../concepts/actions.md).

* * *

## [Import](reload.md#import)

```


import { reload } from "@solidjs/router";
```

* * *

## [Type](reload.md#type)

```


function reload(init?: {

  revalidate?: string | string[];

  headers?: HeadersInit;

  status?: number;

  statusText?: string;

}): CustomResponse<never>;
```

* * *

## [Parameters](reload.md#parameters)

### [`init`](reload.md#init)

- **Type:** `{ revalidate?: string | string[]; headers?: HeadersInit; status?: number; statusText?: string; }`
- **Required:** No

An optional configuration object with the following properties:

#### [`revalidate`](reload.md#revalidate)

- **Type:** `string | string[]`
- **Required:** No

A query key or an array of query keys to revalidate.

#### [`headers`](reload.md#headers)

- **Type:** `HeadersInit`
- **Required:** No

An object containing any headers to be sent with the response.

#### [`status`](reload.md#status)

- **Type:** `number`
- **Required:** No

The HTTP status code of the response. Defaults to [`200 OK`](http://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200).

#### [`statusText`](reload.md#statustext)

- **Type:** `string`
- **Required:** No

The status text associated with the status code.

* * *

## [Examples](reload.md#examples)

### [Basic Usage](reload.md#basic-usage)

```


import { action, reload } from "@solidjs/router";




const savePreferencesAction = action(async () => {

  // ... Saves the user preferences.




  // Only revalidate the "userPreferences" query.

  return reload({ revalidate: ["userPreferences"] });

}, "savePreferences");
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fresponse-helpers%2Freload.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fresponse-helpers%2Freload)

Previous[← redirect](redirect.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [init](#init)
5. [Examples](#examples)
   
   1. [Basic Usage](#basic-usage)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/response-helpers/reload.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fresponse-helpers%2Freload.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fresponse-helpers%2Freload)