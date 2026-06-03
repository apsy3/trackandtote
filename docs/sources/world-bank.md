# World Bank Indicators / ESG Source Registry Entry

```yaml
source_name: "World Bank Indicators / ESG"
official_url: "https://data.worldbank.org/ and https://esgdata.worldbank.org/"
dataset_url: "https://data.worldbank.org/indicator and https://esgdata.worldbank.org/data/download"
api_documentation_url: "https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation"
category: "Country-level ESG, development, economy, population, energy, health, labour and benchmark indicators"
geography: "Global country/economy coverage; India country-level coverage is broad, while state/subnational coverage is source and indicator dependent"
time_coverage: "Indicator dependent. World Bank Indicators API includes many series dating back more than 50 years; the Sovereign ESG Data Portal currently describes 66 years of coverage across 214 economies."
update_frequency: "Annual or periodic, depending on indicator, source database, and ESG portal release cycle"
realtime_status: "annual/versioned"

free_to_access: "World Bank data portals and the Indicators API are publicly accessible; the Indicators API documentation says API keys and other authentication are no longer necessary."
commercial_use_allowed: "Generally allowed for World Bank-produced datasets under CC BY 4.0 unless metadata says otherwise; Needs verification per selected dataset/indicator, especially third-party indicators or externally licensed data."
attribution_required: "Yes. World Bank Dataset Terms require attribution to The World Bank and its data providers in the format indicated in metadata."
attribution_text: "Suggested pattern: The World Bank: Dataset name: Data source (if known). Include indicator code, indicator name, country/economy, time window, retrieved-at date, and URL. Final chart/report wording needs verification."
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0) by default for World Bank-produced datasets, unless specifically labelled otherwise; third-party and custom licences may apply."
license_url: "https://www.worldbank.org/en/about/legal/terms-of-use-for-datasets and https://datacatalog.worldbank.org/public-licenses"

api_key_required: "No. World Bank Indicators API documentation states that API keys and other authentication methods are no longer necessary."
rate_limits: "No fixed numeric V2 Indicators API request limit found in reviewed docs. World Bank terms prohibit request volume that exceeds reasonable use or is excessive/abusive. SDMX API documentation also states a 15,000 data-point limit per call. Needs verification for selected access path."
cache_allowed: "Needs verification. Dataset terms allow copying and sharing for covered datasets, but Track & Tote must confirm indicator metadata, third-party restrictions, attribution retention, snapshot retention, and API-use terms before connector build."
redistribution_allowed: "Generally allowed for World Bank-produced CC BY 4.0 datasets with attribution, unless metadata indicates restrictions; Needs verification per selected indicator/source because some third-party data may not be reusable or redistributable."

data_quality_confidence: "high"
known_limitations: "World Bank indicators are often annual, lagged, revised, and source-dependent. Some values are estimates or compiled from national/international sources. Indicator definitions, country coverage, missing values, breaks in series, aggregation methods, third-party provider terms, and metadata must be checked before claims. Not suitable for real-time claims."

observatory_use: "Country-level ESG and development context, India and country comparisons where available, GDP, population, energy, health, labour, development, SDG-adjacent and annual benchmark indicators for public notes and project pages."
future_calculator_use: "Not approved. Possible future contextual benchmark input only after licence, attribution, metadata, caching, redistribution, refresh cadence, disclaimer, and source-quality requirements are validated."
fallback_plan: "Keep existing mock worldbank and ESG/SDG datasets/routes until World Bank status advances beyond researching-license."

source_readiness_status: "researching-license"
last_reviewed_date: "2026-06-04"
reviewer_notes: "No connector built. Before connector work, verify selected indicators, source database IDs, ESG portal data access path, dataset/indicator metadata, licence labels, third-party restrictions, attribution text, commercial reuse, redistribution, caching/snapshot retention, reasonable API-use expectations, disclaimers, update cadence, and whether country/subnational coverage supports the intended article or project claim."
```

## Review Notes

- The World Bank Indicators API provides programmatic access to time-series indicators across World Bank databases, including World Development Indicators and other sources.
- The API documentation says V2 should be used and that API keys/authentication are no longer required.
- The Sovereign ESG Data Portal currently presents country/economy-level ESG data for policy makers, financial market participants and researchers, with current public pages describing 195 indicators, 66 years, and 214 economies.
- World Bank Dataset Terms generally allow use of World Bank-produced datasets under CC BY 4.0 unless labelled otherwise, but selected indicators may include third-party or custom terms in metadata.
- Attribution is required. Track & Tote should retain dataset name, source, indicator code/name, country/economy, date range, retrieved-at date, and source URL in chart metadata.
- World Bank terms prohibit implying World Bank endorsement, sponsorship, approval, association or affiliation.
- API/service reliability and data freshness are not real-time. World Bank indicators should be treated as annual/periodic benchmark context.
- Some indicators are revised, lagged, estimated, missing for some countries, or not comparable across periods without metadata review.

## Connector Gate

Do not build or enable a World Bank connector until:

1. Dataset Terms, Data Catalog licence labels, and indicator metadata have been reviewed for selected indicators.
2. Third-party or externally licensed indicators are identified and excluded or separately approved.
3. Required attribution text is finalized for charts, notes, reports and cached snapshots.
4. Reasonable API-use behavior, pagination, retries, and cache refresh cadence are documented.
5. Cache/snapshot retention and redistribution rules are approved.
6. Commercial reuse and future calculator/report use are explicitly reviewed.
7. Metadata fields expose source, source URL, dataset/database, indicator code/name, latest observation, retrieved-at timestamp, confidence, status, licence/disclaimer note, and transformation notes.
8. Mock fallback behavior remains available and clearly labelled.

Detailed pre-connector checklist: [World Bank Indicators / ESG Verification Checklist](world-bank-verification.md).

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
