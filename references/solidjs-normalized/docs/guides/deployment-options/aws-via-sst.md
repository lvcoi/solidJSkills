# AWS via SST

[SST](https://sst.dev/) is a framework for deploying applications to any cloud provider. It has a built-in way to deploy SolidStart apps to AWS Lambda. For additional details, you can [visit their docs](https://sst.dev/docs/).

* * *

## Quick start

1. [Create a SolidStart app](../../solid-start/getting-started.md).
2. In your project, init SST.

```
npx sst@latest init
```
```
pnpx sst@latest init
```
```
yarn dlx sst@latest init
```
```
bunx sst@latest init
```
```
dpx sst@latest init
```
3. This will detect your SolidStart app and ask you to update your `app.config.ts`.

```
server: {

   preset: "aws-lambda-streaming"

}
```
4. When you are ready, you can deploy your app using:

```
npx sst@latest deploy --stage production
```
```
pnpx sst@latest deploy --stage production
```
```
yarn dlx sst@latest deploy --stage production
```
```
bunx sst@latest deploy --stage production
```
```
dpx sst@latest deploy --stage production
```
You can [read the full tutorial on the SST docs](https://sst.dev/docs/start/aws/solid).

* * *

## Deploy to a Container

You can also deploy your SolidStart app to a [container](https://sst.dev/docs/start/aws/solid#containers) using SST.
