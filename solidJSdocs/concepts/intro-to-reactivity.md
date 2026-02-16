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

# Intro to reactivity

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/intro-to-reactivity.mdx)

**Note**: While this guide is useful for understanding reactive systems, it does use some Solid-specific terminology.

Reactivity powers the interactivity in Solid applications. This programming paradigm refers to a system's ability to respond to changes in data or state automatically. With Solid, reactivity is the basis of its design, ensuring applications stay up-to-date with their underlying data.

* * *

## [Importance of reactivity](intro-to-reactivity.md#importance-of-reactivity)

1. Reactivity keeps the user interface (UI) and state in sync, which reduces the need for manual updates.
2. Real-time updates create a more responsive and interactive user experience.

```


function Counter() {

  const [count, setCount] = createSignal(0);

  const increment = () => setCount((prev) => prev + 1);




  return (

    <div>

      <span>Count: {count()}</span>{" "}

      {/* Only `count()` is updated when the button is clicked. */}

      <button type="button" onClick={increment}>

        Increment

      </button>

    </div>

  );

}
```

This `Counter` function sets up a button that, when clicked, calls the `increment` function to increase the `count` by one. This updates just the number displayed *without* refreshing the entire component.

[View on Eraser![](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9/preview?elements=cry9JT4nroFQ4rRxzOpvCg&type=embed)](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=cry9JT4nroFQ4rRxzOpvCg)

* * *

## [Reactive principles](intro-to-reactivity.md#reactive-principles)

### [Signals](intro-to-reactivity.md#signals)

Signals serve as core elements in reactive systems, playing an important role in data management and system responsiveness. They are responsible for storing and managing data, as well as triggering updates across the system. This is done through the use of getters and setters.

```


const [count, setCount] = createSignal(0);

//     ^ getter  ^ setter
```

[View on Eraser![](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9/preview?elements=lseAEjGlKLslaVsTlfej_g&type=embed)](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=lseAEjGlKLslaVsTlfej_g)

- **Getter**: A function responsible for accessing the current value of the signal. You call a getter to access the data stored in a signal within a component.
- **Setter**: The function used to modify a signal's value. To trigger reactive updates across an application, you call a setter to update the value of a signal.

```


console.log(count()); // `count()` is a getter that returns the current value of `count`, which is `0`.




setCount(1); // the setter, `setCount`, updates the value of `count`.




console.log(count()); // the updated value of `count` is now `1`.
```

### [Subscribers](intro-to-reactivity.md#subscribers)

Subscribers are the other core element in reactive systems. They are responsible for tracking changes in signals and updating the system accordingly. They are automated responders that keep the system up-to-date with the latest data changes.

Subscribers work based on two main actions:

- **Observation**: At their core, subscribers observe signals. This keeps the subscriber primed to pick up on any changes to the signal they are tracking.
- **Response**: When a signal changes, the subscriber is notified. This triggers the subscriber to respond to the change in the signal. This can involve tasks like updating the UI or calling external functions.

```


function Counter() {

  const [count, setCount] = createSignal(0);

  const increment = () => setCount((prev) => prev + 1);




  createEffect(() => {

    console.log(count());

  });

  // the `createEffect` will trigger the console log every time `count` changes.

}
```

* * *

## [State management](intro-to-reactivity.md#state-management)

State management is the process of managing the state of an application. This involves storing and updating data, as well as responding to the changes in it.

With Solid, state management is handled through signals and subscribers. Signals are used to store and update data, while subscribers are used to respond to changes in the data.

### [Tracking changes](intro-to-reactivity.md#tracking-changes)

Tracking changes involves monitoring any updates to the data and responding accordingly. This is done through the use of subscribers.

When a signal is not accessed within a tracking scope, an update to the signal will not trigger an update. This happens because if a signal is not being tracked, it is not able to notify any subscribers of the change.

```


const [count, setCount] = createSignal(0);




console.log("Count:", count());




setCount(1);




// Output: Count: 0




// `count` is not being tracked, so the console log will not update when `count` changes.
```

Initialization, or creation is a **one-time event** that doesn't cause tracking. To track a signal, it must be accessed within the scope of a subscriber. Reactive primitives, such as [memos](derived-values/memos.md) can be used to create derived values from signals or other memos, and [effects](effects.md) to create subscribers that use the reactive graph output once it's settled.

```


const [count, setCount] = createSignal(0);




createEffect(() => {

  console.log("Count:", count());

});




setCount(1);




// Output: Count: 0

//         Count: 1
```

### [Updating the UI](intro-to-reactivity.md#updating-the-ui)

The UI of a Solid application is built using [JSX](understanding-jsx.md). JSX creates a tracking scope behind the scenes, which allows signals to be tracked within the return statement of a component.

