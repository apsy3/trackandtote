# data.gov.in Source Registry Entry

```yaml
source_name: "data.gov.in / Open Government Data Platform India"
official_url: "https://data.gov.in/"
dataset_url: "https://data.gov.in/ and dataset/resource-specific catalog pages"
api_documentation_url: "https://www.data.gov.in/apis and https://www.data.gov.in/help"
category: "India open government data portal; ministry, department, state and organization datasets across environment, energy, labour, health, safety, sustainability, agriculture, markets and other public-service domains"
geography: "India; geography depends on each selected dataset and may be national, state, district, city, site, station, facility, administrative unit or other provider-defined coverage"
time_coverage: "Dataset dependent. Each catalog/resource must be reviewed for observation period, data last updated date, publication date, refresh date, methodology and provider notes before use."
update_frequency: "Dataset dependent. The portal publishes frequency metadata, but actual availability, refresh cadence and quality are controlled by the contributing ministry, department, state, organization or data provider."
realtime_status: "periodic"

free_to_access: "Yes for public portal access. API use may require a data.gov.in account/API key and dataset-specific access rules."
commercial_use_allowed: "Needs verification. Government Open Data Licence - India permits commercial and non-commercial use where it applies, but data.gov.in is a portal and every selected dataset/resource must be checked for license metadata, third-party material, provider restrictions and output-use requirements."
attribution_required: "Yes. The data.gov.in terms and Government Open Data Licence - India require prominent source acknowledgement and provider/source/license attribution where applicable."
attribution_text: "Suggested pattern: [Data provider/ministry/department], [year], [dataset/resource title], data.gov.in / Open Government Data Platform India, [version/publication date or data last updated date], [dataset/resource URL]. Published under [license name]: [license URL]. Accessed [retrieved_at]. Final wording must be verified per selected dataset/resource metadata."
license_name: "Dataset-specific license metadata; Government Open Data Licence - India where applied; data.gov.in Terms of Use and provider terms also apply"
license_url: "https://www.data.gov.in/terms-of-use and https://www.data.gov.in/sites/default/files/Gazette_Notification_OGDL.pdf"

api_key_required: "Yes for API-key access to API URLs. Exact key, quota and access requirements must be verified per selected resource before connector work."
rate_limits: "Needs verification. No fixed numeric rate limit is approved for Track & Tote yet. Future connector work must document API usage limits, provider rules, request behavior and failure handling for each selected resource."
cache_allowed: "Needs verification. Cache and snapshot only after dataset-specific license, provider terms, attribution, redistribution, update cadence and retention requirements are reviewed."
redistribution_allowed: "Needs verification. Government Open Data Licence - India allows use, adaptation, publication and derivative works where it applies, but raw redistribution, cached snapshots and extracted tables must be approved per selected dataset/resource."

data_quality_confidence: "medium"
known_limitations: "data.gov.in is a portal, not one dataset. Dataset quality, units, coverage, dates, completeness, update cadence, schema stability, API availability, third-party material, licence metadata and methodology notes vary by provider and resource. The portal terms disclaim guarantees around accuracy, completeness, usefulness, currency and availability. Do not treat data.gov.in values as real-time unless a specific dataset proves near-real-time status."

observatory_use: "India public datasets where official ministries, departments, states or organizations publish structured data. Useful for environment, energy, labour, health, safety, sustainability and other dataset-dependent benchmark/context notes after dataset-specific governance review."
future_calculator_use: "Not approved. data.gov.in resources may support future calculator or report context only when the exact dataset/resource licence, attribution, methodology, quality, caching, redistribution and commercial/report-use rules are approved."
fallback_plan: "Keep relevant mock datasets and API endpoints in place for every proposed data.gov.in-backed chart until each selected resource advances beyond researching-license and has an approved connector."

source_readiness_status: "researching-license"
last_reviewed_date: "2026-06-04"
reviewer_notes: "No connector built. Treat this as a portal-level registry entry only. Before any connector, choose exact catalog/resource IDs, provider ministry/department, API endpoint or download path, dataset licence metadata, attribution wording, methodology notes, unit/date/geography mapping, caching/snapshot policy, redistribution rules, commercial/report/calculator use and mock fallback."
```

## Review Notes

- data.gov.in is the Open Government Data Platform India. It publishes catalogs, resources and API-accessible datasets from participating ministries, departments, states and organizations.
- The portal is governed by NDSAP/Open Government Data Platform processes, but a source entry for data.gov.in cannot approve every dataset on the portal.
- The terms say reproduced catalog material must be accurate, not misleading or derogatory, and must acknowledge the source prominently. Third-party copyrighted material needs separate authorization.
- The terms state that catalog and information available through the portal are governed by the `license` metadata element of individual dataset records except where otherwise noted.
- Government Open Data Licence - India grants broad reuse rights where it applies, including commercial and non-commercial lawful uses, but with attribution, non-endorsement, no-warranty and other conditions.
- The portal help page says API URLs can be accessed using an API key. Key handling, quotas and API behavior must be verified before connector work.
- Provider departments/organizations control resource availability, update dates, frequency, methodology and quality. The portal should not be treated as a real-time source by default.

## Connector Gate

Do not build or enable a data.gov.in connector until:

1. The exact dataset/catalog/resource and provider ministry, department, state or organization are selected.
2. The selected resource URL, API URL, resource ID, access method and file/API format are documented.
3. The selected resource's license metadata is checked, including whether Government Open Data Licence - India applies.
4. Third-party material, sensitive-data exclusions and provider restrictions are reviewed.
5. Attribution text is finalized for the selected provider, source, licence, URL and retrieved-at date.
6. API key handling, usage limits, query parameters, pagination, retries and error handling are documented.
7. Cache/snapshot, retention and redistribution rules are approved for the selected resource.
8. Units, geography, time fields, update frequency, latest observation and provider methodology notes are mapped.
9. The chart or article caveat explains what the dataset can and cannot show.
10. Mock fallback remains available and clearly labelled.

Detailed pre-connector checklist: [data.gov.in Verification Checklist](data-gov-in-verification.md).

## Primary References

- [data.gov.in](https://data.gov.in/)
- [data.gov.in APIs page](https://www.data.gov.in/apis)
- [data.gov.in Help](https://www.data.gov.in/help)
- [data.gov.in Terms of Use](https://www.data.gov.in/terms-of-use)
- [data.gov.in Policies](https://www.data.gov.in/policies)
- [Government Open Data Licence - India](https://www.data.gov.in/sites/default/files/Gazette_Notification_OGDL.pdf)
