# createComputed

The `createComputed` function creates a reactive computation that runs *before* the rendering phase. It is primarily used to synchronize state before rendering begins.

* * *

## Import

```
import { createComputed } from "solid-js";
```
* * *

## Type

```
function createComputed<Next>(

  fn: EffectFunction<undefined | NoInfer<Next>, Next>

): void;

function createComputed<Next, Init = Next>(

  fn: EffectFunction<Init | Next, Next>,

  value: Init,

  options?: { name?: string }

): void;

function createComputed<Next, Init>(

  fn: EffectFunction<Init | Next, Next>,

  value?: Init,

  options?: { name?: string }

): void;
```
* * *

## Parameters

### `fn`

- **Type:** `EffectFunction<undefined | NoInfer<Next>, Next> | EffectFunction<Init | Next, Next>`
- **Required:** Yes

The function that performs the computation. It executes immediately to track dependencies and re-runs whenever a dependency changes.

It receives the value returned from the previous execution as its argument. On the initial execution, it receives the [`value`](create-computed.md#value) parameter (if provided) or `undefined`.

### `value`

- **Type:** `Init`
- **Required:** No

The initial value passed to `fn` on its first execution.

### `options`

- **Type:** `{ name?: string }`
- **Required:** No

An optional configuration object with the following properties:

#### `name`

- **Type:** `string`
- **Required:** No

A debug name for the computation. It is used for identification in debugging tools like the [Solid Debugger](https://github.com/thetarnav/solid-devtools).

* * *

## Return value

- **Type:** `void`

`createComputed` does not return a value.

* * *

## Examples

### Basic usage

```
import { createComputed } from "solid-js";

import { createStore } from "solid-js/store";

type User = {

  name?: string;

};

type UserEditorProps = {

  user: User;

};

function UserEditor(props: UserEditorProps) {

  const [formData, setFormData] = createStore<User>({

    name: "",

  });

  // Update the store synchronously when props change.

  // This prevents a second render cycle.

  createComputed(() => {

    setFormData("name", props.user.name);

  });

  return (

    <form>

      <h1>Editing: {formData.name}</h1>

      <input

        value={formData.name}

        onInput={(e) => setFormData("name", e.currentTarget.value)}

      />

    </form>

  );

}
```
* * *

## Related

- [`createMemo`](../basic-reactivity/create-memo.md)
- [`createRenderEffect`](create-render-effect.md)
