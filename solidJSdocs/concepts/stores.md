[**Solid**](../index.md)

- [Core](../index.md)
- [Router](../solid-router)
- [SolidStart](../solid-start)
- [Meta](../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- [Quick start](../quick-start.md)
- Concepts
  
  - [Intro to reactivity](intro-to-reactivity.md)
  - [Understanding JSX](understanding-jsx.md)
  - Components
    
    - [Basics](components/basics.md)
    - [Class and style](components/class-style.md)
    - [Event handlers](components/event-handlers.md)
    - [Props](components/props.md)
  - [Signals](signals.md)
  - Control flow
    
    - [Conditional rendering](control-flow/conditional-rendering.md)
    - [Dynamic](control-flow/dynamic.md)
    - [List rendering](control-flow/list-rendering.md)
    - [Portal](control-flow/portal.md)
    - [Error boundary](control-flow/error-boundary.md)
  - [Effects](effects.md)
  - Derived values
    
    - [Derived signals](derived-values/derived-signals.md)
    - [Memos](derived-values/memos.md)
  - [Context](context.md)
  - [Stores](stores.md)
  - [Refs](refs.md)
- Advanced concepts
  
  - [Fine-grained reactivity](../advanced-concepts/fine-grained-reactivity.md)
- Guides
  
  - [Styling your components](../guides/styling-your-components.md)
  - [State management](../guides/state-management.md)
  - [Routing & navigation](../guides/routing-and-navigation.md)
  - [Complex state management](../guides/complex-state-management.md)
  - [Fetching data](../guides/fetching-data.md)
  - [Testing](../guides/testing.md)
  - [Deploy your app](../guides/deploying-your-app.md)
- Configuration
  
  - [Environment variables](../configuration/environment-variables.md)
  - [TypeScript](../configuration/typescript.md)

Concepts

# Stores

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/stores.mdx)

Stores are a state management primitive that provide a centralized way to handle shared data and reduce redundancy. Unlike [signals](signals.md), which track a single value and trigger a full re-render when updated, stores maintain fine-grained reactivity by updating only the properties that change. They can produce a collection of reactive signals, each linked to an individual property, making them well-suited for managing complex state efficiently.

* * *

## [Creating a store](stores.md#creating-a-store)

Stores can manage many data types, including: objects, arrays, strings, and numbers.

Using JavaScript's [proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) mechanism, reactivity extends beyond just the top-level objects or arrays. With stores, you can now target nested properties and elements within these structures to create a dynamic tree of reactive data.

```


import { createStore } from "solid-js/store"




// Initialize store

const [store, setStore] = createStore({

  userCount: 3,

  users: [

    {

      id: 0,

      username: "felix909",

      location: "England",

      loggedIn: false,

    },

    {

      id: 1,

      username: "tracy634",

      location: "Canada",

      loggedIn: true,

    },

    {

      id: 2,

      username: "johny123",

      location: "India",

      loggedIn: true,

    },

  ],

})
```

* * *

## [Accessing store values](stores.md#accessing-store-values)

Store properties can be accessed directly from the state proxy through directly referencing the targeted property:

```


console.log(store.userCount) // Outputs: 3
```

Accessing stores within a tracking scope follows a similar pattern to signals. While signals are created using the [`createSignal`](../reference/basic-reactivity/create-signal.md) function and require calling the signal function to access their values, store values can be directly accessed without a function call. This provides access to the store's value directly within a tracking scope:

```


const App = () => {

  const [mySignal, setMySignal] = createSignal("This is a signal.")

  const [store, setStore] = createStore({

    userCount: 3,

    users: [

      {

        id: 0,

        username: "felix909",

        location: "England",

        loggedIn: false,

      },

      {

        id: 1,

        username: "tracy634",

        location: "Canada",

        loggedIn: true,

      },

      {

        id: 2,

        username: "johny123",

        location: "India",

        loggedIn: true,

      },

    ],

  })

  return (

    <div>

      <h1>Hello, {store.users[0].username}</h1> {/* Accessing a store value */}

      <span>{mySignal()}</span> {/* Accessing a signal */}

    </div>

  )

}
```

When a store is created, it starts with the initial state but does *not* immediately set up signals to track changes. These signals are created **lazily**, meaning they are only formed when accessed within a tracking scope.

