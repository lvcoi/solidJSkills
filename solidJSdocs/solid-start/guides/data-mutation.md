[**Solid**Start](..)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](..)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid-start)[](https://discord.com/invite/solidjs)

LearnReference

- [Overview](..)
- [Getting started](../getting-started.md)
- Building your application
  
  - [Routing](../building-your-application/routing.md)
  - [API routes](../building-your-application/api-routes.md)
  - [CSS and styling](../building-your-application/css-and-styling.md)
  - [Data fetching](../building-your-application/data-fetching.md)
  - [Data mutation](../building-your-application/data-mutation.md)
  - [Head and metadata](../building-your-application/head-and-metadata.md)
  - [Route Pre-rendering](../building-your-application/route-prerendering.md)
  - [Static assets](../building-your-application/static-assets.md)
- Advanced
  
  - [Middleware](../advanced/middleware.md)
  - [Sessions](../advanced/session.md)
  - [Request events](../advanced/request-events.md)
  - [Returning responses](../advanced/return-responses.md)
  - [Auth](../advanced/auth.md)
  - [WebSocket endpoint](../advanced/websocket.md)
- Guides
  
  - [Security](security.md)
  - [Data fetching](data-fetching.md)
  - [Data mutation](data-mutation.md)
  - [Service workers](service-workers.md)

Guides

# Data mutation

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/data-mutation.mdx)

This guide provides practical examples of using actions to mutate data in SolidStart.

* * *

## [Handling form submission](data-mutation.md#handling-form-submission)

To handle [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) submissions with an action:

1. Ensure the action has a unique name. See the [Action API reference](../../solid-router/reference/data-apis/action.md#notes-of-form-implementation-and-ssr) for more information.
2. Pass the action to the `<form>` element using the `action` prop.
3. Ensure the `<form>` element uses the `post` method for submission.
4. Use the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData) object in the action to extract field data using the native `FormData` methods.

TypeScriptJavaScript

```


// src/routes/index.tsx

import { action } from "@solidjs/router";




const addPost = action(async (formData: FormData) => {

  const title = formData.get("title") as string;

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

}, "addPost");




export default function Page() {

  return (

    <form action={addPost} method="post">

      <input name="title" />

      <button>Add Post</button>

    </form>

  );

}
```

```


// src/routes/index.jsx

import { action } from "@solidjs/router";




const addPost = action(async (formData) => {

  const title = formData.get("title");

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

}, "addPost");




export default function Page() {

  return (

    <form action={addPost} method="post">

      <input name="title" />

      <button>Add Post</button>

    </form>

  );

}
```

* * *

## [Passing additional arguments](data-mutation.md#passing-additional-arguments)

To pass additional arguments to your action, use the `with` method:

TypeScriptJavaScript

```


// src/routes/index.tsx

import { action } from "@solidjs/router";




const addPost = action(async (userId: number, formData: FormData) => {

  const title = formData.get("title") as string;

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ userId, title }),

  });

}, "addPost");




export default function Page() {

  const userId = 1;

  return (

    <form action={addPost.with(userId)} method="post">

      <input name="title" />

      <button>Add Post</button>

    </form>

  );

}
```

```


// src/routes/index.jsx

import { action } from "@solidjs/router";




const addPost = action(async (userId, formData) => {

  const title = formData.get("title");

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ userId, title }),

  });

}, "addPost");




export default function Page() {

  const userId = 1;

  return (

    <form action={addPost.with(userId)} method="post">

      <input name="title" />

      <button>Add Post</button>

    </form>

  );

}
```

* * *

## [Showing pending UI](data-mutation.md#showing-pending-ui)

To display a pending UI during action execution:

1. Import [`useSubmission`](../../solid-router/reference/data-apis/use-submission.md) from `@solidjs/router`.
2. Call `useSubmission` with your action, and use the returned `pending` property to display pending UI.

TypeScriptJavaScript

```


// src/routes/index.tsx

import { action, useSubmission } from "@solidjs/router";




const addPost = action(async (formData: FormData) => {

  const title = formData.get("title") as string;

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

}, "addPost");




export default function Page() {

  const submission = useSubmission(addPost);

  return (

    <form action={addPost} method="post">

      <input name="title" />

      <button disabled={submission.pending}>

        {submission.pending ? "Adding..." : "Add Post"}

      </button>

    </form>

  );

}
```

```


// src/routes/index.jsx

import { action, useSubmission } from "@solidjs/router";




const addPost = action(async (formData) => {

  const title = formData.get("title");

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

}, "addPost");




export default function Page() {

  const submission = useSubmission(addPost);

  return (

    <form action={addPost} method="post">

      <input name="title" />

      <button disabled={submission.pending}>

        {submission.pending ? "Adding..." : "Add Post"}

      </button>

    </form>

  );

}
```

