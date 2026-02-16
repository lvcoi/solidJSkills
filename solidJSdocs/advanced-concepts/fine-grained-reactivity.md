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
  
  - [Fine-grained reactivity](fine-grained-reactivity.md)
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

Advanced concepts

# Fine-grained reactivity

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/advanced-concepts/fine-grained-reactivity.mdx)

Reactivity ensures automatic responses to data changes, eliminating the need for manual updates to the user interface (UI). By connecting UI elements to the underlying data, updates become automated. In a fine-grained reactive system an application will now have the ability to make highly *targeted and specific* updates.

An example of this can be seen in the contrast between Solid and [React](https://react.dev/). In Solid, updates are made to the targeted attribute that needs to be changed, avoiding broader and, sometimes unnecessary, updates. In contrast, React would re-execute an entire component for a change in the single attribute, which can be less efficient.

Because of the fine-grained reactive system, unnecessary recalculations are avoided. Through targeting only the areas of an application that have changed the user experience becomes smoother and more optimized.

**Note:** If you're new to the concept of reactivity and want to learn the basics, consider starting with our [intro to reactivity guide](../concepts/intro-to-reactivity.md).

* * *

## [Reactive primitives](fine-grained-reactivity.md#reactive-primitives)

In Solid's reactivity system, there are two key elements: signals and observers. These core elements serve as the foundation for more specialized reactive features:

- [Stores](../concepts/stores.md) which are [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) that create, read, and write signals under the hood.
- [Memos](../concepts/derived-values/memos.md) resemble [effects](../concepts/effects.md) but are distinct in that they *return* a signal and optimize computations through caching. They update based on the behavior of effects, but are more ideal for computational optimization.
- [Resources](../guides/fetching-data.md), building on the concept of memos, convert the asynchronicity of network requests into synchronicity, where the results are embedded within a signal.
- Render effects are a tailored type of effect that initiate immediately, specifically designed for managing the rendering process.

### [Understanding signals](fine-grained-reactivity.md#understanding-signals)

[Signals](../concepts/signals.md) are like mutable variables that can point to a value now and another in the future. They are made up of two primary functions:

- **Getter**: how to read the current value of a signal.
- **Setter**: a way to modify or update a signal's value.

In Solid, the [`createSignal`](../reference/basic-reactivity/create-signal.md) function can be used to create a signal. This function returns the getter and setter as a pair in a two-element array, called a tuple.

```


import { createSignal } from "solid-js";




const [count, setCount] = createSignal(1);




console.log(count()); // prints "1"




setCount(0); // changes count to 0




console.log(count()); // prints "0"
```

Here, `count` serves as the getter, and `setCount` functions as the setter.

### [Effects](fine-grained-reactivity.md#effects)

[Effects](../concepts/effects.md) are functions that are triggered when the signals they depend on point to a different value. They can be thought of as automated responders where any changes in the signal's value will trigger the effect to run.

```


import { createSignal, createEffect } from "solid-js";




const [count, setCount] = createSignal(0);




createEffect(() => {

  console.log(count());

});
```

The effect takes a function that is called whenever *any* of the signals it relies on changes, such as `count` in this example.

* * *

## [Building a reactive system](fine-grained-reactivity.md#building-a-reactive-system)

To grasp the concept of reactivity, it is often helpful to construct a reactive system from scratch.

The following example will follow the observer pattern, where data entities (signals) will maintain a list of their subscribers (effects). This is a way to notify subscribers whenever a signal they observe changes.

Here is a basic code outline to begin:

```


function createSignal() {}




function createEffect() {}




const [count, setCount] = createSignal(0);




createEffect(() => {

  console.log("The count is " + count());

});
```

* * *

## [Reactive primitives](fine-grained-reactivity.md#reactive-primitives-1)

### [`createSignal`](fine-grained-reactivity.md#createsignal)

The `createSignal` function performs two main tasks:

1. Initialize the value (in this case, `count` is set to `0`).
2. Return an array with two elements: the getter and setter function.

```


function createSignal(initialValue) {

  let value = initialValue;




  function getter() {

    return value;

  }




  function setter(newValue) {

    value = newValue;

  }




  return [getter, setter];

}




// ..
```

This allows you to retrieve the current value through the getter and make any changes via the setter. At this stage, reactivity is not present, however.

### [`createEffect`](fine-grained-reactivity.md#createeffect)

`createEffect` defines a function that immediately calls the function that is passed into it:

```


// ..




function createEffect(fn) {

  fn();

}




// ..
```

### [Making a system reactive](fine-grained-reactivity.md#making-a-system-reactive)

Reactivity emerges when linking `createSignal` and `createEffect` and this happens through:

1. Maintaining a reference to the current subscriber's function.
2. Registering this function during the creation of an effect.
3. Adding the function to a subscriber list when accessing a signal.
4. Notifying all subscribers when the signal has updated.

```


let currentSubscriber = null;




function createSignal(initialValue) {

  let value = initialValue;

  const subscribers = new Set();




  function getter() {

    if (currentSubscriber) {

      subscribers.add(currentSubscriber);

    }

    return value;

  }




  function setter(newValue) {

    if (value === newValue) return; // if the new value is not different, do not notify dependent effects and memos

    value = newValue;

    for (const subscriber of subscribers) {

      subscriber(); //

    }

  }




  return [getter, setter];

}




// creating an effect

function createEffect(fn) {

  const previousSubscriber = currentSubscriber; // Step 1

  currentSubscriber = fn;

  fn();

  currentSubscriber = previousSubscriber;

}




//..
```

A variable is used to hold a reference to the current executing subscriber function. This is used to determine which effects are dependent on which signals.

Inside `createSignal`, the initial value is stored and a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) is used to store any subscriber functions that are dependent on the signal. This function will then return two functions for the signal:

