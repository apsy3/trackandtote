# NASA POWER Licence And API Verification Checklist

Purpose: verify whether NASA POWER can be safely used for Track & Tote public pages and any future calculator or reporting work before a connector is built.

Last reviewed: 2026-06-04

Source readiness: `researching-license`

Production approval: `not approved yet`

Status key:

- `confirmed` - supported by reviewed NASA POWER or NASA Earthdata documentation.
- `needs-verification` - plausible or partially supported, but not approved for Track & Tote production use.
- `not-allowed` - should not be done at this stage.
- `not-applicable` - not relevant to this source or phase.

## 1. Summary Recommendation

| Item | Status | Notes |
|---|---|---|
| Use NASA POWER as a planning source | confirmed | Appropriate to research for daily temperature context, rainfall/precipitation context, and historical weather/climate normalization. |
| Build a Track & Tote connector | not-allowed | Do not build until licence, citation, cache, redistribution, commercial reuse, and service-use expectations are approved. |
| Use NASA POWER values on public pages | needs-verification | Public display may be acceptable, but Track & Tote must first finalize citation text, metadata, caching, redistribution, and source caveats. |
| Use NASA POWER for live weather claims | not-allowed | POWER should be treated as historical/near-real-time context, not live weather. |
| Use NASA POWER in calculator/report outputs | needs-verification | Possible future use only after legal, metadata, citation, cache/snapshot, and quality caveats are approved. |
| Keep mock fallback | confirmed | Mock weather/rainfall data must remain available and clearly labelled. |

Recommendation: keep NASA POWER at `researching-license`. It is a strong candidate for public weather/climate context, but it is not production-approved yet.

## 2. API Access

| Check | Status | Notes |
|---|---|---|
| Public project access exists | confirmed | NASA POWER describes free access to global solar and meteorological datasets through its access tools. |
| REST API documentation exists | confirmed | POWER documents Temporal, Application, and System API categories. |
| Temporal API supports time-series data | confirmed | The Temporal APIs provide hourly, daily, monthly/annual, and climatology outputs. |
| Daily API supports meteorological and solar data | confirmed | The Daily API returns analysis-ready time series and supports JSON, CSV, ASCII, NetCDF, and some community-specific formats. |
| Daily API can support temperature context | confirmed | Temperature-type meteorological parameters are available through POWER parameter/community selections. Specific parameter choices must be approved during connector design. |
| Daily API can support rainfall/precipitation context | confirmed | POWER documents higher-resolution precipitation data via IMERG for daily UTC services. |
| Direct AWS datastore access exists | confirmed | POWER documents public AWS datastore access, with ARD Zarr recommended for direct online access. |
| Chart components may call NASA POWER directly | not-allowed | Track & Tote must keep the connector -> normalizer -> cache/snapshot -> API endpoint -> chart path. |
| Connector access path selected | needs-verification | Decide whether the approved connector should use API, AWS datastore, or both. |

## 3. API Key Requirements

| Check | Status | Notes |
|---|---|---|
| API examples require an API key | needs-verification | Reviewed POWER API examples do not show an API key, but this must be confirmed for selected endpoints before connector work. |
| Secret handling needed now | not-applicable | No connector is being built and no credential should be added. |
| Future credential storage plan | needs-verification | If any access token or key becomes required, it must be stored outside frontend code and outside committed files. |

## 4. Rate Limits Or Usage Limits

| Check | Status | Notes |
|---|---|---|
| Numeric rate limit published | needs-verification | No fixed public numeric API limit was found in the reviewed docs. |
| API can return Too Many Requests | confirmed | POWER documents HTTP 429 as a possible response. |
| Repeated same-grid-cell requests may be blocked | confirmed | Daily API documentation warns that repeated requests for the same relative location while downloading the catalog can lead to blocking. |
| Parameter limits exist | confirmed | Daily point requests currently limit parameters per submission; regional requests have tighter parameter limits. |
| API response times vary | confirmed | POWER says response times vary by service load, temporal level, and number of requested parameters. |
| AWS access can bypass some service limitations | confirmed | POWER states direct AWS access can bypass service limitations. |
| Track & Tote request throttling approved | needs-verification | Connector design must define batching, backoff, retries, and cache refresh cadence. |

## 5. Attribution/Citation Requirements