Once data is used within a tracking scope, such as within the return statement of a component function, computed property, or an effect, a signal is created and dependencies are established.

For example, if you wanted to print out every new user, adding the console log below will not work because it is not within a tracked scope.

```


const App = () => {

  const [store, setStore] = createStore({

    userCount: 3,

    users: [ ... ],

  })




  const addUser = () => { ... }




  console.log(store.users.at(-1)) // This won't work




  return (

    <div>

      <h1>Hello, {store.users[0].username}</h1>

      <p>User count: {store.userCount}</p>

      <button onClick={addUser}>Add user</button>

    </div>

  )

}
```

Rather, this would need to be in a tracking scope, like inside a [`createEffect`](../reference/basic-reactivity/create-effect.md), so that a dependency is established.

```


const App = () => {

  const [store, setStore] = createStore({

    userCount: 3,

    users: [ ... ],

  })




  const addUser = () => { ... }




  console.log(store.users.at(-1))

  createEffect(() => {

    console.log(store.users.at(-1))

  })




  return (

    <div>

      <h1>Hello, {store.users[0].username}</h1>

      <p>User count: {store.userCount}</p>

      <button onClick={addUser}>Add user</button>

    </div>

  )

}
```

* * *

## [Modifying store values](stores.md#modifying-store-values)

Updating values within a store is best accomplished using a setter provided by the `createStore` initialization. This setter allows for the modification of a specific key and its associated value, following the format `setStore(key, newValue)`:

```


const [store, setStore] = createStore({

  userCount: 3,

  users: [ ... ],

})




setStore("users", (currentUsers) => [

  ...currentUsers,

  {

    id: 3,

    username: "michael584",

    location: "Nigeria",

    loggedIn: false,

  },

])
```

The value of `userCount` could also be automatically updated whenever a new user is added to keep it synced with the users array:

```


const App = () => {

  const [store, setStore] = createStore({

    userCount: 3,

    users: [ ... ],

  })




  const addUser = () => { ... }




  createEffect(() => {

    console.log(store.users.at(-1))

    setStore("userCount", store.users.length)

  })




  return (

    <div>

      <h1>Hello, {store.users[0].username}</h1>

      <p>User count: {store.userCount}</p>

      <button onClick={addUser}>Add user</button>

    </div>

  )

}
```

note

Separating the read and write capabilities of a store provides a valuable debugging advantage.

This separation facilitates the tracking and control of the components that are accessing or changing the values.

advanced

A little hidden feature of stores is that you can also create nested stores to help with setting nested properties.

```


  const [store, setStore] = createStore({

    userCount: 3,

    users: [ ... ],

  })




  const [users, setUsers] = createStore(store.users)




  setUsers((currentUsers) => [

    ...currentUsers,

    {

      id: 3,

      username: "michael584",

      location: "Nigeria",

      loggedIn: false,

    },

  ])
```

Changes made through `setUsers` will update the `store.users` property and reading `users` from this derived store will also be in sync with the values from `store.users`.

Note that the above relies on `store.users` to be set already in the existing store.

* * *

## [Path syntax flexibility](stores.md#path-syntax-flexibility)

Modifying a store using this method is referred to as "path syntax." In this approach, the initial arguments are used to specify the keys that lead to the target value you want to modify, while the last argument provides the new value.

String keys are used to precisely target particular values with path syntax. By specifying these exact key names, you can directly retrieve the targeted information. However, path syntax goes beyond string keys and offers more versatility when accessing targeted values.

Instead of employing the use of just string keys, there is the option of using an array of keys. This method grants you the ability to select multiple properties within the store, facilitating access to nested structures. Alternatively, you can use filtering functions to access keys based on dynamic conditions or specific rules.

[View on Eraser![](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9/preview?elements=M6Y55ScNFDD_2HmRd4OJkQ&type=embed)](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=M6Y55ScNFDD_2HmRd4OJkQ)

The flexibility in path syntax makes for efficient navigation, retrieval, and modification of data in your store, regardless of the store's complexity or the requirement for dynamic access scenarios within your application.

* * *

## [Modifying values in arrays](stores.md#modifying-values-in-arrays)

