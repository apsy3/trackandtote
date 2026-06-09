# Repository Risk Review

Last reviewed: 2026-06-10

Review scope: Track & Tote repository, public website, mock-data observatory foundation, source-governance documents, data-essay workflow, and NASA POWER planning documents.

This audit is documentation-only. It does not approve real public data use, connector work, calculator/report outputs, or publication of draft notes.

## Executive Summary

Track & Tote is in a generally safe early-stage state. The live product architecture uses mock data, connector files are stubs, source-governance documents are conservative, and the Delhi weather data essay remains a hidden draft.

The strongest part of the repository is the governance posture: source registries and verification files exist before real connectors, and all reviewed public data sources remain `researching-license` / `not approved yet` for production use.

The main risks are not current data misuse. They are future-transition risks:

- stale root static routes may expose old `/posts/*`, `/about/`, and `/rss.xml` content alongside the newer `/notes/*` site
- root deployment output is intentionally committed for Cloudflare, but the sync process can leave obsolete routes behind
- external Google Fonts and Unsplash images create third-party request/privacy considerations
- current chart status types do not yet model future states such as `source-review`, `reviewed snapshot`, or `production approved`
- one mock dataset uses `status: "versioned"` even though it is mock data, which could confuse readers
- any move from mock data to real snapshots needs legal/source review, especially for EU/UK database rights, attribution, API terms, caching, redistribution, and future commercial use

No urgent security issue was found in the reviewed repository state. The most important near-term cleanup is deployment hygiene: document or automate root static sync and remove or redirect legacy root routes before more public content accumulates.

## Current Safe State

- Current branch: `main`
- Current latest commit at review start: `356aabf docs: add NASA POWER pre-snapshot checklist`
- Working tree before this audit document: clean
- App source of truth: `apps/observatory`
- Public data status: mock data only
- Real connectors: not implemented; connector files throw `Not implemented in Step 1. Use mock cache data.`
- Draft note status: `apps/observatory/src/content/blog/a-month-of-delhi-weather-context.mdx` has `draft: true`
- Generated build routes do not include `/notes/a-month-of-delhi-weather-context/`
- Source registries completed: 12
- Source verification files completed: 12
- Data cache: `data-cache/mock` only, no real source snapshots
- No `.env` files, obvious API keys, private keys, or credentials were found in the targeted scans

Validation completed during this review:

- `git status`: only this audit report is untracked
- `npm run typecheck`: passed with 0 errors and 0 warnings
- `npm run build`: passed
- draft route check: no `/notes/a-month-of-delhi-weather-context/` output was generated

## What Is Already Strong

### Product Scope

- The site is clearly positioned as public notes, projects, and method work rather than a private SaaS dashboard.
- The India ESG/OHSE project is separated from the homepage.
- The observatory page is labelled as a mock-data prototype.
- Notes are broad enough for society, history, public data, method, sustainability, technology, reporting, and decision-making.

### Architecture

- Astro + TypeScript structure is simple and appropriate for a public editorial site.
- Charts are React islands, not global app state.
- Public chart components fetch from local API endpoints, not direct JSON imports in page components.
- API routes read local mock JSON through `apps/observatory/src/lib/server/mockData.ts`.
- `packages/public-data` separates future connectors, cache helpers, and normalization helpers from UI components.
- `packages/calculator-core` exists but contains no product calculator logic.

### Data Governance

- `docs/DATA_SOURCE_GUIDE.md` defines public/open/free/commercially reusable distinctions.
- `docs/SOURCE_GOVERNANCE_SUMMARY.md` states that all reviewed sources remain not approved for production real-data connectors.
- `docs/CONNECTOR_READINESS_PLAN.md` keeps connector work staged and conservative.
- `docs/SNAPSHOT_DATA_WORKFLOW.md` creates a safer path for annual, periodic, PDF/XLSX/CSV, release-based, and versioned sources.
- `docs/DATA_ESSAY_WORKFLOW.md` defines data essays as narrative notes with reviewed charts, not live dashboards.
- NASA POWER has a source registry, verification checklist, snapshot experiment plan, Delhi essay plan, and pre-snapshot checklist.

