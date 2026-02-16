# Vercel

[Vercel](https://vercel.com/) is a widely-used platform specialized in hosting frontend projects. For detailed information regarding build and deployment instructions, as well as features they offer, please visit the [Vercel documentation](https://vercel.com/docs).

* * *

## Using Vercel web interface

1. Navigate to [vercel.com/login](https://vercel.com/login) to log in or create a new account. Connect with your preferred Git repository hosting service.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=0mwBl275l6WC3YD5Uz_IcQ&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=0mwBl275l6WC3YD5Uz_IcQ)

2. Once on the dashboard, click the button at the top right corner and choose "Add New Project." On the next page, select "Continue with GitHub" or your preferred Git service.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=QhW5b3iEbwyWzJ5fhUDrZw&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=QhW5b3iEbwyWzJ5fhUDrZw)

3. You will then see with a list of your repositories. Use the search bar if needed to find the specific repository you want to deploy. Click the "Import" button to proceed.
4. After importing your Solid project repository, you will be taken to a configuration screen. If your project requires any environment variables, add them in the designated field. Click "Deploy" to start the deployment process.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=_OhHyCQRVxMqXdCkkTE3nw&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=_OhHyCQRVxMqXdCkkTE3nw)

5. Once the build and deployment are finished, you will be redirected to a screen that displays a screenshot of your live site.

[View on Eraser![](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe/preview?elements=hAbTtvs_2l4xDqySVYsiVA&type=embed)](https://app.eraser.io/workspace/w9y9PNVjwSqDCEPNTEoe?elements=hAbTtvs_2l4xDqySVYsiVA)

* * *

## Using the Vercel CLI

1. Install the Vercel CLI using your preferred package manager.

```
npm i vercel -g
```
```
pnpm i vercel -g
```
```
yarn add vercel -g
```
```
bun i vercel -g
```
```
deno add npm:vercel -g
```
2. Open your terminal, navigate to your project directory, and run the following command to log in:

```
vercel
```
3. Follow the on-screen instructions from the CLI to finalize the deployment. Once completed, your project will be live on Vercel and accessible via the provided URL.
