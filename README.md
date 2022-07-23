# Remix Blog Stack

Learn more about [Remix Stacks](https://remix.run/stacks).

```sh
npx create-remix --template freekrai/remix-blog
```

## Remix Blog 📖

This blog starter template was inspired by Kent C. Dodds implementation of [kentcdodds.com][kcd]. You can read more about the architecture and the idea behind it at [How I built a modern website in 2021][kcd-arch].

- `content`: where mdx is stored
- `content/posts`: blog posts, stored as: `SLUG/index.mdx`
- `content/pages`: pages, stored as `SLUG/index.mdx`

The structure is based on Gatsby and gives us more flexibility, each page and post is a folder and contains an index.mdx file, this folder name becomes the slug.

On build, we generate a cached json file in content for all blog posts, which we then reference later for the blog index, rss, sitemap, etc.

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

## Available scripts

- `build` - compile and build the Remix app, Tailwind and cache blog posts into a json file in `production` mode
- `dev` - starts Remix watcher, blog cache watcher and Tawilwind CLI in watch mode

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