| Check | Status | Notes |
|---|---|---|
| POWER citation guidance exists | confirmed | POWER asks publications/work products to include both a POWER reference and a POWER data reference. |
| Service name required in citation | confirmed | POWER referencing guidance asks users to include service name. |
| Version number required in citation | confirmed | POWER referencing guidance asks users to include version number. |
| Date accessed required in citation | confirmed | POWER referencing guidance asks users to include date accessed. |
| Publication notification requested | confirmed | POWER requests references, links, reprints, or descriptions of uses be sent to the project email for publications and other uses. |
| Final Track & Tote attribution text | needs-verification | Must be finalized before public display or report output. |
| Chart-level citation placement | needs-verification | Every NASA POWER chart must show source, source URL, access path, service/version, retrieved-at, and citation note. |

## 6. Licence/Terms Structure

| Check | Status | Notes |
|---|---|---|
| NASA Earthdata general data-use guidance reviewed | confirmed | NASA Earthdata says ESDIS content is generally open, with CC0 for NASA-led mission data unless restrictions are marked. |
| POWER-specific licence reviewed | needs-verification | POWER-specific data products and upstream source/product restrictions must be verified before production approval. |
| Non-NASA/upstream source restrictions reviewed | needs-verification | POWER uses source products such as MERRA-2, GEOS-IT, CERES, and IMERG; source-specific restrictions must be checked. |
| NASA endorsement implied | not-allowed | Track & Tote must not imply NASA endorsement, partnership, certification, or approval. |
| Licence note for UI metadata | needs-verification | Need final text for chart metadata and article/source notes. |

## 7. Commercial Reuse

| Check | Status | Notes |
|---|---|---|
| Public website editorial use | needs-verification | Likely feasible with proper citation, but not approved until Track & Tote use case and citation/cache rules are reviewed. |
| Commercial/product use | needs-verification | Must verify NASA Earthdata guidance, POWER-specific terms, upstream source restrictions, and non-endorsement requirements. |
| Paid report or calculator output use | needs-verification | Do not use NASA POWER in future paid outputs until explicitly approved. |
| Marketing implication of NASA association | not-allowed | Do not use NASA POWER references to imply endorsement or product validation. |

## 8. Redistribution

| Check | Status | Notes |
|---|---|---|
| Redistribution notification language exists | confirmed | POWER requests notification if POWER data is transmitted to other researchers. |
| Republishing raw API responses | needs-verification | Public raw response redistribution rules must be clarified before exposing downloads or snapshots. |
| Publishing derived charts | needs-verification | Derived charts may be acceptable with citation and caveats, but not approved until citation and cache policy are finalized. |
| Sharing cached source snapshots externally | needs-verification | Needs specific review, especially for future official reports or calculator outputs. |
| Internal local cache for development | needs-verification | Operationally useful, but retention and redistribution policy must be approved before connector build. |

## 9. Caching/Snapshotting

| Check | Status | Notes |
|---|---|---|
| Caching needed for Track & Tote architecture | confirmed | Project rules require connector -> normalizer -> cache/snapshot -> API endpoint -> chart. |
| Public API direct-to-chart calls | not-allowed | Never call NASA POWER directly from React chart components. |
| Cache retrieved_at metadata | confirmed | Required by Track & Tote source governance. |
| Cache latest_observation metadata | confirmed | Required by Track & Tote source governance. |
| Cache service/version and access path | confirmed | Needed for POWER citation and reproducibility. |
| Cache raw responses indefinitely | not-allowed | Do not decide indefinite retention until licence, redistribution, and report reproducibility rules are approved. |
| Snapshot use for official reports | needs-verification | Official report outputs should use saved snapshots only after snapshot permissions and citation rules are approved. |

## 10. Derived Charts/Public Display

| Check | Status | Notes |
|---|---|---|
| Daily temperature context charts | needs-verification | Intended use case, but only after source, citation, cache, and caveat rules are approved. |
| Rainfall/precipitation context charts | needs-verification | Intended use case; precipitation time standards and lag windows must be stated clearly. |
| Facility/city normalization context | needs-verification | Possible future use; charts must explain gridded/model values and not imply station-level measurement. |
| Historical time-series context | needs-verification | Appropriate direction, but trend windows must respect source-change and near-real-time caveats. |
| Live weather display | not-allowed | NASA POWER should not be presented as a live weather feed. |
| Mock-data public display | confirmed | Current charts may use labelled mock data until connector approval. |

