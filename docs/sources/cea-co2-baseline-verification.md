# CEA CO2 Baseline Database Verification Checklist

Purpose: verify whether the Central Electricity Authority CO2 Baseline Database can be safely used for Track & Tote public pages and any future Scope 2 / power-sector GHG calculator or reporting work before a connector is built.

Last reviewed: 2026-06-04

Source readiness: `researching-license`

Production approval: `not approved yet`

Status key:

- `confirmed` - supported by reviewed CEA page/policy/report-source evidence.
- `needs-verification` - plausible or partially supported, but not approved for Track & Tote production use.
- `not-allowed` - should not be done at this stage.
- `not-applicable` - not relevant to this source or phase.

## 1. Summary Recommendation

| Item | Status | Notes |
|---|---|---|
| Use CEA CO2 Baseline Database as a planning source | confirmed | Appropriate candidate for India grid emission factor and annual/versioned power-sector GHG context. |
| Build a Track & Tote connector | not-allowed | Do not build until licence, attribution, extraction, cache, redistribution, versioning, methodology and calculator-use rules are approved. |
| Use CEA values on public pages | needs-verification | Public display may be possible with attribution and caveats, but it is not approved until CEA terms and report/version metadata are verified. |
| Use for real-time claims | not-allowed | The source is versioned/annual, not live or near-real-time. |
| Use in calculator/report outputs | needs-verification | Possible future Scope 2/power-sector factor use only after formal method, version, permission, citation and snapshot requirements are approved. |
| Keep mock fallback | confirmed | Existing mock grid-factor data must remain available and clearly labelled until approval. |

Recommendation: keep CEA CO2 Baseline Database at `researching-license`. It is likely a priority source for India grid-factor context, but it is not production-approved yet.

## 2. Access Method

| Check | Status | Notes |
|---|---|---|
| Official source page exists | confirmed | CEA hosts a "CDM - CO2 Baseline Database" page with versioned database and user-guide downloads. |
| Current listed release identified | confirmed | Version 21.0 is listed on the official CEA page with XLSX database and PDF user guide links. |
| Historical versions listed | confirmed | The official page lists Version 1.0 through Version 21.0, plus a draft version; several earlier versions are marked outdated. |
| Access is file-based | confirmed | Current access is through XLSX/database and PDF user-guide downloads, not an API. |
| Official page availability/stability | needs-verification | CEA URLs and uploads should be rechecked before connector work; the site also had a local certificate-chain issue in curl during review. |

## 3. API Availability

| Check | Status | Notes |
|---|---|---|
| Public API identified | not-applicable | No official API was found for the CEA CO2 Baseline Database. |
| API key required | not-applicable | No API identified. |
| Direct chart-to-source calls | not-allowed | Track & Tote must not call or scrape CEA files from chart components. |
| Connector style | needs-verification | Future connector would likely be a versioned-file ingestion/extraction job, not a live API connector. |

## 4. Download/Manual Extraction Requirements

| Check | Status | Notes |
|---|---|---|
| Version 21.0 XLSX downloadable | confirmed | Official page links to `CO2_Database_V_21.0.xlsx`. |
| Version 21.0 user guide downloadable | confirmed | Official page links to `User_Guide_V_21.0.pdf`. |
| Workbook sheet structure inspected | confirmed | Temporary inspection of the XLSX showed sheets including `Data`, `Results`, `Transfer (1G)`, `Units + Abbrev`, and `Assumptions`. |
| Extraction rules documented | needs-verification | Need to identify exact cells/tables, factor types, units, reporting periods and assumptions from the user guide. |
| Cross-version extraction compatibility | needs-verification | Extraction logic must be tested against current and prior versions before any trend chart. |
| Manual review step required | confirmed | Because this is an official versioned workbook/report, initial extraction should require human review before public use. |

## 5. Attribution/Citation Requirements

| Check | Status | Notes |
|---|---|---|
| Attribution source identified | confirmed | Attribute Central Electricity Authority, Government of India, database version and user guide/report version. |
| Final attribution text | needs-verification | Must be finalized before production public charts or reports. |
| Version citation required | confirmed | Every chart/report should include database version and user-guide version because values and methods can change. |
| Retrieved-at date required | confirmed | Required by Track & Tote governance and useful for official versioned documents. |
| CEA endorsement may be implied | not-allowed | Track & Tote must not imply CEA endorsement, certification, approval or partnership. |

