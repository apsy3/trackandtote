# Climate TRACE Verification Checklist

Purpose: verify whether Climate TRACE can be safely used for Track & Tote public pages and any future calculator or reporting work before a connector is built.

Last reviewed: 2026-06-04

Source readiness: `researching-license`

Production approval: `not approved yet`

Status key:

- `confirmed` - supported by reviewed Climate TRACE documentation.
- `needs-verification` - plausible or partially supported, but not approved for Track & Tote production use.
- `not-allowed` - should not be done at this stage.
- `not-applicable` - not relevant to this source or phase.

## 1. Summary Recommendation

| Item | Status | Notes |
|---|---|---|
| Use Climate TRACE as a planning source | confirmed | Appropriate candidate for emissions context, country/sector/source benchmark context and monthly/release-based emissions notes. |
| Build a Track & Tote connector | not-allowed | Do not build until licence, attribution, external-source exceptions, cache, redistribution, beta API, versioning, methodology and report/calculator-use rules are approved. |
| Use Climate TRACE values on public pages | needs-verification | Public display may be feasible with attribution and caveats, but selected dataset/version/sector terms must be reviewed first. |
| Use for real-time claims | not-allowed | Climate TRACE is monthly/release-based and modeled; it should not be described as real-time. |
| Use as official inventory evidence | not-allowed | Do not describe Climate TRACE as an official national inventory unless a selected use case and methodology explicitly support that framing. |
| Use for company-level reporting | needs-verification | Not approved. Source-level estimates may be useful context, but company reporting requires licence, method, uncertainty and attribution review. |
| Use in calculator/report outputs | needs-verification | Possible future context or benchmark use only after licence, attribution, cache/snapshot, methodology and output-use rules are approved. |
| Keep mock fallback | confirmed | Existing mock monthly-emissions and ghg-emissions datasets/routes must remain available and clearly labelled until approval. |

Recommendation: keep Climate TRACE at `researching-license`. It is promising for emissions context, but external datasets, modeled estimates, beta API caveats and output-use questions need governance before production use.

## 2. Access Method

| Check | Status | Notes |
|---|---|---|
| Official Climate TRACE website exists | confirmed | Climate TRACE publishes a public inventory, data download page, terms page and API reference. |
| Bulk download access exists | confirmed | The data page provides sector and country download packages. |
| Public API access exists | confirmed | Climate TRACE publishes an API reference for emissions sources, rankings, administrative areas, cities, owners and definitions. |
| Country/territory inventory exists | confirmed | Climate TRACE provides a public country/territory inventory page. |
| Methodology documents exist | confirmed | Climate TRACE provides sector methodology documents and a data/schema/citation guide. |
| Official access path selected for connector | needs-verification | Decide whether the first Track & Tote source should use bulk downloads, API endpoints, or a manually reviewed source snapshot. |

## 3. API Availability

| Check | Status | Notes |
|---|---|---|
| API reference available | confirmed | The API reference documents endpoints for sources, source details, source emissions, country rankings, administrative areas, cities, owners and definitions. |
| API version identified | confirmed | The reviewed API reference showed v7.1.8. |
| API supports source-level queries | confirmed | API documentation describes searching/ranking emitting sources and retrieving source details/emissions. |
| API supports aggregated country rankings | confirmed | API documentation includes country ranking endpoints. |
| API supports monthly source details | confirmed | API documentation describes monthly data for source details from January 2021 through the current year. |
| API key requirement | needs-verification | No API key requirement was identified in the reviewed public reference, but this must be confirmed before connector work. |
| API rate limits | needs-verification | No fixed numeric rate limit was confirmed. Climate TRACE asks users to keep volume low and use caution in production. |
| API production availability | needs-verification | Climate TRACE describes the API as beta and says availability is not guaranteed. |
| Direct chart-to-source calls | not-allowed | Track & Tote must not call Climate TRACE APIs directly from React chart components. |

## 4. Download/Manual Extraction Requirements

