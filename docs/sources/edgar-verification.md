# EDGAR Emissions Database Verification Checklist

Purpose: verify whether the EDGAR emissions database can be safely used for Track & Tote public pages and any future calculator or reporting work before a connector is built.

Last reviewed: 2026-06-04

Source readiness: `researching-license`

Production approval: `not approved yet`

Status key:

- `confirmed` - supported by reviewed EDGAR / European Commission / JRC documentation.
- `needs-verification` - plausible or partially supported, but not approved for Track & Tote production use.
- `not-allowed` - should not be done at this stage.
- `not-applicable` - not relevant to this source or phase.

## 1. Summary Recommendation

| Item | Status | Notes |
|---|---|---|
| Use EDGAR as a planning source | confirmed | Appropriate candidate for India total GHG emissions trend context, country/sector benchmark context, annual emissions notes and release-based comparisons. |
| Build a Track & Tote connector | not-allowed | Do not build until licence, attribution, IEA-EDGAR CO2 restrictions, cache, redistribution, versioning, methodology and report/calculator-use rules are approved. |
| Use EDGAR values on public pages | needs-verification | Public display may be possible for selected datasets with attribution and caveats, but it is not production-approved yet. |
| Use for real-time claims | not-allowed | EDGAR is annual/release-based. It must not be described as real-time or near-real-time. |
| Use for company-level emissions calculations | not-allowed | EDGAR is suitable for aggregate context only unless a future methodology and licence review explicitly approves a narrow use case. |
| Use in calculator/report outputs | needs-verification | Possible future benchmark or context use only after licence, attribution, cache/snapshot, methodology and output-use rules are approved. |
| Keep mock fallback | confirmed | Existing mock GHG and monthly emissions datasets/routes must remain available and clearly labelled until approval. |

Recommendation: keep EDGAR at `researching-license`. It is a high-value emissions context source, but EDGAR_2025_GHG includes IEA-EDGAR CO2 with CC BY-NC-ND 4.0 restrictions, so Track & Tote should not treat it as production-ready.

## 2. Access Method

| Check | Status | Notes |
|---|---|---|
| Official EDGAR website exists | confirmed | EDGAR is published by the European Commission Joint Research Centre. |
| Emissions Data and Maps page exists | confirmed | EDGAR provides dataset pages for greenhouse gases, air pollutants, temporal profiles and other emissions datasets. |
| EDGAR_2025_GHG page identified | confirmed | The reviewed GHG release is `EDGAR_2025_GHG`, covering annual country/sector totals for 1970-2024 and monthly products for selected GHG views. |
| JRC Data Catalogue entry exists | confirmed | EDGAR has a JRC Data Catalogue collection, but dataset-specific access and terms must still be checked on the EDGAR page. |
| Access is primarily file/download based | confirmed | Current access is through EDGAR web pages, data explorer views and downloadable ZIP/XLSX/XLS/NetCDF files, not a public API. |
| Official access path selected for connector | needs-verification | Decide whether future ingestion should use EDGAR dataset pages, JRC catalogue links, report downloads, or a manually reviewed snapshot workflow. |

## 3. API Availability

| Check | Status | Notes |
|---|---|---|
| Public EDGAR API identified | not-applicable | No official public API was identified for the reviewed EDGAR dataset. |
| API key required | not-applicable | No API identified. |
| Rate-limit policy for API calls | not-applicable | No API identified; future access is expected to be file/download based. |
| Direct chart-to-source calls | not-allowed | Track & Tote must not call EDGAR download pages from React chart components. |
| Connector style | needs-verification | Future connector would likely be a versioned file ingestion/extraction workflow, not a live API connector. |

## 4. Download/Manual Extraction Requirements

| Check | Status | Notes |
|---|---|---|
| Annual country/sector files are downloadable | confirmed | EDGAR_2025_GHG lists downloadable time-series files by gas, sector and country. |
| Monthly files are downloadable | confirmed | EDGAR_2025_GHG includes monthly totals by sector and country for selected GHG products. |
| Gridded files are downloadable | confirmed | EDGAR provides gridmap products, including 0.1 x 0.1 degree gridded datasets where relevant. |
| Report data downloads are available | confirmed | The 2025 report page includes PDF/XLSX downloads for report and country-emissions context. |
| File format handling documented | needs-verification | Connector design must document ZIP, XLSX/XLS, CSV-like table and NetCDF handling before implementation. |
| Extraction rules documented | needs-verification | Need exact tables, sheets, columns, gas names, sector codes, units, country codes and LULUCF treatment for every selected file. |
| Manual review step required | confirmed | Because EDGAR is versioned and method-heavy, the first production source snapshot should be manually reviewed before public use. |

