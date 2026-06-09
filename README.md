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

## Root Static Deployment Sync

The Astro app builds from `apps/observatory` into:

```text
apps/observatory/dist/
```

The current Cloudflare Pages setup deploys static files from the repository root, so the generated public output is also checked in at root paths such as `index.html`, `_astro/`, `api/`, `notes/`, `projects/`, `method/`, and `blog/`.

To prevent stale root pages from remaining public after the site structure changes, use the sync helper after a clean build:

```bash
npm run build
npm run sync:root-static:dry-run
npm run sync:root-static
```

The sync helper is intentionally conservative. It removes only known generated root output paths before copying the current `apps/observatory/dist/` files. It does not remove source or project folders such as `apps`, `packages`, `docs`, `data-cache`, `scripts`, `src`, `.git`, or `node_modules`.

The helper also checks draft MDX slugs before copying. If a file with `draft: true` appears in the generated build output, the sync stops instead of copying that route to the root deployment surface.

Before committing a deployment sync, verify:

```bash
npm run typecheck
npm run build
npm run sync:root-static:dry-run
git status
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
- [`docs/SNAPSHOT_DATA_WORKFLOW.md`](docs/SNAPSHOT_DATA_WORKFLOW.md)
- [`docs/DATA_ESSAY_WORKFLOW.md`](docs/DATA_ESSAY_WORKFLOW.md)
- [`docs/experiments/nasa-power-snapshot-experiment.md`](docs/experiments/nasa-power-snapshot-experiment.md)
- [`docs/experiments/nasa-power-pre-snapshot-checklist.md`](docs/experiments/nasa-power-pre-snapshot-checklist.md)
- [`docs/SOURCE_REGISTRY_TEMPLATE.md`](docs/SOURCE_REGISTRY_TEMPLATE.md)
