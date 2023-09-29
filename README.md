[![Netlify Status](https://api.netlify.com/api/v1/badges/351e382a-960c-469e-b3e6-afeec1e4718b/deploy-status)](https://app.netlify.com/sites/lawellpietonne/deploys)

# La Well Piétonne

Website for La Well Piétonne. A public consultation and petition to pedestrianize Wellington street permanently.

## Dependencies

Based on the [Astro](https://astro.build/) Quickstart template for [Netlify](https://netlify.com).

- Install [Astro language support extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) for VS Code

Included in the repository: 
- [astro-i18n](https://github.com/alexandre-fernandez/astro-i18n) is used for internationalization.
- [mailerlite-api-v2-node](https://www.npmjs.com/package/mailerlite-api-v2-node) is used for connecting to the MailerLite mailing list.
- [remark-toc](https://github.com/remarkjs/remark-toc) for generating the Markdown table of contents on the Q&A page. 

## Setup

### 1. Cloning + Install Packages

- Fork or clone this repo via the command line `git clone https://github.com/northamerican/la-well-pietonne`

- Then install the necessary packages and run the project locally to make sure everything works.

  ```bash
  npm install
  npm run dev
  ```

Linking your repo to Netlify using their site:

- Create an account with [Netlify](https://www.netlify.com/)
- From your Team Overview, click **Add a new site**
- Click **Deploy with GitHub**
- Select your forked GitHub repo from the list

> Alternatively, you can run this locally with the [Netlify CLI](https://docs.netlify.com/cli/get-started/) by running the `netlify dev` command for more options like receiving a live preview to share (`netlify dev --live`) and the ability to test [Netlify Functions](https://www.netlify.com/products/functions) and [redirects](https://docs.netlify.com/routing/redirects/).

### 2. Deploying

- Install the Netlify CLI globally `npm install netlify-cli -g`
- Run `npm run build`
- Then use the `netlify deploy` for a deploy preview link or `netlify deploy --prod` to deploy to production

### 3. Further set up of Netlify and MailerLite

The `netlify/functions/simple-subscribe/simple-subscribe.ts` [serverless function](https://www.netlify.com/blog/intro-to-serverless-functions/) handles the subscriber form request.

We use [MailerLite](https://www.mailerlite.com/) for our mailing list. To set it up:

- Create an account with [MailerLite](https://www.mailerlite.com/)
- From the account dashboard, navigate to [Subscribers](https://dashboard.mailerlite.com/subscribers?status=active)
- Click on [Groups](https://dashboard.mailerlite.com/groups), then **Create group**, and give your group a name (like "General")
- From the account dashboard, navigate to [Integrations](https://dashboard.mailerlite.com/integrations)
- Click on [API](https://dashboard.mailerlite.com/integrations/api), then **Generate new token** and give your token a name
- Copy the supplied token key and save it somewhere safe
- At the bottom of the API page, in the Groups section, you will see your "General" group and its Group ID
- Copy that Group ID and save it too

Now, on Netlify:

- From your account, select **Sites**, then click your site
- Click on **Site configuration**
- In the site configuration, click Environment variables
- **Add a variable** with the key `MAILER_LITE_API_KEY` and set its value to MailerLite's API key you have saved
- **Add a variable** with the key `MAILER_LITE_GROUP_ID` and set its value to MailerLite's General Group ID you have saved

Additional ENV vars may have to be set:
- **Add a variable** with the key `AWS_LAMBDA_JS_RUNTIME` and set its value to `nodejs18.x`
- **Add a variable** with the key `NODE_VERSION` and set its value to `19.3.0`

---

## Project Structure

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                       |
| :--------------------- | :------------------------------------------- |
| `npm install`          | Installs dependencies                        |
| `npm run dev`          | Starts local dev server at `localhost:3000`  |
| `npm run build`        | Build your production site to `./dist/`      |
| `npm run preview`      | Preview your build locally, before deploying |
| `npm run i18n:install` | Install astro-i18n for translations          |
| `npm run i18n:sync`    | Updates translation values                   |

