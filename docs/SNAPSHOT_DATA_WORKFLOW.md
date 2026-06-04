# Snapshot Data Workflow

Last updated: 2026-06-05

## 1. Purpose

This document defines how Track & Tote can use manually reviewed, versioned public-data snapshots before using live APIs or automated connectors.

Snapshots are useful because many public datasets are not designed for live API use. Some sources are annual reports, periodic releases, PDF tables, XLSX downloads, CSV packages, or versioned methodology publications. For these sources, citation, version control, legal review, and transparent caveats may matter more than freshness.

A snapshot workflow lets the project test charts, metadata, source labelling, and public explanations without implying that data is live, complete, legally approved for every use, or ready for calculator/report outputs.

Public accessibility does not automatically mean permission for public reuse, commercial reuse, redistribution, caching, automated extraction, or calculator/report use. A reviewed snapshot can reduce risk by keeping the exact source version, retrieval date, transformation notes, and approval status visible.

## 2. When To Use Snapshots Instead Of APIs

Use snapshots instead of APIs when the source is:

- an annual report
- an official XLSX or CSV download
- publication-based data
- a PDF table or annex
- a release-based dataset
- a versioned methodology document
- a dataset where API access is unclear
- a dataset where API terms, rate limits, or authentication rules are not verified
- a dataset where legal, citation, attribution, or redistribution review is required before automation
- a dataset where live connection is unnecessary for the article or project question
- a dataset where the exact historical version matters for reproducibility

Snapshots are especially appropriate when the public-facing claim is about historical context, annual trends, benchmark comparisons, or a fixed release rather than current conditions.

## 3. Approved Workflow

Snapshot-backed data should follow this workflow:

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

The workflow must preserve a clear distinction between:

- the untouched raw source file
- any normalized data derived from it
- the reviewed public-facing snapshot
- metadata explaining source, licence, retrieval, transformation, confidence, and caveats

No snapshot should be shown as production-approved until the relevant source registry and verification checklist support that status.

## 4. Required Folders

The future snapshot workflow should use a predictable folder structure:

```text
data-cache/raw/<source>/<version>/
data-cache/normalized/<source>/<version>/
data-cache/snapshots/<source>/<version>/
data-cache/metadata/<source>/<version>.json
```

Planned meaning:

- `data-cache/raw/<source>/<version>/`: original downloaded files, unchanged where permitted
- `data-cache/normalized/<source>/<version>/`: cleaned intermediate files with transformation notes
- `data-cache/snapshots/<source>/<version>/`: reviewed JSON/CSV outputs used by endpoints
- `data-cache/metadata/<source>/<version>.json`: source, licence, retrieval, caveat, and approval metadata

Do not create these folders until an approved snapshot experiment needs them. This document is planning-only.

## 5. Required Snapshot Metadata

Every snapshot must include:

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

Recommended additional fields:

- `registry_file`
- `verification_file`
- `methodology_url`
- `source_readiness_status`
- `snapshot_approval_stage`
- `approved_by`
- `approval_date`
- `qa_notes`

## 6. Snapshot Approval Stages

Use these stages for snapshot status:

### raw-collected

The source file has been downloaded or collected, but licence, attribution, redistribution, caching, and methodology checks are not complete.

### source-reviewed

The source registry and verification checklist have been reviewed for the specific dataset or release. Open legal or usage questions may still exist.

### normalized

The data has been transformed into a consistent internal format. Transformation notes and normalization method are recorded.

### qa-reviewed

The normalized data has been checked for obvious errors, missing values, date alignment, units, methodology caveats, and metadata completeness.

### approved-for-public-preview

The snapshot can be shown in a public preview with caveats. It must still carry source status, version, retrieval date, and uncertainty labels.

### approved-for-production

The snapshot has passed licence, attribution, redistribution, caching, public display, methodology, and versioning checks. Calculator/report use still requires a separate approval flag.

### blocked

The snapshot cannot be used publicly because permission, reliability, methodology, redistribution, caching, or attribution requirements are unresolved or incompatible.

## 7. Source Examples

Likely snapshot candidates include:

### CEA CO2 Baseline Database

Useful for India grid emission factor context, annual/versioned electricity emission factor trends, and future Scope 2 planning. Snapshot review is appropriate because the data is official, publication-based, and version-sensitive. Calculator use must remain blocked until methodology, licence, attribution, and factor-use rules are verified.

### MoSPI EnviStats

Useful for India environmental statistics and historical/publication-based indicators. Snapshot review is appropriate because the source is likely report/PDF/table-based and annual. Extraction reliability, citation, reuse terms, and public display rules must be verified.

### EDGAR

