# ILOSTAT Verification Checklist

Purpose: verify whether ILOSTAT can be safely used for Track & Tote public pages and any future calculator or reporting work before a connector is built.

Last reviewed: 2026-06-04

Source readiness: `researching-license`

Production approval: `not approved yet`

Status key:

- `confirmed` - supported by reviewed ILO/ILOSTAT documentation.
- `needs-verification` - plausible or partially supported, but not approved for Track & Tote production use.
- `not-allowed` - should not be done at this stage.
- `not-applicable` - not relevant to this source or phase.

## 1. Summary Recommendation

| Item | Status | Notes |
|---|---|---|
| Use ILOSTAT as a planning source | confirmed | Appropriate candidate for labour and occupational safety benchmark context and India/country-level labour/OHSE indicators where available. |
| Build a Track & Tote connector | not-allowed | Do not build until selected indicators, licence status, attribution, cache, redistribution, API/bulk behavior, methodology and report/calculator-use rules are approved. |
| Use ILOSTAT values on public pages | needs-verification | Public display may be feasible with attribution and caveats, but each selected indicator/database needs metadata and licence review. |
| Use for real-time claims | not-allowed | Labour/OHSE indicators are annual, periodic, lagged or revised. Daily bulk update checks do not mean the indicators are real-time. |
| Use for company-level OHSE claims | not-allowed | Country-level labour/OHSE indicators should not be used as evidence of company or facility OHSE performance. |
| Use in calculator/report outputs | needs-verification | Possible future benchmark or context use only after licence, attribution, cache/snapshot, methodology and output-use rules are approved. |
| Keep mock fallback | confirmed | Existing mock OHSE/benchmark datasets must remain available and clearly labelled until approval. |

Recommendation: keep ILOSTAT at `researching-license`. It is a high-value official source for labour and OHSE benchmark context, but selected indicator metadata, licence status, redistribution and future output-use rules still need approval.

## 2. Access Method

| Check | Status | Notes |
|---|---|---|
| Official ILOSTAT website exists | confirmed | ILOSTAT is the ILO's statistical portal. |
| Data portal/data explorer exists | confirmed | ILOSTAT provides data explorer and data catalogue access for users. |
| Bulk download facility exists | confirmed | ILOSTAT provides zipped CSV bulk files and metadata files. |
| SDMX web service/API exists | confirmed | ILOSTAT publishes an SDMX Gateway Web Service API guide. |
| Country profiles exist | confirmed | ILOSTAT provides country-profile access for selected key indicators. |
| Official access path selected for connector | needs-verification | Decide whether first Track & Tote ingestion should use bulk downloads, SDMX API, or manually reviewed snapshots. |

## 3. API Availability

| Check | Status | Notes |
|---|---|---|
| SDMX API documentation exists | confirmed | ILOSTAT publishes an SDMX Gateway Web Service API guide. |
| API supports structural metadata | confirmed | The SDMX guide covers structural metadata resources and formats. |
| API supports data queries | confirmed | The guide documents SDMX data query patterns and formats. |
| API supports CSV format | confirmed | The SDMX guide notes CSV as a data-message format. |
| API key requirement | confirmed | No API key requirement was identified for reviewed ILOSTAT SDMX/bulk access. Verify before connector work. |
| Numeric API rate limit | needs-verification | No fixed numeric request-per-minute/hour limit was confirmed in reviewed sources. |
| Query/data-size limits | needs-verification | Connector design must identify practical query size, pagination/range, retries and failure behavior. |
| Direct chart-to-source calls | not-allowed | Track & Tote must not call ILOSTAT API endpoints directly from React chart components. |

## 4. Download/Manual Extraction Requirements

| Check | Status | Notes |
|---|---|---|
| Bulk CSV downloads available | confirmed | ILOSTAT bulk download guidance describes zipped CSV files for datasets. |
| Metadata downloads available | confirmed | Bulk download guidance includes indicator lists, dictionary files and metadata resources. |
| Files with and without codes available | confirmed | ILOSTAT guidance describes downloads with labels and with codes for automated use. |
| Bulk facility update behavior documented | confirmed | ILOSTAT states bulk data are updated daily at 12:00 pm Europe/Paris only for datasets with new data, modifications or structural changes. |
| Exact file set selected | needs-verification | Need exact database, indicator, code-list and metadata files before connector work. |
| Extraction rules documented | needs-verification | Need exact columns, dimensions, units, time fields, source notes, flags and missing-value behavior per selected indicator. |
| Manual review step required | confirmed | First production snapshot should be manually reviewed because indicators can carry definition, source and comparability caveats. |

