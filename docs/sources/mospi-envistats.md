# MoSPI EnviStats Source Registry Entry

```yaml
source_name: "MoSPI EnviStats India"
official_url: "https://www.mospi.gov.in/"
dataset_url: "https://www.mospi.gov.in/download-reports and MoSPI EnviStats publication/report pages"
api_documentation_url: "Not available in reviewed official sources. Treat as publication/download/manual-snapshot source unless a stable official API is identified and verified."
category: "India environmental statistics and environmental-economic accounts; annual/publication-based indicators on environmental conditions, resources, residuals, disasters, settlements, environmental health, management, energy accounts, ocean accounts, soil, biodiversity and related topics"
geography: "India; national, state/UT, district, coastal, source-agency, site/station or topic-specific geography depending on selected table and publication"
time_coverage: "Publication and table dependent. NSO has published EnviStats India since 2018; individual tables can cover annual, fiscal-year, multi-year or selected-reference-period data depending on source agency and topic."
update_frequency: "Annual/publication-based, with table-specific source-agency updates and revisions. Not real-time."
realtime_status: "annual/versioned"

free_to_access: "Yes. The EnviStats India 2024 publication says soft copies of the report and tables are available for download free of charge from the MoSPI download reports page."
commercial_use_allowed: "Needs verification. The publication permits reproduction with source acknowledgement, but materials attributed to third parties are subject to third-party copyright and separate terms, including restrictions on commercial use. Track & Tote must verify table-level source and commercial/report use before production."
attribution_required: "Yes. Reproduction is permitted provided source acknowledgement is made. Table-level attribution should also preserve MoSPI/NSO publication details and original source-agency notes."
attribution_text: "Suggested pattern: National Statistical Office, Ministry of Statistics and Programme Implementation, Government of India, EnviStats India [year]: [publication name], [table/figure title], [source agency shown in table], [publication/download URL], accessed [retrieved_at]. Include table number, unit, geography, observation/reference period, extraction method and transformation notes. Final wording needs verification per selected publication/table."
license_name: "MoSPI EnviStats publication reproduction notice; third-party/source-agency terms where applicable; Government of India website policies need verification"
license_url: "https://www.mospi.gov.in/download-reports and publication-specific PDF/report pages"

api_key_required: "Not applicable for reviewed EnviStats publication/download access. If an official API is later identified, key/access requirements must be verified before connector work."
rate_limits: "Not applicable for manual/download-first use. If automated download or API access is later used, site usage limits, robots guidance and service expectations must be verified."
cache_allowed: "Needs verification. Use saved, reviewed publication/table snapshots only after licence, attribution, third-party material, redistribution, extraction and retention rules are approved."
redistribution_allowed: "Needs verification. Reproduction with acknowledgement is permitted, but third-party materials and commercial use restrictions mean raw table redistribution and cached snapshot sharing must be reviewed table by table."

data_quality_confidence: "high"
known_limitations: "Official MoSPI/NSO publication, but it compiles information from many ministries, departments, government agencies and international organisations. Source-agency updates can differ from published figures. The publication includes no-warranty language and asks users to check updates with source agencies due to dynamic datasets. PDF/table extraction can introduce errors; units, fiscal years, geography, definitions and caveats vary by table. Not a real-time source."

observatory_use: "India environmental statistics context, official annual/publication-based environmental indicators, state/country benchmark context where available, historical trend context and source-aware public-data notes."
future_calculator_use: "Not approved. MoSPI EnviStats tables may support contextual indicators or historical benchmarks only after methodology, extraction reliability, licence, attribution, source-agency caveats, commercial use and report/calculator use are approved."
fallback_plan: "Keep relevant mock environmental, water, weather, energy, biodiversity or sustainability datasets/routes until selected EnviStats tables advance beyond researching-license and have approved snapshots/connectors."

source_readiness_status: "researching-license"
last_reviewed_date: "2026-06-04"
reviewer_notes: "No connector built. Before connector work, select exact EnviStats publication/year, table/figure/annexure, source agency, download file, extraction method, licence/copyright text, third-party status, attribution wording, unit/date/geography mapping, methodology notes, cache/snapshot retention, redistribution rules, commercial/report/calculator use and mock fallback."
```

## Review Notes

- MoSPI/NSO publishes EnviStats India as official environmental statistics and environmental account publications.
- The 2025 overview states that NSO has been publishing EnviStats India since 2018 and describes environment statistics as data and information about the natural environment, its quality and interactions with human activities.
- The 2024 EnviStats Environment Accounts publication states that soft copies of the report and tables are available for free download from the MoSPI download reports page.
- The same publication permits reproduction if source acknowledgement is made, but materials attributed to third parties are subject to third-party copyright and separate restrictions, including commercial-use restrictions.
- The 2024 publication says the material is prepared from information, presentations and websites of concerned ministries/departments, other government agencies and international organisations.
- NSO accepts no responsibility for differences between stated figures and those published elsewhere, asks users to check updates with source agencies, and disclaims warranty for accuracy, completeness and fitness for a particular purpose.
- Track & Tote should use EnviStats as annual/versioned publication context, not live data, real-time monitoring or production calculator factors.

## Connector Gate

Do not build or enable a MoSPI EnviStats connector until:

1. The exact publication, year, chapter, table, figure or annexure is selected.
2. The access path is selected: PDF, Excel/table download, manually reviewed snapshot or a verified official API if later identified.
3. The original source agency shown in the publication table is identified and documented.
4. Reproduction, third-party copyright, commercial-use and Government of India/MoSPI website-policy terms are reviewed.
5. Attribution text is finalized for MoSPI/NSO, publication year, table, source agency, URL, retrieved-at date and any transformations.
6. Extraction rules are documented for PDF/Excel parsing, field mapping, units, dates, fiscal years, geography and missing values.
7. Cache/snapshot retention and redistribution rules are approved.
8. Methodology caveats are documented for source-agency updates, table definitions, revisions, comparability and no-warranty language.
9. Future report/calculator/factor use boundaries are approved, if any.
10. Mock fallback behavior remains available and clearly labelled.

Detailed pre-connector checklist: [MoSPI EnviStats Verification Checklist](mospi-envistats-verification.md).

## Primary References

- [MoSPI](https://www.mospi.gov.in/)
- [MoSPI Download Reports](https://www.mospi.gov.in/download-reports)
- [EnviStats India 2024: Environment Statistics](https://www.mospi.gov.in/publication/envistats-india-2024-environment-statistics)
- [EnviStats India 2025: Environment Statistics Overview](https://mospi.gov.in/sites/default/files/reports_and_publication/statistical_publication/EnviStats/Overview25.pdf)
- [EnviStats India 2024: Environment Accounts PDF](https://mospi.gov.in/sites/default/files/publication_reports/EnviStats_India_2024.pdf)
- [Press Note on EnviStats India 2024: Environment Accounts](https://www.mospi.gov.in/press-release/press-note-envistats-india-2024-environment-accounts)
