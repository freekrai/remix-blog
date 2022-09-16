# Remix Blog Stack

Learn more about [Remix Stacks](https://remix.run/stacks).

```sh
npx create-remix --template freekrai/remix-blog
```

## Remix Blog 📖

This blog starter template was inspired by Kent C. Dodds implementation of [kentcdodds.com](https://github.com/kentcdodds/kentcdodds.com). You can read more about the architecture and the idea behind it at [How I built a modern website in 2021](https://kentcdodds.com/blog/how-i-built-a-modern-website-in-2021).

Inspiration was also drawn from [Sergio Xalambrí](https://github.com/sergiodxa/personal-site) and [Ben McHone](https://github.com/BenMcH/blog.mchone.dev), as well as [Lee Rob](https://github.com/leerob/leerob.io)

- `content`: where mdx is stored
- `content/posts`: blog posts, stored as: `SLUG/index.mdx`
- `content/pages`: pages, stored as `SLUG/index.mdx`

The structure is based on Gatsby and gives us more flexibility, each page and post is a folder and contains an `index.mdx` file, this folder name becomes the slug.

This also gives you a lot of flexibility, for example, you can have multiple files inside one folder

- `content/posts/hello-world/index.mdx` returns as `/hello-world`
- `content/posts/hello-world/abc.mdx` returns as `/hello-world/abc`
- `content/posts/hello-world/more-hello/index.mdx` returns as  `hello-world/more-hello`
- `content/posts/hello/still-hello/index.mdx` returns as `hello/still-hello`
- `content/posts/2022/test/index.mdx` returns as `/2022/test`

This lets you structure content however you want.

On build, we generate a cached json file in content (`blog-cache.json`) for all blog posts, which we then reference later for the blog index, rss, sitemap, etc.

We also generate a separate cache json file in content (`page-cache.json`) for all pages, this can then be used for sitemap, etc as well.

Mdx files contain frontmatter which we use on the site, this frontmatter looks like:

```jsx
---
meta:
  title: Another Post
  description: A description
date: '2021-10-02T00:00:00'
excerpt: Hello Gaseous cloud...
headers:
  Cache-Control: no-cache
---
```

## Config

By default, remix-blog will try to use the file system to read files, this works great but if you are on a hosting service like cloudflare where you can't access the file system then we need to use Github, you can configure how it accesses files in your .env file:

- `SESSION_SECRET`: Session Secret used for sessions such as dark mode
- `USE_FILESYSTEM_OR_GITHUB`: this is either `fs` or `gh`
- `GITHUB_TOKEN`:  your Personal access token
- `GITHUB_OWNER`: your Github name
- `GITHUB_REPO`: your Github repo

The Github variables are only needed if `USE_FILESYSTEM_OR_GITHUB` is set to `gh`, it's `fs` by default.

## Available scripts

- `build` - compile and build the Remix app, Tailwind and cache blog posts into a json file in `production` mode
- `dev` - starts Remix watcher, blog cache watcher and Tawilwind CLI in watch mode

## Development

To run your Remix app locally, first, copy `.env.example` to `.env` and configure as needed following the `Config` step above.

Next, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

---

## Deployment

Initially, this stack is set up for deploying to Vercel, but it can be deployed to other hosts quickly and we'll update the wiki with instructions for each.

### Vercel

Open `server.js` and save it as:

```jsx
import { createRequestHandler } from "@remix-run/vercel";
import * as build from "@remix-run/dev/server-build";
export default createRequestHandler({ build, mode: process.env.NODE_ENV });
```

Then update your `remix.config.js` file as follows:

```jsx
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],
};
```

This will instruct your Remix app to use the Vercel runtime, after doing this, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

### Cloudflare Pages

Coming Soon

### Netlify

Coming Soon