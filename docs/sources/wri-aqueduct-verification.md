# WRI Aqueduct Verification Checklist

Purpose: verify whether WRI Aqueduct can be safely used for Track & Tote public pages and any future calculator or reporting work before a connector is built.

Last reviewed: 2026-06-04

Source readiness: `researching-license`

Production approval: `not approved yet`

Status key:

- `confirmed` - supported by reviewed WRI/Aqueduct documentation.
- `needs-verification` - plausible or partially supported, but not approved for Track & Tote production use.
- `not-allowed` - should not be done at this stage.
- `not-applicable` - not relevant to this source or phase.

## 1. Summary Recommendation

| Item | Status | Notes |
|---|---|---|
| Use WRI Aqueduct as a planning source | confirmed | Appropriate candidate for water stress and water risk context, India/country/basin/location benchmark context and periodic/versioned risk-layer notes. |
| Build a Track & Tote connector | not-allowed | Do not build until selected product/version, licence, attribution, cache, redistribution, access method, methodology and report/calculator-use rules are approved. |
| Use Aqueduct values on public pages | needs-verification | Public display may be feasible with attribution and caveats, but selected dataset/version/indicator terms must be reviewed first. |
| Use for real-time water measurement | not-allowed | WRI FAQ says Aqueduct does not show real-time data. |
| Use for facility-level risk decisions | needs-verification | Aqueduct can screen locations, but local/regional deep dives are needed for decisions; facility-level use requires method and licence review. |
| Use in calculator/report outputs | needs-verification | Possible future context or screening use only after licence, attribution, cache/snapshot, methodology and output-use rules are approved. |
| Keep mock fallback | confirmed | Existing mock water-risk datasets/routes must remain available and clearly labelled until approval. |

Recommendation: keep WRI Aqueduct at `researching-license`. It is a strong public water-risk context source, but Track & Tote should preserve a clear screening-tool caveat and verify exact dataset/version, attribution, snapshots and facility-use boundaries before production use.

## 2. Access Method

| Check | Status | Notes |
|---|---|---|
| Official Aqueduct project page exists | confirmed | WRI publishes Aqueduct as a suite of water-risk tools. |
| Aqueduct Water Risk Atlas exists | confirmed | WRI describes the Water Risk Atlas as a tool to map/analyze current and future water risks across locations. |
| Aqueduct 4.0 data page exists | confirmed | WRI publishes Aqueduct 4.0 Current and Future Global Maps Data. |
| GitHub public documentation exists | confirmed | WRI's Aqueduct40 repository contains public documentation, data dictionaries, change logs and production scripts. |
| Data downloads exist | confirmed | WRI says Aqueduct data and methodology are documented and available for download. |
| Official access path selected for connector | needs-verification | Decide whether first Track & Tote ingestion should use WRI downloads, GitHub source files, a manually reviewed snapshot, or a verified API endpoint. |

## 3. API Availability

| Check | Status | Notes |
|---|---|---|
| Stable public API documentation identified | not-applicable | No stable official public API reference was identified in reviewed sources. |
| API key required | not-applicable | No approved API access path identified. |
| API rate limits | not-applicable | Not applicable unless a future official API endpoint is selected and verified. |
| Tool/backend endpoints for automated use | needs-verification | Do not rely on internal or undocumented tool endpoints without explicit review. |
| Direct chart-to-source calls | not-allowed | Track & Tote must not call Aqueduct tool endpoints directly from React chart components. |
| Connector style | needs-verification | Future connector should likely be download/snapshot based unless a documented API is approved. |

## 4. Download/Manual Extraction Requirements

| Check | Status | Notes |
|---|---|---|
| Aqueduct 4.0 dataset documented | confirmed | The data page describes 13 baseline annual indicators, 3 baseline monthly indicators and 6 future annual indicators. |
| Data dictionaries available | confirmed | Aqueduct40 documentation includes data dictionaries for Water Risk Atlas and Country Rankings downloads. |
| Change logs available | confirmed | Aqueduct40 documentation includes logs of changes among versions. |
| Technical note available | confirmed | WRI links to the Aqueduct 4.0 technical note for methodology and calculations. |
| Exact file set selected | needs-verification | Need exact dataset, download file, indicator and geography files before connector work. |
| Extraction rules documented | needs-verification | Need exact columns, indicator codes, score/label fields, scenario fields, baseline/future periods and geometry keys. |
| Manual review step required | confirmed | First production snapshot should be manually reviewed because this is an index-based screening dataset with multiple indicators and scenarios. |

