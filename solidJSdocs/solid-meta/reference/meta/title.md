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

# Title

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/title.mdx)

`Title` is a component that renders the [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) element. This will render the title of the page in the browser tab.

```


import { Title } from "@solidjs/meta";

<Title>My Site</Title>;
```

* * *

## [Usage](title.md#usage)

### [Setting the title for your site](title.md#setting-the-title-for-your-site)

```


import { MetaProvider, Title } from "@solidjs/meta";

export default function Root() {

  return (

    <MetaProvider>

      <Title>Default Application Title</Title>

    </MetaProvider>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Freference%2Fmeta%2Ftitle.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Freference%2Fmeta%2Ftitle)

Previous[← Style](style.md)

Next[useHead →](use-head.md)

On this page

1. [Overview](#_top)
2. [Usage](#usage)
   
   1. [Setting the title for your site](#setting-the-title-for-your-site)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/title.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Freference%2Fmeta%2Ftitle.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Freference%2Fmeta%2Ftitle)