Path syntax provides a convenient way to modify arrays, making it easier to access and update their elements. Instead of relying on discovering individual indices, path syntax introduces several powerful techniques for array manipulation.

### [Appending new values](stores.md#appending-new-values)

To append values to an array in a store, use the setter function with the spread operator (`...`) or the path syntax. Both methods add an element to the array but differ in how they modify it and their reactivity behavior.

The spread operator creates a new array by copying the existing elements and adding the new one, effectively replacing the entire `store.users` array. This replacement triggers reactivity for all effects that depend on the array or its properties.

```


setStore("users", (otherUsers) => [

  ...otherUsers,

  {

    id: 3,

    username: "michael584",

    location: "Nigeria",

    loggedIn: false,

  },

])
```

The path syntax adds the new element by assigning it to the index equal to `store.users.length`, directly modifying the existing array. This triggers reactivity only for effects that depend on the new index or properties like `store.users.length`, making updates more efficient and targeted.

```


setStore("users", store.users.length, {

  id: 3,

  username: "michael584",

  location: "Nigeria",

  loggedIn: false,

})
```

### [Modifying multiple elements](stores.md#modifying-multiple-elements)

With path syntax, you can target a subset of elements of an array, or properties of an object, by specifying an array or range of indices.

The most general form is to specify an array of values. For example, if `store.users` is an array of objects, you can set the `loggedIn` property of several indices at once like so:

```


setStore("users", [2, 7, 10], "loggedIn", false)

// equivalent to (but more efficient than):

setStore("users", 2, "loggedIn", false)

setStore("users", 7, "loggedIn", false)

setStore("users", 10, "loggedIn", false)
```

This array syntax also works for object property names. For example, if `store.users` is an object mapping usernames to objects, you can set the `loggedIn` property of several users at once like so:

```


setStore("users", ["me", "you"], "loggedIn", false)

// equivalent to (but more efficient than):

setStore("users", ["me"], "loggedIn", false)

setStore("users", ["you"], "loggedIn", false)
```

For arrays specifically, you can specify a range of indices via an object with `from` and `to` keys (both of which are inclusive). For example, assuming `store.users` is an array again, you can set the `loggedIn` state for all users except index 0 as follows:

```


setStore("users", { from: 1, to: store.users.length - 1 }, "loggedIn", false)

// equivalent to (but more efficient than):

for (let i = 1; i <= store.users.length - 1; i++) {

  setStore("users", i, "loggedIn", false)

}
```

You can also include a `by` key in a range object to specify a step size, and thereby update a regular subset of elements. For example, you can set the `loggedIn` state for even-indexed users like so:

```


setStore("users", { from: 0, to: store.users.length - 1, by: 2 }, "loggedIn", false)

// equivalent to (but more efficient than):

for (let i = 1; i <= store.users.length - 1; i += 2) {

  setStore("users", i, "loggedIn", false)

}
```

Multi-setter syntax differs from the "equivalent" code in one key way: a single store setter call automatically gets wrapped in a [`batch`](../reference/reactive-utilities/batch.md), so all the elements update at once before any downstream effects are triggered.

### [Dynamic value assignment](stores.md#dynamic-value-assignment)

Path syntax also provides a way to set values within an array using functions instead of static values. These functions receive the old value as an argument, allowing you to compute the new value based on the existing one. This dynamic approach is particularly useful for complex transformations.

```


setStore("users", 3, "loggedIn" , (loggedIn) => !loggedIn)
```

### [Filtering values](stores.md#filtering-values)

To update elements in an array based on specific conditions, you can pass a function as an argument. This function acts as a filter, receiving the old value and index, and gives you the flexibility to apply logic that targets specific cases. This might include using methods like `.startsWith()`, `includes()`, or other comparison techniques to determine which elements should be updated.

```


// update users with username that starts with "t"

setStore("users", (user) => user.username.startsWith("t"), "loggedIn", false)




// update users with location "Canada"

setStore("users", (user) => user.location == "Canada" , "loggedIn", false)




// update users with id 1, 2 or 3

let ids = [1,2,3]

setStore("users", (user) => ids.includes(user.id) , "loggedIn", false)
```

* * *

## [Modifying objects](stores.md#modifying-objects)

