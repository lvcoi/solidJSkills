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

# useSubmission

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/use-submission.mdx)

The `useSubmission` primitive returns the state of the *most recent* submission for a given [action](../../concepts/actions.md).

* * *

## [Import](use-submission.md#import)

```


import { useSubmission } from "@solidjs/router";
```

* * *

## [Type](use-submission.md#type)

```


function useSubmission<T extends Array<any>, U, V>(

  fn: Action<T, U, V>,

  filter?: (input: V) => boolean

): Submission<T, NarrowResponse<U>> | SubmissionStub;
```

* * *

## [Parameters](use-submission.md#parameters)

### [`action`](use-submission.md#action)

- **Type:** `Action<T, U, V>`
- **Required:** Yes

The action to track.

### [`filter`](use-submission.md#filter)

- **Type:** `(input: V) => boolean`
- **Required:** No

A function that filters submissions. It is executed for each submission in the order of creation. It receives an array of the action's inputs as a parameter and must return `true` to select the submission or `false` otherwise. The first submission that passes the filter is returned by `useSubmission`.

* * *

## [Return value](use-submission.md#return-value)

`useSubmission` returns a reactive object with the following properties:

### [`input`](use-submission.md#input)

A reactive value representing the input data of the action.

### [`result`](use-submission.md#result)

A reactive value representing the successful return value of the action.

### [`error`](use-submission.md#error)

A reactive value representing any error thrown by the action.

### [`pending`](use-submission.md#pending)

A reactive boolean indicating if the action is currently running.

### [`clear`](use-submission.md#clear)

A function to clear the submission's state.

### [`retry`](use-submission.md#retry)

A function to re-execute the submission with the same input.

* * *

## [Examples](use-submission.md#examples)

### [Basic usage](use-submission.md#basic-usage)

```


import { Show } from "solid-js";

import { action, useSubmission } from "@solidjs/router";




const addTodoAction = action(async (formData: FormData) => {

  const name = formData.get("name")?.toString();




  if (!name || name.length <= 2) {

    return { ok: false, message: "Name must be larger than 2 characters." };

  }




  // ... Sends the todo data to the server.




  return { ok: true };

}, "addTodo");




function AddTodoForm() {

  const submission = useSubmission(addTodoAction);




  return (

    <form action={addTodoAction} method="post">

      <input name="name" />

      <button type="submit">{submission.pending ? "Adding..." : "Add"}</button>

      <Show when={!submission.result?.ok}>

        <div>

          <p>{submission.result.message}</p>

          <button onClick={() => submission.clear()}>Clear</button>

          <button onClick={() => submission.retry()}>Retry</button>

        </div>

      </Show>

    </form>

  );

}
```

### [Filtering submissions](use-submission.md#filtering-submissions)

```


import { useSubmission } from "@solidjs/router";




const addTodoAction = action(async (formData: FormData) => {

  // ... Sends the todo data to the server.

}, "addTodo");




function LatestTodo() {

  const latestValidSubmission = useSubmission(

    addTodoAction,

    ([formData]: [FormData]) => {

      const name = formData.get("name")?.toString();

      return name && name.length > 2;

    }

  );




  return <p>Latest valid submission: {latestValidSubmission.result}</p>;

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Fuse-submission.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Fuse-submission)

Previous[← useAction](use-action.md)

Next[useSubmissions →](use-submissions.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [action](#action)
   2. [filter](#filter)
5. [Return value](#return-value)
   
   1. [input](#input)
   2. [result](#result)
   3. [error](#error)
   4. [pending](#pending)
   5. [clear](#clear)
   6. [retry](#retry)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)
   2. [Filtering submissions](#filtering-submissions)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/use-submission.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Fuse-submission.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Fuse-submission)