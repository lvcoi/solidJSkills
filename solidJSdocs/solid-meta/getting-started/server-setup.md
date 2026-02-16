[Solid-**Meta**](..)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](../../solid-start)
- [Meta](..)

[](https://github.com/solidjs/solid-meta)[](https://discord.com/invite/solidjs)

LearnReference

- Getting started
  
  - [Install and configure](installation-and-setup.md)
  - [Client setup](client-setup.md)
  - [Server setup](server-setup.md)

Getting started

# Server setup

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/getting-started/server-setup.mdx)

For server setup, wrap your application with [`MetaProvider`](../reference/meta/metaprovider.md) on the server. This component uses a `tags[]` array to pass down your head tags as part of your server-rendered payload. Once rendered on the server, the component updates this array to include the tags.

```


import { renderToString, getAssets } from "solid-js/web";

import { MetaProvider } from "@solidjs/meta";

import App from "./App";




// ... within the context of a request ...

const app = renderToString(() => (

  <MetaProvider>

    <App />

  </MetaProvider>

));




res.send(`

  <!doctype html>

  <html>

    <head>

      ${getAssets()}

    </head>

    <body>

      <div id="root">${app}</div>

    </body>

  </html>

`);
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Fgetting-started%2Fserver-setup.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Fgetting-started%2Fserver-setup)

Previous[← Client setup](client-setup.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/getting-started/server-setup.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Fgetting-started%2Fserver-setup.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Fgetting-started%2Fserver-setup)