## 5. Attribution/Citation Requirements

| Check | Status | Notes |
|---|---|---|
| Attribution required | confirmed | Aqueduct FAQ says users may share, reproduce or adapt Aqueduct data/maps as long as they attribute WRI's Aqueduct tool. |
| Suggested citation exists | confirmed | Aqueduct40 README provides a suggested citation for Aqueduct 4.0. |
| CC BY 4.0 attribution required | confirmed | CC BY 4.0 requires attribution and change indication where applicable. |
| Final Track & Tote attribution text | needs-verification | Must be finalized per selected dataset/version before production public charts or reports. |
| WRI endorsement may be implied | not-allowed | Track & Tote must not imply WRI approval, certification, endorsement or partnership. |
| Third-party input attribution | needs-verification | Aqueduct methods use research partners and underlying inputs; selected chart notes should preserve required citations where relevant. |

## 6. Licence/Terms Structure

| Check | Status | Notes |
|---|---|---|
| Aqueduct licence identified | confirmed | WRI says Aqueduct products, methodologies and datasets are available under CC BY 4.0. |
| Aqueduct40 repository licence identified | confirmed | The repository states the dataset is licensed under CC BY 4.0. |
| WRI open data policy reviewed | confirmed | WRI says CC BY 4.0 is its standard licence for publications and data. |
| WRI permissions guidance reviewed | confirmed | WRI says most site material carries a Creative Commons licence but third-party chart data may require permission from original owners. |
| WRI general terms reviewed | confirmed | WRI general terms govern website use and intellectual property. |
| Selected dataset terms reviewed | needs-verification | Every selected Aqueduct product/file/version should be checked before production use. |
| Third-party input restrictions reviewed | needs-verification | Underlying model/data inputs and partner materials may require citation or caveat handling. |

## 7. Commercial Reuse

| Check | Status | Notes |
|---|---|---|
| Commercial reuse under CC BY 4.0 | confirmed | CC BY 4.0 generally permits commercial reuse with attribution and change indication. |
| Commercial use of selected Aqueduct indicators | needs-verification | Must verify exact dataset/version and any third-party or WRI terms before Track & Tote production use. |
| Paid report or calculator output use | needs-verification | Do not use Aqueduct in future paid/reporting products until output-use rules are approved. |
| Facility-level risk decisions | needs-verification | Not approved without method, local-data caveats and output-use review. |
| Marketing implication of official approval | not-allowed | Do not use WRI/Aqueduct references to imply validation of Track & Tote. |

## 8. Redistribution

| Check | Status | Notes |
|---|---|---|
| Redistribution under CC BY 4.0 | confirmed | CC BY 4.0 generally permits sharing and adaptation with attribution and change indication. |
| Redistribution of selected data | needs-verification | Must check selected dataset/version and WRI terms before raw or transformed redistribution. |
| Republishing raw Aqueduct files | not-allowed | Do not host raw Aqueduct downloads from Track & Tote until redistribution policy is approved. |
| Publishing extracted raw tables | needs-verification | Needs review before exposing raw values or downloads. |
| Publishing derived charts | needs-verification | Likely feasible for approved indicators with attribution and caveats, but not production-approved yet. |
| Sharing cached snapshots externally | needs-verification | Needs cache/snapshot and redistribution policy before public archives, reports or downloads. |

## 9. Caching/Snapshotting

