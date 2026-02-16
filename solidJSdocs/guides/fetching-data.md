[**Solid**](../index.md)

- [Core](../index.md)
- [Router](../solid-router)
- [SolidStart](../solid-start)
- [Meta](../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- [Quick start](../quick-start.md)
- Concepts
  
  - [Intro to reactivity](../concepts/intro-to-reactivity.md)
  - [Understanding JSX](../concepts/understanding-jsx.md)
  - Components
    
    - [Basics](../concepts/components/basics.md)
    - [Class and style](../concepts/components/class-style.md)
    - [Event handlers](../concepts/components/event-handlers.md)
    - [Props](../concepts/components/props.md)
  - [Signals](../concepts/signals.md)
  - Control flow
    
    - [Conditional rendering](../concepts/control-flow/conditional-rendering.md)
    - [Dynamic](../concepts/control-flow/dynamic.md)
    - [List rendering](../concepts/control-flow/list-rendering.md)
    - [Portal](../concepts/control-flow/portal.md)
    - [Error boundary](../concepts/control-flow/error-boundary.md)
  - [Effects](../concepts/effects.md)
  - Derived values
    
    - [Derived signals](../concepts/derived-values/derived-signals.md)
    - [Memos](../concepts/derived-values/memos.md)
  - [Context](../concepts/context.md)
  - [Stores](../concepts/stores.md)
  - [Refs](../concepts/refs.md)
- Advanced concepts
  
  - [Fine-grained reactivity](../advanced-concepts/fine-grained-reactivity.md)
- Guides
  
  - [Styling your components](styling-your-components.md)
  - [State management](state-management.md)
  - [Routing & navigation](routing-and-navigation.md)
  - [Complex state management](complex-state-management.md)
  - [Fetching data](fetching-data.md)
  - [Testing](testing.md)
  - [Deploy your app](deploying-your-app.md)
- Configuration
  
  - [Environment variables](../configuration/environment-variables.md)
  - [TypeScript](../configuration/typescript.md)

Guides

# Fetching data

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/fetching-data.mdx)

For most modern web applications, data fetching is a common task. Solid has a built-in utility, `createResource` , that was created to simplify data fetching.

* * *

## [What is `createResource` ?](fetching-data.md#what-is-createresource-)

`createResource` is a specialized [signal](../concepts/signals.md) designed specifically for managing asynchronous data fetching. It wraps around the async operations, providing a way to handle various states: loading, success, and error.

This function is non-blocking, meaning that `createResource` guarantees that the application remains responsive, even during the retrieval of information. Because of this, common pitfalls of traditional async handling, such as unresponsive UIs during data fetching can be avoided.

* * *

## [Using `createResource`](fetching-data.md#using-createresource)

`createResource` requires a function that returns a promise as its argument. Upon the call, `createResource` returns a signal which has reactive properties like loading, error, latest, etc. These properties can be used to conditionally render JSX based on the current reactive state.

The fetcher function that is created makes a call to get a user, which is then passed in as an argument to `createResource`.

The signal returned from the `createResource` provides the properties that can assist with conditional rendering based on the current reactive state:

- `state`: The current status of the operation (`unresolved`, `pending`, `ready`, `refreshing`, or `errored`).
- `loading`: Indicates that the operation is currently in progress via a `boolean`.
- `error`: If the operation fails for any reason, this property will contain information about this error. It may be a string with an error message, or an object with more detailed information.
- `latest`: The most recent data or result returned from the operation.

When there is a change in the source signal, an internal fetch process is triggered to retrieve new data based on this change.

```


import { createSignal, createResource, Switch, Match, Show } from "solid-js";




const fetchUser = async (id) => {

  const response = await fetch(`https://swapi.dev/api/people/${id}/`);

  return response.json();

}




