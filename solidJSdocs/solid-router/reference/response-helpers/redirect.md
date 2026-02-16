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

# redirect

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/response-helpers/redirect.mdx)

The `redirect` function returns a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object that instructs the router to navigate to a different route when returned or thrown from a [query](../data-apis/query.md) or [action](../../concepts/actions.md).

This works both in client and server (e.g., using a server function) environments.

* * *

## [Import](redirect.md#import)

```


import { redirect } from "@solidjs/router";
```

* * *

## [Type](redirect.md#type)

```


function redirect(

  url: string,

  init?:

    | number

    | {

        revalidate?: string | string[];

        headers?: HeadersInit;

        status?: number;

        statusText?: string;

      }

): CustomResponse<never>;
```

* * *

## [Parameters](redirect.md#parameters)

### [`url`](redirect.md#url)

- **Type:** `string`
- **Required:** Yes

The absolute or relative URL to which the redirect should occur.

### [`init`](redirect.md#init)

- **Type:** `number | { revalidate?: string | string[]; headers?: HeadersInit; status?: number; statusText?: string; }`
- **Required:** No

Either a number representing the status code or a configuration object with the following properties:

#### [`revalidate`](redirect.md#revalidate)

- **Type:** `string | string[]`
- **Required:** No

A query key or an array of query keys to revalidate on the destination route.

#### [`status`](redirect.md#status)

- **Type:** `number`
- **Required:** No

The HTTP status code for the redirect. Defaults to [`302 Found`)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/302).

* * *

## [Examples](redirect.md#examples)

### [Basic Usage](redirect.md#basic-usage)

```


import { query, redirect } from "@solidjs/router";




const getCurrentUserQuery = query(async () => {

  const response = await fetch("/api/me");




  if (response.status === 401) {

    return redirect("/login");

  }




  return await response.json();

}, "currentUser");
```

### [Configuring Query Revalidation](redirect.md#configuring-query-revalidation)

```


import { action, redirect } from "@solidjs/router";




const loginAction = action(async (formData: FormData) => {

  const username = formData.get("username")?.toString();

  const password = formData.get("password")?.toString();




  await fetch("/api/login", {

    method: "POST",

    body: JSON.stringify({ username, password }),

  }).then((response) => response.json());




  return redirect("/users", { revalidate: ["currentUser"] });

}, "login");
```

* * *

## [Related](redirect.md#related)

- [`query`](../data-apis/query.md)
- [`action`](../data-apis/action.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fresponse-helpers%2Fredirect.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fresponse-helpers%2Fredirect)

Previous[← json](json.md)

Next[reload →](reload.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [url](#url)
   2. [init](#init)
5. [Examples](#examples)
   
   1. [Basic Usage](#basic-usage)
   2. [Configuring Query Revalidation](#configuring-query-revalidation)
6. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/response-helpers/redirect.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fresponse-helpers%2Fredirect.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fresponse-helpers%2Fredirect)