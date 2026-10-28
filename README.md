# S01E03 · ticket #4471 findings

This repository contains the support KB export and a signed analysis page that splits ticket #4471
into two underlying problems. Counts deduplicate the overlapping export rows by report ID and use
the tenant's configured locale, form version, and report channel—not the intake tag—to classify
cause.

## GitHub issues

- [Shared date parser flips dates for day-first tenant locales — 379 reports](https://github.com/smigacz/s01e03/issues/1)
- [`booking-v3` date hint contradicts day-first tenant locales — 33 reports](https://github.com/smigacz/s01e03/issues/2)

## Knowledge base page

- Source: [`support-kb/src/routes/kb/incidents/4471/findings/+page.svx`](support-kb/src/routes/kb/incidents/4471/findings/+page.svx)
- Rendered preview: [`support-kb/rendered/kb/incidents/4471/findings.html`](support-kb/rendered/kb/incidents/4471/findings.html)
