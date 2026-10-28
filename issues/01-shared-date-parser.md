# Shared date parser flips dates for day-first tenant locales

**Report count from ticket #4471: 379**

## Problem

The shared date parser interprets every date as month-first. For tenants whose configured locale
writes the day before the month, dates are consequently flipped and calendar invites or reminders
land on the wrong day.

## Evidence

After deduplicating the export by report ID and classifying each report with the tenant locale,
form version, and channel, 379 reports map to this parser cause. They span all eleven tenants and
arrive through app, email, and form channels. Intake tags are not reliable cause labels: 23 reports
in this group were tagged `hint` at intake.

## Expected

Parse dates according to the tenant's configured date order, so a day-first date remains day-first
through to the calendar invite and reminder.

## Actual

The parser reads month first for every tenant; day-first values can be flipped.

## Resolution

The desk's 5 October update says engineering fixed the parser with `fix(dates): parse dd/mm for eu locales`.
This issue is closed as completed.

Source: support KB export, `support-kb/src/lib/data/reports-4471.json`; the matching KB analysis is
`support-kb/src/routes/kb/incidents/4471/findings/+page.svx`.
