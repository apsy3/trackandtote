# ILOSTAT Source Registry Entry

```yaml
source_name: "ILOSTAT"
official_url: "https://ilostat.ilo.org/"
dataset_url: "https://ilostat.ilo.org/data/ and https://ilostat.ilo.org/data/bulk/"
api_documentation_url: "https://webapps.ilo.org/ilostat-files/Documents/SDMX_User_Guide.pdf"
category: "International labour statistics; employment, labour market, wages, working time, occupational safety and health, industrial relations and SDG labour indicator benchmark context"
geography: "Global; country, region and country-group coverage depending on selected indicator/database"
time_coverage: "Indicator and database dependent. ILOSTAT includes annual, quarterly and monthly series for selected indicators; some modelled-estimate and projection files may extend to 2050. Occupational safety and health indicators are typically annual/periodic and must be verified per selected dataset."
update_frequency: "Dataset-dependent. ILOSTAT states the bulk download facility is updated daily at 12:00 pm Europe/Paris for datasets with new data, modifications or structural changes, but most labour/OHSE indicators are annual, periodic, lagged or revised."
realtime_status: "annual/versioned"

free_to_access: "Yes. ILOSTAT provides free access through the data portal, data explorer, bulk download facility and SDMX-based web service/API."
commercial_use_allowed: "Needs verification. ILO rights and permissions state that databases, datasets and accompanying reference metadata published from 3 May 2023 are covered by CC BY 4.0 unless otherwise indicated, but pre-3 May 2023 materials, microdata and third-party/co-produced materials may have different terms."
attribution_required: "Yes. ILOSTAT says ILOSTAT data are free to use and should be cited, and CC BY 4.0 requires attribution where applicable."
attribution_text: "Suggested pattern: International Labour Organization, [database or indicator name], ILOSTAT, https://ilostat.ilo.org/data/, accessed [retrieved_at]. Include indicator code/name, country, unit, sex/age/economic activity dimensions where relevant, time window, data source, data tool, licence note and transformation notes. Final wording needs verification per selected dataset."
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0) for ILO datasets/reference metadata published from 3 May 2023 unless otherwise indicated; dataset-specific exceptions may apply"
license_url: "https://www.ilo.org/rights-and-permissions and https://creativecommons.org/licenses/by/4.0/"

api_key_required: "No API key identified for the ILOSTAT bulk download facility or SDMX-based web service/API. Verify before connector work."
rate_limits: "Needs verification. No fixed numeric rate limit was confirmed in reviewed ILOSTAT pages. Future connector should use conservative request behavior and prefer cached bulk downloads/snapshots."
cache_allowed: "Needs verification. Track & Tote should cache only approved snapshots after licence, attribution, update cadence, redistribution, commercial reuse and methodology caveats are reviewed."
redistribution_allowed: "Needs verification. CC BY 4.0 generally permits redistribution with attribution and change indication, but selected datasets, pre-2023 materials, microdata exclusions and third-party restrictions must be checked."

data_quality_confidence: "high"
known_limitations: "ILOSTAT is an official international labour statistics portal, but indicator availability, source type, reporting year, revisions, modelled estimates, projections, comparability, definitions, occupational safety reporting practices, informal work coverage, missing values and country coverage vary. Some topics are not covered by ILOSTAT. Do not use country-level labour/OHSE indicators for company-level claims."

observatory_use: "Labour and occupational safety benchmark context, India/country-level labour and OHSE indicators where available, annual/periodic benchmark context, and source-aware comparisons across countries or years."
future_calculator_use: "Not approved. ILOSTAT may support contextual labour/OHSE benchmark notes, but not company-level OHSE claims, compliance evidence, calculator factors or reporting outputs unless licence, methodology, attribution, comparability, uncertainty and output-use rules explicitly allow it."
fallback_plan: "Keep existing mock ohse and related benchmark datasets/routes until ILOSTAT status advances beyond researching-license."

source_readiness_status: "researching-license"
last_reviewed_date: "2026-06-04"
reviewer_notes: "No connector built. Before connector work, verify exact ILOSTAT database/indicator, licence date/status, citation text, API/bulk access path, cache/snapshot retention, redistribution, commercial reuse, indicator metadata, methodology notes, update cadence, data source type, missing-value handling, dimension mapping and whether any future report/calculator use is permitted."
```

## Review Notes

- ILOSTAT is the International Labour Organization's statistical portal for labour market and decent-work data.
- ILOSTAT provides data through the portal/data explorer, bulk download facility and SDMX-based web service/API.
- ILOSTAT citation guidance says ILOSTAT data are free to use and should be cited regardless of the data tool used.
- ILO rights and permissions state that datasets and accompanying reference metadata published from 3 May 2023 are covered by CC BY 4.0 unless otherwise indicated, while microdata submitted by or obtained from constituents and partner institutions are excluded from that open licence.
- ILOSTAT bulk data are updated daily only for datasets with new data, modifications or structural changes. This does not make labour/OHSE indicators real-time.
- ILOSTAT should be used for country-level or international benchmark context, not company-level OHSE claims or compliance evidence.

## Connector Gate

Do not build or enable an ILOSTAT connector until:

1. The exact ILOSTAT database and indicator codes are selected.
2. Licence status is verified for each selected dataset, including publication date and any exceptions.
3. Attribution/citation text is finalized for public charts, notes, reports and cached snapshots.
4. Commercial reuse, redistribution and cache/snapshot retention are approved.
5. API or bulk-download request behavior, pagination/size limits and refresh cadence are documented.
6. Metadata fields expose indicator code/name, country, unit, dimensions, time window, source type, latest observation, retrieved-at date, confidence, status and transformation notes.
7. Methodology caveats are documented for occupational safety reporting, labour-force definitions, modelled estimates, projections, missing values and cross-country comparability.
8. Mock fallback behavior remains available and clearly labelled.

Detailed pre-connector checklist: [ILOSTAT Verification Checklist](ilostat-verification.md).

## Primary References

- [ILOSTAT official website](https://ilostat.ilo.org/)
- [ILOSTAT Data](https://ilostat.ilo.org/data/)
- [ILOSTAT Bulk Download Facility](https://ilostat.ilo.org/data/bulk/)
- [ILOSTAT Get Started](https://ilostat.ilo.org/about/get-started/)
- [ILOSTAT Dissemination and Analysis](https://ilostat.ilo.org/about/dissemination-and-analysis/)
- [ILOSTAT SDMX API Guide](https://webapps.ilo.org/ilostat-files/Documents/SDMX_User_Guide.pdf)
- [ILO Rights and Permissions](https://www.ilo.org/rights-and-permissions)
- [ILOSTAT Concepts and Definitions](https://ilostat.ilo.org/methods/concepts-and-definitions/)
