# AGENTS.md — matfon73.github.io

Static portfolio site, vanilla HTML/CSS/JS, deployed via GitHub Pages.

## Stack

- HTML5 + CSS3 + vanilla ES6 — no frameworks, no build step, no npm.
- Terminal-inspired dark UI with JetBrains Mono, Font Awesome 6.6.0 (CDN).
- All text in **Spanish** — content lives in `app.js:10` as template strings in the `content` object.
- Theme via CSS custom properties in `css/styles.css:12` (`:root`).

## Key conventions

- Profile info, skills, projects, experience — all edited in `app.js`. The `content` object is the single source of truth for the UI.
- Skills installed: `accessibility`, `frontend-design`, `seo` (see `skills-lock.json`).
- Navigation uses buttons with `data-section` attributes matching keys in `CMD` (e.g. `whoami`, `ls`).
- `loadSection()` replaces `#content-area` innerHTML; no router, no virtual DOM.

## Commands

| Action | Command |
|--------|---------|
| Preview locally | `open index.html` (no server required) |
| Deploy | Push to `main` — GitHub Pages auto-deploys to `https://matfon73.github.io` |

No linter, formatter, type checker, or test infrastructure exists.

## Structure

```
index.html          — entry point, loads css/styles.css and app.js
app.js              — SPA content + navigation logic
css/styles.css      — all styles, terminal theme, CSS variables
img/                — profile.jpg, preview.jpg
.agents/skills/     — installed AI skill definitions
```
