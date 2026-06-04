# CPCB National AQI Source Registry Entry

```yaml
source_name: "CPCB National Air Quality Index"
official_url: "https://www.cpcb.gov.in/"
dataset_url: "https://www.cpcb.gov.in/national-air-quality-index/ and https://airquality.cpcb.gov.in/AQI_India/"
api_documentation_url: "No stable official public API documentation was identified in reviewed official sources. Treat CPCB AQI as portal/dashboard/bulletin/repository source until access terms are verified."
category: "India air quality; National AQI, city/station AQI context, CAAQM station context, air-quality bulletins and AQI methodology"
geography: "India; city, station, monitoring-network and pollutant coverage depend on CPCB/SPCB/PCC station availability and selected dashboard/repository/bulletin view"
time_coverage: "Dashboard/repository/bulletin dependent. Current AQI, archive AQI bulletins, CAAQM station lists and repository views must be reviewed for selected cities/stations, parameters and time windows before use."
update_frequency: "Near-real-time/hourly or daily only where the official CPCB AQI portal, bulletin or repository confirms it for the selected view. Otherwise treat as dataset-specific and not live."
realtime_status: "near-real-time"

free_to_access: "Yes for public website/dashboard viewing. This does not imply permission for automated API use, scraping, redistribution, commercial reuse or public chart publication."
commercial_use_allowed: "Needs verification. Public visibility of CPCB AQI data does not confirm commercial reuse. Track & Tote must verify CPCB terms, copyright policy, AQI portal terms, attribution, cache/snapshot and output-use rules before production."
attribution_required: "Needs verification. Any public display should cite CPCB and relevant station/provider context, but exact attribution wording and licence/terms requirements must be verified before production."
attribution_text: "Suggested pattern: Central Pollution Control Board, National Air Quality Index / CAAQM data, [city/station], [pollutant/AQI metric], [observation window], [source URL], accessed [retrieved_at]. Include station name/code, averaging period, unit where applicable, AQI category, retrieval time, methodology note and transformation notes. Final wording needs CPCB/portal terms verification."
license_name: "CPCB website terms/copyright policy and AQI portal-specific terms; no explicit reusable data licence confirmed for Track & Tote use"
license_url: "https://www.cpcb.gov.in/ and https://www.cpcb.gov.in/national-air-quality-index/"

api_key_required: "Needs verification. No approved official public API/key workflow was identified. Do not use undocumented dashboard endpoints as a connector without explicit access review."
rate_limits: "Needs verification. No official numeric API rate limit for third-party AQI use was confirmed. Any future connector must document approved access, request limits, retries and failure behavior."
cache_allowed: "Needs verification. Cache/snapshot only after CPCB terms, AQI portal terms, attribution, public-display, redistribution and retention rules are approved."
redistribution_allowed: "Needs verification. Do not redistribute raw CPCB AQI data, cached snapshots or downloads until licence, terms and public-display permissions are confirmed."

data_quality_confidence: "high"
known_limitations: "CPCB AQI is an official public air-quality communication system, but station availability, pollutant availability, instrument status, QA/QC, missing values, downtime, city/station coverage, averaging windows and archive completeness must be checked before claims. AQI compresses multiple pollutant sub-indices into one communication index; it is not a complete exposure assessment, regulatory report, company-level metric or substitute for pollutant concentration analysis."

observatory_use: "India air-quality context, city/station-level AQI context where licence and access permit, public observatory notes, source-aware AQI explanations and near-real-time/daily context only where source metadata confirms update behavior."
future_calculator_use: "Not approved. CPCB AQI may support contextual air-quality notes only after access, licence, attribution, methodology, quality, caching, redistribution and output-use rules are approved. It should not support company-level claims unless methodology and licence explicitly allow it."
fallback_plan: "Keep existing mock air-quality PM2.5/NO2/AQI datasets and routes until CPCB National AQI status advances beyond researching-license and an approved access path is documented."

source_readiness_status: "researching-license"
last_reviewed_date: "2026-06-04"
reviewer_notes: "No connector built. Before connector work, verify exact CPCB AQI source page/repository/bulletin, station/city selection, API or download access if any, copyright/terms, attribution wording, public-display permission, commercial reuse, redistribution, caching/snapshot retention, methodology caveats, station/network QA notes, update frequency and mock fallback."
```

## Review Notes

- CPCB publishes a National Air Quality Index page with links for NAQI, calculation method, national real-time network, limitations, public guidelines, AQI report, CAAQM station list, current AQI bulletin and archive AQI bulletin.
- CPCB's official air-quality portal exposes National AQI and an AQI data repository/dashboard for public viewing.
- The CPCB AQI methodology report explains that the National AQI is designed to communicate complex air-quality data as an index and colour/category system for public understanding.
- The AQI report states that the National AQI has six categories and considers eight pollutants with short-term standards; AQI can be calculated when enough pollutant data are available, and the worst pollutant sub-index determines the overall AQI.
- No stable official third-party API documentation or API licence was identified in reviewed official sources. Public dashboard visibility should not be treated as permission for automated ingestion, scraping, redistribution or commercial use.
- Track & Tote should treat CPCB AQI as official public observatory context, not as regulatory reporting evidence, company-level performance data or an approved production calculator input.

## Connector Gate

Do not build or enable a CPCB National AQI connector until:

1. The exact source path is selected: National AQI page, AQI India dashboard, AQI repository, current bulletin, archive bulletin, station list, manual snapshot or verified official API.
2. CPCB website terms, copyright policy, disclaimer, AQI portal terms and any Government of India website policies are reviewed.
3. Public-display, commercial reuse, redistribution and cache/snapshot retention permissions are approved.
4. API/download access method is explicitly approved; undocumented dashboard endpoints are not sufficient.
5. Attribution text is finalized for CPCB, city/station, metric, observation window, URL and retrieval time.
6. Station/network metadata are documented, including station name/code, city, pollutant coverage, averaging period, units, status and missing-value handling.
7. AQI methodology caveats are documented, including sub-index calculation, category interpretation, data sufficiency and pollutant availability.
8. Refresh cadence, stale-source behavior, failure behavior and mock fallback are defined.
9. Future calculator/report/company-level use boundaries are approved, if any.
10. Mock fallback behavior remains available and clearly labelled.

Detailed pre-connector checklist: [CPCB National AQI Verification Checklist](cpcb-national-aqi-verification.md).

## Primary References

- [CPCB](https://www.cpcb.gov.in/)
- [CPCB National Air Quality Index](https://www.cpcb.gov.in/national-air-quality-index/)
- [CPCB National AQI Portal](https://airquality.cpcb.gov.in/AQI_India/)
- [CPCB Air Quality Management Portals](https://www.cpcb.gov.in/air-quality-management-portals/)
- [National Air Quality Index Report PDF](https://airquality.cpcb.gov.in/ccr_docs/FINAL-REPORT_AQI_.pdf)
