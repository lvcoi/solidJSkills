# Getting started

The easiest way to get started with Solid is to use the SolidStart starter. This starter contains a collection of templates that can be used to quickly bootstrap a new Solid application.

**1. Install SolidStart**

To start a new project you can initialize SolidStart with the following command:

```
npm init solid@latest
```
```
pnpm create solid@latest
```
```
yarn create solid@latest
```
```
bun create solid@latest
```
```
deno init --npm solid@latest
```
This will create a new directory for your project based on the name you enter.

**2. Choose a template**

When you run the command above, SolidStart will prompt you to choose a template for your new application. You can see a [list of these options in the templates repository](https://github.com/solidjs/templates/tree/main/solid-start).

```
◆  Which template would you like to use?

│  ● basic

│  ○ bare

│  ○ with-solidbase

│  ○ with-auth

│  ○ with-authjs

│  ○ with-drizzle

│  ○ with-mdx

│  ○ with-prisma

│  ○ with-solid-styled

│  ○ with-tailwindcss

│  ...

└
```
Following the prompts, you might be asked questions like whether you want to use Server Side Rendering or TypeScript. Choose your desired options to continue.

**3. Install dependencies**

Once you have chosen your template and configuration options, you can navigate to the directory you created and run the following command to install dependencies:

```
npm i
```
```
pnpm i
```
```
yarn i
```
```
bun i
```
```
deno i
```
After this command has finished, your new SolidStart application is ready to go!

**4. Run your application**

To run your application locally, you can use the following command:

```
npm run dev
```
```
pnpm dev
```
```
yarn dev
```
```
bun run dev
```
```
deno run dev
```
Your application should now be running locally on port 3000. You can view it by navigating to [http://localhost:3000](http://localhost:3000).

SolidStart uses [Vinxi](https://vinxi.vercel.app/) both for starting a development server with [Vite](https://vitejs.dev/) and for building and starting a production server with [Nitro](https://nitro.build/).

When you run your application, you are actually running `vinxi dev` under the hood.

You can read more about the [Vinxi CLI and how it is configured in the Vinxi documentation](https://vinxi.vercel.app/api/cli.html).

* * *

## Project files

SolidStart will create a new directory for your project, and populate it with the necessary files and directories to get you started. These files and directories are the basic structure of a SolidStart application, and you can modify them to suit your needs. The default structure of a SolidStart application looks like this:

```
public/

src/

├── routes/

│   ├── index.tsx

├── entry-client.tsx

├── entry-server.tsx

├── app.tsx
```
**Note:** Depending on the configuration options you chose when creating your project, your file structure may look slightly different. For example, if you chose to use JavaScript rather than TypeScript, your file extensions will be `.jsx` instead of `.tsx`.

Each directory and file in this structure serves a specific purpose in your SolidStart application:

- `public/` - contains the publicly-accessible assets for your application. This is where images, fonts, and other files that you want to be accessible to the public should be placed.
- `src/` - where your Start application code will live. It is aliased to `~/` for importing in your code.
- `src/routes/` - any files or pages will be located in this directory. You can learn more about the [`routes` folder in the routing section](building-your-application/routing.md).
- [`src/entry-client.tsx`](reference/entrypoints/entry-client.md) - this file is what loads and *hydrates* the JavaScript for our application on the client side (in browser). In most cases, you will **not** need to modify this file.
- [`src/entry-server.tsx`](reference/entrypoints/entry-server.md) - this file will handle requests on the server. Like `entry-client.tsx`, in most cases you will **not** need to modify this file.
- [`app.tsx`](reference/entrypoints/app.md) - this is the HTML root of your application both for client and server rendering. You can think of this as the shell inside which your application will be rendered.
