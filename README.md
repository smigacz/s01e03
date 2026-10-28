# S01E03 · ticket #4471

The support KB export and signed findings page are in [`support-kb/`](support-kb/).

## GitHub issues

- [Shared date parser — 379 reports, fixed](https://github.com/smigacz/s01e03/issues/1)
- [`booking-v3` date hint — 33 reports, won't fix because the form was retired](https://github.com/smigacz/s01e03/issues/2)

## Knowledge base page

- Source: [`support-kb/src/routes/kb/incidents/4471/findings/+page.svx`](support-kb/src/routes/kb/incidents/4471/findings/+page.svx)
- Rendered page: [`support-kb/rendered/kb/incidents/4471/findings/index.html`](support-kb/rendered/kb/incidents/4471/findings/index.html)
- Full-page screenshot: [`support-kb/rendered/kb/incidents/4471/findings/page.png`](support-kb/rendered/kb/incidents/4471/findings/page.png)

## Reproduce the rendered page

The HTML is generated from the signed `.svx` page, not maintained separately. Svelte computes
the report counts and the desk reference during rendering. The original exported incident page
is preserved; the findings are a separate page and appear in the generated KB index.

From `support-kb/`, run:

```sh
corepack pnpm install --ignore-scripts
corepack pnpm run build
corepack pnpm run preview --host 127.0.0.1
```

Open `/kb/incidents/4471/findings/` on the preview server. The static site is in `support-kb/rendered/`.
