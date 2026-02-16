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

# Understanding JSX

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/understanding-jsx.mdx)

JSX is an extension for JavaScript. It allows you to write HTML-like code inside your JavaScript file which keeps your rendering logic and content in the same place. This provides a concise and readable way to create and represent components.

* * *

## [How Solid uses JSX](understanding-jsx.md#how-solid-uses-jsx)

Solid was designed to align closely with HTML standards.

```


const element = <h1>I'm JSX!!</h1>
```

It offers a distinct advantage, however: to copy/paste solutions from resources like Stack Overflow; and to allow direct usage of templates from design tools. Solid sets itself apart by using JSX immediately as it returns [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) elements. This lets you use dynamic expressions within your HTML by allowing variables and functions to be references with the use of curly braces (`{ }`):

```


const Component = () => {

  const animal = { breed: "cat", name: "Midnight" }




  return (

    <p>

      I have a {animal.breed} named {animal.name}!

    </p>

  )

}
```

This means JavaScript content can be rendered on web pages based on an application's state or logic.

Additionally, Solid's [reactive](intro-to-reactivity.md) system introduces [fine-grained reactivity](../advanced-concepts/fine-grained-reactivity.md) with JSX. This updates only the necessary parts of the DOM when changes occur in the underlying state.

* * *

## [Using JSX in Solid](understanding-jsx.md#using-jsx-in-solid)

### [Return a single root element](understanding-jsx.md#return-a-single-root-element)

Where HTML lets you have disconnected tags at the top level, JSX requires that a component to return a single root element.

advanced

When working with JSX, parts of your code are translated into structured HTML that is placed at the start of the file. Static elements are processed differently from dynamic ones, which might change based on data or user actions. For dynamic elements, special markers are added for better handling during rendering.

Having a single root creates a consistent and manageable hierarchy to optimize rendering and updates.

JSX maintains the familiar nested, tree-like structure found in HTML. As a result, parent-child relationships between elements become easier to follow.

### [Close all tags](understanding-jsx.md#close-all-tags)

Self-closing tags are a must in JSX. Unlike in HTML, where elements like `<input>`, `<img>`, or `<br>` don't require explicit closure, JSX requires consistent self-closing tags. This helps to avoid potential rendering issues.

```


<img src="./image-here.png" />
```

### [Properties vs. attributes](understanding-jsx.md#properties-vs-attributes)

HTML attributes and JSX properties may seem similar, but they serve different purposes and behave differently. Both offer ways to specify configurations or pass information. However, HTML is used for standard web content and JSX creates Solid's component logic.

#### [HTML attributes](understanding-jsx.md#html-attributes)

[HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) are values set directly on HTML elements. They provide additional information about an element to guide its initial behavior and state. These attributes are often translated into properties on DOM objects once the browser parses the HTML.

In JSX files, HTML attributes are used much like regular HTML, with a few key differences due to the blend of HTML and JavaScript:

- Event listeners such as `onClick` can be in camelCase or lowercase. (**Note:** When using ESLint, you will get a warning if you use lowercase.)
- In cases where you can dynamically specify a value, you can replace the `"` and `"` with curly braces (`{ }`):

```


<button class="myClass" onClick={handleClick}>

  Click me!

</button>
```

note

If you wish to pass objects in JSX, such as with inline styling, you will have to use double curly braces (`{{ }}`).

```


<button style={{

color: 'red',

font-size: '2rem',

}}>

Click me!

</button>
```

### [JSX properties (props)](understanding-jsx.md#jsx-properties-props)

JSX properties, commonly known as "props," help with the passing of data and configurations to components within an application. They connect the component with the data it requires, for seamless data flows and dynamic interactions.

#### [Core concepts](understanding-jsx.md#core-concepts)

- **Static props**: In Solid's JSX, static props are integrated directly into the HTML by cloning the template and using them as attributes.
- **Dynamic props**: Dynamic props rely on state, allowing the content or properties to be dynamic. An example is changing the style of an element in response to interactions within an application. This can be expressed in the form of signals (`value={value()}`).
- **Data transfer**: Props are also used to fill components with data that comes from resources, like [`createResource`](../reference/basic-reactivity/create-resource.md) calls. This results in components that react in real-time to data changes.

note

Expressions, whether fixed or dynamic, get applied *in the order defined within the JSX*. This works for a wide range of DOM elements, but will not work with elements that require attributes to be defined in a special order, such as input types with `type='range'`.

When order influences an element's behavior, users must define the expressions in the order that the element is expected.

For how to use props effectively in Solid, explore the [props page](components/props.md).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Funderstanding-jsx.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Funderstanding-jsx)

Previous[← Intro to reactivity](intro-to-reactivity.md)

Next[Basics →](components/basics.md)

On this page

1. [Overview](#_top)
2. [How Solid uses JSX](#how-solid-uses-jsx)
3. [Using JSX in Solid](#using-jsx-in-solid)
   
   1. [Return a single root element](#return-a-single-root-element)
   2. [Close all tags](#close-all-tags)
   3. [Properties vs. attributes](#properties-vs-attributes)
   4. [JSX properties (props)](#jsx-properties-props)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/understanding-jsx.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Funderstanding-jsx.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Funderstanding-jsx)