[**Solid**](../index.md)

- [Core](../index.md)
- [Router](../solid-router)
- [SolidStart](../solid-start)
- [Meta](../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- [Quick start](../quick-start.md)
- Concepts
  
  - [Intro to reactivity](intro-to-reactivity.md)
  - [Understanding JSX](understanding-jsx.md)
  - Components
    
    - [Basics](components/basics.md)
    - [Class and style](components/class-style.md)
    - [Event handlers](components/event-handlers.md)
    - [Props](components/props.md)
  - [Signals](signals.md)
  - Control flow
    
    - [Conditional rendering](control-flow/conditional-rendering.md)
    - [Dynamic](control-flow/dynamic.md)
    - [List rendering](control-flow/list-rendering.md)
    - [Portal](control-flow/portal.md)
    - [Error boundary](control-flow/error-boundary.md)
  - [Effects](effects.md)
  - Derived values
    
    - [Derived signals](derived-values/derived-signals.md)
    - [Memos](derived-values/memos.md)
  - [Context](context.md)
  - [Stores](stores.md)
  - [Refs](refs.md)
- Advanced concepts
  
  - [Fine-grained reactivity](../advanced-concepts/fine-grained-reactivity.md)
- Guides
  
  - [Styling your components](../guides/styling-your-components.md)
  - [State management](../guides/state-management.md)
  - [Routing & navigation](../guides/routing-and-navigation.md)
  - [Complex state management](../guides/complex-state-management.md)
  - [Fetching data](../guides/fetching-data.md)
  - [Testing](../guides/testing.md)
  - [Deploy your app](../guides/deploying-your-app.md)
- Configuration
  
  - [Environment variables](../configuration/environment-variables.md)
  - [TypeScript](../configuration/typescript.md)

Concepts

# Context

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/context.mdx)

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

* * *

## [When to use context](context.md#when-to-use-context)

