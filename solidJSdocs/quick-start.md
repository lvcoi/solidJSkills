[**Solid**](index.md)

- [Core](index.md)
- [Router](solid-router)
- [SolidStart](solid-start)
- [Meta](solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

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

# Quick start

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/quick-start.mdx)

* * *

## [Try Solid online](quick-start.md#try-solid-online)

To experiment with Solid directly in your browser, head over to our [interactive playground](https://playground.solidjs.com/). Prefer a full development setup? You can set up a complete environment using StackBlitz. Start with the [TypeScript](https://stackblitz.com/github/solidjs/templates/tree/master/ts) or [JavaScript](https://stackblitz.com/github/solidjs/templates/tree/master/js) templates.

* * *

## [Create a Solid project](quick-start.md#create-a-solid-project)

Prerequisites

- Familiarity with the command line.
- A recent version of [Node.js](https://nodejs.org/en), [Bun](https://bun.sh/), or [Deno](https://deno.com/). The latest LTS version is recommended.

To create a new Solid application, navigate to the directory where you want to create your project and run the following command:

npmpnpmyarnbundeno

```


npm init solid
```

```


pnpm create solid
```

```


yarn create solid
```

```


bun create solid
```

```


deno init --npm solid
```

This command installs and runs [create-solid](https://github.com/solidjs-community/solid-cli/tree/main/packages/create-solid), the official project scaffolding tool for Solid. The CLI will guide you through a series of prompts, allowing you to choose options such as [starter templates](https://github.com/solidjs/templates), TypeScript support, and whether to include [Solid's full-stack framework, SolidStart](solid-start):

```


◆ Project Name

|  <solid-project>




◆ Is this a SolidStart project?

|  ● Yes / ○ No




◆ Which template would you like to use?

│  ● ts

│  ○ ts-vitest

│  ○ ts-uvu

│  ○ ts-unocss

│  ○ ts-tailwindcss




◆ Use TypeScript?

│  ● Yes / ○ No
```

Once the project is created, follow the instructions to install the dependencies and start the development server:

npmpnpmyarnbundeno

```


│  cd solid-project

│  npm install

│  npm run dev
```

```


│  cd solid-project

│  pnpm install

│  pnpm dev
```

```


│  cd solid-project

│  yarn install

│  yarn dev
```

```


│  cd solid-project

│  bun install

│  bun run dev
```

```


│  cd solid-project

│  deno install

│  deno run dev
```

You should now have your Solid project running!

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fquick-start.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fquick-start)

Previous[← Overview](index.md)

Next[Intro to reactivity →](concepts/intro-to-reactivity.md)

On this page

1. [Overview](#_top)
2. [Try Solid online](#try-solid-online)
3. [Create a Solid project](#create-a-solid-project)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/quick-start.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fquick-start.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fquick-start)