* * *

## [Handling errors](data-mutation.md#handling-errors)

To handle errors that occur within an action:

1. Import [`useSubmission`](../../solid-router/reference/data-apis/use-submission.md) from `@solidjs/router`.
2. Call `useSubmission` with your action, and use the returned `error` property to handle the error.

TypeScriptJavaScript

```


// src/routes/index.tsx

import { Show } from "solid-js";

import { action, useSubmission } from "@solidjs/router";




const addPost = action(async (formData: FormData) => {

  const title = formData.get("title") as string;

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

}, "addPost");




export default function Page() {

  const submission = useSubmission(addPost);

  return (

    <form action={addPost} method="post">

      <Show when={submission.error}>

        <p>{submission.error.message}</p>

      </Show>

      <input name="title" />

      <button>Add Post</button>

    </form>

  );

}
```

```


// src/routes/index.jsx

import { Show } from "solid-js";

import { action, useSubmission } from "@solidjs/router";




const addPost = action(async (formData) => {

  const title = formData.get("title");

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

}, "addPost");




export default function Page() {

  const submission = useSubmission(addPost);

  return (

    <form action={addPost} method="post">

      <Show when={submission.error}>

        <p>{submission.error.message}</p>

      </Show>

      <input name="title" />

      <button>Add Post</button>

    </form>

  );

}
```

* * *

## [Validating form fields](data-mutation.md#validating-form-fields)

To validate form fields in an action:

1. Add validation logic in your action and return validation errors if the data is invalid.
2. Import [`useSubmission`](../../solid-router/reference/data-apis/use-submission.md) from `@solidjs/router`.
3. Call `useSubmission` with your action, and use the returned `result` property to handle the errors.

TypeScriptJavaScript

```


// src/routes/index.tsx

import { Show } from "solid-js";

import { action, useSubmission } from "@solidjs/router";




const addPost = action(async (formData: FormData) => {

  const title = formData.get("title") as string;

  if (!title || title.length < 2) {

    return {

      error: "Title must be at least 2 characters",

    };

  }

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

}, "addPost");




export default function Page() {

  const submission = useSubmission(addPost);

  return (

    <form action={addPost} method="post">

      <input name="title" />

      <Show when={submission.result?.error}>

        <p>{submission.result?.error}</p>

      </Show>

      <button>Add Post</button>

    </form>

  );

}
```

```


// src/routes/index.jsx

import { Show } from "solid-js";

import { action, useSubmission } from "@solidjs/router";




const addPost = action(async (formData) => {

  const title = formData.get("title");

  if (!title || title.length < 2) {

    return {

      error: "Title must be at least 2 characters",

    };

  }

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

}, "addPost");




export default function Page() {

  const submission = useSubmission(addPost);

  return (

    <form action={addPost} method="post">

      <input name="title" />

      <Show when={submission.result?.error}>

        <p>{submission.result?.error}</p>

      </Show>

      <button>Add Post</button>

    </form>

  );

}
```

* * *

## [Showing optimistic UI](data-mutation.md#showing-optimistic-ui)

To update the UI before the server responds:

1. Import [`useSubmission`](../../solid-router/reference/data-apis/use-submission.md) from `@solidjs/router`.
2. Call `useSubmission` with your action, and use the returned `pending` and `input` properties to display optimistic UI.

TypeScriptJavaScript

```


// src/routes/index.tsx

import { For, Show } from "solid-js";

import { action, useSubmission, query, createAsync } from "@solidjs/router";




const getPosts = query(async () => {

  const posts = await fetch("https://my-api.com/blog");

  return await posts.json();

}, "posts");




const addPost = action(async (formData: FormData) => {

  const title = formData.get("title");

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

}, "addPost");




export default function Page() {

  const posts = createAsync(() => getPosts());

  const submission = useSubmission(addPost);

  return (

    <main>

      <form action={addPost} method="post">

        <input name="title" />

        <button>Add Post</button>

      </form>

      <ul>

        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

        <Show when={submission.pending}>

          {submission.input?.[0]?.get("title")?.toString()}

        </Show>

      </ul>

    </main>

  );

}
```

```


// src/routes/index.jsx

import { For, Show } from "solid-js";

import { action, useSubmission, query, createAsync } from "@solidjs/router";




const getPosts = query(async () => {

  const posts = await fetch("https://my-api.com/blog");

  return await posts.json();

}, "posts");




const addPost = action(async (formData) => {

  const title = formData.get("title");

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

}, "addPost");




export default function Page() {

  const posts = createAsync(() => getPosts());

  const submission = useSubmission(addPost);

  return (

    <main>

      <form action={addPost} method="post">

        <input name="title" />

        <button>Add Post</button>

      </form>

      <ul>

        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>

        <Show when={submission.pending}>

          {submission.input?.[0]?.get("title")?.toString()}

        </Show>

      </ul>

    </main>

  );

}
```

