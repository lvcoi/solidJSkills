# Route

`Route` is the component used when defining the routes of an application. This component is used to define the structure of the application and the components that will be rendered for each route.

Multiple paths

Routes support defining multiple paths using an array. This is useful for when you want a route to remain mounted and not re-render when switching between two or more locations that it matches:

```
<Route path={["/login", "/register"]} component={Login} />
```
This would mean navigating from `/login` to `/register` would not cause the `Login` component to re-render.

proptypedescriptionpath`string | string[]`Path partial for defining the route segmentcomponent`Component`Component that will be rendered for the matched segmentmatchFilters`MatchFilters`Additional constraints for matching against the routechildren`JSX.Element`Nested `<Route>` definitionspreload`RoutePreloadFunc`Function called during preload or when the route is navigated to.
