# CEA CO2 Baseline Database Source Registry Entry

```yaml
source_name: "Central Electricity Authority CO2 Baseline Database"
official_url: "https://cea.nic.in/"
dataset_url: "https://cea.nic.in/cdm-co2-baseline-database/?lang=en"
api_documentation_url: "Not available. Current official access is through versioned XLSX/database and PDF user-guide downloads from the CEA CO2 Baseline Database page."
category: "India electricity grid emission factors / power-sector GHG context"
geography: "India grid and power-sector context; exact factor geography, grid boundary and factor type must follow the selected CEA database version and user guide"
time_coverage: "Versioned database releases from Version 1.0 through Version 21.0 are listed on the official CEA page. The current listed release is Version 21.0, with older versions marked outdated for some earlier releases."
update_frequency: "Annual/versioned, dependent on CEA publication schedule"
realtime_status: "annual/versioned"

free_to_access: "The CEA page publicly lists downloadable XLSX/database files and PDF user guides. Access is free-to-view/download, subject to CEA website policies and report-specific terms."
commercial_use_allowed: "Needs verification. The CEA website footer states all rights reserved and no explicit open-data/commercial reuse licence was found in the reviewed page/policy text."
attribution_required: "Yes. Any use should attribute Central Electricity Authority, Government of India, the database version, user guide/report version, retrieved-at date and source URL. Final wording needs verification."
attribution_text: "Suggested pattern: Central Electricity Authority, Government of India, CO2 Baseline Database, Version 21.0, accessed from the official CEA CO2 Baseline Database page on [retrieved_at]. Include factor type, reporting period, workbook/report version and extraction notes. Final wording needs verification."
license_name: "Needs verification. No explicit open licence confirmed; CEA website footer states copyright/all rights reserved."
license_url: "https://cea.nic.in/website-policies/?lang=en"

api_key_required: "Not applicable. No API identified."
rate_limits: "Not applicable for API use. Access is manual/versioned file download; ordinary website-use expectations and any government website policies apply. Automated scraping/download frequency needs verification before connector work."
cache_allowed: "Needs verification. Track & Tote should keep local versioned snapshots only after licence, attribution, redistribution and official-report use rules are approved."
redistribution_allowed: "Needs verification. Public redistribution of CEA XLSX/PDF files or extracted raw factors is not approved until CEA/government terms and report-specific permissions are reviewed."

data_quality_confidence: "high"
known_limitations: "Official/versioned source, but not real-time. Factors and methods depend on the selected database and user guide version. Extraction is file-based and may require manual workbook parsing. Factor type, grid boundary, reporting year, combined margin/operating margin/build margin definitions, assumptions, exclusions, revisions and calculator suitability must be checked before claims."

observatory_use: "India grid emission factor context, annual/versioned electricity emission-factor trends, and public explanations of power-sector GHG context after version and methodology review."
future_calculator_use: "Not approved. Possible future Scope 2 or power-sector GHG factor input only after licence, attribution, snapshot retention, versioning, methodology, factor selection, boundary and calculator-use requirements are approved."
fallback_plan: "Keep existing mock grid-factor dataset/routes until CEA CO2 Baseline Database status advances beyond researching-license."

source_readiness_status: "researching-license"
last_reviewed_date: "2026-06-04"
reviewer_notes: "No connector built. Before connector work, verify CEA licence/permission terms, attribution wording, commercial reuse, redistribution, cache/snapshot retention, official versioning, methodology, factor selection rules, workbook extraction logic, data-quality checks, calculator suitability and whether direct permission is needed for public charts or report outputs."
```

## Review Notes

- The official CEA page is titled "CDM - CO2 Baseline Database - Central Electricity Authority" and lists versioned database and user-guide downloads.
- The latest listed release reviewed here is Version 21.0, with direct links to a Version 21.0 XLSX database and a Version 21.0 PDF user guide.
- Older versions are also listed on the official page. Several earlier versions are marked "OUTDATED" on the CEA page.
- The current Version 21.0 workbook is an XLSX file, not an API. Temporary inspection showed workbook sheets including `Data`, `Results`, `Transfer (1G)`, `Units + Abbrev`, and `Assumptions`.
- The source is appropriate for annual/versioned India grid emission factor context, not real-time electricity or emissions claims.
- CEA website policy text includes a disclaimer that website content should not be treated as legal statement, and the footer states copyright/all rights reserved. No explicit open-data licence was confirmed during this review.
- Public chart/report use needs careful version metadata because factors, assumptions and methodology can change between CEA database versions.

## Connector Gate

Do not build or enable a CEA CO2 Baseline Database connector until:

1. CEA website policy, report/user-guide terms and any applicable India government reuse terms are reviewed.
2. Attribution/citation wording is finalized for public charts, notes, reports and cached snapshots.
3. Public display, commercial reuse and redistribution rules are approved.
4. Cache/snapshot retention rules are approved for versioned official reports.
5. The selected factor types and calculation methods are documented from the matching user guide version.
6. Workbook extraction logic is specified and tested against the current version and at least one prior version.
7. Every chart exposes version, reporting year, factor type, unit, source URL, retrieved-at date, confidence, status and transformation notes.
8. Future calculator use is separately approved and isolated from public observatory display logic.
9. Mock fallback behavior remains available and clearly labelled.

Detailed pre-connector checklist: [CEA CO2 Baseline Database Verification Checklist](cea-co2-baseline-verification.md).

## Primary References

- [Central Electricity Authority](https://cea.nic.in/)
- [CEA CDM - CO2 Baseline Database page](https://cea.nic.in/cdm-co2-baseline-database/?lang=en)
- [CEA CO2 Baseline Database Version 21.0 XLSX](https://cea.nic.in/wp-content/uploads/baseline/2025/12/CO2_Database_V_21.0.xlsx)
- [CEA User Guide Version 21.0 PDF](https://cea.nic.in/wp-content/uploads/baseline/2025/12/User_Guide_V_21.0.pdf)
- [CEA Website Policies](https://cea.nic.in/website-policies/?lang=en)
- [CEA Website Policy link](https://cea.nic.in/website-policy/?lang=en)
