[Solid **Router**](../..)

- [Core](../../../index.md)
- [Router](../..)
- [SolidStart](../../../solid-start)
- [Meta](../../../solid-meta)

[](https://github.com/solidjs/solid-router)[](https://discord.com/invite/solidjs)

LearnReference

- Components
  
  - [A](a.md)
  - [HashRouter](hash-router.md)
  - [MemoryRouter](memory-router.md)
  - [Navigate](navigate.md)
  - [Route](route.md)
  - [Router](router.md)
- Data APIs
  
  - [action](../data-apis/action.md)
  - [cache (deprecated)](../data-apis/cache.md)
  - [createAsync](../data-apis/create-async.md)
  - [createAsyncStore](../data-apis/create-async-store.md)
  - [query](../data-apis/query.md)
  - [revalidate](../data-apis/revalidate.md)
  - [useAction](../data-apis/use-action.md)
  - [useSubmission](../data-apis/use-submission.md)
  - [useSubmissions](../data-apis/use-submissions.md)
- Preload functions
  
  - [preload](../preload-functions/preload.md)
- Primitives
  
  - [useBeforeLeave](../primitives/use-before-leave.md)
  - [useCurrentMatches](../primitives/use-current-matches.md)
  - [useIsRouting](../primitives/use-is-routing.md)
  - [useLocation](../primitives/use-location.md)
  - [useMatch](../primitives/use-match.md)
  - [useNavigate](../primitives/use-navigate.md)
  - [useParams](../primitives/use-params.md)
  - [usePreloadRoute](../primitives/use-preload-route.md)
  - [useSearchParams](../primitives/use-search-params.md)
- Response helpers
  
  - [json](../response-helpers/json.md)
  - [redirect](../response-helpers/redirect.md)
  - [reload](../response-helpers/reload.md)

Components

# A

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/components/a.mdx)

Solid Router exposes the `<A />` component as a wrapper around the [native anchor tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) . It relies on the routing context provided by the [`<Router>` component](router.md) and if used outside, will triggers a runtime error..

`<A />` supports relative and base paths. `<a />` doesn't. But `<a />` gets augmented when JS is present via a top-level listener to the DOM, so you get the soft-navigation experience nonetheless.

The `<A />` supports the [`<Router />`](router.md) base property (`<Router base="/subpath">`) and prepend it to the received `href` automatically and the `<a />`does not. The same happens with relative paths passed to `<A />`.

The `<A>` tag has an `active` class if its href matches the current location, and `inactive` otherwise. By default matching includes locations that are descendants (e.g.: href `/users` matches locations `/users` and `/users/123`).

tip

Use the boolean `end` prop to prevent matching these. This is particularly useful for links to the root route `/` which would match everything.

* * *

## [Soft Navigation](a.md#soft-navigation)

When JavaScript is present at the runtime, both components behave in a very similar fashion. This is because Solid Router adds a listener at the top level of the DOM and will augment the native `<a />` tag to a more performant experience (with soft navigation).

note

To prevent, both `<A />` and `<a />` tags from soft navigating when JavaScript is present, pass a `target="_self"` attribute.

* * *

## [Props Reference](a.md#props-reference)

proptypedescriptionhrefstringThe path of the route to navigate to. This will be resolved relative to the route that the link is in, but you can preface it with `/` to refer back to the root.noScrollbooleanIf true, turn off the default behavior of scrolling to the top of the new pagereplacebooleanIf true, don't add a new entry to the browser history. (By default, the new page will be added to the browser history, so pressing the back button will take you to the previous route.)stateunknown[Push this value](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) to the history stack when navigatinginactiveClassstringThe class to show when the link is inactive (when the current location doesn't match the link)activeClassstringThe class to show when the link is activeendbooleanIf `true`, only considers the link to be active when the current location matches the `href` exactly; if `false`, check if the current location *starts with* `href`

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fcomponents%2Fa.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fcomponents%2Fa)

Next[HashRouter →](hash-router.md)

On this page

1. [Overview](#_top)
2. [Soft Navigation](#soft-navigation)
3. [Props Reference](#props-reference)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/components/a.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fcomponents%2Fa.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fcomponents%2Fa)