## 5. Attribution/Citation Requirements

| Check | Status | Notes |
|---|---|---|
| ILOSTAT citation guidance exists | confirmed | ILOSTAT's dissemination guidance says ILOSTAT data are free to use and should be cited regardless of access tool. |
| Citation examples exist | confirmed | ILOSTAT provides MLA, APA and Chicago examples for database citation. |
| ILO attribution required | confirmed | CC BY 4.0 and ILO citation guidance require crediting ILO/ILOSTAT where applicable. |
| Access date required | confirmed | ILOSTAT citation examples include access date for online data. |
| Indicator/database name required | confirmed | Citation examples include the database name and ILOSTAT. |
| Final Track & Tote attribution text | needs-verification | Must be finalized for each selected indicator/database before production public charts or reports. |
| ILO endorsement may be implied | not-allowed | Track & Tote must not imply ILO approval, certification, endorsement or partnership. |

## 6. Licence/Terms Structure

| Check | Status | Notes |
|---|---|---|
| ILO rights and permissions page reviewed | confirmed | ILO rights and permissions describe licensing for publications, data, logos/emblems and third-party materials. |
| Post-3 May 2023 datasets licence identified | confirmed | ILO says databases, datasets and accompanying reference metadata published from 3 May 2023 are covered by CC BY 4.0 unless otherwise indicated. |
| Pre-3 May 2023 materials require checks | confirmed | ILO says materials produced before 3 May 2023 do not automatically benefit from CC BY and users must check the copyright page. |
| Microdata exclusion identified | confirmed | ILO says the CC BY data licence does not apply to microdata submitted by or obtained from constituents and partner institutions that are restricted to ILO use. |
| Selected dataset licence reviewed | needs-verification | Each selected ILOSTAT dataset/indicator and metadata note must be checked before production use. |
| Third-party/co-produced material reviewed | needs-verification | Co-publications, third-party material or non-ILOSTAT data inputs may carry different restrictions. |

## 7. Commercial Reuse

| Check | Status | Notes |
|---|---|---|
| Commercial reuse under CC BY 4.0 | confirmed | CC BY 4.0 generally permits commercial reuse with attribution and change indication. |
| Commercial use of selected ILOSTAT indicators | needs-verification | Must verify that selected indicators/data were published under applicable CC BY terms and have no exceptions. |
| Paid report or calculator output use | needs-verification | Do not use ILOSTAT in future paid/reporting products until output-use rules are approved. |
| Company-level OHSE claims | not-allowed | ILOSTAT country indicators should not be used as company/facility evidence. |
| Marketing implication of official approval | not-allowed | Do not use ILO references to imply validation of Track & Tote. |

## 8. Redistribution

| Check | Status | Notes |
|---|---|---|
| Redistribution under CC BY 4.0 | confirmed | CC BY 4.0 generally permits sharing and adaptation with attribution and change indication. |
| Redistribution of selected indicators | needs-verification | Must check selected dataset/licence date/status and any exceptions before raw or transformed redistribution. |
| Republishing raw ILOSTAT files | not-allowed | Do not host raw bulk CSV/metadata files from Track & Tote until redistribution policy is approved. |
| Publishing extracted raw tables | needs-verification | Needs review before exposing raw values or downloads. |
| Publishing derived charts | needs-verification | Likely feasible for approved indicators with attribution and caveats, but not production-approved yet. |
| Sharing cached snapshots externally | needs-verification | Needs cache/snapshot and redistribution policy before public archives, reports or downloads. |

## 9. Caching/Snapshotting

