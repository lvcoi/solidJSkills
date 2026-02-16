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
    
    - [Conditional rendering](../control-flow/conditional-rendering.md)
    - [Dynamic](../control-flow/dynamic.md)
    - [List rendering](../control-flow/list-rendering.md)
    - [Portal](../control-flow/portal.md)
    - [Error boundary](../control-flow/error-boundary.md)
  - [Effects](../effects.md)
  - Derived values
    
    - [Derived signals](derived-signals.md)
    - [Memos](memos.md)
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

Derived values

# Derived signals

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/derived-values/derived-signals.mdx)

Derived signals are functions that rely on one or more [signals](../signals.md) to produce a value.

These functions are not executed immediately, but instead are only called when the values they rely on are changed. When the underlying signal is changed, the function will be called again to produce a new value.

```


const double = () => count() * 2;
```

In the above example, the `double` function relies on the `count` signal to produce a value. When the `count` signal is changed, the `double` function will be called again to produce a new value.

Similarly you can create a derived signal that relies on a store value because stores use signals under the hood. To learn more about how stores work, [you can visit the stores section](../stores.md).

```


const fullName = () => store.firstName + ' ' + store.lastName;
```

These dependent functions gain reactivity from the signal they access, ensuring that changes in the underlying data propagate throughout your application. It is important to note that these functions do not store a value themselves; instead, they can update any effects or components that depend on them. If included within a component's body, these derived signals will trigger an update when necessary.

While you can create derived values in this manner, Solid created the [`createMemo`](../../reference/basic-reactivity/create-memo.md) primitive. To dive deeper into how memos work, [check out the memos section](memos.md).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fderived-values%2Fderived-signals.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fderived-values%2Fderived-signals)

Previous[← Effects](../effects.md)

Next[Memos →](memos.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/derived-values/derived-signals.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fderived-values%2Fderived-signals.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fderived-values%2Fderived-signals)