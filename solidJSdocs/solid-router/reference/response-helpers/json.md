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

# json

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/response-helpers/json.mdx)

The `json` function returns a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object that contains the provided data. It is intended for sending JSON data from a [query](../data-apis/query.md) or [action](../../concepts/actions.md) while also allowing configuration of query revalidation.

This works both in client and server (e.g., using a server function) environments.

* * *

## [Import](json.md#import)

```


import { json } from "@solidjs/router";
```

* * *

## [Type](json.md#type)

```


function json<T>(

  data: T,

  init: {

    revalidate?: string | string[];

    headers?: HeadersInit;

    status?: number;

    statusText?: string;

  } = {}

): CustomResponse<T>;
```

* * *

## [Parameters](json.md#parameters)

### [`data`](json.md#data)

- **Type:** `T`
- **Required:** Yes

The data to be serialized as JSON in the response body. It must be a value that can be serialized with [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

### [`init`](json.md#init)

- **Type:** `{ revalidate?: string | string[]; headers?: HeadersInit; status?: number; statusText?: string; }`
- **Required:** No

An optional configuration object with the following properties:

#### [`revalidate`](json.md#revalidate)

- **Type:** `string | string[]`
- **Required:** No

A query key or an array of query keys to revalidate. Passing an empty array (`[]`) disables query revalidation entirely.

#### [`headers`](json.md#headers)

- **Type:** `HeadersInit`
- **Required:** No

An object containing any headers to be sent with the response.

#### [`status`](json.md#status)

- **Type:** `number`
- **Required:** No

The HTTP status code of the response. Defaults to [`200 OK`](http://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200).

#### [`statusText`](json.md#statustext)

- **Type:** `string`
- **Required:** No

The status text associated with the status code.

* * *

## [Examples](json.md#examples)

### [Invalidating Data After a Mutation](json.md#invalidating-data-after-a-mutation)

```


import { For } from "solid-js";

import { query, action, json, createAsync } from "@solidjs/router";




const getCurrentUserQuery = query(async () => {

  return await fetch("/api/me").then((response) => response.json());

}, "currentUser");




const getPostsQuery = query(async () => {

  return await fetch("/api/posts").then((response) => response.json());

}, "posts");




const createPostAction = action(async (formData: FormData) => {

  const title = formData.get("title")?.toString();

  const newPost = await fetch("/api/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  }).then((response) => response.json());




  // Only revalidate the "posts" query.

  return json(newPost, { revalidate: "posts" });

}, "createPost");




function Posts() {

  const currentUser = createAsync(() => getCurrentUserQuery());

  const posts = createAsync(() => getPostsQuery());




  return (

    <div>

      <p>Welcome back {currentUser()?.name}</p>

      <ul>

        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

      </ul>

      <form action={createPostAction} method="post">

        <input name="title" />

        <button>Create Post</button>

      </form>

    </div>

  );

}
```

* * *

## [Related](json.md#related)

- [`query`](../data-apis/query.md)
- [`action`](../data-apis/action.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fresponse-helpers%2Fjson.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fresponse-helpers%2Fjson)

Previous[← useSearchParams](../primitives/use-search-params.md)

Next[redirect →](redirect.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [data](#data)
   2. [init](#init)
5. [Examples](#examples)
   
   1. [Invalidating Data After a Mutation](#invalidating-data-after-a-mutation)
6. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/response-helpers/json.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fresponse-helpers%2Fjson.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fresponse-helpers%2Fjson)