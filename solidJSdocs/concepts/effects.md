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

# Effects

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/effects.mdx)

Effects are functions that are triggered when the signals they depend on change. They play a crucial role in managing side effects, which are actions that occur outside of the application's scope, such as DOM manipulations, data fetching, and subscriptions.

* * *

## [Using an effect](effects.md#using-an-effect)

An effect is created using the `createEffect` function. This function takes a callback as its argument that runs when the effect is triggered.

```


import { createEffect } from "solid-js";




const [count, setCount] = createSignal(0);




createEffect(() => {

  console.log(count());

});
```

In this example, an effect is created that logs the current value of `count` to the console. When the value of `count` changes, the effect is triggered, causing it to run again and log the new value of `count`.

note

Effects are primarily intended for handling side effects that do not write to the reactive system. It's best to avoid setting signals within effects, as this can lead to additional rendering or even infinite loops if not managed carefully. Instead, it is recommended to use [createMemo](../reference/basic-reactivity/create-memo.md) to compute new values that rely on other reactive values.

* * *

## [Managing dependencies](effects.md#managing-dependencies)

Effects can be set to observe any number of dependencies. Dependencies are what allow an effect to track changes and respond accordingly. These can include signals, props, context, or any other reactive values. When any of these change, the effect is notified and will run again to update its state.

Upon initialization, an effect will run *once*, regardless of whether it has any dependencies. This is useful for setting up the effect and initializing variables or subscribing to [signals](signals.md). After this run, the effect will only be triggered when any of its *dependencies* change.

```


createEffect(() => {

  console.log("hello"); // will run only once

});




createEffect(() => {

  console.log(count()); // will run every time count changes

});
```

Solid automatically tracks the dependencies of an effect, so you do not need to manually specify them. This improves the tracking and minimizes the chances of overlooking or incorrectly identifying dependencies.

* * *

## [Subscribing to signals](effects.md#subscribing-to-signals)

When an effect is set to observe a signal, it creates a subscription to it. This subscription allows the effect to track the changes in the signal's value, which causes it to observe any changes that may happen and to execute its callback accordingly.

```


import { createSignal, createEffect } from "solid-js";




const [count, setCount] = createSignal(0);




createEffect(() => {

  console.log(count()); // Logs current value of count whenever it changes

});
```

### [Managing multiple signals](effects.md#managing-multiple-signals)

Effects have the ability to observe multiple signals. A single effect can subscribe to multiple signals, and similarly, multiple effects can keep track of a single signal. This is useful when you need to update the UI based on multiple signals.

When multiple signals are observed within a single effect, it will execute its callback whenever *any* of the signals change. The effect will run even if only one of the signals changes, not necessarily all of them. This means that the effect will run with the latest values of all of the signals that it is observing.

```


import { createSignal, createEffect } from "solid-js";




const [count, setCount] = createSignal(0);

const [message, setMessage] = createSignal("Hello");




createEffect(() => {

  console.log(count(), message());

});




setCount(1); // Output: 1, "Hello"

setMessage("World"); // Output: 1, "World"
```

note

When a signal updates, it notifies all of its subscribers sequentially but the *order can vary*. While effects are guaranteed to run when a signal updates, the execution might **not** be instantaneous. This means that the order of execution of effects is *not guaranteed* and should not be relied upon.

### [Nested effects](effects.md#nested-effects)

When working with effects, it is possible to nest them within each other. This allows each effect to independently track its own dependencies, without affecting the effect that it is nested within.

```


createEffect(() => {

  console.log("Outer effect starts");

  createEffect(() => console.log("Inner effect"));

  console.log("Outer effect ends");

});
```

The order of execution is important to note. An inner effect will *not* affect the outer effect. Signals that are accessed within an inner effect, will *not* be registered as dependencies for the outer effect. When the signal located within the inner effect changes, it will trigger only the *inner effect* to re-run, not the outer one.

```


import { createSignal, createEffect } from "solid-js";




const [count, setCount] = createSignal(0);




createEffect(() => {

  console.log("Outer effect starts");

  createEffect(() => console.log(count())); // when count changes, only this effect will run

  console.log("Outer effect ends");

});
```

This forces each effect to be independent of each other, which helps to avoid unexpected behaviour. Additionally, it allows you to create effects that are only triggered when certain conditions are met.

* * *

## [Lifecycle functions](effects.md#lifecycle-functions)

Effects have a lifecycle that can be managed using certain functions. These functions allow you to control the initialization and disposal of effects to build the type of behaviour that you need. This can include running a side effect only once, or cleaning up a task when it is no longer needed.

### [`onMount`](effects.md#onmount)

In situations where you just want to run a side effect **once**, you can use the [`onMount`](../reference/lifecycle/on-mount.md) function. This lifecycle function is similar to an effect, but it does not track any dependencies. Rather, once the component has been initialized, the `onMount` callback will be executed and will not run again.

```


import { onMount } from "solid-js";




function Component() {

  const [data, setData] = createSignal(null);




  createEffect(() => {

    data(); // will run every time data changes

  });




  onMount(async () => {

    // will run only once, when the component is mounted

    const fetchedData = await fetch("https://example.com/data");

    setData(fetchedData);

  });




  return <div>...</div>;

}
```

`onMount` provides the assurance that the callback will only run once. If using an effect in this situation, there is no guarantee that it will only run once, which can lead to unexpected behaviour. This makes `onMount` useful for API calls and other side effects that only need to be run once per component instance.

### [`onCleanup`](effects.md#oncleanup)

While `onMount` is useful for running a side effect once, [`onCleanup`](../reference/lifecycle/on-cleanup.md) is helpful for cleaning up a task when it is no longer needed. `onCleanup` will run whenever the component unmounts, removing any subscriptions that the effect has.

```


import { onCleanup } from "solid-js";




function App() {

  const [count, setCount] = createSignal(0);




  const timer = setInterval(() => {

    setCount((prev) => prev + 1);

  }, 1000);




  onCleanup(() => {

    clearInterval(timer);

  });




  return <div>Count: {count()}</div>;

}
```

In this example, the `onCleanup` function is used to clear the interval that is set up in the effect. To avoid the interval from running indefinitely, the `onCleanup` function is used to clear the interval once the component unmounts.

`onCleanup` can be used to avoid memory leaks. These occur when a component is unmounted, but references to it still exist and, as a result, could still be running in the background. Using `onCleanup` to remove any subscriptions or references to the component can help to avoid this issue.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Feffects.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Feffects)

Previous[← Error boundary](control-flow/error-boundary.md)

Next[Derived signals →](derived-values/derived-signals.md)

On this page

1. [Overview](#_top)
2. [Using an effect](#using-an-effect)
3. [Managing dependencies](#managing-dependencies)
4. [Subscribing to signals](#subscribing-to-signals)
   
   1. [Managing multiple signals](#managing-multiple-signals)
   2. [Nested effects](#nested-effects)
5. [Lifecycle functions](#lifecycle-functions)
   
   1. [onMount](#onmount)
   2. [onCleanup](#oncleanup)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/effects.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Feffects.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Feffects)