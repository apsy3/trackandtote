# UN SDG API Verification Checklist

Purpose: verify whether the UN SDG API and Global SDG Indicators Database can be safely used for Track & Tote public pages and any future calculator or reporting work before a connector is built.

Last reviewed: 2026-06-04

Source readiness: `researching-license`

Production approval: `not approved yet`

Status key:

- `confirmed` - supported by reviewed UN/UNSD/SDG documentation.
- `needs-verification` - plausible or partially supported, but not approved for Track & Tote production use.
- `not-allowed` - should not be done at this stage.
- `not-applicable` - not relevant to this source or phase.

## 1. Summary Recommendation

| Item | Status | Notes |
|---|---|---|
| Use UN SDG API as a planning source | confirmed | Appropriate candidate for SDG indicator benchmark context, India/country-level sustainability indicators and country comparison context. |
| Build a Track & Tote connector | not-allowed | Do not build until selected indicators, terms, attribution, cache, redistribution, API behavior, methodology and report/calculator-use rules are approved. |
| Use UN SDG values on public pages | needs-verification | Public display may be feasible with citation and caveats, but each selected indicator/series needs metadata, custodian-source and terms review. |
| Use for real-time claims | not-allowed | The SDG Global Database is annual/periodic and updated through release cycles, not real-time. |
| Use for company-level ESG claims | not-allowed | Country/region SDG indicators should not be used as company or facility performance evidence. |
| Use in calculator/report outputs | needs-verification | Possible future benchmark/context use only after terms, attribution, cache/snapshot, methodology and output-use rules are approved. |
| Keep mock fallback | confirmed | Existing mock benchmark/ESG datasets must remain available and clearly labelled until approval. |

Recommendation: keep UN SDG API at `researching-license`. It is a high-value official benchmark source, but production use needs indicator-level metadata, source/custodian notes and legal/output-use checks.

## 2. Access Method

| Check | Status | Notes |
|---|---|---|
| Global SDG Indicators Database exists | confirmed | UNSD publishes the Global SDG Indicators Database through the SDG data portal. |
| SDG OpenAPI/Swagger exists | confirmed | UNSD publishes an SDG API Swagger interface for official SDG data. |
| SDG API V5 Swagger exists | confirmed | UNSD also publishes a newer SDG API V5 Swagger page. |
| SDMX API documentation exists | confirmed | UNSD publishes an SDMX-SDGs Data API Manual. |
| SDG Metadata API exists | confirmed | UNSD publishes an SDG Metadata API for reference metadata. |
| Manual/database download access exists | needs-verification | The SDG portal and database may provide downloads, but exact file/export routes need review before connector work. |
| Official access path selected for connector | needs-verification | Decide whether first Track & Tote ingestion should use OpenAPI, SDMX API, metadata API, downloads or manually reviewed snapshots. |

## 3. API Availability

| Check | Status | Notes |
|---|---|---|
| Public SDG data API available | confirmed | The SDG API allows exploration of official SDG data reported by custodian agencies. |
| SDMX API available | confirmed | UNSD documentation says the SDG Global Database is available through the UNSD SDMX API. |
| Metadata API available | confirmed | The SDG Metadata API provides SDMX metadata reports. |
| API key requirement | confirmed | No API key requirement was identified for reviewed public SDG API/SDMX API pages. Verify before connector work. |
| Numeric API rate limit | needs-verification | No fixed numeric request-per-minute/hour limit was confirmed in reviewed official documentation. |
| Pagination/filtering behavior | needs-verification | Connector design must document paging, query filters, dimensions, retries and failure behavior. |
| Direct chart-to-source calls | not-allowed | Track & Tote must not call UN SDG APIs directly from React chart components. |

## 4. Download/Manual Extraction Requirements

