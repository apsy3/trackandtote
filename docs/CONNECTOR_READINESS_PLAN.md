# CONNECTOR READINESS PLAN

Last updated: 2026-06-05

## 1) Purpose

This document translates source governance into connector planning.

It uses the completed source registry and verification files to decide which public data sources should be considered first for connector research, what approval gates must be passed, and what implementation constraints apply.

This is a planning document only. It does not approve a production connector.

## 2) Current Rule

No production connector should be built until source-specific licence, attribution, caching, redistribution, API access, methodology and public-display rules are verified.

Public accessibility does not equal connector approval. A public dashboard, public API, public PDF, public data portal or free download can still have unresolved terms around:

- commercial reuse
- redistribution
- cached snapshots
- API polling or automated extraction
- attribution wording
- public display
- calculator/report-output use
- source methodology and update cadence

## 3) Connector Readiness Ranking

This ranking is cautious and preliminary. It must be updated as verification improves.

### Likely Easier To Verify First

- NASA POWER
- World Bank
- UN SDG API

These sources have clearer public documentation patterns, API/database access paths, and mostly weather/climate or country-indicator benchmark use cases. They still remain `not approved yet`.

### Moderate Complexity

- Climate TRACE
- WRI Aqueduct
- ILOSTAT
- MoSPI EnviStats
- CEA CO2 Baseline Database

These sources are useful but need stronger handling of methodology, versioning, citation, extraction, screening-use caveats, third-party/source-agency notes or report/calculator-use boundaries.

### High Caution / Blocked Until Clearer Terms

- OpenAQ
- EDGAR
- data.gov.in
- CPCB National AQI

These sources raise higher caution around source-level permissions, redistribution, commercial reuse, portal heterogeneity, undocumented access paths, unclear stable APIs or public-dashboard-versus-reuse distinctions.

## 4) Recommended First Connector Candidate

NASA POWER is the recommended first candidate for a **research connector only**.

Reasons:

- It is useful for temperature and rainfall context.
- It can support historical weather/climate normalisation around city or facility locations.
- It is likely lower risk than AQI, portal-based or emissions-inventory sources.
- It has public documentation for API access, daily services, parameters, citation and AWS access paths.
- It fits the current observatory's mock weather-temperature and weather-rainfall panels.

Production approval remains: `not approved yet`.

NASA POWER should not be used for public real-data charts until licence/citation, cache/snapshot, redistribution, commercial reuse, service-use expectations, parameter choices, time standard and caveats are verified.

## 5) Connector Stages

### Research Connector

An internal exploratory connector used to understand API shape, parameters, response formats and metadata requirements.

It should not power public charts.

### Local-Only Connector

A connector that can run locally for development or source-review tasks.

It may create local test snapshots, but those snapshots should not be published unless cache/redistribution rules are approved.

### Cached Mock-Compatible Connector

A connector that normalizes data into the same schema as mock data and can fall back cleanly to mock snapshots.

It must preserve the UI metadata contract.

### Public Preview Connector

A connector used in a clearly labelled public preview or source-review state.

It must show caveats, source status and metadata. It must not imply production approval.

### Production Connector

A connector approved for public real-data charts for a defined source, dataset, geography, time window and output use.

It requires source governance approval and validation.

## 6) Approval Gates Before Each Stage

### Research Connector Gate

Required before research connector work:

1. Registry file exists.
2. Verification checklist exists.
3. Source remains labelled `researching-license`.
4. Exact research question is defined.
5. No public UI integration is planned.
6. No credentials are committed.
7. No direct chart calls to public APIs.

### Local-Only Connector Gate

Required before local-only connector work:

1. Research connector gate is complete.
2. Access path is selected: API, official download, manually reviewed snapshot or other approved method.
3. API key/access requirements are documented.
4. Rate-limit or service-use expectations are documented.
5. Local snapshot retention policy is drafted.
6. Attribution and caveat metadata fields are captured, even if final wording is still `needs-verification`.
7. Mock fallback is preserved.

### Cached Mock-Compatible Connector Gate

Required before cached mock-compatible connector work:

1. Local-only connector gate is complete.
2. Output conforms to shared schema and existing chart metadata expectations.
3. Cache/snapshot path is implemented outside chart components.
4. Normalizer records units, date fields, geography and transformation notes.
5. Failure behavior returns mock fallback safely.
6. Source status remains visible in the API response and UI metadata.
7. Test snapshots are manually checked for date/value/unit correctness.

### Public Preview Connector Gate

Required before public preview connector work:

1. Cached mock-compatible connector gate is complete.
2. Public display is allowed or explicitly under source-review with no production claim.
3. Attribution wording is displayed.
4. Licence status and source-readiness status are displayed.
5. Retrieved-at, latest observation, frequency and caveat metadata are displayed.
6. No real-time claim is made unless source documentation confirms it.
7. Preview copy says source review is incomplete.
8. Rollback to mock data is tested.

