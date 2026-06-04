# SOURCE GOVERNANCE SUMMARY

Last updated: 2026-06-05

## 1) Purpose

This document summarises the source-governance work completed so far for Track & Tote.

It explains why the public site continues to use mock data while source-level licence, attribution, caching, redistribution, refresh, methodology and reuse questions are verified.

Public accessibility does not automatically mean:

- public reuse is allowed
- commercial reuse is allowed
- redistribution is allowed
- caching or long-term snapshots are allowed
- API polling or automated extraction is allowed
- data can be used in calculators, reports or exported outputs
- the source supports real-time or near-real-time claims

This document is an evidence and decision record. If a future article, project page, connector, calculator or report asks to use one of these sources, the relevant registry and verification files should be reviewed first.

## 2) Governance Principle

Track & Tote uses these source-governance principles:

- **Mock-first until verified**: mock data remains the default until the source is approved for the exact use case.
- **Source-first before connector**: write the source registry and verification checklist before building ingestion code.
- **No real-time claims unless confirmed**: never describe a source as live, real-time or near-real-time unless official source documentation supports that claim for the selected dataset.
- **No production connector until approval criteria are met**: connector work waits until licence, attribution, access, caching, redistribution, methodology and reuse rules are documented.
- **Metadata travels with every chart**: every graph must carry source, frequency, latest observation, retrieved-at timestamp, confidence, status and caveat metadata.

## 3) Approval Status Definitions

- `researching-license`: source is under review. Public access may exist, but licence, attribution, reuse, caching, redistribution, access or methodology questions remain open.
- `free-confirmed`: basic free access and reuse terms are documented, but connector and validation work may still be pending.
- `connector-built`: ingestion code exists, but source output, metadata, error handling, caching and public display are not yet fully validated.
- `validated`: connector output has been checked for dates, values, units, metadata, caveats and fallback behavior.
- `production-ready`: source is approved for the defined public use case with documented licence, attribution, caching, redistribution, refresh, methodology and caveat handling.
- `not approved yet`: source must not be used for production real-data charts, connectors, calculators or report outputs.
- `source-review-required`: use this label when the source, portal or dataset can be discussed, but a selected endpoint, table, source agency, licence, geography, time window or output use still needs separate review.

## 4) Current Source Registry Status Table

