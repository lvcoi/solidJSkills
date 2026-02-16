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

# Meta

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/meta.mdx)

The `<Meta>` component represents metadata that cannot be represented by other HTML elements. It is a wrapper for the native [`meta`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) element and has the same properties.

```


import { Meta } from "@solidjs/meta";




<Meta name="description" content="My site description" />;
```

`Meta` components can be placed in the [`MetaProvider`](metaprovider.md) or added throughout the application for additional metadata or override parents. `Meta` tags are considered the same and will be overridden if `name` attributes match.

* * *

## [Usage](meta.md#usage)

### [Adding `meta` tag](meta.md#adding-meta-tag)

```


import { MetaProvider, Meta } from "@solidjs/meta";




export default function Root() {

  return (

    <MetaProvider>

      <Meta charset="utf-8" />

      <Meta name="viewport" content="width=device-width, initial-scale=1" />

      <Meta name="description" content="Hacker News Clone built with Solid" />

    </MetaProvider>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Freference%2Fmeta%2Fmeta.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Freference%2Fmeta%2Fmeta)

Previous[← Link](link.md)

Next[MetaProvider →](metaprovider.md)

On this page

1. [Overview](#_top)
2. [Usage](#usage)
   
   1. [Adding meta tag](#adding-meta-tag)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/meta.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Freference%2Fmeta%2Fmeta.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Freference%2Fmeta%2Fmeta)