| Check | Status | Notes |
|---|---|---|
| Annual country-level CSVs available | confirmed | Download packages include annual country-level emissions by subsector and gas. |
| Monthly source-level CSVs available | confirmed | Download packages include monthly source-level emissions, confidence and ownership where available. |
| Data schema guidance available | confirmed | Download packages include a detailed data schema, and the data guide describes key fields. |
| Confidence data available | confirmed | Download packages include source-level confidence files for monitored sources. |
| Ownership data available where possible | confirmed | Download packages include ownership information where available. |
| Geospatial data available | confirmed | The data page describes geopackage downloads and higher-resolution geospatial files for selected sectors. |
| Extraction rules documented | needs-verification | Need exact file names, columns, sector/subsector names, gas names, units, source IDs, geography fields and confidence fields per selected dataset. |
| Manual review step required | confirmed | First production snapshot should be manually reviewed because methodology, external sources and confidence vary by sector. |

## 5. Attribution/Citation Requirements

| Check | Status | Notes |
|---|---|---|
| Attribution required | confirmed | Climate TRACE data are under CC BY 4.0 unless otherwise noted, so attribution is required. |
| Suggested citation exists | confirmed | Climate TRACE provides suggested citation guidance in its data guide. |
| Version citation required | confirmed | Every chart/report should include inventory version/release when available. |
| Access date required | confirmed | The suggested citation pattern includes the accessed date. |
| External-source attribution required | needs-verification | Selected sectors/subsectors may include external datasets with separate attribution or terms. |
| Final Track & Tote attribution text | needs-verification | Must be finalized per selected dataset/version before production public charts or reports. |
| Climate TRACE endorsement may be implied | not-allowed | Track & Tote must not imply Climate TRACE approval, certification, endorsement or partnership. |

## 6. Licence/Terms Structure

| Check | Status | Notes |
|---|---|---|
| Terms page reviewed | confirmed | Climate TRACE terms describe CC BY 4.0 data licensing and external-dataset exceptions. |
| CC BY 4.0 licence identified | confirmed | Climate TRACE states emissions data and associated metadata are available under CC BY 4.0, unless otherwise noted. |
| External-dataset exceptions listed | confirmed | Terms list external sources such as EDGAR, FAOSTAT, E-PRTR, EPA FLIGHT, LMOP and other source/ownership datasets. |
| User responsibility stated | confirmed | Climate TRACE says users are responsible for reviewing source terms and conditions for external datasets. |
| Selected dataset licence reviewed | needs-verification | Every selected sector/subsector/source/geography must be checked for external-source restrictions. |
| Trademark restrictions reviewed | needs-verification | Climate TRACE name/logo are trademarks; Track & Tote should use source names only for attribution and avoid brand misuse. |

## 7. Commercial Reuse

| Check | Status | Notes |
|---|---|---|
| Commercial use under CC BY 4.0 | confirmed | CC BY 4.0 generally permits commercial use with attribution and change indication. |
| Commercial use of selected Climate TRACE views | needs-verification | Must confirm whether selected data relies on external datasets with different terms. |
| Commercial report or calculator output | needs-verification | Do not use Climate TRACE in future paid/reporting products until output-use rules are approved. |
| Company-level reporting use | needs-verification | Source-level estimates may be sensitive; company reporting requires legal, method and uncertainty review. |
| Marketing implication of official approval | not-allowed | Do not use Climate TRACE references to imply validation of Track & Tote. |

## 8. Redistribution

| Check | Status | Notes |
|---|---|---|
| Redistribution under CC BY 4.0 | confirmed | Climate TRACE terms state users may copy, modify and distribute data under CC BY 4.0, unless exceptions apply. |
| Redistribution of selected data | needs-verification | Must check external-source restrictions before redistributing selected raw or transformed data. |
| Republishing raw Climate TRACE files | not-allowed | Do not host raw CSV/geopackage/download packages from Track & Tote until redistribution policy is approved. |
| Publishing extracted raw tables | needs-verification | Needs review before exposing raw values or downloads. |
| Publishing derived charts | needs-verification | Likely feasible for approved views with attribution and caveats, but not production-approved yet. |
| Sharing cached snapshots externally | needs-verification | Needs cache/snapshot and redistribution policy before public archives, reports or downloads. |

## 9. Caching/Snapshotting

