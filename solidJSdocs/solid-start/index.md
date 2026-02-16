[**Solid**Start](.)

- [Core](../index.md)
- [Router](../solid-router)
- [SolidStart](.)
- [Meta](../solid-meta)

[](https://github.com/solidjs/solid-start)[](https://discord.com/invite/solidjs)

## SolidStart

Fine-grained reactivity goes fullstack.

[Get started](getting-started.md)[Join the community](https://discord.com/invite/solidjs)

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
- [Getting started](getting-started.md)
- Building your application
  
  - [Routing](building-your-application/routing.md)
  - [API routes](building-your-application/api-routes.md)
  - [CSS and styling](building-your-application/css-and-styling.md)
  - [Data fetching](building-your-application/data-fetching.md)
  - [Data mutation](building-your-application/data-mutation.md)
  - [Head and metadata](building-your-application/head-and-metadata.md)
  - [Route Pre-rendering](building-your-application/route-prerendering.md)
  - [Static assets](building-your-application/static-assets.md)
- Advanced
  
  - [Middleware](advanced/middleware.md)
  - [Sessions](advanced/session.md)
  - [Request events](advanced/request-events.md)
  - [Returning responses](advanced/return-responses.md)
  - [Auth](advanced/auth.md)
  - [WebSocket endpoint](advanced/websocket.md)
- Guides
  
  - [Security](guides/security.md)
  - [Data fetching](guides/data-fetching.md)
  - [Data mutation](guides/data-mutation.md)
  - [Service workers](guides/service-workers.md)

# [Overview](.#overview)

SolidStart is an open source meta-framework designed to unify components that make up a web application. It is built on top of [Solid](../index.md) and uses [Vinxi](https://vinxi.vercel.app/), an agnostic Framework Bundler that combines the power of [Vite](https://vitejs.dev) and [Nitro](https://nitro.build/).

Start avoids being opinionated by only providing the fewest pieces to get you started. While templates are available that include many of the expected tools, SolidStart itself does not ship with a Router or Metadata library. Rather, it leaves that open for you to use any library you want.

SolidStart provides you the ability to render your applications in different ways depending on what is best for your use case. These include:

- Client-side rendering (CSR)
- Server-side rendering (SSR)
- Static site generation (SSG)

A driving principle of SolidStart is that code should be *isomorphic* — this ensures that code can be written once and executed correctly whether on the client or server.

* * *

## [Features](.#features)

SolidStart features the following capabilities:

- **Fine-grained reactivity** — Powered by Solid and its fine-grained reactivity.
- **Isomorphic, nested routing** — The same routes are rendered regardless of whether the page is on the client or server. Route nesting provides parent-child relationships that simplify application logic.
- **Multiple rendering modes** — Can be used to create CSR, SSR (Sync, Async and Streaming), and SSG applications.
- **Command Line Interface (CLI) and templates** — Provides a CLI and templates to help you get started quickly.
- **Deployment presets** — Provides presets to support deployment to multiple platforms including Netlify, Vercel, AWS, and Cloudflare.

* * *

## [Prerequisites](.#prerequisites)

Before you start using SolidStart, you should have a basic understanding of web development. This includes knowledge of HTML, CSS, and JavaScript. With SolidStart being a Solid meta-framework, we recommend learning Solid prior to reading these docs (or at least [taking the Solid tutorial](https://www.solidjs.com/tutorial)).

* * *

## [SolidStart 1.0 is here!](.#solidstart-10-is-here)

We are actively working on improving the documentation and adding more examples to help you get started. Documentation is still in beta so content is still being added to the documentation to improve the overall experience of using SolidStart.

If you experience any issues while using SolidStart, please let us know by [opening an issue in the SolidStart Repo](https://github.com/solidjs/solid-start/issues). Additionally, if you notice any issues or feel that something is missing in the documentation, please let us know in the [Solid Docs Repo](https://github.com/solidjs/solid-docs-next/issues).

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/index.mdx) [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Findex.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start)

On this page

1. [Overview](#_top)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [SolidStart 1.0 is here!](#solidstart-10-is-here)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/index.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Findex.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start)