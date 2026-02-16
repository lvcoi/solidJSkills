# app.config.ts

The `app.config.ts` is the root of every SolidStart app and the main point of configuration. This file exports a configuration for SolidStart, [Vinxi](https://vinxi.vercel.app/), [Vite](https://vitejs.dev) and [Nitro](https://nitro.build/). The easiest way to generate a configuration is to use the [`defineConfig`](../config/define-config.md) helper.

Here [`defineConfig`](../config/define-config.md) is used to create a minimal configuration with default settings.

```
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({});
```
To see more configuration options, see [`defineConfig`](../config/define-config.md).
