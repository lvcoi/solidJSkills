# UnoCSS

[UnoCSS](https://unocss.dev/) is an on-demand utility CSS library that integrates seamlessly with Solid as a Vite plugin.

* * *

## Install Vite plugin

To get started with UnoCSS in your Solid app:

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

## Import Vite plugin

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

## Import UnoCSS

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
#### Support

For additional assistance, refer to the [UnoCSS/Vite integration guide](https://unocss.dev/integrations/vite) .