- The `getter` function checks to see if the current subscriber function is being accessed and, if it is, adds it to the list of subscribers before returning the *current* value of the signal.
- The `setter` function evaluated the new value against the old value, notifying the dependent functions only when the signal has been updated.

When creating the `createEffect` function, a reference to any previous subscribers is initialized to handle any possible nested effects present. The current subscriber is then passed to the given function, which is run immediately. During this run, if the effect accesses any signals it is then registered as a subscriber to those signals. The current subscriber, once the given function has been run, will be reset to its previous value so that, if there are any nested effects, they are operated correctly.

### [Validating the reactive system](fine-grained-reactivity.md#validating-the-reactive-system)

To validate the system, increment the `count` value at one-second intervals:

```


//..




const [count, setCount] = createSignal(0);




createEffect(() => {

  console.log("The count is " + count());

});




setInterval(() => {

  setCount(count() + 1);

}, 1000);
```

This will display the incremented count value on the console at one-second intervals to confirm the reactive system's functionality.

* * *

## [Managing lifecycles in a reactive system](fine-grained-reactivity.md#managing-lifecycles-in-a-reactive-system)

In reactive systems, various elements, often referred to as "nodes", are interconnected. These nodes can be signals, effects, or other reactive primitives. They serve as the individual units that collectively make up the reactive behavior of the system.

When a node changes, the system will re-evaluate the parts connected to that node. This can result in updates, additions, or removals of these connections, which affect the overall behavior of the system.

Now, consider a scenario where a condition influences the data used to calculate an output:

```


// Temperature.jsx

console.log("1. Initialize");

const [temperature, setTemperature] = createSignal(72);

const [unit, setUnit] = createSignal("Fahrenheit");

const [displayTemp, setDisplayTemp] = createSignal(true);




const displayTemperature = createMemo(() => {

  if (!displayTemp()) return "Temperature display is off";

  return `${temperature()} degrees ${unit()}`;

});




createEffect(() => console.log("Current temperature is", displayTemperature()));




console.log("2. Turn off displayTemp");

setDisplayTemp(false);




console.log("3. Change unit");

setUnit("Celsius");




console.log("4. Turn on displayTemp");

setDisplayTemp(true);
```

In this example, the `createMemo` primitive is used to cache the state of a computation. This means the computation doesn't have to be re-run if its dependencies remain unchanged.

The `displayTemperature` memo has an early return condition based on the value of `displayTemp`. When `displayTemp` is false, the memo returns a message saying "Temperature display is off," and as a result, `temperature` and `unit` are not tracked.

If the `unit` is changed while `displayTemp` is false, however, the effect won't trigger since none of the memo's current dependencies (`displayTemp` in this case) have changed.

### [Synchronous nature of effect tracking](fine-grained-reactivity.md#synchronous-nature-of-effect-tracking)

The reactivity system described above operates synchronously. This operation has implications for how effects and their dependencies are tracked. Specifically, the system registers the subscriber, runs the effect function, and then unregisters the subscriber — all in a linear, synchronous sequence.

Consider the following example:

```


createEffect(() => {

  setTimeout(() => {

    console.log(count());

  }, 1000);

});
```

The `createEffect` function in this example, initiates a `setTimeout` to delay the console log. Because the system is synchronous, it doesn't wait for this operation to complete. By the time the `count` getter is triggered within the `setTimeout`, the global scope no longer has a registered subscriber. As a result, this `count` signal will not add the callback as a subscriber which leads to potential issues with tracking the changes to `count`.

### [Handling asynchronous effects](fine-grained-reactivity.md#handling-asynchronous-effects)

While the basic reactivity system is synchronous, frameworks like Solid offer more advanced features to handle asynchronous scenarios. For example, the `on` function provides a way to manually specify the dependencies of an effect. This is particularly useful for to make sure asynchronous operations are correctly tied into the reactive system.

Solid also introduces the concept of resources for managing asynchronous operations. Resources are specialized reactive primitives that convert the asynchronicity of operations like network requests into synchronicity, embedding the results within a signal. The system can then track asynchronous operations and their state, keeping the UI up-to-date when the operation completes or its' state changes.

Using resources in Solid can assist in complex scenarios when multiple asynchronous operations are involved and the completion may affect different parts of the reactive system. By integrating resources into the system, you can ensure that dependencies are correctly tracked and that the UI remains consistent with the underlying asynchronous data.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fadvanced-concepts%2Ffine-grained-reactivity.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fadvanced-concepts%2Ffine-grained-reactivity)

Previous[← Refs](../concepts/refs.md)

Next[Styling your components →](../guides/styling-your-components.md)

On this page

1. [Overview](#_top)
2. [Reactive primitives](#reactive-primitives)
   
   1. [Understanding signals](#understanding-signals)
   2. [Effects](#effects)
3. [Building a reactive system](#building-a-reactive-system)
4. [Reactive primitives](#reactive-primitives-1)
   
   1. [createSignal](#createsignal)
   2. [createEffect](#createeffect)
   3. [Making a system reactive](#making-a-system-reactive)
   4. [Validating the reactive system](#validating-the-reactive-system)
5. [Managing lifecycles in a reactive system](#managing-lifecycles-in-a-reactive-system)
   
   1. [Synchronous nature of effect tracking](#synchronous-nature-of-effect-tracking)
   2. [Handling asynchronous effects](#handling-asynchronous-effects)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/advanced-concepts/fine-grained-reactivity.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fadvanced-concepts%2Ffine-grained-reactivity.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fadvanced-concepts%2Ffine-grained-reactivity)