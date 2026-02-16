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

# action

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/action.mdx)

The `action` function wraps an asynchronous function and returns an [action](../../concepts/actions.md).

When an action is triggered, it creates a submission object that tracks its execution status. This state can be accessed with the [`useSubmission`](use-submission.md) and [`useSubmissions`](use-submissions.md) primitives.

After an action completed successfully, all queries active in the same page are revalidated, unless revalidation is configured using [response helpers](../../concepts/actions.md#managing-navigation-and-revalidation).

* * *

## [Import](action.md#import)

```


import { action } from "@solidjs/router";
```

* * *

## [Type](action.md#type)

```


function action<T extends Array<any>, U = void>(

  fn: (...args: T) => Promise<U>,

  name?: string

): Action<T, U>;




function action<T extends Array<any>, U = void>(

  fn: (...args: T) => Promise<U>,

  options?: { name?: string; onComplete?: (s: Submission<T, U>) => void }

): Action<T, U>;




function action<T extends Array<any>, U = void>(

  fn: (...args: T) => Promise<U>,

  options:

    | string

    | { name?: string; onComplete?: (s: Submission<T, U>) => void } = {}

): Action<T, U>;
```

* * *

## [Parameters](action.md#parameters)

### [`handler`](action.md#handler)

- **Type:** `(...args: T) => Promise<U>`
- **Required:** Yes

An asynchronous function that performs the action's logic. When the action is used with a [`<form>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form), the function receives a [`FormData` object](https://developer.mozilla.org/en-US/docs/Web/API/FormData) as its first parameter.

### [`options`](action.md#options)

- **Type:** `string | { name?: string; onComplete?: (s: Submission<T, U>) => void }`
- **Required**: No

A unique string used to identify the action in Server-Side Rendering (SSR) environments. This is required when using the action with a `<form>` element.

Alternatively, a configuration object can be passed with the following properties.

#### [`name`](action.md#name)

- **Type:** `string`
- **Required:** No

The unique string to identify the action in SSR environments. Required for `<form>` usage.

#### [`onComplete` (optional):](action.md#oncomplete-optional)

- **Type:** `(s: Submission<T, U>) => void`
- **Required:** No

A function that runs after the action completes. It receives a submission object as its parameter.

* * *

## [Return value](action.md#return-value)

`action` returns an action with the following properties.

### [`with`](action.md#with)

A method that wraps the original action and returns a new one. When this new action is triggered, the arguments passed to `with` are forwarded to the original action. If this new action is used with a `<form>`, the `FormData` object is passed as the last parameter, after any other forwarded parameters.

* * *

## [Examples](action.md#examples)

### [Form submission](action.md#form-submission)

```


import { action } from "@solidjs/router";




const addTodoAction = action(async (formData: FormData) => {

  // Adds a new todo to the server.

}, "addTodo");




function TodoForm() {

  return (

    <form action={addTodoAction} method="post">

      <input name="name" />

      <button>Add todo</button>

    </form>

  );

}
```

### [Passing additional arguments](action.md#passing-additional-arguments)

```


import { action } from "@solidjs/router";




const addTodoAction = action(async (userId: number, formData: FormData) => {

  // ... Adds a new todo for a specific user.

}, "addTodo");




function TodoForm() {

  const userId = 1;

  return (

    <form action={addTodoAction.with(userId)} method="post">

      <input name="name" />

      <button>Add todo</button>

    </form>

  );

}
```

### [Triggering actions programmatically](action.md#triggering-actions-programmatically)

```


import { action, useAction } from "@solidjs/router";




const markDoneAction = action(async (id: string) => {

  // ... Marks a todo as done on the server.

});




function NotificationItem(props: { id: string }) {

  const markDone = useAction(markDoneAction);




  return <button onClick={() => markDone(props.id)}>Mark as done</button>;

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Faction.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Faction)

Previous[← Router](../components/router.md)

Next[cache →](cache.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [handler](#handler)
   2. [options](#options)
5. [Return value](#return-value)
   
   1. [with](#with)
6. [Examples](#examples)
   
   1. [Form submission](#form-submission)
   2. [Passing additional arguments](#passing-additional-arguments)
   3. [Triggering actions programmatically](#triggering-actions-programmatically)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/action.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fdata-apis%2Faction.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fdata-apis%2Faction)