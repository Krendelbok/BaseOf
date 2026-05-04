# BaseOf Collected

This folder collects the current BaseOf project into one place without touching the original files.

## Structure

- `static-site/`
  - current deploy-ready HTML site
  - includes multi-page content, generator, `404.html`, `assets/`, `robots.txt`, `sitemap.xml`, `vercel.json`

- `next-app/`
  - Next.js source version of the project
  - copied without `.git`, `.next`, and `node_modules`

- `docs/`
  - deployment and project readmes

- `concepts/`
  - standalone design concepts

- `archive-duplicates/`
  - duplicate or older copies kept for safety

## Best starting points

- Static site:
  - `static-site/index.html`
  - `static-site/generator.html`

- Next.js source:
  - `next-app/baseof/`

- Deploy guide:
  - `docs/DEPLOY-BASEOF.md`

## Current deploy root

Use this folder for the first Vercel launch:

```text
/Users/matt/Desktop/Новая папка с объектами/BASEOF-COLLECTED/static-site
```
