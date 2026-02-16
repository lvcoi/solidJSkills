# createUniqueId

The `createUniqueId` function generates a unique ID that remains consistent across both server and client renders. It is commonly used with HTML `id` and `for` attributes to ensure stable hydration.

`createUniqueId` does *not* generate a cryptographically secure ID and is not suitable for security-sensitive data. Additionally, it should not be used in scenarios that require uniqueness across a distributed system.

`createUniqueId` relies on a counter-based mechanism to generate IDs. It must be called the same number of times on both the server and client.

Calling `createUniqueId` only on the server or only on the client, such as when using [`isServer`](../rendering/is-server.md) or [`<NoHydration>`](../components/no-hydration.md), may lead to hydration errors.

* * *

## Import

```
import { createUniqueId } from "solid-js";
```
* * *

## Type

```
function createUniqueId(): string;
```
* * *

## Parameters

This function does not take any parameters.

* * *

## Returns

`createUniqueId` returns a unique `string` that is stable across server and client renders.

* * *

## Examples

### Basic Usage

```
import { createUniqueId } from "solid-js";

type InputProps = {

  id?: string;

};

function Input(props: InputProps) {

  return <input id={props.id ?? createUniqueId()} />;

}
```
