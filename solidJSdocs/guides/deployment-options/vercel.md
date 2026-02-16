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

# Vercel

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/vercel.mdx)

[Vercel](https://vercel.com/) is a widely-used platform specialized in hosting frontend projects. For detailed information regarding build and deployment instructions, as well as features they offer, please visit the [Vercel documentation](https://vercel.com/docs).

* * *

## [Using Vercel web interface](vercel.md#using-vercel-web-interface)

1. Navigate to [vercel.com/login](https://vercel.com/login) to log in or create a new account. Connect with your preferred Git repository hosting service.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=0mwBl275l6WC3YD5Uz_IcQ&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=0mwBl275l6WC3YD5Uz_IcQ)

2. Once on the dashboard, click the button at the top right corner and choose "Add New Project." On the next page, select "Continue with GitHub" or your preferred Git service.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=QhW5b3iEbwyWzJ5fhUDrZw&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=QhW5b3iEbwyWzJ5fhUDrZw)

3. You will then see with a list of your repositories. Use the search bar if needed to find the specific repository you want to deploy. Click the "Import" button to proceed.
4. After importing your Solid project repository, you will be taken to a configuration screen. If your project requires any environment variables, add them in the designated field. Click "Deploy" to start the deployment process.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=_OhHyCQRVxMqXdCkkTE3nw&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=_OhHyCQRVxMqXdCkkTE3nw)

5. Once the build and deployment are finished, you will be redirected to a screen that displays a screenshot of your live site.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=hAbTtvs_2l4xDqySVYsiVA&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=hAbTtvs_2l4xDqySVYsiVA)

* * *

## [Using the Vercel CLI](vercel.md#using-the-vercel-cli)

1. Install the Vercel CLI using your preferred package manager.

npmpnpmyarnbundeno

```


npm i vercel -g
```

```


pnpm i vercel -g
```

```


yarn add vercel -g
```

```


bun i vercel -g
```

```


deno add npm:vercel -g
```

2. Open your terminal, navigate to your project directory, and run the following command to log in:

```


vercel
```

3. Follow the on-screen instructions from the CLI to finalize the deployment. Once completed, your project will be live on Vercel and accessible via the provided URL.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Fvercel.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Fvercel)

Previous[← Railway](railway.md)

Next[Stormkit →](stormkit.md)

On this page

1. [Overview](#_top)
2. [Using Vercel web interface](#using-vercel-web-interface)
3. [Using the Vercel CLI](#using-the-vercel-cli)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/vercel.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Fvercel.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Fvercel)