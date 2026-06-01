# SOURCE_REGISTRY_TEMPLATE

Use one copy of this template per public data source.

```yaml
source_name: ""
official_url: ""
dataset_url: ""
api_documentation_url: ""
category: ""
geography: ""
time_coverage: ""
update_frequency: ""
realtime_status: ""

free_to_access: ""
commercial_use_allowed: ""
attribution_required: ""
attribution_text: ""
license_name: ""
license_url: ""

api_key_required: ""
rate_limits: ""
cache_allowed: ""
redistribution_allowed: ""

data_quality_confidence: ""
known_limitations: ""

observatory_use: ""
future_calculator_use: ""
fallback_plan: ""

source_readiness_status: ""
last_reviewed_date: ""
reviewer_notes: ""
```

## Field Notes

- `realtime_status`: one of `real-time`, `near-real-time`, `daily`, `monthly`, `annual/versioned`, `periodic`.
- `source_readiness_status`: one of:
  - `mock-only`
  - `researching-license`
  - `free-confirmed`
  - `connector-built`
  - `validated`
  - `production-ready`
- `data_quality_confidence`: use `high`, `medium`, or `low`.
- `fallback_plan`: explain which mock dataset is used if live connector fails.

## Minimum Approval Before Connector Build

1. License and terms reviewed
2. Attribution text captured
3. Rate-limit policy documented
4. Cache and redistribution permissions checked
5. Source readiness set to at least `free-confirmed`
