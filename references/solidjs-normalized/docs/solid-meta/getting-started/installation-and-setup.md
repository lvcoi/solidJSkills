# Install and configure

Prerequisites

If using Solid `v1.0`, use version `0.27.x` or greater. For earlier versions (eg. `v0.x`), you must use `v0.26.x`.

* * *

## Installation

To get started, install using your preferred package manager.

```
npm i @solidjs/meta
```
```
pnpm i @solidjs/meta
```
```
yarn add @solidjs/meta
```
```
bun i @solidjs/meta
```
```
deno add npm:@solidjs/meta
```
* * *

## Setup

1. Wrap your application with [`<MetaProvider />`](../reference/meta/metaprovider.md)
2. To include head tags within your application, render any of the following:
   
   1. [`<Title />`](../reference/meta/title.md): Adds the `title` of the page.
   2. [`<Meta />`](../reference/meta/meta.md): Adds extra metadata to the page.
   3. [`<Style />`](../reference/meta/style.md): Adds a `style` element to the page.
   4. [`<Link />`](../reference/meta/link.md): Specifies a relationship between the page and an external resource.
   5. [`<Base />`](../reference/meta/base.md): Specifies the base URL for all relative URLs in the document.
   6. [`useHead`](../reference/meta/use-head.md): Inserts arbitrary head tags when a dedicated component does not exist.

<!--THE END-->

- These components can be used multiple times within the application.

<!--THE END-->

3. If using Solid on the server with JSX, no additional configuration is required.

Here is an example of how your code might look after this setup.

```
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";

const App = () => (

  <MetaProvider>

    <div class="Home">

      <Title>Title of page</Title>

      <Link rel="canonical" href="http://solidjs.com/" />

      <Meta name="example" content="whatever" />

    </div>

  </MetaProvider>

);
```
On the server, tags are collected, and then on the client, server-generated tags are replaced with those rendered on the client side. This process is important for maintaining the expected behavior, such as Single Page Applications (SPAs) when pages load that require changes to the head tags.

However, you can manage asset insertion using `getAssets` from `solid-js/web`.