## 6. Licence/Terms Structure

| Check | Status | Notes |
|---|---|---|
| CEA website policy reviewed | confirmed | CEA website policy includes privacy, disclaimer and hyperlinking language. |
| CEA footer copyright reviewed | confirmed | CEA website footer states copyright/all rights reserved. |
| Explicit open-data licence identified | needs-verification | No explicit open licence for the CO2 Baseline Database was confirmed in reviewed page/policy text. |
| Report-specific terms reviewed | needs-verification | User guide/report PDF terms need human/legal review before production use. |
| Applicable India government reuse terms | needs-verification | Confirm whether any broader government/open-data policy applies to CEA publications and this database. |
| Disclaimer requirements | needs-verification | CEA policy says website content should not be treated as legal statement; Track & Tote should capture relevant caveats. |

## 7. Commercial Reuse

| Check | Status | Notes |
|---|---|---|
| Editorial public website use | needs-verification | Not approved until CEA terms, attribution and public display requirements are reviewed. |
| Commercial reuse | needs-verification | No explicit commercial reuse permission confirmed. |
| Paid report or calculator output use | needs-verification | Do not use CEA factors in future paid outputs until permission, citation, snapshot and methodology rules are approved. |
| Marketing implication of official approval | not-allowed | Do not use CEA data to imply official validation of Track & Tote products or reports. |

## 8. Redistribution

| Check | Status | Notes |
|---|---|---|
| Republishing CEA XLSX/PDF files | not-allowed | Do not redistribute official source files from Track & Tote until permission is confirmed. |
| Publishing extracted raw factor tables | needs-verification | Needs licence/redistribution review before exposing raw values or downloads. |
| Publishing derived charts | needs-verification | May be possible with citation and caveats, but not production-approved yet. |
| Sharing cached snapshots externally | needs-verification | Needs explicit cache/snapshot and redistribution policy. |
| Linking to official source page | confirmed | CEA hyperlinking policy says direct linking does not require prior permission, while asking to be informed and prohibiting framing. |

## 9. Caching/Snapshotting

| Check | Status | Notes |
|---|---|---|
| Caching needed for Track & Tote architecture | confirmed | Project rules require connector -> normalizer -> cache/snapshot -> API endpoint -> chart. |
| Direct public-source calls from chart components | not-allowed | Never fetch CEA files directly from React chart components. |
| Versioned snapshot strategy needed | confirmed | Official/versioned factors should be stored as immutable snapshots once approved. |
| Cache retrieved_at metadata | confirmed | Required by Track & Tote source governance. |
| Cache source version metadata | confirmed | Required for CEA versioned factors. |
| Cache extraction notes | confirmed | Required because extraction is workbook/report based. |
| Indefinite raw file retention | not-allowed | Do not decide retention of official XLSX/PDF files until licence/redistribution rules are approved. |
| Snapshot use for official reports | needs-verification | Future report outputs should use saved, versioned snapshots only after permission and citation rules are approved. |

## 10. Derived Charts/Public Display

| Check | Status | Notes |
|---|---|---|
| India grid emission factor context charts | needs-verification | Intended use case, pending licence, attribution, extraction and version review. |
| Annual/versioned electricity emission factor trend | needs-verification | Requires cross-version extraction checks and comparability notes. |
| Scope 2 explanatory charts | needs-verification | Possible public explanation after factor-type and boundary review. |
| Real-time grid carbon intensity charts | not-allowed | This database is annual/versioned and should not be presented as live grid carbon intensity. |
| Mock-data public display | confirmed | Existing charts may use labelled mock grid-factor data until source approval. |

## 11. Use In Calculator/Report Outputs

| Check | Status | Notes |
|---|---|---|
| Calculator logic now | not-applicable | No calculator is being built in this phase. |
| Future Scope 2 factor use | needs-verification | High-priority future use, but only after method, factor selection, versioning, attribution and licence approval. |
| Future power-sector GHG calculator use | needs-verification | Needs specific factor type, boundary, vintage and uncertainty rules. |
| Future report output | needs-verification | Requires saved snapshot ID, source version, retrieved-at date, factor type, unit, method notes and citation. |
| Use without version/method disclosure | not-allowed | CEA factors must not be used without version, factor type, reporting period and method context. |

