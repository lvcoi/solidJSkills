# hydrate

```
import { hydrate } from "solid-js/web"

import type { JSX } from "solid-js"

import type { MountableElement } from "solid-js/web"

function hydrate(

  fn: () => JSX.Element,

  node: MountableElement,

  options?: { renderId?: string; owner?: unknown }

): () => void
```
This method is similar to `render` except that it attempts to rehydrate what is already rendered to the DOM. When initializing in the browser a page has already been server rendered.

```
const dispose = hydrate(App, document.getElementById("app"))
```
* * *

## Parameters

Proptypedescriptionfn`() => JSX.Element`Function that returns the application code.nodeMountableElementDOM Element to mount the application tooptions.renderIdstringoptions.ownerunknown
