# Personal Site

Keaton Armentrout's personal portfolio and blog, built with [Gatsby v5](https://www.gatsbyjs.org/) and deployed on Netlify.

## Prerequisites

You need **Node.js v22** installed. The easiest way to manage Node versions is with [nvm](https://github.com/nvm-sh/nvm).

```bash
# Install nvm if you don't have it (check with `nvm --version`)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Install and use the correct Node version for this project
nvm install
nvm use
```

The `nvm install` and `nvm use` commands read the `.nvmrc` file in the project root to pick the right version (currently Node 22). Run `nvm use` each time you open a new terminal in this project.

## Getting Started

```bash
# 1. Make sure you're using the right Node version
nvm use

# 2. Install dependencies (only needed on first setup or after pulling new changes)
npm install

# 3. Start the local dev server
npm start
```

The site will be available at **http://localhost:8000**. Changes to source files will hot-reload in the browser automatically.

If things seem broken or stale, clear the cache and restart:

```bash
npm run clean && npm start
```

## All Commands

| Command            | What it does                                              |
| ------------------ | --------------------------------------------------------- |
| `npm start`        | Start the dev server at localhost:8000                    |
| `npm run build`    | Build the production version of the site                  |
| `npm run serve`    | Serve the production build locally (run `build` first)    |
| `npm run clean`    | Clear Gatsby's cache and the `public/` output directory   |
| `npm run format`   | Auto-format source files with Prettier                    |

## Writing a Blog Post

Blog posts are Markdown files in `src/content/blog/`.

### 1. Create a new file

Add a `.md` file in `src/content/blog/`. The filename convention is `wp_YYYYMMDD_short_name.md`.

### 2. Add frontmatter

Every post needs a YAML header at the top:

```yaml
---
title: "Post Title"
date: "2024-01-15"
draft: false
path: "/writing/post-slug"
featuredImage: "../../images/blog/cards/your_image.png"
tags: ["tag1", "tag2"]
---
```

- **title** -- displayed as the post heading
- **date** -- publish date in `YYYY-MM-DD` format
- **draft** -- set to `true` to hide the post from production builds (it will still show in dev)
- **path** -- the URL path for the post (e.g. `/writing/my-new-post`)
- **featuredImage** -- relative path to a card image in `src/images/blog/cards/`
- **tags** -- list of tags; can be empty `[]`

### 3. Write the post

Everything below the closing `---` is the post body, written in standard Markdown. You can use headings, links, images, code blocks, etc.

### 4. Preview locally

Run `npm start` and navigate to the path you set in frontmatter to see the post.

## Project Structure

```
src/
  content/blog/    -- Blog post Markdown files
  components/      -- Reusable React components
  images/          -- Images (queryable via GraphQL at build time)
  pages/           -- Site pages (index, blog listing, about, 404)
  templates/       -- Templates for dynamically generated pages (blog posts, tag pages)
  gatsby-plugin-theme-ui/
    index.js       -- Theme colors and dark/light mode config
```

Key config files in the project root:

- **gatsby-config.js** -- Site metadata and plugin configuration
- **gatsby-node.js** -- Build-time logic that creates blog post pages from Markdown
- **gatsby-browser.js** -- Client-side imports (fonts, syntax highlighting theme)

## Deployment

The site deploys to Netlify automatically when changes are pushed to the `main` branch.

To test a production build locally:

```bash
npm run build && npm run serve
```

## Troubleshooting

**`npm start` fails or shows stale content:**
```bash
npm run clean && npm start
```

**Wrong Node version errors:**
```bash
nvm use
```

**`node_modules` seem corrupted or out of date:**
```bash
rm -rf node_modules package-lock.json && npm install
```
