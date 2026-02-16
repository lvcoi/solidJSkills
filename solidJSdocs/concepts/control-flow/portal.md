[**Solid**](../../index.md)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- [Quick start](../../quick-start.md)
- Concepts
  
  - [Intro to reactivity](../intro-to-reactivity.md)
  - [Understanding JSX](../understanding-jsx.md)
  - Components
    
    - [Basics](../components/basics.md)
    - [Class and style](../components/class-style.md)
    - [Event handlers](../components/event-handlers.md)
    - [Props](../components/props.md)
  - [Signals](../signals.md)
  - Control flow
    
    - [Conditional rendering](conditional-rendering.md)
    - [Dynamic](dynamic.md)
    - [List rendering](list-rendering.md)
    - [Portal](portal.md)
    - [Error boundary](error-boundary.md)
  - [Effects](../effects.md)
  - Derived values
    
    - [Derived signals](../derived-values/derived-signals.md)
    - [Memos](../derived-values/memos.md)
  - [Context](../context.md)
  - [Stores](../stores.md)
  - [Refs](../refs.md)
- Advanced concepts
  
  - [Fine-grained reactivity](../../advanced-concepts/fine-grained-reactivity.md)
- Guides
  
  - [Styling your components](../../guides/styling-your-components.md)
  - [State management](../../guides/state-management.md)
  - [Routing & navigation](../../guides/routing-and-navigation.md)
  - [Complex state management](../../guides/complex-state-management.md)
  - [Fetching data](../../guides/fetching-data.md)
  - [Testing](../../guides/testing.md)
  - [Deploy your app](../../guides/deploying-your-app.md)
- Configuration
  
  - [Environment variables](../../configuration/environment-variables.md)
  - [TypeScript](../../configuration/typescript.md)

Control flow

# Portal

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/portal.mdx)

When an element requires rendering outside of the usual document flow, challenges related to stacking contents and z-index can interfere with the desired intention or look of an application. `<Portal>` helps with this by putting elements in a different place in the document, bringing an element into the document flow so they can render as expected.

```


import { Portal } from "solid-js/web"




<Portal>

  <div class="popup">...</div>

</Portal>
```

The content nested within `<Portal>` is rendered and positioned by default at the end of the document body.

[View on Eraser![](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9/preview?elements=IEPk0uiH2OC365hkpKf3wA&type=embed)](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=IEPk0uiH2OC365hkpKf3wA)

This can be changed by passing a `mount` prop to `<Portal>`. The `mount` prop accepts a [DOM node](https://developer.mozilla.org/en-US/docs/Web/API/Node), which will be used as the mount point for the portal content.

```


import { Portal } from "solid-js/web"




<Portal mount={document.querySelector("main")}>

  <div class="popup">...</div>

</Portal>
```

Using `<Portal>` can be particularly useful in cases where elements, like information popups, might be clipped or obscured due to the overflow settings of their parent elements. By putting the element outside of the parent element, it is no longer bound by the overflow settings of its parent. This creates a more accessible experience for users, as the content is no longer obscured.

note

`<Portal>` will render wrapped unless specifically targeting `document.head`.

This is so events propagate through the Portal according to the component hierarchy instead of the elements hierarchy.

By default, children will wrap in a `<div>`. If you portal into an SVG, then the `isSVG` prop must be used to avoid wrapping the children in a `<div>` and wrap in a `<g>` instead.

```


import { Portal } from "solid-js/web"




function Rect() {

  return (

    <Portal mount={document.querySelector("svg")} isSVG={true}>

      <rect fill="red" x="25" y="25" height="50" width="50" />

    </Portal>

  );

}




function SVG() {

  return <svg xmlns="http://www.w3.org/2000/svg" />;

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcontrol-flow%2Fportal.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcontrol-flow%2Fportal)

Previous[← List rendering](list-rendering.md)

Next[Error boundary →](error-boundary.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/portal.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcontrol-flow%2Fportal.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcontrol-flow%2Fportal)