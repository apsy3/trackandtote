# data.gov.in Verification Checklist

Purpose: verify whether specific data.gov.in datasets can be safely used for Track & Tote public pages and any future calculator or reporting work before a connector is built.

Last reviewed: 2026-06-04

Source readiness: `researching-license`

Production approval: `not approved yet`

Status key:

- `confirmed` - supported by reviewed official data.gov.in, OGD Platform or Government Open Data Licence - India documentation.
- `needs-verification` - plausible or partially supported, but not approved for Track & Tote production use.
- `not-allowed` - should not be done at this stage.
- `not-applicable` - not relevant to this source or phase.

## 1. Summary Recommendation

| Item | Status | Notes |
|---|---|---|
| Use data.gov.in as a planning source | confirmed | Suitable candidate for India public datasets from official ministries, departments, states and organizations. |
| Treat data.gov.in as one approved source | not-allowed | The portal hosts many datasets. Each selected dataset/resource needs separate metadata, licence, provider and methodology review. |
| Build a Track & Tote connector | not-allowed | Do not build until one exact resource is selected and licence, attribution, API, cache, redistribution, methodology and output-use rules are approved. |
| Use data.gov.in values on public pages | needs-verification | Public display may be feasible for selected resources, but only after dataset-specific checks. |
| Use for real-time claims | not-allowed | Not allowed unless a selected dataset proves near-real-time status, update cadence and observation/retrieval metadata. |
| Use in calculator/report outputs | needs-verification | Possible future context/factor use only after dataset-specific licence, methodology, quality, cache and report-use approval. |
| Keep mock fallback | confirmed | Mock data must remain available and labelled until each selected resource is approved. |

Recommendation: keep data.gov.in at `researching-license`. The portal is useful, but production approval must happen dataset by dataset.

## 2. Access Method

| Check | Status | Notes |
|---|---|---|
| Official portal exists | confirmed | data.gov.in is the Open Government Data Platform India. |
| Catalog/resource pages exist | confirmed | The portal publishes catalogs and resources from contributing government providers. |
| API-accessible datasets exist | confirmed | The APIs page says users can access datasets through API URLs using an API key or download datasets in desired format. |
| Download/manual access exists | confirmed | The help guidance describes publishing resources in open data formats, and API page mentions downloads. |
| Exact dataset/resource selected | needs-verification | Required before any connector design. |
| Provider ministry/department identified | needs-verification | Required because content ownership, methodology and update responsibility sit with the provider. |
| Access method selected | needs-verification | Decide per resource whether connector should use API, download, manually reviewed snapshot or another approved path. |

## 3. API Availability

| Check | Status | Notes |
|---|---|---|
| Portal API access exists | confirmed | data.gov.in has an APIs section and help text referencing API URLs and API key access. |
| API key access exists | confirmed | Help text says registered portal users can generate an API key and access API URLs using the API key. |
| API endpoint details selected | needs-verification | Endpoint path, resource ID, field names, filters, pagination and response format must be documented per selected resource. |
| API response schema stable | needs-verification | Schema stability cannot be assumed across portal resources. |
| API failure behavior documented | needs-verification | Future connector must define timeout, stale cache, missing fields and invalid-key behavior. |
| Direct chart-to-source calls | not-allowed | Never call data.gov.in APIs directly from React chart components. |

## 4. API Key Requirements

| Check | Status | Notes |
|---|---|---|
| API key may be required | confirmed | data.gov.in help indicates API key generation and access of API URLs using API key. |
| Key committed to repo | not-allowed | API keys must never be committed to Git, MDX, mock JSON, built static files or frontend bundles. |
| Key exposed in browser | not-allowed | API key handling must stay inside future connector/server-side tooling. |
| Key scope/quota/rotation known | needs-verification | Exact key limits, expiry, account requirements and rotation policy need review before connector work. |
| API key needed now | not-applicable | No connector is being built in this documentation phase. |

## 5. Download/Manual Extraction Requirements

| Check | Status | Notes |
|---|---|---|
| Downloadable resources may exist | confirmed | The API page refers to downloading datasets in desired format, and help guidance lists open formats such as CSV, XLS, ODS, XML, RDF, KML, GML and RSS/ATOM. |
| Exact file format selected | needs-verification | File/API format must be captured per dataset/resource. |
| Manual metadata review required | confirmed | Each selected resource needs provider, licence, frequency, granularity, reference URL, methodology and update-date review. |
| Dataset quality reviewed | needs-verification | Missing values, units, geometry, duplicates, stale records and reporting gaps must be checked per resource. |
| Raw downloaded files stored indefinitely | needs-verification | Retention needs licence, redistribution and snapshot-policy approval. |

## 6. Attribution/Citation Requirements

| Check | Status | Notes |
|---|---|---|
| Source acknowledgement required | confirmed | data.gov.in terms require prominent source acknowledgement when material is published or issued to others. |
| Provider/source/licence attribution required under GODL | confirmed | Government Open Data Licence - India requires an attribution statement with provider, source and licence details where it applies. |
| Final attribution text selected | needs-verification | Must be finalized per dataset/resource using provider, title, date/version, URL and licence metadata. |
| Third-party material cleared | needs-verification | Terms say reproduction permission does not extend to third-party copyrighted material. |
| Endorsement implied | not-allowed | Track & Tote must not imply Government of India, NIC, data.gov.in or provider endorsement. |

