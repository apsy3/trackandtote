# EDGAR Emissions Database Source Registry Entry

```yaml
source_name: "EDGAR - Emissions Database for Global Atmospheric Research"
official_url: "https://edgar.jrc.ec.europa.eu/"
dataset_url: "https://edgar.jrc.ec.europa.eu/emissions_data_and_maps and https://edgar.jrc.ec.europa.eu/dataset_ghg2025"
api_documentation_url: "Not available. Current official access is through EDGAR web pages, data explorer views, downloadable ZIP/XLSX/XLS/NetCDF files and JRC Data Catalogue references."
category: "Global greenhouse gas and air-pollutant emissions inventory; country, sector and gridded benchmark context"
geography: "Global; all countries for country totals and 0.1 x 0.1 degree gridmaps for selected datasets"
time_coverage: "For EDGAR_2025_GHG, annual totals by sector and country are provided for 1970-2024 for main GHG series, with F-gases from 1990. Monthly totals by sector and country are provided for 1970-2024 for the three main greenhouse gases. Some gridmap products and pollutants have different coverage."
update_frequency: "Annual/release-based; dataset-specific release cycles and archived versions must be tracked"
realtime_status: "annual/versioned"

free_to_access: "Official EDGAR pages provide public web access and downloadable files. Some downloads are large ZIP/NetCDF files. Access is free-to-view/download, subject to dataset-specific conditions of use."
commercial_use_allowed: "Needs verification. EU-owned EDGAR material is generally CC BY 4.0 unless otherwise noted, but IEA-EDGAR CO2 is based on IEA data licensed under CC BY-NC-ND 4.0, and use outside those terms requires IEA contact/approval."
attribution_required: "Yes. EDGAR dataset pages require acknowledgement of the data source with reference to the relevant EDGAR website and/or reports."
attribution_text: "Suggested pattern: European Commission, Joint Research Centre (JRC), EDGAR Community GHG Database, EDGAR_2025_GHG (2025), including IEA-EDGAR CO2 where applicable. Include indicator/gas, sector, country, time window, unit, dataset version, retrieved-at date, source URL and relevant report citation. Final wording needs verification."
license_name: "Mixed / dataset-specific. EU-owned material: Creative Commons Attribution 4.0 International (CC BY 4.0) unless otherwise noted. IEA-EDGAR CO2: CC BY-NC-ND 4.0 based on IEA data."
license_url: "https://edgar.jrc.ec.europa.eu/terms and https://edgar.jrc.ec.europa.eu/dataset_ghg2025"

api_key_required: "Not applicable. No public EDGAR API identified."
rate_limits: "Not applicable for API use. Access is file/download based; automated bulk downloading, mirroring or repeated requests need verification against EDGAR/European Commission service-use expectations."
cache_allowed: "Needs verification. Track & Tote should cache only versioned snapshots after licence, attribution, redistribution and IEA-related restrictions are approved."
redistribution_allowed: "Needs verification. EU-owned CC BY 4.0 material is generally reusable with attribution, but IEA-EDGAR CO2 is CC BY-NC-ND 4.0 and raw/derived redistribution rules must be reviewed per selected dataset."

data_quality_confidence: "high"
known_limitations: "EDGAR is an independent scientific emissions inventory, not a national official inventory and not real-time. Values are estimated from international statistics, activity data, emission factors, spatial proxies and Fast Track methods for recent years. Dataset versions, gases, sectors, units, country coverage, GWP basis, LULUCF inclusion/exclusion, IEA-EDGAR CO2 terms, gridded resolution and methodology changes must be reviewed before claims."

observatory_use: "India total GHG emissions trend context, country/sector emissions benchmark context, annual/release-based emissions notes, and comparison against public policy questions after dataset/version review."
future_calculator_use: "Not approved. EDGAR may be useful as contextual benchmark data, but not company-level emissions calculations unless methodology, licence, attribution, redistribution, commercial reuse and scope-boundary rules explicitly allow it."
fallback_plan: "Keep existing mock ghg-emissions and monthly-emissions datasets/routes until EDGAR status advances beyond researching-license."

source_readiness_status: "researching-license"
last_reviewed_date: "2026-06-04"
reviewer_notes: "No connector built. Before connector work, verify selected EDGAR dataset/version, IEA-EDGAR CO2 restrictions, commercial reuse, attribution text, redistribution, cache/snapshot retention, derived chart permissions, methodology caveats, GWP basis, units, LULUCF treatment, recent-year Fast Track treatment, country/sector mapping and whether any future calculator/report use is permitted."
```

## Review Notes

- EDGAR is managed by the European Commission Joint Research Centre and provides independent global anthropogenic emissions estimates for greenhouse gases and air pollutants.
- EDGAR provides national totals and 0.1 x 0.1 degree gridmaps. The EDGAR methodology page describes a technology-based emission-factor approach applied consistently across countries.
- The current EDGAR GHG data page reviewed here is `EDGAR_2025_GHG`, covering annual country/sector totals for 1970-2024 and monthly totals for 1970-2024 for the three main greenhouse gases.
- EDGAR_2025_GHG includes the EDGAR Community GHG database and IEA-EDGAR CO2. The IEA-EDGAR CO2 component uses IEA data and is subject to CC BY-NC-ND 4.0 restrictions.
- EU-owned material is generally CC BY 4.0 unless otherwise noted, but EDGAR terms require users to consult the full citation and conditions on each dataset page.
- EDGAR_2025_GHG has dataset-specific citation text for both the report and the underlying data. Track & Tote must preserve dataset version, report citation, gas, sector, unit, country, source URL and retrieved-at timestamp.
- EDGAR is annual/release-based and should not be described as real-time, near-real-time or facility/company-level measurement.

## Connector Gate

Do not build or enable an EDGAR connector until:

1. The exact EDGAR dataset/version is selected and documented.
2. Dataset-specific conditions of use are reviewed, including IEA-EDGAR CO2 restrictions.
3. Attribution/citation text is finalized for public charts, notes, reports and cached snapshots.
4. Commercial reuse and future calculator/report use are explicitly reviewed.
5. Cache/snapshot retention and redistribution rules are approved.
6. Download/manual extraction rules are specified for ZIP/XLSX/XLS/NetCDF inputs.
7. Metadata fields expose dataset version, gas, sector, country, unit, GWP basis, LULUCF treatment, latest observation, retrieved-at date, confidence, status and transformation notes.
8. Methodology caveats are documented for recent-year Fast Track estimates, gridded data, sector mappings and country totals.
9. Mock fallback behavior remains available and clearly labelled.

Detailed pre-connector checklist: [EDGAR Emissions Database Verification Checklist](edgar-verification.md).

## Primary References

- [EDGAR official website](https://edgar.jrc.ec.europa.eu/)
- [EDGAR Emissions Data and Maps](https://edgar.jrc.ec.europa.eu/emissions_data_and_maps)
- [EDGAR_2025_GHG dataset page](https://edgar.jrc.ec.europa.eu/dataset_ghg2025)
- [EDGAR Terms of Use](https://edgar.jrc.ec.europa.eu/terms)
- [EDGAR Methodology](https://edgar.jrc.ec.europa.eu/methodology)
- [JRC Data Catalogue EDGAR collection](https://data.jrc.ec.europa.eu/collection/EDGAR)
- [GHG emissions of all world countries - 2025 Report](https://edgar.jrc.ec.europa.eu/report_2025)
