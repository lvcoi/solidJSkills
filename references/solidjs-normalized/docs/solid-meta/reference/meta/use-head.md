# useHead

`useHead` is a low-level API for registering custom `<head>` tags with the nearest [`MetaProvider`](metaprovider.md).

* * *

## Import

```
import { useHead } from "@solidjs/meta";
```
* * *

## Type

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

## Parameters

### `tag`

- **Type:** `string`
- **Required:** Yes

The tag name to render in `<head>` (eg. `<script>`, `<meta>`, `<title>`).

### `props`

- **Type:** `Record<string, unknown>`
- **Required:** Yes

Attributes and properties applied to the rendered element.

If `props.children` is provided, is provided, it is used as the element’s content for tags such as `title`, `style`, and `script`. During server-side rendering, arrays of strings are concatenated without commas.

### `setting`

- **Type:** `{ close?: boolean; escape?: boolean }`
- **Required:** No

SSR-only rendering options for the tag contents.

#### `close`

- **Type:** `boolean`
- **Required:** No

Required for elements that cannot be self-closing, such as `script`, `style`, and `title`. When `true`, the server renders a closing tag and includes `children`. If `false`, `children` is not rendered.

#### `escape`

- **Type:** `boolean`
- **Required:** No

When `true`, HTML-escapes `children` during SSR. If omitted or `false`, renders `children` as raw HTML.

### `id`

- **Type:** `string`
- **Required:** Yes

A stable identifier used to match server-rendered tags during hydration. Value should remain consistent for the lifetime of the component.

### `name`

- **Type:** `string`
- **Required:** No

An optional label for the tag. With `meta` tags, can mirror `props.name` or `props.property`.

### `ref`

- **Type:** `Element`
- **Required:** No

An existing element to reuse instead of creating a new one, typically managed internally.

* * *

## Return value

`useHead` does not return a value.

* * *

## Examples

### Simple custom tag

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
### JSON-LD per page (script with `close` and `escape`)

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
### Reactive updates

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

## Related

- [`<MetaProvider />`](metaprovider.md)
- [`<Title />`](title.md)
- [`<Meta />`](meta.md)
- [`<Link />`](link.md)
- [`<Style />`](style.md)
- [`<Base />`](base.md)
