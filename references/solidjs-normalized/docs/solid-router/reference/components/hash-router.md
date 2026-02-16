# HashRouter

The `HashRouter` is a top level component that manages the routing of your application. It is a client side router that uses hash-values in the URL - providing a single-page application a way to replicate the experience of a multi-page application.

Since hash-routing provides a way for an application to run from a single HTML file, it can be used when hosting on a static file server.

Compared to a browser-router, such as [`Router`](router.md), is that this approach is not SEO friendly. Because most search engines do not index the hash portion of a URL, they are only able to see the index page of your application when using this approach.

The `root` property is used for components that wrap a matched route and require access to the router context, relevant with navigation components that use [`<A>`](a.md) links.

```
import { render } from "solid-js/web";

import { HashRouter, Route } from "@solidjs/router";

const App = (props) => (

  <>

    <h1>Root header</h1>

    {props.children}

  </>

);

render(

  () => <HashRouter root={App}>{/*... routes */}</HashRouter>,

  document.getElementById("app")

);
```
proptypedescriptionchildren`JSX.Element`, `RouteDefinition`, or `RouteDefinition[]`The route definitionsrootComponentTop level layout componentbasestringBase url to use for matching routesactionBasestringRoot url for server actions, default: `/_server`preloadbooleanEnables/disables preloads globally, default: `true`explicitLinksbooleanDisables all anchors being intercepted and instead requires [`<A>`](a.md). default: `false`