| Source | Primary use | Current readiness | Production approval | Main blocker / caution | Connector priority | Registry file | Verification file |
|---|---|---|---|---|---|---|---|
| OpenAQ | PM2.5/NO2 city air-quality context | `researching-license` | `not approved yet` | Source-level licence and attribution; commercial reuse, redistribution and cache rules vary by source/license | high | [Registry](sources/openaq.md) | [Verification](sources/openaq-verification.md) |
| NASA POWER | Weather, temperature, rainfall and climate-normalisation context | `researching-license` | `not approved yet` | Citation, reuse, cache/snapshot, redistribution and service-use expectations need final Track & Tote approval | medium | [Registry](sources/nasa-power.md) | [Verification](sources/nasa-power-verification.md) |
| World Bank | Country-level ESG/development benchmark indicators | `researching-license` | `not approved yet` | Terms, attribution, caching, redistribution, API usage and disclaimer handling need final approval | medium | [Registry](sources/world-bank.md) | [Verification](sources/world-bank-verification.md) |
| CEA CO2 Baseline Database | India grid emission factor and Scope 2/power-sector context | `researching-license` | `not approved yet` | Manual/versioned extraction, methodology/versioning, calculator-use and reuse permissions need verification | high | [Registry](sources/cea-co2-baseline.md) | [Verification](sources/cea-co2-baseline-verification.md) |
| EDGAR | Country/sector GHG emissions trend context | `researching-license` | `not approved yet` | Licence, attribution, redistribution, commercial reuse, methodology/versioning and report/calculator use need verification | high | [Registry](sources/edgar.md) | [Verification](sources/edgar-verification.md) |
| Climate TRACE | Emissions estimates, sector/facility/country context | `researching-license` | `not approved yet` | Licence, methodology, versioning, attribution, report use and non-official-inventory caveats need approval | later | [Registry](sources/climate-trace.md) | [Verification](sources/climate-trace-verification.md) |
| ILOSTAT | Labour and occupational-safety benchmark context | `researching-license` | `not approved yet` | ILO terms, attribution, redistribution, commercial reuse, methodology/versioning and report use need verification | medium | [Registry](sources/ilostat.md) | [Verification](sources/ilostat-verification.md) |
| WRI Aqueduct | Water stress and water-risk screening context | `researching-license` | `not approved yet` | Screening-tool caveats, facility-use boundaries, attribution, redistribution, cache and report/calculator use need approval | medium | [Registry](sources/wri-aqueduct.md) | [Verification](sources/wri-aqueduct-verification.md) |
| UN SDG API | SDG indicator and country sustainability benchmark context | `researching-license` | `not approved yet` | Indicator-level metadata, custodian-source notes, terms, attribution, cache and report/calculator use need approval | medium | [Registry](sources/un-sdg-api.md) | [Verification](sources/un-sdg-api-verification.md) |
| data.gov.in | India public datasets by topic | `researching-license` | `not approved yet` | Portal-level source; each dataset/resource needs separate licence, provider, API, methodology and reuse review | high | [Registry](sources/data-gov-in.md) | [Verification](sources/data-gov-in-verification.md) |
| MoSPI EnviStats | India environmental statistics and publication-based indicators | `researching-license` | `not approved yet` | Publication/table-specific extraction, third-party material, source-agency caveats and commercial/report use need verification | later | [Registry](sources/mospi-envistats.md) | [Verification](sources/mospi-envistats-verification.md) |
| CPCB National AQI | India official AQI and city/station air-quality context | `researching-license` | `not approved yet` | No stable official public API identified; public visibility does not confirm reuse, scraping, caching or commercial permission | high | [Registry](sources/cpcb-national-aqi.md) | [Verification](sources/cpcb-national-aqi-verification.md) |

## 5) Source-By-Source Decision Notes

### OpenAQ

- Useful for global and India air-quality context, especially PM2.5 and NO2 city or station examples.
- Not production-approved because OpenAQ aggregates source-level data with licence and attribution duties that can vary.
- Must verify selected source/location/parameter, licence metadata, commercial reuse, redistribution, caching and attribution before connector work.
- Near-real-time or historical use is possible only where the selected source supports it and metadata confirms the observation window.

### NASA POWER

- Useful for weather, temperature, precipitation and climate-normalisation context around cities or facilities.
- Not production-approved until citation, licence/terms, cache/snapshot, redistribution, commercial reuse and service-use expectations are confirmed for Track & Tote.
- Must verify exact API/data access path, parameters, temporal resolution, attribution, latency and limitations before connector work.
- Best treated as daily/historical climate and weather context, not live weather claims.

### World Bank

- Useful for country-level ESG, development, population, GDP, energy, health and labour benchmark indicators.
- Not production-approved until terms, attribution, API use, caching, redistribution, commercial reuse and disclaimer requirements are approved.
- Must verify selected indicator codes, units, update cadence, country coverage, licence/terms and transformation rules before connector work.
- Annual or periodic benchmark context only; no real-time claims.

### CEA CO2 Baseline Database

- Useful for India grid emission factor context and future Scope 2/power-sector GHG method discussions.
- Not production-approved because report/PDF/manual extraction, versioning, methodology, attribution, reuse and calculator-use rules need verification.
- Must verify exact report edition, factor type, year/version, methodology, source URL, citation and snapshot policy before connector work.
- Annual/versioned official context; not real-time.

### EDGAR

- Useful for India and country/sector GHG emissions trend context and release-based comparisons.
- Not production-approved until licence, attribution, redistribution, commercial reuse, methodology/versioning and report/calculator-use questions are resolved.
- Must verify selected EDGAR release, gases/sectors, units, geography, citation, caveats and whether raw or derived values may be cached/shared.
- Annual/release-based emissions context; not real-time and not company-level calculation unless explicitly approved.

