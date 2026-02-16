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

# Railway

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/railway.mdx)

[Railway](https://railway.app/) is a well-known platform for deploying a variety of web and cloud-based projects. For an in-depth look at the features offered by Railway, as well as detailed deployment guidelines, you can consult the [Railway documentation](https://docs.railway.app/).

* * *

## [Adjust the Start command](railway.md#adjust-the-start-command)

To begin, you need to update the start command in your `package.json` file to make it compatible with Railway. Change the start command to `npx http-server ./dist` instead of using `vite`. This adjustment means you will need to build the app to generate the `dist` folder.

For local development, continue using the original `dev` command. Reserve the modified start command specifically for Railway deployments. Below is an example of how your `package.json` may be configured:

```


"scripts": {

  "start": "npx http-server ./dist",

  "dev": "vite",

  "build": "vite build",

  "serve": "vite preview",

  "predeploy": "npm run build",

  "deploy": "gh-pages -d build"

},
```

* * *

## [Using the Railway web interface](railway.md#using-the-railway-web-interface)

1. Visit Railway's homepage and click "Start a New Project." You will be redirected to connect with GitHub. Log in or create an account using your GitHub credentials and authorize Railway to access your account.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=Ow2cGMhUtdPVAMoioe4fPA&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=Ow2cGMhUtdPVAMoioe4fPA)

2. After authorization, choose the repository that has your Solid project. During this step, you can also add any required environment variables.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=XA18EOcjo3gQeBRlzIubIw&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=XA18EOcjo3gQeBRlzIubIw)

3. Once your project is configured, click "Deploy Now." After a successful deployment, a confirmation screen will appear.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=nFgehyw9gH9l7ezv5W4EvQ&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=nFgehyw9gH9l7ezv5W4EvQ)

4. Railway does not automatically assign a domain to your project. To do this, go to the settings and manually generate a domain for your deployed project.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=2y6TnvBnztCwN8ecamrffQ&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=2y6TnvBnztCwN8ecamrffQ)

Once a domain has been generated, your Solid project should be live.

* * *

## [Using the Railway CLI](railway.md#using-the-railway-cli)

1. Using your preferred package manager and install the Railway CLI:

npmpnpmyarnbundeno

```


npm i @railway/cli -g
```

```


pnpm i @railway/cli -g
```

```


yarn add @railway/cli -g
```

```


bun i @railway/cli -g
```

```


deno add npm:@railway/cli -g
```

2. Open your terminal and run the following command to log in:

```


railway login
```

3. You have the option to link your local Solid project to an existing Railway project using railway link. Alternatively, you can create a new project with `railway init` and follow the on-screen prompts.
4. To deploy your project to Railway, use the following command:

```


railway up

# or

railway up --detach # if you prefer to avoid logs
```

Your project will now be live on Railway.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Frailway.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Frailway)

Previous[← Netlify](netlify.md)

Next[Vercel →](vercel.md)

On this page

1. [Overview](#_top)
2. [Adjust the Start command](#adjust-the-start-command)
3. [Using the Railway web interface](#using-the-railway-web-interface)
4. [Using the Railway CLI](#using-the-railway-cli)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/railway.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Frailway.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Frailway)