## 5. Attribution/Citation Requirements

| Check | Status | Notes |
|---|---|---|
| Dataset-level acknowledgement required | confirmed | EDGAR dataset pages require users to acknowledge the source and refer to the dataset page and/or relevant reports. |
| Report citation exists | confirmed | The EDGAR 2025 report page and EDGAR_2025_GHG page include report citation guidance. |
| Underlying data citation exists | confirmed | EDGAR_2025_GHG includes specific citation guidance for the EDGAR Community GHG Database and IEA-EDGAR CO2 component. |
| IEA-related contact path exists | confirmed | EDGAR points users to IEA contacts for IEA data and terms questions. |
| Final Track & Tote attribution text | needs-verification | Must be finalized per selected dataset/version before production public charts, reports or snapshots. |
| EDGAR/JRC/IEA endorsement may be implied | not-allowed | Track & Tote must not imply approval, endorsement, certification or partnership by EDGAR, JRC, the European Commission or IEA. |

## 6. Licence/Terms Structure

| Check | Status | Notes |
|---|---|---|
| EDGAR terms page reviewed | confirmed | EDGAR terms require users to consult the full citation and conditions of use on each dataset webpage. |
| EU-owned material default licence identified | confirmed | EDGAR_2025_GHG states that EU-owned material is CC BY 4.0 unless otherwise noted. |
| IEA-EDGAR CO2 licence identified | confirmed | EDGAR_2025_GHG states that IEA-EDGAR CO2 (v4) is licensed under CC BY-NC-ND 4.0 based on IEA data. |
| Dataset-specific licence controls use | confirmed | EDGAR terms point users to the conditions of use on each specific dataset page. |
| Selected file licence reviewed | needs-verification | Each gas/sector/country/grid product must be checked before public use or caching. |
| Disclaimer requirements captured | needs-verification | EDGAR/European Commission/IEA disclaimer language should be summarized in source metadata and report notes where relevant. |

## 7. Commercial Reuse

| Check | Status | Notes |
|---|---|---|
| Commercial use of EU-owned CC BY 4.0 material | confirmed | CC BY 4.0 generally allows commercial reuse with attribution and change indication, subject to dataset-specific notices. |
| Commercial use of IEA-EDGAR CO2 | not-allowed | Do not use IEA-EDGAR CO2 in commercial outputs unless IEA approval or a clearly permitted use path is confirmed. |
| Commercial use of selected EDGAR charts | needs-verification | Must verify whether the selected chart uses only EU-owned CC BY 4.0 material or includes IEA-restricted components. |
| Paid reports or calculator outputs | needs-verification | Do not use EDGAR in future paid/reporting products until licence, attribution, cache and output terms are approved. |
| Marketing implication of official approval | not-allowed | Do not use EDGAR/JRC/IEA references to imply validation of Track & Tote. |

## 8. Redistribution

| Check | Status | Notes |
|---|---|---|
| Redistribution of EU-owned CC BY 4.0 material | confirmed | CC BY 4.0 generally permits sharing and adaptation with attribution and change indication. |
| Redistribution of IEA-EDGAR CO2 | needs-verification | CC BY-NC-ND creates restrictions on commercial use and derivatives; raw and transformed redistribution must be reviewed. |
| Republishing raw EDGAR files | not-allowed | Do not host raw EDGAR ZIP/XLSX/XLS/NetCDF files from Track & Tote until redistribution rules are explicitly approved. |
| Publishing extracted raw tables | needs-verification | Needs dataset-specific licence and IEA restriction review before exposing raw values or downloads. |
| Publishing derived charts | needs-verification | Likely feasible for some approved views with attribution and caveats, but not production-approved yet. |
| Sharing cached snapshots externally | needs-verification | Needs cache/snapshot and redistribution policy before public archives, reports or downloads. |

## 9. Caching/Snapshotting