### Draft Handling

- Notes listing filters out `data.draft`.
- Note detail route generation filters out `data.draft`.
- Blog redirect route generation also filters out `data.draft`.
- The Delhi weather draft is not generated into the public `/notes` route.

## Main Risks

### 1. Root Static Deployment Can Expose Legacy Routes

Cloudflare currently appears to deploy from repo-root static files. The root deployment files include current synced pages, but also old tracked routes:

- `/posts/`
- `/posts/reading-policy-through-everyday-prices/`
- `/posts/what-a-good-public-data-note-looks-like/`
- `/posts/why-small-essays-need-method-too/`
- `/about/`
- `/rss.xml`

The active Astro app now uses `/notes/`, `/projects/`, and `/method/`. The old root `/posts` and `/about` pages may still be publicly accessible unless Cloudflare is configured to ignore them or redirects are added.

Risk: public information architecture may look inconsistent, and RSS may advertise old content that is no longer part of the intended notes system.

Recommended action: before more public launches, either automate a clean root static sync that deletes stale files, change Cloudflare to deploy from `apps/observatory/dist`, or explicitly redirect/remove old root routes.

### 2. Build Output Policy Is Ambiguous

`.gitignore` excludes `dist`, but root static deployment files are intentionally tracked because current Cloudflare deployment uses repo root. This is workable but fragile.

Risk: future builds can pass in `apps/observatory/dist` while root deployment files remain stale.

Recommended action: document the exact deployment flow in README:

```text
npm run build
clean old root deployment files
sync apps/observatory/dist/ to repo root
commit synced root static output only when deploying through root
```

### 3. External Asset and Privacy Considerations

The app uses:

- Google Fonts via `fonts.googleapis.com` / `fonts.gstatic.com`
- Unsplash remote image in `HeroSplit.astro`

Risk: public visitors may make third-party requests. This can matter for UK/EU privacy expectations, cookie/privacy notices, content availability, page speed, and long-term brand control.

Recommended action: consider self-hosting fonts and replacing remote Unsplash images with locally stored, licensed assets.

### 4. Mock Status Semantics Need Tightening

Most mock datasets use `status: "mock"`. `data-cache/mock/india-grid-factor.json` uses `status: "versioned"` while its licence note says mock data.

Risk: readers may see `Status: versioned` and infer the value represents a real approved versioned source.

Recommended action: keep all mock datasets with a clear `mock` status, or expand the schema later to separate `dataStatus` from `sourceCadence` / `sourceType`.

### 5. Current Schema Is Too Small For Future Governance

`ChartMeta.status` currently supports:

- `mock`
- `fresh`
- `stale`
- `versioned`

Governance docs expect richer future states:

- `source-review`
- `reviewed snapshot`
- `public preview`
- `production approved`
- `blocked`

Risk: when real snapshots arrive, the UI may be forced to overload existing statuses and accidentally overclaim.

Recommended action: before real snapshots, redesign metadata types to distinguish data status, source readiness, snapshot approval stage, refresh status, and public-display approval.

## Legal / Reuse Caution Areas

This is not legal advice. It is a practical risk review for a public website accessible in the UK, US, EU, India, and globally.

### Copyright

Public webpages, reports, PDFs, charts, maps, images, documentation, tables, and downloaded files can be copyrighted even when freely visible. Public visibility is not permission to copy, cache, republish, transform, or use commercially.

Practical rule: do not republish raw source files or large extracted tables unless the licence and terms permit it.

### UK/EU Database Rights

UK and EU database rights can protect substantial investment in obtaining, verifying, or presenting data, even where individual facts are not copyrighted. Large-scale extraction or reuse from databases can be restricted.

Practical rule: for EU/UK/global sources, review database rights and extraction limits before caching, republishing, or building snapshots.

### Creative Commons Differences

