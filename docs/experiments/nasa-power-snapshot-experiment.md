# NASA POWER Snapshot Experiment Plan

Last updated: 2026-06-05

Production approval: `not approved yet`

Experiment status: planning only

## 1. Purpose

This document plans the first small, controlled NASA POWER snapshot experiment for Track & Tote.

The experiment is designed to test whether a manually reviewed NASA POWER snapshot could later replace one mock weather chart in a controlled source-review state. It does not approve live API use, production public charts, calculator use, report outputs, or automated connector work.

The experiment follows the snapshot workflow:

```text
official source download
-> source/legal review
-> raw snapshot storage
-> normalization
-> reviewed JSON/CSV
-> metadata file
-> API/static endpoint
-> chart
```

This plan is intentionally conservative. No real NASA POWER data should be downloaded, committed, displayed, or used in charts until the decision gates in this document are satisfied.

## 2. Why NASA POWER First

NASA POWER is a reasonable first snapshot experiment candidate because:

- it is useful for daily temperature context
- it is useful for precipitation/rainfall context
- it can support historical weather and climate normalization around a city or facility location
- it is lower risk than near-real-time AQI, portal-based, or source-level-licence-sensitive datasets
- it already appears in the source governance ranking as likely easier to verify first
- it fits the existing mock weather-temperature and weather-rainfall chart concepts

NASA POWER is still not production-approved. The current source readiness status remains `researching-license`, and production approval remains `not approved yet`.

## 3. Non-Goals

This experiment does not include:

- connector code
- live API calls
- automated API polling
- real data download
- chart logic changes
- public UI changes
- calculator logic
- company reporting outputs
- database storage
- authentication
- user uploads
- payment features
- legal claims that NASA POWER reuse is approved
- real-time or live weather claims
- production public display

## 4. Proposed Source And Variables

Source: NASA POWER

Registry file: [NASA POWER Source Registry Entry](../sources/nasa-power.md)

Verification file: [NASA POWER Licence And API Verification Checklist](../sources/nasa-power-verification.md)

Proposed variables:

- daily temperature context
- daily precipitation/rainfall context

Candidate NASA POWER parameter choices must be finalized later during source review. The plan should prefer one temperature parameter and one precipitation parameter only, so the first experiment stays small and auditable.

Possible future variable categories:

- average daily temperature
- maximum or minimum daily temperature, if needed for heat context
- daily precipitation/rainfall total

Do not select final parameter codes until NASA POWER parameter definitions, units, time standard, source product, and citation requirements are reviewed.

## 5. Proposed Geography And Time Range

Use one India location only.

Preferred candidate: Delhi

Alternative candidate: Bengaluru

Suggested initial location strategy:

- choose one city
- record latitude and longitude explicitly
- document whether the coordinate represents city center, a known weather reference point, or a project-defined test coordinate
- describe values as gridded/model or satellite-derived context, not station observations

Suggested historical range:

- one month, or
- 30 consecutive historical days

The exact date range should be old enough to avoid near-real-time revision ambiguity. Do not use the most recent days unless NASA POWER latency and revision caveats are resolved.

## 6. Legal/Governance Prerequisites

Before any implementation, confirm:

1. NASA POWER citation and acknowledgement requirements.
2. Whether the selected access path permits local snapshot creation.
3. Whether public display of derived charts is allowed for Track & Tote's use case.
4. Whether cached or normalized JSON/CSV snapshots may be stored in the repository or must stay local/private.
5. Whether redistribution of raw, normalized, or derived data is allowed.
6. Whether commercial reuse is allowed if Track & Tote later becomes commercial.
7. Whether future report or calculator output use requires separate approval.
8. Whether upstream source/product restrictions apply to the selected parameters.
9. Required service/version/date-access metadata.
10. Non-endorsement language so Track & Tote does not imply NASA approval, certification, or partnership.

Until these are resolved, UI status must be `source-review` or `reviewed-snapshot`, never `production-ready`.

## 7. Snapshot Metadata Requirements

Every future NASA POWER snapshot must include:

- `source_name`
- `official_url`
- `dataset_url`
- `downloaded_at`
- `retrieved_by`
- `source_version`
- `publication_date`
- `latest_observation`
- `update_frequency`
- `realtime_status`
- `licence_status`
- `attribution_text`
- `commercial_use_status`
- `redistribution_status`
- `caching_status`
- `transformation_notes`
- `normalization_method`
- `confidence`
- `caveat`
- `approved_for_public_display`
- `approved_for_calculator_use`
- `fallback_mock_dataset`

NASA POWER-specific metadata should also include:

- `access_path`
- `api_service`
- `service_version`
- `dataset_or_product`
- `parameter_code`
- `parameter_label`
- `unit`
- `community`
- `geography`
- `latitude`
- `longitude`
- `spatial_resolution`
- `time_standard`
- `time_window`
- `citation_text`
- `license_note`
- `source_readiness_status`
- `snapshot_approval_stage`
- `mock_fallback_dataset`

## 8. Proposed Folder/File Structure

This is the future structure only. Do not create these data folders or files yet.

```text
data-cache/raw/nasa-power/<snapshot-version>/
data-cache/normalized/nasa-power/<snapshot-version>/
data-cache/snapshots/nasa-power/<snapshot-version>/
data-cache/metadata/nasa-power/<snapshot-version>.json
```

Possible first snapshot version name:

```text
delhi-daily-weather-YYYY-MM
```

Possible future files:

```text
data-cache/raw/nasa-power/delhi-daily-weather-YYYY-MM/source-response.json
data-cache/normalized/nasa-power/delhi-daily-weather-YYYY-MM/daily-weather.csv
data-cache/snapshots/nasa-power/delhi-daily-weather-YYYY-MM/daily-weather.json
data-cache/metadata/nasa-power/delhi-daily-weather-YYYY-MM.json
```

