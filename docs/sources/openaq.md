# OpenAQ Source Registry Entry

```yaml
source_name: "OpenAQ"
official_url: "https://openaq.org/"
dataset_url: "https://explore.openaq.org/ and https://openaq-data-archive.s3.amazonaws.com/"
api_documentation_url: "https://docs.openaq.org/api"
category: "Air quality / environmental health"
geography: "Global; India coverage is location/source dependent and must be verified before use"
time_coverage: "Near-real-time and historical air quality records; exact coverage is location, sensor, parameter and source dependent"
update_frequency: "Near-real-time/hourly where source supports it; hourly, daily, monthly and yearly API resources are documented"
realtime_status: "near-real-time"

free_to_access: "General API use appears free with an account/API key and published rate limits; Needs verification before production connector"
commercial_use_allowed: "Needs verification by license and underlying data source; do not assume all OpenAQ records are commercially reusable"
attribution_required: "Yes for OpenAQ service use; original provider attribution may also be required; Needs verification per data source/license"
attribution_text: "Data accessed via OpenAQ. Original monitoring-source attribution must be retained where available and finalized per source/license review. Needs verification."
license_name: "Source/license-specific through OpenAQ license metadata; examples may include Creative Commons or open-government licenses, but no single universal license should be assumed"
license_url: "https://docs.openaq.org/resources/licenses"

api_key_required: "Yes for programmatic API access; OpenAQ documents X-API-Key header authentication"
rate_limits: "General use: 60 requests/minute and 2,000 requests/hour per API key according to OpenAQ rate-limit docs; higher limits require custom terms. Needs verification before connector implementation."
cache_allowed: "Needs verification. Project rule: cache only via connector -> normalizer -> cache/snapshot after terms review; avoid perpetual requests."
redistribution_allowed: "Needs verification by license and underlying data source; OpenAQ license metadata includes redistributionAllowed but it must be checked for selected records/sources"

data_quality_confidence: "medium"
known_limitations: "OpenAQ does not represent all air quality monitoring data globally; coverage is discovered/contributed and source-dependent. Data accuracy, completeness, suitability, units, station metadata, parameter availability, and underlying provider terms must be checked before claims. API v1/v2 are retired; use v3 only."

observatory_use: "Potential PM2.5 and NO2 city air-quality context for public notes and the India ESG/OHSE project, especially trend and observation-window examples after source validation"
future_calculator_use: "Not approved for calculator use. Possible contextual environmental-exposure indicator only after licensing, attribution, source quality, caching and refresh rules are validated."
fallback_plan: "Keep existing mock air-quality datasets/routes for PM2.5 and NO2 until OpenAQ status advances beyond researching-license."

source_readiness_status: "researching-license"
last_reviewed_date: "2026-06-04"
reviewer_notes: "No connector built. Before connector work, verify selected OpenAQ endpoints, account/API-key handling, rate-limit behavior, cache/snapshot permission, attribution text, commercial reuse, redistribution rights, India/Delhi source coverage, and license metadata for every selected source/location/parameter."
```

## Review Notes

- OpenAQ API v3 provides public access to global air quality data and focuses on criteria pollutants such as PM2.5, PM10, SO2, NO2, CO, O3 and related measurements. Coverage is not complete worldwide and depends on publicly available discovered or contributed sources.
- Programmatic API use requires an API key sent through the `X-API-Key` header.
- General-use rate limits are documented as 60 requests per minute and 2,000 requests per hour per API key. Repeated misuse can lead to access suspension.
- OpenAQ terms require careful source attribution and compliance with underlying provider terms. OpenAQ provides source attribution where possible, but users remain responsible for reviewing applicable third-party terms.
- OpenAQ exposes a licenses resource with fields such as `commercialUseAllowed`, `attributionRequired`, `modificationAllowed`, and `redistributionAllowed`. These fields should be checked for the selected records/sources before any production connector.
- OpenAQ also documents an Open Data on AWS archive for bulk/historical access. Whether and how Track & Tote should use the API, AWS archive, or both should be decided only after licence, caching, attribution and refresh rules are reviewed.

## Connector Gate

Do not build or enable an OpenAQ connector until:

1. License and terms have been reviewed for the intended geography, source, parameter and access path.
2. Required OpenAQ and original-source attribution text is finalized.
3. API key storage and rate-limit handling are designed outside frontend chart components.
4. Local cache/snapshot rules are approved.
5. Redistribution and commercial-use status are confirmed for selected records.
6. Mock fallback behavior remains available and clearly labelled.

Detailed pre-connector checklist: [OpenAQ Licence And API Verification Checklist](openaq-verification.md).

## Primary References

- [OpenAQ API documentation](https://docs.openaq.org/api)
- [OpenAQ About the API](https://docs.openaq.org/about/about)
- [OpenAQ Terms of Use](https://docs.openaq.org/about/terms)
- [OpenAQ Rate Limits](https://docs.openaq.org/using-the-api/rate-limits)
- [OpenAQ Licenses resource](https://docs.openaq.org/resources/licenses)
- [OpenAQ Open Data on AWS](https://docs.openaq.org/aws/about)
