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

# useSubmissions

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/use-submissions.mdx)

The `useSubmissions` primitive returns the state of all submissions for a given [action](../../concepts/actions.md).

* * *

## [Import](use-submissions.md#import)

```


import { useSubmissions } from "@solidjs/router";
```

* * *

## [Type](use-submissions.md#type)

```


function useSubmissions<T extends Array<any>, U, V>(

  fn: Action<T, U, V>,

  filter?: (input: V) => boolean

): Submission<T, NarrowResponse<U>>[] & {

    pending: boolean;

};
```

* * *

## [Parameters](use-submissions.md#parameters)

### [`action`](use-submissions.md#action)

- **Type:** `Action<T, U, V>`
- **Required:** Yes

The action to track.

### [`filter`](use-submissions.md#filter)

- **Type:** `(input: V) => boolean`
- **Required:** No

A function that filters submissions. It is executed for each submission in the order of creation. It receives an array of the action's inputs as a parameter and must return `true` to select the submission or `false` otherwise.

* * *

## [Return value](use-submissions.md#return-value)

`useSubmissions` returns a reactive array of submission objects. Each submission object has the following properties:

### [`input`](use-submissions.md#input)

The reactive input data of the action.

### [`result`](use-submissions.md#result)

A reactive value representing the successful return value of the action.

### [`error`](use-submissions.md#error)

A reactive value for any error thrown by the action.

### [`pending`](use-submissions.md#pending)

A reactive boolean indicating if the action is currently running.

### [`clear`](use-submissions.md#clear)

A function to clear the submission's state.

### [`retry`](use-submissions.md#retry)

A function to re-execute the submission with the same input.

* * *

## [Examples](use-submissions.md#examples)

### [Basic usage](use-submissions.md#basic-usage)

```


import { For, Show } from "solid-js";

import { action, useSubmissions } from "@solidjs/router";




const addTodoAction = action(async (formData: FormData) => {

  // ... Sends the todo data to the server.

}, "addTodo");




function AddTodoForm() {

  const submissions = useSubmissions(addTodoAction);




  return (

    <div>

      <form action={addTodoAction} method="post">

        <input name="name" />

        <button type="submit">Add</button>

      </form>

      <For each={submissions}>

        {(submission) => (

          <div>

            <span>Adding "{submission.input[0].get("name")?.toString()}"</span>

            <Show when={submission.pending}>

              <span> (pending...)</span>

            </Show>

            <Show when={submission.result?.ok}>

              <span> (completed)</span>

            </Show>

            <Show when={!submission.result?.ok}>

              <span>{` (Error: ${submission.result?.message})`}</span>

              <button onClick={() => submission.retry()}>Retry</button>

            </Show>

          </div>

        )}

      </For>

    </div>

  );

}
```

### [Filtering submissions](use-submissions.md#filtering-submissions)

```


import { useSubmissions } from "@solidjs/router";




const addTodoAction = action(async (formData: FormData) => {

  // ... Sends the todo data to the server.

}, "addTodo");




function FailedTodos() {

  const failedSubmissions = useSubmissions(

    addTodoAction,

    ([formData]: [FormData]) => {

      // Filters for submissions that failed a client-side validation

      const name = formData.get("name")?.toString() ?? "";

      return name.length <= 2;

    }

  );




  return (

    <div>

      <p>Failed submissions:</p>

      <For each={failedSubmissions}>

        {(submission) => (

          <div>

            <span>{submission.input[0].get("name")?.toString()}</span>

            <button onClick={() => submission.retry()}>Retry</button>

          </div>

        )}

      </For>

    </div>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Fuse-submissions.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Fuse-submissions)

Previous[← useSubmission](use-submission.md)

Next[preload →](../preload-functions/preload.md)

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

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/use-submissions.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Fuse-submissions.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Fuse-submissions)