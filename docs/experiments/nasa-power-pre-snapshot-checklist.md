# NASA POWER Pre-Snapshot Checklist

Last updated: 2026-06-10

Status: final documentation-only gate before any NASA POWER snapshot file is created

Source readiness: `researching-license`

Production approval: `not approved yet`

## 1. Purpose

This checklist defines what must be true before Track & Tote creates the first real NASA POWER snapshot for a data essay experiment.

It is a pre-snapshot decision record. It does not approve API calls, data downloads, connector code, public real-data charts, calculator use, report outputs, or production labels.

The goal is to keep the first experiment small, auditable and clearly labelled while NASA POWER remains under source review.

## 2. Source Status Summary

- Source: NASA POWER
- Planned use: historical daily temperature and precipitation/rainfall context
- Current project status: source-review only
- Source readiness: `researching-license`
- Production approval: `not approved yet`
- Public chart status: not approved for real-data display yet
- Calculator/report status: not approved
- Current public note status: mock-first draft only
- Required fallback: mock data must remain available

NASA POWER is a promising first snapshot candidate because it can support weather and climate context around a location. It must still be treated as gridded/model or satellite-derived context, not local station observation and not live weather.

## 3. Exact Questions Still Needing Confirmation Before Real Data Use

Before creating any real snapshot file, answer these questions in the registry or verification record:

1. Which NASA POWER access path is approved for this experiment: API export, Data Access Viewer export, AWS datastore, or another official path?
2. Does the selected access path permit local raw snapshot storage for Track & Tote review?
3. Does it permit normalized JSON/CSV snapshot storage?
4. Does it permit public display of derived charts on Track & Tote?
5. Does it permit redistribution of raw files, normalized files, or reviewed snapshots?
6. What exact citation or acknowledgement text must appear in the note and chart metadata?
7. Must the chart include service name, service version, access path, parameter codes and date accessed?
8. Are there POWER-specific licence terms beyond general NASA Earthdata guidance?
9. Do upstream source products or selected parameters carry separate restrictions?
10. Is commercial reuse allowed for a public website or future product context?
11. Are calculator or report outputs allowed, or do they require a separate approval?
12. Are API keys, request limits, batching expectations, or service-use caveats relevant to the selected access path?
13. What parameter codes, units, time standard and spatial resolution will be used?
14. What historical date range avoids near-real-time revision ambiguity?
15. Which Delhi coordinate will be used, and what does that point represent?
16. Can the snapshot be committed to the repository, or must it remain local/private during review?

If any answer remains uncertain, keep the experiment in source-review and do not publish real values.

## 4. Licence / Reuse / Attribution Checklist

All items must be reviewed before the first real snapshot file is created:

- [ ] NASA POWER-specific licence or terms reviewed for the selected access path.
- [ ] NASA Earthdata data-use guidance reviewed for the selected use case.
- [ ] Upstream source/product restrictions checked for selected parameters.
- [ ] Commercial reuse status recorded.
- [ ] Public display status recorded.
- [ ] Raw data redistribution status recorded.
- [ ] Normalized data redistribution status recorded.
- [ ] Derived chart display status recorded.
- [ ] Cache/snapshot retention status recorded.
- [ ] Required attribution/citation text drafted.
- [ ] Non-endorsement wording reviewed so Track & Tote does not imply NASA approval, certification or partnership.
- [ ] Calculator/report output use explicitly blocked unless separately approved.

Current decision: not approved for production use.

## 5. API / Download Checklist

Do not call or download until these planning checks are complete:

- [ ] Access path selected.
- [ ] API-key or credential requirement confirmed.
- [ ] Service-use or rate-limit expectations reviewed.
- [ ] Parameter count and response limits reviewed.
- [ ] One temperature parameter selected.
- [ ] One precipitation/rainfall parameter selected.
- [ ] Units confirmed.
- [ ] Time standard confirmed.
- [ ] Service/version metadata field identified.
- [ ] Delhi coordinate selected and documented.
- [ ] One historical month selected.
- [ ] Date range chosen away from unresolved near-real-time revision risk.
- [ ] Raw snapshot storage location approved.
- [ ] Local-only or public-preview status recorded before any file is created.

## 6. Snapshot Metadata Checklist

Every future NASA POWER snapshot must include these metadata fields before it can be used in a chart or note:

