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

# UnoCSS

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/uno.mdx)

[UnoCSS](https://unocss.dev/) is an on-demand utility CSS library that integrates seamlessly with Solid as a Vite plugin.

* * *

## [Install Vite plugin](uno.md#install-vite-plugin)

To get started with UnoCSS in your Solid app:

npmpnpmyarnbundeno

```


npm i unocss -D
```

```


pnpm i unocss -D
```

```


yarn add unocss -D
```

```


bun i unocss -d
```

```


deno add npm:unocss -D
```

* * *

## [Import Vite plugin](uno.md#import-vite-plugin)

After installation, open your `vite.config.js` or `vite.config.ts`. The default Solid Vite configuration looks like this:

```


import { defineConfig } from "vite";

import solidPlugin from "vite-plugin-solid";




export default defineConfig({

  plugins: [solidPlugin()],

  server: {

    port: 3000,

  },

  build: {

    target: "esnext",

  },

});
```

Now, import `unocssPlugin` from "unocss/vite" and add it to the plugins array:

```


import { defineConfig } from "vite";

import unocssPlugin from "unocss/vite";

import solidPlugin from "vite-plugin-solid";




export default defineConfig({

  plugins: [unocssPlugin(), solidPlugin()],

  server: {

    port: 3000,

  },

  build: {

    target: "esnext",

  },

});
```

Ensure that `unocssPlugin` is ordered before `solidPlugin` to prevent certain edge cases.

* * *

## [Import UnoCSS](uno.md#import-unocss)

In your root `index.jsx` or `index.tsx` file, import UnoCSS:

```


/* @refresh reload */

import "uno.css"

import { render } from "solid-js/web"

import "./index.css"

import App from "./App"




render(() => <App />, document.getElementById('root') as HTMLElement);
```

Alternatively, you can use the alias `import "virtual:uno.css"`:

```


/* @refresh reload */

import "virtual:uno.css"

import { render } from "solid-js/web"

import "./index.css"

import App from "./App"




render(() => <App />, document.getElementById('root') as HTMLElement);
```

#### [Support](uno.md#support)

For additional assistance, refer to the [UnoCSS/Vite integration guide](https://unocss.dev/integrations/vite) .

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Funo.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Funo)

Previous[← Tailwind CSS](tailwind.md)

Next[State management →](../state-management.md)

On this page

1. [Overview](#_top)
2. [Install Vite plugin](#install-vite-plugin)
3. [Import Vite plugin](#import-vite-plugin)
4. [Import UnoCSS](#import-unocss)
   
   1. [Support]()

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/uno.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Funo.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Funo)