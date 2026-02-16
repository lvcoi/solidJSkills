[**Solid**](../index.md)

- [Core](../index.md)
- [Router](../solid-router)
- [SolidStart](../solid-start)
- [Meta](../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- [Quick start](../quick-start.md)
- Concepts
  
  - [Intro to reactivity](../concepts/intro-to-reactivity.md)
  - [Understanding JSX](../concepts/understanding-jsx.md)
  - Components
    
    - [Basics](../concepts/components/basics.md)
    - [Class and style](../concepts/components/class-style.md)
    - [Event handlers](../concepts/components/event-handlers.md)
    - [Props](../concepts/components/props.md)
  - [Signals](../concepts/signals.md)
  - Control flow
    
    - [Conditional rendering](../concepts/control-flow/conditional-rendering.md)
    - [Dynamic](../concepts/control-flow/dynamic.md)
    - [List rendering](../concepts/control-flow/list-rendering.md)
    - [Portal](../concepts/control-flow/portal.md)
    - [Error boundary](../concepts/control-flow/error-boundary.md)
  - [Effects](../concepts/effects.md)
  - Derived values
    
    - [Derived signals](../concepts/derived-values/derived-signals.md)
    - [Memos](../concepts/derived-values/memos.md)
  - [Context](../concepts/context.md)
  - [Stores](../concepts/stores.md)
  - [Refs](../concepts/refs.md)
- Advanced concepts
  
  - [Fine-grained reactivity](../advanced-concepts/fine-grained-reactivity.md)
- Guides
  
  - [Styling your components](styling-your-components.md)
  - [State management](state-management.md)
  - [Routing & navigation](routing-and-navigation.md)
  - [Complex state management](complex-state-management.md)
  - [Fetching data](fetching-data.md)
  - [Testing](testing.md)
  - [Deploy your app](deploying-your-app.md)
- Configuration
  
  - [Environment variables](../configuration/environment-variables.md)
  - [TypeScript](../configuration/typescript.md)

Guides

# Testing

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/testing.mdx)

Testing your Solid applications is important to inspiring confidence in your codebase through preventing regressions.

* * *

## [Getting started](testing.md#getting-started)

### [Testing packages explanations](testing.md#testing-packages-explanations)

