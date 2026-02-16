# useIsRouting

The `useIsRouting` function is a utility for detecting when the router is processing a route transition.

* * *

## Import

```
import { useIsRouting } from "@solidjs/router";
```
* * *

## Type

```
const useIsRouting: () => () => boolean;
```
* * *

## Parameters

None.

* * *

## Return value

**Type:** `() => boolean`

An accessor function that returns `true` during route transitions and `false` otherwise.

* * *

## Examples

### Route transition indicator

```
import { useIsRouting } from "@solidjs/router";

function App() {

  const isRouting = useIsRouting();

  return (

    <>

      {isRouting() && <div class="loading-bar" />}

      <MyContent />

    </>

  );

}
```
* * *

## Related

- [`<Router>`](../components/router.md)
- [`useNavigate`](use-navigate.md)
