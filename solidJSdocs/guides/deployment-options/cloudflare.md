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

# Cloudflare

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/cloudflare.mdx)

[Cloudflare Pages](https://pages.cloudflare.com/) is a JAMstack platform for frontend developers, where JAMstack stands for JavaScript, APIs, and Markup. For additional details and features, you can [visit the Cloudflare website](https://pages.cloudflare.com/).

* * *

## [Using the Cloudflare's web interface](cloudflare.md#using-the-cloudflares-web-interface)

1. Navigate to the [Cloudflare login page](https://dash.cloudflare.com/login) and log in or sign up.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=UE1AFe5oESDQkepKNaMxtA&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=UE1AFe5oESDQkepKNaMxtA)

2. After logging in, find "Pages" in the left-hand navigation bar. Add a new project by clicking "Create a project," then choose "Connect to Git."

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=XcbVyX2a69kSAP1m1220Ug&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=XcbVyX2a69kSAP1m1220Ug)

3. You'll have the option to install Cloudflare Pages on all your repositories or select ones. Choose the repository that contains your Solid project.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=SsbGUghc_Vwlvxefe1xAFg&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=SsbGUghc_Vwlvxefe1xAFg)

4. Configure your build settings:

<!--THE END-->

- The project name will default to the repository name, but you can change it if you wish.
- In the "build command" field, enter `npm run build` .
- For the "build output directory" field, use `dist` .
- Add an environment variable `NODE_VERSION` and set its value to the version of Node.js you're using.

**Note:** This step is crucial because Cloudflare Pages uses a version of Node.js older than v13, which may not fully support Vite, the bundler used in Solid projects.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=1HpIQUkxqNl9j3JlXIUvTg&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=1HpIQUkxqNl9j3JlXIUvTg)

5. Once you've configured the settings, click "Save and Deploy." In a few minutes, your Solid project will be live on Cloudflare Pages, accessible via a URL formatted as `project_name.pages.dev`.

* * *

## [Using the Wrangler CLI](cloudflare.md#using-the-wrangler-cli)

Wrangler is a command-line tool for building Cloudflare Workers. Here are the steps to deploy your Solid project using Wrangler.

1. Use your package manager of choice to install the Wrangler command-line tool:

npmpnpmyarnbundeno

```


npm i wrangler -g
```

```


pnpm i wrangler -g
```

```


yarn add wrangler -g
```

```


bun i wrangler -g
```

```


deno add npm:wrangler -g
```

2. Open your terminal and run the following command to log in:

```


wrangler login
```

3. Build your project using the following command:

npmpnpmyarnbundeno

```


npm run build
```

```


pnpm build
```

```


yarn build
```

```


bun run build
```

```


deno run build
```

4. Deploy using Wrangler:

```


wrangler pages deploy dist
```

After running these commands, your project should be live. While the terminal may provide a link, it's more reliable to check your Cloudflare Pages dashboard for the deployed URL, which usually follows the format `project-name.pages.dev`.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Fcloudflare.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Fcloudflare)

Previous[← AWS via SST](aws-via-sst.md)

Next[Firebase →](firebase.md)

On this page

1. [Overview](#_top)
2. [Using the Cloudflare's web interface](#using-the-cloudflares-web-interface)
3. [Using the Wrangler CLI](#using-the-wrangler-cli)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/cloudflare.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Fcloudflare.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Fcloudflare)