## 7. Licence/Terms Structure

| Check | Status | Notes |
|---|---|---|
| data.gov.in Terms of Use reviewed | confirmed | Terms cover disclaimers, source acknowledgement, third-party material, jurisdiction and dataset-level licence metadata. |
| data.gov.in Policies reviewed | confirmed | Policies link to NDSAP, Government Open Data Licence - India and copyright/permission guidance. |
| Government Open Data Licence - India reviewed | confirmed | GODL allows broad lawful commercial and non-commercial use where it applies, subject to conditions. |
| Dataset-level licence metadata controls | confirmed | Terms state catalog information is available under the `license` metadata element of individual dataset records except where otherwise noted. |
| GODL applies to selected resource | needs-verification | Must confirm per resource; do not assume every portal item has the same usable licence state. |
| Additional provider terms reviewed | needs-verification | Provider ministry/department pages or reference URLs may add context or restrictions. |

## 8. Commercial Reuse

| Check | Status | Notes |
|---|---|---|
| Commercial reuse possible under GODL | confirmed | GODL permits use for lawful commercial and non-commercial purposes where it applies. |
| Selected dataset commercial reuse approved | needs-verification | Must verify the selected resource's licence metadata, third-party status, provider notes and output-use context. |
| Paid report/calculator use approved | needs-verification | Future report or calculator use requires explicit dataset-specific review. |
| Use of official logos/marks | not-allowed | GODL excludes names, crests, logos and official symbols; Track & Tote should not use official marks. |
| Use implying government approval | not-allowed | Non-endorsement must be clear. |

## 9. Redistribution

| Check | Status | Notes |
|---|---|---|
| Redistribution possible under GODL | confirmed | GODL permits publishing original, adapted and derivative works where it applies. |
| Raw API response redistribution | needs-verification | Do not republish raw responses until selected-resource licence, provider and portal terms are reviewed. |
| Cached snapshot redistribution | needs-verification | Needs cache, attribution, licence, retention and public-download policy before any snapshot is shared. |
| Derived chart publication | needs-verification | Likely feasible for approved resources with attribution and caveats, but not production-approved yet. |
| Third-party material redistribution | needs-verification | Any third-party-copyright material needs separate authorization. |

## 10. Caching/Snapshotting

| Check | Status | Notes |
|---|---|---|
| Track & Tote cache path required | confirmed | Architecture remains connector -> normalizer -> cache/snapshot -> API endpoint -> chart. |
| Direct public API calls from charts | not-allowed | Chart components must not fetch data.gov.in directly. |
| Store retrieved_at | confirmed | Required by Track & Tote governance. |
| Store latest_observation | confirmed | Required for chart metadata and non-real-time claims. |
| Store provider/source/licence metadata | confirmed | Required for attribution and auditability. |
| Store transformation notes | confirmed | Required where units, geographies, dates or schemas are normalized. |
| Raw response retention | needs-verification | Needs selected-resource licence, redistribution and retention approval. |
| Official reports use snapshots | needs-verification | Future report outputs should use saved, reviewed snapshots only after source approval. |

## 11. Derived Charts/Public Display

| Check | Status | Notes |
|---|---|---|
| India public-data benchmark charts | needs-verification | Intended use case, but approval is resource-specific. |
| Environment, energy, labour, health or safety context | needs-verification | Feasible only after selected-resource metadata and method review. |
| Real-time chart labels | not-allowed | Not allowed unless source-specific update cadence and observation timestamps support near-real-time claims. |
| Public display without licence note | not-allowed | Every chart must show source, frequency, latest observation, retrieved-at timestamp, confidence, status and licence/attribution note where relevant. |
| Official or complete-data implication | not-allowed | Do not imply completeness, official endorsement or fitness for decisions without support. |

## 12. Use In Calculator/Report Outputs

| Check | Status | Notes |
|---|---|---|
| Calculator logic now | not-applicable | No calculator is being built in this phase. |
| Future calculator factors | needs-verification | Only possible for selected datasets with approved licence, methodology, units, temporal coverage, quality and output-use rules. |
| Future report outputs | needs-verification | Need saved snapshot ID, provider attribution, licence, retrieval date, update date, unit, geography, method and caveat notes. |
| Compliance-grade use | not-allowed | data.gov.in values should not be treated as compliance/assurance evidence without a separate legal and methodological basis. |
| Company/facility decisions | not-allowed | Do not use portal data for facility-level risk or performance decisions unless local method, data quality and licence permit it. |

## 13. Required Metadata Fields For Every data.gov.in Chart

Every future data.gov.in-backed chart must expose at least:

