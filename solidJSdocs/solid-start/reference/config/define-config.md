[**Solid**Start](../..)

- [Core](../../../index.md)
- [Router](../../../solid-router)
- [SolidStart](../..)
- [Meta](../../../solid-meta)

[](https://github.com/solidjs/solid-start)[](https://discord.com/invite/solidjs)

LearnReference

- Entrypoints
  
  - [app.config.ts](../entrypoints/app-config.md)
  - [app.tsx](../entrypoints/app.md)
  - [entry-client.tsx](../entrypoints/entry-client.md)
  - [entry-server.tsx](../entrypoints/entry-server.md)
- Config
  
  - [defineConfig](define-config.md)
- Routing
  
  - [FileRoutes](../routing/file-routes.md)
- Client
  
  - [clientOnly](../client/client-only.md)
  - [mount](../client/mount.md)
  - [StartClient](../client/start-client.md)
- Server
  
  - ["use server"](../server/use-server.md)
  - [createHandler](../server/create-handler.md)
  - [createMiddleware](../server/create-middleware.md)
  - [GET](../server/get.md)
  - [getServerFunctionMeta](../server/get-server-function-meta.md)
  - [HttpHeader](../server/http-header.md)
  - [HttpStatusCode](../server/http-status-code.md)
  - [StartServer](../server/start-server.md)

Config

# defineConfig

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/config/define-config.mdx)

The `defineConfig` helper is from `@solidjs/start/config` and is used within [`app.config.ts`](../entrypoints/app-config.md).

It takes a configuration object with settings for SolidStart, Vite, and Nitro.

* * *

## [Configuring Vite](define-config.md#configuring-vite)

SolidStart supports most Vite options, including plugins via the `vite` option:

```


import { defineConfig } from "@solidjs/start/config";




export default defineConfig({

  vite: {

    // vite options

    plugins: [],

  },

});
```

The `vite` option can also be a function that can be customized for each Vinxi router.

In SolidStart, 3 routers are used:

- `server` - server-side routing
- `client` - for the client-side routing
- `server-function` - server functions.

```


import { defineConfig } from "@solidjs/start/config";




export default defineConfig({

  vite({ router }) {

    if (router === "server") {

    } else if (router === "client") {

    } else if (router === "server-function") {

    }

    return { plugins: [] };

  },

});
```

* * *

## [Configuring Nitro](define-config.md#configuring-nitro)

SolidStart uses [Nitro](https://nitro.build/) to run on a number of platforms. The `server` option exposes some Nitro options including the build and deployment presets. An overview of all available presets is available in the [Deploy section of the Nitro documentation](https://nitro.build/deploy).

Some common ones include:

**Servers**

- [Node.js Server](https://nitro.build/deploy/runtimes/node#handler-advanced) (`node`) (Default)
- [Deno Server](https://nitro.build/deploy/runtimes/deno) (`deno_server`)
- [Bun Server](https://nitro.build/deploy/runtimes/bun) (`bun`)

**Providers**

- [Netlify Functions and Edge](https://nitro.build/deploy/providers/netlify) (`netlify`, `netlify-edge`)
- [Vercel Functions and Edge](https://nitro.build/deploy/providers/vercel) (`vercel`, `vercel-edge`)
- [AWS Lambda and Lambda@Edge](https://nitro.build/deploy/providers/aws) (`aws_lambda`)
- [Cloudflare Workers and Pages](https://nitro.build/deploy/providers/cloudflare) (`cloudflare`, `cloudflare_pages`, `cloudflare_module`)
- [Deno Deploy](https://nitro.build/deploy/providers/deno-deploy) (`deno_deploy`)

**Static site generation**

- [Route pre-rendering](../../building-your-application/route-prerendering.md)

By passing no arguments, the default will be the Node preset. Other presets may be automatically detected by the provider, however, if not, they must be added to the configuration within the `server-preset` option.

For example, using Netlify Edge would look like the following:

```


import { defineConfig } from "@solidjs/start/config";




export default defineConfig({

  server: {

    preset: "netlify_edge",

  },

});
```

#### [Special note](define-config.md#special-note)

SolidStart uses async local storage. Netlify, Vercel, and Deno support this out of the box but if you're using Cloudflare you will need to specify the following:

```


import { defineConfig } from "@solidjs/start/config";




export default defineConfig({

  server: {

    preset: "cloudflare_module",

    rollupConfig: {

      external: ["__STATIC_CONTENT_MANIFEST", "node:async_hooks"],

    },

  },

});
```

Within `wrangler.toml` you will need to enable node compatibility:

```


compatibility_flags = [ "nodejs_compat" ]
```

* * *

## [Parameters](define-config.md#parameters)

PropertyTypeDefaultDescriptionssrbooleantrueToggle between client and server rendering.solidobjectConfiguration object for [vite-plugin-solid](https://github.com/solidjs/vite-plugin-solid)extensionsstring\[]\["js", "jsx", "ts", "tsx"]Array of file extensions to be treated as routes.serverobjectNitro server config optionsappRootstring"./src"The path to the root of the application.routeDirstring"./routes"The path to where the routes are located.middlewarestringThe path to an optional [middleware](../../advanced/middleware.md) file.devOverlaybooleantrueToggle the dev overlay.experimental.islandsbooleanfalseEnable "islands" mode.vite`ViteConfig` or `({ router })=>ViteConfig`[Vite config object](https://vitejs.dev/config/shared-options.html). Can be configured for each `router` which has the string value "server", "client" or "server-function"\`

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fconfig%2Fdefine-config.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fconfig%2Fdefine-config)

Previous[← entry-server.tsx](../entrypoints/entry-server.md)

Next[FileRoutes →](../routing/file-routes.md)

On this page

1. [Overview](#_top)
2. [Configuring Vite](#configuring-vite)
3. [Configuring Nitro](#configuring-nitro)
   
   1. [Special note]()
4. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/config/define-config.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fconfig%2Fdefine-config.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fconfig%2Fdefine-config)