| Check | Status | Notes |
|---|---|---|
| Caching needed for Track & Tote architecture | confirmed | Project rules require connector -> normalizer -> cache/snapshot -> API endpoint -> chart. |
| Direct public-source calls from chart components | not-allowed | Never fetch ILOSTAT APIs or downloads directly from React chart components. |
| Snapshot strategy required | confirmed | Labour/OHSE indicators are revised over time, so approved values should be stored as source snapshots with retrieval metadata. |
| Cache retrieved_at metadata | confirmed | Required by Track & Tote source governance. |
| Cache latest_observation metadata | confirmed | Required for annual/periodic charts. |
| Cache indicator metadata | confirmed | Required for definitions, dimensions, source notes and comparability caveats. |
| Cache licence and attribution metadata | needs-verification | Must retain licence/date/status and citation text for selected indicators. |
| Indefinite raw file retention | needs-verification | Needs licence, redistribution and retention policy before storing raw files indefinitely. |
| Snapshot use for official reports | needs-verification | Future report outputs should use saved snapshots only after licence, attribution and caveat rules are approved. |

## 10. Derived Charts/Public Display

| Check | Status | Notes |
|---|---|---|
| Labour benchmark charts | needs-verification | Intended use case, pending selected indicator metadata/licence review. |
| Occupational safety benchmark charts | needs-verification | Intended use case, but occupational injury/fatality data need reporting-practice and comparability caveats. |
| India country-context charts | needs-verification | Use India country-level data only after selected indicator validation. |
| Cross-country comparisons | needs-verification | Possible with caveats; definitions, data sources and reporting practices must be visible. |
| Real-time dashboards | not-allowed | ILOSTAT should not be presented as live or real-time. |
| Company/facility OHSE charts | not-allowed | ILOSTAT country-level data cannot evidence company/facility safety performance. |
| Mock-data public display | confirmed | Current charts may use labelled mock OHSE data until connector approval. |

## 11. Use In Calculator/Report Outputs

| Check | Status | Notes |
|---|---|---|
| Calculator logic now | not-applicable | No calculator is being built in this phase. |
| Future calculator benchmark input | needs-verification | Possible contextual benchmark only after licence, attribution, snapshot and methodology rules are approved. |
| Future report output | needs-verification | Needs saved snapshot ID, indicator code/name, retrieved-at date, dimensions, source notes, unit and citation text. |
| Company OHSE scoring | not-allowed | Do not use ILOSTAT to score or certify a company or facility. |
| Compliance or assurance evidence | not-allowed | Country labour statistics should not be treated as compliance-grade company evidence. |
| Use without method/source disclosure | not-allowed | ILOSTAT-backed values must not be shown without indicator, unit, source, period and caveat context. |

## 12. Required Metadata Fields For Every ILOSTAT Chart

Every future ILOSTAT-backed chart must expose at least:

- `source`
- `source_url`
- `dataset_url`
- `api_url`
- `bulk_download_url`
- `database_name`
- `database_code`
- `indicator_name`
- `indicator_code`
- `country`
- `country_code`
- `region_or_group`
- `geography_level`
- `unit`
- `dimensions`
- `sex`
- `age`
- `economic_activity`
- `occupation`
- `status_in_employment`
- `time_window`
- `frequency`
- `latest_observation`
- `retrieved_at`
- `license_name`
- `license_url`
- `attribution_text`
- `data_source_type`
- `source_note`
- `methodology_note`
- `confidence`
- `source_readiness_status`
- `transformation_notes`
- `known_limitations`
- `mock_fallback_dataset`

Recommended additional fields:

- `file_name`
- `file_format`
- `file_hash`
- `api_query`
- `code_list_version`
- `last_update_date`
- `observation_status`
- `data_flag`
- `modelled_estimate_flag`
- `projection_flag`
- `comparability_note`
- `missing_value_note`
- `revision_note`
- `report_snapshot_id`

## 13. Versioning/Update Requirements

| Requirement | Status | Notes |
|---|---|---|
| Store indicator/database code | confirmed | Required for reproducibility and stable references. |
| Store source URLs | confirmed | Keep data page, bulk file/API endpoint and relevant metadata URLs. |
| Store retrieval date | confirmed | Needed for audit trail and citation. |
| Store latest observation | confirmed | Required by Track & Tote chart metadata. |
| Store ILOSTAT update metadata | needs-verification | Bulk files may change when data are modified; connector should retain update date or file hash where possible. |
| Store code-list/dimension metadata | needs-verification | Needed to prevent dimension-mapping errors. |
| Store modelled/projection flags | needs-verification | Some ILOSTAT products include modelled estimates or projections that need clear labels. |
| Compare across revisions | needs-verification | Trend charts must account for definition or data-source changes over time. |
| Archive approved snapshots | needs-verification | Needs licence/permission and retention policy. |