### Production Connector Gate

Required before production connector approval:

1. Licence and terms reviewed and logged.
2. Attribution text captured and approved.
3. Commercial reuse status verified.
4. Redistribution status verified.
5. Caching/snapshotting and retention rules approved.
6. API access, API key handling, download rules and rate limits documented.
7. Methodology, versioning, units, geography and time fields documented.
8. Data quality caveats and missing-value behavior reviewed.
9. Public display rules approved.
10. Calculator/report-output use reviewed separately.
11. Mock fallback plan implemented and tested.
12. Source status moved to at least `validated`.

## 7) Metadata Requirements

Every connector output must include:

- `source_name`
- `source_url`
- `dataset_url`
- `licence_status`
- `attribution_text`
- `retrieved_at`
- `latest_observation`
- `update_frequency`
- `realtime_status`
- `confidence`
- `caveat`
- `source_readiness_status`

Recommended additional fields:

- `license_url`
- `api_url`
- `access_path`
- `dataset_version`
- `methodology_url`
- `transformation_notes`
- `known_limitations`
- `mock_fallback_dataset`
- `report_snapshot_id`

## 8) Architecture Constraints

All connectors must follow this path:

```text
connector -> normalizer -> cache/snapshot -> API endpoint -> chart
```

Rules:

- Never call public APIs directly from React chart components.
- Keep connector code separate from UI components.
- Normalize into shared schemas before reaching the API endpoint.
- Store retrieval, source, licence and transformation metadata with every snapshot.
- Prefer saved snapshots for reports or long-lived references.
- Keep future calculator logic isolated in `packages/calculator-core`.

## 9) Mock Fallback Rule

Every real connector must have a mock fallback.

If a source is unavailable, rate-limited, stale, malformed or no longer approved, the API route must be able to return the mock snapshot without breaking the UI.

The UI must clearly show when mock data is being used.

## 10) First Implementation Plan For NASA POWER

This section defines planning steps only. It does not authorize connector construction.

1. **Finalize licence/citation verification**
   - Confirm NASA POWER-specific citation wording.
   - Confirm NASA Earthdata and upstream product restrictions for selected variables.
   - Confirm cache/snapshot and redistribution rules.
   - Confirm commercial/public-display use for Track & Tote.

2. **Select one safe variable**
   - Candidate: daily temperature or daily precipitation.
   - Select one parameter code from NASA POWER documentation.
   - Document unit, time standard and whether values are near-real-time, daily or historical.

3. **Select one geography**
   - Use one city or point location.
   - Record latitude, longitude, spatial resolution and grid-cell caveat.
   - Avoid facility-level precision claims.

4. **Create normalized schema plan**
   - Map NASA POWER response fields to Track & Tote time-series metadata.
   - Include source name, source URL, dataset URL, parameter code, unit, retrieved-at, latest observation, frequency, confidence and caveat.

5. **Create local snapshot policy**
   - Define where local snapshots would be stored.
   - Define retention period.
   - Define whether raw API responses or only normalized summaries may be retained.
   - Keep snapshot policy marked `needs-verification` until approved.

6. **Keep public UI labelled as source-review until approved**
   - Do not replace public mock charts with NASA POWER values.
   - If previewed later, display `source-review-required` or equivalent status.
   - Do not call the data live or real-time.

## 11) Explicit Non-Goals

This plan does not authorize:

- calculator logic
- company reporting outputs
- legal claim of reuse approval
- real-time claims
- private dashboards
- authentication
- database storage
- user uploads
- payments or billing
- public real-data connector deployment

## 12) Open Questions

Open questions before connector work:

1. What exact NASA POWER variable should be selected first: temperature or precipitation?
2. Which geography should be used for the first local-only test?
3. Should the first research connector use the NASA POWER API, AWS datastore or a manually reviewed snapshot?
4. What final citation text should appear in chart metadata?
5. Are raw API responses allowed to be cached locally, or should only normalized summaries be retained?
6. What retention period is appropriate for source-review snapshots?
7. Does the chosen source allow commercial/public display in Track & Tote's current and possible future context?
8. How should `source-review-required` be represented in the API response and UI status?
9. What tests are needed to validate date, unit, time standard and geography mapping?
10. Who approves a source moving from `researching-license` to `free-confirmed` or `validated`?

## Evidence Inputs

This plan is based on:

- [SOURCE_GOVERNANCE_SUMMARY](SOURCE_GOVERNANCE_SUMMARY.md)
- [DATA_SOURCE_GUIDE](DATA_SOURCE_GUIDE.md)
- Source registry and verification files in [docs/sources](sources/)

Current decision: no production connector is approved yet.
