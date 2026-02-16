# &lt;Portal&gt;

`<Portal>` is a component that allows you to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

This is useful when your UI has some elements that need to appear on top of everything else, such as modals and tooltips.

```
import { Portal } from "solid-js/web"

import type { JSX } from "solid-js"

function Portal(props: {

  mount?: Node

  useShadow?: boolean

  isSVG?: boolean

  children: JSX.Element

}): Text
```
This inserts the element in the mount node. Useful for inserting Modals outside of the page layout. Events still propagate through the component hierarchy, however `<Portal>` will only run on the client and has hydration *disabled*.

The portal is mounted in a `<div>` unless the target is the document head. `useShadow` places the element in a Shadow Root for style isolation, and `isSVG` is required if inserting into an SVG element so that the `<div>` is not inserted.

```
<Portal mount={document.getElementById("modal")}>

  <div>My Content</div>

</Portal>
```
* * *

## Props

NameTypeDefaultDescription`mount``Node`document.bodyThe DOM node to mount the portal in.`useShadow``boolean`falseWhether to use a Shadow Root for style isolation.`isSVG``boolean`falseWhether the mount node is an SVG element.
