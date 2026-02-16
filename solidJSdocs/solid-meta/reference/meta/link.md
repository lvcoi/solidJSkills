[Solid-**Meta**](../..)

- [Core](../../../index.md)
- [Router](../../../solid-router)
- [SolidStart](../../../solid-start)
- [Meta](../..)

[](https://github.com/solidjs/solid-meta)[](https://discord.com/invite/solidjs)

LearnReference

- Meta reference
  
  - [Base](base.md)
  - [Link](link.md)
  - [Meta](meta.md)
  - [MetaProvider](metaprovider.md)
  - [Style](style.md)
  - [Title](title.md)
  - [useHead](use-head.md)

Meta reference

# Link

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/link.mdx)

The Link component establishes a connection between the page and an external resource. Commonly, this is used for linking stylesheets and other associations.

This component renders a [`link`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) element within the document's `<head>`.

```


import { Link } from "@solidjs/meta";

<Link rel="icon" href="/favicon.ico" />;
```

* * *

## [Usage](link.md#usage)

### [Adding a favicon](link.md#adding-a-favicon)

To add a favicon in an app, `<Link>` can be used to point to the asset:

```


import { MetaProvider, Link } from "@solidjs/meta";




export default function Root() {

  return (

    <MetaProvider>

      <Link rel="icon" href="/favicon.ico" />

    </MetaProvider>

  );

}
```

### [Using an emoji as a favicon](link.md#using-an-emoji-as-a-favicon)

To use an emoji as a favicon, first create a function that returns a data URI containing an SVG image:

```


const emojiSvg = (emoji) => {

  return (

    `data:image/svg+xml;utf8,` +

    `<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`

  );

};
```

Following this, include the emoji as an argument within that function in the `href` property of the Link component:

```


import { MetaProvider, Link } from "@solidjs/meta";




export default function Root() {

  return (

    <MetaProvider>

      <Link rel="icon" href={emojiSvg("😎")} />

    </MetaProvider>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Freference%2Fmeta%2Flink.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Freference%2Fmeta%2Flink)

Previous[← Base](base.md)

Next[Meta →](meta.md)

On this page

1. [Overview](#_top)
2. [Usage](#usage)
   
   1. [Adding a favicon](#adding-a-favicon)
   2. [Using an emoji as a favicon](#using-an-emoji-as-a-favicon)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/link.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Freference%2Fmeta%2Flink.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Freference%2Fmeta%2Flink)