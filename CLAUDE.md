# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm start              # Start Gatsby dev server (localhost:8000)
npm run build          # Build production static site
npm run serve          # Serve production build locally
npm run clean          # Clear Gatsby cache and public directory
npm run format         # Format code with Prettier
```

**GraphQL Explorer**: Available at `http://localhost:8000/___graphql` during development.

## Architecture Overview

This is a **Gatsby v5** static site generator project for a personal portfolio with blog functionality. Built on React 18 with Emotion CSS-in-JS styling.

### Content Flow

1. **Markdown files** in `src/content/` contain blog posts with frontmatter (`title`, `date`, `path`, `draft`, `tags`, `featuredImage`)
2. **gatsby-node.js** processes markdown at build time, creating slugs and generating pages
3. **Templates** in `src/templates/` define how dynamic pages render (blog posts, tag archives)
4. **GraphQL queries** fetch content data throughout the site

### Key Files

- `gatsby-config.js` - Plugin configuration, site metadata
- `gatsby-node.js` - Dynamic page creation from markdown, slug generation
- `gatsby-browser.js` - Client-side imports (Prism theme, fonts)
- `src/gatsby-plugin-theme-ui/index.js` - Theme colors (dark mode default, wine red `#d1567f` accent)

### Styling System

- **Emotion** (`@emotion/styled`, `@emotion/react`) for CSS-in-JS components
- **theme-ui** for theming with dark/light color modes
- **Typography.js** with custom Google Fonts (Raleway, Expletus Sans, Open Sans, Montserrat)
- Component-level CSS files in `src/components/`

### Blog Post Frontmatter

```yaml
---
title: "Post Title"
date: "2024-01-15"
path: "/blog/post-slug"
draft: false
tags: ["tag1", "tag2"]
featuredImage: "../images/image.jpg"
---
```

Posts with `draft: true` are excluded from production builds.

## Code Style

Prettier config (`.prettierrc`): no semicolons, double quotes, 2-space indentation, ES5 trailing commas.