| Check | Status | Notes |
|---|---|---|
| Caching needed for Track & Tote architecture | confirmed | Project rules require connector -> normalizer -> cache/snapshot -> API endpoint -> chart. |
| Direct public-source calls from chart components | not-allowed | Never fetch EDGAR files directly from React chart components. |
| Versioned snapshot strategy required | confirmed | EDGAR is release-based, so approved values should be stored as immutable source snapshots with dataset version metadata. |
| Cache retrieved_at metadata | confirmed | Required by Track & Tote source governance. |
| Cache latest_observation metadata | confirmed | Required for annual/versioned charts. |
| Cache source version and file metadata | confirmed | Required for reproducibility across EDGAR releases. |
| Cache methodology and transformation notes | confirmed | Required because sector mappings, gas treatment and units shape interpretation. |
| Indefinite raw file retention | not-allowed | Do not decide retention of raw EDGAR files until redistribution and IEA-related restrictions are approved. |
| Snapshot use for official reports | needs-verification | Future report outputs should use saved, versioned snapshots only after licence, attribution and caveat rules are approved. |

## 10. Derived Charts/Public Display

| Check | Status | Notes |
|---|---|---|
| India total GHG emissions trend | needs-verification | Intended use case, pending licence, citation, gas aggregation, LULUCF and GWP-basis review. |
| Country/sector emissions benchmark charts | needs-verification | Intended use case, pending dataset/version, sector-code and unit review. |
| Annual/release-based emissions context | needs-verification | Intended use case; chart copy must describe release/version cadence, not live updates. |
| Monthly emissions context | needs-verification | Possible for selected EDGAR monthly products, but requires documentation of temporal-profile method and selected gas/sector coverage. |
| Real-time emissions claims | not-allowed | EDGAR is not a live emissions monitor. |
| Facility/company-level emissions calculations | not-allowed | EDGAR should not be used as proof of company or facility emissions without a separate approved methodology and licence review. |
| Mock-data public display | confirmed | Current public pages may continue to use clearly labelled mock emissions charts. |

## 11. Use In Calculator/Report Outputs

| Check | Status | Notes |
|---|---|---|
| Calculator logic now | not-applicable | No calculator is being built in this phase. |
| Future calculator benchmark input | needs-verification | Possible contextual benchmark only after licence, attribution, snapshot and methodology rules are approved. |
| Future report output | needs-verification | Needs saved snapshot ID, dataset version, retrieved-at date, selected files, gas/sector/unit metadata and citation text. |
| Scope or company emissions calculation | not-allowed | EDGAR values should not be used for company-level emissions accounting unless a future approved method explicitly permits it. |
| Use without version/method disclosure | not-allowed | EDGAR-backed values must not be shown without dataset version, unit, selected gas/sector, date range and caveat context. |

## 12. Required Metadata Fields For Every EDGAR Chart

Every future EDGAR-backed chart must expose at least:

- `source`
- `source_url`
- `dataset_url`
- `download_url`
- `dataset_name`
- `dataset_version`
- `release_year`
- `report_reference`
- `gas`
- `sector`
- `sector_code`
- `country`
- `country_code`
- `geography_level`
- `unit`
- `gwp_basis`
- `lulucf_treatment`
- `time_window`
- `frequency`
- `latest_observation`
- `retrieved_at`
- `license_name`
- `license_url`
- `attribution_text`
- `iea_restriction_note`
- `disclaimer_note`
- `confidence`
- `source_readiness_status`
- `methodology_notes`
- `transformation_notes`
- `known_limitations`
- `mock_fallback_dataset`

Recommended additional fields:

- `file_name`
- `file_format`
- `file_hash`
- `sheet_name`
- `table_name`
- `grid_resolution`
- `ipcc_sector_mapping`
- `fast_track_flag`
- `revision_note`
- `missing_value_note`
- `comparability_note`
- `report_snapshot_id`

## 13. Versioning Requirements

| Requirement | Status | Notes |
|---|---|---|
| Store dataset version | confirmed | EDGAR versions are central to interpretation and reproducibility. |
| Store release year | confirmed | Release year must be displayed or stored for all source-backed values. |
| Store source URLs | confirmed | Keep source page, dataset page, download URL and report URL. |
| Store retrieval date | confirmed | Needed for audit trail and source governance. |
| Store source file identity | needs-verification | Use file name and ideally file hash once redistribution/cache rules allow local snapshots. |
| Store selected gas/sector/unit metadata | confirmed | Required to avoid mixing fossil CO2, bio CO2, CH4, N2O, F-gases or CO2eq views. |
| Compare across releases | needs-verification | Trend charts must account for methodology/version changes across EDGAR releases. |
| Archive approved snapshots | needs-verification | Needs licence/permission and retention policy. |

