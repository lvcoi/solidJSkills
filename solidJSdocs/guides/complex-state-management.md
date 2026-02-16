[**Solid**](../index.md)

- [Core](../index.md)
- [Router](../solid-router)
- [SolidStart](../solid-start)
- [Meta](../solid-meta)

[](https://github.com/solidjs/solid)[](https://discord.com/invite/solidjs)

LearnReference

- [Quick start](../quick-start.md)
- Concepts
  
  - [Intro to reactivity](../concepts/intro-to-reactivity.md)
  - [Understanding JSX](../concepts/understanding-jsx.md)
  - Components
    
    - [Basics](../concepts/components/basics.md)
    - [Class and style](../concepts/components/class-style.md)
    - [Event handlers](../concepts/components/event-handlers.md)
    - [Props](../concepts/components/props.md)
  - [Signals](../concepts/signals.md)
  - Control flow
    
    - [Conditional rendering](../concepts/control-flow/conditional-rendering.md)
    - [Dynamic](../concepts/control-flow/dynamic.md)
    - [List rendering](../concepts/control-flow/list-rendering.md)
    - [Portal](../concepts/control-flow/portal.md)
    - [Error boundary](../concepts/control-flow/error-boundary.md)
  - [Effects](../concepts/effects.md)
  - Derived values
    
    - [Derived signals](../concepts/derived-values/derived-signals.md)
    - [Memos](../concepts/derived-values/memos.md)
  - [Context](../concepts/context.md)
  - [Stores](../concepts/stores.md)
  - [Refs](../concepts/refs.md)
- Advanced concepts
  
  - [Fine-grained reactivity](../advanced-concepts/fine-grained-reactivity.md)
- Guides
  
  - [Styling your components](styling-your-components.md)
  - [State management](state-management.md)
  - [Routing & navigation](routing-and-navigation.md)
  - [Complex state management](complex-state-management.md)
  - [Fetching data](fetching-data.md)
  - [Testing](testing.md)
  - [Deploy your app](deploying-your-app.md)
- Configuration
  
  - [Environment variables](../configuration/environment-variables.md)
  - [TypeScript](../configuration/typescript.md)

Guides

# Complex state management

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/complex-state-management.mdx)

As applications grow and start to involve many components, more intricate user interactions, and possibly communication with backend services, you may find that staying organized with more [basic state management methods](state-management.md) can become difficult to maintain.

Consider this example:

```


import { For, createSignal, Show, createMemo } from "solid-js"




const App = () => {

  const [tasks, setTasks] = createSignal([])

  const [numberOfTasks, setNumberOfTasks] = createSignal(tasks.length)

  const completedTasks = createMemo(() => tasks().filter((task) => task.completed))

  let input




  const addTask = (text) => {

    setTasks([...tasks(), { id: tasks().length, text, completed: false }])

    setNumberOfTasks(numberOfTasks() + 1)

  }

  const toggleTask = (id) => {

    setTasks(

      tasks().map((task) =>

        task.id !== id ? task : { ...task, completed: !task.completed }

      )

    )

  }




  return (

    <>

      <h1>My list</h1>

      <span>You have {numberOfTasks()} task(s) today!</span>

      <div>

        <input ref={input} />

        <button

          onClick={(e) => {

            if (!input.value.trim()) return

            addTask(input.value)

            input.value = ""

          }}

        >

          Add Task

        </button>

      </div>

      <For each={tasks()}>

        {(task) => {

          const { id, text } = task

          console.log(`Creating ${text}`)

          return (

            <div>

              <input

                type="checkbox"

                checked={task.completed}

                onChange={[toggleTask, id]}

              />

              <span

                style={{

                  "text-decoration": task.completed ? "line-through" : "none",

                }}

              >

                {text}

              </span>

            </div>

          )

        }}

      </For>

    </>

  )

}




export default App
```

There are several challenges to managing state in this way:

