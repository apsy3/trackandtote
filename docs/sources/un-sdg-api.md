# UN SDG API Source Registry Entry

```yaml
source_name: "UN SDG API / Global SDG Indicators Database"
official_url: "https://unstats.un.org/sdgs/"
dataset_url: "https://unstats.un.org/sdgs/dataportal/database and https://unstats.un.org/sdgs/metadata/"
api_documentation_url: "https://unstats.un.org/sdgapi/swagger/ and https://unstats.un.org/sdgs/files/SDMX_SDG_API_MANUAL.pdf"
category: "Global Sustainable Development Goals indicators; country, regional, thematic, disaggregated and metadata benchmark context"
geography: "Global; countries/areas, regions and country groupings using UN SDG geography/M49 conventions depending on selected indicator and series"
time_coverage: "Indicator dependent. SDG indicators cover varying historical periods and are updated as custodian agencies submit approved data and metadata. The Global SDG Indicators Database page reviewed on 2026-06-04 reported a database update on 2026-03-27, and the SDG database notes major update cycles in March/April, June/July, September and December."
update_frequency: "Annual/periodic, with several major database updates per year and indicator-specific revisions. Not real-time."
realtime_status: "annual/versioned"

free_to_access: "Yes. The Global SDG Indicators Database, API and metadata repository are publicly accessible."
commercial_use_allowed: "Needs verification. UNdata Terms say data and metadata may be copied, duplicated and further distributed free of charge if UNdata is cited, but Track & Tote must verify the specific SDG API/database terms, custodian-agency source responsibilities, commercial reuse and report/calculator use before production."
attribution_required: "Yes. UNdata Terms require citation as the reference, and SDG indicator charts should cite the United Nations Statistics Division / Global SDG Indicators Database plus selected indicator metadata and custodian/source notes."
attribution_text: "Suggested pattern: United Nations Statistics Division, Global SDG Indicators Database, [indicator/series code and name], https://unstats.un.org/sdgs/dataportal/database, accessed [retrieved_at]. Include goal, target, indicator, series code, country/area, unit, disaggregation, time window, database update/version where available, custodian/source note and transformation notes. Final wording needs verification per selected indicator."
license_name: "UNdata Terms and Conditions / UN website terms; dataset-specific and custodian-source terms need verification"
license_url: "https://data.un.org/Host.aspx?Content=UNdataUse and https://www.un.org/en/about-us/terms-of-use"

api_key_required: "No API key identified for the public SDG OpenAPI/SDMX access paths reviewed. Verify before connector work."
rate_limits: "Needs verification. No fixed numeric rate limit was confirmed in reviewed official SDG API documentation. Future connector should use conservative request behavior and cached snapshots."
cache_allowed: "Needs verification. Track & Tote should cache only approved snapshots after attribution, update cadence, redistribution, commercial reuse, custodian-source notes and report/calculator use are reviewed."
redistribution_allowed: "Needs verification. UNdata Terms allow free copying/duplication/further distribution if cited, but selected SDG indicator source/custodian terms, metadata notes and raw-file/API redistribution should be checked before production use."

data_quality_confidence: "high"
known_limitations: "The Global SDG Indicators Database is official but indicator coverage, time periods, disaggregation, country availability, units, custodian agencies, metadata, revisions, tier status, definitions and comparability vary by indicator. Data and metadata are supplied from source databases/custodian agencies; UNSD disclaims guarantees around accuracy, reliability, timeliness and fitness for purpose. Do not use SDG indicators for real-time or company-level ESG claims."

observatory_use: "SDG indicator benchmark context, India/country-level sustainability indicators, country comparison context, annual/periodic public-data notes and source-aware sustainability method examples."
future_calculator_use: "Not approved. UN SDG indicators may support contextual benchmark notes, but not company-level ESG scoring, compliance evidence, calculator factors or reporting outputs unless licence, methodology, attribution, custodian-source caveats, commercial reuse and output-use rules explicitly allow it."
fallback_plan: "Keep existing mock worldbank/esg and related benchmark datasets/routes until UN SDG API status advances beyond researching-license."

source_readiness_status: "researching-license"
last_reviewed_date: "2026-06-04"
reviewer_notes: "No connector built. Before connector work, verify exact SDG API/SDMX endpoint, selected indicator/series, metadata, custodian agency, data-source note, licence/terms, attribution text, commercial reuse, redistribution, cache/snapshot retention, update/version handling, methodology caveats, country/disaggregation mapping and whether any future report/calculator use is permitted."
```

## Review Notes

- The UN SDG Global Database provides official SDG data reported by custodian agencies and maintained by the United Nations Statistics Division.
- The SDG data portal links to Data Availability and Data Extraction APIs, and the UN publishes both OpenAPI/Swagger and SDMX API documentation for SDG data.
- The SDG Metadata Repository provides reference metadata for Tier I and II indicators and states that no data are published in the Global SDG Indicators Database until the corresponding metadata is approved by the IAEG-SDGs.
- The SDG database is periodic, not real-time. The database page reports major update cycles several times per year.
- UNdata Terms allow free copying, duplication and further distribution of data/metadata if UNdata is cited, but Track & Tote should still verify SDG-specific terms, custodian-source notes and commercial/report use before production.
- Track & Tote should use UN SDG data for country-level benchmark context, not company-level ESG claims or compliance evidence.

## Connector Gate

Do not build or enable a UN SDG API connector until:

1. The exact API access path is selected: SDG OpenAPI, SDMX API, metadata API, database download or manually reviewed snapshot.
2. Selected goals, targets, indicators, series codes, dimensions and geographies are documented.
3. Terms/licence, attribution and custodian-source notes are reviewed for each selected indicator.
4. Commercial reuse, redistribution and cache/snapshot retention are approved.
5. API request behavior, pagination/filtering, refresh cadence and failure behavior are documented.
6. Metadata fields expose goal, target, indicator, series code, unit, disaggregation, geography, latest observation, retrieved-at date, database update/reference date, confidence, status and transformation notes.
7. Methodology caveats are documented for indicator definitions, tier/classification, custodian agency, country coverage, missing values, revisions and comparability.
8. Mock fallback behavior remains available and clearly labelled.

Detailed pre-connector checklist: [UN SDG API Verification Checklist](un-sdg-api-verification.md).

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
