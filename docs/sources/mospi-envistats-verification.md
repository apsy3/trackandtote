# MoSPI EnviStats Verification Checklist

Purpose: verify whether MoSPI EnviStats publications and tables can be safely used for Track & Tote public pages and any future calculator or reporting work before a connector or extraction workflow is built.

Last reviewed: 2026-06-04

Source readiness: `researching-license`

Production approval: `not approved yet`

Status key:

- `confirmed` - supported by reviewed official MoSPI/NSO/EnviStats documentation.
- `needs-verification` - plausible or partially supported, but not approved for Track & Tote production use.
- `not-allowed` - should not be done at this stage.
- `not-applicable` - not relevant to this source or phase.

## 1. Summary Recommendation

| Item | Status | Notes |
|---|---|---|
| Use MoSPI EnviStats as a planning source | confirmed | Appropriate candidate for India environmental statistics context, annual/publication-based indicators, state/country benchmarks and historical trend notes. |
| Build a Track & Tote connector | not-allowed | Do not build until exact publication/table, terms, attribution, extraction, cache, redistribution, methodology and output-use rules are approved. |
| Use EnviStats values on public pages | needs-verification | Public display may be feasible with source acknowledgement and caveats, but selected tables and third-party source notes need review. |
| Use for real-time claims | not-allowed | EnviStats is annual/publication-based and compiled from source agencies; it is not real-time. |
| Use in calculator/report outputs | needs-verification | Possible future context/factor use only after methodology, extraction reliability, licence, attribution, cache and output-use approval. |
| Keep mock fallback | confirmed | Existing mock datasets/routes must remain available and clearly labelled until approval. |

Recommendation: keep MoSPI EnviStats at `researching-license`. It is a valuable official publication source, but production use should be table-specific and snapshot-based.

## 2. Access Method

| Check | Status | Notes |
|---|---|---|
| Official MoSPI site exists | confirmed | MoSPI publishes reports, press notes and download pages on mospi.gov.in. |
| EnviStats publications exist | confirmed | MoSPI/NSO publishes EnviStats India publications and report components. |
| Free report/table downloads exist | confirmed | The 2024 publication states soft copies of the report and tables are available free of charge from MoSPI download reports. |
| Exact publication/table selected | needs-verification | Required before any extraction workflow or connector design. |
| Original source agency identified | needs-verification | Required because EnviStats compiles material from many ministries, departments, agencies and international organisations. |
| Access method selected | needs-verification | Decide per table whether ingestion should use PDF extraction, Excel/table download, manually reviewed snapshot or a verified official API if later found. |

## 3. API Availability

| Check | Status | Notes |
|---|---|---|
| Stable EnviStats API identified | not-applicable | No stable official API documentation for EnviStats tables was identified in reviewed sources. |
| API key required | not-applicable | No approved API access path identified. |
| API rate limits | not-applicable | Not applicable unless a future official API endpoint is identified and approved. |
| Automated website scraping | needs-verification | Do not scrape MoSPI pages or files until website policies, robots guidance and service-use expectations are reviewed. |
| Direct chart-to-source calls | not-allowed | Track & Tote must not call MoSPI pages, PDFs or downloads directly from chart components. |
| Connector style | needs-verification | Future ingestion should likely be manually reviewed snapshot/download based unless official API guidance is verified. |

## 4. Download/Manual Extraction Requirements

| Check | Status | Notes |
|---|---|---|
| Report/download access available | confirmed | MoSPI publishes EnviStats report PDFs and component files/download listings. |
| Tables available with publications | confirmed | The 2024 publication states soft copies of report and tables are available for download. |
| Exact file selected | needs-verification | Need PDF, Excel, component PDF or table source before extraction work. |
| Extraction method documented | needs-verification | PDF/Excel extraction must document parser, table number, columns, units, fiscal years, geography and transformation notes. |
| Manual review step required | confirmed | First production snapshot should be manually reviewed because table extraction and source-agency caveats can be subtle. |
| Extraction reliability validated | needs-verification | Values, totals, notes, units and missing values must be checked against the source table before public display. |
| Raw files stored indefinitely | needs-verification | Retention requires licence, attribution, redistribution and third-party review. |

## 5. Attribution/Citation Requirements

| Check | Status | Notes |
|---|---|---|
| Source acknowledgement required | confirmed | The 2024 publication says reproduction is permitted provided acknowledgement of the source is made. |
| MoSPI/NSO publication citation needed | confirmed | Charts should cite NSO/MoSPI, publication year and publication title. |
| Original source-agency note needed | confirmed | EnviStats tables often cite underlying ministries, departments, agencies or international organisations. |
| Final Track & Tote attribution text | needs-verification | Must be finalized per selected publication/table before public charts or reports. |
| Government endorsement implied | not-allowed | Track & Tote must not imply MoSPI, NSO, Government of India or source-agency approval, certification or endorsement. |

## 6. Licence/Terms Structure