- Increased verbosity with the multiple `createSignal` calls for `tasks`, `numberOfTasks`, as well as a `createMemo` function for `completedTasks`. Additionally, with each state update, there requires manual updates to other related states which risks the application becoming out of sync.
- While Solid is optimized, this components design leads to frequent recalculations, such as updating `completedTasks` with every toggle action, which can negatively impact performance. In addition, the dependence on the component's logic on the current state for `numberOfTasks` and `completedTasks` can complicate code understanding.

As an application like this scales, managing state in this manner becomes even more complex. Introducing other dependent state variables would require updates across the *entire* component which would likely introduce more errors. This would likely make it more difficult to separate specific functionalities into distinct, reusable components without transferring a substantial portion of state management logic, as well.

* * *

## [Introducing stores](complex-state-management.md#introducing-stores)

Through recreating this list using Stores, you will see how stores can improve the readability and management of your code.

If you're new to the concept of stores, see the [stores section](../concepts/stores.md).

* * *

## [Creating a store](complex-state-management.md#creating-a-store)

To reduce the amount of signals that were used in the original example, you can do the following using a store:

```


import { createStore } from "solid-js/store"




const App = () => {

  const [state, setState] = createStore({

    tasks: [],

    numberOfTasks: 0,

  })

}




export default App
```

Through using a store, you no longer need to keep track of separate signals for `tasks`, `numberOfTasks`, and `completedTasks`.

* * *

## [Accessing state values](complex-state-management.md#accessing-state-values)

Once you have created your store, the values can be accessed directly through the first value returned by the `createStore` function:

```


import { createStore } from "solid-js/store"




const App = () => {

  const [state, setState] = createStore({

    tasks: [],

    numberOfTasks: 0,

  })

  return (

    <>

      <h1>My Task List for Today</h1>

      <span>You have {state.numberOfTasks} task(s) for today!</span>

    </>

  )

}




export default App
```

Through `state.numberOfTasks`, the display will now show the store's value held in the `numberOfTasks` property.

* * *

## [Making changes to the store](complex-state-management.md#making-changes-to-the-store)

When you want to modify your store, you use the second element returned by the `createStore` function. This element allows you to make modifications to the store, letting you both add new properties and update existing ones. However, because properties within a store are created lazily, setting a property in the component function body without creating a tracking scope will **not** update the value. To create the signal so it reactively updates, you have to access the property within a tracking scope, such as using a [`createEffect`](../reference/basic-reactivity/create-effect.md):

```


// not reactive

setState("numberOfTasks", state.tasks.length)




// reactive

createEffect(() => {

  setState("numberOfTasks", state.tasks.length)

})
```

### [Adding to an array](complex-state-management.md#adding-to-an-array)

To add an element to an array, in this case the new task, you can append to the next index of the array through `state.tasks.length`. By pinpointing the `tasks` key in combination with the upcoming position, the new task is added to the end of the array.

```


const addTask = (text) => {

  setState("tasks", state.tasks.length, {

    id: state.tasks.length,

    text,

    completed: false,

  })

}
```

