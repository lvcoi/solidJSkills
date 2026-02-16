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

Styling your Components

# CSS modules

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/css-modules.mdx)

CSS Modules are CSS files where class names, animations, and media queries are scoped locally by default. These provide a way to encapsulate styles within components, preventing global conflicts and optimizing the final output by bundling only the used selectors.

* * *

## [Creating CSS module files](css-modules.md#creating-css-module-files)

Begin by creating a CSS module file. Conventionally, these files have a `.module.css` extension, like `style.module.css`. However, you can also use other extensions, such as `.scss` and `.sass`.

```


/* styles.module.css */

.foo {

  color: red;

}

.bar {

  background-color: blue;

}
```

**Note:** Avoid the use of HTML tags in CSS modules. Since they are not considered pure selectors, it can lead to specificity issues which can make it more difficult to override with other styles and lead to unexpected behaviors.

* * *

## [Using modules in components](css-modules.md#using-modules-in-components)

1. **Importing styles:** In your component file (eg. `Component.jsx`), import the styles from the CSS module.

```


// component.jsx

import styles from "styles.module.css";
```

2. **Applying styles:** Use the imported styles by referencing them as properties of the styles object in your JSX:

```


function Component() {

  return (

    <>

      <div class={`${styles.foo} ${styles.bar}`}>Hello, world!</div>

    </>

  );

}
```

3. **Using a single style:** If you only need one style from the module, import and apply it directly:

```


// component.jsx

import styles from "styles.module.css";




function Component() {

  return (

    <>

      <div class={styles.foo}>Hello, world!</div>

    </>

  );

}
```

4. **Mixing with regular class names:** You can combine CSS module syntax with regular string class names, as well:

```


// component.jsx

import styles from "styles.module.css";




function Component() {

  return (

    <>

      <div class={`${styles.foo} container`}>Hello, world!</div>

    </>

  );

}
```

**Note:** If your styles have dashes in their names, use bracket notation:

```


const className = styles["foo-with-dash"];
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Fcss-modules.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Fcss-modules)

Previous[← LESS](less.md)

Next[Macaron →](macaron.md)

On this page

1. [Overview](#_top)
2. [Creating CSS module files](#creating-css-module-files)
3. [Using modules in components](#using-modules-in-components)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/css-modules.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fstyling-components%2Fcss-modules.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fstyling-components%2Fcss-modules)