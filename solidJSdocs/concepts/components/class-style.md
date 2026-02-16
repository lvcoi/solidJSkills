[**Solid**](../../index.md)

- [Core](../../index.md)
- [Router](../../solid-router)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- [Quick start](../../quick-start.md)
- Concepts
  
  - [Intro to reactivity](../intro-to-reactivity.md)
  - [Understanding JSX](../understanding-jsx.md)
  - Components
    
    - [Basics](basics.md)
    - [Class and style](class-style.md)
    - [Event handlers](event-handlers.md)
    - [Props](props.md)
  - [Signals](../signals.md)
  - Control flow
    
    - [Conditional rendering](../control-flow/conditional-rendering.md)
    - [Dynamic](../control-flow/dynamic.md)
    - [List rendering](../control-flow/list-rendering.md)
    - [Portal](../control-flow/portal.md)
    - [Error boundary](../control-flow/error-boundary.md)
  - [Effects](../effects.md)
  - Derived values
    
    - [Derived signals](../derived-values/derived-signals.md)
    - [Memos](../derived-values/memos.md)
  - [Context](../context.md)
  - [Stores](../stores.md)
  - [Refs](../refs.md)
- Advanced concepts
  
  - [Fine-grained reactivity](../../advanced-concepts/fine-grained-reactivity.md)
- Guides
  
  - [Styling your components](../../guides/styling-your-components.md)
  - [State management](../../guides/state-management.md)
  - [Routing & navigation](../../guides/routing-and-navigation.md)
  - [Complex state management](../../guides/complex-state-management.md)
  - [Fetching data](../../guides/fetching-data.md)
  - [Testing](../../guides/testing.md)
  - [Deploy your app](../../guides/deploying-your-app.md)
- Configuration
  
  - [Environment variables](../../configuration/environment-variables.md)
  - [TypeScript](../../configuration/typescript.md)

Components

# Class and style

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/components/class-style.mdx)

Similar to HTML, Solid uses `class` and `style` attributes to style elements via [CSS (Cascading Style Sheets)](https://developer.mozilla.org/en-US/docs/Glossary/CSS).

- **Class attribute**: Enables styling one or more elements through CSS rules.
- **Style attribute**: Inline styles that style single elements.

* * *

## [Inline styling](class-style.md#inline-styling)

The `style` attribute allows you to style a single element and define CSS variables dynamically during runtime. To use it, you can pass either a string or an object.

```


// String

<div style="color: red;">This is a red div</div>




// Object

<div style={{ color: "red" }}>This is a red div</div>
```

When using an object, the keys represent the CSS property names, and the values represent the CSS property values. The keys must be in dash-case, and the values must be strings.

[View on Eraser![](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9/preview?elements=PgkKTGxuuOtDiQ_1KDA5dw&type=embed)](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=PgkKTGxuuOtDiQ_1KDA5dw)

While inline styles are useful for rapid prototyping, they are not recommended for production use. This is because they are not reusable, and they can be difficult to maintain over time.

* * *

## [Classes](class-style.md#classes)

The `class` attribute allows you to style one or more elements through CSS rules. This provides a more structured approach to styling, as it allows you to reuse styles across multiple elements.

Classes are defined in CSS files. You can import these files using the `import` statement at the top of your component file. The CSS file's contents will be inserted into a style tag in the document head.

```


import "./Card.css";




function Card() {

  // ...

}
```

### [Dynamic styling](class-style.md#dynamic-styling)

Dynamic styling provides a way to change the appearance of a component based on state or other factors like user inputs. This is useful for creating components that can adapt to different scenarios without having to create multiple versions of the same component:

```


const [theme, setTheme] = createSignal("light");




<div class={theme() === "light" ? "light-theme" : "dark-theme"}>

  This div's theme is determined dynamically!

</div>;
```

[Props](props.md) are another way to change styles. By passing props to components, you can adapt styles based on the component's usage or the data it receives:

```


function ThemedButton(props) {

  return (

    <button class={props.theme}>

      {props.theme === "light" ? "Light Button" : "Dark Button"}

    </button>

  );

}
```

### [`classList`](class-style.md#classlist)

When you want to apply multiple classes to an element, you can use the [`classList` attribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList). To use it, you can pass either a string or an object where the keys represent the class names and the values represent a boolean expression. When the value is `true`, the class is applied; when `false`, it is removed.

```


const [current, setCurrent] = createSignal("foo");




<button

  classList={{ "selected" : current() === "foo" }}

  onClick={() => setCurrent("foo")}

>

  foo

</button>;
```

`classList` is often more efficient than `class` when handling multiple conditional classes. This is because `classList` selectively toggles only the classes that require alteration, while `class` will be re-evaluated each time. For a single conditional class, using `class` might be simpler but as the number of conditional classes increases, `classList` offers a more readable and declarative approach.

note

While it is possible, mixing `class` and `classList` can introduce unexpected errors. If both are reactive when the `class` value changes, Solid will set the entire `class` attribute. This will remove any classes set by `classList`.

To avoid this, the `class` attribute should be set to a static string or nothing. Alternatively, `class` can be set to a static computed value (e.g. `class={baseClass()}`), but then it must be put before any `classList` attributes.

Additionally, since `classList` is a pseudo-attribute, it doesn't work in prop spreads like `<div {...props} />` or in `<Dynamic>`.

For a guide on how to style your components, see [Styling Your Components](../../guides/styling-your-components.md), where we cover the different ways to style your components using libraries such as [Tailwind CSS](https://tailwindcss.com/).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcomponents%2Fclass-style.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcomponents%2Fclass-style)

Previous[← Basics](basics.md)

Next[Event handlers →](event-handlers.md)

On this page

1. [Overview](#_top)
2. [Inline styling](#inline-styling)
3. [Classes](#classes)
   
   1. [Dynamic styling](#dynamic-styling)
   2. [classList](#classlist)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/components/class-style.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcomponents%2Fclass-style.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcomponents%2Fclass-style)