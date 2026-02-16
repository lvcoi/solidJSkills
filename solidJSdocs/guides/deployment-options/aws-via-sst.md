[**Solid**](../../index.md)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- [Quick start](../../quick-start.md)
- Concepts
  
  - [Intro to reactivity](../../concepts/intro-to-reactivity.md)
  - [Understanding JSX](../../concepts/understanding-jsx.md)
  - Components
    
    - [Basics](../../concepts/components/basics.md)
    - [Class and style](../../concepts/components/class-style.md)
    - [Event handlers](../../concepts/components/event-handlers.md)
    - [Props](../../concepts/components/props.md)
  - [Signals](../../concepts/signals.md)
  - Control flow
    
    - [Conditional rendering](../../concepts/control-flow/conditional-rendering.md)
    - [Dynamic](../../concepts/control-flow/dynamic.md)
    - [List rendering](../../concepts/control-flow/list-rendering.md)
    - [Portal](../../concepts/control-flow/portal.md)
    - [Error boundary](../../concepts/control-flow/error-boundary.md)
  - [Effects](../../concepts/effects.md)
  - Derived values
    
    - [Derived signals](../../concepts/derived-values/derived-signals.md)
    - [Memos](../../concepts/derived-values/memos.md)
  - [Context](../../concepts/context.md)
  - [Stores](../../concepts/stores.md)
  - [Refs](../../concepts/refs.md)
- Advanced concepts
  
  - [Fine-grained reactivity](../../advanced-concepts/fine-grained-reactivity.md)
- Guides
  
  - [Styling your components](../styling-your-components.md)
  - [State management](../state-management.md)
  - [Routing & navigation](../routing-and-navigation.md)
  - [Complex state management](../complex-state-management.md)
  - [Fetching data](../fetching-data.md)
  - [Testing](../testing.md)
  - [Deploy your app](../deploying-your-app.md)
- Configuration
  
  - [Environment variables](../../configuration/environment-variables.md)
  - [TypeScript](../../configuration/typescript.md)

Deploying your App

# AWS via SST

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/aws-via-sst.mdx)

[SST](https://sst.dev/) is a framework for deploying applications to any cloud provider. It has a built-in way to deploy SolidStart apps to AWS Lambda. For additional details, you can [visit their docs](https://sst.dev/docs/).

* * *

## [Quick start](aws-via-sst.md#quick-start)

1. [Create a SolidStart app](../../solid-start/getting-started.md).
2. In your project, init SST.

npmpnpmyarnbundeno

```


npx sst@latest init
```

```


pnpx sst@latest init
```

```


yarn dlx sst@latest init
```

```


bunx sst@latest init
```

```


dpx sst@latest init
```

3. This will detect your SolidStart app and ask you to update your `app.config.ts`.

```


server: {

   preset: "aws-lambda-streaming"

}
```

4. When you are ready, you can deploy your app using:

npmpnpmyarnbundeno

```


npx sst@latest deploy --stage production
```

```


pnpx sst@latest deploy --stage production
```

```


yarn dlx sst@latest deploy --stage production
```

```


bunx sst@latest deploy --stage production
```

```


dpx sst@latest deploy --stage production
```

You can [read the full tutorial on the SST docs](https://sst.dev/docs/start/aws/solid).

* * *

## [Deploy to a Container](aws-via-sst.md#deploy-to-a-container)

You can also deploy your SolidStart app to a [container](https://sst.dev/docs/start/aws/solid#containers) using SST.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Faws-via-sst.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Faws-via-sst)

Previous[← AWS via Flightcontrol](aws-via-flightcontrol.md)

Next[Cloudflare →](cloudflare.md)

On this page

1. [Overview](#_top)
2. [Quick start](#quick-start)
3. [Deploy to a Container](#deploy-to-a-container)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/aws-via-sst.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Faws-via-sst.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Faws-via-sst)