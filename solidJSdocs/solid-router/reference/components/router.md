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

# Router

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/components/router.mdx)

The `Router` component is a top level component that manages the routing of your application. There is an optional `root` prop that can be used to wrap the entire application in a layout component, which will not be updated when the page changes.

```


import { render } from "solid-js/web";

import { Router, Route } from "@solidjs/router";




const App = (props) => (

  <>

    <h1>Root header</h1>

    {props.children}

  </>

);




render(

  () => <Router root={App}>{/*... routes */}</Router>,

  document.getElementById("root")

);
```

proptypedescriptionchildren`JSX.Element`, `RouteDefinition`, or `RouteDefinition[]`The route definitionsrootComponentTop level layout componentbasestringBase url to use for matching routesactionBasestringRoot url for server actions, default: `/_server`preloadbooleanEnables/disables preloads globally, default: `true`explicitLinksbooleanDisables all anchors being intercepted and instead requires `<A>`. default: `false`. (To disable interception for a specific link, set `target` to any value, e.g. `<a target="_self">`.)urlstringThe initial route to render

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fcomponents%2Frouter.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fcomponents%2Frouter)

Previous[← Route](route.md)

Next[action →](../data-apis/action.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/components/router.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fcomponents%2Frouter.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fcomponents%2Frouter)