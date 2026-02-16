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

# Zerops

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/zerops.mdx)

[Zerops](https://zerops.io) is a dev-first cloud platform that can be used to deploy both Static and SSR Solid Node.js Apps.

For additional one-to-one support, details, and features, you can join the [Zerops Discord server](https://discord.gg/xxzmJSDKPT) and [visit the Zerops Docs](https://docs.zerops.io).

Deploy and test Zerops Solid recipes with one click:

- [Deploy Solid Node.js & Static Together](https://app.zerops.io/recipe/solidjs) - [Node.js](https://github.com/zeropsio/recipe-solidjs-nodejs) and [Static](https://github.com/zeropsio/recipe-solidjs-static).
- [Deploy Solid Node.js](https://app.zerops.io/recipe/solidjs-nodejs) - [Source Repository](https://github.com/zeropsio/recipe-solidjs-nodejs)
- [Deploy Solid Static](https://app.zerops.io/recipe/solidjs-static) - [Source Repository](https://github.com/zeropsio/recipe-solidjs-static)

* * *

## [Setting up an Account on Zerops](zerops.md#setting-up-an-account-on-zerops)

1. Go to [Zerops Registration](https://app.zerops.io/registration) and sign up using GitHub, GitLab, or just your email.

* * *

## [Setting up your Project Infrastructure](zerops.md#setting-up-your-project-infrastructure)

There are two ways to set up a Zerops project and a service:

#### [Using Project Add Wizard (GUI)](zerops.md#using-project-add-wizard-gui)

1. Go to your [Zerops dashboard](https://app.zerops.io/dashboard/projects).
2. Add a new project using your sidebar. If you're in compact mode, click on your profile and then "Add new project."
3. You'll be redirected to a page where you can choose a service.

##### [For Static:](zerops.md#for-static)

1. Choose Static.
2. Scroll down and change the hostname to your preference.
3. Scroll down and click on the "Add New Static" button.

##### [For SSR - Node.js:](zerops.md#for-ssr---nodejs)

1. Choose `Node.js` and select `version 20`.
2. Scroll down and change the hostname to your preference.
3. Scroll down and click on the "Add New Node.js" button.

#### [Using Project Import YAML](zerops.md#using-project-import-yaml)

**Note**: This is only used for project creation using YAML on the web interface—no need to add it to the project.

1. Go to your [Zerops dashboard](https://app.zerops.io/dashboard/projects) and click on your profile icon if you are a new user. If not, check your sidebar and click on `Import Project`.

##### [Static:](zerops.md#static)

```


project:

  name: recipe-solidjs




services:

  - hostname: app

    type: static

    enableSubdomainAccess: true
```

##### [SSR - Node.js:](zerops.md#ssr---nodejs)

```


project:

  name: recipe-solidjs




services:

  - hostname: app

    type: nodejs@20

    enableSubdomainAccess: true
```

* * *

## [Add zerops.yml to your repository](zerops.md#add-zeropsyml-to-your-repository)

The `zerops.yml` configuration file is used to tell Zerops how to build and run your application, it should be placed to the root of your appplication's repository.

Example for **SSR (Server-Side Rendering)** Apps:

Set up the `zerops.yml` file in the root of your SSR project. Make sure the setup parameter's value is the same as the hostname of the service.

```


zerops:

  - setup: app

    build:

      base: nodejs@latest

      buildCommands:

        - pnpm i

        - pnpm build

      deployFiles:

        - .output

        - node_modules

        - public

        - package.json

    run:

      base: nodejs@latest

      ports:

        - port: 3000

          httpSupport: true

      start: pnpm start
```

Example for **SSG (Static Site Generation)** Apps:

Set up the `zerops.yml` file in the root of your SSG project. Make sure the setup parameter's value is the same as the hostname of the service.

```


zerops:

  - setup: app

    build:

      base: nodejs@latest

      buildCommands:

        - pnpm i

        - pnpm build

      deployFiles:

        - dist/~

    run:

      base: static
```

Push the changes to your GitHub/GitLab repository (necessary if you are planning to use GitHub/GitLab).

* * *

## [Deploying your apps](zerops.md#deploying-your-apps)

### [Triggering the pipeline automatically by connecting Github/Gitlab repository](zerops.md#triggering-the-pipeline-automatically-by-connecting-githubgitlab-repository)

You can push your project by [Triggering the pipeline using Zerops CLI](zerops.md#triggering-the-pipeline-using-githubgitlab) or by connecting the app service with your [GitHub](https://docs.zerops.io/references/github-integration/) / [GitLab](https://docs.zerops.io/references/gitlab-integration) repository from inside the service detail.

### [Triggering the pipeline manually using Zerops CLI](zerops.md#triggering-the-pipeline-manually-using-zerops-cli)

To download the zCLI binary directly, use [zCLI/releases](https://github.com/zeropsio/zcli/releases) or:

1. Install the Zerops CLI using Terminal.

Linux/MacOS

```


curl -L https://zerops.io/zcli/install.sh | sh
```

Windows

```


irm https://zerops.io/zcli/install.ps1 | iex
```

Npm

npmpnpmyarnbundeno

```


npm i @zerops/zcli -g
```

```


pnpm i @zerops/zcli -g
```

```


yarn add @zerops/zcli -g
```

```


bun i @zerops/zcli -g
```

```


deno add npm:@zerops/zcli -g
```

2. Open Settings &gt; [Access Token Management](https://app.zerops.io/settings/token-management) in the Zerops app and generate a new access token.
3. Log in using your access token with the following command:

```


zcli login <token>
```

4. Navigate to the root of your app (where zerops.yml is located) and run the following command in Terminal to trigger the deploy:

```


zcli push
```

Check the official docs if you need more advanced use-cases for [Zerops Docs](http://docs.zerops.io/).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Fzerops.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Fzerops)

Previous[← Stormkit](stormkit.md)

Next[Environment variables →](../../configuration/environment-variables.md)

On this page

1. [Overview](#_top)
2. [Setting up an Account on Zerops](#setting-up-an-account-on-zerops)
3. [Setting up your Project Infrastructure](#setting-up-your-project-infrastructure)
   
   1. [Using Project Add Wizard (GUI)]()
4. [Add zerops.yml to your repository](#add-zeropsyml-to-your-repository)
5. [Deploying your apps](#deploying-your-apps)
   
   1. [Triggering the pipeline automatically by connecting Github/Gitlab repository](#triggering-the-pipeline-automatically-by-connecting-githubgitlab-repository)
   2. [Triggering the pipeline manually using Zerops CLI](#triggering-the-pipeline-manually-using-zerops-cli)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/zerops.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Fzerops.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Fzerops)