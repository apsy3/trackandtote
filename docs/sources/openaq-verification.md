# OpenAQ Licence And API Verification Checklist

Purpose: verify whether OpenAQ can be safely used for the public website and later calculator/reporting work before any connector is built.

Review date: 2026-06-04  
Decision: `not approved yet`  
Source readiness: keep `researching-license`

Status values:

- `confirmed`
- `needs-verification`
- `not-allowed`
- `not-applicable`

## 1) Summary Recommendation

| Item | Status | Notes |
|---|---|---|
| Use OpenAQ mock replacement in production charts | `not-allowed` | Do not replace mock data with OpenAQ data yet. |
| Build connector | `not-allowed` | Connector work should wait until this checklist is resolved. |
| Public website use | `needs-verification` | Likely possible for selected data, but only after attribution, source-level licence, caching and redistribution checks. |
| Later calculator/reporting use | `needs-verification` | Higher risk because outputs may be reused, exported or interpreted as decision support. |
| Production approval | `not-allowed` | Required decision remains `not approved yet`. |

OpenAQ is a strong candidate for air-quality context, especially PM2.5 and NO2 trend panels. However, OpenAQ aggregates data from many sources. Its terms make Track & Tote responsible for complying with underlying provider terms, and the OpenAQ licenses resource exposes licence-level permissions that must be checked before production use.

## 2) API Access

| Check | Status | Notes |
|---|---|---|
| API version | `confirmed` | Current documentation covers API v3. |
| Access pattern | `confirmed` | REST-style API with JSON responses. |
| Direct frontend calls | `not-allowed` | Project rule: chart components must not call public APIs directly. |
| Connector path | `needs-verification` | Future path should be connector -> normalizer -> cache/snapshot -> API endpoint -> chart. |
| Official hosted API service limits | `confirmed` | Hosted API use is governed by OpenAQ terms and may be suspended for misuse. |
| Scraping UI or visualizations | `not-allowed` | OpenAQ terms prohibit unauthorized methods such as scraping visualizations or interface elements. |

## 3) API Key Requirements

| Check | Status | Notes |
|---|---|---|
| API key required | `confirmed` | Programmatic access uses an API key in the `X-API-Key` header. |
| User/account required | `confirmed` | OpenAQ documents account/API-key registration for programmatic access. |
| Frontend exposure | `not-allowed` | API key must never be stored in frontend code or public static files. |
| Secret storage design | `needs-verification` | Define environment/secret handling before any connector. |
| Key rotation process | `needs-verification` | Document how an OpenAQ key would be rotated if leaked or revoked. |

## 4) Rate Limits

| Check | Status | Notes |
|---|---|---|
| General rate limits | `confirmed` | OpenAQ documents general limits of 60 requests/minute and 2,000 requests/hour per API key. |
| Rate limit scope | `confirmed` | Limits are scoped to the user API key. |
| Rate-limit headers | `confirmed` | OpenAQ documents rate-limit usage, remaining capacity and reset headers. |
| Higher limits | `confirmed` | Higher limits require custom terms/pricing. |
| Perpetual requests | `not-allowed` | OpenAQ rate-limit guidance says not to leave requests running in perpetuity if data are no longer needed. |
| Connector throttling/backoff | `needs-verification` | Future connector must implement request planning, throttling, 429 handling and cache-first behavior. |

## 5) Attribution Requirements

| Check | Status | Notes |
|---|---|---|
| OpenAQ attribution | `confirmed` | OpenAQ terms require attribution to OpenAQ when using OpenAQ services for accessing data. |
| Original-source attribution | `confirmed` | OpenAQ says some underlying sources require attribution and users must comply with provider terms. |
| Attribution URL availability | `confirmed` | OpenAQ says it often provides attribution, commonly as a URL, via the interface and APIs. |
| Final attribution wording | `needs-verification` | Track & Tote must define exact chart/footer/source-note wording before production use. |
| Per-chart attribution display | `needs-verification` | UI metadata must include OpenAQ plus original source where available. |

Draft attribution pattern, not yet approved:

> Data accessed via OpenAQ. Original data source: `{provider/source name and URL where available}`. Licence: `{license name and URL}`.

## 6) Licence Structure

| Check | Status | Notes |
|---|---|---|
| Single universal OpenAQ data licence | `not-applicable` | Do not assume a single universal licence for every record/source. |
| Licence metadata endpoint | `confirmed` | OpenAQ documents a licenses resource. |
| Licence fields | `confirmed` | Documented fields include `commercialUseAllowed`, `attributionRequired`, `shareAlikeRequired`, `modificationAllowed`, `redistributionAllowed`, and `sourceUrl`. |
| Source-level licence handling | `needs-verification` | Each selected source/location/parameter must be linked to the relevant licence metadata before production use. |
| Provider terms | `needs-verification` | Underlying provider terms may control reuse even when data are publicly accessible. |