## 14. Methodology/Caveat Requirements

| Requirement | Status | Notes |
|---|---|---|
| Indicator concept and definition reviewed | needs-verification | Every selected indicator needs its ILOSTAT definition and interpretation notes reviewed. |
| Statistical standards reviewed | needs-verification | Selected labour/OHSE indicators may use ILO statistical standards and should cite relevant concepts where needed. |
| Data source type documented | confirmed | ILOSTAT metadata should retain whether data come from labour force surveys, administrative records, estimates or other sources. |
| Occupational safety reporting caveat documented | needs-verification | Occupational injury/fatality indicators may depend on reporting systems and coverage, making cross-country comparison sensitive. |
| Missing values caveat documented | confirmed | ILOSTAT datasets can have uneven country/year coverage and missing values. |
| Modelled estimates caveat documented | needs-verification | Modelled estimates and projections should be labelled and not mixed silently with observed data. |
| Informal work and coverage caveat documented | needs-verification | Labour statistics may differ in treatment of informal employment and coverage across countries. |
| Country comparability caveat documented | confirmed | Cross-country comparisons require source, definition, coverage and revision caveats. |

## 15. Risks And Unknowns

| Risk or unknown | Status | Notes |
|---|---|---|
| Selected dataset licence/date status | needs-verification | ILO post-3 May 2023 CC BY data policy is promising, but each selected dataset must be checked. |
| Pre-2023 materials and metadata | confirmed | Pre-2023 materials do not automatically carry CC BY and need separate checks. |
| Microdata exclusion | confirmed | CC BY data licence does not cover restricted microdata from constituents/partners. |
| Indicator comparability | confirmed | Definitions, source type and reporting practice vary by country/indicator. |
| Occupational safety underreporting | needs-verification | OHSE indicators may undercount injuries/fatalities where reporting systems are weak. |
| No fixed numeric rate limit found | needs-verification | Connector must use conservative request behavior. |
| Revision and update behavior | confirmed | Bulk data can change when datasets are modified or structurally changed. |
| Company/facility misuse risk | confirmed | Country-level labour/OHSE data should not be overused for company-level claims. |

## 16. Approval Decision

Production approval: `not approved yet`

ILOSTAT is not approved for production connectors, public real-data charts, calculator outputs, or report outputs until these are completed:

1. Select exact ILOSTAT database, indicator codes, dimensions and geography.
2. Verify licence status, publication date and exceptions for every selected dataset.
3. Finalize attribution, citation, disclaimer and non-endorsement language.
4. Confirm commercial reuse and public display for Track & Tote use cases.
5. Confirm redistribution and cache/snapshot retention rules.
6. Define API/bulk request behavior, fallback behavior, refresh cadence and failure handling.
7. Document indicator definitions, data source types, units, dimensions, modelled/projection flags, missing values and comparability caveats.
8. Decide whether any future report/calculator use is permitted, and under what boundaries.
9. Keep mock fallback available and clearly labelled.

## Primary References

- [ILOSTAT official website](https://ilostat.ilo.org/)
- [ILOSTAT Data](https://ilostat.ilo.org/data/)
- [ILOSTAT Bulk Download Facility](https://ilostat.ilo.org/data/bulk/)
- [ILOSTAT Get Started](https://ilostat.ilo.org/about/get-started/)
- [ILOSTAT Dissemination and Analysis](https://ilostat.ilo.org/about/dissemination-and-analysis/)
- [ILOSTAT SDMX API Guide](https://webapps.ilo.org/ilostat-files/Documents/SDMX_User_Guide.pdf)
- [ILO Rights and Permissions](https://www.ilo.org/rights-and-permissions)
- [ILOSTAT Concepts and Definitions](https://ilostat.ilo.org/methods/concepts-and-definitions/)
