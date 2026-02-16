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

# Style

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/style.mdx)

`Style` is a component that adds the [`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) element to your document's `head`.

```


import { Style } from "@solidjs/meta";




<Style>

  {`

    body {

      background-color: #000;

    }

  `}

</Style>;
```

* * *

## [Usage](style.md#usage)

### [Adding `style` tag](style.md#adding-style-tag)

The `Style` component can add CSS to style elements within your application. It is recommended to add styles in an external stylesheet and use a `Link` instead, rather than using this component, however.

Note

Styles within the `Style` component are not scoped.

```


import { MetaProvider, Style } from "@solidjs/meta";




export default function Root() {

  return (

    <MetaProvider>

      <Style>{`

          p {

            color: #26b72b;

          }

        `}</Style>

    </MetaProvider>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Freference%2Fmeta%2Fstyle.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Freference%2Fmeta%2Fstyle)

Previous[← MetaProvider](metaprovider.md)

Next[Title →](title.md)

On this page

1. [Overview](#_top)
2. [Usage](#usage)
   
   1. [Adding style tag](#adding-style-tag)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/style.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Freference%2Fmeta%2Fstyle.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Freference%2Fmeta%2Fstyle)