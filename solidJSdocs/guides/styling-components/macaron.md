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

# Macaron

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/macaron.mdx)

[Macaron](https://macaron.js.org/) is compile-time CSS-in-JS library that offers type safety.

* * *

## [Installation](macaron.md#installation)

1. Install and set up the macaron plugin for your bundler:

npmpnpmyarnbundeno

```


npm i @macaron-css/core @macaron-css/solid
```

```


pnpm i @macaron-css/core @macaron-css/solid
```

```


yarn add @macaron-css/core @macaron-css/solid
```

```


bun i @macaron-css/core @macaron-css/solid
```

```


deno add npm:@macaron-css/core @macaron-css/solid
```

2. Within your `vite.config.js` folder, add the macaron plugin prior to other plugins:

```


import { macaronVitePlugin } from "@macaron-css/vite";

import { defineConfig } from "vite";




export default defineConfig({

  plugins: [

    macaronVitePlugin(),

    // other plugins

  ],

});
```

* * *

## [Usage](macaron.md#usage)

1. Import `styled` from `@macaron-css/solid` and create a styled component:

```


// button.tsx

import { styled } from "@macaron-css/solid";




const Button = styled("button", {});
```

2. Add styles that will be applied to the components by default:

```


import { styled } from "@macaron-css/solid";




const Button = styled("button", {

  base: {

    backgroundColor: "red",

    borderRadius: "10px",

  },

});
```

Variants can be added using the `variants` key:

```


import { styled } from "@macaron-css/solid";




const Button = styled("button", {

  base: {

    backgroundColor: "red",

    borderRadius: "10px",

  },

  variants: {

    color: {

      violet: {

        backgroundColor: "violet",

      },

      gray: {

        backgroundColor: "gray",

      },

    },

  },

});
```

Additionally, the `defaultVariants` feature is set to `variants` by default. This can be overridden at the time of usage:

```


import { styled } from "@macaron-css/solid";




const Button = styled("button", {

  base: {

    backgroundColor: "red",

    borderRadius: "10px",

  },

  variants: {

    color: {

      violet: {

        backgroundColor: "violet",

      },

      gray: {

        backgroundColor: "gray",

      },

    },

  },

  defaultVariants: {

    color: "blue",

  },

});
```

These components can be used like any other Solid component, with type-safe props derived from your variants. For more information on how to use macaron, visit their [documentation](https://macaron.js.org/docs/installation/).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Fmacaron.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Fmacaron)

Previous[← CSS modules](css-modules.md)

Next[Tailwind CSS →](tailwind.md)

On this page

1. [Overview](#_top)
2. [Installation](#installation)
3. [Usage](#usage)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/macaron.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Fmacaron.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Fmacaron)