Multiple Submissions

If you want to display optimistic UI for multiple concurrent submissions, you can use the [`useSubmissions`](../../solid-router/reference/data-apis/use-submissions.md) primitive.

* * *

## [Redirecting](data-mutation.md#redirecting)

To redirect users to a different route within an action:

1. Import [`redirect`](../../solid-router/reference/response-helpers/redirect.md) from `@solidjs/router`.
2. Call `redirect` with the route you want to navigate to, and throw its response.

TypeScriptJavaScript

```


// src/routes/index.tsx

import { action, redirect } from "@solidjs/router";




const addPost = action(async (formData: FormData) => {

  const title = formData.get("title") as string;

  const response = await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

  const post = await response.json();

  throw redirect(`/posts/${post.id}`);

}, "addPost");




export default function Page() {

  return (

    <form action={addPost} method="post">

      <input name="title" />

      <button>Add Post</button>

    </form>

  );

}
```

```


// src/routes/index.jsx

import { action, redirect } from "@solidjs/router";




const addPost = action(async (formData) => {

  const title = formData.get("title");

  const response = await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

  const post = await response.json();

  throw redirect(`/posts/${post.id}`);

}, "addPost");




export default function Page() {

  return (

    <form action={addPost} method="post">

      <input name="title" />

      <button>Add Post</button>

    </form>

  );

}
```

* * *

## [Using a database or an ORM](data-mutation.md#using-a-database-or-an-orm)

To safely interact with your database or ORM in an action, ensure it's server-only by adding [`"use server"`](../reference/server/use-server.md) as the first line of your action:

TypeScriptJavaScript

```


// src/routes/index.tsx

import { action } from "@solidjs/router";

import { db } from "~/lib/db";




const addPost = action(async (formData: FormData) => {

  "use server";

  const title = formData.get("title") as string;

  await db.insert("posts").values({ title });

}, "addPost");




export default function Page() {

  return (

    <form action={addPost} method="post">

      <input name="title" />

      <button>Add Post</button>

    </form>

  );

}
```

```


// src/routes/index.jsx

import { action } from "@solidjs/router";

import { db } from "~/lib/db";




const addPost = action(async (formData) => {

  "use server";

  const title = formData.get("title");

  await db.insert("posts").values({ title });

}, "addPost");




export default function Page() {

  return (

    <form action={addPost} method="post">

      <input name="title" />

      <button>Add Post</button>

    </form>

  );

}
```

* * *

## [Triggering an action programmatically](data-mutation.md#triggering-an-action-programmatically)

To programmatically trigger an action:

1. Import [`useAction`](../../solid-router/reference/data-apis/use-action.md) from `@solidjs/router`.
2. Call `useAction` with your action, and use the returned function to trigger the action.

TypeScriptJavaScript

```


// src/routes/index.tsx

import { createSignal } from "solid-js";

import { action, useAction } from "@solidjs/router";




const addPost = action(async (title: string) => {

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

}, "addPost");




export default function Page() {

  const [title, setTitle] = createSignal("");

  const addPostAction = useAction(addPost);

  return (

    <div>

      <input value={title()} onInput={(e) => setTitle(e.target.value)} />

      <button onClick={() => addPostAction(title())}>Add Post</button>

    </div>

  );

}
```

```


// src/routes/index.jsx

import { createSignal } from "solid-js";

import { action, useAction } from "@solidjs/router";




const addPost = action(async (title) => {

  await fetch("https://my-api.com/posts", {

    method: "POST",

    body: JSON.stringify({ title }),

  });

}, "addPost");




export default function Page() {

  const [title, setTitle] = createSignal("");

  const addPostAction = useAction(addPost);

  return (

    <div>

      <input value={title()} onInput={(e) => setTitle(e.target.value)} />

      <button onClick={() => addPostAction(title())}>Add Post</button>

    </div>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fguides%2Fdata-mutation.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fguides%2Fdata-mutation)

Previous[← Data fetching](data-fetching.md)

Next[Service workers →](service-workers.md)

On this page

01. [Overview](#_top)
02. [Handling form submission](#handling-form-submission)
03. [Passing additional arguments](#passing-additional-arguments)
04. [Showing pending UI](#showing-pending-ui)
05. [Handling errors](#handling-errors)
06. [Validating form fields](#validating-form-fields)
07. [Showing optimistic UI](#showing-optimistic-ui)
08. [Redirecting](#redirecting)
09. [Using a database or an ORM](#using-a-database-or-an-orm)
10. [Triggering an action programmatically](#triggering-an-action-programmatically)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/data-mutation.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Fguides%2Fdata-mutation.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Fguides%2Fdata-mutation)