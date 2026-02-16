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

# Basics

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/components/basics.mdx)

Components are the building blocks of Solid applications. These units are reusable and can be combined to create more complex applications.

Components are functions that return [JSX](../understanding-jsx.md) elements:

```


function MyComponent() {

  return <div>Hello World</div>;

}
```

A component can be as simple as a single element or as complex as a full page. They can also be nested within each other to create more intricate applications:

```


function App() {

  return (

    <div>

      <MyComponent />

    </div>

  );

}
```

note

Component names must start with a capital letter to distinguish them from regular HTML elements. Otherwise, they won't be recognized as components.

* * *

## [Component trees](basics.md#component-trees)

A web page is displayed by rendering a component tree, which is a hierarchical structure of components. At the top of the tree is the primary application component, which is the root of the tree. Child components are nested within the primary component, and those components can have their own child components. This nesting can continue as needed.

A simple application may have a component tree that looks like this:

```


App // primary application component

└── MyComponent // child component
```

When an application grows, the component tree can become more complex. For example, a more complex application may have a component tree that looks like this:

```


App

├── Header

├── Sidebar

├── Content

│   ├── Post

│   │   ├── PostHeader

│   │   ├── PostContent

│   │   └── PostFooter

│   ├── Post

│   │   ├── PostHeader

│   │   ├── PostContent

│   │   └── PostFooter

│   └── Post

│       ├── ...

└── Footer
```

In nesting components, you can create a hierarchy of components that can be reused throughout the application. This allows for a more modular approach to building applications, as components can be reused in different contexts.

* * *

## [Component lifecycles](basics.md#component-lifecycles)

Components have a lifecycle that defines how they are created, updated, and destroyed. A Solid component's lifecycle is different from other frameworks, as it is tied to the [concept of reactivity](../intro-to-reactivity.md).

Where frameworks may re-run components on every state change, a Solid component's lifecycle is tied to its initial run. What this means is that a Solid component is only run once, when it is first rendered into the DOM. After that, the component is not re-run, even if the application's state changes.

When the Solid component renders, it sets up a reactive system that monitors for state changes. When a state change occurs, the component will update the relevant areas without re-running the entire component. By bypassing the full component lifecycle on every state change, Solid has a more predictable behavior compared to frameworks that re-run functions on every update.

Since the component's logic is not continuously visited, getting this setup right is important when working with Solid.

### [Initialization & configuration](basics.md#initialization--configuration)

When a component is first rendered into the DOM, the component function is executed. This is where you will set up the component's state and side-effects. This includes setting up [signals](../signals.md), [stores](../stores.md), [effects](../effects.md), and other reactive elements. Since the logic in the component function is not continuously visited, it is important to set up the component correctly from the outset.

Each component instance is independent of other instances, meaning that each component has its own state and side-effects. Through establishing proper dependencies, you can ensure that the component is set up correctly. This allows for components to be reused in different contexts without affecting each other.

```


function MyComponent() {

  const [count, setCount] = createSignal(0);




  console.log(count());




  return (

    <div>

      <p>Count: {count()}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

    </div>

  );

}
```

When this component is rendered into the DOM, the function body is executed. This includes creating the `count` signal and executing the `console.log(count())` statement, which will log the current value of `count` to the console. In addition, the component's JSX is returned, which will be rendered into the DOM.

After the component is rendered, the `console.log` statement will not be executed again, even if the component's state changes. However, because the component's JSX is reactive, each press of the button will update the DOM with the new value of `count`.

In essence, Solid splits the concerns:

1. The initial setup logic, which is executed once when the component is rendered.
2. The reactive logic, which is executed when the component's state changes.

### [Conditional rendering](basics.md#conditional-rendering)

To display different content based on state or other criteria, you can use conditional rendering. Given that the component function is only executed once, conditional statements must be placed within the return statement. This design ensures that conditional paths are clear and immediately understood.

