# Sub Hub

Public React site for the Sub Hub / Sub Vault project.

This site is meant to be the promotion hub and front door for everything in the Sub world: projects, pages, games, communities, drops, and anything added later.

## Stack

- React
- Vite
- CSS

## Local setup

1. Install dependencies:

```powershell
npm.cmd install
```

2. Start the dev server:

```powershell
npm.cmd run dev
```

3. Build for production:

```powershell
npm.cmd run build
```

Note:
If PowerShell blocks `npm`, use `npm.cmd` instead.

## Main files

- `src/App.jsx`
  Main page structure and section layout.

- `src/data.js`
  Editable content for cards, stats, spotlight blocks, and other repeatable sections.

- `src/styles.css`
  Site styling, layout, colors, and responsive behavior.

- `index.html`
  Root HTML shell used by Vite.

## What should be edited

Most owner-editable content is intentionally set to `Change me`.

Your co-dev should mainly update:

- headings and section copy in `src/App.jsx`
- cards, stats, filters, and repeated content in `src/data.js`
- links in `src/data.js`
- visual styling in `src/styles.css`

## Collaboration notes

- Keep this as the main promotion hub for everything.
- Reuse the current section structure unless there is a clear reason to change it.
- Prefer editing `src/data.js` for content before hardcoding text into components.
- Test changes with `npm.cmd run build` before pushing.

## Public repo safety

Because this repository is public:

- do not commit passwords, tokens, API keys, private invite links, or private URLs
- use placeholder values for anything not ready to be public
- check screenshots, copy, and links before pushing

## Current direction

The current design direction is:

- premium landing page
- central hub for all Sub-related destinations
- promotion-first messaging
- easy to expand later