| Check | Status | Notes |
|---|---|---|
| Database UI available | confirmed | The SDG database interface supports indicator, country and dimension exploration. |
| Metadata repository available | confirmed | The metadata repository provides reference metadata and downloads for indicators. |
| Official indicator list available | confirmed | The SDG site links to the official list of global SDG indicators. |
| Tier classification available | confirmed | The SDG site links to tier classification resources. |
| Metadata update process documented | confirmed | The metadata page describes IAEG-SDG review before data are published in the database. |
| Exact indicator/series selected | needs-verification | Need selected goal, target, indicator, series code, geography and dimensions before connector work. |
| Extraction rules documented | needs-verification | Need exact API query, dimensions, units, time fields, footnotes/source notes and missing-value behavior per selected indicator. |
| Manual review step required | confirmed | First production snapshot should be manually reviewed because indicators carry metadata, source and comparability caveats. |

## 5. Attribution/Citation Requirements

| Check | Status | Notes |
|---|---|---|
| Attribution required | confirmed | UNdata Terms say data/metadata may be copied and distributed if UNdata is cited as the reference. |
| UNSD/Global SDG Database citation needed | confirmed | SDG-backed charts should cite UNSD and the Global SDG Indicators Database. |
| Custodian/source notes needed | confirmed | SDG indicators are reported by custodian agencies; chart metadata should preserve source/custodian notes where relevant. |
| Final Track & Tote attribution text | needs-verification | Must be finalized per selected indicator/series before production public charts or reports. |
| UN endorsement may be implied | not-allowed | Track & Tote must not imply UN, UNSD or custodian-agency approval, certification, endorsement or partnership. |

## 6. Licence/Terms Structure

| Check | Status | Notes |
|---|---|---|
| UNdata Terms reviewed | confirmed | UNdata Terms allow free copying, duplication and further distribution if UNdata is cited. |
| UNdata disclaimer reviewed | confirmed | UNdata disclaims guarantees around accuracy, reliability, correctness, timeliness and fitness for purpose. |
| UN general terms reviewed | needs-verification | UN general website terms should be reviewed for logo, emblem, naming and broader website-use restrictions before production. |
| SDG API-specific terms reviewed | needs-verification | Need to confirm whether the SDG API inherits UNdata terms or has any additional terms. |
| Selected indicator source terms reviewed | needs-verification | Custodian agencies/source databases may have indicator-specific responsibilities or notes that need review. |
| Third-party/source database limitations reviewed | needs-verification | UNdata says quality/limitations should be obtained from the organization responsible for the source database. |

## 7. Commercial Reuse

| Check | Status | Notes |
|---|---|---|
| Free copying/distribution under UNdata Terms | confirmed | UNdata Terms allow free copying, duplication and distribution with citation. |
| Commercial use of selected indicators | needs-verification | Commercial reuse is not approved until SDG API terms, selected source/custodian notes and Track & Tote output use are reviewed. |
| Paid report or calculator output use | needs-verification | Do not use UN SDG indicators in future paid/reporting products until output-use rules are approved. |
| Company-level ESG claims | not-allowed | Country-level SDG indicators should not support company/facility ESG claims. |
| Marketing implication of official approval | not-allowed | Do not use UN/SDG references to imply validation of Track & Tote. |

## 8. Redistribution

| Check | Status | Notes |
|---|---|---|
| Redistribution under UNdata Terms | confirmed | UNdata Terms allow data/metadata to be copied, duplicated and further distributed if cited. |
| Redistribution of selected indicator data | needs-verification | Must check SDG API-specific terms and selected custodian/source notes before raw or transformed redistribution. |
| Republishing raw SDG API responses | not-allowed | Do not host raw SDG API responses or downloads from Track & Tote until redistribution policy is approved. |
| Publishing extracted raw tables | needs-verification | Needs review before exposing raw values or downloads. |
| Publishing derived charts | needs-verification | Likely feasible for approved indicators with attribution and caveats, but not production-approved yet. |
| Sharing cached snapshots externally | needs-verification | Needs cache/snapshot and redistribution policy before public archives, reports or downloads. |

## 9. Caching/Snapshotting

