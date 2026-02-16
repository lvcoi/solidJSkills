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

# AWS via Flightcontrol

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/aws-via-flightcontrol.mdx)

[Flightcontrol](https://www.flightcontrol.dev/) is a platform that fully automates deployments to Amazon Web Services (AWS). For more information on Flightcontrol's capabilities, you can [visit their docs](https://www.flightcontrol.dev/docs).

* * *

## [Connecting to a git repository](aws-via-flightcontrol.md#connecting-to-a-git-repository)

Flightcontrol offers a GitHub integration, leveraging its continuous development actions.

To get started with Flightcontrol's GitHub integration, you'll first need to log in or sign up to the Flightcontrol platform. After you're logged in, simply link your GitHub account to Flightcontrol.

Once connected, Flightcontrol will take care of the rest. It automatically detects any new pushes to your specified GitHub branches and builds your project. The build process uses the commands in your `package.json` file and adheres to the settings that you have configured in Flightcontrol. No additional setup is needed.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=h2Uk4xoB8fTpLOTOHIb6wQ&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=h2Uk4xoB8fTpLOTOHIb6wQ)

* * *

## [Using the dashboard](aws-via-flightcontrol.md#using-the-dashboard)

1. In the Flightcontrol dashboard, create a new project and select the repository you wish to use as the source.
2. Choose the GUI as your configuration type.
3. Add your Solid site as a static site by clicking the "Add a Static Site" option.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=5bE5kc7N_kOSfyHtasalrg&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=5bE5kc7N_kOSfyHtasalrg)

5. Label your output directory as `dist`.
6. If your project requires environment variables, add them in the designated area:

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=HwJhZ7ZJ6sYkj883rwkgOA&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=HwJhZ7ZJ6sYkj883rwkgOA)

7. Finally, connect your AWS account to complete the setup.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=S5LOC3JVjl2zcynaHreL0g&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=S5LOC3JVjl2zcynaHreL0g)

* * *

## [Using code](aws-via-flightcontrol.md#using-code)

1. Navigate to your Flightcontrol dashboard and initiate a new project. Choose the repository you'd like to use as the source.
2. Opt for the `flightcontrol.json` as your configuration type.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=7XLTmlgp3VJa8tDKobokjA&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=7XLTmlgp3VJa8tDKobokjA)

3. Add a new file named `flightcontrol.json` at the root of your selected repository. Below is an example configuration:

```


{

  "$schema": "https://app.flightcontrol.dev/schema.json",

  "environments": [

    {

      "id": "production",

      "name": "Production",

      "region": "us-west-2",

      "source": {

        "branch": "main"

      },

      "services": [

        {

          "id": "my-static-solid",

          "buildType": "nixpacks",

          "name": "My static solid site",

          "type": "static",

          "domain": "solid.yourapp.com",

          "outputDirectory": "dist",

          "singlePageApp": true

        }

      ]

    }

  ]

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Faws-via-flightcontrol.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Faws-via-flightcontrol)

Previous[← Deploy your app](../deploying-your-app.md)

Next[AWS via SST →](aws-via-sst.md)

On this page

1. [Overview](#_top)
2. [Connecting to a git repository](#connecting-to-a-git-repository)
3. [Using the dashboard](#using-the-dashboard)
4. [Using code](#using-code)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/aws-via-flightcontrol.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Faws-via-flightcontrol.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Faws-via-flightcontrol)