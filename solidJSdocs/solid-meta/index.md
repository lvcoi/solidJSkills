[Solid-**Meta**](.)

- [Core](../index.md)
- [Router](../solid-router)
- [SolidStart](../solid-start)
- [Meta](.)

[](https://github.com/solidjs/solid-meta)[](https://discord.com/invite/solidjs)

## Solid-Meta

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

- Getting started
  
  - [Install and configure](getting-started/installation-and-setup.md)
  - [Client setup](getting-started/client-setup.md)
  - [Server setup](getting-started/server-setup.md)

# [Overview](.#overview)

Solid Meta offers asynchronous SSR-ready Document Head management for Solid Applications, based on [React Head](https://github.com/tizmagik/react-head)

With Solid Meta, you can define `document.head` tags at any level of your component hierarchy. This helps you to manage tags conveniently, especially when contextual information for specific tags are buried deep within your component hierarchy.

This library has no dependencies and is designed to seamlessly integrate with asynchronous rendering.

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/index.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-meta%2Findex.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-meta)