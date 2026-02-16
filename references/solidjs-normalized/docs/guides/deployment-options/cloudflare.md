# Cloudflare

[Cloudflare Pages](https://pages.cloudflare.com/) is a JAMstack platform for frontend developers, where JAMstack stands for JavaScript, APIs, and Markup. For additional details and features, you can [visit the Cloudflare website](https://pages.cloudflare.com/).

* * *

## Using the Cloudflare's web interface

1. Navigate to the [Cloudflare login page](https://dash.cloudflare.com/login) and log in or sign up.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=UE1AFe5oESDQkepKNaMxtA&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=UE1AFe5oESDQkepKNaMxtA)

2. After logging in, find "Pages" in the left-hand navigation bar. Add a new project by clicking "Create a project," then choose "Connect to Git."

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=XcbVyX2a69kSAP1m1220Ug&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=XcbVyX2a69kSAP1m1220Ug)

3. You'll have the option to install Cloudflare Pages on all your repositories or select ones. Choose the repository that contains your Solid project.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=SsbGUghc_Vwlvxefe1xAFg&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=SsbGUghc_Vwlvxefe1xAFg)

4. Configure your build settings:

<!--THE END-->

- The project name will default to the repository name, but you can change it if you wish.
- In the "build command" field, enter `npm run build` .
- For the "build output directory" field, use `dist` .
- Add an environment variable `NODE_VERSION` and set its value to the version of Node.js you're using.

**Note:** This step is crucial because Cloudflare Pages uses a version of Node.js older than v13, which may not fully support Vite, the bundler used in Solid projects.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=1HpIQUkxqNl9j3JlXIUvTg&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=1HpIQUkxqNl9j3JlXIUvTg)

5. Once you've configured the settings, click "Save and Deploy." In a few minutes, your Solid project will be live on Cloudflare Pages, accessible via a URL formatted as `project_name.pages.dev`.

* * *

## Using the Wrangler CLI

Wrangler is a command-line tool for building Cloudflare Workers. Here are the steps to deploy your Solid project using Wrangler.

1. Use your package manager of choice to install the Wrangler command-line tool:

```
npm i wrangler -g
```
```
pnpm i wrangler -g
```
```
yarn add wrangler -g
```
```
bun i wrangler -g
```
```
deno add npm:wrangler -g
```
2. Open your terminal and run the following command to log in:

```
wrangler login
```
3. Build your project using the following command:

```
npm run build
```
```
pnpm build
```
```
yarn build
```
```
bun run build
```
```
deno run build
```
4. Deploy using Wrangler:

```
wrangler pages deploy dist
```
After running these commands, your project should be live. While the terminal may provide a link, it's more reliable to check your Cloudflare Pages dashboard for the deployed URL, which usually follows the format `project-name.pages.dev`.
