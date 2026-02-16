# useCurrentMatches

`useCurrentMatches` returns all the matches for the current matched route. Useful for getting all the route information.

For example if you stored breadcrumbs on your route definition you could retrieve them like so:

```
const matches = useCurrentMatches();

const breadcrumbs = createMemo(() =>

  matches().map((m) => m.route.info.breadcrumb)

);
```
