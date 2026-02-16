[Solid **Router**](../..)

- [Core](../../../index.md)
- [Router](../..)
- [SolidStart](../../../solid-start)
- [Meta](../../../solid-meta)

[](https://github.com/solidjs/solid-router)[](https://discord.com/invite/solidjs)

LearnReference

- Components
  
  - [A](a.md)
  - [HashRouter](hash-router.md)
  - [MemoryRouter](memory-router.md)
  - [Navigate](navigate.md)
  - [Route](route.md)
  - [Router](router.md)
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

Components

# MemoryRouter

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/components/memory-router.mdx)

The `MemoryRouter` can be used to route while keeping the entire routing history within internal memory. Other routers keep history externally such as in the url like the [`<HashRouter>`](hash-router.md) or in the browser history like [`<Router>`](memory-router.md).

Keeping the history in memory is useful when you want full control over the routing history. Since `MemoryRouter` can manipulate `MemoryHistory`, it is often used for testing purposes.

```


import { MemoryRouter, createMemoryHistory, A } from "@solidjs/router";

import { Suspense } from "solid-js";




export default function App() {

  const history = createMemoryHistory();




  const toHome = () => {

    history.set({ value: "/" });

  };

  const toAbout = () => {

    history.set({ value: "/about" });

  };




  return (

    <>

      <button onClick={toHome}>{'"/"'}</button>

      <button onClick={toAbout}>{'"/about"'}</button>




      <MemoryRouter

        history={history}

        root={(props) => <Suspense>{props.children}</Suspense>}

      >

        {/*... routes */}

      </MemoryRouter>

    </>

  );

}
```

In this example, a history object is pre-filled to navigate to the `/about` route, which is then passed to the `MemoryRouter`.

* * *

## [Manipulating the history](memory-router.md#manipulating-the-history)

The `MemoryHistory` object contains the following methods, which you can use to control the navigation of your app.

- The `get` method retrieves the current route as a string, while the `set` method navigates to a new route, allowing for optional parameters like replacing the current history entry or scrolling to a DOM element id.
- The `back` and `forward` methods mimic the browser's back and forward buttons, respectively, and the `go` method navigates a specific number of steps in the history, either backward or forward.
- The `listen` method registers a callback to be called on navigation change.

* * *

## [Properties](memory-router.md#properties)

### [`MemoryHistory`](memory-router.md#memoryhistory)

MethodSignatureDescription`get``get(): string`Returns the current route.`set``set({ value: string, scroll?: boolean, replace?: boolean })`Navigates to a new route. `value`: URL to navigate to. `scroll`: Scrolls to element by ID (default: `false`). `replace`: Replaces the current history entry (default: `false`).`back``back(): void`Navigates 1 step back in the history. Corresponds to `go(-1)`.`forward``forward(): void`Navigates 1 step forward in the history. Corresponds to `go(1)`.`go``go(n: number): void`Navigates n steps in the history. Negative for back, positive for forward. Clamped to history length.`listen``listen(listener: (value: string) => void): () => void`Registers a listener that will be called on navigation.

### [`MemoryRouter`](memory-router.md#memoryrouter)

PropertyTypeDescriptionchildren`JSX.Element`, `RouteDefinition`, or `RouteDefinition[]`The route definitionsrootComponentTop level layout componentbasestringBase url to use for matching routesactionBasestringRoot url for server actions, default: `/_server`preloadbooleanEnables/disables preloads globally, default: `true`explicitLinksbooleanDisables all anchors being intercepted and instead requires `<A>`. default: `false`historyMemoryHistoryAn optionally pre-filled and mutable history object which will store any navigation events

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fcomponents%2Fmemory-router.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fcomponents%2Fmemory-router)

Previous[← HashRouter](hash-router.md)

Next[Navigate →](navigate.md)

On this page

1. [Overview](#_top)
2. [Manipulating the history](#manipulating-the-history)
3. [Properties](#properties)
   
   1. [MemoryHistory](#memoryhistory)
   2. [MemoryRouter](#memoryrouter)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/components/memory-router.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fcomponents%2Fmemory-router.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fcomponents%2Fmemory-router)