| Check | Status | Notes |
|---|---|---|
| Caching needed for Track & Tote architecture | confirmed | Project rules require connector -> normalizer -> cache/snapshot -> API endpoint -> chart. |
| Direct public-source calls from chart components | not-allowed | Never fetch UN SDG APIs directly from React chart components. |
| Snapshot strategy required | confirmed | SDG data are revised and updated periodically, so approved values should be stored as source snapshots with retrieval/update metadata. |
| Cache retrieved_at metadata | confirmed | Required by Track & Tote source governance. |
| Cache latest_observation metadata | confirmed | Required for annual/periodic charts. |
| Cache indicator metadata | confirmed | Required for definitions, dimensions, units, source notes and comparability caveats. |
| Cache licence and attribution metadata | needs-verification | Must retain exact citation and terms notes for selected indicators. |
| Indefinite raw response retention | needs-verification | Needs terms, redistribution and retention policy before raw responses are stored indefinitely. |
| Snapshot use for official reports | needs-verification | Future report outputs should use saved snapshots only after terms, attribution and caveat rules are approved. |

## 10. Derived Charts/Public Display

| Check | Status | Notes |
|---|---|---|
| SDG indicator benchmark charts | needs-verification | Intended use case, pending selected indicator metadata/terms review. |
| India/country context charts | needs-verification | Intended use case, pending country and indicator validation. |
| Country comparison charts | needs-verification | Possible with caveats; definitions, data sources, disaggregation and missing values must be visible. |
| Annual/periodic benchmark context | needs-verification | Intended use case; charts must not imply live updates. |
| Real-time dashboards | not-allowed | UN SDG data should not be presented as live or real-time. |
| Company-level ESG charts | not-allowed | Country SDG data cannot evidence company/facility ESG performance. |
| Mock-data public display | confirmed | Current charts may use labelled mock benchmark data until connector approval. |

## 11. Use In Calculator/Report Outputs

| Check | Status | Notes |
|---|---|---|
| Calculator logic now | not-applicable | No calculator is being built in this phase. |
| Future calculator benchmark input | needs-verification | Possible contextual benchmark only after terms, attribution, snapshot and methodology rules are approved. |
| Future report output | needs-verification | Needs saved snapshot ID, indicator code/name, retrieved-at date, dimensions, source notes, unit and citation text. |
| Company ESG scoring | not-allowed | Do not use SDG country indicators to score or certify a company or facility. |
| Compliance or assurance evidence | not-allowed | SDG indicators should not be treated as compliance-grade company evidence. |
| Use without method/source disclosure | not-allowed | SDG-backed values must not be shown without indicator, unit, source, period and caveat context. |

## 12. Required Metadata Fields For Every UN SDG Chart

Every future UN SDG-backed chart must expose at least:

- `source`
- `source_url`
- `dataset_url`
- `api_url`
- `metadata_url`
- `goal`
- `target`
- `indicator_name`
- `indicator_code`
- `series_name`
- `series_code`
- `country_or_area`
- `country_code`
- `m49_code`
- `region_or_group`
- `geography_level`
- `unit`
- `dimensions`
- `disaggregation`
- `sex`
- `age`
- `location`
- `time_window`
- `frequency`
- `latest_observation`
- `retrieved_at`
- `database_update_date`
- `license_name`
- `license_url`
- `attribution_text`
- `custodian_agency`
- `data_source_note`
- `footnote`
- `methodology_note`
- `confidence`
- `source_readiness_status`
- `transformation_notes`
- `known_limitations`
- `mock_fallback_dataset`

Recommended additional fields:

- `api_endpoint`
- `api_query`
- `sdmx_key`
- `dataflow`
- `data_structure_definition`
- `tier_classification`
- `observation_status`
- `data_flag`
- `reporting_type`
- `revision_note`
- `comparability_note`
- `missing_value_note`
- `report_snapshot_id`

## 13. Versioning/Update Requirements

| Requirement | Status | Notes |
|---|---|---|
| Store goal/target/indicator/series code | confirmed | Required for reproducibility and stable references. |
| Store source URLs | confirmed | Keep database page, API endpoint and metadata URL. |
| Store retrieval date | confirmed | Needed for audit trail and citation. |
| Store database update date | needs-verification | The database page reports update dates; connector should retain update/release metadata where available. |
| Store latest observation | confirmed | Required by Track & Tote chart metadata. |
| Store dimension metadata | confirmed | Required to avoid mixing disaggregated and aggregate series. |
| Store metadata version/date | needs-verification | SDG metadata are periodically reviewed and updated; connector should store reference metadata version/date where available. |
| Compare across revisions | needs-verification | Trend charts must account for definition, source or revision changes over time. |
| Archive approved snapshots | needs-verification | Needs terms/permission and retention policy. |

