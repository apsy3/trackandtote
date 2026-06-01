# DATA_SOURCE_GUIDE

## 1) Purpose Of This Guide

This guide defines how public datasets may be used in the India ESG/GHG/OHSE Observatory before real connectors are enabled.  
It protects legal compliance, source transparency, and reproducibility.

## 2) Why Public-Data Governance Is Needed

Public data can still carry licensing, attribution, redistribution, and reliability constraints.  
Without governance, we risk:

- legal misuse of data
- weak or unverifiable claims
- inconsistent refresh behavior
- hard-to-reproduce published results

This guide keeps connector decisions consistent across all future articles.

## 3) Public Data vs Open Data vs Free-To-Access vs Commercially Reusable

- **Public data**: Data published by public institutions or in public-facing systems.
- **Open data**: Data explicitly licensed for reuse under open terms.
- **Free-to-access data**: Data you can read/download at no cost, but reuse rights may be limited.
- **Commercially reusable data**: Data terms allow use in commercial products/services.

Important: free-to-access does **not** automatically mean commercially reusable.

## 4) Licence And Terms-Of-Use Checks

Before building a connector, confirm:

1. License name and URL
2. Terms of use page
3. Redistribution rights
4. Commercial-use rights
5. API-specific terms (if any)

If any item is unclear, set status to `researching-license` and keep mock data.

## 5) Attribution Requirements

For every source, store and show attribution requirements where relevant:

- source name
- source URL
- required attribution text (if specified)
- license note

Attribution must be reviewed before moving a source from `researching-license` to `free-confirmed`.

## 6) API Keys And Rate Limits

If a source requires an API key:

- never hardcode secrets in frontend code
- store key policy in source registry
- document rate limits and expected usage
- add throttling/backoff in connector layer later

## 7) Caching And Snapshot Rules

- Never call public APIs directly from chart components.
- Use connector -> normalizer -> cache/snapshot -> API endpoint -> chart.
- Cache public API responses locally.
- Store `retrieved_at`, `latest_observation`, `source`, `licence note`, and transformation notes.
- Keep mock fallback for every connector.
- For official reports later, use saved snapshots rather than live-changing values.

## 8) Refresh-Frequency Rules

Refresh expectations must match source behavior.  
Do not force fast refresh on slow/versioned datasets.

- Air quality: near-real-time/hourly where source supports it
- Weather/climate: daily or historical depending source
- Climate TRACE: monthly/release-based
- World Bank/UN/ILOSTAT: annual or periodic
- EDGAR: annual/release-based
- CEA grid factor: annual/versioned
- WRI Aqueduct: periodic/versioned
- data.gov.in: dataset-dependent
- MoSPI EnviStats: annual publication

## 9) Real-Time vs Near-Real-Time vs Daily vs Monthly vs Annual/Versioned

- **Real-time**: immediate or continuous updates (rare in official public ESG datasets)
- **Near-real-time**: delayed stream (minutes/hours)
- **Daily**: one or more updates per day
- **Monthly**: consolidated monthly releases
- **Annual/versioned**: periodic release, often revised in later editions

UI and metadata must never imply real-time behavior when the source is annual/versioned.

## 10) Confidence Scoring

Use confidence labels for dataset interpretation context:

- **high**: stable definitions, clear method, consistent update history
- **medium**: generally usable, some caveats/coverage gaps
- **low**: major caveats, sparse coverage, or unresolved quality questions

Confidence reflects data reliability for interpretation, not policy truth.

## 11) Source-Readiness Status

Statuses for connector governance:

- `mock-only`
- `researching-license`
- `free-confirmed`
- `connector-built`
- `validated`
- `production-ready`

Progression should be sequential unless a documented exception is approved.

## 12) Fallback-To-Mock-Data Rules

- Every live connector must preserve a mock fallback path.
- If a source breaks, rate-limits, or changes schema, API routes can safely return mock snapshots.
- Mock fallback must be clearly labeled in UI status.

## 13) UI Metadata Requirements

Every graph must show:

- source
- source URL where available
- frequency
- latest observation
- retrieved-at timestamp
- confidence
- status
- licence/attribution note where relevant

## 14) Connector Approval Checklist

A connector can move toward production only if all are complete:

1. License/terms reviewed and logged
2. Attribution text captured
3. API/rate-limit rules documented
4. Normalization contract to `TimeSeriesDataset` implemented
5. Cache/snapshot behavior implemented
6. Mock fallback implemented
7. Metadata fields exposed to UI
8. Sample outputs validated for date/value/unit correctness
9. Failure modes tested (timeout, missing fields, stale source)
10. Source status moved to at least `validated`

## 15) MVP Source Registry Summary

All entries below are planning references for Step 1 foundation.  
License status remains **must verify before connector**.

| Source | Expected Use | Expected Frequency | Real-Time Status | Licence Status | First Connector Priority |
|---|---|---|---|---|---|
| OpenAQ | PM2.5/NO2 city air quality context | Hourly/Daily | Near-real-time | must verify before connector | high |
| CPCB National AQI | India official air-quality context | Hourly/Daily | Near-real-time | must verify before connector | high |
| CEA CO2 Baseline Database | Grid emission factor baseline | Annual/Versioned | Annual/versioned | must verify before connector | high |
| World Bank Indicators / ESG | Country-level ESG/SDG indicators | Annual/Periodic | Annual/periodic | must verify before connector | medium |
| UN SDG API | SDG indicator context | Annual/Periodic | Annual/periodic | must verify before connector | medium |
| ILOSTAT | OHSE/labor benchmark context | Annual/Periodic | Annual/periodic | must verify before connector | medium |
| EDGAR | National GHG inventory trend context | Annual/Release-based | Annual/versioned | must verify before connector | high |
| WRI Aqueduct | Water stress/risk context | Periodic/Versioned | Periodic/versioned | must verify before connector | medium |
| NASA POWER | Weather/temperature/rainfall context | Daily/Historical | Daily | must verify before connector | medium |
| Climate TRACE | Monthly/release emissions context | Monthly/Release-based | Monthly/release | must verify before connector | later |
| data.gov.in | India public datasets by topic | Dataset-dependent | Dataset-dependent | must verify before connector | high |
| MoSPI EnviStats | India environment statistical publication context | Annual publication | Annual/versioned | must verify before connector | later |
