# CPCB National AQI Verification Checklist

Purpose: verify whether CPCB National AQI data can be safely used for Track & Tote public pages and any future calculator or reporting work before a connector is built.

Last reviewed: 2026-06-04

Source readiness: `researching-license`

Production approval: `not approved yet`

Status key:

- `confirmed` - supported by reviewed official CPCB/National AQI documentation.
- `needs-verification` - plausible or partially supported, but not approved for Track & Tote production use.
- `not-allowed` - should not be done at this stage.
- `not-applicable` - not relevant to this source or phase.

## 1. Summary Recommendation

| Item | Status | Notes |
|---|---|---|
| Use CPCB National AQI as a planning source | confirmed | Appropriate candidate for India air-quality context and official AQI method notes. |
| Build a Track & Tote connector | not-allowed | Do not build until access, terms, attribution, cache, redistribution, methodology and public-display rules are approved. |
| Use CPCB AQI values on public pages | needs-verification | Public display may be feasible with attribution and caveats, but licence/access/public-display terms must be verified first. |
| Use for near-real-time/daily context | needs-verification | Only where the selected official view confirms observation/update cadence and station status. |
| Use for regulatory reporting claims | not-allowed | CPCB AQI should not be treated as Track & Tote regulatory reporting evidence. |
| Use for company-level claims | not-allowed | Not approved unless future methodology and licence review explicitly allow it. |
| Keep mock fallback | confirmed | Existing mock PM2.5/NO2/AQI datasets/routes must remain available and clearly labelled until approval. |

Recommendation: keep CPCB National AQI at `researching-license`. It is a high-priority official India air-quality source, but production use is blocked until public-display, API/access, caching, redistribution and attribution rules are clear.

## 2. Access Method

| Check | Status | Notes |
|---|---|---|
| CPCB official site exists | confirmed | CPCB publishes air-quality management and National AQI pages. |
| National AQI page exists | confirmed | CPCB National AQI page lists AQI method, network, limitations, station list, current bulletin and archive bulletin. |
| National AQI portal exists | confirmed | CPCB's airquality portal exposes public AQI views and repository/dashboard access. |
| Current and archive bulletins exist | confirmed | The National AQI page links to current and archive AQI bulletins. |
| Exact access path selected | needs-verification | Choose dashboard/repository/bulletin/manual snapshot or a verified official API before connector work. |
| Automated ingestion allowed | needs-verification | Public web access does not confirm permission to scrape, poll or ingest data automatically. |

## 3. API Availability

| Check | Status | Notes |
|---|---|---|
| Stable official API documentation identified | not-applicable | No stable official public API documentation for third-party CPCB AQI use was identified in reviewed sources. |
| Undocumented dashboard endpoints | not-allowed | Do not treat browser network calls or dashboard endpoints as approved APIs without explicit access/terms review. |
| API key requirement | needs-verification | No approved public API/key workflow has been confirmed. |
| API rate limits | needs-verification | No official third-party numeric rate limit has been approved for Track & Tote. |
| Direct chart-to-source calls | not-allowed | Never fetch CPCB AQI pages, files or endpoints directly from React chart components. |
| Connector style | needs-verification | Future ingestion should likely use reviewed snapshots/bulletins unless official API documentation and terms are found. |

## 4. API Key/Access Requirements

| Check | Status | Notes |
|---|---|---|
| API key needed now | not-applicable | No connector is being built in this phase. |
| Official key/account path identified | needs-verification | Must be verified if CPCB exposes a sanctioned API route. |
| Access terms documented | needs-verification | Required before automated download, scraping or API polling. |
| Secret committed to repo | not-allowed | Any future key or credential must not be committed to Git, static output or frontend bundles. |
| Browser exposure | not-allowed | Any future API/key access must remain outside frontend chart components. |

## 5. Download/Manual Extraction Requirements

| Check | Status | Notes |
|---|---|---|
| Bulletins/repository views exist | confirmed | CPCB National AQI page links current/archive bulletins and AQI repository/dashboard views are publicly discoverable. |
| Exact file/view selected | needs-verification | Need selected bulletin, repository export, station list or manually reviewed snapshot before extraction work. |
| Manual metadata review required | confirmed | Station/city/pollutant/time-window metadata must be verified before public display. |
| Extraction reliability validated | needs-verification | Values, categories, timestamps, station labels, units and missing values must be checked against source view/file. |
| Raw files stored indefinitely | needs-verification | Retention requires licence, attribution, redistribution and public-display approval. |

## 6. Attribution/Citation Requirements

