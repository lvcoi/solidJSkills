[Solid **Router**](..)

- [Core](../../index.md)
- [Router](..)
- [SolidStart](../../solid-start)
- [Meta](../../solid-meta)

[](https://github.com/solidjs/solid-router)[](https://discord.com/invite/solidjs)

LearnReference

- [Overview](..)
- Getting started
  
  - [Installation and setup](../getting-started/installation-and-setup.md)
  - [Component routing](../getting-started/component.md)
  - [Config-based routing](../getting-started/config.md)
- Concepts
  
  - [Navigation](../concepts/navigation.md)
  - [Path parameters](../concepts/path-parameters.md)
  - [Search parameters](../concepts/search-parameters.md)
  - [Catch-all routes](../concepts/catch-all.md)
  - [Nesting routes](../concepts/nesting.md)
  - [Layouts](../concepts/layouts.md)
  - [Alternative routers](../concepts/alternative-routers.md)
  - [Actions](../concepts/actions.md)
- Rendering modes
  
  - [Single page applications](../rendering-modes/spa.md)
  - [Server side rendering](../rendering-modes/ssr.md)
- Data fetching
  
  - [Queries](queries.md)
  - [Streaming](streaming.md)
  - [Revalidation](revalidation.md)
  - How to
    
    - [Preload data](how-to/preload-data.md)
    - [Handle pending and error states](how-to/handle-error-and-loading-states.md)
- Advanced concepts
  
  - [Preloading](../advanced-concepts/preloading.md)
  - [Lazy loading](../advanced-concepts/lazy-loading.md)
- Guides
  
  - [Migration from v0.9.x](../guides/migration.md)

Data fetching

# Revalidation

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/data-fetching/revalidation.mdx)

Since server data can change, Solid Router provides mechanisms to revalidate queries and keep the UI up to date.

The most common case is **automatic revalidation**. After an [action](../concepts/actions.md) completes successfully, Solid Router automatically revalidates all active queries on the page. For more details, see the [actions documentation](../concepts/actions.md#automatic-data-revalidation).

For more fine-grained control, you can trigger revalidation manually with the [`revalidate` function](../reference/data-apis/revalidate.md). It accepts a query key (or an array of keys) to target specific queries. Each query exposes two properties for this: `key` and `keyFor`.

- `query.key` is the base key for a query and targets all of its instances. Using this key will revalidate all data fetched by that query, regardless of the arguments provided.
- `query.keyFor(arguments)` generates a key for a specific set of arguments, allowing you to target and revalidate only that particular query.

```


import { For } from "solid-js";

import { query, createAsync, revalidate } from "@solidjs/router";




const getProjectsQuery = query(async () => {

  // ... Fetches a list of projects.

}, "projects");




const getProjectTasksQuery = query(async (projectId: string) => {

  // ... Fetches a list of tasks for a project.

}, "projectTasks");




function Projects() {

  const projects = createAsync(() => getProjectsQuery());




  function refetchAllTasks() {

    revalidate(getProjectTasksQuery.key);

  }




  return (

    <div>

      <button onClick={refetchAllTasks}>Refetch all tasks</button>

      <For each={projects()}>{(project) => <Project id={project.id} />}</For>

    </div>

  );

}




function Project(props: { id: string }) {

  const tasks = createAsync(() => getProjectTasksQuery(props.id));




  function refetchTasks() {

    revalidate(getProjectTasksQuery.keyFor(props.id));

  }




  return (

    <div>

      <button onClick={refetchTasks}>Refetch tasks for this project</button>

      <For each={project.tasks}>{(task) => <div>{task.title}</div>}</For>

    </div>

  );

}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fdata-fetching%2Frevalidation.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fdata-fetching%2Frevalidation)

Previous[← Streaming](streaming.md)

Next[Preload data →](how-to/preload-data.md)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/data-fetching/revalidation.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve%20documentation%2Cpending%20review&projects=&template=CONTENT.yml&title=%5BContent%5D%3A&subject=%2Fsolid-router%2Fdata-fetching%2Frevalidation.mdx&page=https%3A%2F%2Fdocs.solidjs.com%2Fsolid-router%2Fdata-fetching%2Frevalidation)