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
  
  - [@once](once.md)
  - [attr:\*](attr.md)
  - [bool:\*](bool.md)
  - [classList](classlist.md)
  - [innerHTML](innerhtml.md)
  - [on:\*](on.md)
  - [on\*](on_.md)
  - [prop:\*](prop.md)
  - [ref](ref.md)
  - [style](style.md)
  - [textContent](textcontent.md)
  - [use:\*](use.md)
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
  
  - [createComputed](../secondary-primitives/create-computed.md)
  - [createDeferred](../secondary-primitives/create-deferred.md)
  - [createReaction](../secondary-primitives/create-reaction.md)
  - [createRenderEffect](../secondary-primitives/create-render-effect.md)
  - [createSelector](../secondary-primitives/create-selector.md)
- Store utilities
  
  - [createMutable](../store-utilities/create-mutable.md)
  - [createStore](../store-utilities/create-store.md)
  - [modifyMutable](../store-utilities/modify-mutable.md)
  - [produce](../store-utilities/produce.md)
  - [reconcile](../store-utilities/reconcile.md)
  - [unwrap](../store-utilities/unwrap.md)
- Server utilities
  
  - [getRequestEvent](../server-utilities/get-request-event.md)

JSX attributes

# use:*

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/use.mdx)

Custom directives attach reusable behavior to DOM elements, acting as syntactic sugar over `ref`. They’re ideal for complex DOM interactions like scrolling, tooltips, or form handling, which are cumbersome to repeat in JSX.

A directive is a function with the following signature

```


function directive(element: HTMLElement, accessor: Accessor<any>): void;
```

Directive functions are called at render time but before being added to the DOM. You can do whatever you'd like in them including create signals, effects, register clean-up etc.

* * *

## [Example](use.md#example)

A `model` directive for two-way data binding

```


import type { Accessor, Signal } from "solid-js";




function model(element: HTMLInputElement, value: Accessor<Signal<string>>) {

  const [field, setField] = value();

  createRenderEffect(() => (element.value = field()));

  element.addEventListener("input", ({ target }) => setField(target.value));

}




const [name, setName] = createSignal("");




<input type="text" use:model={[name, setName]} />;
```

* * *

## [TypeScript Support](use.md#typescript-support)

To type custom directives, extend the `DirectiveFunctions` interface

```


declare module "solid-js" {

  namespace JSX {

    interface DirectiveFunctions {

      model: typeof model;

    }

  }

}
```

If you just want to constrain the second argument to the directive function, you can extend the older `Directives` interface

```


declare module "solid-js" {

  namespace JSX {

    interface Directives {

      model: Signal<string>;

    }

  }

}
```

* * *

## [Avoiding Tree-Shaking](use.md#avoiding-tree-shaking)

When importing a directive `d` from another module and using it only as `use:d`, TypeScript (via [babel-preset-typescript](https://babeljs.io/docs/babel-preset-typescript)) may remove the import, as it doesn’t recognize `use:d` as a reference to `d`. To prevent this:

1. Use the `onlyRemoveTypeImports: true` option in `babel-preset-typescript`. For `vite-plugin-solid`, add this to `vite.config.ts`
   
   ```
   
   
   import solidPlugin from "vite-plugin-solid";
   
   
   
   
   export default {
   
     plugins: [
   
       solidPlugin({
   
         typescript: { onlyRemoveTypeImports: true }
   
       })
   
     ],
   
   };
   ```
   
   Note: This requires consistent use of `export type` and `import type` in your codebase to avoid issues.
2. Add a fake access like `false && d;` in the module
   
   ```
   
   
   import { model } from "./directives";
   
   false && model; // Prevents tree-shaking
   
   <input type="text" use:model={[name, setName]} />;
   ```
   
   This is removed by bundlers like Terser, unlike a plain `model;` which may remain in the bundle.

Limitations

Directives only work with native HTML elements (HTML/SVG/MathML/Custom Elements). Directives are not forwarded and **won't work in user defined components**, such as `<MyComponent use:myinput={[..]}/>` [see also](https://github.com/solidjs/solid/discussions/722)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fjsx-attributes%2Fuse.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fjsx-attributes%2Fuse)

Previous[← textContent](textcontent.md)

Next[onCleanup →](../lifecycle/on-cleanup.md)

On this page

1. [Overview](#_top)
2. [Example](#example)
3. [TypeScript Support](#typescript-support)
4. [Avoiding Tree-Shaking](#avoiding-tree-shaking)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/use.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fjsx-attributes%2Fuse.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fjsx-attributes%2Fuse)