```


function MyComponent() {

  const [count, setCount] = createSignal(0);

  return (

    <div>

      {count() > 5 ? (

        <div>Count limit reached</div>

      ) : (

        <>

          <p>Count: {count()}</p>

          <button onClick={() => setCount((prev) => prev + 1)}>

            Increment

          </button>

        </>

      )}

    </div>

  );

}
```

This example uses a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) to conditionally render different content based on the value of `count`. When `count` is greater than 5, the component will display `"Count limit reached"`. Otherwise, it will display the current count with an increment button.

note

To simplify conditional rendering, Solid provides built-in [control-flow](../control-flow/conditional-rendering.md) components like [`Show`](../control-flow/conditional-rendering.md#show), which create a more readable conditional rendering experience.

```


function MyComponent() {

  const [count, setCount] = createSignal(0)




  return (

    <div>

      <Show

        when={count() > 5}

        fallback={

          <>

            <p>Count: {count()}</p>

            <button onClick={() => setCount((prev) => prev+1)}>Increment</button>

          </>

        }

      >

        <div>Count limit reached</div>

      </Show>

    </div>

  )

}
```

* * *

## [Importing and exporting](basics.md#importing-and-exporting)

For components to be reusable, they need to be exported from one module and imported into another. This allows for components to be shared and used where needed.

### [Exporting components](basics.md#exporting-components)

Once defined, a component can be [exported](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) to make it available for use in other parts of your application. There are two ways to export a component: [named exports](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#named_exports) and [default exports](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#default_exports).

**Named export:**

Named exports allow for multiple components to be exported from a single file. To export a component, you must use the `export` keyword before the function definition or specify the name of the component to export in curly braces (`{}`).

```


export function MyComponent() {

  return <div>Hello World</div>

}




// or




function MyComponent() {

  return <div>Hello World</div>

}




export { MyComponent }
```

**Default export:**

Default exports specify a single component to export from a file. This is done by using the `default` keyword.

```


// MyComponent.ts

export default function MyComponent() {

  return <div>Hello World</div>

}
```

### [Importing components](basics.md#importing-components)

To use a component in another file or component, it must be [imported](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import). To import a component, you must specify the path to the file containing the component and the name of the component to import.

**Named import:**

When importing a named export, you must specify the name of the component to import in curly braces (`{}`).

```


// App.ts

import { MyComponent } from "./MyComponent";




function App() {

  return (

    <div>

      <MyComponent />

    </div>

  );

}
```

This is the preferred way to import components, as it allows for better code readability and maintainability. Additionally, it allows for multiple components to be imported from the same file.

```


// App.ts

import { MyComponent, MyOtherComponent } from "./MyComponent";




function App() {

  return (

    <div>

      <MyComponent />

      <MyOtherComponent />

    </div>

  );

}
```

**Default import:**

To import a default export, you must specify the name of the component to import.

```


// App.ts

import MyComponent from "./MyComponent";




function App() {

  return (

    <div>

      <MyComponent />

    </div>

  );

}
```

### [Importing Solid and its utilities](basics.md#importing-solid-and-its-utilities)

To use Solid, you must import the Solid library. The reactive primitives and utilities are exported from Solid's main module.

```


import { createSignal } from "solid-js";
```

However, some of Solid's utilities are exported from their own modules.

```


import { createStore } from "solid-js/store";
```

To see a full list of Solid's utilities, the Reference Tab in the sidebar provides the API Documentation.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcomponents%2Fbasics.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcomponents%2Fbasics)

Previous[← Understanding JSX](../understanding-jsx.md)

Next[Class and style →](class-style.md)

On this page

1. [Overview](#_top)
2. [Component trees](#component-trees)
3. [Component lifecycles](#component-lifecycles)
   
   1. [Initialization & configuration](#initialization--configuration)
   2. [Conditional rendering](#conditional-rendering)
4. [Importing and exporting](#importing-and-exporting)
   
   1. [Exporting components](#exporting-components)
   2. [Importing components](#importing-components)
   3. [Importing Solid and its utilities](#importing-solid-and-its-utilities)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/components/basics.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcomponents%2Fbasics.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcomponents%2Fbasics)