```


function Counter() {

  const [count, setCount] = createSignal(0);

  const increment = () => setCount((prev) => prev + 1);




  return (

    <div>

      <span>Count: {count()}</span>{" "}

      {/* ✅ will update when `count()` changes. */}

      <button type="button" onClick={increment}>

        Increment

      </button>

    </div>

  );

}
```

Components, much like other functions, will only run *once*. This means that if a signal is accessed outside of the return statement, it will run on initialization, but any updates to the signal will not trigger an update.

```


function Counter() {

  const [count, setCount] = createSignal(0);

  const increment = () => setCount((prev) => prev + 1);




  console.log("Count:", count()); // ❌ not tracked - only runs once during initialization.




  createEffect(() => {

    console.log(count()); // ✅ will update whenever `count()` changes.

  });




  return (

    <div>

      <span>Count: {count()}</span>{/* ✅ will update whenever `count()` changes. */}

      <button type="button" onClick={increment}>

        Increment

      </button>

    </div>

  );

}
```

To learn more about managing state in Solid, visit the [guide on state management](../guides/state-management.md).

* * *

## [Synchronous vs. asynchronous](intro-to-reactivity.md#synchronous-vs-asynchronous)

Reactive systems are designed to respond to changes in data. These responses can be immediate or delayed, depending on the nature of the system. Often, the choice between these two depends on the requirements of the application and the nature of the tasks involved.

### [Synchronous reactivity](intro-to-reactivity.md#synchronous-reactivity)

[Synchronous](https://developer.mozilla.org/en-US/docs/Glossary/Synchronous) reactivity is Solid's default reactivity mode, where a system responds to changes in a direct and linear fashion. When a signal changes, any corresponding subscribers are immediately updated in an ordered manner.

With synchronous reactivity, the system is able to respond to changes in a predictable manner. This is useful in scenarios where the order of updates is important. For example, if a subscriber depends on another signal, it is important that the subscriber is updated after the signal it depends on.

```


const [count, setCount] = createSignal(0);

const [double, setDouble] = createSignal(0);




createEffect(() => {

  setDouble(count() * 2);

});
```

In this example, the `double` signal will always be updated after `count` due to synchronous reactivity. This ensures that `double` is always up-to-date with the latest value of `count`.

### [Asynchronous reactivity](intro-to-reactivity.md#asynchronous-reactivity)

[Asynchronous](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous) reactivity is when a system responds to changes in a delayed or non-linear fashion. When a signal changes, the corresponding subscribers are not immediately updated. Instead, the system waits for a specific event or task to complete before updating the subscribers.

This is important in scenarios where subscribers depend on multiple signals. In these cases, updating one signal before another could result in data inconsistency. For example, if a subscriber depends on two signals, it is important that the subscriber is updated after both signals have been updated. Rather, the system waits for both signals to be updated before updating the subscriber.

**Note:** When asynchronous reactivity is present, it is important to ensure that the system is able to handle the delay in updates. [`batch`](../reference/reactive-utilities/batch.md) can be used to delay an update so the subscriber runs after each signal has been updated.

* * *

## [Key concepts](intro-to-reactivity.md#key-concepts)

- Signals are the core elements of a reactive system. They are responsible for storing and managing data.
- Signals are both readable and writeable because of getters and setters.
- Subscribers are automated responders that track changes in signals and update the system accordingly.
- Signals and subscribers work together to ensure that the system is kept up-to-date with the latest data changes.
- A reactive system is built on the principles of data-driven reactivity. This means that the system's reactivity is driven by the data it is built on.
- Reactive systems can be synchronous or asynchronous.

If you want to dive deeper, visit the [guide on fine-grained reactivity](../advanced-concepts/fine-grained-reactivity.md).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fintro-to-reactivity.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fintro-to-reactivity)

Previous[← Quick start](../quick-start.md)

Next[Understanding JSX →](understanding-jsx.md)

On this page

1. [Overview](#_top)
2. [Importance of reactivity](#importance-of-reactivity)
3. [Reactive principles](#reactive-principles)
   
   1. [Signals](#signals)
   2. [Subscribers](#subscribers)
4. [State management](#state-management)
   
   1. [Tracking changes](#tracking-changes)
   2. [Updating the UI](#updating-the-ui)
5. [Synchronous vs. asynchronous](#synchronous-vs-asynchronous)
   
   1. [Synchronous reactivity](#synchronous-reactivity)
   2. [Asynchronous reactivity](#asynchronous-reactivity)
6. [Key concepts](#key-concepts)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/intro-to-reactivity.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fintro-to-reactivity.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fintro-to-reactivity)