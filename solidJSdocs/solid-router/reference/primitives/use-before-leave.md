[Solid **Router**](../..)

- [Core](../../../index.md)
- [Router](../..)
- [SolidStart](../../../solid-start)
- [Meta](../../../solid-meta)

[](https://github.com/solidjs/solid-router)[](https://discord.com/invite/solidjs)

LearnReference

- Components
  
  - [A](../components/a.md)
  - [HashRouter](../components/hash-router.md)
  - [MemoryRouter](../components/memory-router.md)
  - [Navigate](../components/navigate.md)
  - [Route](../components/route.md)
  - [Router](../components/router.md)
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
  
  - [useBeforeLeave](use-before-leave.md)
  - [useCurrentMatches](use-current-matches.md)
  - [useIsRouting](use-is-routing.md)
  - [useLocation](use-location.md)
  - [useMatch](use-match.md)
  - [useNavigate](use-navigate.md)
  - [useParams](use-params.md)
  - [usePreloadRoute](use-preload-route.md)
  - [useSearchParams](use-search-params.md)
- Response helpers
  
  - [json](../response-helpers/json.md)
  - [redirect](../response-helpers/redirect.md)
  - [reload](../response-helpers/reload.md)

Primitives

# useBeforeLeave

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-before-leave.mdx)

`useBeforeLeave` takes a function that will be called prior to leaving a route. The function will be called with:

- from (*Location*): current location (before change).
- to (*string | number*}: path passed to `navigate.`
- options (*NavigateOptions*}: options passed to `navigate.`
- preventDefault (*void function*): call to block the route change.
- defaultPrevented (*readonly boolean*): `true` if any previously called leave handlers called `preventDefault()`.
- retry (*void function*, *force?: boolean* ): call to retry the same navigation. Pass `true` to skip running the leave handlers again (ie. force navigate without confirming).

Example usage:

```


useBeforeLeave((e: BeforeLeaveEventArgs) => {

  if (form.isDirty && !e.defaultPrevented) {

    // preventDefault to block immediately and prompt user async

    e.preventDefault();

    setTimeout(() => {

      if (window.confirm("Discard unsaved changes - are you sure?")) {

        // user wants to proceed anyway so retry with force=true

        e.retry(true);

      }

    }, 100);

  }

});
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-before-leave.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-before-leave)

Previous[← preload](../preload-functions/preload.md)

Next[useCurrentMatches →](use-current-matches.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-before-leave.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Freference%2Fprimitives%2Fuse-before-leave.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Freference%2Fprimitives%2Fuse-before-leave)