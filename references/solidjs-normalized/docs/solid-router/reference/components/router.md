# Router

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
