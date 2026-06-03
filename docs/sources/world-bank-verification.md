# World Bank Indicators / ESG Verification Checklist

Purpose: verify whether World Bank Indicators and World Bank Sovereign ESG data can be safely used for Track & Tote public pages and any future calculator or reporting work before a connector is built.

Last reviewed: 2026-06-04

Source readiness: `researching-license`

Production approval: `not approved yet`

Status key:

- `confirmed` - supported by reviewed World Bank documentation.
- `needs-verification` - plausible or partially supported, but not approved for Track & Tote production use.
- `not-allowed` - should not be done at this stage.
- `not-applicable` - not relevant to this source or phase.

## 1. Summary Recommendation

| Item | Status | Notes |
|---|---|---|
| Use World Bank as a planning source | confirmed | Appropriate candidate for country-level ESG, development, GDP, population, energy, health, labour and annual benchmark context. |
| Build a Track & Tote connector | not-allowed | Do not build until selected indicators, licence metadata, attribution, cache, redistribution, API-use, and disclaimer rules are approved. |
| Use World Bank values on public pages | needs-verification | Public display may be feasible, but each selected dataset/indicator needs metadata and licence review. |
| Use for real-time claims | not-allowed | World Bank indicators are annual or periodic and often lagged/revised. |
| Use in calculator/report outputs | needs-verification | Possible future benchmark use only after licence, attribution, cache/snapshot, disclaimer and quality caveats are approved. |
| Keep mock fallback | confirmed | Existing mock World Bank/ESG datasets must remain available and clearly labelled until approval. |

Recommendation: keep World Bank Indicators / ESG at `researching-license`. It is a high-value source for benchmark context, but it is not production-approved yet.

## 2. API Access

| Check | Status | Notes |
|---|---|---|
| Public data portal access exists | confirmed | World Bank Data and the Sovereign ESG Data Portal are publicly accessible. |
| Indicators API documentation exists | confirmed | World Bank publishes V2 Indicators API documentation and basic call structures. |
| API supports country/economy indicator time series | confirmed | Basic API calls support country, topic, source, indicator and time-series query patterns. |
| API response formats documented | confirmed | API examples document XML and JSON response formats; CSV-like/export paths are available through some tools. |
| API pagination documented | confirmed | V2 API responses support pagination fields such as page, pages, per_page and total. |
| ESG portal data access path selected | needs-verification | Decide whether to use Indicators API, ESG portal download, DataBank/API, or another official access path for ESG indicators. |
| State/subnational India coverage | needs-verification | Most World Bank indicators are country/economy-level; use state-level context only where an official selected dataset supports it. |
| Chart components may call World Bank directly | not-allowed | Track & Tote must keep connector -> normalizer -> cache/snapshot -> API endpoint -> chart. |

## 3. API Key Requirements

| Check | Status | Notes |
|---|---|---|
| Indicators API requires API key | confirmed | World Bank Indicators API documentation says API keys and other authentication methods are no longer necessary. |
| Secret handling needed now | not-applicable | No connector is being built and no credentials should be added. |
| Future credential storage plan | needs-verification | If any selected World Bank-adjacent service requires credentials later, credentials must stay outside committed files and frontend code. |

## 4. Rate Limits Or Usage Limits

| Check | Status | Notes |
|---|---|---|
| Fixed numeric V2 API rate limit published | needs-verification | No fixed numeric request-per-minute/hour limit was found in reviewed V2 Indicators API docs. |
| Reasonable-use restriction exists | confirmed | World Bank Dataset Terms prohibit request volume that exceeds reasonable use or is excessive or abusive. |
| SDMX data-point limit exists | confirmed | World Bank SDMX API documentation states a 15,000 data-point limit per call. |
| Pagination behavior understood | needs-verification | Connector design must document page sizes, retries, pagination, batching, and failure behavior. |
| Cache refresh cadence approved | needs-verification | Annual/periodic indicators should not be fetched on every page load. |

## 5. Attribution/Citation Requirements

