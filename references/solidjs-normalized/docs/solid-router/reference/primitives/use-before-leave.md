# useBeforeLeave

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