When you have a large [component tree](components/basics.md#component-trees) that requires state to be shared, context can be used. Context can be employed to avoid [prop drilling](components/props.md#prop-drilling), which is the practice of passing props through intermediate elements without using them directly.

If you want to avoid passing some props through a few layers, when applicable, adjusting your component hierarchy may be an easier solution. [Signals](signals.md) are often the simplest solution since they can be imported directly into the components that need them.

Context, however, is designed to share data that is global to an application or for information that is regularly accessed by multiple components in an application's component tree. This offers a way to access state across an application without passing props through intermediate layers or importing them directly into components.

* * *

## [Creating context](context.md#creating-context)

Context is created using the [`createContext`](../reference/component-apis/create-context.md) function. This function has a `Provider` property that wraps the component tree you want to provide context to.

/context/create.js/context/component.jsx

```


import { createContext } from "solid-js";




export const MyContext = createContext();
```

```


import { MyContext } from "./create";




export function Provider (props) {

  return (

    <MyContext.Provider>

      {props.children}

    </MyContext.Provider>

  )

};
```

* * *

## [Providing context to children](context.md#providing-context-to-children)

To pass a value to the `Provider`, you use the `value` prop which can take in any value, including [signals](context.md#updating-context-values). Once a value is passed to the `Provider`, it is available to all components that are descendants of the `Provider`.

When passing a single value, it can be directly passed to the `value` prop:

```


import { createContext, useContext } from "solid-js";

import { MyContext } from "./create";




const Provider = (props) => (

  <MyContext.Provider value="new value">{props.children}</MyContext.Provider>

);
```

Complex Types

When passing multiple values (as an `array` or `object`), it is recommended to use a [store](../reference/component-apis/create-context.md#usage).

* * *

## [Consuming context](context.md#consuming-context)

Once the values are available to all the components in the context's component tree, they can be accessed using the [`useContext`](../reference/component-apis/use-context.md) utility. This utility takes in the context object and returns the value(s) passed to the `Provider`:

```


import { createContext, useContext } from "solid-js";

import { MyContext } from "./create";




const Provider = (props) => (

  <MyContext.Provider value="new value">

    {props.children}

  </MyContext.Provider>

);




const Child = () => {

  const value = useContext(MyContext);




  return (

    <span>

      {value}

    </span>

  );

};




export const App = () => (

  <Provider>

    <Child />

  </Provider>

);
```

* * *

## [Customizing Context Utilities](context.md#customizing-context-utilities)

When an application contains multiple context objects, it can be difficult to keep track of which context object is being used. To solve this issue, you can create a custom utility to create a more readable way to access the context values.

For example, when wrapping a component tree, you may want to create a custom `Provider` component that can be used to wrap the component tree. This also provides you with the option of re-using the `Provider` component in other parts of your application, if needed.

```


import { createSignal, createContext, useContext } from "solid-js";

import { CounterContext } from "~/context/counter";




export function CounterProvider(props) {

  return (

    <CounterContext.Provider value={props.count ?? 0}>

      {props.children}

    </CounterContext.Provider>

  );

}
```

Now if you had to access the Provider in different areas of your application, you can simply import the `CounterProvider` component and wrap the component tree:

```


import { CounterProvider } from "./counterProvider";




export function App() {

  return (

    <CounterProvider count={1}>

      <h1>Welcome to Counter</h1>

      <NestedComponents />

    </CounterProvider>

  );

}
```

Similarly, you can create a custom utility to access the context values. Instead of importing `useContext` and passing in the context object on each component that you're using it in, creating a customized utility can make it easier to access the values you need:

```


export function useCounter() {

  return useContext(CounterContext);

}
```

The `useCounter()` utility in this example can now be imported into any component that needs to access the context values:

```


import { useCounter } from "./counter";




export function CounterProvider(props) {

  const count = useCounter();

  return (

    <>

      <div>{count()}</div>

    </>

  );

}
```

* * *

## [Updating Context Values](context.md#updating-context-values)

[Signals](signals.md) offer a way to synchronize and manage data shared across your components using context. You can pass a signal directly to the `value` prop of the `Provider` component, and any changes to the signal will be reflected in all components that consume the context.

App.jsxContext.jsxChild.jsx

```


import { CounterProvider } from "./Context";

import { Child } from "./Child";




export function App() {

  return (

    <CounterProvider count={1}>

      <h1>Welcome to Counter App</h1>

      <Child />

    </CounterProvider>

  )

}
```

```


import { createSignal, useContext } from "solid-js";




export function CounterProvider(props) {

  const [count, setCount] = createSignal(props.initialCount || 0);

  const counter = [

    count,

    {

      increment() {

      setCount(prev => prev + 1);

      },

      decrement() {

      setCount(prev => prev - 1);

      }

    }

  ];




  return (

    <CounterContext.Provider value={counter}>

      {props.children}

    </CounterContext.Provider>

  );

}




export function useCounter() { return useContext(CounterContext); }
```

```


// /context/counter-component.tsx

import { useCounter } from "./Context";




export function Child(props) {

  const [count, { increment, decrement }] = useCounter();




  return (

  <>

    <div>{count()}</div>

    <button onClick={increment}>+</button>

    <button onClick={decrement}>-</button>

  </>

  );

};
```

This offers a way to manage state across your components without having to pass props through intermediate elements.

* * *

## [Debugging with context](context.md#debugging-with-context)

`createContext` takes in an *optional* default value and it is possible it can return `undefined` if not provided. When working with TypeScript, this can introduce type issues that make it difficult to determine why your component is not rendering as expected.

To solve this issue, a default value can be specified when creating a context object, or errors can be handled manually through the use of a custom `useMyContext` utility:

```


import { useContext } from "solid-js";




function useMyContext() {

  const value = useContext(MyContext);




  if (!value) {

    throw new Error("Missing context Provider");

  }




  return value;

}




function Child() {

  const value = useMyContext();




  return <div>{value}</div>;

}
```

* * *

## [Common issues with `createContext` and `useContext`](context.md#common-issues-with-createcontext-and-usecontext)

If no default value is passed to `createContext`, it is possible for `useContext` to return `undefined`.

More on default values

Read more about default values in the [`createContext`](../reference/component-apis/create-context.md) entry.

Because of this, if an initial value was not passed to `createContext`, the TS type signature of `useContext` will indicate that the value returned might be `undefined` (as mentioned above). This can be quite annoying when you want to use the context inside a component, and particularly when immediately destructuring the context. Additionally, if you use `useContext` and it returns `undefined` (which is often, but not always, the result of a bug), the error message thrown at runtime can be confusing.

The most common solution for it is to wrap all uses of `useContext` in a function that will explicitly throw a helpful error if the context is `undefined`. This also serves to narrow the type returned, so TS doesn't complain. As an example:

```


function useCounterContext() {

  const context = useContext(CounterContext)

  if (!context) {

    throw new Error("can't find CounterContext")

  }

  return context

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcontext.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcontext)

Previous[← Memos](derived-values/memos.md)

Next[Stores →](stores.md)

On this page

1. [Overview](#_top)
2. [When to use context](#when-to-use-context)
3. [Creating context](#creating-context)
4. [Providing context to children](#providing-context-to-children)
5. [Consuming context](#consuming-context)
6. [Customizing Context Utilities](#customizing-context-utilities)
7. [Updating Context Values](#updating-context-values)
8. [Debugging with context](#debugging-with-context)
9. [Common issues with createContext and useContext](#common-issues-with-createcontext-and-usecontext)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/context.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcontext.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcontext)