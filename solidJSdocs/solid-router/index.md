[Solid **Router**](.)

- [Core](../index.md)
- [Router](.)
- [SolidStart](../solid-start)
- [Meta](../solid-meta)

[](https://github.com/solidjs/solid-router)[](https://discord.com/invite/solidjs)

## Solid Router

Solid is a modern JavaScript framework for today's web.

[Get started](getting-started/installation-and-setup.md)[Join the community](https://discord.com/invite/solidjs)

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

- [Overview](.)
- Getting started
  
  - [Installation and setup](getting-started/installation-and-setup.md)
  - [Component routing](getting-started/component.md)
  - [Config-based routing](getting-started/config.md)
- Concepts
  
  - [Navigation](concepts/navigation.md)
  - [Path parameters](concepts/path-parameters.md)
  - [Search parameters](concepts/search-parameters.md)
  - [Catch-all routes](concepts/catch-all.md)
  - [Nesting routes](concepts/nesting.md)
  - [Layouts](concepts/layouts.md)
  - [Alternative routers](concepts/alternative-routers.md)
  - [Actions](concepts/actions.md)
- Rendering modes
  
  - [Single page applications](rendering-modes/spa.md)
  - [Server side rendering](rendering-modes/ssr.md)
- Data fetching
  
  - [Queries](data-fetching/queries.md)
  - [Streaming](data-fetching/streaming.md)
  - [Revalidation](data-fetching/revalidation.md)
  - How to
    
    - [Preload data](data-fetching/how-to/preload-data.md)
    - [Handle pending and error states](data-fetching/how-to/handle-error-and-loading-states.md)
- Advanced concepts
  
  - [Preloading](advanced-concepts/preloading.md)
  - [Lazy loading](advanced-concepts/lazy-loading.md)
- Guides
  
  - [Migration from v0.9.x](guides/migration.md)

# [Overview](.#overview)

Prerequisites

The docs are based on latest Solid Router. To use this version, you need to have Solid v1.8.4 or later installed.

Solid Router is the universal router for Solid which works for rendering on the client or the server. It was inspired by and combines paradigms of [React Router](https://reactrouter.com/en/main) and the [Ember Router](https://guides.emberjs.com/release/routing/).

A router provides a way to change a user's view based on the URL in the browser. This allows a "single-page" application to simulate a traditional multipage site. To use Solid Router, components called Routes that depend on the value of the URL (the "path") are specified, and the router handles the mechanism of swapping them in and out.

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/index.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Findex.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router)