function App() {

  const [userId, setUserId] = createSignal();

  const [user] = createResource(userId, fetchUser);




  return (

    <div>

      <input

        type="number"

        min="1"

        placeholder="Enter Numeric Id"

        onInput={(e) => setUserId(e.currentTarget.value)}

      />

      <Show when={user.loading}>

        <p>Loading...</p>

      </Show>

      <Switch>

        <Match when={user.error}>

          <span>Error: {user.error}</span>

        </Match>

        <Match when={user()}>

          <div>{JSON.stringify(user())}</div>

        </Match>

      </Switch>

    </div>

  );

}
```

Whenever the signal value, `userId`, changes, the internal fetch method `fetchUser` gets triggered. The properties of the `user` resource allow for conditional rendering based on the different states of the fetch process.

The `Switch/Match` construct provides one way to manage these conditions. When the fetch succeeds and user data is retrieved, the `user()` condition becomes active, and its related block executes. However, if there's an error while fetching, the `user.error` block becomes `true`, leading to its corresponding `Match` block being shown.

tip

If you anticipate errors, you may want to wrap `createResource` in an [ErrorBoundary](../reference/components/error-boundary.md).

In addition to the `error` property, the `loading` property offers a way to display a loading state to the user during the fetch operation.

* * *

## [Calling multiple async events](fetching-data.md#calling-multiple-async-events)

Although you can use `createResource` independently, Solid provides an alternative method for synchronizing the display of multiple asynchronous events. `Suspense` is a component in Solid designed to act as a boundary. It allows you to display a fallback placeholder while waiting for all asynchronous events to resolve, preventing the display of partially loaded content:

```


import { createSignal, createResource, Switch, Match, Suspense } from "solid-js";




const fetchUser = async (id) => {

  const response = await fetch(`https://swapi.dev/api/people/${id}/`);

  return response.json();

}




function App() {

  const [userId, setUserId] = createSignal();

  const [user] = createResource(userId, fetchUser);




  return (

    <div>

    <input

      type="number"

      min="1"

      placeholder="Enter Numeric Id"

      onInput={(e) => setUserId(e.currentTarget.value)}

    />

      <Suspense fallback={<div>Loading...</div>}>

        <Switch>

          <Match when={user.error}>

            <span>Error: {user.error.message}</span>

          </Match>

          <Match when={user()}>

            <div>{JSON.stringify(user())}</div>

          </Match>

        </Switch>

      </Suspense>

    </div>

  );

}
```

`Suspense` has the ability to identify asynchronous reads within its descendants and act accordingly. This feature helps to remove any intermediate components that may otherwise be displayed during partial loading states. Additionally, you can nest as many components as needed within `Suspense` but only the closest ancestor will switch to the `fallback` state when a loading state is detected.

[View on Eraser![](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9/preview?elements=kMt6qc0qF9MlG2K9P28pOQ&type=embed)](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=kMt6qc0qF9MlG2K9P28pOQ)

* * *

## [Dynamic data handling](fetching-data.md#dynamic-data-handling)

With the second output of `createResource`, there are 2 powerful methods designed to enhance and simplify some complex aspects of data management:

### [`mutate`](fetching-data.md#mutate)

In situations where immediate feedback or responsiveness is important, the `mutate` method offers "optimistic mutations." These mutations provide instant feedback, even while background processes, such as server confirmations, are still in progress.

This functionality is particularly valuable in applications like task lists. For example, when users input a new task and click the `Add` button, the list will refresh immediately, regardless of the ongoing data communication with the server.

```


import { For, createResource } from "solid-js"




function TodoList() {

  const [tasks, { mutate }] = createResource(fetchTasksFromServer);




  return (

    <>

      <ul>

        <For each={tasks()}>

          {(task) => (

            <li>{task.name}</li>

          )}

        </For>

      </ul>

      <button

        onClick={() => {

          mutate((todos) => [...todos, "do new task"]); // add todo for user

          // make a call to send to database

        }}

      >

        Add Task

      </button>

    </>

  );

}
```

### [`refetch`](fetching-data.md#refetch)

When real-time feedback is necessary, the `refetch` method can be used to reload the current query regardless of any changes. This method can be particularly useful when data is constantly evolving, such as with real-time financial applications.

```


import { createResource, onCleanup } from "solid-js"




function StockPriceTicker() {

  const [prices, { refetch }] = createResource(fetchStockPrices);




  const timer = setInterval(() => {

    refetch()

  }, 1000);

  onCleanup(() => clearInterval(timer))

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Ffetching-data.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Ffetching-data)

Previous[← Complex state management](complex-state-management.md)

Next[Testing →](testing.md)

On this page

1. [Overview](#_top)
2. [What is createResource ?](#what-is-createresource-)
3. [Using createResource](#using-createresource)
4. [Calling multiple async events](#calling-multiple-async-events)
5. [Dynamic data handling](#dynamic-data-handling)
   
   1. [mutate](#mutate)
   2. [refetch](#refetch)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/fetching-data.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Ffetching-data.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Ffetching-data)