| Check | Status | Notes |
|---|---|---|
| Caching needed for Track & Tote architecture | confirmed | Project rules require connector -> normalizer -> cache/snapshot -> API endpoint -> chart. |
| Direct public-source calls from chart components | not-allowed | Never fetch Aqueduct downloads or tool endpoints directly from React chart components. |
| Versioned snapshot strategy required | confirmed | Aqueduct is periodic/versioned, so approved values should be stored as source snapshots with version metadata. |
| Cache retrieved_at metadata | confirmed | Required by Track & Tote source governance. |
| Cache latest_observation or reference period metadata | confirmed | Required because Aqueduct indicators use baseline/future periods, not live observation dates. |
| Cache indicator methodology metadata | confirmed | Required for screening-tool caveats and index interpretation. |
| Cache licence and attribution metadata | needs-verification | Must retain exact citation and licence notes for selected datasets. |
| Indefinite raw file retention | needs-verification | Needs licence, redistribution and retention policy before raw files are stored indefinitely. |
| Snapshot use for official reports | needs-verification | Future report outputs should use saved snapshots only after licence, attribution and caveat rules are approved. |

## 10. Derived Charts/Public Display

| Check | Status | Notes |
|---|---|---|
| Water stress context charts | needs-verification | Intended use case, pending selected indicator/version/method review. |
| India/country benchmark charts | needs-verification | Intended use case, pending geography and indicator validation. |
| Basin/location screening charts | needs-verification | Possible for screening context, but local-data caveats must be prominent. |
| Future projection charts | needs-verification | Possible where scenario/period is clearly documented. |
| Real-time water measurement charts | not-allowed | Aqueduct is not a live water measurement source. |
| Facility-level decision charts | needs-verification | Not approved without methodology, local-data and output-use review. |
| Mock-data public display | confirmed | Current charts may use labelled mock water-risk data until connector approval. |

## 11. Use In Calculator/Report Outputs

| Check | Status | Notes |
|---|---|---|
| Calculator logic now | not-applicable | No calculator is being built in this phase. |
| Future calculator benchmark input | needs-verification | Possible contextual screening input only after licence, attribution, snapshot and methodology rules are approved. |
| Future report output | needs-verification | Needs saved snapshot ID, indicator code/name, version, period/scenario, geography, source notes, unit/score and citation text. |
| Facility/site decision support | needs-verification | Aqueduct should not be treated as sufficient for facility-level decisions without local/regional verification. |
| Compliance or assurance evidence | not-allowed | Aqueduct risk scores should not be treated as compliance-grade evidence. |
| Use without method/source disclosure | not-allowed | Aqueduct-backed values must not be shown without indicator, version, period/scenario, source and caveat context. |

## 12. Required Metadata Fields For Every WRI Aqueduct Chart

Every future Aqueduct-backed chart must expose at least:

- `source`
- `source_url`
- `dataset_url`
- `download_url`
- `documentation_url`
- `dataset_name`
- `dataset_version`
- `aqueduct_product`
- `indicator_name`
- `indicator_code`
- `indicator_category`
- `score`
- `score_label`
- `unit_or_scale`
- `country`
- `country_code`
- `basin_or_catchment`
- `admin_area`
- `location`
- `latitude`
- `longitude`
- `geography_level`
- `baseline_or_projection`
- `scenario`
- `reference_period`
- `frequency`
- `latest_observation`
- `retrieved_at`
- `license_name`
- `license_url`
- `attribution_text`
- `methodology_note`
- `local_data_caveat`
- `confidence`
- `source_readiness_status`
- `transformation_notes`
- `known_limitations`
- `mock_fallback_dataset`

Recommended additional fields:

- `file_name`
- `file_format`
- `file_hash`
- `geometry_id`
- `hydrological_model`
- `climate_model`
- `projection_year`
- `ssp_or_scenario`
- `ranking_percentile`
- `revision_note`
- `comparability_note`
- `missing_value_note`
- `report_snapshot_id`

## 13. Versioning/Update Requirements