## 11. Use In Calculator/Report Outputs

| Check | Status | Notes |
|---|---|---|
| Calculator logic now | not-applicable | No calculator is being built in this phase. |
| Future calculator normalization input | needs-verification | May be useful for location/facility weather normalization after source approval. |
| Future report output | needs-verification | Needs explicit rules for citation, cache snapshots, date accessed, source version, units, uncertainty, and non-endorsement. |
| Use as proof of site-level conditions | not-allowed | POWER grid-cell values should not be used as proof of exact facility measurements without local validation. |

## 12. Required Metadata Fields For Every NASA POWER Chart

Every future NASA POWER-backed chart must expose at least:

- `source`
- `source_url`
- `access_path`
- `api_service`
- `service_version`
- `dataset_or_product`
- `parameter_code`
- `parameter_label`
- `unit`
- `community`
- `geography`
- `latitude`
- `longitude`
- `spatial_resolution`
- `time_standard`
- `time_window`
- `frequency`
- `latest_observation`
- `retrieved_at`
- `citation_text`
- `license_note`
- `confidence`
- `source_readiness_status`
- `transformation_notes`
- `known_limitations`
- `mock_fallback_dataset`

Recommended additional fields:

- `lag_window_used`
- `trend_window_used`
- `source_product_start`
- `source_product_end`
- `nrt_caveat`
- `revision_caveat`
- `report_snapshot_id`

## 13. Risks And Unknowns

| Risk or unknown | Status | Notes |
|---|---|---|
| Licence/commercial-use interpretation | needs-verification | NASA Earthdata guidance is broadly open, but POWER-specific and upstream-source rules must be reviewed. |
| Redistribution/snapshot rules | needs-verification | Publication and redistribution notification language exists, but Track & Tote cache/report workflows need approval. |
| No fixed numeric rate limit | needs-verification | Must design conservative request behavior and confirm expectations if connector proceeds. |
| Gridded estimates vs local measurements | confirmed | POWER values may differ from facility/city station measurements. |
| Source-change trend risk | confirmed | POWER methodology warns that some long time series combine multiple source products; trend analysis needs caution. |
| Near-real-time revisions | confirmed | Daily low-latency products can later be replaced or updated. |
| Time standard selection | confirmed | Daily API supports UTC and Local Solar Time; selection must be recorded. |
| Precipitation lag windows | confirmed | POWER methodology recommends ending climate-trend analysis behind near real time for IMERG precipitation. |
| Parameter and unit differences by community | confirmed | POWER serves community-specific parameters and units. |

## 14. Approval Decision

Production approval: `not approved yet`

NASA POWER is not approved for production connectors, public real-data charts, calculator outputs, or report outputs until these are completed:

1. Verify POWER-specific licence and terms for the intended access path.
2. Verify upstream source/product restrictions for selected parameters.
3. Finalize chart and report citation text, including service name, version, date accessed, and access path.
4. Confirm commercial reuse and public display for Track & Tote use cases.
5. Confirm redistribution and cache/snapshot retention rules.
6. Define conservative request behavior for API or AWS access.
7. Document parameter codes, units, time standard, spatial resolution, source lag, and revision caveats.
8. Keep mock fallback available and clearly labelled.

## Primary References

- [NASA POWER project website](https://power.larc.nasa.gov/)
- [NASA POWER API documentation](https://power.larc.nasa.gov/docs/services/api/)
- [NASA POWER Temporal APIs](https://power.larc.nasa.gov/docs/services/api/temporal/)
- [NASA POWER Daily API](https://power.larc.nasa.gov/docs/services/api/temporal/daily/)
- [NASA POWER Data Sources methodology](https://power.larc.nasa.gov/docs/methodology/data/sources/)
- [NASA POWER Data FAQ](https://power.larc.nasa.gov/docs/faqs/data/)
- [NASA POWER Referencing Guide](https://power.larc.nasa.gov/docs/referencing/)
- [NASA POWER Acknowledgements](https://power.larc.nasa.gov/docs/acknowledgements/)
- [NASA POWER AWS access documentation](https://power.larc.nasa.gov/docs/services/aws/)
- [NASA Earthdata Data Use and Citation Guidance](https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-use-guidance)
