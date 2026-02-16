# SASS

[SASS](https://sass-lang.com/) is a popular CSS preprocessor that makes authoring CSS easier. It is a superset of CSS and offers two syntaxes: SCSS and the indented syntax (often referred to as just "SASS").

* * *

## Installation

Depending on your package manager, SASS can be installed as a development dependency:

```
npm i sass -D
```
```
pnpm i sass -D
```
```
yarn add sass -D
```
```
bun i sass -d
```
```
deno add npm:sass -D
```
* * *

## Convert filename extensions

After installation, the `.css` filename extensions will have to be changed to `.scss` or `.sass`. The `.scss` syntax is a strict superset of CSS, while `.sass` offers a more relaxed syntax. Vite, which is integrated with Solid, supports both. However, `.scss` is generally recommended.

```
// Card.scss

.grid {

  display: grid;

  &-center {

    place-items: center;

  }

}

.screen {

  min-height: 100vh;

}

.card {

  height: 160px;

  aspect-ratio: 2;

  border-radius: 16px;

  background-color: white;

  box-shadow: 0 0 0 4px hsl(0 0% 0% / 15%);

}
```
In a Solid component:

```
// Card.jsx

import "./card.scss";

function Card() {

  return (

    <>

      <div class="grid grid-center screen">

        <div class="card">Hello, world!</div>

      </div>

    </>

  );

}
```
By simply changing the file extension from `.css` to `.scss` or `.sass` , Vite will automatically recognize these files and compile SASS to CSS on demand. When building in production, all SASS files are converted to CSS. This ensures compatibility with most modern browsers.
