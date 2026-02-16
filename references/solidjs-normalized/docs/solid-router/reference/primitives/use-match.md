# useMatch

The `useMatch` function checks whether the current path matches a provided path pattern.

* * *

## Import

```
import { useMatch } from "@solidjs/router";
```
* * *

## Type

```
const useMatch: <S extends string>(

  path: () => S,

  matchFilters?: MatchFilters<S>

): Accessor<PathMatch | undefined>;

type MatchFilters<P extends string | readonly string[] = any> = P extends string

  ? { [K in PathParams<P>[number]]?: MatchFilter }

  : Record<string, MatchFilter>;

interface PathMatch {

  params: Params;

  path: string;

}
```
* * *

## Parameters

### `path`

- **Type:** `() => S`
- **Required:** Yes

An accessor function that returns the path pattern to match against the current route. Uses the same syntax as the `path` prop in the [`<Route>`](../components/route.md) component. Supports [path parameters](../../concepts/path-parameters.md), [optional parameters](../../concepts/path-parameters.md#optional-parameters), and [wildcard parameters](../../concepts/path-parameters.md#wildcard-routes).

### `filters`

- **Type:** `MatchFilters<S>`
- **Required:** No

An object where keys correspond to route parameter names and values define match filters. Each filter can be:

- An array of allowed strings
- A regular expression pattern
- A function that receives the parameter value as a string and returns true if the parameter should match

* * *

## Return value

`useMatch` returns a memo containing a `PathMatch` object when the path matches, or `undefined` when there's no match.

The `PathMatch` object contains:

### `params`

- **Type:** `Record<string, string>`

An object containing the matched path parameters as key-value pairs.

### `path`

- **Type:** `string`

The matched path.

* * *

## Examples

### Basic usage

```
import { useMatch } from "@solidjs/router";

import { type JSXElement } from "solid-js";

type NavLinkProps = {

  href: string;

  children: JSXElement;

};

function NavLink(props: NavLinkProps) {

  const match = useMatch(() => props.href);

  return (

    <a href={props.href} classList={{ active: Boolean(match()) }}>

      {props.children}

    </a>

  );

}
```
### With filters

```
import { useMatch } from "@solidjs/router";

import { Show } from "solid-js";

function BlogPost() {

  const match = useMatch(() => "/:lang?/blog/:slug", {

    lang: ["en", "es", "fr"],

    slug: /^[a-z0-9-]+$/, // Only allow lowercase letters, numbers, and hyphens

  });

  const lang = () => match()?.params.lang || "en";

  return (

    <Show when={match()}>

      <article lang={lang()}>

        <p>Blog slug: {match()?.params.slug}</p>

      </article>

    </Show>

  );

}
```
### With custom filter functions

```
import { useMatch } from "@solidjs/router";

function FileInfo() {

  const match = useMatch(() => "/files/:type/:name", {

    type: ["images", "documents", "videos"],

    name: (name) => name.length > 5 && name.endsWith(".html"),

  });

  return <div>File: {match()?.params.name}</div>;

}
```
* * *

## Related

- [`useParams`](use-params.md)
- [`useLocation`](use-location.md)