Important: OpenAQ exposes licence metadata, but Track & Tote must still verify the selected data source, location, parameter and access path before use.

## 7) Commercial Reuse

| Check | Status | Notes |
|---|---|---|
| Commercial reuse allowed for all OpenAQ data | `needs-verification` | Must not assume this globally. |
| Commercial-use field available | `confirmed` | The licenses resource includes `commercialUseAllowed`. |
| Public website use | `needs-verification` | A public website may still be commercial or mixed-use depending future monetization and services. |
| Later product/calculator use | `needs-verification` | Treat as higher-risk until source-level licence and OpenAQ terms are reviewed. |
| If `commercialUseAllowed` is false | `not-allowed` | Do not use that source in calculator/reporting/product contexts. |

## 8) Redistribution

| Check | Status | Notes |
|---|---|---|
| Redistribution allowed for all OpenAQ data | `needs-verification` | Must not assume this globally. |
| Redistribution field available | `confirmed` | The licenses resource includes `redistributionAllowed`. |
| Republishing raw data | `needs-verification` | Do not publish raw OpenAQ/source records until licence allows it. |
| Publishing cached snapshots | `needs-verification` | Snapshot publication may count as redistribution and must be checked per licence/source. |
| If `redistributionAllowed` is false | `not-allowed` | Do not publish raw data exports or reusable snapshots. |

## 9) Caching/Snapshotting

| Check | Status | Notes |
|---|---|---|
| Cache to avoid excessive API calls | `needs-verification` | Operationally desirable and aligned with avoiding perpetual requests, but legal permission must be checked. |
| Store retrieved_at/latest_observation | `confirmed` | Required by Track & Tote governance for any future connector. |
| Store licence/source metadata in cache | `confirmed` | Required by Track & Tote governance for every chart. |
| Long-term report snapshots | `needs-verification` | May be needed for reproducibility, but can raise redistribution/licence questions. |
| Cache raw API responses indefinitely | `not-allowed` | Do not do this without explicit cache/redistribution approval. |
| Cache normalized chart-ready summaries | `needs-verification` | Must include attribution/licence metadata and respect source-level terms. |

## 10) Derived Charts/Public Display

| Check | Status | Notes |
|---|---|---|
| Display derived charts from selected OpenAQ data | `needs-verification` | Likely feasible only after source-level licence and attribution are confirmed. |
| Display mock charts while reviewing | `confirmed` | Current mock-data workflow is allowed and preferred. |
| Claim data are live/complete | `not-allowed` | Do not describe OpenAQ data as complete or real-time without support. |
| Publish caveats | `confirmed` | OpenAQ states its data do not represent all air quality monitoring data globally and may not be suitable for every purpose. |
| Show original source and licence | `needs-verification` | Must be available in UI metadata before production use. |

## 11) Use In Calculator/Report Outputs

| Check | Status | Notes |
|---|---|---|
| Calculator use | `needs-verification` | Not approved until source-level commercial reuse, redistribution, attribution and accuracy caveats are resolved. |
| Official report use | `needs-verification` | Requires saved snapshots, reproducibility notes, licence review and stronger data-quality validation. |
| Exported PDF/report outputs | `needs-verification` | Export may create redistribution or derived-work issues. |
| Decision-support claims | `not-allowed` | Do not present OpenAQ values as authoritative compliance, safety or health determinations without stronger review. |
| Context-only use | `needs-verification` | Possible future use as environmental context once approved. |

## 12) Third-Party Source Responsibility

| Check | Status | Notes |
|---|---|---|
| OpenAQ aggregates third-party sources | `confirmed` | Terms state OpenAQ aggregates from government agencies and other sources. |
| OpenAQ guarantees freedom from third-party claims | `not-allowed` | Terms state OpenAQ provides no assurance data may be used free of third-party claims. |
| User responsibility for third-party terms | `confirmed` | OpenAQ users must review and comply with data-provider terms. |
| Per-source review before connector | `confirmed` | Track & Tote must review selected sources before production use. |
| Provider attribution | `needs-verification` | Must be captured from API metadata or provider documentation. |

## 13) Required Metadata Fields For Every OpenAQ Chart

Every future OpenAQ-backed chart must expose:

