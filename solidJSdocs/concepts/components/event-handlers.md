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
    
    - [Basics](basics.md)
    - [Class and style](class-style.md)
    - [Event handlers](event-handlers.md)
    - [Props](props.md)
  - [Signals](../signals.md)
  - Control flow
    
    - [Conditional rendering](../control-flow/conditional-rendering.md)
    - [Dynamic](../control-flow/dynamic.md)
    - [List rendering](../control-flow/list-rendering.md)
    - [Portal](../control-flow/portal.md)
    - [Error boundary](../control-flow/error-boundary.md)
  - [Effects](../effects.md)
  - Derived values
    
    - [Derived signals](../derived-values/derived-signals.md)
    - [Memos](../derived-values/memos.md)
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

Components

# Event handlers

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/components/event-handlers.mdx)

Event handlers are functions that are called in response to specific events occurring in the browser, such as when a user clicks or taps on an element.

Solid provides two ways to add event listeners to the browser:

- [`on:__`](../../reference/jsx-attributes/on.md): adds an event listener to the `element`. This is also known as a *native event*.
- [`on__`](../../reference/jsx-attributes/on_.md): adds an event listener to the `document` and dispatches it to the `element`. This can be referred to as a *delegated event*.

Delegated events conserve resources and improve performance for commonly used events by sharing a single handler. Native events, conversely, offer greater control over event behavior.

* * *

## [Using events](event-handlers.md#using-events)

To add an event handler, prefix the event name with either `on` or `on:`, and assign it to the function you wish to call when the event is dispatched.

```


// delegated event

<button onClick={handleClick}>Click me</button>




// native event

<div on:scroll={handleScroll}>... very long text ...</div>
```

Delegated events are **not case sensitive**, therefore using delegated event handlers in Solid can be written using camelCase or all lowercase. Note that while delegated events can be written both ways, native events *are* case sensitive.

```


<button onclick={handleClick}>Click me</button>
```

For any other events, such as custom events or events you wish *not* to be delegated, the `on:` attribute will add an event listener as-is. This is what makes the event listener case sensitive.

```


<button on:Custom-Event={handleClick}>Click me</button>
```