- [`vitest`](https://vitest.dev) - testing framework that includes runner, assertion engine, and mocking facilities
- [`jsdom`](https://github.com/jsdom/jsdom) - a virtual DOM used to simulate a headless browser environment running in node
- [`@solidjs/testing-library`](https://github.com/solidjs/solid-testing-library/blob/main/README.md) - a library to simplify testing components, directives, and primitives, with automatic cleanup
- [`@testing-library/user-event`](https://testing-library.com/docs/user-event/intro) - used to simulate user events that are closer to reality
- [`@testing-library/jest-dom`](https://testing-library.com/docs/ecosystem-jest-dom) - augments expect with helpful matchers

### [Adding testing packages](testing.md#adding-testing-packages)

The recommended testing framework for Solid applications is [vitest](https://vitest.dev).

To get started with vitest, install the following development dependencies:

npmpnpmyarnbundeno

```


npm i vitest jsdom @solidjs/testing-library @testing-library/user-event @testing-library/jest-dom -D
```

```


pnpm i vitest jsdom @solidjs/testing-library @testing-library/user-event @testing-library/jest-dom -D
```

```


yarn add vitest jsdom @solidjs/testing-library @testing-library/user-event @testing-library/jest-dom -D
```

```


bun i vitest jsdom @solidjs/testing-library @testing-library/user-event @testing-library/jest-dom -d
```

```


deno add npm:vitest jsdom @solidjs/testing-library @testing-library/user-event @testing-library/jest-dom -D
```

### [Testing configuration](testing.md#testing-configuration)

In your `package.json` add a `test` script calling `vitest`:

```


  "scripts": {

    "test": "vitest"

  }
```

It is not necessary to add `@testing-library/jest-dom` to the testing options in `vite.config`, since `vite-plugin-solid` automatically detects and loads it if present.

#### [TypeScript configuration](testing.md#typescript-configuration)

If using TypeScript, add `@testing-library/jest-dom` to `tsconfig.json#compilerOptions.types`:

```


  "compilerOptions": {

    // ...

    "jsx": "preserve",

    "jsxImportSource": "solid-js",

    "types": ["vite/client", "@testing-library/jest-dom"]

  }
```

#### [SolidStart configuration](testing.md#solidstart-configuration)

When using [SolidStart](../solid-start), create a `vitest.config.ts` file:

```


import solid from "vite-plugin-solid"

import { defineConfig } from "vitest/config"




export default defineConfig({

  plugins: [solid()],

  resolve: {

    conditions: ["development", "browser"],

  },

})
```

* * *

## [Writing tests](testing.md#writing-tests)

### [Components testing](testing.md#components-testing)

Testing components involves three main things:

- Rendering the component
- Interacting with the component
- Validating assertions

To write tests for your components, create a `[name].test.tsx` file. The purpose of this file is to describe the intended behavior from a user's perspective in the form of unit tests:

Counter.test.jsxCounter.jsx

```


import { test, expect } from "vitest"

import { render } from "@solidjs/testing-library"

import userEvent from "@testing-library/user-event"

import { Counter } from "./Counter"




const user = userEvent.setup()




test("increments value", async () => {

  const { getByRole } = render(() => <Counter />)

  const counter = getByRole('button')

  expect(counter).toHaveTextContent("1")

  await user.click(counter)

  expect(counter).toHaveTextContent("2")

})
```

```


export const Counter = () => {

  const [count, setCount] = createSignal(1);

  return (

    <button onClick={() => setCount(count() + 1)}>

      {count()}

    </button>

  );

}
```

In the `test.jsx` file, [the `render` call from `@solidjs/testing-library`](https://testing-library.com/docs/solid-testing-library/api#render) is used to render the component and supply the props and context. To mimic a user interaction, `@testing-library/user-event` is used. The [`expect` function provided by `vitest`](https://vitest.dev/api/expect.html) is extended with a [`.ToHaveTextContent("content")` matcher from `@testing-library/jest-dom`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavetextcontent) to supply what the expected behavior is for this component.

To run this test, use the following command:

npmpnpmyarnbundeno

```


npm run test
```

```


pnpm test
```

```


yarn test
```

```


bun run test
```

```


deno run test
```

If running the command is successful, you will get the following result showing whether the tests have passed or failed:

```


[RUN] v1.4.0 solid-app/src/components/Counter.test.tsx




 ✓ src/components/Counter.test.tsx (1)

   ✓ <Counter /> (1)

     ✓ increments value




 Test Files  1 passed (1)

      Tests  1 passed (1)

   Start at  16:51:19

   Duration  4.34s (transform 1.01s, setup 205ms, collect 1.54s, tests 155ms,

environment 880ms, prepare 212ms)
```

#### [Rendering the component](testing.md#rendering-the-component)

The `render` function from `@solidjs/testing-library` creates the testing environment within the `test.tsx` file. It sets up the container, rendering the component within it, and automatically registers it for clean-up after a successful test. Additionally, it manages wrapping the component in contexts as well as setting up a router.

```


const renderResult = render(

  () => <MyComponent />, // @solidjs/testing-library requires a function

  { // all options are optional

    container, // manually set up your own container, will not be handled

    baseElement, // parent of container in case it is not supplied

    queries, // manually set up custom queries

    hydrate, // set to `true` to use hydration

    wrapper, // reusable wrapper component to supply context

    location, // sets up a router pointed to the location if provided

  }

)

const {

  asFragment, // function returning the contents of the container

  baseElement, // the parent of the container

  container, // the container in which the component is rendered

  debug, // a function giving some helpful debugging output

  unmount, // manually removing the component from the container

  ...queries, // functions to select elements from the container

} = renderResult
```

##### [Using the right queries](testing.md#using-the-right-queries)

Queries are helpers used to find elements within a page.

```


                                          ⎧ Role

                              get ⎫  By   ⎪ DisplayValue

                            query ⎬       ⎨ LabelText

                             find ⎭ AllBy ⎪ Text

                                          ⎩ ...
```

The prefixes (`get`, `query`, and `find`) and the middle portion (`By` and `AllBy`) depend on if the query should wait for an element to appear (or not), whether it should throw an error if the element cannot be found, and how it should handle multiple matches:

- **getBy**: synchronous, throws if not found or more than 1 matches
- **getAllBy**: synchronous, throws if not found, returns array of matches
- **queryBy**: synchronous, null if not found, error if more than 1 matches
- **queryAllBy**: synchronous, returns array of zero or more matches
- **findBy**: asynchronous, rejected if not found within 1000ms or more than 1 matches, resolves with element if found
- **findAllBy**: asynchronous, rejected if not found within 1000ms, resolves with array of one or more element(s)

By default, queries should start with `get...`. If there are multiple elements matching the same query, `getAllBy...` should be used, otherwise use `getBy...`.

There are two exceptions when you should **not** start with `get...`:

1. If the `location` option is used or the component is based on resources, the router will be lazy-loaded; in this case, the first query after rendering needs to be `find...`
2. When testing something that is *not* rendered, you will need to find something that will be rendered at the same time; after that, use `queryAllBy...` to test if the result is an empty array (`[]`).

The query's suffix (Role, LabelText, ...) depends on the characteristics of the element you want to select. If possible, try to select for accessible attributes (roughly in the following order):

- **Role**: [WAI ARIA](https://www.w3.org/WAI/standards-guidelines/aria) landmark roles which are automatically set by semantic elements like `<button>` or otherwise use `role` attribute
- **LabelText**: elements that are described by a label wrapping the element, or by an `aria-label` attribute, or is linked with `for`- or `aria-labelledby` attribute
- **PlaceholderText**: input elements with a `placeholder` attribute
- **Text**: searches text within all text nodes in the element, even if split over multiple nodes
- **DisplayValue**: form elements showing the given value (e.g. select elements)
- **AltText**: images with alt text
- **Title**: HTML elements with the `title` attribute or SVGs with the `<title>` tag containing the given text
- **TestId**: queries by the `data-testid` attribute; a different data attribute can be setup via `configure({testIdAttribute: 'data-my-test-attribute'})`; TestId-queries are *not accessible*, so use them only as a last resort.

For more information, check the [testing-library documentation](https://testing-library.com/docs/queries/about).

#### [Testing through Portal](testing.md#testing-through-portal)

Solid allows components to break through the DOM tree structure using [`<Portal>`](../reference/components/portal.md). This mechanism will still work in testing, so the content of the portals will break out of the testing container. In order to test this content, make sure to use the `screen` export to query the contents:

Toast.test.jsxToast.jsx

```


import { test, expect } from "vitest"

import { render, screen } from "@solidjs/testing-library"

import { Toast } from "./Toast"




test("increments value", async () => {

  render(() => <Toast><p>This is a toast</p></Toast>)

  const toast = screen.getByRole("log")

  expect(toast).toHaveTextContent("This is a toast")

})
```

```


import { Portal } from "solid-js/web";




export const Toast = (props) => {

  return (

    <Portal>

      <div class="toast" role={props.role ?? "log"}>

        {props.children}

      </div>

    </Portal>

  );

}
```

#### [Testing in context](testing.md#testing-in-context)

If a component relies on some context, to wrap it use the `wrapper` option:

```


import { test, expect } from "vitest"

import { render } from "@solidjs/testing-library"

import { DataContext, DataConsumer } from "./Data"




const wrapper = (props) => <DataContext value="test" {...props} />




test("receives data from context", () => {

  const { getByText } = render(() => <DataConsumer />, { wrapper })

  expect(getByText("test")).toBeInTheDocument()

});
```

Wrappers can be re-used if they are created externally. For wrappers with different values, a higher-order component creating the required wrappers can make the tests more concise:

```


const createWrapper = (value) => (props) =>

  <DataContext value={value} {...props}/>
```

Using multiple providers

If using multiple providers, [solid-primitives has `<MultiProvider>`](https://primitives.solidjs.community/package/context#multiprovider) to avoid nesting multiple levels of providers

##### [Testing routes](testing.md#testing-routes)

For convenience, the `render` function supports the `location` option that wraps the rendered component in a router pointing at the given location. Since the `<Router>` component is lazily loaded, the first query after rendering needs to be asynchronous, i.e. `findBy...`:

```


const { findByText } = render(

  () => <Route path="/article/:id" component={Article} />,

  { location: "/article/12345" }

);

expect(await findByText("Article 12345")).toBeInTheDocument()
```

#### [Interacting with components](testing.md#interacting-with-components)

Many components are not static, rather they change based on user interactions. To test these changes, these interactions need to be simulated. To simulate user interactions, `@testing-library/user-event` library can be used. It takes care of the usual order of events as they would occur in actual user interactions. For example, this means that a `click` event from the user would be accompanied by `mousemove`, `hover`, `keydown`, `focus`, `keyup`, and `keypress`.

The most convenient events to test are typically `click`, `keyboard` and `pointer` (to simulate touch events). To dive deeper into these events, you can learn about them in the [`user-event` documentation](https://testing-library.com/docs/user-event/intro).

##### [Using timers](testing.md#using-timers)

If you require a fake timer and want to use `vi.useFakeTimers()` in your tests, it must set it up with an `advanceTimers` option:

```


import { vi } from "vitest"




const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })




vi.useFakeTimers()




describe("pre-login: sign-in", () => {

  const { getByRole, getByLabelText } = render(() => <User />)

  const signUp = getByRole('button', { text: 'Sign-in' })

  // use convenience API click:

  user.click(signUp)

  const name = getByLabelText('Name')

  // use complex keyboard input:

  user.keyboard(name, "{Shift}test{Space}{Shift}user")

  const password = getByLabelText('Password')

  user.keyboard(name, "secret")

  const login = getByRole('button', { text: 'Login' })

  // use touch event

  user.pointer([

    { keys: "[TouchA]" target: login },

    { keys: "[/TouchA]", target: login }

  ])

});
```

#### [Validating assertions](testing.md#validating-assertions)

`vitest` comes with the `expect` function to facilitate assertions that works like:

```


expect(subject)[assertion](value)
```

The command supports assertions like `toBe` (reference comparison) and `toEqual` (value comparison) out of the box. For testing inside the DOM, the package `@testing-library/jest-dom` augments it with some helpful additional assertions:

- [`.toBeInTheDocument()`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobeinthedocument) - checks if the element actually exists in the DOM
- [`.toBeVisible()`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobevisible) - checks if there is no reason the element should be hidden
- [`.toHaveTextContent(content)`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavetextcontent) - checks if the text content matches
- [`.toHaveFocus()`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavefocus) - checks if this is the currently focused element
- [`.toHaveAccessibleDescription(description)`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveaccessibledescription) - checks accessible description
- and a [lot more](https://github.com/testing-library/jest-dom?tab=readme-ov-file#custom-matchers).

### [Directive testing](testing.md#directive-testing)

[Directives](../reference/jsx-attributes/use.md) are reusable behaviors for elements. They receive the HTML element they are bound to as their first and an accessor of the directive prop as their second argument. To make testing them more concise, [`@solidjs/testing-library` has a `renderDirective`](https://testing-library.com/docs/solid-testing-library/api#renderdirective) function:

```


const renderResult = renderDirective(directive, {

  initialValue, // value initially added to the argument signal

  targetElement, // opt. node name or element used as target for the directive

  ...renderOptions, // see render options

})

const {

  arg, // getter for the directive's argument

  setArg, // setter for the directive's argument

  ...renderResults, // see render results

} = renderResult
```

In `...renderResults`, the container will contain the `targetElement`, which defaults to a `<div>`. This, along with the ability to modify the `arg` signal, are helpful when testing directives.

If, for example, you have a directive that handles the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API), you can test it like this:

fullscreen.test.tsfullscreen.ts

```


import { test, expect, vi } from "vitest"

import { renderDirective } from "@solidjs/testing-library"

import { createFullScreen } from "./fullscreen"




test("toggles fullscreen", () => {

  const targetElement = document.createElement("div")

  const fs = vi.spyOn(targetElement, "fullscreen")

  const [setArg, container] = renderDirective(createFullScreen, false)

  setArg(true)

  expect(fs).toHaveBeenCalled()

})
```

```


import { Accessor } from "solid-js"




export const fullscreen = (ref: HTMLElement, active: Accessor<boolean>) =>

  createEffect(() => {

    const isActive = document.fullscreenElement === ref

    if (active() && !isActive) {

      ref.requestFullScreen().catch(() => {})

    } else if (!active() && isActive) {

      document.exitFullScreen()

    }

  })
```

### [Primitive testing](testing.md#primitive-testing)

When the reference to an element is not needed, parts of state and logic can be put into reusable hooks or primitives. Since these do not require elements, there is no need for `render` to test them since it would require a component that has no other use. To avoid this, there is a [`renderHook` utility](https://testing-library.com/docs/solid-testing-library/api#renderhook) that simulates a component without actually rendering anything.

```


const renderResult = renderHook(hook, {

  initialProps, // an array with arguments being supplied to the hook

  wrapper, // same as the wrapper optionss for `render`

})

const {

  result, // return value of the hook (mutable, destructuring fixes it)

  cleanup, // manually remove the traces of the test from the DOM

  owner, // the owner running the hook to use with `runWithOwner()`

} = renderResult
```

A primitive that manages the state of a counter could be tested like this:

```


import { test, expect } from "vitest"

import { renderHook } from "@solidjs/testing-library"

import { createCounter } from "./counter"




test("increments count", () => {

  const { result } = renderHook(createCounter)

  expect(result.count).toBe(0)

  result.increment()

  expect(result.count).toBe(1)

})
```

### [Testing effects](testing.md#testing-effects)

Since effects may happen asynchronously, it can be difficult to test them. [`@solidjs/testing-library` comes with a `testEffect` function](https://testing-library.com/docs/solid-testing-library/api#async-methods) that takes another function that receives a `done` function to be called once tests are over and returns a promise. Once `done` is called, the returned promise is resolved. Any errors that would hit the next boundary are used to reject the returned promise.

An example test using `testEffect` may look like this:

```


const [value, setValue] = createSignal(0)

return testEffect(done =>

  createEffect((run: number = 0) => {

    if (run === 0) {

      expect(value()).toBe(0)

      setValue(1)

    } else if (run === 1) {

      expect(value()).toBe(1)

      done()

    }

    return run + 1

  })

)
```

### [Benchmarks](testing.md#benchmarks)

While Solid offers performance simplified, it is good to validate if that promise can be kept. Vitest offers an experimental `bench` function to run benchmarks and compare the results inside the same `describe` block; for example if you had a `<List>` flow component similar to `<For>`, you could benchmark it like this:

```


describe('list rendering', () => {

  const ITEMS = 1000

  const renderedFor = new Set()

  const listFor = Array.from({ length: ITEMS }, (_, i) => i)

  bench('For', () => new Promise((resolve) => {

    const ItemFor = (props) => {

      onMount(() => {

        renderedFor.add(props.number)

        if (renderedFor.size === ITEMS) { resolve() }

      })

      return <span>{props.number}</span>

    }

    render(() => <For each={listFor}>

      {(item) => <ItemFor number={item} />}

    </For>)

  }))




  const renderedList = new Set()

  const listList = Array.from({ length: ITEMS }, (_, i) => i)

  bench('List', () => new Promise((resolve) => {

    const ItemList = (props) => {

      onMount(() => {

        renderedList.add(props.number)

        if (renderedList.size === ITEMS) { resolve() }

      })

      return <span>{props.number}</span>

    }

    render(() => <List each={listList}>

      {(item) => <ItemList number={item} />}

    </List>)

  }))

})
```

Running `[npm|pnpm|yarn] test bench` will then execute the benchmark function:

```


[RUN] v1.4.0 solid-app/src/components/




 ✓ src/components/list.bench.jsx (2) 1364ms

   ✓ benchmark (2) 1360ms

     name       hz      min      max     mean      p75      p99     p995     p999      rme  samples

   · For   60.5492  11.2355  47.9164  16.5155  15.4180  47.9164  47.9164  47.9164  ±13.60%       31   fastest

   · List  49.7725  16.5441  69.3559  20.0914  18.0349  69.3559  69.3559  69.3559  ±21.37%       25




[BENCH] Summary




For - src/components/list.bench.tsx > benchmark

    1.22x faster than List
```

Please keep in mind that it is very difficult to create meaningful benchmarks. The numbers should always be taken with a grain of salt, but can still indicate performance degradations if compared between versions.

### [Test coverage](testing.md#test-coverage)

While coverage numbers can be misleading, they are used by many projects as a rough measurement of code quality. Vitest supports coverage collection. To use it, it needs an extra package:

npmpnpmyarnbundeno

```


npm i @vitest/coverage-v8 -D
```

```


pnpm i @vitest/coverage-v8 -D
```

```


yarn add @vitest/coverage-v8 -D
```

```


bun i @vitest/coverage-v8 -d
```

```


deno add npm:@vitest/coverage-v8 -D
```

Also, you need to [set up vitest's coverage feature](https://vitest.dev/guide/coverage.html).

### [Integration/E2E testing](testing.md#integratione2e-testing)

Some issues can only be found once the code is running in the environment it is supposed to run in. Since integration and end-to-end tests are agnostic to frameworks, all proven approaches will work equally for Solid.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Ftesting.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Ftesting)

Previous[← Fetching data](fetching-data.md)

Next[Deploy your app →](deploying-your-app.md)

On this page

1. [Overview](#_top)
2. [Getting started](#getting-started)
   
   1. [Testing packages explanations](#testing-packages-explanations)
   2. [Adding testing packages](#adding-testing-packages)
   3. [Testing configuration](#testing-configuration)
3. [Writing tests](#writing-tests)
   
   1. [Components testing](#components-testing)
   2. [Directive testing](#directive-testing)
   3. [Primitive testing](#primitive-testing)
   4. [Testing effects](#testing-effects)
   5. [Benchmarks](#benchmarks)
   6. [Test coverage](#test-coverage)
   7. [Integration/E2E testing](#integratione2e-testing)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/testing.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Ftesting.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Ftesting)