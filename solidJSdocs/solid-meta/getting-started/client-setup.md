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

# Client setup

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/getting-started/client-setup.mdx)

You can inject a tag into the `<head />` by rendering one of the head tag components when necessary. No special requirements are needed on the client side.

```


import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";




const App = () => (

  <MetaProvider>

    <div class="Home">

      <Title>Title of page</Title>

      <Link rel="canonical" href="http://solidjs.com/" />

      <Meta name="example" content="whatever" />

      // ...

    </div>

  </MetaProvider>

);
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Fgetting-started%2Fclient-setup.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Fgetting-started%2Fclient-setup)

Previous[← Install and configure](installation-and-setup.md)

Next[Server setup →](server-setup.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/getting-started/client-setup.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Fgetting-started%2Fclient-setup.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Fgetting-started%2Fclient-setup)