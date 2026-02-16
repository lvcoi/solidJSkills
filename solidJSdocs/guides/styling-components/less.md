[**Solid**](../../index.md)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- [Quick start](../../quick-start.md)
- Concepts
  
  - [Intro to reactivity](../../concepts/intro-to-reactivity.md)
  - [Understanding JSX](../../concepts/understanding-jsx.md)
  - Components
    
    - [Basics](../../concepts/components/basics.md)
    - [Class and style](../../concepts/components/class-style.md)
    - [Event handlers](../../concepts/components/event-handlers.md)
    - [Props](../../concepts/components/props.md)
  - [Signals](../../concepts/signals.md)
  - Control flow
    
    - [Conditional rendering](../../concepts/control-flow/conditional-rendering.md)
    - [Dynamic](../../concepts/control-flow/dynamic.md)
    - [List rendering](../../concepts/control-flow/list-rendering.md)
    - [Portal](../../concepts/control-flow/portal.md)
    - [Error boundary](../../concepts/control-flow/error-boundary.md)
  - [Effects](../../concepts/effects.md)
  - Derived values
    
    - [Derived signals](../../concepts/derived-values/derived-signals.md)
    - [Memos](../../concepts/derived-values/memos.md)
  - [Context](../../concepts/context.md)
  - [Stores](../../concepts/stores.md)
  - [Refs](../../concepts/refs.md)
- Advanced concepts
  
  - [Fine-grained reactivity](../../advanced-concepts/fine-grained-reactivity.md)
- Guides
  
  - [Styling your components](../styling-your-components.md)
  - [State management](../state-management.md)
  - [Routing & navigation](../routing-and-navigation.md)
  - [Complex state management](../complex-state-management.md)
  - [Fetching data](../fetching-data.md)
  - [Testing](../testing.md)
  - [Deploy your app](../deploying-your-app.md)
- Configuration
  
  - [Environment variables](../../configuration/environment-variables.md)
  - [TypeScript](../../configuration/typescript.md)

Styling your Components

# LESS

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/less.mdx)

[LESS](https://lesscss.org/) is a preprocessor based on JavaScript. It provides the ability to use mixins, variables, and other programmatic tools, making styling code cleaner and less redundant.

* * *

## [Installation](less.md#installation)

To utilize LESS in a Solid app, it will need to be installed as a development dependency:

npmpnpmyarnbundeno

```


npm i less -D
```

```


pnpm i less -D
```

```


yarn add less -D
```

```


bun i less -d
```

```


deno add npm:less -D
```

* * *

## [Using LESS in your app](less.md#using-less-in-your-app)

Start by creating a `.less` file in the `src` directory:

```


//styles.less

.foo {

  color: red;

}

.bar {

  background-color: blue;

}
```

The basic syntax of LESS is very similar to CSS. However, LESS allows the declaration and usage of variables:

```


//styles.less

@plainred: red;

@plainblue: blue;

.foo {

  color: @plainred;

}

.bar {

  background-color: @plainblue;

}
```

To use these styles in a Solid component, import the `.less` file:

```


//component.jsx

import "./styles.less";




function Component() {

  return (

    <>

      <div class="foo bar">Hello, world!</div>

    </>

  );

}
```

By changing the file extension of the imported styles to `.less`, Vite will recognize it as a LESS file and compile it to CSS on demand.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Fless.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Fless)

Previous[← SASS](sass.md)

Next[CSS modules →](css-modules.md)

On this page

1. [Overview](#_top)
2. [Installation](#installation)
3. [Using LESS in your app](#using-less-in-your-app)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/less.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Fless.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Fless)