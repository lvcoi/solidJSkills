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

# Signals

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/signals.mdx)

Signals are the primary means of [managing state](intro-to-reactivity.md#state-management) in your Solid application. They provide a way to store and update values, and are the foundation of [reactivity](intro-to-reactivity.md) in Solid.

Signals can be used to represent any kind of state in your application, such as the current user, the current page, or the current theme. This can be any value, including primitive values such as strings and numbers, or complex values such as objects and arrays.

* * *

## [Creating a signal](signals.md#creating-a-signal)

You can create a signal by calling the [`createSignal`](../reference/basic-reactivity/create-signal.md) function, which is imported from `solid-js`. This function takes an initial value as an argument, and returns a pair of functions: a **getter** function, and a **setter** function.

```


import { createSignal } from "solid-js";




const [count, setCount] = createSignal(0);

//       ^ getter  ^ setter
```

note

The syntax using `[` and `]` is called [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

This lets you extract values from the array. In the context of `createSignal`, the first value is the getter function, and the second value is the setter function.

* * *

## [Accessing values](signals.md#accessing-values)

The getter function returned by `createSignal` is used to access the value of the signal. You call this function with no arguments to get the current value of the signal:

```


console.log(count()); // output: 0
```

* * *

## [Updating values](signals.md#updating-values)

The setter function returned by `createSignal` is used to update the value of the signal. This function takes an argument that represents the new value of the signal:

```


setCount(count() + 1);




console.log(count()); // output: 1
```

The setter function can also take a function that passes the previous value.

```


setCount((prevCount) => prevCount + 1);




console.log(count()); // output: 1
```

* * *

## [Reactivity](signals.md#reactivity)

Signals are reactive, which means that they automatically update when their value changes. When a signal is called within a [tracking scope](intro-to-reactivity.md#tracking-changes), the signal adds the dependency to a list of subscribers. Once a signal's value changes, it notifies all of its dependencies of the change so they can re-evaluate their values and update accordingly.

```


function Counter() {

  const [count, setCount] = createSignal(0);

  const increment = () => setCount((prev) => prev + 1);




  return (

    <div>

      <span>Count: {count()}</span> {/* Updates when `count` changes */}

      <button type="button" onClick={increment}>

        Increment

      </button>

    </div>

  );

}
```

note

A tracking scope can be created by [`createEffect`](../reference/basic-reactivity/create-effect.md) or [`createMemo`](../reference/basic-reactivity/create-memo.md), which are other Solid primitives.

Both functions subscribe to the signals accessed within them, establishing a dependency relationship. Once this relationship is established, the function is notified whenever the signal changes.

To learn more about how to use Signals in your application, visit our [state management guide](../guides/state-management.md).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fsignals.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fsignals)

Previous[← Props](components/props.md)

Next[Conditional rendering →](control-flow/conditional-rendering.md)

On this page

1. [Overview](#_top)
2. [Creating a signal](#creating-a-signal)
3. [Accessing values](#accessing-values)
4. [Updating values](#updating-values)
5. [Reactivity](#reactivity)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/signals.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fsignals.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fsignals)