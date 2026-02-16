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
  
  - [children](children.md)
  - [createContext](create-context.md)
  - [createUniqueId](create-unique-id.md)
  - [lazy](lazy.md)
  - [useContext](use-context.md)
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

Component APIs

# children

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/children.mdx)

`children` normalizes a component's `children` prop into a stable accessor that returns resolved JSX elements. It accepts functions, arrays, fragments, and nested structures.

* * *

## [Import](children.md#import)

```


import { children } from "solid-js";
```

* * *

## [Type](children.md#type)

```


function children(fn: Accessor<JSX.Element>): ChildrenReturn;




type ChildrenReturn = Accessor<ResolvedChildren> & {

  toArray: () => ResolvedChildren[];

};
```

* * *

## [Parameters](children.md#parameters)

### [`fn`](children.md#fn)

- **Type:** `() => JSX.Element`
- **Required:** Yes

An accessor that returns the `children` value (typically `props.children`).

* * *

## [Return value](children.md#return-value)

- **Type:** `ChildrenReturn`

The function returns a callable accessor. Calling it yields the resolved children, either a single element or an array.

* * *

## [Helpers](children.md#helpers)

### [`toArray()`](children.md#toarray)

- **Type:** `() => ResolvedChildren[]`
- **Description:** Returns a flattened array of resolved child elements.

This method is exposed on the returned accessor and is useful for iteration or index-based logic.

* * *

## [Examples](children.md#examples)

### [Basic usage](children.md#basic-usage)

```


function Wrapper(props) {

  const resolved = children(() => props.children);




  return <div>{resolved()}</div>;

}




// Usage

<Wrapper>

  <span>one</span>

  <span>two</span>

</Wrapper>;
```

### [`.toArray()` example](children.md#toarray-example)

```


function List(props) {

  const resolved = children(() => props.children);

  const items = resolved.toArray();




  return (

    <ul>

      {items.map((child) => (

        <li>{child}</li>

      ))}

    </ul>

  );

}




// Usage

<List>

  <span>one</span>

  <span>two</span>

</List>;
```

note

`children` resolves the current value of `props.children`. If `props.children` is reactive, the resolved accessor reflects updates.

### [Working with function-as-children](children.md#working-with-function-as-children)

If `children` is a function, the helper evaluates it and returns its rendered result.

```


function Slot(props) {

  const resolved = children(() => props.children);

  return <div>{resolved()}</div>;

}




// Usage

<Slot>{() => <span>dynamic</span>}</Slot>;
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponent-apis%2Fchildren.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponent-apis%2Fchildren)

Previous[← createSignal](../basic-reactivity/create-signal.md)

Next[createContext →](create-context.md)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   
   1. [fn](#fn)
5. [Return value](#return-value)
6. [Helpers](#helpers)
   
   1. [toArray()](#toarray)
7. [Examples](#examples)
   
   1. [Basic usage](#basic-usage)
   2. [.toArray() example](#toarray-example)
   3. [Working with function-as-children](#working-with-function-as-children)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/children.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Freference%2Fcomponent-apis%2Fchildren.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Freference%2Fcomponent-apis%2Fchildren)