[Solid **Router**](..)

- [Core](../../index.md)
- [Router](..)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid-router)[](https://discord.com/invite/solidjs)

LearnReference

- [Overview](..)
- Getting started
  
  - [Installation and setup](../getting-started/installation-and-setup.md)
  - [Component routing](../getting-started/component.md)
  - [Config-based routing](../getting-started/config.md)
- Concepts
  
  - [Navigation](navigation.md)
  - [Path parameters](path-parameters.md)
  - [Search parameters](search-parameters.md)
  - [Catch-all routes](catch-all.md)
  - [Nesting routes](nesting.md)
  - [Layouts](layouts.md)
  - [Alternative routers](alternative-routers.md)
  - [Actions](actions.md)
- Rendering modes
  
  - [Single page applications](../rendering-modes/spa.md)
  - [Server side rendering](../rendering-modes/ssr.md)
- Data fetching
  
  - [Queries](../data-fetching/queries.md)
  - [Streaming](../data-fetching/streaming.md)
  - [Revalidation](../data-fetching/revalidation.md)
  - How to
    
    - [Preload data](../data-fetching/how-to/preload-data.md)
    - [Handle pending and error states](../data-fetching/how-to/handle-error-and-loading-states.md)
- Advanced concepts
  
  - [Preloading](../advanced-concepts/preloading.md)
  - [Lazy loading](../advanced-concepts/lazy-loading.md)
- Guides
  
  - [Migration from v0.9.x](../guides/migration.md)

Concepts

# Search parameters

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/search-parameters.mdx)

Search parameters are used to pass data to a route using the query string. The query string is the part of the URL that comes after the `?` character and is used to pass key-value pairs to the route.

In Solid Router, these query parameters can be accessed using [`useSearchParams`](../reference/primitives/use-search-params.md). This primitive retrieves a tuple that contains a reactive object that reads the current search parameters and a function to update them.

```


import { useSearchParams } from "@solidjs/router";




export const App = () => {

  const [searchParams, setSearchParams] = useSearchParams();




  return (

    <div>

      <span>Username: {searchParams.username}</span>

      <input

        type="text"

        onChange={(e) => {

          e.preventDefault();

          setSearchParams({ username: e.target.value });

        }}

      />

    </div>

  );

};
```

The getter, in this case `searchParams`, is used to read the current search parameters. `setSearchParams` works as the setter which accepts an *object* whose entries will be merged into the current query.

* * *

## [Multiple queries](search-parameters.md#multiple-queries)

Since `setSearchParams` accepts an object, you can pass multiple key-value pairs to update multiple search parameters at once.

```


setSearchParams({

  username: "john",

  page: 1,

});
```

Empty or null values

If the value of a search parameter's key is `undefined`, `null`, or an empty string (`""`), it will be removed from the query string.

* * *

## [Accessing query strings](search-parameters.md#accessing-query-strings)

If you require accessing the query string directly, you can use the [`useLocation`](../reference/primitives/use-location.md) primitive:

```


import { useLocation } from "@solidjs/router";




export const App = () => {

  const location = useLocation();




  return (

    <div>

      <span>Query String: {location.search}</span>

    </div>

  );

};
```

If the URL was `http://localhost:3000/users?username=john&page=1`, the output would be `Query String: ?username=john&page=1`.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Fsearch-parameters.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Fsearch-parameters)

Previous[← Path parameters](path-parameters.md)

Next[Catch-all routes →](catch-all.md)

On this page

1. [Overview](#_top)
2. [Multiple queries](#multiple-queries)
3. [Accessing query strings](#accessing-query-strings)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/search-parameters.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fconcepts%2Fsearch-parameters.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fconcepts%2Fsearch-parameters)