Common licence traps:

- CC BY: attribution and change indication are required
- CC BY-SA: derivatives may need same-licence sharing
- CC BY-NC: commercial use is restricted
- CC BY-ND: derivatives/adaptations may be restricted
- CC0: broad waiver, but attribution/citation may still be academically or source-policy expected

Practical rule: never treat "Creative Commons" as one permission bucket.

### Attribution

Attribution may need source name, data provider, URL, licence, date accessed, version, methodology citation, and change notes. Aggregators may require attribution to both the aggregator and underlying source.

Practical rule: every real chart should include chart-level attribution metadata and a source note.

### Non-Commercial Restrictions

Non-commercial restrictions can become problematic if Track & Tote later offers paid reports, calculators, consulting outputs, sponsored content, subscriptions, or product features.

Practical rule: mark NC-restricted or unclear sources as unsuitable for future calculator/report/product use until reviewed.

### No-Derivatives Restrictions

No-derivatives restrictions may prevent modified, normalized, combined, or transformed republishing. Derived charts may or may not count as adaptations depending on terms and jurisdiction.

Practical rule: avoid ND sources for normalized public datasets unless permission is clear.

### Share-Alike Restrictions

Share-alike terms can affect how derived datasets or combined outputs must be licensed. This can conflict with future commercial products or mixed-source dashboards.

Practical rule: record share-alike status in the source registry before combining datasets.

### Government / Open-Data Terms

Government data can be open, restricted, or mixed. Portals such as data.gov.in are not single datasets; each resource may have separate provider, licence, terms, methodology, and update cadence.

Practical rule: review exact dataset/resource pages, not only portal-level policy.

### API Terms

API terms can restrict rate, caching, commercial use, bulk download, redistribution, attribution, and automated access. Public dashboard endpoints are not automatically public APIs.

Practical rule: do not use undocumented browser network endpoints as connectors.

### Caching / Snapshotting

Caching may count as copying or redistribution. Snapshots are useful for reproducibility, but they need licence, retention, attribution, and public-display review.

Practical rule: start with local-only snapshots and keep public snapshot approval separate.

### Derived Charts

Derived charts can reduce raw-data redistribution risk but still need attribution, licence compliance, methodology caveats, and non-endorsement language.

Practical rule: charts should show source, snapshot/version, retrieved-at, latest observation, confidence, status, and caveat.

### Commercial Future Use

The public website may be non-commercial today, but future calculator/reporting/product ambitions can change the reuse analysis.

Practical rule: record separate approval flags for editorial public display, commercial use, calculator use, report output, and downloadable data.

### Third-Party Aggregated Datasets

Aggregators can mix many source licences. OpenAQ, Climate TRACE, World Bank, UN SDG, and data.gov.in-style portals may carry source-level or indicator-level restrictions.

Practical rule: selected records/indicators must be reviewed, not only aggregator terms.

### Scraping

Scraping public websites can breach terms, robots guidance, anti-circumvention expectations, or database rights.

Practical rule: no scraping unless terms explicitly allow it and rate/identification rules are reviewed.

### Privacy, Cookies, and External Embeds

Even static sites can create privacy obligations if they load third-party fonts/images/scripts, add analytics, embed media, use forms, or collect contact details.

Practical rule: keep the site static and low-data until a privacy notice and external-asset policy are added.

### Public Claims and Disclaimers

Words like "official", "live", "real-time", "verified", "approved", "production-ready", "compliant", and "certified" can raise expectations beyond the evidence.

Practical rule: prefer "source-review", "mock data", "planning", "reviewed snapshot", "context", "not production-approved", and "not a live feed" until approval records support stronger terms.

## Source-By-Source Risk Pattern

