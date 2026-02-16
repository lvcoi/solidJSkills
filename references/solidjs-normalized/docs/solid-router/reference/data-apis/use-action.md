# useAction

The `useAction` primitive returns a function that triggers an [action](../../concepts/actions.md) when called.

`useAction` requires client-side JavaScript and is not progressively enhanceable.

* * *

## Import

```
import { useAction } from "@solidjs/router";
```
* * *

## Type

```
function useAction<T extends Array<any>, U, V>(

  action: Action<T, U, V>

): (...args: Parameters<Action<T, U, V>>) => Promise<NarrowResponse<U>>;
```
* * *

## Parameters

### `action`

- **Type:** `Action<T, U, V>`
- **Required:** Yes

The action to be triggered.

* * *

## Return value

`useAction` returns a function that triggers the action. It takes the same parameters as the action handler and returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves with the action's result.

* * *

## Example

```
import { action, useAction } from "@solidjs/router";

const likePostAction = action(async (id: string) => {

  // ... Likes a post on the server.

});

function LikeButton(props: { postId: string }) {

  const likePost = useAction(likePostAction);

  return <button onClick={() => likePost(props.postId)}>Like</button>;

}
```