| Field | Status | Notes |
|---|---|---|
| `source` | `confirmed` | Use OpenAQ plus original provider/source where available. |
| `source_url` | `needs-verification` | Must point to OpenAQ and original provider/source URL where available. |
| `api_endpoint_or_archive_path` | `needs-verification` | Record exact API endpoint or AWS archive path used by connector. |
| `parameter` | `confirmed` | Example: PM2.5, NO2, O3, PM10. |
| `unit` | `confirmed` | Must be captured from source/API response. |
| `location_name` | `confirmed` | Required for interpretability. |
| `location_id` | `confirmed` | Required for reproducible retrieval. |
| `coordinates` | `needs-verification` | Required for map/geography use; verify source precision. |
| `time_window` | `confirmed` | Hour/day/month/year and chart aggregation window. |
| `latest_observation` | `confirmed` | Required by Track & Tote UI metadata. |
| `retrieved_at` | `confirmed` | Required by Track & Tote UI metadata. |
| `frequency` | `confirmed` | Hourly/daily/monthly/yearly as applicable. |
| `licence_name` | `needs-verification` | From OpenAQ licence metadata/source review. |
| `licence_url` | `needs-verification` | From OpenAQ licence metadata/source review. |
| `attribution_text` | `needs-verification` | Must include OpenAQ and original source when required. |
| `commercial_use_allowed` | `needs-verification` | Must be checked before product/report use. |
| `redistribution_allowed` | `needs-verification` | Must be checked before publishing raw/cached data. |
| `confidence` | `confirmed` | Track & Tote interpretation confidence, not legal approval. |
| `status` | `confirmed` | Example: mock, researching-license, validated. |
| `transformation_notes` | `confirmed` | Describe aggregation, filtering, missing values and caveats. |

## 14) Risks And Unknowns

| Risk / Unknown | Status | Notes |
|---|---|---|
| Source-level licence mismatch | `needs-verification` | Different sources may have different permissions. |
| Attribution completeness | `needs-verification` | Need to confirm API metadata exposes enough provider/source attribution for selected records. |
| Commercial use | `needs-verification` | Must verify for selected source/licence, especially future paid/reporting contexts. |
| Redistribution and snapshots | `needs-verification` | Cached or exported values may be redistribution. |
| Data quality and completeness | `confirmed` | OpenAQ itself cautions that coverage is not complete worldwide and data are provided as-is. |
| Endpoint/schema changes | `confirmed` | OpenAQ can modify or discontinue the API according to its terms. |
| API key leakage | `needs-verification` | Requires private secret storage and rotation process. |
| Rate-limit overuse | `confirmed` | Repeated overuse can lead to suspension or ban. |
| India/Delhi coverage suitability | `needs-verification` | Must verify exact stations, parameters, time coverage and source quality. |
| Open Data on AWS use path | `needs-verification` | Need to decide whether AWS archive, API, or both are appropriate for historical snapshots. |

## 15) Approval Decision

Production approval: `not approved yet`

Reason:

- Commercial reuse is not confirmed for selected sources.
- Redistribution is not confirmed for selected sources.
- Caching/snapshotting permission is not confirmed.
- Final attribution wording is not confirmed.
- Source-level licence handling is not implemented.
- No OpenAQ connector has been built or validated.

Next approval steps:

1. Choose exact use case: public chart only, article snapshot, calculator context, or report output.
2. Choose exact geography, parameter, source/location and time window.
3. Retrieve and document source/provider metadata and licence metadata for those selections.
4. Confirm `commercialUseAllowed`, `attributionRequired`, `redistributionAllowed`, `modificationAllowed`, `shareAlikeRequired`, and `sourceUrl`.
5. Draft final attribution text and UI metadata format.
6. Decide cache/snapshot retention rules.
7. Update `docs/sources/openaq.md` if status can advance from `researching-license`.

## Primary References

- [OpenAQ API documentation](https://docs.openaq.org/api)
- [OpenAQ About the API](https://docs.openaq.org/about/about)
- [OpenAQ API key documentation](https://docs.openaq.org/using-the-api/api-key)
- [OpenAQ Terms of Use](https://docs.openaq.org/about/terms)
- [OpenAQ Rate Limits](https://docs.openaq.org/using-the-api/rate-limits)
- [OpenAQ Licenses resource](https://docs.openaq.org/resources/licenses)
- [OpenAQ licenses API operation](https://docs.openaq.org/api/operations/instruments_get_v3_licenses_get)
- [OpenAQ Open Data on AWS](https://docs.openaq.org/aws/about)
