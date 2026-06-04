# WRI Aqueduct Source Registry Entry

```yaml
source_name: "WRI Aqueduct Water Risk Atlas"
official_url: "https://www.wri.org/aqueduct"
dataset_url: "https://www.wri.org/data/aqueduct-global-maps-40-data and https://github.com/wri/Aqueduct40"
api_documentation_url: "Not available as a stable public API reference in reviewed official sources. Current official access should be treated as tool/download/GitHub documentation first; any API-style use requires separate verification."
category: "Water stress, water risk, water depletion, variability, quality, regulatory/reputational and future projection risk indicators"
geography: "Global; basin/catchment, country, subnational and location-based screening context depending on selected Aqueduct product and download"
time_coverage: "Aqueduct 4.0 baseline quantity indicators use more than 40 years of data for 1979-2019. Aqueduct 4.0 includes 13 baseline annual water risk indicators, 3 baseline monthly water risk indicators and 6 future annual water risk indicators with CMIP6-based projections for 2030, 2050 and 2080. Coverage varies by indicator and product."
update_frequency: "Periodic/versioned. WRI FAQ says Aqueduct data are generally updated every few years when new datasets or models strengthen the indicators."
realtime_status: "periodic"

free_to_access: "Yes. WRI states that Aqueduct code, data and methodology are documented and available for download."
commercial_use_allowed: "Needs verification for Track & Tote production use. WRI states that Aqueduct products, methodologies and datasets are available under CC BY 4.0; CC BY 4.0 generally permits commercial use with attribution, but selected dataset, report/calculator and facility-use rules must be verified."
attribution_required: "Yes. WRI Aqueduct FAQ says users may share, reproduce or adapt Aqueduct data/maps as long as they attribute the World Resources Institute's Aqueduct tool."
attribution_text: "Suggested pattern: World Resources Institute, Aqueduct Water Risk Atlas, Aqueduct 4.0 Current and Future Global Maps Data, https://www.wri.org/aqueduct, accessed [retrieved_at]. Include indicator, scenario, time period, geography, version, download/source URL and transformation notes. Final wording needs verification per selected dataset."
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/ and https://www.wri.org/aqueduct"

api_key_required: "Not applicable for download/GitHub access. No stable public API/key requirement was identified in reviewed official sources."
rate_limits: "Not applicable for download-first use. If any future API/tool endpoint is used, request limits and service-use expectations must be verified before connector work."
cache_allowed: "Needs verification. Track & Tote should cache only approved versioned snapshots after attribution, redistribution, commercial reuse, WRI terms and report/calculator use are reviewed."
redistribution_allowed: "Needs verification. CC BY 4.0 generally permits sharing/adaptation with attribution and change indication, but Track & Tote should verify selected dataset terms, WRI general terms, third-party inputs and raw-file redistribution before production use."

data_quality_confidence: "high"
known_limitations: "Aqueduct is a global screening and prioritization tool, not real-time measurement or site-specific hydrological assurance. Overall water risk is an index and cannot be directly measured/validated in the same way as an observation. WRI recommends supplementing Aqueduct with local and regional deep dives for priority locations. Indicator definitions, baseline years, projection scenarios, spatial resolution, basin boundaries, model inputs, ranking bins and version changes must be documented before claims."

observatory_use: "Water stress and water risk context, India/country/basin/location benchmark context where available, periodic/versioned risk-layer notes and public-data method examples."
future_calculator_use: "Not approved. Aqueduct may support contextual screening or benchmark indicators, but not facility-level risk decisions, compliance evidence or calculator/report outputs unless methodology, licence, attribution, uncertainty, local-data caveats and output-use rules explicitly allow it."
fallback_plan: "Keep existing mock water-risk datasets/routes until WRI Aqueduct status advances beyond researching-license."

source_readiness_status: "researching-license"
last_reviewed_date: "2026-06-04"
reviewer_notes: "No connector built. Before connector work, verify exact Aqueduct product/version, indicator codes, scenario/period, source file, CC BY attribution, WRI terms, commercial reuse, redistribution, cache/snapshot retention, methodology caveats, local-deep-dive language, facility-use boundaries and whether future report/calculator use is permitted."
```

## Review Notes

- WRI describes Aqueduct as a suite of open, peer-reviewed water-risk tools, including the Water Risk Atlas and Country Rankings.
- Aqueduct 4.0 includes baseline annual, baseline monthly and future annual water risk indicators, with future projections for 2030, 2050 and 2080.
- WRI states that Aqueduct code, data and methodology are documented and available for download, and that Aqueduct products, methodologies and datasets are available under CC BY 4.0.
- WRI's FAQ says Aqueduct does not show real-time data and is generally updated every few years when new data or models strengthen the indicators.
- WRI also says Aqueduct is primarily a screening/prioritization tool and should be augmented by local and regional deep dives for priority locations.
- Track & Tote should not use Aqueduct for real-time water measurement, definitive facility-level risk decisions, or company-level compliance claims without a specific method/legal review.

## Connector Gate

Do not build or enable a WRI Aqueduct connector until:

1. The exact Aqueduct product and dataset version are selected.
2. Indicator codes, periods, scenarios, geographies and source files are documented.
3. CC BY 4.0 attribution text is finalized.
4. WRI general terms, dataset page terms and any third-party input restrictions are reviewed.
5. Commercial reuse, redistribution and cache/snapshot retention are approved.
6. Access method is selected: downloaded dataset, GitHub release/source files, manually reviewed snapshot, or verified API endpoint.
7. Metadata fields expose indicator, version, baseline/projection period, scenario, geography, latest observation or reference period, retrieved-at date, confidence, status, licence note and transformation notes.
8. Methodology caveats are documented for screening use, index interpretation, spatial resolution, local-data limitations and future projections.
9. Mock fallback behavior remains available and clearly labelled.

Detailed pre-connector checklist: [WRI Aqueduct Verification Checklist](wri-aqueduct-verification.md).

## Primary References

- [WRI Aqueduct](https://www.wri.org/aqueduct)
- [Aqueduct Water Risk Atlas](https://www.wri.org/data/aqueduct-water-risk-atlas)
- [Aqueduct 4.0 Current and Future Global Maps Data](https://www.wri.org/data/aqueduct-global-maps-40-data)
- [Aqueduct FAQ](https://www.wri.org/aqueduct/faq)
- [Aqueduct 4.0 Public Documentation on GitHub](https://github.com/wri/Aqueduct40)
- [WRI Open Data Commitment](https://www.wri.org/data/open-data-commitment)
- [WRI Permissions and Licensing](https://www.wri.org/research/permissions-licensing)
- [WRI General Terms of Use](https://www.wri.org/about/legal/general-terms-use)
