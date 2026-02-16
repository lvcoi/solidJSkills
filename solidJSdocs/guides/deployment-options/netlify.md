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

# Netlify

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/netlify.mdx)

[Netlify](https://www.netlify.com/) is a widely-used hosting platform suitable for various types of projects. For detailed guidance on build procedures, deployment options, and the range of features available, you can visit the [Netlify documentation](https://docs.netlify.com/).

* * *

## [Using the Netlify web interface](netlify.md#using-the-netlify-web-interface)

1. Begin by navigating to [Netlify's website](https://app.netlify.com/) and logging in or creating a new Netlify. Once logged in, you will be take to your dashboard. Click the `New site from Git` button to start a new project.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=VMzcD7r0uwLqgogfyqiZZg&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=VMzcD7r0uwLqgogfyqiZZg)

2. On the following page, choose "Connect to GitHub" or your preferred Git repository hosting service.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=JZWtWwyL9QwUqu6pu4YnZg&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=JZWtWwyL9QwUqu6pu4YnZg)

3. After selecting your Solid project repository, you'll be directed to a configuration screen. Update the "Publish directory" field from `netlify` to `dist`. Then, click "Deploy" to start the deployment process.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=EIP0vYfg7GSc_PElbGGuXA&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=EIP0vYfg7GSc_PElbGGuXA)

4. Once the build and deployment are complete, you will be taken to a screen that displays the URL of your live site.

* * *

## [Using the Netlify CLI](netlify.md#using-the-netlify-cli)

1. Install the Netlify CLI using your preferred package manager:

npmpnpmyarnbundeno

```


npm i netlify-cli -g
```

```


pnpm i netlify-cli -g
```

```


yarn add netlify-cli -g
```

```


bun i netlify-cli -g
```

```


deno add npm:netlify-cli -g
```

**Note:** Before proceeding, ensure that your Netlify account and team are fully set up. This is crucial for a seamless project setup and deployment.

2. Open your terminal, navigate to your project directory, and run the `netlify init` command. Authenticate using one of the supported login options.
3. Follow the on-screen instructions from the CLI. When prompted for the 'Directory to deploy,' specify `dist` — this is where Solid stores the built project files.

After completing the process, your project will be deployed on Netlify and can be accessed via the provided URL.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=GFp0g1qxMv214z7vjKVYjw&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=GFp0g1qxMv214z7vjKVYjw)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Fnetlify.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Fnetlify)

Previous[← Firebase](firebase.md)

Next[Railway →](railway.md)

On this page

1. [Overview](#_top)
2. [Using the Netlify web interface](#using-the-netlify-web-interface)
3. [Using the Netlify CLI](#using-the-netlify-cli)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/netlify.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Fnetlify.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Fnetlify)