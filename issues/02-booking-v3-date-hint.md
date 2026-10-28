# booking-v3 date hint contradicts day-first tenant locales

**Report count from ticket #4471: 33**

## Problem

The `booking-v3` booking form displays `MM/DD/YYYY` for tenants whose configured locale writes the
day before the month. People follow the form's month-first hint, while the tenant's form interprets
the date using its day-first convention, producing the wrong date.

## Evidence

After deduplicating the export by report ID and classifying each report with the tenant locale,
form version, and channel, 33 reports map to this form-hint cause. They all arrive through the form
channel and come from the three day-first tenants running `booking-v3`: Alder Physio (12), Copper
Studio (11), and Pale Harbour (10). Intake tags are not reliable cause labels: 15 reports in this
group were tagged `parser` at intake.

## Expected

The date hint should match the tenant's configured date order, or otherwise make the date order
unambiguous and consistent with how the form parses the entered value.

## Actual

The form tells people to enter month first even though the tenant's configured form behavior is
day-first.

Source: support KB export, `src/lib/data/reports-4471.json`; the matching KB analysis is
`src/routes/kb/incidents/4471/findings/+page.svx`.
