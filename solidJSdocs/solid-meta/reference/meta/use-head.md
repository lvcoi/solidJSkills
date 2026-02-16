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

# useHead

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/use-head.mdx)

`useHead` is a low-level API for registering custom `<head>` tags with the nearest [`MetaProvider`](metaprovider.md).

* * *

## [Import](use-head.md#import)

```


import { useHead } from "@solidjs/meta";
```

* * *

## [Type](use-head.md#type)

```


type TagDescription = {

  tag: string;

  props: Record<string, unknown>;

  setting?: {

    close?: boolean;

    escape?: boolean;

  };

  id: string;

  name?: string;

  ref?: Element;

};




function useHead(tag: TagDescription): void;
```

* * *

## [Parameters](use-head.md#parameters)

### [`tag`](use-head.md#tag)

- **Type:** `string`
- **Required:** Yes

The tag name to render in `<head>` (eg. `<script>`, `<meta>`, `<title>`).

### [`props`](use-head.md#props)

- **Type:** `Record<string, unknown>`
- **Required:** Yes

Attributes and properties applied to the rendered element.

If `props.children` is provided, is provided, it is used as the element’s content for tags such as `title`, `style`, and `script`. During server-side rendering, arrays of strings are concatenated without commas.

### [`setting`](use-head.md#setting)

- **Type:** `{ close?: boolean; escape?: boolean }`
- **Required:** No

SSR-only rendering options for the tag contents.

#### [`close`](use-head.md#close)

- **Type:** `boolean`
- **Required:** No

Required for elements that cannot be self-closing, such as `script`, `style`, and `title`. When `true`, the server renders a closing tag and includes `children`. If `false`, `children` is not rendered.

#### [`escape`](use-head.md#escape)

- **Type:** `boolean`
- **Required:** No

When `true`, HTML-escapes `children` during SSR. If omitted or `false`, renders `children` as raw HTML.

### [`id`](use-head.md#id)

- **Type:** `string`
- **Required:** Yes

A stable identifier used to match server-rendered tags during hydration. Value should remain consistent for the lifetime of the component.

### [`name`](use-head.md#name)

- **Type:** `string`
- **Required:** No

An optional label for the tag. With `meta` tags, can mirror `props.name` or `props.property`.

### [`ref`](use-head.md#ref)

- **Type:** `Element`
- **Required:** No

An existing element to reuse instead of creating a new one, typically managed internally.

* * *

## [Return value](use-head.md#return-value)

`useHead` does not return a value.

* * *

## [Examples](use-head.md#examples)

### [Simple custom tag](use-head.md#simple-custom-tag)

```


import { useHead } from "@solidjs/meta";




useHead({

  tag: "link",

  id: "rss-feed",

  props: {

    rel: "alternate",

    type: "application/rss+xml",

    title: "Solid RSS",

    href: "/rss.xml",

  },

});
```

### [JSON-LD per page (script with `close` and `escape`)](use-head.md#json-ld-per-page-script-with-close-and-escape)

```


import { useHead } from "@solidjs/meta";




const jsonLD = JSON.stringify({

  "@context": "https://schema.org",

  "@type": "WebSite",

  name: "Solid Docs",

  url: "https://docs.solidjs.com/",

});




useHead({

  tag: "script",

  setting: { close: true, escape: false },

  id: "schema-home",

  props: {

    type: "application/ld+json",

    children: jsonLD,

  },

});
```

### [Reactive updates](use-head.md#reactive-updates)

```


import { createSignal } from "solid-js";

import { useHead } from "@solidjs/meta";




const [pageTitle, setPageTitle] = createSignal("Getting started");




useHead({

  tag: "title",

  setting: { close: true, escape: true },

  id: "page-title",

  props: {

    get children() {

      return `${pageTitle()} | Solid`;

    },

  },

});
```

* * *

## [Related](use-head.md#related)

- [`<MetaProvider />`](metaprovider.md)
- [`<Title />`](title.md)
- [`<Meta />`](meta.md)
- [`<Link />`](link.md)
- [`<Style />`](style.md)
- [`<Base />`](base.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Freference%2Fmeta%2Fuse-head.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Freference%2Fmeta%2Fuse-head)

Previous[← Title](title.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [tag](#tag)
   2. [props](#props)
   3. [setting](#setting)
   4. [id](#id)
   5. [name](#name)
   6. [ref](#ref)
5. [Return value](#return-value)
6. [Examples](#examples)
   
   1. [Simple custom tag](#simple-custom-tag)
   2. [JSON-LD per page (script with close and escape)](#json-ld-per-page-script-with-close-and-escape)
   3. [Reactive updates](#reactive-updates)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/reference/meta/use-head.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Freference%2Fmeta%2Fuse-head.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta%2Freference%2Fmeta%2Fuse-head)