## 14. Methodology/Caveat Requirements

| Requirement | Status | Notes |
|---|---|---|
| Indicator metadata reviewed | needs-verification | Every selected indicator needs its SDG metadata reviewed before production use. |
| IAEG-SDG metadata approval caveat documented | confirmed | The metadata repository says no data are published until corresponding metadata are approved by IAEG-SDGs. |
| Custodian agency documented | confirmed | Selected indicator metadata should identify custodian agencies or data compilers. |
| Country/geography convention documented | confirmed | SDG data and metadata use UN/M49 conventions; designations do not imply UN opinion on legal status. |
| Missing values caveat documented | confirmed | SDG indicators can have uneven country/year/disaggregation coverage. |
| Disaggregation caveat documented | needs-verification | Disaggregated series must not be mixed with aggregate values without clear labels. |
| Revision/update caveat documented | confirmed | UNdata Terms say data may be revised/updated periodically according to source availability. |
| Fitness-for-purpose disclaimer documented | confirmed | UNdata disclaims guarantees around fitness for use and accuracy. |

## 15. Risks And Unknowns

| Risk or unknown | Status | Notes |
|---|---|---|
| SDG API-specific terms | needs-verification | Need to confirm if SDG API has additional terms beyond UNdata/UN website terms. |
| Selected custodian-source restrictions | needs-verification | Some indicators may involve custodian/source databases with separate notes or limitations. |
| Commercial report/calculator use | needs-verification | Especially important for future paid or formal reporting products. |
| Raw response redistribution | needs-verification | Avoid raw response hosting or downloads until approved. |
| Indicator comparability | confirmed | Metadata, sources, units and disaggregation vary by indicator and country. |
| Data revisions | confirmed | Periodic database updates can revise values and metadata. |
| No fixed numeric API rate limit found | needs-verification | Connector must use conservative request behavior. |
| Company/facility misuse risk | confirmed | Country-level SDG indicators should not be overused for company ESG claims. |

## 16. Approval Decision

Production approval: `not approved yet`

UN SDG API is not approved for production connectors, public real-data charts, calculator outputs, or report outputs until these are completed:

1. Select exact SDG API/SDMX access path, goals, targets, indicator codes, series codes, dimensions and geographies.
2. Verify SDG API/database terms, UNdata terms, selected custodian-source notes and any additional restrictions.
3. Finalize attribution, citation, disclaimer and non-endorsement language.
4. Confirm commercial reuse and public display for Track & Tote use cases.
5. Confirm redistribution and cache/snapshot retention rules.
6. Define API request behavior, fallback behavior, refresh cadence and failure handling.
7. Document indicator definitions, custodian agency, source notes, units, dimensions, missing values, revisions and comparability caveats.
8. Decide whether any future report/calculator use is permitted, and under what boundaries.
9. Keep mock fallback available and clearly labelled.

## Primary References

- [UN SDG Indicators](https://unstats.un.org/sdgs/)
- [Global SDG Indicators Database](https://unstats.un.org/sdgs/dataportal/database)
- [UNSD SDG API Swagger](https://unstats.un.org/sdgapi/swagger/)
- [UNSD SDG API V5 Swagger](https://unstats.un.org/sdgs/UNSDGAPIV5/swagger/index.html)
- [SDMX-SDGs Data API Manual](https://unstats.un.org/sdgs/files/SDMX_SDG_API_MANUAL.pdf)
- [SDG Metadata Repository](https://unstats.un.org/sdgs/metadata/)
- [SDG Metadata API](https://unstats.un.org/SDGMetadataAPI/swagger/index.html)
- [UNdata Terms and Conditions of Use](https://data.un.org/Host.aspx?Content=UNdataUse)
- [United Nations Terms of Use](https://www.un.org/en/about-us/terms-of-use)
