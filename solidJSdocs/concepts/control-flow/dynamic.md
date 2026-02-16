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
    
    - [Conditional rendering](conditional-rendering.md)
    - [Dynamic](dynamic.md)
    - [List rendering](list-rendering.md)
    - [Portal](portal.md)
    - [Error boundary](error-boundary.md)
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

Control flow

# Dynamic

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/dynamic.mdx)

`<Dynamic>` is a Solid component that allows you to render components dynamically based on data. By passing either a string representing a [native HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) or a component function to the `component` prop, you can render the chosen component with the remaining props you provide.

```


import { createSignal, For } from "solid-js"

import { Dynamic } from "solid-js/web"




const RedDiv = () => <div style="color: red">Red</div>

const GreenDiv = () => <div style="color: green">Green</div>

const BlueDiv = () => <div style="color: blue">Blue</div>




const options = {

  red: RedDiv,

  green: GreenDiv,

  blue: BlueDiv,

}




function App() {

  const [selected, setSelected] = createSignal("red")




  return (

    <>

      <select

        value={selected()}

        onInput={(e) => setSelected(e.currentTarget.value)}

      >

        <For each={Object.keys(options)}>

          {(color) => <option value={color}>{color}</option>}

        </For>

      </select>

      <Dynamic component={options[selected()]} />

    </>

  )

}
```

This example renders a `<select>` element that allows you to choose between three colors. Once a color is selected, the `<Dynamic>` component will render the chosen color's corresponding component or element.

`<Dynamic>` creates more concise code than alternative conditional rendering options. For example, the following code renders the same result as the previous example:

```


import { createSignal, Switch, Match, For } from "solid-js"




const RedDiv = () => <div style="color: red">Red</div>

const GreenDiv = () => <div style="color: green">Green</div>

const BlueDiv = () => <div style="color: blue">Blue</div>




const options = {

  red: RedDiv,

  green: GreenDiv,

  blue: BlueDiv,

}




function App() {

  const [selected, setSelected] = createSignal("red")




  return (

    <>

      <select

        value={selected()}

        onInput={(e) => setSelected(e.currentTarget.value)}

      >

        <For each={Object.keys(options)}>

          {(color) => <option value={color}>{color}</option>}

        </For>

      </select>

      <Switch fallback={<BlueDiv />}>

        <Match when={selected() === "red"}>

          <RedDiv />

        </Match>

        <Match when={selected() === "green"}>

          <GreenDiv />

        </Match>

      </Switch>

    </>

  )

}
```

Instead of a more verbose [`<Switch>` and `<Match>`](conditional-rendering.md) statement, `<Dynamic>` offers a more concise way to render components dynamically.

* * *

## [Props](dynamic.md#props)

When working with these components, you can pass [props](../components/props.md) to the component you are rendering by passing them to the `<Dynamic>` component. This makes them available to the component you are rendering, similar to how you would pass props to components in JSX.

```


import { Dynamic } from "solid-js/web"




function App() {

  return (

    <Dynamic component={someComponent} someProp="someValue" />

  )

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcontrol-flow%2Fdynamic.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcontrol-flow%2Fdynamic)

Previous[← Conditional rendering](conditional-rendering.md)

Next[List rendering →](list-rendering.md)

On this page

1. [Overview](#_top)
2. [Props](#props)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/dynamic.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcontrol-flow%2Fdynamic.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcontrol-flow%2Fdynamic)