| Source | Risk Pattern | Current Decision |
|---|---|---|
| OpenAQ | Aggregated air data with source-level licence fields; commercial use, attribution, modification and redistribution can vary by provider/source. | Keep source-review; do not build connector yet. |
| NASA POWER | Good first candidate for weather context, but citation, access path, cache/snapshot, redistribution, source-product restrictions and non-endorsement need final review. | Ready only for pre-snapshot planning, not real data. |
| World Bank | Often clear, but selected indicators may include third-party restrictions, custom licences, disclaimers or no-redistribution notes. | Good candidate after indicator-level review. |
| CEA CO2 Baseline Database | Official/versioned, but licence, redistribution, extraction, methodology and calculator-factor use need careful review. | Snapshot candidate later, not calculator-ready. |
| EDGAR | Useful emissions context, but dataset-specific licences can differ; IEA-related restrictions and ND/NC terms require high caution. | High caution. |
| Climate TRACE | Useful estimates, but methodology, facility-level framing, external datasets and non-official-inventory caveats need strong handling. | Moderate complexity. |
| ILOSTAT | Useful labour/OHSE context, but indicator metadata, source type, licence date/status, comparability and report-use boundaries matter. | Moderate complexity. |
| WRI Aqueduct | Useful water-risk screening, but not real-time measurement; facility decisions need local data and methodology review. | Moderate complexity. |
| UN SDG API | Useful country indicators, but custodian/source metadata and indicator-specific terms need review. | Likely easier after selected-indicator review. |
| data.gov.in | Portal-level policy is not enough; each dataset/resource needs separate licence/provider/methodology review. | High caution. |
| MoSPI EnviStats | Publication/table-based, often compiled from many agencies; third-party material and extraction reliability require review. | Moderate complexity. |
| CPCB National AQI | Official and valuable, but stable third-party API terms and public reuse/caching permission are unclear. | High caution. |

## Public-Content Wording Risks

### Mostly Good

The live project page and notes repeatedly say:

- mock data
- early-stage
- source-review
- not production approved
- no live claims
- no connector before verification

### Watch List

1. `apps/observatory/src/pages/index.astro`
   - Current copy says "Test the shape before live connectors."
   - Safer future wording: "Test the shape before governed connectors."

2. `apps/observatory/src/pages/projects/index.astro`
   - Current copy says "before live connectors are introduced."
   - Safer future wording: "before governed source connectors are introduced."

3. `apps/observatory/src/pages/method.astro`
   - Current copy says "We do not label data as live until licence, attribution, cache, and refresh rules are validated."
   - Safer future wording: "We do not label data as live unless the source supports that claim and governance checks are complete."

4. `data-cache/mock/india-grid-factor.json`
   - Current metadata says `status: "versioned"` while the dataset is mock.
   - Safer future status: `mock`, with a separate future field for source cadence/versioning.

5. `apps/observatory/src/content/blog/inequality-is-ancient-but-modern-inequality-is-different.mdx`
   - This is a published interpretive essay with sources as further reading, not formal citations.
   - Risk is moderate: broad historical and inequality claims should remain framed as an essay, not as quantified proof.
   - The current "sources as further reading" note helps. If this article becomes a flagship piece, factual claims and the "World Inequality Report 2026" reference should be checked externally before amplification.

## Technical Risks

### Root vs App Source Ambiguity

The active app is in `apps/observatory`, but legacy root `src/` files remain tracked. The root `src/` tree uses old `/posts`, `/about`, RSS, a different type system, and external assets.

Risk: future maintainers may edit the wrong source tree.

Recommendation: once Cloudflare deployment is cleaned up, remove or archive legacy root `src/` and old static routes, or document that they are intentionally preserved.

### Static Root Sync Risk

The key root static files currently match `apps/observatory/dist` for checked pages such as:

- `/index.html`
- `/notes/index.html`
- `/projects/india-esg-ohse/index.html`

But old root files still exist.

Risk: build passes while live root deployment is stale or has extra routes.

Recommendation: add a deterministic sync script that cleans old root output before copying the active dist.

### Schema Growth Needed Before Real Data

Current `ChartMeta` is enough for mock charts but not enough for governed snapshots. It lacks fields for:

