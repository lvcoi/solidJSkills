# on:*

For events with capital letters, listener options, or if you need to attach event handlers directly to a DOM element instead of optimized delegating via the document, use `on:*` in place of `on*`.

```
<div on:DOMContentLoaded={(e) => console.log("Welcome!")} />
```
This directly attaches an event handler (via [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)) to the `div`.

New in v1.9.0

An additional special syntax that allows full control of [`capture`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#capture), [`passive`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#passive), [`once`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#once) and [`signal`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#signal) is an intersection or combination of `EventListenerObject` & `AddEventListenerOptions`, as follows:

```
const handler = {

  handleEvent(e) {

    console.log(e)

  },

  once:true,

  passive:false,

  capture:true

}

<div on:wheel={handler} />

// or inline

<div on:click={{passive:true, handleEvent(e) { console.log("Weeeee!")}}} />
```
This new syntax replaces the now deprecated `oncapture:` and it's future proof for any possible new event listener options.
