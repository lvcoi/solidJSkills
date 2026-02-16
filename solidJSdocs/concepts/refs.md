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

# Refs

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/refs.mdx)

Refs, or references, are a special attribute that can be attached to any element, and are used to reference a DOM element or a component instance. They are particularly useful when you need to access the DOM nodes directly or invoke methods on a component.

* * *

## [Accessing DOM elements](refs.md#accessing-dom-elements)

One way of accessing DOM elements is through [element selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) such as [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) or [`document.getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById). Since elements in Solid can be added or removed from the DOM based on state, you need to wait until the element is attached to the DOM before accessing it. This can be done by using [`onMount`](../reference/lifecycle/on-mount.md) to wait until the element is attached to the DOM before accessing it:

Accessing DOM elements through element selectors is not recommended for this reason. As elements with the same selectors are added and removed from the DOM, the first element that matches the selector will be returned, which may not be the element you want.

* * *

## [JSX as a value](refs.md#jsx-as-a-value)

JSX can be used as a value and assigned to a variable when looking to directly access DOM elements.

```


function Component() {

  const myElement = <p>My Element</p>




  return <div>{myElement}</div>

}
```

This lets you create and access DOM elements similar to [`document.createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) but without having to wait until it is attached to the DOM. It can be used multiple times without having to worry about duplicate selectors.

The downside of this approach is that it separates the element and any child elements from the rest of the JSX structure. This makes the component's JSX structure more difficult to read and understand.

* * *

## [Refs in Solid](refs.md#refs-in-solid)

Solid provides a ref system to access DOM elements directly inside the JSX template, which keeps the structure of the elements intact.

To use [`ref`](../reference/jsx-attributes/ref.md), you declare a variable and use it as the `ref` attribute:

```


function Component() {

  let myElement;




  return (

    <div>

      <p ref={myElement}>My Element</p>

    </div>

  )

}
```

These assignments occur at *creation time* prior to the element being added to the DOM. If access to an element is needed before it is added to the DOM, you can use the callback form of `ref`:

```


<p ref={(el) => {

  myElement = el // el is created but not yet added to the DOM

  }}>

  My Element

</p>
```

note

In TypeScript, you must use a definitive assignment assertion. Since Solid takes care of assigning the variable when the component is rendered, this signals to TypeScript that the variable will be assigned, even if it can't confirm it.

```


let myElement!: HTMLDivElement;
```

### [Signals as refs](refs.md#signals-as-refs)

[Signals](signals.md) can also be used as refs. This is useful when you want to access the element directly, but the element may not exist when the component is first rendered, or may be removed from the DOM at some point.

```


function App() {

  const [show, setShow] = createSignal(false)

  let element!: HTMLParagraphElement




  return (

    <div>

      <button onClick={() => setShow((isShown) => !isShown)}>Toggle</button>




      <Show when={show()}>

        <p ref={element}>This is the ref element</p>

      </Show>

    </div>

  )

}
```

In this example, the paragraph element is only rendered when the `show` signal is `true`. When the component initializes, the paragraph element does not exist, so the `element` variable is not assigned. Once the `show` signal is set to `true`, the paragraph element is rendered, and the `element` variable is assigned to the paragraph element.

You can see a detailed view of the ref update lifecycle in this [Solid playground example](https://playground.solidjs.com/anonymous/22a1abfa-a0f5-44a6-bbe6-40387cf63b95).

* * *

## [Forwarding refs](refs.md#forwarding-refs)

Forwarding refs is a technique that allows you to pass a ref from a parent component to a child component. This is useful when you want to access the DOM element of a child component from the parent component.

To forward a ref, you need to pass the ref to the child component, and then assign the ref to the child component's element.

When a child component receives a `ref` attribute from its parent, the `ref` is passed as a callback function. This is regardless of whether the parent passed it as a simple assignment or a callback.

Once the child component receives the `ref`, it can be assigned to the element that the child component wants to expose through the `ref` attribute. To access the `ref` in the child component, it is passed as a prop:

```


// Parent component

import { Canvas } from "./Canvas.jsx"




function ParentComponent() {

  let canvasRef




  const animateCanvas = () => {

    // Manipulate the canvas using canvasRef...

  }




  return (

    <div>

      <Canvas ref={canvasRef} />

      <button onClick={animateCanvas}>Animate Canvas</button>

    </div>

  )

}




// Child component

function Canvas(props) {

  return (

    <div className="canvas-container">

      <canvas ref={props.ref} /> {/* Assign the ref to the canvas element */}

    </div>

  )

}
```

In this example, the `canvas` element is directly assigned the `ref` attribute through the `props.ref` variable. This forwards the reference to the parent component, giving it direct access to the `canvas` element.

* * *

## [Directives](refs.md#directives)

Directives allow the attachment of reusable behaviours to DOM elements. The [`use:`](../reference/jsx-attributes/use.md) prefix is used to denote these custom directives. Unlike props or attributes, directives operate at a lower level through providing fine-grained control over the elements they are attached to.

Directives are like callback refs but they enable two extra features:

- Having multiple directives on an element.
- Passing in reactive data to the callback.

A directive is essentially a function with a specific signature:

```


function directive(element: Element, accessor: () => any): void
```

- `element`: The DOM element that the directive is applied to.
- `accessor`: A function that gives access to the value(s) passed to the directive.

The directive functions are called at render time, but are called before the element is added to the DOM. Due to this order, elements are fully primed with their attributes, properties, or event listeners, therefore minimizing unexpected behaviors or premature interactions.

Within directives, you're able to perform a variety of tasks, including:

- creating [signals](signals.md)
- initiating [effects](../guides/state-management.md#reacting-to-changes)
- adding [event listeners](components/event-handlers.md)
- and more.

To learn more about directives and how they work with TypeScript, refer to our [TypeScript for Solid guide](../configuration/typescript.md).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Frefs.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Frefs)

Previous[← Stores](stores.md)

Next[Fine-grained reactivity →](../advanced-concepts/fine-grained-reactivity.md)

On this page

1. [Overview](#_top)
2. [Accessing DOM elements](#accessing-dom-elements)
3. [JSX as a value](#jsx-as-a-value)
4. [Refs in Solid](#refs-in-solid)
   
   1. [Signals as refs](#signals-as-refs)
5. [Forwarding refs](#forwarding-refs)
6. [Directives](#directives)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/refs.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Frefs.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Frefs)