### Climate TRACE

- Useful for emissions estimates and comparison context across countries, sectors and facilities where available.
- Not production-approved because methodology, licence, attribution, versioning, redistribution, commercial/report use and official-inventory caveats need approval.
- Must verify selected data release, API/download terms, facility/sector methodology, uncertainty language and output-use boundaries before connector work.
- Monthly or release-based where supported; not official inventory claims unless clearly framed and supported.

### ILOSTAT

- Useful for labour, employment and occupational-safety benchmark context at country level.
- Not production-approved until ILOSTAT/ILO terms, attribution, redistribution, commercial reuse, methodology/versioning and report-use rules are approved.
- Must verify selected indicators, units, country/time coverage, metadata, source notes and update cadence before connector work.
- Annual or periodic benchmark context; not company-level OHSE claims and not real-time.

### WRI Aqueduct

- Useful for water stress and water-risk screening context, including country, basin and location benchmarks where supported.
- Not production-approved until selected dataset/version, attribution, redistribution, cache/snapshot, commercial use, facility-use boundaries and local-data caveats are approved.
- Must verify product/version, indicator, scenario, geography, licence terms, methodology notes and whether output use is allowed.
- Periodic/versioned screening context; not real-time water measurement and not sufficient for facility-level decisions without local review.

### UN SDG API

- Useful for SDG indicator benchmark context and country-level sustainability comparisons.
- Not production-approved until indicator-level metadata, custodian/source notes, terms, attribution, cache, redistribution and report/calculator use are approved.
- Must verify selected goal, target, indicator, series code, geography, disaggregation, unit, update date and source/custodian caveats.
- Annual or periodic benchmark context; not company-level ESG claims and not real-time.

### data.gov.in

- Useful as a portal for India public datasets from ministries, departments, states and organisations.
- Not production-approved because it is not one dataset; every dataset/resource needs separate licence, provider, API, update, methodology and reuse review.
- Must verify exact catalog/resource ID, provider, licence metadata, API key/rate limits, attribution, caching, redistribution and commercial/report use before connector work.
- Portal/dataset-dependent; do not claim real-time unless a selected dataset proves near-real-time behavior.

### MoSPI EnviStats

- Useful for official annual/publication-based India environmental statistics and historical context.
- Not production-approved because table/PDF extraction, third-party material, source-agency notes, commercial reuse, redistribution and report/calculator use need review.
- Must verify exact publication year, table/figure, source agency, extraction method, units, geography, methodology and snapshot policy before connector work.
- Annual/versioned publication context; not real-time.

### CPCB National AQI

- Useful for official India AQI context, city/station air-quality notes and AQI methodology explanations.
- Not production-approved because no stable official public API documentation was identified and public dashboard visibility does not equal reuse permission.
- Must verify CPCB/AQI portal terms, public-display permission, attribution, API/download access, caching, redistribution, station metadata and methodology caveats.
- Near-real-time or daily context only where an official selected source confirms cadence; not regulatory reporting or company-level claims.

## 6) Connector Readiness Ranking

This ranking is preliminary. It must be updated when verification improves.

### Likely Easier To Verify First

- NASA POWER
- World Bank
- UN SDG API

Why: these sources have clearer public documentation patterns, API/database access paths, and mostly country/indicator or weather/climate benchmark use cases. They are still **not approved yet**.

### Moderate Complexity

- Climate TRACE
- WRI Aqueduct
- ILOSTAT
- MoSPI EnviStats
- CEA CO2 Baseline Database

Why: these are useful but need stronger handling of methodology, versioning, citation, extraction, screening-use caveats, third-party/source-agency notes or report/calculator-use boundaries.

### High Caution / Blocked Until Clearer Terms

- OpenAQ
- EDGAR
- data.gov.in
- CPCB National AQI

