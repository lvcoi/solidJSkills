# &lt;Dynamic&gt;

This component lets you insert an arbitrary Component or tag and passes the props through to it.

```
import { Dynamic } from "solid-js/web"

import type { JSX } from "solid-js"

function Dynamic<T>(

  props: T & {

    children?: any

    component?: Component<T> | string | keyof JSX.IntrinsicElements

  }

): () => JSX.Element
```
Here's an example of how you can use it:

```
<Dynamic component={MyComponent} someProp={state.something} />
```
* * *

## Props

NameTypeDescription`component``Component<T>` | `string` | `keyof JSX.IntrinsicElements`The component to render.`children``any`The children to pass to the component.`...``T`Any other props to pass to the component.