| Check | Status | Notes |
|---|---|---|
| Caching needed for Track & Tote architecture | confirmed | Project rules require connector -> normalizer -> cache/snapshot -> API endpoint -> chart. |
| Direct public-source calls from chart components | not-allowed | Never fetch Climate TRACE APIs or downloads directly from React chart components. |
| Versioned snapshot strategy required | confirmed | Climate TRACE data and models evolve, so approved values should be stored as source snapshots with version/release metadata. |
| Cache retrieved_at metadata | confirmed | Required by Track & Tote source governance. |
| Cache latest_observation metadata | confirmed | Required for monthly/release-based charts. |
| Cache source version and file/API metadata | confirmed | Needed for reproducibility across releases. |
| Cache methodology and confidence notes | confirmed | Required because confidence and method vary by sector/subsector/source. |
| Indefinite raw file retention | needs-verification | CC BY may permit retention, but external-source exceptions and redistribution rules must be checked first. |
| Snapshot use for official reports | needs-verification | Future report outputs should use saved snapshots only after licence, attribution and caveat rules are approved. |

## 10. Derived Charts/Public Display

| Check | Status | Notes |
|---|---|---|
| Country emissions context charts | needs-verification | Intended use case, pending dataset/version, attribution, gas, sector and method review. |
| Sector benchmark charts | needs-verification | Intended use case, pending sector/subsector methodology and external-source review. |
| Source/facility estimate charts | needs-verification | Possible where available, but requires confidence, uncertainty, ownership and method caveats. |
| Monthly emissions context charts | needs-verification | Possible where supported, but copy must describe monthly/release-based estimates, not real-time monitoring. |
| Official inventory claims | not-allowed | Climate TRACE should not be presented as an official national inventory. |
| Company-level reporting charts | needs-verification | Not approved until licence, methodology, uncertainty and attribution rules are reviewed. |
| Mock-data public display | confirmed | Current public pages may continue to use clearly labelled mock emissions charts. |

## 11. Use In Calculator/Report Outputs

| Check | Status | Notes |
|---|---|---|
| Calculator logic now | not-applicable | No calculator is being built in this phase. |
| Future calculator benchmark input | needs-verification | Possible contextual benchmark only after licence, attribution, snapshot and methodology rules are approved. |
| Future report output | needs-verification | Needs saved snapshot ID, inventory version, retrieved-at date, selected files/endpoints, gas/sector/unit metadata and citation text. |
| Company emissions accounting | not-allowed | Climate TRACE should not be used as a direct company accounting method unless future legal/method review explicitly permits it. |
| Compliance or assurance evidence | not-allowed | Modeled public emissions estimates should not be treated as compliance-grade evidence. |
| Use without confidence/method disclosure | not-allowed | Source-level or monthly estimates must not be shown without method, confidence and caveat context. |

## 12. Required Metadata Fields For Every Climate TRACE Chart

Every future Climate TRACE-backed chart must expose at least:

- `source`
- `source_url`
- `dataset_url`
- `api_url`
- `download_url`
- `inventory_version`
- `release_version`
- `release_date`
- `source_id`
- `source_name`
- `source_type`
- `sector`
- `subsector`
- `gas`
- `emissions_quantity_units`
- `country`
- `iso3_country`
- `admin_area`
- `city_or_region`
- `geography_level`
- `latitude`
- `longitude`
- `geometry_ref`
- `temporal_granularity`
- `time_window`
- `frequency`
- `latest_observation`
- `retrieved_at`
- `license_name`
- `license_url`
- `attribution_text`
- `external_source_note`
- `confidence`
- `uncertainty_note`
- `source_readiness_status`
- `methodology_notes`
- `transformation_notes`
- `known_limitations`
- `mock_fallback_dataset`

Recommended additional fields:

- `file_name`
- `file_format`
- `file_hash`
- `api_endpoint`
- `api_query_params`
- `owner_name`
- `ownership_note`
- `capacity`
- `capacity_units`
- `activity`
- `activity_units`
- `emissions_factor`
- `emissions_factor_units`
- `created_date`
- `modified_date`
- `projection_flag`
- `model_version_note`
- `comparability_note`
- `report_snapshot_id`

## 13. Versioning Requirements

| Requirement | Status | Notes |
|---|---|---|
| Store inventory version | confirmed | The reviewed data guide identifies Climate TRACE Inventory May 2026, Version 5.7.0. |
| Store release date | confirmed | Release date is needed for monthly/release-based data. |
| Store source URLs | confirmed | Keep source page, data page, API endpoint and selected download URLs. |
| Store retrieval date | confirmed | Needed for audit trail and citation. |
| Store file/API identity | needs-verification | Use file name, endpoint, query parameters and ideally file hash once cache rules are approved. |
| Store selected gas/sector/subsector metadata | confirmed | Required to avoid mixing CO2, CH4, N2O, CO2e and pollutant views. |
| Store current-year projection flag | needs-verification | Year-to-date estimated/projected values should be labelled separately from completed-year values. |
| Compare across releases | needs-verification | Trend charts must account for model and methodology changes across Climate TRACE releases. |
| Archive approved snapshots | needs-verification | Needs licence/external-source and retention policy. |