- dataset/version
- licence status
- attribution text
- source readiness
- snapshot approval stage
- approved for public display
- approved for calculator/report use
- caveat
- transformation notes

Recommendation: extend metadata schema before any real snapshot enters the UI.

### Client Fetch Pattern

Chart components use `fetch(endpoint)` in React. This is acceptable because endpoints are local static/API routes. It must stay that way: do not fetch public APIs directly from chart components.

### Connector Stubs

Connector files exist in `packages/public-data/src/connectors`, but they all throw and do not call external APIs. This is safe and consistent with Step 1.

## Privacy / Security Risks

### Secrets

No `.env` files, obvious API keys, private keys, or credentials were found in the targeted scan. A broad scan hit React/Vite bundle internals containing `__SECRET_INTERNALS...`; this is a false positive from built vendor code.

### Node Modules

`node_modules` exists locally and is ignored. It is not listed in tracked files.

### Build Artifacts

`apps/observatory/dist` and root `dist/` exist locally and are ignored. Root deployment files such as `_astro`, `api`, `blog`, `notes`, `projects`, `index.html`, and selected legacy folders are tracked intentionally or historically.

### External Requests

Current public app uses Google Fonts and an Unsplash image. These can disclose visitor IP/user-agent to third-party services and create external availability/dependency risk.

### Forms / Auth / Uploads

No forms, auth, uploads, database, payments, or private dashboard features were found in the active app.

### Robots / Sitemap

No `robots.txt` or sitemap file was found. This is not urgent, but before broader publication it would help control indexing and clarify public routes.

### RSS

Root `rss.xml` exists and points to old `/posts/*` routes. The active app build does not generate RSS. This is a public-content consistency risk.

## NASA POWER Readiness

NASA POWER is ready for planning and final source-review work only.

### Ready Now

- Registry exists: `docs/sources/nasa-power.md`
- Verification checklist exists: `docs/sources/nasa-power-verification.md`
- Snapshot experiment plan exists: `docs/experiments/nasa-power-snapshot-experiment.md`
- Delhi essay plan exists: `docs/experiments/delhi-weather-data-essay-plan.md`
- Pre-snapshot checklist exists: `docs/experiments/nasa-power-pre-snapshot-checklist.md`
- Mock-first MDX draft exists and remains hidden

### Not Ready Yet

- no real NASA POWER data should enter the repo
- no local snapshot folders should be created
- no API calls or downloads should be made
- no connector should be built
- no public real-data chart should be published
- no calculator/report output use should be allowed

### Remaining Gates Before Any Real NASA POWER Data Enters The Repo

1. Confirm selected access path.
2. Confirm API-key/credential requirements.
3. Confirm service-use/rate-limit expectations.
4. Confirm POWER-specific licence/citation requirements.
5. Confirm upstream source/product restrictions for selected parameters.
6. Confirm public display permission.
7. Confirm raw/normalized/snapshot storage and redistribution rules.
8. Confirm commercial reuse status.
9. Confirm calculator/report use remains blocked.
10. Select one Delhi coordinate and one historical month.
11. Select one temperature parameter and one precipitation/rainfall parameter.
12. Define units, time standard, spatial resolution, source version, and caveat text.
13. Decide whether raw data can be committed or must remain local/private.

### Later Public Publishing Gates

1. Real snapshot exists only after approval.
2. Metadata file is complete.
3. QA is complete.
4. Chart labels show `source-review` or `reviewed snapshot`.
5. Note does not claim live weather, climate trend, station measurement, or production approval.
6. Rollback to mock data is tested.
7. `draft: true` is removed only after publishing approval.

## Recommended Next Steps

### Near Term

1. Decide whether Cloudflare should deploy from `apps/observatory/dist` or repo-root static output.
2. If root output remains, add a clean sync script and deployment instructions.
3. Remove or redirect stale `/posts/*`, `/about/`, and `/rss.xml` root routes when ready.
4. Keep the Delhi weather note as `draft: true`.
5. Do not create NASA POWER snapshot files until the pre-snapshot checklist gates are complete.
6. Consider self-hosting fonts and replacing remote Unsplash images.

