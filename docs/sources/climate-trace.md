# Climate TRACE Source Registry Entry

```yaml
source_name: "Climate TRACE"
official_url: "https://climatetrace.org/"
dataset_url: "https://climatetrace.org/data"
api_documentation_url: "https://api.climatetrace.org/"
category: "Modeled greenhouse gas and air-pollutant emissions inventory; country, sector, source/facility, ownership and geospatial emissions context"
geography: "Global; country/territory, subnational/city, sector, subsector and source-level coverage where Climate TRACE estimates are available"
time_coverage: "Climate TRACE download packages reviewed on 2026-06-04 describe annual country-level emissions by subsector and gas from 2015-2024 with estimated/projected year-to-date 2025 values, and monthly source-level emissions from 2021-2024 with estimated/projected year-to-date 2025 values. Climate TRACE news on the data page also reported release 5.7.0 with monthly emissions data through March 2026. API documentation describes annual source data from 2021 through the current year and monthly source details from January 2021 through the current year. Time coverage is release/API-endpoint specific and must be verified per selected dataset."
update_frequency: "Monthly/release-based for selected current-year emissions updates where supported; release-based for bulk download packages and methodology versions"
realtime_status: "monthly"

free_to_access: "Yes. Climate TRACE states that its emissions data are free and publicly available through bulk download packages and a beta API."
commercial_use_allowed: "Needs verification. Climate TRACE terms state the emissions data and metadata are made available under CC BY 4.0, with exceptions for listed external datasets. CC BY 4.0 generally permits commercial use with attribution, but source-level external terms and Track & Tote report/calculator use must be reviewed first."
attribution_required: "Yes. CC BY 4.0 requires attribution, and Climate TRACE provides suggested citation guidance."
attribution_text: "Suggested pattern: Climate TRACE (2026), Climate TRACE Emissions Inventory v5.7.0, https://climatetrace.org, accessed [retrieved_at]. Include sector/subsector, gas, geography, time window, temporal granularity, version/release, API/download URL and transformation notes. Final wording needs verification per selected dataset and any external-source exceptions."
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0), unless otherwise noted; external datasets may have different terms"
license_url: "https://climatetrace.org/terms"

api_key_required: "Needs verification. No API key requirement was identified in the reviewed public API reference, but the API is beta and production expectations must be confirmed before connector work."
rate_limits: "Needs verification. Climate TRACE describes the API as beta, says availability is not guaranteed, and asks users to keep volume low and use caution in production settings. No fixed numeric rate limit was confirmed."
cache_allowed: "Needs verification. Track & Tote should cache only approved versioned snapshots after licence, attribution, external-source restrictions, redistribution, commercial reuse and report/calculator use are reviewed."
redistribution_allowed: "Needs verification. Climate TRACE CC BY 4.0 terms generally allow copying, modification and distribution with attribution, but listed external datasets may have different specific terms and users are responsible for checking them."

data_quality_confidence: "medium"
known_limitations: "Climate TRACE emissions are modeled estimates built from public, licensed and third-party data sources. Models evolve and may be updated over time. The data are not official national inventories unless a selected use case and methodology explicitly support that framing. Coverage, confidence, source-level naming, ownership, activity data, emission factors, geospatial boundaries, monthly estimates, current-year projections, uncertainty and external-data licensing can vary by sector/subsector/source."

observatory_use: "Emissions context, country/sector/facility benchmark context where available, monthly or release-based emissions notes where supported, and comparison against public-data questions after source/version/method review."
future_calculator_use: "Not approved. Climate TRACE may be useful as contextual benchmark data, but not company-level reporting, calculator factors or compliance evidence unless licence, methodology, attribution, uncertainty, commercial reuse, redistribution and source-boundary rules explicitly allow it."
fallback_plan: "Keep existing mock monthly-emissions and ghg-emissions datasets/routes until Climate TRACE status advances beyond researching-license."

source_readiness_status: "researching-license"
last_reviewed_date: "2026-06-04"
reviewer_notes: "No connector built. Before connector work, verify exact Climate TRACE dataset/version/API endpoint, CC BY 4.0 attribution, external-dataset exceptions, commercial reuse, redistribution, cache/snapshot retention, beta API expectations, source-level methodology, confidence fields, uncertainty availability, geospatial boundary caveats, current-year projection treatment, and whether future report/calculator use is permitted."
```

## Review Notes

- Climate TRACE provides public emissions data through download packages and a beta API.
- Download packages include annual country-level emissions, monthly source-level emissions, confidence files and ownership files where available.
- Climate TRACE terms state that emissions data and metadata are under CC BY 4.0 unless otherwise noted, with external datasets listed separately and user responsibility for reviewing external terms.
- The API is explicitly beta. Climate TRACE says availability is not guaranteed and asks users to keep request volume low and use caution in production.
- The data are modeled estimates and should be described as emissions context or estimates unless a specific methodology supports a stronger claim.
- Climate TRACE should not be used for official inventory claims, company-level reporting, compliance evidence or calculator outputs until use-case boundaries, methodology, attribution and licence conditions are approved.

## Connector Gate

Do not build or enable a Climate TRACE connector until:

1. The exact data access path is selected: bulk download, API endpoint, or manually reviewed snapshot.
2. The exact dataset/version/release/API endpoint is documented.
3. CC BY 4.0 attribution text is finalized.
4. External-dataset exceptions are reviewed for the selected sector/subsector/source/geography.
5. Commercial reuse, redistribution and cache/snapshot retention are approved.
6. Beta API expectations, rate behavior and failure behavior are documented.
7. Methodology caveats are documented for selected sector/subsector/source/geography views.
8. Metadata fields expose source, version/release, gas, sector, subsector, source ID, geography, time window, temporal granularity, confidence, latest observation, retrieved-at date, licence note, attribution and transformation notes.
9. Mock fallback behavior remains available and clearly labelled.

Detailed pre-connector checklist: [Climate TRACE Verification Checklist](climate-trace-verification.md).

## Primary References

- [Climate TRACE official website](https://climatetrace.org/)
- [Climate TRACE Data Downloads](https://climatetrace.org/data)
- [Climate TRACE API Reference](https://api.climatetrace.org/)
- [Climate TRACE Terms of Use](https://climatetrace.org/terms)
- [Climate TRACE May 2026 Data Licensing, Schema, and Citation Guide](https://media.climatetrace.org/about_the_data_latest_b6e7b8d419.pdf)
- [Climate TRACE methodology documents on GitHub](https://github.com/climatetracecoalition/methodology-documents)
- [Climate TRACE Country/Territory Inventory](https://climatetrace.org/inventory)