- `source`
- `source_url`
- `portal_url`
- `dataset_url`
- `resource_url`
- `api_url`
- `catalog_id`
- `resource_id`
- `provider_name`
- `ministry_or_department`
- `state_or_organization`
- `dataset_title`
- `resource_title`
- `sector`
- `geography`
- `geography_level`
- `unit`
- `dimensions`
- `time_window`
- `frequency`
- `data_last_updated`
- `latest_observation`
- `retrieved_at`
- `license_name`
- `license_url`
- `attribution_text`
- `api_key_required`
- `rate_limit_note`
- `confidence`
- `source_readiness_status`
- `methodology_note`
- `transformation_notes`
- `known_limitations`
- `mock_fallback_dataset`

Recommended additional fields:

- `api_query`
- `file_format`
- `resource_format`
- `schema_version`
- `field_mapping`
- `file_hash`
- `provider_reference_url`
- `third_party_material_note`
- `policy_compliance_note`
- `granularity`
- `missing_value_note`
- `revision_note`
- `report_snapshot_id`

## 14. Dataset-Specific Licence/Metadata Requirements

| Requirement | Status | Notes |
|---|---|---|
| Licence metadata checked | needs-verification | Required for every selected dataset/resource. |
| GODL applicability checked | needs-verification | Confirm whether selected data are published under Government Open Data Licence - India. |
| Provider identified | needs-verification | Provider ministry, department, state or organization must be captured. |
| Third-party material checked | needs-verification | Terms exclude third-party copyrighted material from automatic reproduction permissions. |
| Reference URLs reviewed | needs-verification | Provider reference URLs may contain methodology, copyright or update guidance. |
| Frequency/granularity reviewed | needs-verification | Portal metadata and provider notes must be mapped before any chart. |
| Policy compliance reviewed | needs-verification | Metadata can include policy compliance fields; selected resource must be checked. |

## 15. Versioning/Update Requirements

| Requirement | Status | Notes |
|---|---|---|
| Store retrieved_at | confirmed | Required for audit trail and chart metadata. |
| Store data_last_updated | confirmed | Needed because update cadence is provider-controlled. |
| Store latest_observation | confirmed | Required to avoid false real-time claims. |
| Store provider publication/update metadata | needs-verification | Exact field names and availability vary by resource. |
| Store resource ID and URL | confirmed | Required for reproducibility. |
| Store schema/field mapping | confirmed | Needed because portal resources may change field names or formats. |
| Compare revisions | needs-verification | Future connector should detect schema or value changes across snapshots. |
| Archive approved snapshots | needs-verification | Requires retention and redistribution approval. |

## 16. Methodology/Caveat Requirements

| Requirement | Status | Notes |
|---|---|---|
| Dataset method reviewed | needs-verification | Each selected dataset must be checked for method of calculation, source and collection notes. |
| Units and dates validated | needs-verification | Required before any public chart. |
| Geography mapping validated | needs-verification | Administrative names, codes and boundaries can vary across Indian datasets. |
| Missing values documented | needs-verification | The portal guidance asks publishers to use `NA`, but real resources still need validation. |
| Update-frequency caveat documented | confirmed | Do not imply live status unless the selected dataset proves it. |
| Provider disclaimer visible where needed | needs-verification | Chart/source notes should reflect provider and portal disclaimers when relevant. |

## 17. Risks And Unknowns

| Risk or unknown | Status | Notes |
|---|---|---|
| Portal heterogeneity | confirmed | data.gov.in is a portal with many providers, schemas and update patterns. |
| Dataset-level licence variation | confirmed | Terms point to individual dataset `license` metadata. |
| Third-party copyright material | needs-verification | Must be checked before reuse. |
| API key exposure | confirmed | API keys must be protected if connector work begins. |
| Fixed rate limits not documented for Track & Tote | needs-verification | Future connector must use conservative requests until exact limits are known. |
| Stale data risk | confirmed | Portal terms and GODL do not guarantee continuous updated data supply. |
| Methodology gaps | needs-verification | Some resources may lack enough method detail for strong claims. |
| Calculator/report misuse | confirmed | Dataset-dependent values can be misused as compliance factors without approval. |

## 18. Approval Decision

Production approval: `not approved yet`

data.gov.in is not approved for production connectors, public real-data charts, calculator outputs or report outputs until these are completed for each selected dataset/resource:

1. Select exact dataset/catalog/resource and provider ministry, department, state or organization.
2. Verify selected-resource licence metadata, Government Open Data Licence - India applicability, third-party material status and provider terms.
3. Finalize attribution, citation, licence and non-endorsement language.
4. Confirm commercial reuse, public display and future report/calculator output rules.
5. Confirm API key handling, rate/usage limits, query parameters, pagination, refresh cadence and failure behavior.
6. Confirm cache/snapshot retention and redistribution rules.
7. Document units, geography, time fields, latest observation, data last updated date, method, quality and caveats.
8. Keep a clearly labelled mock fallback.

## Primary References

- [data.gov.in](https://data.gov.in/)
- [data.gov.in APIs page](https://www.data.gov.in/apis)
- [data.gov.in Help](https://www.data.gov.in/help)
- [data.gov.in Terms of Use](https://www.data.gov.in/terms-of-use)
- [data.gov.in Policies](https://www.data.gov.in/policies)
- [Government Open Data Licence - India](https://www.data.gov.in/sites/default/files/Gazette_Notification_OGDL.pdf)