| Check | Status | Notes |
|---|---|---|
| Attribution required | confirmed | World Bank Dataset Terms require attribution to The World Bank and its data providers in the indicated metadata format. |
| Provider/source attribution required | confirmed | The terms require attribution to data providers where metadata indicates them. |
| Final Track & Tote attribution text | needs-verification | Must be finalized per selected dataset/indicator before production use. |
| Indicator metadata retention | needs-verification | Connector must retain indicator code, indicator name, database/source, country/economy, date range, retrieved-at, URL and licence/disclaimer note. |
| World Bank endorsement may be implied | not-allowed | World Bank terms prohibit implying sponsorship, endorsement, approval, association or affiliation. |

## 6. Licence/Terms Structure

| Check | Status | Notes |
|---|---|---|
| Dataset Terms reviewed | confirmed | World Bank Terms of Use for Datasets provide the governing default terms for datasets made available through World Bank data platforms. |
| Default licence for World Bank-produced datasets | confirmed | World Bank-produced datasets are generally under Creative Commons Attribution 4.0 International unless specifically labelled otherwise. |
| Data Catalog licence metadata exists | confirmed | World Bank Data Catalog documents standard public licences, custom licences and no-redistribution categories. |
| Third-party/source-specific restrictions | needs-verification | Selected indicators may use non-World-Bank data providers or custom restrictions and must be checked. |
| ESG portal-specific licence interpretation | needs-verification | Confirm ESG portal download and indicator metadata before production use. |
| Disclaimer requirements | needs-verification | Track & Tote should capture World Bank disclaimer and non-endorsement language in source notes where needed. |

## 7. Commercial Reuse

| Check | Status | Notes |
|---|---|---|
| Commercial use of CC BY 4.0 World Bank-produced datasets | confirmed | CC BY 4.0 generally permits commercial use with attribution, subject to specific dataset labels and restrictions. |
| Commercial use of selected indicators | needs-verification | Must verify each selected indicator/source/licence label before public product or reporting use. |
| Paid report or calculator output use | needs-verification | Do not use World Bank data in future paid outputs until source-specific permissions, attribution and disclaimers are approved. |
| Marketing implication of World Bank endorsement | not-allowed | Do not use World Bank references to imply approval or validation of Track & Tote. |

## 8. Redistribution

| Check | Status | Notes |
|---|---|---|
| Redistribution of default CC BY 4.0 World Bank-produced datasets | confirmed | CC BY 4.0 generally permits sharing and adaptation with attribution, subject to dataset-specific restrictions. |
| Redistribution of selected indicators | needs-verification | Must check Data Catalog/metadata for no-redistribution or custom licence labels. |
| Republishing raw API responses | needs-verification | Needs review before exposing raw cached data or downloads from Track & Tote. |
| Publishing derived charts | needs-verification | Likely feasible for approved indicators with attribution and caveats, but not production-approved yet. |
| Sharing cached snapshots externally | needs-verification | Needs explicit cache/snapshot policy before reports or public archives. |

## 9. Caching/Snapshotting

| Check | Status | Notes |
|---|---|---|
| Caching needed for Track & Tote architecture | confirmed | Project rules require connector -> normalizer -> cache/snapshot -> API endpoint -> chart. |
| Direct API calls from chart components | not-allowed | Never call World Bank APIs directly from React chart components. |
| Annual/periodic data should be cached | confirmed | Annual benchmark data should not be refetched on every page load. |
| Cache retrieved_at metadata | confirmed | Required by Track & Tote source governance. |
| Cache latest_observation metadata | confirmed | Required by Track & Tote source governance. |
| Cache dataset/source/licence metadata | needs-verification | Connector must retain licence labels and source/provider metadata for selected indicators. |
| Indefinite raw response retention | not-allowed | Do not decide indefinite retention until redistribution and report snapshot rules are approved. |
| Snapshot use for official reports | needs-verification | Report outputs should use saved snapshots only after licence, attribution and caveat rules are approved. |

## 10. Derived Charts/Public Display

| Check | Status | Notes |
|---|---|---|
| Country-level ESG indicator charts | needs-verification | Intended use case, but each selected indicator requires metadata/licence review. |
| GDP/population/energy/health/labour benchmark charts | needs-verification | Intended use case; verify source, definitions, units, comparability and update cadence. |
| India country-context charts | needs-verification | Use India country-level data after selected indicator validation. |
| India state-level charts | needs-verification | Only if an official selected World Bank dataset includes valid subnational data. |
| Real-time dashboards | not-allowed | World Bank data should not be presented as live or real-time. |
| Mock-data public display | confirmed | Current charts may use labelled mock data until connector approval. |