Why: these sources raise higher caution around source-level permissions, redistribution, commercial reuse, portal heterogeneity, undocumented access paths, unclear stable APIs or public-dashboard-versus-reuse distinctions.

## 7) Why Mock Data Remains Appropriate

Mock data remains appropriate because it lets Track & Tote:

- test UI, chart layout and metadata display without legal or licensing risk
- validate the connector -> normalizer -> cache/snapshot -> API endpoint -> chart architecture
- design source labels, confidence notes, caveats and freshness tables before using real values
- avoid false precision from unverified data
- avoid implying legal approval, production readiness or real-time status
- keep every future connector honest by preserving fallback behavior

## 8) Minimum Approval Checklist Before Any Connector

Before any source connector is built, the selected source/dataset must have:

1. Licence name, URL and applicable terms recorded
2. Attribution wording approved
3. Commercial reuse status verified
4. Redistribution status verified
5. Caching/snapshotting and retention rules approved
6. API access, API key handling, download rules and rate limits documented
7. Methodology, versioning, units, geography and time fields documented
8. Data quality caveats and missing-value behavior reviewed
9. Public display rules approved
10. Calculator/report-output use reviewed separately
11. Mock fallback plan preserved

## 9) Evidence Files

| Source | Registry | Verification |
|---|---|---|
| OpenAQ | [docs/sources/openaq.md](sources/openaq.md) | [docs/sources/openaq-verification.md](sources/openaq-verification.md) |
| NASA POWER | [docs/sources/nasa-power.md](sources/nasa-power.md) | [docs/sources/nasa-power-verification.md](sources/nasa-power-verification.md) |
| World Bank | [docs/sources/world-bank.md](sources/world-bank.md) | [docs/sources/world-bank-verification.md](sources/world-bank-verification.md) |
| CEA CO2 Baseline Database | [docs/sources/cea-co2-baseline.md](sources/cea-co2-baseline.md) | [docs/sources/cea-co2-baseline-verification.md](sources/cea-co2-baseline-verification.md) |
| EDGAR | [docs/sources/edgar.md](sources/edgar.md) | [docs/sources/edgar-verification.md](sources/edgar-verification.md) |
| Climate TRACE | [docs/sources/climate-trace.md](sources/climate-trace.md) | [docs/sources/climate-trace-verification.md](sources/climate-trace-verification.md) |
| ILOSTAT | [docs/sources/ilostat.md](sources/ilostat.md) | [docs/sources/ilostat-verification.md](sources/ilostat-verification.md) |
| WRI Aqueduct | [docs/sources/wri-aqueduct.md](sources/wri-aqueduct.md) | [docs/sources/wri-aqueduct-verification.md](sources/wri-aqueduct-verification.md) |
| UN SDG API | [docs/sources/un-sdg-api.md](sources/un-sdg-api.md) | [docs/sources/un-sdg-api-verification.md](sources/un-sdg-api-verification.md) |
| data.gov.in | [docs/sources/data-gov-in.md](sources/data-gov-in.md) | [docs/sources/data-gov-in-verification.md](sources/data-gov-in-verification.md) |
| MoSPI EnviStats | [docs/sources/mospi-envistats.md](sources/mospi-envistats.md) | [docs/sources/mospi-envistats-verification.md](sources/mospi-envistats-verification.md) |
| CPCB National AQI | [docs/sources/cpcb-national-aqi.md](sources/cpcb-national-aqi.md) | [docs/sources/cpcb-national-aqi-verification.md](sources/cpcb-national-aqi-verification.md) |

Related governance files:

- [DATA_SOURCE_GUIDE](DATA_SOURCE_GUIDE.md)
- [SOURCE_REGISTRY_TEMPLATE](SOURCE_REGISTRY_TEMPLATE.md)

## 10) Current Decision

All reviewed sources remain `not approved yet` for production real-data connectors until open items are resolved.

Mock data remains the correct default for the public site.

This does not mean the sources are unusable. It means Track & Tote has not yet completed the evidence required to use them responsibly in production charts, connectors, calculators, reports or exported outputs.
