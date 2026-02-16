# onCleanup

`onCleanup` registers a cleanup method that executes on disposal and recalculation of the current tracking scope. Can be used anywhere to clean up any side effects left behind by initialization.

When used in a Component, it runs when the component is unmounted. When used in tracking scope, such [`createEffect`](../basic-reactivity/create-effect.md), [`createMemo`](../basic-reactivity/create-memo.md) or a [`createRoot`](../reactive-utilities/create-root.md), it runs when the tracking scope is disposed or refreshed.

```
import { onCleanup } from "solid-js"

function onCleanup(fn: () => void): void;
```
Without the `onCleanup` function, the event listener would remain attached to the `document` even after the component is removed from the page. This can cause memory leaks and other issues.

```
import { createSignal, onCleanup } from "solid-js"

const Component = () => {

  const [count, setCount] = createSignal(0);

  const handleClick = () => setCount((value) => value + 1);

  document.addEventListener("click", handleClick);

  /**

   * Remove the event listener when the component is removed/unmounted from the page.

   */

  onCleanup(() => {

    document.removeEventListener("click", handleClick);

  });

  return <main>Document has been clicked {count()} times</main>;

};
```