## 14. Methodology/Caveat Requirements

| Requirement | Status | Notes |
|---|---|---|
| Modeled-estimate caveat documented | confirmed | Climate TRACE states models produce current best estimates and evolve over time. |
| Third-party source caveat documented | confirmed | Terms say data are modeled from public, licensed and third-party sources or collected from public sources. |
| Accuracy/completeness limitation documented | confirmed | Climate TRACE terms disclaim control over third-party data accuracy, timeliness, completeness and consistency. |
| Sector methodology reviewed | needs-verification | Each selected sector/subsector must be reviewed in its methodology document. |
| Confidence classification reviewed | needs-verification | Confidence fields need interpretation rules before public charts. |
| Uncertainty availability reviewed | needs-verification | Climate TRACE says uncertainty estimates are available for all sectors on request; Track & Tote needs a policy for whether/how to use them. |
| Geographic boundary caveat documented | confirmed | Climate TRACE terms describe GADM/GHSL boundary sources and non-endorsement of legal status. |
| Ownership caveat documented | needs-verification | Ownership information comes from varied sources and should not be overclaimed. |
| Projection/current-year caveat documented | needs-verification | Year-to-date estimated/projected values with latency should be labelled separately. |

## 15. Risks And Unknowns

| Risk or unknown | Status | Notes |
|---|---|---|
| External-source licence exceptions | confirmed | Climate TRACE terms list external sources with potentially different specific terms. |
| Selected chart may mix licence regimes | needs-verification | Country, sector or source views may include external datasets with different terms. |
| Commercial reuse unclear for intended outputs | needs-verification | Especially important for future calculator/report products. |
| Redistribution of raw and transformed data | needs-verification | Avoid raw file hosting or public data downloads until approved. |
| API beta reliability | confirmed | Climate TRACE says API availability is not guaranteed. |
| No fixed numeric API rate limit found | needs-verification | Connector must implement conservative request behavior. |
| Model/version comparability | needs-verification | Release-to-release model updates may affect trends and benchmarks. |
| Source/facility name and ownership risk | confirmed | Names and ownership data can be incomplete, inferred or sourced externally. |
| Not official inventory data | confirmed | Treat as modeled independent estimates unless a selected use case says otherwise. |
| Company/facility misuse risk | confirmed | Source-level estimates should not be used for company reporting without separate approval. |

## 16. Approval Decision

Production approval: `not approved yet`

Climate TRACE is not approved for production connectors, public real-data charts, calculator outputs, or report outputs until these are completed:

1. Select exact Climate TRACE dataset/version/release/API endpoint for each chart.
2. Verify CC BY 4.0 attribution and all selected external-source exceptions.
3. Finalize citation, disclaimer, external-source and non-endorsement language.
4. Confirm commercial reuse and public display for Track & Tote use cases.
5. Confirm redistribution and cache/snapshot retention rules.
6. Define API request behavior, fallback behavior, refresh cadence and beta-API failure handling.
7. Document sector/subsector/source methodology, confidence, uncertainty, geospatial boundary and current-year projection caveats.
8. Decide whether any future calculator/report/company-level use is permitted, and under what boundaries.
9. Keep mock fallback available and clearly labelled.

## Primary References

- [Climate TRACE official website](https://climatetrace.org/)
- [Climate TRACE Data Downloads](https://climatetrace.org/data)
- [Climate TRACE API Reference](https://api.climatetrace.org/)
- [Climate TRACE Terms of Use](https://climatetrace.org/terms)
- [Climate TRACE May 2026 Data Licensing, Schema, and Citation Guide](https://media.climatetrace.org/about_the_data_latest_b6e7b8d419.pdf)
- [Climate TRACE methodology documents on GitHub](https://github.com/climatetracecoalition/methodology-documents)
- [Climate TRACE Country/Territory Inventory](https://climatetrace.org/inventory)
