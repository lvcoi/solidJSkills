[**Solid**](../../index.md)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- [Quick start](../../quick-start.md)
- Concepts
  
  - [Intro to reactivity](../intro-to-reactivity.md)
  - [Understanding JSX](../understanding-jsx.md)
  - Components
    
    - [Basics](../components/basics.md)
    - [Class and style](../components/class-style.md)
    - [Event handlers](../components/event-handlers.md)
    - [Props](../components/props.md)
  - [Signals](../signals.md)
  - Control flow
    
    - [Conditional rendering](../control-flow/conditional-rendering.md)
    - [Dynamic](../control-flow/dynamic.md)
    - [List rendering](../control-flow/list-rendering.md)
    - [Portal](../control-flow/portal.md)
    - [Error boundary](../control-flow/error-boundary.md)
  - [Effects](../effects.md)
  - Derived values
    
    - [Derived signals](derived-signals.md)
    - [Memos](memos.md)
  - [Context](../context.md)
  - [Stores](../stores.md)
  - [Refs](../refs.md)
- Advanced concepts
  
  - [Fine-grained reactivity](../../advanced-concepts/fine-grained-reactivity.md)
- Guides
  
  - [Styling your components](../../guides/styling-your-components.md)
  - [State management](../../guides/state-management.md)
  - [Routing & navigation](../../guides/routing-and-navigation.md)
  - [Complex state management](../../guides/complex-state-management.md)
  - [Fetching data](../../guides/fetching-data.md)
  - [Testing](../../guides/testing.md)
  - [Deploy your app](../../guides/deploying-your-app.md)
- Configuration
  
  - [Environment variables](../../configuration/environment-variables.md)
  - [TypeScript](../../configuration/typescript.md)

Derived values

# Memos

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/derived-values/memos.mdx)

Memos are a type of reactive value that can be used to memoize derived state or expensive computations. They are similar to [derived signals](derived-signals.md) in that they are reactive values that automatically re-evaluate when their dependencies change. However, unlike derived signals, memos are optimized to execute only once for each change in their dependencies.

Memos expose a *read-only* reactive value (like a [signal](../signals.md)) and track changes in their dependencies (similar to an [effect](../effects.md)). This makes them useful for caching the results of expensive or frequently accessed computations. By doing this, memos minimize unnecessary work within an application by retaining the results of a computation until its dependencies change.

* * *

## [Using memos](memos.md#using-memos)

A memo is created using the `createMemo` function. Within this function, you can define the derived value or computations you wish to memoize. When called, `createMemo` will return a **getter** function that reads the current value of the memo:

```


import { createMemo, createSignal } from "solid-js"




const [count, setCount] = createSignal(0)




const isEven = createMemo(() => count() % 2 === 0)




console.log(isEven()) // true




setCount(3)

console.log(isEven()) // false
```

While memos look similar to effects, they are different in that they *return a value*. This value is the result of the computation or derived state that you wish to memoize.

### [Advantages of using memos](memos.md#advantages-of-using-memos)

While you can use a [derived signal](derived-signals.md) to achieve similar results, memos offer distinct advantages:

- Memos are optimized to execute only once for each change in their dependencies.
- When working with expensive computations, memos can be used to cache the results so they are not recomputed unnecessarily.
- A memo will only recompute when its dependencies change, and will not trigger subsequent updates (as determined by [`===` or strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)) if its dependencies change but its value remains the same.
- Any signal or memo accessed within a memo's function is **tracked**. This means that the memo will re-evaluate automatically when these dependencies change.

[View on Eraser![](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9/preview?elements=ACJTLvgPnReEQszYSUwoLw&type=embed)](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=ACJTLvgPnReEQszYSUwoLw)

* * *

## [Memo vs. effect](memos.md#memo-vs-effect)

Both memos and effects are important when managing reactive computations and side effects. They, however, serve different purposes and each has their own unique behaviors.

MemosEffectsReturn valueYes - returns a getter for the result of the computation or derived state.Does not return a value but executes a block of code in response to changes.Caches resultsYesNoBehaviorFunction argument should be pure without reactive side effects.Function argument can cause side effects like UI updates or data fetches.Dependency tracking.YesYesExample use casesTransforming data structures, computing aggregated values, derived state, or other expensive computations.UI updates, network requests, or external integrations.

* * *

## [Best practices](memos.md#best-practices)

### [Pure functions](memos.md#pure-functions)

When working with memos, it is recommended that you leave them "pure".

```


import { createSignal, createMemo } from "solid-js"




const [count, setCount] = createSignal(0)

const isEven = createMemo(() => count() % 2 === 0) // example of a pure function
```

A pure function is one that does not cause any side effects. This means that the function's output should solely depend on its inputs.

When you introduce side effects into a memo, it can complicate the reactivity chain. This can lead to unexpected behavior, such as infinite loops, that lead your application to crash.

```


import { createSignal, createMemo } from "solid-js"




const [count, setCount] = createSignal(0)

const [message, setMessage] = createSignal("")




const badMemo = createMemo(() => {

  if (count() > 10) {

    setMessage("Count is too high!") //  side effect

  }

  return count() % 2 === 0

})
```

These infinite loops can be triggered when a memo has a side effect that causes its dependencies to change. This will cause the memo to re-evaluate, which will then trigger the side effect again, and so on until the application crashes.

This can be avoided by using a [`createEffect`](../../reference/basic-reactivity/create-effect.md) to handle the side effects instead:

```


import { createSignal, createMemo, createEffect } from "solid-js"




const [count, setCount] = createSignal(0)

const [message, setMessage] = createSignal("")




const isEven = createMemo(() => count() % 2 === 0)




createEffect(() => {

  if (count() > 10) {

    setMessage("Count is too high!")

  }

})
```

Here, the `createEffect` will handle the side effects, while the `isEven` memo will remain pure.

### [Keep logic in memos](memos.md#keep-logic-in-memos)

Memos are optimized to execute only once for each change in their dependencies. This means that you can remove unnecessary effects that are triggered by a memo's dependencies.

When working with derived state, memos are the recommended approach over effects. Keeping the logic in a memo prevents unnecessary re-renders that can occur when using an effect. Similarly, effects are better suited to handle side effects, such as DOM updates, rather than derived state. This separation of concerns can help keep your code clean and easy to understand.

```


// effect - runs whenever `count` changes

createEffect(() => {

  if (count() > 10) {

    setMessage("Count is too high!")

  } else {

    setMessage("")

  }

})




// memo - only runs when `count` changes to or from a value greater than 10

const message = createMemo(() => {

  if (count() > 10) {

    return "Count is too high!"

  } else {

    return ""

  }

})
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fderived-values%2Fmemos.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fderived-values%2Fmemos)

Previous[← Derived signals](derived-signals.md)

Next[Context →](../context.md)

On this page

1. [Overview](#_top)
2. [Using memos](#using-memos)
   
   1. [Advantages of using memos](#advantages-of-using-memos)
3. [Memo vs. effect](#memo-vs-effect)
4. [Best practices](#best-practices)
   
   1. [Pure functions](#pure-functions)
   2. [Keep logic in memos](#keep-logic-in-memos)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/derived-values/memos.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fderived-values%2Fmemos.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fderived-values%2Fmemos)