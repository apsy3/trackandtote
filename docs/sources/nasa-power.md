# NASA POWER Source Registry Entry

```yaml
source_name: "NASA POWER"
official_url: "https://power.larc.nasa.gov/"
dataset_url: "https://power.larc.nasa.gov/data-access-viewer/ and https://power.larc.nasa.gov/docs/services/aws/"
api_documentation_url: "https://power.larc.nasa.gov/docs/services/api/"
category: "Weather, climate, meteorology, solar and precipitation context"
geography: "Global gridded coverage; point and regional API coverage depend on temporal service and parameter"
time_coverage: "Daily meteorological data generally from 1981-01-01 to near real time; higher-resolution precipitation generally from 2001-01-01 to near real time; solar/energy-flux coverage depends on source product and parameter"
update_frequency: "Daily/near-real-time for selected meteorological and precipitation products, with revised climate-quality products replacing near-real-time values after a delay; monthly, annual and climatology services also available"
realtime_status: "daily"

free_to_access: "POWER provides free global climate data and free public access through API, Data Access Viewer and AWS datastore paths; confirm intended access path before production use"
commercial_use_allowed: "Needs verification. NASA Earthdata guidance is generally open, but POWER-specific citation, endorsement, redistribution, and any source/product restrictions must be reviewed before commercial or product use."
attribution_required: "Yes. POWER referencing guidance asks users to include POWER reference and data reference, including service name, version number and date accessed."
attribution_text: "Suggested pattern: Data from NASA Langley Research Center's Prediction Of Worldwide Energy Resources (POWER) project. Include POWER service name, version number, date accessed, parameter(s), time window and access path. Final wording needs verification."
license_name: "Needs verification. NASA Earthdata guidance says NASA-led mission data are generally CC0 unless marked with restrictions, but POWER-specific and source-product terms must be confirmed."
license_url: "https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-use-guidance"

api_key_required: "No POWER-specific API key is shown in current POWER API examples; Needs verification before connector design."
rate_limits: "No fixed public numeric rate limit found in reviewed POWER docs. POWER warns that excessive synchronous requests or repeated requests for the same grid cell can lead to blocking; AWS direct datastore access can bypass some service limitations. Needs verification."
cache_allowed: "Needs verification. POWER documents AWS datastore access and warns about API service limits, but Track & Tote cache/snapshot rules, citation retention, redistribution notification, and report reproducibility requirements must be approved."
redistribution_allowed: "Needs verification. POWER referencing guidance requests notification if POWER data is transmitted to other researchers; redistribution/public snapshot rules must be clarified before production use."

data_quality_confidence: "medium"
known_limitations: "POWER data are gridded model/satellite-derived products, not local station observations. Grid-cell elevation and values can differ from facility/site measurements. Near-real-time values may later be replaced by improved products. Trend analysis should account for source changes, latency, time standard, spatial resolution, parameter source, and recommended lag windows."

observatory_use: "Potential daily temperature and rainfall/precipitation context, historical weather/climate normalization around city/facility locations, and article-level context panels. Use as historical time-series context, not live weather claims."
future_calculator_use: "Not approved. Possible future context input for facility/location weather normalization only after licence, citation, caching, redistribution, parameter choice, time standard, spatial resolution, and quality caveats are validated."
fallback_plan: "Keep existing mock weather-temperature and weather-rainfall datasets/routes until NASA POWER status advances beyond researching-license."

source_readiness_status: "researching-license"
last_reviewed_date: "2026-06-04"
reviewer_notes: "No connector built. Before connector work, verify POWER API access path, citation wording, service/version metadata, API-key status, rate-limit expectations, cache/snapshot permission, redistribution notification, commercial reuse, parameter definitions, units, time standard, grid resolution, and appropriate lag windows for trend claims."
```

## Review Notes

- NASA POWER provides solar and meteorological data from satellite observations, models and analysis-ready data products for global use cases across energy, infrastructure and agroclimatology.
- The POWER temporal APIs include hourly, daily, monthly/annual and climatology services. Point APIs are broadly available; regional support depends on temporal service.
- POWER daily data can support temperature and precipitation context, but it should not be presented as live weather. It is better suited to historical time-series context and normalized weather/climate context around locations.
- POWER documentation distinguishes time standards such as UTC and Local Solar Time for some services. Future connectors must record the selected time standard.
- POWER data are gridded products. Facility/city charts must explain that values represent grid-cell/model or satellite-derived estimates, not necessarily measured local station values.
- NASA POWER recommends citation/reference information that includes the POWER service name, version number and date accessed.
- NASA Earthdata guidance says NASA data are generally open and often CC0 unless marked with restrictions, but this registry remains `researching-license` until POWER-specific citation, commercial reuse, redistribution, caching and reporting requirements are verified.
- POWER provides direct AWS datastore access in addition to API services. Future architecture should decide whether API, AWS datastore, or both are appropriate for approved use cases.

## Connector Gate

Do not build or enable a NASA POWER connector until:

1. Licence/terms and NASA Earthdata guidance are reviewed for the intended access path.
2. POWER-specific citation text is finalized for charts, articles and reports.
3. Service name, version number and date-access metadata are captured in the source metadata model.
4. API-key status and service-use limits are confirmed.
5. Cache/snapshot retention and redistribution/public display rules are approved.
6. Commercial reuse and future calculator/report use are explicitly reviewed.
7. Time standard, spatial resolution, parameter definitions, units and trend-analysis caveats are documented.
8. Mock fallback behavior remains available and clearly labelled.

Detailed pre-connector checklist: [NASA POWER Licence And API Verification Checklist](nasa-power-verification.md).

## Primary References

- [NASA POWER project website](https://power.larc.nasa.gov/)
- [NASA POWER API documentation](https://power.larc.nasa.gov/docs/services/api/)
- [NASA POWER Temporal APIs](https://power.larc.nasa.gov/docs/services/api/temporal/)
- [NASA POWER Daily API](https://power.larc.nasa.gov/docs/services/api/temporal/daily/)
- [NASA POWER Data FAQ](https://power.larc.nasa.gov/docs/faqs/data/)
- [NASA POWER Data Sources methodology](https://power.larc.nasa.gov/docs/methodology/data/sources/)
- [NASA POWER Referencing Guide](https://power.larc.nasa.gov/docs/referencing/)
- [NASA POWER AWS access documentation](https://power.larc.nasa.gov/docs/services/aws/)
- [NASA Earthdata Data Use and Citation Guidance](https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-use-guidance)