The setter in stores follow [path syntax](../concepts/stores.md#path-syntax-flexibility): `setStore("key", value)`. In the `addTask` function the `tasks` array is appended through `setState("tasks", state.tasks.length, { id: state.tasks.length, text, completed: false })`, an example of this in action.

#### [Mutating state with `produce`](complex-state-management.md#mutating-state-with-produce)

In situations where you need to make multiple `setState` calls and target multiple properties, you can simplify your code and improve readability by using Solid's [`produce`](../concepts/stores.md#store-updates-with-produce) utility function.

Something such as toggle function:

```


const toggleTask = (id) => {

  const currentCompletedStatus = state.tasks[id].completed

  setState(

    "tasks",

    (task) => task.id === id,

    "completed",

    !currentCompletedStatus

  )

}
```

Can be simplified using `produce`:

```


import { produce } from "solid-js/store"




const toggleTask = (id) => {

  setState(

    "tasks",

    (task) => task.id === id,

    produce((task) => {

      task.completed = !task.completed

    })

  )

}




// You can also rewrite the `addTask` function through produce

const addTask = (text) => {

  setState(

    "tasks",

    produce((task) => {

      task.push({ id: state.tasks.length, text, completed: false })

    })

  )

}
```

Read about some of the other [advantages to using `produce`](../concepts/stores.md#store-updates-with-produce).

note

Another benefit to working with `produce` is that it offers a way to modify a store without having to make multiple `setStore` calls.

```


// without produce

batch(() => {

setState(0, "text", "I'm updated text")

setState(0, "completed", true)

})




// with produce

setState(

0,

produce((task) => {

  task.text = "I'm updated text";

  task.completed = true;

})

)
```

The updated example:

```


import { For, createEffect, Show } from "solid-js"

import { createStore, produce } from "solid-js/store"




const App = () => {

  let input // lets you target the input value

  const [state, setState] = createStore({

    tasks: [],

    numberOfTasks: 0,

  })




  const addTask = (text) => {

    setState("tasks", state.tasks.length, {

      id: state.tasks.length,

      text,

      completed: false,

    })

  }




  const toggleTask = (id) => {

    setState(

      "tasks",

      (task) => task.id === id,

      produce((task) => {

        task.completed = !task.completed

      })

    )

  }




  createEffect(() => {

    setState("numberOfTasks", state.tasks.length)

  })




  return (

    <>

      <div>

        <h1>My Task List for Today</h1>

        <span>You have {state.numberOfTasks} task(s) for today!</span>

      </div>

      <input ref={input} />

      <button

        onClick={(e) => {

          if (!input.value.trim()) return

          addTask(input.value)

          input.value = ""

        }}

      >

        Add Task

      </button>

      <For each={state.tasks}>

        {(task) => {

          const { id, text } = task

          return (

            <div>

              <input

                type="checkbox"

                checked={task.completed}

                onChange={() => toggleTask(task.id)}

              />

              <span>{text}</span>

            </div>

          )

        }}

      </For>

    </>

  )

}




export default App
```

* * *

## [State sharing](complex-state-management.md#state-sharing)

As applications grow and become more complex, sharing state between components can become a challenge. Passing state and functions from parent to child components, especially across multiple levels, is commonly referred to as "prop drilling". Prop drilling can lead to verbose, hard-to-maintain code, and can make the data flow in an application more difficult to follow. To solve this problem and allow for a more scalable and maintainable codebase, Solid provides [context](../concepts/context.md).

To use this, you need to create a context. This context will have a default value and can be consumed by any *descendant* component.

```


import { createContext } from "solid-js"




const TaskContext = createContext()
```

Your components will be wrapped with the `Provider` from the context, and passed with the values that you wish to share.

```


import { createStore } from "solid-js/store"




const TaskApp = () => {

  const [state, setState] = createStore({

    tasks: [],

    numberOfTasks: 0,

  })




  return (

    <TaskContext.Provider value={{ state, setState }}>

      {/* Your components */}

    </TaskContext.Provider>

  )

}
```

In any descendent component, you can consume the context values using `useContext`:

```


import { useContext } from "solid-js"




const TaskList = () => {

  const { state, setState } = useContext(TaskContext)




  // Now you can use the shared state and functions

}
```

For a deeper dive, please refer to our dedicated [page on context](../concepts/context.md).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fcomplex-state-management.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fcomplex-state-management)

Previous[← Routing & navigation](routing-and-navigation.md)

Next[Fetching data →](fetching-data.md)

On this page

1. [Overview](#_top)
2. [Introducing stores](#introducing-stores)
3. [Creating a store](#creating-a-store)
4. [Accessing state values](#accessing-state-values)
5. [Making changes to the store](#making-changes-to-the-store)
   
   1. [Adding to an array](#adding-to-an-array)
6. [State sharing](#state-sharing)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/complex-state-management.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fguides%2Fcomplex-state-management.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fguides%2Fcomplex-state-management)