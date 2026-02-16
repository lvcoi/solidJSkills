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

# Error boundary

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/error-boundary.mdx)

By default, if part of an application throws an error during rendering, the entire application can crash, resulting in Solid removing its UI from the screen. Error boundaries provide a way to catch these errors and prevent the entire app from crashing.

The [`<ErrorBoundary>`](../../reference/components/error-boundary.md) component is used to create an error boundary. It catches any error that occurs during the rendering or updating of its children. However, an important note is that errors occurring outside the rendering process, such as in event handlers or after a `setTimeout`, are *not* caught by error boundaries.

The `fallback` prop can be used to display a user-friendly error message or notification when an error occurs. If a function is passed to `fallback`, it will receive the error object as well as a `reset` function. The `reset` function forces the `<ErrorBoundary>` to re-render its children and reset the error state, providing users with a way to recover from the error.

```


import { ErrorBoundary } from "solid-js";

import { Header, ErrorProne } from "./components";




function App() {

  return (

    <div>

      <Header />

      <ErrorBoundary

        fallback={(error, reset) => (

          <div>

            <p>Something went wrong: {error.message}</p>

            <button onClick={reset}>Try Again</button>

          </div>

        )}

      >

        <ErrorProne />

      </ErrorBoundary>

    </div>

  );

}
```

In this example, when the `ErrorProne` component throws an error, the `<ErrorBoundary>` catches it, preventing it from affecting the rest of the application. Instead, it displays the error message passed to the fallback prop.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcontrol-flow%2Ferror-boundary.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcontrol-flow%2Ferror-boundary)

Previous[← Portal](portal.md)

Next[Effects →](../effects.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/error-boundary.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcontrol-flow%2Ferror-boundary.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcontrol-flow%2Ferror-boundary)