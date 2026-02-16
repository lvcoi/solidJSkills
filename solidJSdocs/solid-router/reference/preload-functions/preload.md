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
  
  - [preload](preload.md)
- Primitives
  
  - [useBeforeLeave](../primitives/use-before-leave.md)
  - [useCurrentMatches](../primitives/use-current-matches.md)
  - [useIsRouting](../primitives/use-is-routing.md)
  - [useLocation](../primitives/use-location.md)
  - [useMatch](../primitives/use-match.md)
  - [useNavigate](../primitives/use-navigate.md)
  - [useParams](../primitives/use-params.md)
  - [usePreloadRoute](../primitives/use-preload-route.md)
  - [useSearchParams](../primitives/use-search-params.md)
- Response helpers
  
  - [json](../response-helpers/json.md)
  - [redirect](../response-helpers/redirect.md)
  - [reload](../response-helpers/reload.md)

Preload functions

# preload

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/preload-functions/preload.mdx)

The `preload` function is a property on a route definition that initiates data fetching before a user navigates to the route.

`preload` runs in two separate phases:

- **Preload phase:** Triggered by user intent (e.g., hovering over a link), the function is called to initiate data fetching.
- **Rendering phase:** Triggered by actual navigation, the function is called a second time to provide the fetched data to the component.

* * *

## [Import](preload.md#import)

```


import { Route } from "@solidjs/router";
```

* * *

## [Type](preload.md#type)

```


type RoutePreloadFunc<T = unknown> = (args: RoutePreloadFuncArgs) => T;




interface RoutePreloadFuncArgs {

  params: Params;

  location: Location;

  intent: "initial" | "native" | "navigate" | "preload";

}
```

* * *

## [Parameters](preload.md#parameters)

### [`params`](preload.md#params)

- **Type:** `Params`

An object containing the parameters for the matched route. It corresponds to the value returned by the [`useParams` primitive](../primitives/use-params.md).

### [`location`](preload.md#location)

- **Type:** `Location`

The router's location object for the destination URL. It corresponds to the value returned by the [`useLocation` primitive](../primitives/use-location.md).

### [`intent`](preload.md#intent)

- **Type:** `"initial" | "native" | "navigate" | "preload"`

A string indicating the context in which the function is called.

- `"preload"`: The function is running to initiate data fetching.
- `"navigate"`: The function is running during navigation to the route.
- `"initial"`: The function is running for the first route on page load.

* * *

## [Return value](preload.md#return-value)

The value returned by `preload` is passed to the route's component as the `data` prop.

- In the **preload phase** (`intent: "preload"`), the return value is **ignored**.
- In the **rendering phase** (`intent: "navigate"` or `"initial"`), the return value is **captured** and provided to the component.

* * *

## [Examples](preload.md#examples)

```


import { Route, query, createAsync } from "@solidjs/router";




const getProductQuery = query(async (id: string) => {

  // ... Fetches a product from the server.

}, "product");




function ProductPage(props) {

  const product = createAsync(() => getProductQuery(props.params.id));




  return <div>{product()?.title}</div>;

}




function preloadData({ params }) {

  getProductQuery(params.id);

}




function ProductRoutes() {

  return (

    <Route path="/products/:id" component={ProductPage} preload={preloadData} />

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fpreload-functions%2Fpreload.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fpreload-functions%2Fpreload)

Previous[← useSubmissions](../data-apis/use-submissions.md)

Next[useBeforeLeave →](../primitives/use-before-leave.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [params](#params)
   2. [location](#location)
   3. [intent](#intent)
5. [Return value](#return-value)
6. [Examples](#examples)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/preload-functions/preload.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fpreload-functions%2Fpreload.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fpreload-functions%2Fpreload)