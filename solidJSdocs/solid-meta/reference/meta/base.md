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

# Base

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/base.mdx)

`Base` is a component that specifies the base URL for all relative URLs in the document. This provides a way to define the [`base`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) element of your document's `head`.

```


import { Base } from "@solidjs/meta";




<Base target="_blank" href="https://docs.solidjs.com/" />;
```

* * *

## [Usage](base.md#usage)

### [Adding `base` tag](base.md#adding-base-tag)

```


import { MetaProvider, Base } from "@solidjs/meta";




export default function Root() {

  return (

    <MetaProvider>

      <Base target="_blank" href="https://docs.solidjs.com/" />

    </MetaProvider>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Freference%2Fmeta%2Fbase.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Freference%2Fmeta%2Fbase)

Next[Link →](link.md)

On this page

1. [Overview](#_top)
2. [Usage](#usage)
   
   1. [Adding base tag](#adding-base-tag)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/base.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Freference%2Fmeta%2Fbase.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Freference%2Fmeta%2Fbase)