These are planning paths only. They should not be created until source review approves a local snapshot experiment.

## 9. Normalization Plan

The normalized output should be small, explicit, and compatible with the existing time-series shape.

Proposed normalized record:

```json
{
  "date": "YYYY-MM-DD",
  "temperature_value": null,
  "temperature_unit": "Needs verification",
  "precipitation_value": null,
  "precipitation_unit": "Needs verification",
  "source_name": "NASA POWER",
  "snapshot_version": "delhi-daily-weather-YYYY-MM"
}
```

Normalization rules to define before implementation:

1. Preserve source date exactly.
2. Record selected time standard.
3. Record units for each parameter.
4. Do not interpolate missing values without a documented method.
5. Keep raw source values separate from derived values.
6. Record any unit conversion.
7. Record selected latitude and longitude.
8. Record any rounding.
9. Record transformation notes in metadata.
10. Keep temperature and precipitation variables separable so one can be withheld if the other fails review.

## 10. QA Checklist

Before any reviewed snapshot can be used in a public preview, check:

- source registry exists
- verification checklist exists
- source readiness remains visible
- production approval remains `not approved yet` unless separately approved
- location is documented
- latitude and longitude are documented
- date range is documented
- parameter codes are documented
- units are documented
- time standard is documented
- downloaded/retrieved date is recorded
- latest observation is recorded
- citation text is recorded
- licence status is recorded
- caching status is recorded
- redistribution status is recorded
- public display status is recorded
- calculator use is explicitly blocked unless approved
- source caveat explains gridded/model data
- near-real-time or revision caveat is shown if relevant
- values are checked for obvious impossible ranges
- missing values are handled consistently
- mock fallback remains available
- UI label does not say live, real-time, complete, or production-ready

## 11. UI Labelling Requirements

If this snapshot is ever used in a public preview, the chart metadata must show:

- `Mock data`, `Source-review`, or `Reviewed snapshot` status
- source name: NASA POWER
- source URL
- dataset/access path URL
- snapshot version
- retrieved/downloaded date
- latest observation
- update frequency
- realtime status
- citation or attribution note
- confidence
- caveat
- source readiness status

Required caveat pattern:

```text
NASA POWER values are gridded weather/climate context, not local station measurements. This chart uses a reviewed snapshot and is not a live weather feed.
```

Do not use labels such as:

- live
- real-time
- official current weather
- production-ready
- approved for reporting
- approved for calculator use

## 12. Mock Fallback Rule

The existing mock weather datasets must remain available until production approval.

The UI and API/static endpoint design must tolerate:

- missing snapshot files
- blocked snapshot status
- failed QA review
- incomplete licence review
- incomplete attribution review
- data not approved for public display

If the snapshot cannot be used, the chart should keep the mock dataset and show clear mock labelling.

## 13. Risks And Caveats

Key risks:

- NASA POWER-specific licence and citation requirements may not be fully verified yet.
- Upstream source/product restrictions may apply to selected parameters.
- Snapshot caching and redistribution rules may need more review.
- Future commercial use may require separate approval.
- Future calculator/report output use may require separate approval.
- NASA POWER values are gridded/model or satellite-derived context, not local station observations.
- Near-real-time values can be revised or replaced by later products.
- Time standard selection can affect interpretation.
- Precipitation products may have lag or revision caveats.
- City-center coordinates may not represent local microclimates.
- A 30-day sample is useful for workflow testing but not enough for robust climate claims.

The experiment should test workflow, metadata, and public labelling. It should not be used to make a substantive climate, policy, facility, or compliance claim.

## 14. Decision Gates Before Implementation

Do not implement the snapshot experiment until all of these gates are passed:

1. NASA POWER licence/citation review is updated.
2. Selected parameter codes and units are documented.
3. Selected geography and coordinates are documented.
4. Selected historical date range is documented.
5. Caching/snapshot retention status is documented.
6. Redistribution status is documented.
7. Public display status is documented.
8. Attribution text is drafted.
9. Caveat text is drafted.
10. Mock fallback dataset is identified.
11. Snapshot approval stage is defined.
12. Decision is recorded that this is a local/source-review experiment, not production data.

Public preview requires additional approval:

1. QA review completed.
2. UI label approved.
3. Source metadata complete.
4. Rollback to mock data tested.
5. Source status displayed as `source-review` or `reviewed-snapshot`.

Production use requires a separate decision and remains `not approved yet`.

## 15. Step-By-Step Implementation Plan For Later

These steps are for a future task after the decision gates pass.

1. Finalize NASA POWER source verification updates.
2. Select one India location: Delhi or Bengaluru.
3. Record latitude, longitude, geography label, and location caveat.
4. Select one small historical date range: 30 days or one month.
5. Select one temperature parameter and one precipitation parameter.
6. Draft attribution, citation, and caveat text.
7. Decide whether the experiment can create local raw files.
8. Create raw, normalized, snapshot, and metadata folders only if approved.
9. Download or manually export the source data only if approved.
10. Save the raw source response or downloaded file exactly as retrieved, if permitted.
11. Normalize into reviewed JSON/CSV.
12. Create a metadata JSON file with all required fields.
13. Run QA checks for units, dates, missing values, obvious ranges, and caveats.
14. Keep the data local until public display approval is recorded.
15. Wire a local static/API endpoint only after snapshot review approves public preview.
16. Keep the UI labelled as `source-review` or `reviewed-snapshot`.
17. Preserve the mock fallback.
18. Document the experiment result and whether NASA POWER should move toward connector work.

Current decision: NASA POWER is a strong first snapshot experiment candidate, but no real data should be downloaded or displayed until final verification and snapshot gates are complete.