## 12. Required Metadata Fields For Every CEA CO2 Factor Chart

Every future CEA-backed chart must expose at least:

- `source`
- `source_url`
- `database_url`
- `user_guide_url`
- `database_version`
- `user_guide_version`
- `reporting_year`
- `factor_type`
- `grid_boundary`
- `unit`
- `value`
- `frequency`
- `latest_observation`
- `retrieved_at`
- `license_note`
- `attribution_text`
- `disclaimer_note`
- `confidence`
- `source_readiness_status`
- `extraction_method`
- `extraction_notes`
- `transformation_notes`
- `known_limitations`
- `mock_fallback_dataset`

Recommended additional fields:

- `workbook_sheet`
- `workbook_cell_range`
- `methodology_section`
- `operating_margin_note`
- `build_margin_note`
- `combined_margin_note`
- `revision_note`
- `outdated_version_flag`
- `report_snapshot_id`

## 13. Versioning Requirements

| Requirement | Status | Notes |
|---|---|---|
| Store database version | confirmed | Version number is essential for every extracted value. |
| Store user-guide version | confirmed | User-guide method/version must match database version. |
| Store source URLs | confirmed | Keep page, XLSX and PDF URLs. |
| Store retrieval date | confirmed | Needed for audit trail and report reproducibility. |
| Store extracted workbook sheet/cell/table | needs-verification | Must be defined during connector/extraction design. |
| Store outdated-version flag | confirmed | CEA marks some older versions outdated; charts should not silently mix outdated/current values. |
| Compare factors across versions | needs-verification | Trend use requires comparability review; version-to-version method changes may affect interpretation. |
| Archive approved snapshots | needs-verification | Needs licence/permission and retention policy. |

## 14. Risks And Unknowns

| Risk or unknown | Status | Notes |
|---|---|---|
| Explicit reuse licence unclear | needs-verification | No open licence confirmed in reviewed CEA page/policy text. |
| Commercial reuse unclear | needs-verification | Especially important for future calculator/report use. |
| Redistribution unclear | needs-verification | Avoid republishing official files or raw tables until approved. |
| Method/version comparability | needs-verification | Factor definitions and assumptions may change between versions. |
| Manual extraction errors | confirmed | XLSX/PDF extraction requires validation checks. |
| API absence | confirmed | Source is file-based, so refresh and extraction must be version-aware. |
| Site certificate-chain issue in shell fetch | confirmed | Local curl required insecure-certificate mode during review; future automation should handle official source verification carefully. |
| Legal-use disclaimer | needs-verification | CEA policy includes disclaimer language; public notes should not present values as legal advice or official certification. |

## 15. Approval Decision

Production approval: `not approved yet`

CEA CO2 Baseline Database is not approved for production connectors, public real-data charts, calculator outputs, or report outputs until these are completed:

1. Verify CEA/database/user-guide licence and applicable government reuse terms.
2. Finalize attribution, citation and disclaimer text.
3. Confirm commercial reuse and public display for Track & Tote use cases.
4. Confirm redistribution and cache/snapshot retention rules.
5. Document factor types, grid boundary, units, reporting year and methodology from the matching user guide.
6. Define extraction logic, validation checks and cross-version compatibility rules.
7. Define immutable versioned snapshot handling for reports/calculators.
8. Keep mock fallback available and clearly labelled.

## Primary References

- [Central Electricity Authority](https://cea.nic.in/)
- [CEA CDM - CO2 Baseline Database page](https://cea.nic.in/cdm-co2-baseline-database/?lang=en)
- [CEA CO2 Baseline Database Version 21.0 XLSX](https://cea.nic.in/wp-content/uploads/baseline/2025/12/CO2_Database_V_21.0.xlsx)
- [CEA User Guide Version 21.0 PDF](https://cea.nic.in/wp-content/uploads/baseline/2025/12/User_Guide_V_21.0.pdf)
- [CEA Website Policies](https://cea.nic.in/website-policies/?lang=en)
- [CEA Website Policy link](https://cea.nic.in/website-policy/?lang=en)