| Check | Status | Notes |
|---|---|---|
| Reproduction notice reviewed | confirmed | The 2024 publication permits reproduction with source acknowledgement. |
| Third-party copyright warning reviewed | confirmed | The 2024 publication says third-party attributed materials are subject to separate terms and restrictions, including commercial-use restrictions. |
| No-warranty disclaimer reviewed | confirmed | The publication disclaims warranty around accuracy, completeness and fitness for purpose. |
| MoSPI website policies reviewed | needs-verification | Need stable official website policy/copyright/terms page review before production use. |
| Selected table/source-agency terms reviewed | needs-verification | Each selected table may rely on a source agency with its own terms, methods and update caveats. |
| Government Open Data Licence applicability | needs-verification | Not assumed for EnviStats publications unless explicitly indicated for a selected source/table. |

## 7. Commercial Reuse

| Check | Status | Notes |
|---|---|---|
| Reproduction with acknowledgement | confirmed | The EnviStats publication permits reproduction with source acknowledgement. |
| Commercial reuse of third-party material | needs-verification | The publication explicitly flags possible third-party restrictions, including commercial-use restrictions. |
| Commercial reuse of selected table | needs-verification | Must verify MoSPI publication notice, source-agency terms and third-party status per table. |
| Paid report/calculator use approved | needs-verification | Do not use EnviStats in future paid/reporting/calculator products until output-use rules are approved. |
| Official logo/name use | not-allowed | Do not use MoSPI/NSO/Government of India names, logos or symbols as endorsements. |

## 8. Redistribution

| Check | Status | Notes |
|---|---|---|
| Reproduction possible with acknowledgement | confirmed | Publication text supports reproduction with source acknowledgement. |
| Raw table redistribution | needs-verification | Do not republish raw tables until table-level licence, third-party and source-agency restrictions are checked. |
| Cached snapshot sharing | needs-verification | Needs cache, attribution, retention, public-download and redistribution policy before sharing. |
| Derived chart publication | needs-verification | Likely possible for approved tables with acknowledgement and caveats, but not production-approved yet. |
| Third-party material redistribution | needs-verification | Any third-party material requires separate terms review. |

## 9. Caching/Snapshotting

| Check | Status | Notes |
|---|---|---|
| Snapshot-first approach required | confirmed | Publication-based sources should use saved reviewed snapshots rather than changing live values. |
| Direct public-source calls from charts | not-allowed | Never fetch MoSPI PDFs/downloads directly from React chart components. |
| Store retrieved_at | confirmed | Required by Track & Tote governance. |
| Store publication year/version | confirmed | Required because EnviStats values are annual/versioned publication outputs. |
| Store source-agency note | confirmed | Required because tables are compiled from many agencies. |
| Store extraction/transformation notes | confirmed | Required because PDFs/tables may need parsing and normalization. |
| Raw PDF/table retention | needs-verification | Needs licence, third-party and retention approval before indefinite raw storage. |
| Official reports use snapshots | needs-verification | Future report outputs should use reviewed snapshots only after source approval. |

## 10. Derived Charts/Public Display

| Check | Status | Notes |
|---|---|---|
| India environmental statistics context | needs-verification | Intended use case, pending selected table and source-agency review. |
| Official annual/publication-based indicators | needs-verification | Intended use case; charts must identify publication and reference period. |
| State/country benchmark context | needs-verification | Possible where table geography supports it and comparability caveats are documented. |
| Historical trend context | needs-verification | Possible where definitions, source agencies, units and periods are comparable. |
| Real-time charts | not-allowed | EnviStats should not be labelled live or real-time. |
| Public display without source/caveat | not-allowed | Every chart must show source, frequency, latest observation/reference period, retrieved-at timestamp, confidence, status and licence/attribution note where relevant. |

## 11. Use In Calculator/Report Outputs

| Check | Status | Notes |
|---|---|---|
| Calculator logic now | not-applicable | No calculator is being built in this phase. |
| Future calculator factors | needs-verification | Only possible for selected tables after methodology, licence, extraction, source-agency and output-use approval. |
| Future report outputs | needs-verification | Need saved snapshot ID, publication/table citation, source agency, retrieval date, reference period, unit, geography, method and caveat notes. |
| Compliance-grade use | not-allowed | EnviStats values should not be treated as compliance/assurance evidence without separate legal and methodological basis. |
| Use without method/source disclosure | not-allowed | EnviStats-backed values must not be shown without table, source agency, unit, period and caveat context. |

## 12. Required Metadata Fields For Every MoSPI EnviStats Chart

Every future MoSPI EnviStats-backed chart must expose at least:

