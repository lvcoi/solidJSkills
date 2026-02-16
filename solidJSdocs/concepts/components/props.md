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

# Props

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/components/props.mdx)

Props are a way to pass state from a parent component to a child component. These read-only properties are passed to components as attributes within JSX and are accessible within the component via the `props` object:

```


function App() {

  // Passing a prop named "name" to the MyComponent component

  return (

    <div>

      <MyComponent name="Ryan Carniato" />

    </div>

  );

}
```

To access the props in the child component, you use the `props` object:

```


function MyComponent(props) {

  return <div>Hello {props.name}</div>;

}
```

* * *

## [`mergeProps`](props.md#mergeprops)

[`mergeProps`](../../reference/reactive-utilities/merge-props.md) is a Solid utility function designed to merge multiple potentially reactive objects together. It behaves similar to [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) but will retain the reactivity of the properties being merged. This helps ensure that when individual properties within the merged object change, their reactivity is not lost.

```


import { mergeProps } from "solid-js";




function MyComponent(props) {

  // Using mergeProps to set default values for props

  const finalProps = mergeProps({ defaultName: "Ryan Carniato" }, props);




  return <div>Hello {finalProps.defaultName}</div>;

}




// Usage: <MyComponent defaultName="Ryan Carniato" />
```

When merging props, if there is no existing value for a property, the value from the first object will be used. However, if a value already exists, it will be used instead, all while retaining the reactivity of the property.

* * *

## [Destructuring props](props.md#destructuring-props)

Props are read-only so that child components do not directly modify the data passed by the parent. This also encourages one-way data flow, a pattern often seen to promote more predictable data management.

With Solid, destructuring props is not recommended as it can break reactivity. Instead, you should access props directly from the `props` object, or wrap them in a function to ensure they are always up-to-date:

```


function MyComponent(props) {

  const { name } = props; // ❌: breaks reactivity and will not update when the prop value changes

  const name = props.name; // ❌: another example of breaking reactivity

  const name = () => props.name; // ✓: by wrapping `props.name` into a function, `name()` always retrieves its current value

}
```

### [`splitProps`](props.md#splitprops)

[`splitProps`](../../reference/reactive-utilities/split-props.md) is a utility function designed to help split a single props object into multiple sets of props, retaining the reactivity of the individual properties. It provides a way to destructure props without breaking reactivity.

`splitProps` gives you the ability to define one or more arrays of keys that you wish to extract into separate props objects, all while retaining the reactivity of the individual properties. It will return an array of props objects related to each set of keys, plus an additional props object containing any remaining keys.

When passing props to child components, you can use `splitProps` to split the props into multiple groups, and then pass each group to the appropriate child component:

```


import { splitProps } from "solid-js";




function ParentComponent(props) {

  // Splitting props into two groups: 'name' and 'age'

  const [greetingProps, personalInfoProps, restProps] = splitProps(

    props,

    ["name"],

    ["age"]

  );




  // Using greetingProps and personalInfoProps in the current component

  return (

    <div>

      <Greeting {...greetingProps} />

      <PersonalInfo {...personalInfoProps} />

      {/* restProps can be passed down or used as needed */}

    </div>

  );

}
```

* * *

## [Passing props to children](props.md#passing-props-to-children)

In most instances, simply using `props` within JSX will work without any issues. However, there are some cases where accessing `props.children` multiple times can introduce problems and unexpected behaviours, such as repeated creation of child components or elements. For instances like these, Solid provides a [`children`](../../reference/component-apis/children.md) helper that ensures you always get the right child components without anything unwanted happening.

```


import { children } from "solid-js";




function ColoredList(props) {

  const safeChildren = children(() => props.children);




  return <>{safeChildren()}</>;

}
```

* * *

## [Prop drilling](props.md#prop-drilling)

Prop drilling is a term used to describe the process of passing props through multiple layers of components. While it can be a useful pattern, it can also lead to problems. When components are nested deeply, passing props through each component can become difficult to manage. Additionally, this can lead to components receiving props that they do not need, unnecessary re-renders, and trouble refactoring.

Since components in Solid do not own state, props are not needed to pass state between components, but may be used. Because of this, there may be times when you need to pass props through multiple layers of components. A common solution to this problem is to use [Context](../context.md) to pass state to deeply nested components without having to pass props through each component in between.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcomponents%2Fprops.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcomponents%2Fprops)

Previous[← Event handlers](event-handlers.md)

Next[Signals →](../signals.md)

On this page

1. [Overview](#_top)
2. [mergeProps](#mergeprops)
3. [Destructuring props](#destructuring-props)
   
   1. [splitProps](#splitprops)
4. [Passing props to children](#passing-props-to-children)
5. [Prop drilling](#prop-drilling)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/components/props.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcomponents%2Fprops.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcomponents%2Fprops)