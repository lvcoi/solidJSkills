# bool:*

`bool:*` controls the presence of an attribute in an element. When the value is `truthy` it adds the `attribute` to the element. Alternatively, when the value is `falsy` it removes the `attribute` from the element. This attribute is most useful for Web Components.

```
<my-element bool:status={prop.value} />
```
```
// Assuming `prop.value` is `truthy`, then it becomes

<my-element status />

// And when `falsy`, then it becomes

<my-element />
```
Strong-Typing Custom Boolean Attributes

Type definitions are required when using TypeScript. See the [TypeScript](../../configuration/typescript.md#forcing-properties-and-custom-attributes) page for examples.
