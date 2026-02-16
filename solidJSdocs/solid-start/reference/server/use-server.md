[**Solid**Start](../..)

- [Core](../../../index.md)
- [Router](../../../solid-router)
- [SolidStart](../..)
- [Meta](../../../solid-meta)

[](https://github.com/solidjs/solid-start)[](https://discord.com/invite/solidjs)

LearnReference

- Entrypoints
  
  - [app.config.ts](../entrypoints/app-config.md)
  - [app.tsx](../entrypoints/app.md)
  - [entry-client.tsx](../entrypoints/entry-client.md)
  - [entry-server.tsx](../entrypoints/entry-server.md)
- Config
  
  - [defineConfig](../config/define-config.md)
- Routing
  
  - [FileRoutes](../routing/file-routes.md)
- Client
  
  - [clientOnly](../client/client-only.md)
  - [mount](../client/mount.md)
  - [StartClient](../client/start-client.md)
- Server
  
  - ["use server"](use-server.md)
  - [createHandler](create-handler.md)
  - [createMiddleware](create-middleware.md)
  - [GET](get.md)
  - [getServerFunctionMeta](get-server-function-meta.md)
  - [HttpHeader](http-header.md)
  - [HttpStatusCode](http-status-code.md)
  - [StartServer](start-server.md)

Server

# "use server"

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/use-server.mdx)

`"use server"` enables functions or files to be executed only on the server. Server functions allow client components to call code that is executed in the server context.

```


// Function-level

const logHello = async (message: string) => {

  "use server";

  console.log(message);

};
```

Or when using at the top of a file.

```


// File-level

"use server";




const logHello = async (message: string) => {

  console.log(message);

};
```

**Note:** `"use server"` functions must be marked async or return a promise.

* * *

## [Basic usage](use-server.md#basic-usage)

When using `"use server"`, regardless of whether server rendering is enabled, the functions it apply to will only run on the server.

To do this, compilation is used to transform the `"use server"` function into an RPC call to the server.

If `"use server"` is inserted as the first line in a file, the entire file will become server-only.

```


"use server";




const logHello = async (message: string) => {

  console.log(message);

};
```

However, if `"use server"` is inserted as the first line of a function, only that function will be server-only:

```


const logHello = async (message: string) => {

  "use server";

  console.log(message);

};




logHello("Hello");
```

In both examples, the `logHello` function will only show in the server console, regardless of whether rendering was on the server or in the browser.

* * *

## [Usage with Data APIs](use-server.md#usage-with-data-apis)

Server functions can be used for fetching data and performing actions on the server. The following examples show how to use server functions alongside solid-router's data APIs.

```


const getUser = query((id) => {

  "use server";

  return db.getUser(id);

}, "users");




const updateUser = action(async (id, data) => {

  "use server"

  await db.setUser(id, data);

  throw redirect("/", { revalidate: getUser.keyFor(id) });

});
```

When `getUser` or `updateUser` are triggered on the client, an http request will be made to the server, which calls the corresponding server function.

* * *

## [Single-flight mutations](use-server.md#single-flight-mutations)

In the above example, when the `updateUser` action is called, a redirect is thrown on the server. Solid Start can handle this redirect on the server instead of propagating it to the client. The data for the redirected page is fetched and streamed to the client in the same http request as the `updateUser` action, rather than the client requiring a separate http request for the redirected page.

* * *

## [Serialization](use-server.md#serialization)

Server functions allow the serialization of many different data types in the response, using the Seroval serializer. The full list is available [in Seroval's source code](https://github.com/lxsmnsyc/seroval/blob/main/docs/compatibility.md#supported-types).

* * *

## [Meta information](use-server.md#meta-information)

To get a stable function-specific identifier, even for parallel processes or multiple cpu cores or workers, use the [`getServerFunctionMeta`](get-server-function-meta.md)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fuse-server.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fuse-server)

Previous[← StartClient](../client/start-client.md)

Next[createHandler →](create-handler.md)

On this page

1. [Overview](#_top)
2. [Basic usage](#basic-usage)
3. [Usage with Data APIs](#usage-with-data-apis)
4. [Single-flight mutations](#single-flight-mutations)
5. [Serialization](#serialization)
6. [Meta information](#meta-information)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/use-server.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-start%2Freference%2Fserver%2Fuse-server.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-start%2Freference%2Fserver%2Fuse-server)