# onMount

Registers a method that runs after initial rendering is done and the elements are mounted to the page. Ideal for using [refs](../jsx-attributes/ref.md) and managing other one-time setup.

```
import { onMount } from "solid-js"

function onMount(fn: () => void): void
```
This is an alias for an effect that is non-tracking, meaning that it is equivalent to a [`createEffect`](../basic-reactivity/create-effect.md) with no dependencies.

```
// example that shows how to use onMount to get a reference to an element

import { onMount } from "solid-js"

function MyComponent() {

  let ref: HTMLButtonElement

  // when the component is mounted, the button will be disabled

  onMount(() => {

    ref.disabled = true

  })

  return <button ref={ref}>Focus me!</button>

}
```
