# Auth

Server functions can be used to protect sensitive resources like user data.

```
"use server"

async function getPrivatePosts() {

  const user = await getUser()

  if(!user) {

    return null  // or throw an error

  }

  return db.getPosts({ userId: user.id, private: true })

}
```
The `getUser` function can be [implemented using sessions](session.md).

* * *

## Protected Routes

Routes can be protected by checking the user or session object during data fetching. This example uses [Solid Router](../../solid-router).

```
const getPrivatePosts = query(async function() {

  "use server"

  const user = await getUser()

  if(!user) {

    throw redirect("/login");

  }

  return db.getPosts({ userId: user.id, private: true })

})

export default function Page() {

  const posts = createAsync(() => getPrivatePosts(), { deferStream: true });

}
```
Once the user hits this route, the router will attempt to fetch `getPrivatePosts` data. If the user is not signed in, `getPrivatePosts` will throw and the router will redirect to the login page.

To prevent errors when opening the page directly, set `deferStream: true`. This would ensure `getPrivatePosts` resolves before the page loads since server-side redirects cannot occur after streaming has started.