When using store setters to modify objects, if a new value is an object, it will be shallow merged with the existing value. What this refers to is that the properties of the existing object will be combined with the properties of the "new" object you are setting, updating any overlapping properties with the values from the new object.

What this means, is that you can directly make the change to the store *without* spreading out properties of the existing user object.

```


setStore("users", 0, {

  id: 109,

})




// is equivalent to




setStore("users", 0, (user) => ({

  ...user,

  id: 109,

}))
```

* * *

## [Store utilities](stores.md#store-utilities)

### [Store updates with `produce`](stores.md#store-updates-with-produce)

Rather than directly modifying a store with setters, Solid has the `produce` utility. This utility provides a way to work with data as if it were a [mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable) JavaScript object. `produce` also provides a way to make changes to multiple properties at the same time which eliminates the need for multiple setter calls.

```


import { produce } from "solid-js/store"




// without produce

setStore("users", 0, "username", "newUsername")

setStore("users", 0, "location", "newLocation")




// with produce

setStore(

  "users",

  0,

  produce((user) => {

    user.username = "newUsername"

    user.location = "newLocation"

  })

)
```

`produce` and `setStore` do have distinct functionalities. While both can be used to modify the state, the key distinction lies in how they handle data. `produce` allows you to work with a temporary draft of the state, apply the changes, then produce a new [immutable](https://developer.mozilla.org/en-US/docs/Glossary/Immutable) version of the store. Comparatively, `setStore` provides a more straightforward way to update the store directly, without creating a new version.

It's important to note, however, `produce` is specifically designed to work with **arrays** and **objects**. Other collection types, such as JavaScript [Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), are not compatible with this utility.

### [Data integration with `reconcile`](stores.md#data-integration-with-reconcile)

When new information needs to be merged into an existing store `reconcile` can be useful. `reconcile` will determine the differences between new and existing data and initiate updates only when there are *changed* values, thereby avoiding unnecessary updates.

```


import { createStore, reconcile } from "solid-js/store"




const [data, setData] = createStore({

  animals: ['cat', 'dog', 'bird', 'gorilla']

})




const newData = getNewData() // eg. contains ['cat', 'dog', 'bird', 'gorilla', 'koala']

setData('animals', reconcile(newData))
```

In this example, the store will look for the differences between the existing and incoming data sets. Consequently, only `'koala'` - the new edition - will cause an update.

### [Extracting raw data with `unwrap`](stores.md#extracting-raw-data-with-unwrap)

When there is a need for dealing with data outside of a tracking scope, the `unwrap` utility offers a way to transform a store to a standard [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object). This conversion serves several important purposes.

Firstly, it provides a snapshot of the current state without the processing overhead associated with reactivity. This can be useful in situations where an unaltered, non-reactive view of the data is needed. Additionally, `unwrap` provides a means to interface with third-party libraries or tools that anticipate regular JavaScript objects. This utility acts as a bridge to facilitate smooth integrations with external components and simplifies the incorporation of stores into various applications and workflows.

```


import { createStore, unwrap } from "solid-js/store"




const [data, setData] = createStore({

  animals: ["cat", "dog", "bird", "gorilla"],

})




const rawData = unwrap(data)
```

To learn more about how to use Stores in practice, visit the [guide on complex state management](../guides/complex-state-management.md).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fstores.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fstores)

Previous[← Context](context.md)

Next[Refs →](refs.md)

On this page

1. [Overview](#_top)
2. [Creating a store](#creating-a-store)
3. [Accessing store values](#accessing-store-values)
4. [Modifying store values](#modifying-store-values)
5. [Path syntax flexibility](#path-syntax-flexibility)
6. [Modifying values in arrays](#modifying-values-in-arrays)
   
   1. [Appending new values](#appending-new-values)
   2. [Modifying multiple elements](#modifying-multiple-elements)
   3. [Dynamic value assignment](#dynamic-value-assignment)
   4. [Filtering values](#filtering-values)
7. [Modifying objects](#modifying-objects)
8. [Store utilities](#store-utilities)
   
   1. [Store updates with produce](#store-updates-with-produce)
   2. [Data integration with reconcile](#data-integration-with-reconcile)
   3. [Extracting raw data with unwrap](#extracting-raw-data-with-unwrap)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/stores.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fconcepts%2Fstores.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fconcepts%2Fstores)