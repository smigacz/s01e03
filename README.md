# S01E03 · ticket #4471

This repository is the support KB application. See [the export's conventions](KB-EXPORT.md).

## GitHub issues

- [Shared date parser — 379 reports, fixed](https://github.com/smigacz/s01e03/issues/1)
- [`booking-v3` date hint — 33 reports, won't fix because the form was retired](https://github.com/smigacz/s01e03/issues/2)

## Knowledge base page

- Submission source: [`page.svx`](page.svx)
- Self-contained rendered page: [`page.html`](page.html)
- Source: [`src/routes/kb/incidents/4471/findings/+page.svx`](src/routes/kb/incidents/4471/findings/+page.svx)
- Rendered page: [`rendered/kb/incidents/4471/findings/index.html`](rendered/kb/incidents/4471/findings/index.html)
- Full-page screenshot: [`rendered/kb/incidents/4471/findings/page.png`](rendered/kb/incidents/4471/findings/page.png)

## Reproduce the rendered page

The HTML is generated from the signed `.svx` page, not maintained separately. Svelte computes
the report counts and the desk reference during rendering. The original exported incident page
is preserved; the findings are a separate page and appear in the generated KB index.

From the repository root, run:

```sh
corepack pnpm install --ignore-scripts
corepack pnpm run build
corepack pnpm run preview --host 127.0.0.1
```

Open `/kb/incidents/4471/findings/` on the preview server. The static site is in `rendered/`.
