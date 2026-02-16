[Solid **Router**](..)

- [Core](../../index.md)
- [Router](..)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid-router)[](https://discord.com/invite/solidjs)

LearnReference

- [Overview](..)
- Getting started
  
  - [Installation and setup](../getting-started/installation-and-setup.md)
  - [Component routing](../getting-started/component.md)
  - [Config-based routing](../getting-started/config.md)
- Concepts
  
  - [Navigation](../concepts/navigation.md)
  - [Path parameters](../concepts/path-parameters.md)
  - [Search parameters](../concepts/search-parameters.md)
  - [Catch-all routes](../concepts/catch-all.md)
  - [Nesting routes](../concepts/nesting.md)
  - [Layouts](../concepts/layouts.md)
  - [Alternative routers](../concepts/alternative-routers.md)
  - [Actions](../concepts/actions.md)
- Rendering modes
  
  - [Single page applications](../rendering-modes/spa.md)
  - [Server side rendering](../rendering-modes/ssr.md)
- Data fetching
  
  - [Queries](../data-fetching/queries.md)
  - [Streaming](../data-fetching/streaming.md)
  - [Revalidation](../data-fetching/revalidation.md)
  - How to
    
    - [Preload data](../data-fetching/how-to/preload-data.md)
    - [Handle pending and error states](../data-fetching/how-to/handle-error-and-loading-states.md)
- Advanced concepts
  
  - [Preloading](preloading.md)
  - [Lazy loading](lazy-loading.md)
- Guides
  
  - [Migration from v0.9.x](../guides/migration.md)

Advanced concepts

# Preloading

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/advanced-concepts/preloading.mdx)

Preloading smooths navigation by resolving route code and data before a user completes a transition. Solid Router listens for intent signals, such as hover and focus, and primes the matching route after a short delay to balance responsiveness and network cost. Understanding the timing and scope of this work lets you decide when to rely on the default behaviour and when to layer custom strategies.

user actionroute behaviourhoverwaits roughly 20 ms before preloadingfocuspreloads immediately

* * *

## [How Solid Router Detects Intent](preloading.md#how-solid-router-detects-intent)

Anchors registered with Solid Router emit hover and focus events that feed a small scheduler. The router debounces the hover signal for 20ms to ignore incidental pointer passes while still reacting quickly to purposeful movement. When the delay elapses, the router loads the route module and runs its preload routine so that navigation has the assets it needs when the user commits.

Route modules can export a [`preload`](../reference/preload-functions/preload.md) function that receives params, search values, and router context. The function lets you seed caches, warm derived computations, or coordinate streaming behaviours without blocking the eventual render.

note

SSR invokes route `preload` functions during the initial server render and resumes them on the client during hydration. Keep these functions pure so the hydrated client does not need to undo server work when it takes over.

* * *

## [Imperative Preloading Hooks](preloading.md#imperative-preloading-hooks)

Not every interaction funnels through an anchor element. The [`usePreloadRoute`](../reference/primitives/use-preload-route.md) primitive exposes the same scheduling behaviour for imperative flows like flyout previews, timers, or observer driven experiences.

This helper mirrors the router behaviour by resolving the module, optionally running the loader, and caching the result for the eventual navigation. Empirical tuning of delay values helps you avoid excessive prefetching in dense UIs while still keeping high intent interactions snappy.

* * *

## [Coordinating Nested Lazy Components](preloading.md#coordinating-nested-lazy-components)

Nested lazy components live outside the router hierarchy, so route preloading does not automatically warm them. The component API [`lazy()`](../../reference/component-apis/lazy.md) exposes a `preload()` method that resolves a component without rendering it. Calling both the route preload and the nested component preload can keep large detail panels responsive when a user hovers or focuses on the entry point.

Balancing manual preloading requires observing real user flows so you avoid prefetching large bundles that the user never requests. Profiling tools help you spot whether preloading reduces long tasks or simply shifts work earlier without net gains.

To learn more about lazy loading components, see the [lazy documentation](../../reference/component-apis/lazy.md#preloading-data-in-nested-lazy-components).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fadvanced-concepts%2Fpreloading.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fadvanced-concepts%2Fpreloading)

Previous[← Handle pending and error states](../data-fetching/how-to/handle-error-and-loading-states.md)

Next[Lazy loading →](lazy-loading.md)

On this page

1. [Overview](#_top)
2. [How Solid Router Detects Intent](#how-solid-router-detects-intent)
3. [Imperative Preloading Hooks](#imperative-preloading-hooks)
4. [Coordinating Nested Lazy Components](#coordinating-nested-lazy-components)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/advanced-concepts/preloading.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fadvanced-concepts%2Fpreloading.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fadvanced-concepts%2Fpreloading)