For typing standard or custom events using `on:`, the TypeScript page has a section about [event handlers](../../configuration/typescript.md#event-handling).

* * *

## [Binding events](event-handlers.md#binding-events)

To optimize event handlers, you can pass an array as the event handler, replacing the function. When doing this, the second item passed into the array is supplied as the handler's first argument:

```


const handler = (data, event) => {

  console.log("Data:", data, "Event:", event);

};




<button onClick={[handler, "Hello!"]}>Click Me</button>;
```

In this example, the `Hello!` string is passed as the `data` parameter in the `handler` function when the button is clicked.

By binding events in this way, Solid avoids the overhead of using JavaScript's [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) method and adding an additional closure.

### [Dynamic handlers](event-handlers.md#dynamic-handlers)

An event handler does not form part of the reactive system. If you were to pass the handler as a signal, it will not respond to the changes of that signal. In other words, events do not dynamically update, and the bindings are not reactive. This is because attaching and detaching listeners is a resource-intensive task.

Since event handlers are called like a standard function, you can design them to call a reactive source, if needed.

In the following example, `handleClick` represents a prop that has the flexibility to adopt any function. As a result, there is no requirement for these functions to be reactive.

```


<div onClick={() => props.handleClick?.()} />
```

* * *

## [Event delegation](event-handlers.md#event-delegation)

Instead of attaching event listeners to every individual element, Solid uses *synthetic event delegation*, through the [`on__`](../../reference/jsx-attributes/on_.md) form . In this method, event listeners are attached to the `document` element and dispatch events to the relevant elements as they bubble up.

By keeping the number of event listeners to a minimum, events can be captured more effectively. This is especially useful when working with a large number of elements, such as in a table or list.

Supported events such as `click`, `input` and `keydown` are just a few examples that are optimized in this way. To view the full list see the [references below](event-handlers.md#list-of-delegated-events).

If you need to attach an event listener to an element that is not supported by Solid's event delegation, such as a custom event in a [custom element](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements), you can use the [`on:__`](../../reference/jsx-attributes/on.md) form.

```


<div on:customEvent={handleCustomEvent} />
```

### [Event delegation considerations](event-handlers.md#event-delegation-considerations)

While delegated events provide some performance enhancements, there are tradeoffs.

Delegated events flow through native element parents but can be overriden by components like Portal. This can differ from the previous expectations of how events work and flow.

Some things to keep in mind include:

- Delegated event listeners are added *once* per event type and handle all future events of that type. This means that delegated event listeners remain active even if the element that added them and its handler is removed. For example, if a `div` listens for `mousemove` and is later removed, the `mousemove` events will still be dispatched to the `document` in case a different element is also listening for mouse moves.

```


<div onMouseMove={handleCustomEvent} />
```

Occasional Events

Rather than using delegated events for events that happen infrequently, **native events** are a better solution. Since these events happen in specific circumstances, they do not benefit from the performance improvements you get with event delegation.

```


<div on:mousemove={handleCustomEvent} />
```

- `event.stopPropagation()` does not work as expected since events are attached to the `document` rather than the `element`.
  
  With cases like this, a native event is recommended. As an example, using a native event would stop the following event from reaching the `div native` handler, which is *not* the case for delegated events. You can [view this example in the Solid Playground](https://playground.solidjs.com/anonymous/c5346f84-01e4-4080-8ace-4443ffd0bb10).

```


onMount(() => {

  ref.addEventListener("click", () => {

    console.log("div native");

  });

});

<div ref={ref}>

  <button

    onClick={(event) => {

      event.stopPropagation();

      console.log("button");

    }}

  >

    button

  </button>

</div>;
```

```


// Button clicked

div native

button
```

You can solve this by switching the `button` event to using a native event:

```


// ...

<button

  on:click={(event) => {

    event.stopPropagation();

    console.log("button");

  }}

>

  button

</button>

// ...
```

```


// Button clicked

button
```

[See how this solution differs in the Solid Playground](https://playground.solidjs.com/anonymous/9e2deddc-2e83-4ac2-8ee0-49c7c3a45d11).

- [Portals](../control-flow/portal.md) propagate events following the *component tree* and not the *DOM tree*, making them easier to use. This means when a `Portal` gets attached to the `body`, any events will propagate up to the `container`.

```


<div class="container" onInput={() => console.log("portal key press")}>

  <Portal mount={document.body}>

    <input onInput={() => console.log("input key press")} />

  </Portal>

</div>
```

onInput / onChange

`onChange` and `onInput` events work according to their native behavior:

- `onInput` will fire immediately after the value has changed
- In `<input>` fields, `onChange` will only fire after the field loses focus.

### [List of delegated events](event-handlers.md#list-of-delegated-events)

You can also view this list in our [source code](https://github.com/ryansolid/dom-expressions/blob/main/packages/dom-expressions/src/constants.js) (see `DelegatedEvents`).

- [`beforeinput`](https://developer.mozilla.org/en-US/docs/Web/API/Element/beforeinput_event)
- [`click`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click)
- [`dblclick`](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event)
- [`contextmenu`](https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event)
- [`focusin`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
- [`focusout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- [`input`](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event)
- [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)
- [`keyup`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event)
- [`mousedown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event)
- [`mousemove`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event)
- [`mouseout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event)
- [`mouseover`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event)
- [`mouseup`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerdown_event)
- [`pointermove`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event)
- [`pointerout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerout_event)
- [`pointerover`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerover_event)
- [`pointerup`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerup_event)
- [`touchend`](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchend_event)
- [`touchmove`](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchmove_event)
- [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcomponents%2Fevent-handlers.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcomponents%2Fevent-handlers)

Previous[← Class and style](class-style.md)

Next[Props →](props.md)

On this page

1. [Overview](#_top)
2. [Using events](#using-events)
3. [Binding events](#binding-events)
   
   1. [Dynamic handlers](#dynamic-handlers)
4. [Event delegation](#event-delegation)
   
   1. [Event delegation considerations](#event-delegation-considerations)
   2. [List of delegated events](#list-of-delegated-events)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/components/event-handlers.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcomponents%2Fevent-handlers.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcomponents%2Fevent-handlers)