Useful for country and sector emissions trend context. Snapshot review is appropriate because EDGAR is annual/release-based and methodology-sensitive. Licence, attribution, redistribution, and report/calculator-use constraints require careful review before public use.

### WRI Aqueduct

Useful for water stress and water-risk context. Snapshot review is appropriate because water-risk layers are periodic/versioned rather than live measurements. Facility-level decisions require local data, methodology review, and licence review.

### World Bank Annual Indicators

Useful for country-level ESG, development, GDP, population, energy, health, labour, and benchmark context. Snapshot review is appropriate for annual indicators where exact observation years, retrieval dates, and metadata should remain visible.

### UN SDG Indicators

Useful for SDG benchmark and country-comparison context. Snapshot review is appropriate for annual/periodic indicators with metadata and methodology notes. Country-level context must not be presented as company-level ESG evidence.

### NASA POWER Daily Historical Export

Useful for temperature and precipitation context. A manually reviewed snapshot may be a low-risk first experiment if citation, attribution, caching, and public display expectations are confirmed. It should support historical context, not live weather claims.

## 8. Sources Not Ideal For Snapshots

Some sources need extra caution before snapshot use:

### CPCB National AQI

CPCB AQI may be near-real-time or station-based depending on source access and official terms. A static snapshot is not ideal if the public claim requires current air quality. If used, it must avoid real-time claims and must verify access, methodology, station metadata, attribution, caching, and public display rules.

### OpenAQ

OpenAQ may expose source-level or provider-level licence metadata. A snapshot could hide differences between stations, sources, or licences unless metadata is preserved carefully. Any public use must verify source-level licence, attribution, caching, redistribution, and commercial reuse.

### data.gov.in

data.gov.in is a portal, not one dataset. Each dataset must be reviewed separately. A snapshot workflow may work for a specific dataset, but the portal-level registry does not approve every dataset automatically.

## 9. Mock Fallback Rule

Every snapshot-backed chart must retain a mock fallback until production approval.

The UI must not break if:

- the snapshot is missing
- the snapshot is blocked
- the snapshot fails QA review
- the source status changes
- the source is not approved for public display

Mock data should stay clearly labelled as mock data and must not be confused with reviewed snapshots.

## 10. Public UI Labelling

Snapshot-backed charts must clearly show:

- snapshot version
- retrieved or downloaded date
- latest observation
- update frequency
- source status
- caveat
- whether the data is mock, reviewed snapshot, public preview, or production approved

Recommended UI labels:

- `Mock data`
- `Reviewed snapshot`
- `Source-review`
- `Public preview`
- `Production approved`
- `Blocked`

The UI must not call a static snapshot live, real-time, current, or complete unless the source and metadata support that wording.

## 11. Non-Goals

This workflow does not allow:

- scraping
- bypassing API terms
- assuming public website visibility means reuse approval
- calculator or report use until explicitly approved
- real-time claims from static snapshots
- private dashboards
- user uploads
- database features
- authentication
- payment features
- automated connectors without source-specific approval

## 12. First Recommended Snapshot Experiment

The first low-risk snapshot experiment should be either NASA POWER or World Bank, subject to final verification.

### Option A: NASA POWER

Use one historical weather/climate variable, one geography, and one fixed date window. Candidate use: daily temperature or precipitation context for a city/facility location.

Planning constraints:

- finalize citation and acknowledgement requirements
- verify caching and public display expectations
- avoid live weather claims
- preserve downloaded date and latest observation
- show source-review status until approved

### Option B: World Bank

Use one annual country-level indicator and one comparison window. Candidate use: India energy, population, GDP, labour, or development benchmark context.

Planning constraints:

- verify World Bank terms, attribution, and disclaimer requirements
- preserve indicator code and observation years
- avoid real-time claims
- keep country-level data separate from company-level claims
- show source-review status until approved

Both options remain planning-only until the relevant source verification checklist supports public preview.

## 13. Open Questions

Before using any snapshot publicly, resolve:

- Does the dataset licence allow public display?
- Does the dataset licence allow commercial reuse, if the site or future products become commercial?
- Does the source allow caching or local snapshots?
- Does the source allow redistribution of derived data?
- What attribution text is required?
- Does the source require citation of a publication, methodology paper, report, or version?
- Is the data allowed for charts only, or also for calculator/report outputs?
- What caveats must be shown near the chart?
- Are units, geography, time coverage, and methodology stable enough for the intended claim?
- Is the data official, estimated, modelled, observed, self-reported, or aggregated from third parties?
- Is a newer version available, and how should old versions be archived?
- Who reviewed and approved the snapshot?
- What mock fallback should remain available if the snapshot is blocked?

Current decision: snapshots can be planned and tested internally, but no snapshot-backed public data should replace mock data until source-specific approval is recorded.
