# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

Dipa's personal museum — a Vue 3 SPA that showcases projects, blog posts, and personal info. Hosted on GitHub Pages.

- **Live URL**: `https://aisams.github.io/HiDipa`
- **Remote**: `https://github.com/aisams/hello.git` (branch: `master`)

## Tech Stack

- Vue 3.2 + Vite 3
- Vue Router 4 (HTML5 history mode)
- Pure CSS (no UI library), black + gold theme
- No build-time Markdown loader — content is inline for now

## Run Locally

```bash
npm install
npm run dev       # dev server at http://localhost:8000/HiDipa/
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Architecture

| Route | File | Purpose |
|---|---|---|
| `/` | `src/pages/Home.vue` | Entrance, nav cards to all sections |
| `/projects` | `src/pages/Projects.vue` | Project gallery |
| `/blog` | `src/pages/Blog.vue` | Blog post list |
| `/about` | `src/pages/About.vue` | Bio + contact |

- `src/components/Header.vue` — sticky nav (Projects / Blog / About)
- `src/components/Footer.vue` — GitHub + email links
- `src/components/ProjectCard.vue` — reusable card for project grid
- `src/styles/global.css` — design tokens + base styles
- `src/router/index.js` — Vue Router with HTML5 history mode, base `/HiDipa/`
- `public/404.html` — GitHub Pages SPA redirect

## Design System

- **Background**: `#0a0a0a` (pure black)
- **Gold accents**: `#d4a843` (dark), `#f0c76a` (light), `#8b7230` (dim)
- **Cards**: `#141414` with `#1a1a1a` border, gold border on hover
- **Fonts**: Inter (body), JetBrains Mono (labels)
- **Responsive**: single breakpoint at 768px
- **Spacing**: 8px base unit

## Deployment

GitHub Pages with HTML5 history mode via `404.html` redirect trick:

1. `404.html` stores the requested path and redirects to `/?p=/path`
2. `main.js` reads the `p` param and calls `router.replace(path)`

Build output goes to `dist/`. To deploy, push `dist/` to the `gh-pages` branch or configure GitHub Pages to serve from `master` branch `/docs` folder.
