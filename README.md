# India ESG Observatory (Step 1 Foundation)

This repository contains the Step 1 MVP foundation for a public, article-style observatory:

**India ESG, GHG and OHSE Public Data Observatory**

The current phase uses **mock JSON datasets only** so we can finalize structure, chart UX, data contracts, and source transparency before wiring real public connectors.

## What Is Included In Step 1

- Astro + TypeScript website in `apps/observatory`
- React chart components using Recharts
- Homepage with 10 graph sections (mock data)
- API routes that read from local mock JSON cache
- Data freshness table
- Blog structure with one starter MDX article
- Shared time-series schemas in `packages/schemas`
- Reusable public-data connector scaffolding in `packages/public-data`
- Placeholder calculator package in `packages/calculator-core`

## What Is Intentionally Not Implemented Yet

- No real external API fetches
- No ESG/GHG/OHSE calculator logic
- No database
- No authentication/login
- No uploads, billing, or private dashboards

## Monorepo Layout

```text
apps/
  observatory/                # Astro site
packages/
  schemas/                    # Shared dataset types
  public-data/                # Future connector/caching/normalization logic
  calculator-core/            # Future calculator domain package
data-cache/
  mock/                       # Local mock snapshots for Step 1
```

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Default Astro URL is usually `http://localhost:4321`.

## Build / Preview / Typecheck

```bash
npm run typecheck
npm run build
npm run preview
```

## Why Mock Data First

This phase proves:

- dataset contracts (`TimeSeriesDataset`)
- chart rendering and timeframe controls
- metadata transparency (source, frequency, latest observation, retrieved-at, confidence, status)
- API route and cache folder wiring

This keeps the UI honest while we prepare governance for real public data.

## How To Add A Real Connector Later

1. Add connector logic in `packages/public-data/src/connectors`.
2. Normalize output into `TimeSeriesDataset` using shared schemas.
3. Cache snapshots into `data-cache/` with retrieval metadata.
4. Update API routes in `apps/observatory/src/pages/api` to call connector + cache fallback.
5. Preserve metadata fields and never hide uncertainty.

## Cache and Snapshot Approach

Current Step 1 endpoints read `data-cache/mock/*.json`.
Later phases can add:

- scheduled refresh jobs
- snapshot versioning
- stale/fresh status policies
- source-level audit notes

## Future Calculator Relationship

`packages/calculator-core` stays isolated from UI so future calculator logic can reuse:

- shared schemas from `packages/schemas`
- normalized public datasets from `packages/public-data`

without rewriting homepage/blog rendering.

## Public Data Governance Docs

Before adding real public API connectors, review:

- [`docs/DATA_SOURCE_GUIDE.md`](docs/DATA_SOURCE_GUIDE.md)
- [`docs/SOURCE_GOVERNANCE_SUMMARY.md`](docs/SOURCE_GOVERNANCE_SUMMARY.md)
- [`docs/SOURCE_REGISTRY_TEMPLATE.md`](docs/SOURCE_REGISTRY_TEMPLATE.md)