## 14. Methodology/Caveat Requirements

| Requirement | Status | Notes |
|---|---|---|
| Emission-estimation method described | confirmed | EDGAR methodology uses activity data, technology-based emission factors and spatial allocation. |
| International statistics and source data described | confirmed | EDGAR uses multiple official/scientific source inputs, including IEA and FAO inputs for relevant sectors. |
| GWP basis documented | confirmed | EDGAR_2025_GHG expresses GHG emissions in CO2eq using IPCC AR5 GWP values. |
| LULUCF treatment documented | needs-verification | Some EDGAR report views include or exclude LULUCF; selected chart treatment must be explicit. |
| Recent-year Fast Track caveat documented | confirmed | EDGAR_2025_GHG extends latest years with Fast Track methods; charts should not overstate recent-year certainty. |
| Gridded data caveat documented | confirmed | Gridded products use spatial proxies and should not be interpreted as direct facility measurements. |
| Country/territory naming caveat documented | confirmed | Country labels and boundaries follow harmonized lists and may not reflect official legal positions. |
| IEA-EDGAR CO2 caveat documented | confirmed | Fossil CO2 includes IEA-EDGAR CO2 and carries additional licence/use restrictions. |

## 15. Risks And Unknowns

| Risk or unknown | Status | Notes |
|---|---|---|
| IEA-EDGAR CO2 restrictions | confirmed | CC BY-NC-ND restrictions create a major blocker for commercial, derivative or report-output use without approval. |
| Selected chart may mix licence regimes | needs-verification | Total GHG and CO2eq views may combine components with different underlying restrictions. |
| Commercial reuse unclear for intended outputs | needs-verification | Especially important for future calculator/report products. |
| Redistribution of raw and transformed data unclear | needs-verification | Avoid raw file hosting or public data downloads until approved. |
| Method/version comparability | needs-verification | Cross-release changes can affect trends and benchmarks. |
| Recent-year uncertainty | confirmed | Fast Track estimates should be labelled as estimates/context, not final national inventories. |
| Not national official inventory | confirmed | EDGAR is an independent scientific inventory; do not present it as a country's official submitted inventory. |
| No public API | confirmed | Future implementation must be file/version based. |
| Company/facility misuse risk | confirmed | Aggregate EDGAR values should not be used for company-level claims without a separate method. |

## 16. Approval Decision

Production approval: `not approved yet`

EDGAR is not approved for production connectors, public real-data charts, calculator outputs, or report outputs until these are completed:

1. Select exact EDGAR dataset/version and files for each chart.
2. Verify dataset-specific licence and conditions of use, including IEA-EDGAR CO2 restrictions.
3. Finalize attribution, citation, disclaimer and non-endorsement language.
4. Confirm commercial reuse and public display for Track & Tote use cases.
5. Confirm redistribution and cache/snapshot retention rules.
6. Define extraction logic, validation checks and versioned snapshot handling.
7. Document gas, sector, country, unit, GWP basis, LULUCF treatment, Fast Track treatment and methodology caveats.
8. Decide whether any future calculator/report use is permitted, and under what boundaries.
9. Keep mock fallback available and clearly labelled.

## Primary References

- [EDGAR official website](https://edgar.jrc.ec.europa.eu/)
- [EDGAR Emissions Data and Maps](https://edgar.jrc.ec.europa.eu/emissions_data_and_maps)
- [EDGAR_2025_GHG dataset page](https://edgar.jrc.ec.europa.eu/dataset_ghg2025)
- [EDGAR Terms of Use](https://edgar.jrc.ec.europa.eu/terms)
- [EDGAR Methodology](https://edgar.jrc.ec.europa.eu/methodology)
- [JRC Data Catalogue EDGAR collection](https://data.jrc.ec.europa.eu/collection/EDGAR)
- [GHG emissions of all world countries - 2025 Report](https://edgar.jrc.ec.europa.eu/report_2025)