### Before Real Data

1. Extend `ChartMeta` to support source governance and snapshot approval states.
2. Add metadata fields for licence status, citation, caveat, transformation notes, and public-display approval.
3. Add a mock fallback convention for each future real-data endpoint.
4. Add a data folder policy that says which folders may be committed and which must stay local/private.
5. Add a checklist template for approving one exact dataset/indicator/source path.

### Before Public Data Essays

1. Choose a narrow question.
2. Use one reviewed source.
3. Use one geography and one time window.
4. Keep the chart count small.
5. Keep caveats next to the chart.
6. Avoid broad causal or climate/policy claims.
7. Include source, version, retrieval date, latest observation, update frequency, status, confidence, and caveat.

## Explicit Do Not Build Yet List

Do not build yet:

- live public-data connectors
- direct public API calls from chart components
- automated source polling
- real NASA POWER data downloads
- root data snapshot folders
- calculator logic
- report-output features
- company/facility dashboards
- user accounts
- authentication
- uploads
- databases
- payments
- scraping workflows
- downloadable public data extracts
- official/compliance/reporting claims
- real-time dashboards

## Decision Checklist Before Real Data

- [ ] Exact source/dataset/endpoint selected.
- [ ] Source registry exists.
- [ ] Verification checklist exists.
- [ ] Licence status reviewed.
- [ ] Attribution/citation text drafted.
- [ ] Commercial reuse status recorded.
- [ ] Redistribution status recorded.
- [ ] Caching/snapshot status recorded.
- [ ] API terms/rate limits/access path reviewed.
- [ ] Methodology/versioning reviewed.
- [ ] Data quality caveats written.
- [ ] Public-display approval recorded.
- [ ] Calculator/report use blocked or explicitly approved.
- [ ] Mock fallback identified.
- [ ] Storage location approved.
- [ ] Approval decision recorded.

## Decision Checklist Before Publishing A Data Essay

- [ ] Note has a narrow question.
- [ ] Note separates interpretation from proof.
- [ ] Chart uses mock data, source-review data, or reviewed snapshot with clear label.
- [ ] Real-data chart has complete metadata.
- [ ] Caveat appears close to the chart.
- [ ] Source note includes licence/status/retrieval information.
- [ ] No live/real-time claim unless supported.
- [ ] No calculator/report output claim.
- [ ] No company/facility/compliance claim unless explicitly approved.
- [ ] Draft flag is removed only after publishing decision.
- [ ] Route generation verified.
- [ ] Rollback to mock data available.

## Decision Checklist Before Building APIs / Connectors

- [ ] Source-specific registry and verification are updated.
- [ ] Connector stage is defined: research, local-only, mock-compatible, public preview, or production.
- [ ] API key and secret policy is defined if needed.
- [ ] Rate-limit/backoff/caching strategy is defined.
- [ ] Connector writes to normalizer/cache, not UI directly.
- [ ] Data output conforms to expanded metadata schema.
- [ ] Mock fallback route exists.
- [ ] No public UI integration happens at research stage.
- [ ] Legal/reuse risks are recorded.
- [ ] Public-display and redistribution decisions are recorded.
- [ ] Failure behavior is tested.

## Non-Legal-Advice Disclaimer

This review is a practical engineering and publication-risk audit, not legal advice. It does not determine whether any specific dataset may legally be reused, cached, redistributed, commercialized, transformed, or used in calculator/report outputs. Before production use of real public data, Track & Tote should review the exact source terms, dataset metadata, jurisdictional issues, and intended output use, and should seek qualified legal advice where needed.

## Current Audit Decision

Track & Tote should remain mock-first.

NASA POWER should remain source-review and not production-approved.

No real public data, snapshots, connectors, calculators, report outputs, dashboards, auth, uploads, payments, or database features should be built until the decision gates above are satisfied.