| Requirement | Status | Notes |
|---|---|---|
| Store Aqueduct version | confirmed | Aqueduct versions materially affect interpretation. |
| Store product name | confirmed | Water Risk Atlas, Country Rankings, Food and Floods serve different use cases. |
| Store source URLs | confirmed | Keep WRI page, data page, GitHub documentation and selected download URLs. |
| Store retrieval date | confirmed | Needed for audit trail and citation. |
| Store reference period | confirmed | Aqueduct baseline and projection values use reference periods rather than live observation timestamps. |
| Store scenario/projection fields | confirmed | Required for future projection charts. |
| Store indicator dictionary metadata | needs-verification | Needed to avoid indicator-code and score-bin errors. |
| Compare across versions | needs-verification | Trend or before/after views must account for changed models and indicators. |
| Archive approved snapshots | needs-verification | Needs licence/permission and retention policy. |

## 14. Methodology/Caveat Requirements

| Requirement | Status | Notes |
|---|---|---|
| Screening-tool caveat documented | confirmed | WRI FAQ describes Aqueduct datasets as screening tools for prioritization. |
| Not-real-time caveat documented | confirmed | WRI FAQ says Aqueduct does not show real-time data. |
| Local-deep-dive caveat documented | confirmed | WRI says Aqueduct should be augmented by local and regional deep dives for priority locations. |
| Index/non-observation caveat documented | confirmed | WRI data page says key elements such as overall water risk cannot be directly measured and are not validated in the same way as observations. |
| Indicator definition reviewed | needs-verification | Each selected indicator needs its data dictionary and technical note reviewed. |
| Spatial-resolution caveat reviewed | needs-verification | Basin/catchment/location use must account for hydrological model resolution and geography mapping. |
| Future projection caveat documented | needs-verification | Projection charts must name scenario, period and model assumptions. |
| Country/basin comparability caveat documented | confirmed | Cross-country and basin comparisons require consistent version/indicator definitions. |

## 15. Risks And Unknowns

| Risk or unknown | Status | Notes |
|---|---|---|
| Facility-level misuse risk | confirmed | Aqueduct can screen locations but should not replace local/site assessment. |
| No stable public API identified | confirmed | Connector should be download/snapshot-first unless API docs are later verified. |
| Commercial report/calculator use | needs-verification | CC BY helps, but output-use rules and WRI terms need project-specific approval. |
| Raw file redistribution | needs-verification | Avoid raw file hosting or downloads until approved. |
| Version/model comparability | confirmed | Aqueduct versions can produce different scores due to model/input changes. |
| Future projections uncertainty | confirmed | Scenario/model assumptions must be visible. |
| Index interpretation risk | confirmed | Overall water risk is a composite index and should not be overinterpreted. |
| Location data privacy | confirmed | WRI FAQ says Aqueduct does not store uploaded location data; Track & Tote must avoid introducing private-location uploads unless explicitly requested later. |

## 16. Approval Decision

Production approval: `not approved yet`

WRI Aqueduct is not approved for production connectors, public real-data charts, calculator outputs, or report outputs until these are completed:

1. Select exact Aqueduct product, dataset version, indicator codes, geography and period/scenario.
2. Verify licence and terms for the selected dataset and output use.
3. Finalize attribution, citation, disclaimer and non-endorsement language.
4. Confirm commercial reuse and public display for Track & Tote use cases.
5. Confirm redistribution and cache/snapshot retention rules.
6. Define download/snapshot access method, fallback behavior, refresh cadence and failure handling.
7. Document indicator definitions, score/label interpretation, spatial resolution, local-data caveats, projection assumptions and version comparability.
8. Decide whether any future report/calculator/facility-level use is permitted, and under what boundaries.
9. Keep mock fallback available and clearly labelled.

## Primary References

- [WRI Aqueduct](https://www.wri.org/aqueduct)
- [Aqueduct Water Risk Atlas](https://www.wri.org/data/aqueduct-water-risk-atlas)
- [Aqueduct 4.0 Current and Future Global Maps Data](https://www.wri.org/data/aqueduct-global-maps-40-data)
- [Aqueduct FAQ](https://www.wri.org/aqueduct/faq)
- [Aqueduct 4.0 Public Documentation on GitHub](https://github.com/wri/Aqueduct40)
- [WRI Open Data Commitment](https://www.wri.org/data/open-data-commitment)
- [WRI Permissions and Licensing](https://www.wri.org/research/permissions-licensing)
- [WRI General Terms of Use](https://www.wri.org/about/legal/general-terms-use)
