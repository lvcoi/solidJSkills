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

# SASS

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/sass.mdx)

[SASS](https://sass-lang.com/) is a popular CSS preprocessor that makes authoring CSS easier. It is a superset of CSS and offers two syntaxes: SCSS and the indented syntax (often referred to as just "SASS").

* * *

## [Installation](sass.md#installation)

Depending on your package manager, SASS can be installed as a development dependency:

npmpnpmyarnbundeno

```


npm i sass -D
```

```


pnpm i sass -D
```

```


yarn add sass -D
```

```


bun i sass -d
```

```


deno add npm:sass -D
```

* * *

## [Convert filename extensions](sass.md#convert-filename-extensions)

After installation, the `.css` filename extensions will have to be changed to `.scss` or `.sass`. The `.scss` syntax is a strict superset of CSS, while `.sass` offers a more relaxed syntax. Vite, which is integrated with Solid, supports both. However, `.scss` is generally recommended.

```


// Card.scss

.grid {

  display: grid;

  &-center {

    place-items: center;

  }

}

.screen {

  min-height: 100vh;

}

.card {

  height: 160px;

  aspect-ratio: 2;

  border-radius: 16px;

  background-color: white;

  box-shadow: 0 0 0 4px hsl(0 0% 0% / 15%);

}
```

In a Solid component:

```


// Card.jsx

import "./card.scss";




function Card() {

  return (

    <>

      <div class="grid grid-center screen">

        <div class="card">Hello, world!</div>

      </div>

    </>

  );

}
```

By simply changing the file extension from `.css` to `.scss` or `.sass` , Vite will automatically recognize these files and compile SASS to CSS on demand. When building in production, all SASS files are converted to CSS. This ensures compatibility with most modern browsers.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Fsass.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Fsass)

Previous[← Styling your components](../styling-your-components.md)

Next[LESS →](less.md)

On this page

1. [Overview](#_top)
2. [Installation](#installation)
3. [Convert filename extensions](#convert-filename-extensions)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/sass.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Fsass.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Fsass)