- `source`
- `source_url`
- `publication_url`
- `download_url`
- `publication_title`
- `publication_year`
- `chapter`
- `component`
- `table_or_figure_number`
- `table_or_figure_title`
- `source_agency`
- `original_source_note`
- `geography`
- `geography_level`
- `unit`
- `dimensions`
- `time_window`
- `reference_period`
- `frequency`
- `latest_observation`
- `retrieved_at`
- `license_name`
- `license_url`
- `attribution_text`
- `third_party_material_note`
- `extraction_method`
- `confidence`
- `source_readiness_status`
- `methodology_note`
- `transformation_notes`
- `known_limitations`
- `mock_fallback_dataset`

Recommended additional fields:

- `file_name`
- `file_format`
- `file_hash`
- `page_number`
- `annexure_number`
- `column_mapping`
- `schema_version`
- `fiscal_year_flag`
- `missing_value_note`
- `revision_note`
- `comparability_note`
- `source_agency_update_url`
- `report_snapshot_id`

## 13. Versioning/Update Requirements

| Requirement | Status | Notes |
|---|---|---|
| Store publication title/year | confirmed | Required for annual/versioned source tracking. |
| Store selected table/figure ID | confirmed | Required for reproducibility and citation. |
| Store source-agency note | confirmed | EnviStats compiles data from many source agencies. |
| Store retrieved_at | confirmed | Required for audit trail and chart metadata. |
| Store reference period/latest observation | confirmed | Required to avoid false real-time claims. |
| Store file hash/snapshot ID | needs-verification | Needed for reproducible extraction and report outputs. |
| Compare across publications | needs-verification | Trend charts must account for changed tables, definitions, source agencies and units. |
| Archive approved snapshots | needs-verification | Needs licence, third-party and retention policy. |

## 14. Methodology/Caveat Requirements

| Requirement | Status | Notes |
|---|---|---|
| Table/source methodology reviewed | needs-verification | Every selected table needs source-agency and EnviStats methodology review before production use. |
| FDES/SEEA context documented where relevant | confirmed | EnviStats publications use environmental-statistics and environmental-accounting frameworks depending on publication. |
| Source-agency update caveat documented | confirmed | The 2024 publication asks users to check updates with source agencies due to dynamic datasets. |
| No-warranty caveat documented | confirmed | The publication disclaims warranty around accuracy, completeness and fitness for purpose. |
| Units and fiscal years validated | needs-verification | Required before any chart or report. |
| Geography mapping validated | needs-verification | State/UT/district/site labels and coverage must be checked per table. |
| Missing values and notes documented | needs-verification | Table notes, blanks, totals and rounding must be preserved. |

## 15. Risks And Unknowns

| Risk or unknown | Status | Notes |
|---|---|---|
| Third-party restrictions | confirmed | The 2024 publication explicitly flags third-party terms and commercial-use restrictions. |
| Source-agency updates differ from publication | confirmed | NSO notes possible differences and asks users to check source agencies for updates. |
| PDF/table extraction errors | confirmed | Publication-based extraction can introduce parsing or alignment errors. |
| Commercial report/calculator use | needs-verification | Especially important because third-party material may restrict commercial use. |
| Raw table redistribution | needs-verification | Avoid raw table downloads or public archives until approved. |
| No stable API identified | confirmed | Treat as snapshot/download source unless official API guidance is found. |
| Method comparability across years | needs-verification | Definitions, table structures and source agencies may change between publications. |
| Real-time misuse risk | confirmed | Annual publications should not be framed as live monitoring. |

## 16. Approval Decision

Production approval: `not approved yet`

MoSPI EnviStats is not approved for production connectors, public real-data charts, calculator outputs or report outputs until these are completed for each selected publication/table:

1. Select exact publication year, chapter, table/figure/annexure and source agency.
2. Verify reproduction notice, MoSPI/Government of India website policies, third-party copyright, commercial-use and source-agency terms.
3. Finalize attribution, citation, licence, disclaimer and non-endorsement language.
4. Confirm public display, commercial reuse, redistribution and future report/calculator output rules.
5. Confirm extraction method, file hash/snapshot ID, value validation, units, geography, reference period and missing-value handling.
6. Confirm cache/snapshot retention rules and whether raw files/tables may be stored or shared.
7. Document source-agency update caveats, methodology, definitions, revisions and comparability limitations.
8. Keep a clearly labelled mock fallback.

## Primary References

- [MoSPI](https://www.mospi.gov.in/)
- [MoSPI Download Reports](https://www.mospi.gov.in/download-reports)
- [EnviStats India 2024: Environment Statistics](https://www.mospi.gov.in/publication/envistats-india-2024-environment-statistics)
- [EnviStats India 2025: Environment Statistics Overview](https://mospi.gov.in/sites/default/files/reports_and_publication/statistical_publication/EnviStats/Overview25.pdf)
- [EnviStats India 2024: Environment Accounts PDF](https://mospi.gov.in/sites/default/files/publication_reports/EnviStats_India_2024.pdf)
- [Press Note on EnviStats India 2024: Environment Accounts](https://www.mospi.gov.in/press-release/press-note-envistats-india-2024-environment-accounts)
