[**Solid**](../../index.md)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- Basic reactivity
  
  - [createEffect](../basic-reactivity/create-effect.md)
  - [createMemo](../basic-reactivity/create-memo.md)
  - [createResource](../basic-reactivity/create-resource.md)
  - [createSignal](../basic-reactivity/create-signal.md)
- Component APIs
  
  - [children](../component-apis/children.md)
  - [createContext](../component-apis/create-context.md)
  - [createUniqueId](../component-apis/create-unique-id.md)
  - [lazy](../component-apis/lazy.md)
  - [useContext](../component-apis/use-context.md)
- Components
  
  - [&lt;Dynamic&gt;](../components/dynamic.md)
  - [&lt;ErrorBoundary&gt;](../components/error-boundary.md)
  - [&lt;For&gt;](../components/for.md)
  - [&lt;Index&gt;](../components/index-component.md)
  - [&lt;NoHydration&gt;](../components/no-hydration.md)
  - [&lt;Portal&gt;](../components/portal.md)
  - [&lt;Show&gt;](../components/show.md)
  - [&lt;Suspense&gt;](../components/suspense.md)
  - [&lt;SuspenseList&gt;](../components/suspense-list.md)
  - [&lt;Switch&gt; / &lt;Match&gt;](../components/switch-and-match.md)
- JSX attributes
  
  - [@once](../jsx-attributes/once.md)
  - [attr:\*](../jsx-attributes/attr.md)
  - [bool:\*](../jsx-attributes/bool.md)
  - [classList](../jsx-attributes/classlist.md)
  - [innerHTML](../jsx-attributes/innerhtml.md)
  - [on:\*](../jsx-attributes/on.md)
  - [on\*](../jsx-attributes/on_.md)
  - [prop:\*](../jsx-attributes/prop.md)
  - [ref](../jsx-attributes/ref.md)
  - [style](../jsx-attributes/style.md)
  - [textContent](../jsx-attributes/textcontent.md)
  - [use:\*](../jsx-attributes/use.md)
- Lifecycle
  
  - [onCleanup](../lifecycle/on-cleanup.md)
  - [onMount](../lifecycle/on-mount.md)
- Reactive utilities
  
  - [batch](../reactive-utilities/batch.md)
  - [catchError](../reactive-utilities/catch-error.md)
  - [createRoot](../reactive-utilities/create-root.md)
  - [from](../reactive-utilities/from.md)
  - [getOwner](../reactive-utilities/get-owner.md)
  - [indexArray](../reactive-utilities/index-array.md)
  - [mapArray](../reactive-utilities/map-array.md)
  - [mergeProps](../reactive-utilities/merge-props.md)
  - [observable](../reactive-utilities/observable.md)
  - [on](../reactive-utilities/on-util.md)
  - [runWithOwner](../reactive-utilities/run-with-owner.md)
  - [splitProps](../reactive-utilities/split-props.md)
  - [startTransition](../reactive-utilities/start-transition.md)
  - [untrack](../reactive-utilities/untrack.md)
  - [useTransition](../reactive-utilities/use-transition.md)
- Rendering
  
  - [DEV](../rendering/dev.md)
  - [hydrate](../rendering/hydrate.md)
  - [hydrationScript](../rendering/hydration-script.md)
  - [isServer](../rendering/is-server.md)
  - [render](../rendering/render.md)
  - [renderToStream](../rendering/render-to-stream.md)
  - [renderToString](../rendering/render-to-string.md)
  - [renderToStringAsync](../rendering/render-to-string-async.md)
- Secondary primitives
  
  - [createComputed](create-computed.md)
  - [createDeferred](create-deferred.md)
  - [createReaction](create-reaction.md)
  - [createRenderEffect](create-render-effect.md)
  - [createSelector](create-selector.md)
- Store utilities
  
  - [createMutable](../store-utilities/create-mutable.md)
  - [createStore](../store-utilities/create-store.md)
  - [modifyMutable](../store-utilities/modify-mutable.md)
  - [produce](../store-utilities/produce.md)
  - [reconcile](../store-utilities/reconcile.md)
  - [unwrap](../store-utilities/unwrap.md)
- Server utilities
  
  - [getRequestEvent](../server-utilities/get-request-event.md)

Secondary primitives

# createComputed

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-computed.mdx)

The `createComputed` function creates a reactive computation that runs *before* the rendering phase. It is primarily used to synchronize state before rendering begins.

* * *

## [Import](create-computed.md#import)

```


import { createComputed } from "solid-js";
```

* * *

## [Type](create-computed.md#type)

```


function createComputed<Next>(

  fn: EffectFunction<undefined | NoInfer<Next>, Next>

): void;

function createComputed<Next, Init = Next>(

  fn: EffectFunction<Init | Next, Next>,

  value: Init,

  options?: { name?: string }

): void;

function createComputed<Next, Init>(

  fn: EffectFunction<Init | Next, Next>,

  value?: Init,

  options?: { name?: string }

): void;
```

* * *

## [Parameters](create-computed.md#parameters)

### [`fn`](create-computed.md#fn)

- **Type:** `EffectFunction<undefined | NoInfer<Next>, Next> | EffectFunction<Init | Next, Next>`
- **Required:** Yes

The function that performs the computation. It executes immediately to track dependencies and re-runs whenever a dependency changes.

It receives the value returned from the previous execution as its argument. On the initial execution, it receives the [`value`](create-computed.md#value) parameter (if provided) or `undefined`.

### [`value`](create-computed.md#value)

- **Type:** `Init`
- **Required:** No

The initial value passed to `fn` on its first execution.

### [`options`](create-computed.md#options)

- **Type:** `{ name?: string }`
- **Required:** No

An optional configuration object with the following properties:

#### [`name`](create-computed.md#name)

- **Type:** `string`
- **Required:** No

A debug name for the computation. It is used for identification in debugging tools like the [Solid Debugger](https://github.com/thetarnav/solid-devtools).

* * *

## [Return value](create-computed.md#return-value)

- **Type:** `void`

`createComputed` does not return a value.

* * *

## [Examples](create-computed.md#examples)

### [Basic usage](create-computed.md#basic-usage)

```


import { createComputed } from "solid-js";

import { createStore } from "solid-js/store";




type User = {

  name?: string;

};




type UserEditorProps = {

  user: User;

};




function UserEditor(props: UserEditorProps) {

  const [formData, setFormData] = createStore<User>({

    name: "",

  });




  // Update the store synchronously when props change.

  // This prevents a second render cycle.

  createComputed(() => {

    setFormData("name", props.user.name);

  });




  return (

    <form>

      <h1>Editing: {formData.name}</h1>

      <input

        value={formData.name}

        onInput={(e) => setFormData("name", e.currentTarget.value)}

      />

    </form>

  );

}
```

* * *

## [Related](create-computed.md#related)

- [`createMemo`](../basic-reactivity/create-memo.md)
- [`createRenderEffect`](create-render-effect.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fsecondary-primitives%2Fcreate-computed.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fsecondary-primitives%2Fcreate-computed)

Previous[← renderToStringAsync](../rendering/render-to-string-async.md)

Next[createDeferred →](create-deferred.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [fn](#fn)
   2. [value](#value)
   3. [options](#options)
5. [Return value](#return-value)
6. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-computed.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fsecondary-primitives%2Fcreate-computed.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fsecondary-primitives%2Fcreate-computed)