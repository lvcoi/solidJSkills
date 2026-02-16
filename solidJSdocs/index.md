[**Solid**](index.md)

- [Core](index.md)
- [Router](solid-router)
- [SolidStart](solid-start)
- [Meta](solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

## Effortless UIs with Reactive Precision.

Solid is a modern JavaScript framework for today's web.

[Get started](quick-start.md)[Join the community](https://discord.com/invite/solidjs)

Counter.jsx

```
01
```

```
02
```

```
03
```

```
04
```

```
05
```

```
06
```

```
07
```

```
08
```

```
09
```

```
10
```

```
11
```

```
12
```

```
13
```

```
14
```

```
import { createSignal } from "solid-js";

function Counter() {
	const [count, setCount] = createSignal(0);

	return (
		<button
		  onClick={() => setCount((n) => n + 1)}
		>
		  Count: {count()}
		</button>
	);
}
```

LearnReference

- [Quick start](quick-start.md)
- Concepts
  
  - [Intro to reactivity](concepts/intro-to-reactivity.md)
  - [Understanding JSX](concepts/understanding-jsx.md)
  - Components
    
    - [Basics](concepts/components/basics.md)
    - [Class and style](concepts/components/class-style.md)
    - [Event handlers](concepts/components/event-handlers.md)
    - [Props](concepts/components/props.md)
  - [Signals](concepts/signals.md)
  - Control flow
    
    - [Conditional rendering](concepts/control-flow/conditional-rendering.md)
    - [Dynamic](concepts/control-flow/dynamic.md)
    - [List rendering](concepts/control-flow/list-rendering.md)
    - [Portal](concepts/control-flow/portal.md)
    - [Error boundary](concepts/control-flow/error-boundary.md)
  - [Effects](concepts/effects.md)
  - Derived values
    
    - [Derived signals](concepts/derived-values/derived-signals.md)
    - [Memos](concepts/derived-values/memos.md)
  - [Context](concepts/context.md)
  - [Stores](concepts/stores.md)
  - [Refs](concepts/refs.md)
- Advanced concepts
  
  - [Fine-grained reactivity](advanced-concepts/fine-grained-reactivity.md)
- Guides
  
  - [Styling your components](guides/styling-your-components.md)
  - [State management](guides/state-management.md)
  - [Routing & navigation](guides/routing-and-navigation.md)
  - [Complex state management](guides/complex-state-management.md)
  - [Fetching data](guides/fetching-data.md)
  - [Testing](guides/testing.md)
  - [Deploy your app](guides/deploying-your-app.md)
- Configuration
  
  - [Environment variables](configuration/environment-variables.md)
  - [TypeScript](configuration/typescript.md)

# [Overview](index.md#overview)

Solid is a modern JavaScript framework designed to build responsive and high-performing user interfaces (UI). It prioritizes a simple and predictable development experience, making it a great choice for developers of all skill levels.

* * *

## [What is Solid?](index.md#what-is-solid)

As a JavaScript framework, Solid embraces reactivity and fine-grained updates.

Reactivity, in programming, refers to an applications' ability to respond to changes in data or user interactions.

Traditionally, when a change occurs, the entire web page would need to reload to display the updated information. In contrast, when using a fine-grained reactive system, updates are only applied to the parts of the page that need to be updated.

Solid adopts the concept of fine-grained reactivity, updating only when the data the application depends on changes. This decreases work and can result in faster load times and a smoother user experience overall.

* * *

## [Advantages of using Solid](index.md#advantages-of-using-solid)

- **Performant**: Fine-grained reactivity allows Solid to update only what has changed, resulting in faster load times and smoother performance overall.
- **Powerful**: Using less memory and processing power, Solid is capable of creating complex applications without compromising on functionality. This also gives developers the flexibility over how and when updates happen.
- **Pragmatic**: Rather than sticking to rigid structures or methods, Solid provides the freedom to choose the strategies and practices that work best for you.
- **Productive**: Regardless of experience level, Solid's clear and predictable API makes developers' work simpler and more efficient.

Solid aims to strike a balance between speed, efficiency, power, and flexibility, all while providing a developer-friendly environment. This combination of features makes it a great choice to build responsive and high-performing UIs.

* * *

## [Quick links](index.md#quick-links)

[Tutorial](https://www.solidjs.com/tutorial/introduction_basics)

Learn the basics of Solid through this interactive tutorial.

[Templates](https://github.com/solidjs/templates)

Start your first project with a template that fits your needs.

[Ecosystem](https://www.solidjs.com/ecosystem)

Explore the Solid ecosystem and find useful tools and libraries.

[Contribute](https://github.com/solidjs/solid-docs-next)

Help improve Solid by contributing to the documentation.

*Find our API documentation under the **Reference** tab*

Join the [Solid community on Discord](https://discord.com/invite/solidjs) to share your projects or get help from our community!

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/index.mdx) [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Findex.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2F)

On this page

1. [Overview](#_top)
2. [What is Solid?](#what-is-solid)
3. [Advantages of using Solid](#advantages-of-using-solid)
4. [Quick links](#quick-links)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/index.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Findex.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2F)