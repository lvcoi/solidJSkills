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

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/tailwind-v3.mdx)

[Tailwind CSS v3](https://v3.tailwindcss.com/) is an on-demand utility CSS library that integrates seamlessly with Solid as a built-in PostCSS plugin.

* * *

## [Installation](tailwind-v3.md#installation)

1. Install Tailwind CSS as a development dependency:

npmpnpmyarnbundeno

```


npm i tailwindcss@3 postcss autoprefixer -D
```

```


pnpm i tailwindcss@3 postcss autoprefixer -D
```

```


yarn add tailwindcss@3 postcss autoprefixer -D
```

```


bun i tailwindcss@3 postcss autoprefixer -d
```

```


deno add npm:tailwindcss@3 postcss autoprefixer -D
```

2. Next, run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

npmpnpmyarnbundeno

```


npx tailwindcss init -p
```

```


pnpx tailwindcss init -p
```

```


yarn dlx tailwindcss init -p
```

```


bunx tailwindcss init -p
```

```


dpx tailwindcss init -p
```

3. Since Tailwind CSS is configuration-driven, after initializing, a `tailwind.config.js` file will be created at the root of your project directory:

```


/** @type {import('tailwindcss').Config} */

module.exports = {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {

    extend: {},

  },

  plugins: [],

};
```

For a deeper dive into configuration, you can check out the [Tailwind Official Documentation](https://tailwindcss.com/docs/configuration).

* * *

## [Add Tailwind directives](tailwind-v3.md#add-tailwind-directives)

In your `src/index.css` file, add the following Tailwind directives:

```


@tailwind base;

@tailwind components;

@tailwind utilities;
```

These directives inform PostCSS that you're using Tailwind and establish the order of the directives. You can append custom CSS below these directives.

* * *

## [Import Tailwind CSS](tailwind-v3.md#import-tailwind-css)

Import your `index.css` file into the root `index.jsx` or `index.tsx` file:

```


import { render } from "solid-js/web"

import App from "./App"

import "./index.css"




render(() => <App />, document.getElementById('root') as HTMLElement);
```

* * *

## [Usage](tailwind-v3.md#usage)

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

## [Support](tailwind-v3.md#support)

For additional assistance, refer to the [Tailwind CSS/Vite integration guide](https://tailwindcss.com/docs/guides/vite).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Ftailwind-v3.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Ftailwind-v3)

Next[Overview →](../../index.md)

On this page

1. [Overview](#_top)
2. [Installation](#installation)
3. [Add Tailwind directives](#add-tailwind-directives)
4. [Import Tailwind CSS](#import-tailwind-css)
5. [Usage](#usage)
6. [Support](#support)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/tailwind-v3.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Ftailwind-v3.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Ftailwind-v3)