| Check | Status | Notes |
|---|---|---|
| CPCB citation needed | confirmed | CPCB should be cited for any CPCB AQI-derived chart or note. |
| Station/city metadata required | confirmed | AQI values need city/station and time-window context to be meaningful. |
| Final attribution text | needs-verification | Must be finalized after CPCB terms/copyright/portal terms are reviewed. |
| Methodology citation needed | confirmed | AQI explanation should cite the CPCB National AQI methodology/report where relevant. |
| Official endorsement implied | not-allowed | Track & Tote must not imply CPCB/MoEFCC/Government of India approval, certification or endorsement. |

## 7. Licence/Terms Structure

| Check | Status | Notes |
|---|---|---|
| CPCB website policy links exist | confirmed | CPCB footer exposes Disclaimer, Website Policy, Copyright Policy and Terms & Conditions links. |
| AQI portal-specific terms reviewed | needs-verification | Need to verify whether the airquality portal has separate terms, copyright or data-use restrictions. |
| Reusable data licence identified | needs-verification | No explicit reusable data licence for Track & Tote AQI use was confirmed. |
| Commercial reuse terms reviewed | needs-verification | Must be approved before production public or future paid/report use. |
| Government Open Data Licence applicability | needs-verification | Do not assume GODL or another open licence applies unless the selected source explicitly says so. |

## 8. Commercial Reuse

| Check | Status | Notes |
|---|---|---|
| Commercial reuse approved for all CPCB AQI data | needs-verification | Not confirmed. Public dashboard visibility is not commercial reuse permission. |
| Public website use | needs-verification | Public display must wait for terms/attribution/cache/redistribution approval. |
| Paid report/calculator use | needs-verification | Not approved until legal/method/source review is complete. |
| Official logo/name use | not-allowed | Do not use CPCB/MoEFCC/Government of India names, emblems or logos as endorsements. |
| Company-level AQI claims | not-allowed | Not approved for company/facility claims. |

## 9. Redistribution

| Check | Status | Notes |
|---|---|---|
| Raw AQI data redistribution | needs-verification | Do not republish raw CPCB values, exports or files until terms permit it. |
| Cached snapshot sharing | needs-verification | Needs cache, attribution, retention, public-download and redistribution policy before sharing. |
| Derived chart publication | needs-verification | Likely possible only after terms and attribution are approved. |
| Downloadable Track & Tote extracts | not-allowed | Do not provide CPCB-backed raw downloads until redistribution rules are approved. |
| Third-party station/source constraints | needs-verification | SPCB/PCC/station ownership and provider context may require additional attribution or restrictions. |

## 10. Caching/Snapshotting

| Check | Status | Notes |
|---|---|---|
| Cache path required | confirmed | Project architecture requires connector -> normalizer -> cache/snapshot -> API endpoint -> chart. |
| Direct source calls from charts | not-allowed | Never fetch CPCB pages, dashboards, files or endpoints directly from chart components. |
| Store retrieved_at | confirmed | Required by Track & Tote governance. |
| Store latest_observation | confirmed | Required to avoid false live/complete claims. |
| Store station and method metadata | confirmed | Required for AQI interpretation and station/network caveats. |
| Raw response/file retention | needs-verification | Needs licence, public-display and redistribution approval. |
| Snapshot for reports | needs-verification | Future report outputs should use reviewed snapshots only after approval. |

## 11. Derived Charts/Public Display

| Check | Status | Notes |
|---|---|---|
| India air-quality context | needs-verification | Intended use case, pending access and terms review. |
| City/station AQI context | needs-verification | Intended use case where station metadata, update cadence and permissions are approved. |
| Near-real-time/daily context | needs-verification | Allowed only where selected source confirms cadence and chart metadata shows observation/retrieval times. |
| Regulatory reporting claims | not-allowed | Do not frame Track & Tote charts as regulatory filings or compliance evidence. |
| Public display without source metadata | not-allowed | Every chart must show source, frequency, latest observation, retrieved-at timestamp, confidence, status and licence/attribution note where relevant. |
| Live/complete claims | not-allowed | Do not claim complete or live coverage without source support. |

## 12. Use In Calculator/Report Outputs

| Check | Status | Notes |
|---|---|---|
| Calculator logic now | not-applicable | No calculator is being built in this phase. |
| Future calculator context | needs-verification | Possible context-only use after licence, access, methodology, snapshot and output-use approval. |
| Future report outputs | needs-verification | Need saved snapshot ID, source citation, station/city, observation/retrieval dates, method and caveat notes. |
| Regulatory reporting use | not-allowed | Not approved for regulatory submissions or formal compliance claims. |
| Company/facility claims | not-allowed | Not approved unless future method/licence review explicitly allows it. |

## 13. Required Metadata Fields For Every CPCB AQI Chart

Every future CPCB AQI-backed chart must expose at least:

- `source`
- `source_url`
- `portal_url`
- `methodology_url`
- `download_or_bulletin_url`
- `city`
- `station_name`
- `station_code`
- `state_or_ut`
- `latitude`
- `longitude`
- `metric`
- `pollutant`
- `aqi_value`
- `aqi_category`
- `sub_index_values`
- `unit`
- `averaging_period`
- `time_window`
- `latest_observation`
- `retrieved_at`
- `frequency`
- `station_status`
- `data_completeness_note`
- `license_name`
- `license_url`
- `attribution_text`
- `confidence`
- `source_readiness_status`
- `methodology_note`
- `station_network_note`
- `transformation_notes`
- `known_limitations`
- `mock_fallback_dataset`

Recommended additional fields:

- `api_endpoint_or_file_path`
- `api_query`
- `file_name`
- `file_hash`
- `bulletin_date`
- `repository_export_date`
- `quality_flag`
- `calibration_or_qaqc_note`
- `missing_value_note`
- `revision_note`
- `report_snapshot_id`

## 14. Station/Network/Methodology Caveats

| Requirement | Status | Notes |
|---|---|---|
| AQI methodology reviewed | confirmed | CPCB methodology/report explains AQI categories, pollutants and sub-index logic. |
| Pollutant data sufficiency checked | confirmed | CPCB report says AQI can be calculated only when minimum pollutant data are available, including PM2.5 or PM10. |
| Worst sub-index caveat documented | confirmed | CPCB report states the worst sub-index reflects the overall AQI. |
| Station status documented | needs-verification | Station downtime or unavailable parameters must be visible in chart metadata. |
| Pollutant availability documented | needs-verification | Not every station/time window may have every pollutant. |
| Averaging period documented | needs-verification | AQI and pollutant views need correct averaging window labels. |
| QA/QC and calibration caveats reviewed | needs-verification | Needed before strong claims, trend interpretation or report outputs. |
| Health interpretation caveat documented | confirmed | AQI categories communicate likely health impacts, but Track & Tote must not provide medical advice. |

## 15. Versioning/Update Requirements

| Requirement | Status | Notes |
|---|---|---|
| Store source URL | confirmed | Needed for reproducibility. |
| Store observation timestamp | confirmed | Needed for near-real-time/daily charts. |
| Store retrieved_at | confirmed | Needed for audit trail and freshness metadata. |
| Store station list/version | needs-verification | Station networks can change over time. |
| Store methodology version/report URL | confirmed | Required for AQI category interpretation. |
| Store snapshot ID/hash | needs-verification | Needed for report outputs and reproducibility. |
| Compare across station/network changes | needs-verification | Trend charts must handle station additions/removals, downtime and method changes. |

## 16. Risks And Unknowns

| Risk or unknown | Status | Notes |
|---|---|---|
| No stable official API documentation identified | confirmed | Connector should not use undocumented endpoints. |
| Public dashboard mistaken for reuse permission | confirmed | Visibility does not equal licence, scraping or commercial reuse approval. |
| Commercial reuse | needs-verification | Must be approved before production or paid/report use. |
| Redistribution and snapshots | needs-verification | Cached values may count as redistribution. |
| Station downtime/missing pollutants | confirmed | Station and pollutant availability can affect AQI and trend interpretation. |
| Method/category misinterpretation | confirmed | AQI is a communication index, not a complete exposure assessment. |
| Real-time overclaim | confirmed | Use near-real-time/daily labels only when the selected official source confirms cadence. |
| Regulatory/company misuse | confirmed | CPCB AQI should not be overextended into compliance or company-level claims. |

## 17. Approval Decision

Production approval: `not approved yet`

CPCB National AQI is not approved for production connectors, public real-data charts, calculator outputs or report outputs until these are completed:

1. Select exact source path: AQI portal, repository, current bulletin, archive bulletin, station list, manual snapshot or verified official API.
2. Verify CPCB website/portal terms, copyright, disclaimer, attribution, commercial-use and public-display rules.
3. Confirm whether automated access, API use, downloads, caching and snapshots are permitted.
4. Finalize attribution, citation, licence, disclaimer and non-endorsement language.
5. Document station/city/pollutant selection, observation window, retrieval time, station status and data completeness.
6. Document AQI methodology, pollutant sub-index logic, category interpretation and station/network caveats.
7. Confirm redistribution and public snapshot/download rules.
8. Decide whether any future report/calculator/company-level use is permitted, and under what boundaries.
9. Keep a clearly labelled mock fallback.

## Primary References

- [CPCB](https://www.cpcb.gov.in/)
- [CPCB National Air Quality Index](https://www.cpcb.gov.in/national-air-quality-index/)
- [CPCB National AQI Portal](https://airquality.cpcb.gov.in/AQI_India/)
- [CPCB Air Quality Management Portals](https://www.cpcb.gov.in/air-quality-management-portals/)
- [National Air Quality Index Report PDF](https://airquality.cpcb.gov.in/ccr_docs/FINAL-REPORT_AQI_.pdf)
