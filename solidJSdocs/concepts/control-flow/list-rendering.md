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
    
    - [Basics](../components/basics.md)
    - [Class and style](../components/class-style.md)
    - [Event handlers](../components/event-handlers.md)
    - [Props](../components/props.md)
  - [Signals](../signals.md)
  - Control flow
    
    - [Conditional rendering](conditional-rendering.md)
    - [Dynamic](dynamic.md)
    - [List rendering](list-rendering.md)
    - [Portal](portal.md)
    - [Error boundary](error-boundary.md)
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

Control flow

# List rendering

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/list-rendering.mdx)

List rendering allows you to generate multiple elements from a collection of data, such as an array or object, where each element corresponds to an item in the collection.

When dealing with dynamic data, Solid offers two ways to render lists: the `<For>` and `<Index>` components. Both of these components help you loop over data collections to generate elements, however, they both cater to different scenarios.

* * *

## [`<For>`](list-rendering.md#for)

`<For>` is a looping component that allows you to render elements based on the contents of an array or object. This component is designed to be used with **complex data structures**, such as arrays of objects, where the order and length of the list may change frequently.

The sole property in `<For>` is `each` , through which you can specify the data collection to loop over. This property expects an array, however, it can also accept objects that have been converted to arrays using utilities such as [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) or [`Object.values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values).

```


import { For } from "solid-js"




<For each={data()}>

  {(item, index) =>

    // rendering logic for each element

  }

</For>
```

Between the `<For>` tags, the component requires a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) which will dictate how each item in the data collection should be rendered. This structure resembles the callback used within JavaScript's [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) method, providing a familiar pattern to follow.

The function receives two arguments:

- `item`: represents the current item in the data collection that is being rendered over.
- `index`: the current item's index within the collection.

You can access the current `item` and `index` to dynamically set attributes or content of the JSX elements. Index is a [*signal*](../signals.md) and must be called as a function to retrieve its value.

```


<For each={data()}>

  {(item, index) => (

    <li

      style={{

        color: index() % 2 === 0 ? "red" : "blue"

      }}

    >

      {item.name}

    </li>

  )}

</For>
```

* * *

## [`Index`](list-rendering.md#index)

`<Index>`, similar to `<For>`, is a looping component that allows you to render elements based on the contents of an array or object. However, when the order and length of the list remain *stable*, but the content may change frequently, `<Index>` is a better option because it results in fewer re-renders.

```


import { Index } from "solid-js"




<Index each={data()}>

  {(item, index) => (

    // rendering logic for each element

  )}

</Index>
```

Similar to the `<For>` component, `<Index>` accepts a single property named `each`, which is where you pass the structure you wish to loop over.

Where the `index` is a signal with `<For>`, it remains fixed with `<Index>`. This is because `<Index>` is more concerned with the **index** of the elements in the array. Because of this, the `item` is a signal, allowing the *content* at each index to change without a re-render while the index remains fixed.

```


import { Index } from "solid-js"




<Index each={data()}>

  {(item, index) => (

    <li>

      {item().name} - {item().completed}

    </li>

  )}

</Index>
```

* * *

## [`<Index>` vs `<For>`](list-rendering.md#index-vs-for)

`<For>` is designed to be used when the *order* and *length* of the list may change frequently. When the list value changes in `<For>`, the entire list is re-rendered. However, if the array undergoes a change, such as an element shifting position, `<For>` will manage this by simply **moving** the corresponding DOM node and **updating** the index.

`<Index>`, however, is designed to be used when the **order** and **length** of the list remain *stable*, but the content may change frequently. When the list value changes in `<Index>`, only the content at the specified index is updated.

### [When to use `<For>`](list-rendering.md#when-to-use-for)

In cases where signals, nested loops, or dynamic lists are not required, `<For>` is the best option. For example, when creating a list of static elements, such as a list of links, `<For>` is the best option to use. This is because it will only modify the indexes of the elements in the list, rather than re-rendering the entire list.

```


import { createSignal, For } from "solid-js"




function StringList() {

  const [items, setItems] = createSignal(["Item 1", "Item 2", "Item 3"])




  return (

    <ul>

      <input

        type="text"

        onInput={(e) => {

          // add the new item to the list

        }}

      />

      <For each={items()}>

        {(item, index) => (

          <li>

            {item} - {index()}

          </li>

        )}

      </For>

    </ul>

  )

}
```

If you are working with signals, [JavaScript primitives like strings and numbers](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) or input fields, `<Index>` is the better option to use. If you were using `<For>`, the entire list would be re-rendered when a value changes, even if the length of the list remains unchanged. `<Index>`, instead, will update the content at the specified index, while the rest of the list remains unchanged.

```


import { createSignal, Index } from "solid-js"




function FormList() {

  const [inputs, setInputs] = createSignal(['input1','input2','input3'])

  return(

    <form>

      <Index each={inputs()}>

        {(input, index) => (

          <input

            type="text"

            value={input()}

            onInput={(e) => {

              // update the input value

            }}

          />

        )}

      </Index>

    </form>

  )

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcontrol-flow%2Flist-rendering.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcontrol-flow%2Flist-rendering)

Previous[← Dynamic](dynamic.md)

Next[Portal →](portal.md)

On this page

1. [Overview](#_top)
2. [&lt;For&gt;](#for)
3. [Index](#index)
4. [&lt;Index&gt; vs &lt;For&gt;](#index-vs-for)
   
   1. [When to use &lt;For&gt;](#when-to-use-for)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/list-rendering.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fcontrol-flow%2Flist-rendering.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fcontrol-flow%2Flist-rendering)