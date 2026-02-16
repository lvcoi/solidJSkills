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

# Firebase

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/firebase.mdx)

[Firebase](https://firebase.google.com/) is an all-in-one app development platform by Google, offering a range of services from real-time databases to user authentication. For a detailed overview of the services available, you can visit [Firebase's documentation](https://firebase.google.com/docs).

Before proceeding, make sure you've already set up a project in your Firebase console. If you haven't, you can follow [Firebase's official guide](https://firebase.google.com/docs/projects/learn-more#creating-cloud-projects) to create a new Firebase project.

* * *

## [Using the Firebase CLI Tool](firebase.md#using-the-firebase-cli-tool)

1. Use your preferred package manager to install the Firebase command-line tool with one of the following commands:

npmpnpmyarnbundeno

```


npm i firebase-tools -g
```

```


pnpm i firebase-tools -g
```

```


yarn add firebase-tools -g
```

```


bun i firebase-tools -g
```

```


deno add npm:firebase-tools -g
```

2. Execute the `firebase login` command to ensure that you're logged into the Firebase account associated with your project.
3. In the root directory of your Solid project, create two new files: `firebase.json` and `.firebaserc`.

<!--THE END-->

- In `firebase.json`, add the following code:

```


{

  "hosting": {

    "public": "dist",

    "ignore": []

  }

}
```

- In `.firebaserc`, insert the following code (replace `<YOUR_FIREBASE_PROJECT_ID>` with your Firebase project ID):

```


{

  "projects": {

    "default": "<YOUR_FIREBASE_PROJECT_ID>"

  }

}
```

4. Run `npm run build` , followed by `firebase deploy` to build and deploy your project.

Upon completion, a `Hosting URL` will be displayed, indicating the live deployment of your project.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=YncoDoKDPPVyet1EOrsa_w&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=YncoDoKDPPVyet1EOrsa_w)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Ffirebase.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Ffirebase)

Previous[← Cloudflare](cloudflare.md)

Next[Netlify →](netlify.md)

On this page

1. [Overview](#_top)
2. [Using the Firebase CLI Tool](#using-the-firebase-cli-tool)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deployment-options/firebase.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fdeployment-options%2Ffirebase.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fdeployment-options%2Ffirebase)