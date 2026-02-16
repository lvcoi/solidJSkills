[Solid **Router**](../..)

- [Core](../../../index.md)
- [Router](../..)
- [SolidStart](../../../solid-start)
- [Meta](../../../solid-meta)

[](https://github.com/solidjs/solid-router)[](https://discord.com/invite/solidjs)

LearnReference

- Components
  
  - [A](../components/a.md)
  - [HashRouter](../components/hash-router.md)
  - [MemoryRouter](../components/memory-router.md)
  - [Navigate](../components/navigate.md)
  - [Route](../components/route.md)
  - [Router](../components/router.md)
- Data APIs
  
  - [action](../data-apis/action.md)
  - [cache (deprecated)](../data-apis/cache.md)
  - [createAsync](../data-apis/create-async.md)
  - [createAsyncStore](../data-apis/create-async-store.md)
  - [query](../data-apis/query.md)
  - [revalidate](../data-apis/revalidate.md)
  - [useAction](../data-apis/use-action.md)
  - [useSubmission](../data-apis/use-submission.md)
  - [useSubmissions](../data-apis/use-submissions.md)
- Preload functions
  
  - [preload](../preload-functions/preload.md)
- Primitives
  
  - [useBeforeLeave](use-before-leave.md)
  - [useCurrentMatches](use-current-matches.md)
  - [useIsRouting](use-is-routing.md)
  - [useLocation](use-location.md)
  - [useMatch](use-match.md)
  - [useNavigate](use-navigate.md)
  - [useParams](use-params.md)
  - [usePreloadRoute](use-preload-route.md)
  - [useSearchParams](use-search-params.md)
- Response helpers
  
  - [json](../response-helpers/json.md)
  - [redirect](../response-helpers/redirect.md)
  - [reload](../response-helpers/reload.md)

Primitives

# useMatch

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-match.mdx)

The `useMatch` function checks whether the current path matches a provided path pattern.

* * *

## [Import](use-match.md#import)

```


import { useMatch } from "@solidjs/router";
```

* * *

## [Type](use-match.md#type)

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

## [Parameters](use-match.md#parameters)

### [`path`](use-match.md#path)

- **Type:** `() => S`
- **Required:** Yes

An accessor function that returns the path pattern to match against the current route. Uses the same syntax as the `path` prop in the [`<Route>`](../components/route.md) component. Supports [path parameters](../../concepts/path-parameters.md), [optional parameters](../../concepts/path-parameters.md#optional-parameters), and [wildcard parameters](../../concepts/path-parameters.md#wildcard-routes).

### [`filters`](use-match.md#filters)

- **Type:** `MatchFilters<S>`
- **Required:** No

An object where keys correspond to route parameter names and values define match filters. Each filter can be:

- An array of allowed strings
- A regular expression pattern
- A function that receives the parameter value as a string and returns true if the parameter should match

* * *

## [Return value](use-match.md#return-value)

`useMatch` returns a memo containing a `PathMatch` object when the path matches, or `undefined` when there's no match.

The `PathMatch` object contains:

### [`params`](use-match.md#params)

- **Type:** `Record<string, string>`

An object containing the matched path parameters as key-value pairs.

### [`path`](use-match.md#path-1)

- **Type:** `string`

The matched path.

* * *

## [Examples](use-match.md#examples)

### [Basic usage](use-match.md#basic-usage)

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

### [With filters](use-match.md#with-filters)

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

### [With custom filter functions](use-match.md#with-custom-filter-functions)

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

## [Related](use-match.md#related)

- [`useParams`](use-params.md)
- [`useLocation`](use-location.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-match.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-match)

Previous[← useLocation](use-location.md)

Next[useNavigate →](use-navigate.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [path](#path)
   2. [filters](#filters)
5. [Return value](#return-value)
   
   1. [params](#params)
   2. [path](#path-1)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)
   2. [With filters](#with-filters)
   3. [With custom filter functions](#with-custom-filter-functions)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-match.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-match.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-match)