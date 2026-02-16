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

# Tailwind CSS

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/tailwind.mdx)

note

This guide is for Tailwind CSS v4. For **Tailwind CSS v3** refer to [Tailwind CSS v3](tailwind-v3.md).

[Tailwind CSS](https://tailwindcss.com/) is an on-demand utility CSS library that integrates seamlessly with Solid as a built-in PostCSS plugin.

* * *

## [Installation](tailwind.md#installation)

1. Install Tailwind CSS as a development dependency:

npmpnpmyarnbundeno

```


npm i tailwindcss @tailwindcss/postcss postcss -D
```

```


pnpm i tailwindcss @tailwindcss/postcss postcss -D
```

```


yarn add tailwindcss @tailwindcss/postcss postcss -D
```

```


bun i tailwindcss @tailwindcss/postcss postcss -d
```

```


deno add npm:tailwindcss @tailwindcss/postcss postcss -D
```

2. Add `@tailwind/postcss` to the `plugins` in your PostCSS configuration. If you do not have a PostCSS configuration file, create a new one called `postcss.config.mjs`.

```


export default {

  plugins: {

    "@tailwindcss/postcss": {},

  }

}
```

For a deeper dive into configuration, you can check out the [Tailwind Official Documentation](https://tailwindcss.com/docs/configuration).

* * *

## [Import Tailwind CSS](tailwind.md#import-tailwind-css)

Add an `@import` to your `src/index.css` file that imports Tailwind CSS.

```


@import "tailwindcss";
```

* * *

## [Import your CSS file](tailwind.md#import-your-css-file)

Import your `index.css` file into the root `index.jsx` or `index.tsx` file:

```


import { render } from "solid-js/web"

import App from "./App"

import "./index.css"




render(() => <App />, document.getElementById('root') as HTMLElement);
```

* * *

## [Usage](tailwind.md#usage)

With Tailwind CSS set up, you can now utilize its utility classes. For instance, if you previously had a `Card.css` file, you can replace or remove it:

```


/* src/components/Card.css */

/* Remove or replace these styles with Tailwind utility classes */
```

Update your components to use Tailwind's utility classes:

```


/* src/components/Card.jsx */

function Card() {

  return (

    <div class="grid place-items-center min-h-screen">

      <div class="h-[160px] aspect aspect-[2] rounded-[16px] shadow-[0_0_0_4px_hsl(0_0%_0%_/_15%)]">

        Hello, world!

      </div>

    </div>

  );

}
```

* * *

## [Support](tailwind.md#support)

For additional assistance, refer to the [Tailwind CSS/Vite integration guide](https://tailwindcss.com/docs/guides/vite).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Ftailwind.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Ftailwind)

Previous[← Macaron](macaron.md)

Next[UnoCSS →](uno.md)

On this page

1. [Overview](#_top)
2. [Installation](#installation)
3. [Import Tailwind CSS](#import-tailwind-css)
4. [Import your CSS file](#import-your-css-file)
5. [Usage](#usage)
6. [Support](#support)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/tailwind.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Ftailwind.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Ftailwind)