## 11. Use In Calculator/Report Outputs

| Check | Status | Notes |
|---|---|---|
| Calculator logic now | not-applicable | No calculator is being built in this phase. |
| Future calculator benchmark input | needs-verification | Possible contextual benchmark only after selected indicators and output-use permissions are approved. |
| Future report output | needs-verification | Needs rules for citation, dataset source/provider, licence, retrieved-at date, snapshot ID, caveats and non-endorsement. |
| Use as facility-level evidence | not-allowed | Country-level indicators should not be used as proof of company/facility performance. |
| Use as live compliance evidence | not-allowed | Annual/periodic World Bank data should not be used for live compliance claims. |

## 12. Required Metadata Fields For Every World Bank Chart

Every future World Bank-backed chart must expose at least:

- `source`
- `source_url`
- `dataset_url`
- `api_url`
- `database_or_source`
- `source_id`
- `indicator_code`
- `indicator_name`
- `country_or_economy`
- `country_code`
- `geography_level`
- `unit`
- `time_window`
- `frequency`
- `latest_observation`
- `retrieved_at`
- `license_name`
- `license_url`
- `attribution_text`
- `provider_or_original_source`
- `disclaimer_note`
- `confidence`
- `source_readiness_status`
- `transformation_notes`
- `known_limitations`
- `mock_fallback_dataset`

Recommended additional fields:

- `series_definition`
- `aggregation_method`
- `source_note`
- `source_organization`
- `revision_note`
- `missing_value_note`
- `comparability_note`
- `report_snapshot_id`

## 13. Risks And Unknowns

| Risk or unknown | Status | Notes |
|---|---|---|
| Third-party indicator restrictions | needs-verification | Some indicators may be sourced from external providers with different terms. |
| ESG portal access path | needs-verification | Need to confirm whether the connector should use Indicators API, ESG portal downloads, or another official route. |
| Data lag and revisions | confirmed | Many indicators are annual, lagged and revised over time. |
| Missing values and uneven country coverage | confirmed | Cross-country and India-context charts must handle gaps explicitly. |
| Definition and methodology changes | confirmed | Indicator definitions and methodologies may change; source notes must be retained. |
| No fixed numeric V2 API rate limit found | needs-verification | Connector must implement conservative request behavior. |
| Disclaimer/non-endorsement handling | needs-verification | UI/source notes should avoid implying World Bank validation of Track & Tote claims. |
| State-level India availability | needs-verification | Do not promise state-level coverage without selected dataset support. |

## 14. Approval Decision

Production approval: `not approved yet`

World Bank Indicators / ESG is not approved for production connectors, public real-data charts, calculator outputs, or report outputs until these are completed:

1. Verify selected dataset and indicator metadata, including database/source IDs.
2. Confirm licence labels and third-party restrictions for every selected indicator.
3. Finalize chart/report attribution text and disclaimer language.
4. Confirm commercial reuse and public display for Track & Tote use cases.
5. Confirm redistribution and cache/snapshot retention rules.
6. Define conservative API request behavior, pagination, retries and refresh cadence.
7. Document indicator definitions, units, time windows, source notes, missing values and comparability caveats.
8. Keep mock fallback available and clearly labelled.

## Primary References

- [World Bank Data](https://data.worldbank.org/)
- [World Bank Indicators](https://data.worldbank.org/indicator)
- [World Bank Indicators API documentation](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation)
- [World Bank API basic call structures](https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures)
- [World Bank SDMX API queries](https://datahelpdesk.worldbank.org/knowledgebase/articles/1886701-sdmx-api-queries)
- [World Bank Summary Terms of Use](https://data.worldbank.org/summary-terms-of-use)
- [World Bank Terms of Use for Datasets](https://www.worldbank.org/en/about/legal/terms-of-use-for-datasets)
- [World Bank Data Access And Licensing](https://datacatalog.worldbank.org/public-licenses)
- [World Bank Terms and Conditions](https://www.worldbank.org/en/about/legal/terms-and-conditions)
- [World Bank Sovereign ESG Data Portal](https://esgdata.worldbank.org/)
- [World Bank Sovereign ESG Data Portal download page](https://esgdata.worldbank.org/data/download)
