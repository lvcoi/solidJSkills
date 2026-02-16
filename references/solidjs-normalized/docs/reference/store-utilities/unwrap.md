# unwrap

`unwrap` returns the underlying data in the store without a proxy.

```
import { unwrap } from "solid-js/store"

import type { Store } from "solid-js/store"

function unwrap<T>(store: Store<T>): T
```