- `source_name`
- `official_url`
- `dataset_url`
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
- `downloaded_at`
- `retrieved_by`
- `source_version`
- `publication_date`
- `latest_observation`
- `update_frequency`
- `realtime_status`
- `licence_status`
- `license_note`
- `attribution_text`
- `citation_text`
- `commercial_use_status`
- `redistribution_status`
- `caching_status`
- `transformation_notes`
- `normalization_method`
- `confidence`
- `caveat`
- `source_readiness_status`
- `snapshot_approval_stage`
- `approved_for_public_display`
- `approved_for_calculator_use`
- `fallback_mock_dataset`

Unset legal or source-status fields must say `needs verification`, not be left blank.

## 7. Allowed First Experiment Scope

The first real-data experiment, if later approved, is limited to:

- geography: Delhi, India
- time range: one month only, or 30 consecutive historical days
- variables: daily temperature and daily precipitation/rainfall context
- data handling: reviewed static snapshot only
- UI status: `source-review` or `reviewed snapshot`
- public claim level: workflow and context test only
- fallback: existing mock weather data remains available

The experiment may test data handling, metadata, QA, article structure and caveat placement. It must not become a live weather product or production data source.

## 8. Forbidden Actions

Until separate approval is recorded, do not:

- build a live dashboard
- claim real-time or live status
- claim a climate trend from one month
- claim local station measurement
- claim the chart represents every part of Delhi
- use the data in calculator outputs
- use the data in report outputs
- label the source or chart production-approved
- imply NASA endorsement, certification or partnership
- publish raw or normalized data downloads
- bypass official access, citation or usage expectations
- create a connector from this checklist alone

## 9. Required Labels For Any Future Chart/Note

Any future NASA POWER-backed chart or note must visibly show:

- Data status: `source-review` or `reviewed snapshot`
- Source: NASA POWER
- Source readiness: `researching-license`, unless separately updated
- Production approval: `not approved yet`, unless separately approved
- Snapshot version
- Downloaded/retrieved date
- Latest observation
- Update frequency
- Realtime status: historical context, not live weather
- Licence status
- Attribution/citation note
- Confidence
- Caveat
- Mock fallback availability

Required caveat pattern:

```text
NASA POWER values are gridded weather/climate context, not local station measurements. This chart uses a reviewed snapshot and is not a live weather feed.
```

## 10. Decision Gate: Before Creating The First Real Snapshot File

All of the following must be true before creating any raw, normalized, snapshot, or metadata file:

1. The NASA POWER registry and verification checklist have been reviewed again for this exact use case.
2. Licence, attribution, commercial reuse, redistribution, caching and public display statuses are recorded.
3. Access path, parameter codes, units, time standard and service/version fields are selected.
4. Delhi coordinate and date range are documented.
5. Snapshot storage policy is approved, including whether files may be committed or must remain local.
6. Required metadata schema is ready.
7. QA checklist is ready.
8. Mock fallback dataset is identified.
9. The experiment is explicitly labelled local-only or source-review, not production.
10. A decision note records that calculator/report use remains blocked.

If any gate fails, do not create real data files.

## 11. Decision Gate: Before Publishing The Note Publicly

All of the following must be true before the Delhi weather Note is made public with real data:

1. The snapshot has passed source review.
2. Raw and normalized files are separated, if files are permitted.
3. Metadata is complete and visible enough for readers.
4. QA review is complete.
5. Chart labels show source, status, retrieval date, latest observation, confidence and caveat.
6. The note does not claim live weather, real-time status, climate trend, local station measurement, or production approval.
7. NASA POWER citation/attribution text appears in the note.
8. Public display approval is recorded.
9. Rollback to mock data is tested.
10. `draft: true` is removed only after the publishing decision is approved.

If public display approval remains unresolved, keep the note hidden and mock-first.

## 12. Relationship To The Current Mock-First Draft Note

Current draft:

```text
apps/observatory/src/content/blog/a-month-of-delhi-weather-context.mdx
```

The draft is a structure test, not a factual data essay. It currently remains:

- `draft: true`
- mock-first
- source-review
- not public evidence
- not based on real NASA POWER data
- not production approved

The draft may later become the article shell for a reviewed snapshot, but only after the decision gates above pass. Until then, it should stay hidden from public routes and continue to describe all chart/data references as mock or planning data.

Current decision: do not create a real NASA POWER snapshot yet.
