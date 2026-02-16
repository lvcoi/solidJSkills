# LESS

[LESS](https://lesscss.org/) is a preprocessor based on JavaScript. It provides the ability to use mixins, variables, and other programmatic tools, making styling code cleaner and less redundant.

* * *

## Installation

To utilize LESS in a Solid app, it will need to be installed as a development dependency:

```
npm i less -D
```
```
pnpm i less -D
```
```
yarn add less -D
```
```
bun i less -d
```
```
deno add npm:less -D
```
* * *

## Using LESS in your app

Start by creating a `.less` file in the `src` directory:

```
//styles.less

.foo {

  color: red;

}

.bar {

  background-color: blue;

}
```
The basic syntax of LESS is very similar to CSS. However, LESS allows the declaration and usage of variables:

```
//styles.less

@plainred: red;

@plainblue: blue;

.foo {

  color: @plainred;

}

.bar {

  background-color: @plainblue;

}
```
To use these styles in a Solid component, import the `.less` file:

```
//component.jsx

import "./styles.less";

function Component() {

  return (

    <>

      <div class="foo bar">Hello, world!</div>

    </>

  );

}
```
By changing the file extension of the imported styles to `.less`, Vite will recognize it as a LESS file and compile it to CSS on demand.
