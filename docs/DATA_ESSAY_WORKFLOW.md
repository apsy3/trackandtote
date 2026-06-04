# Data Essay Workflow

Last updated: 2026-06-05

## 1. Purpose

This document defines how Track & Tote can publish data-backed Notes using reviewed snapshots, charts, source notes, caveats and interpretation without needing live APIs.

Some Notes may be data essays: narrative writing supported by reviewed charts. They are not dashboards, reporting products, live monitors, calculators or automated data services.

A data essay should help readers understand a small question with transparent evidence. The writing should explain what the chart may show, what it cannot show, where the data came from and what still needs review.

The workflow is designed to keep public writing useful while source governance remains careful:

- use reviewed snapshots where appropriate
- keep mock fallbacks until approval
- keep chart metadata visible
- avoid real-time claims unless the source supports them
- avoid production labels until source approval is recorded

## 2. When To Use A Data Essay

Use a data essay when the question is narrow enough for a small, explainable evidence package.

Good candidates:

- one source, one question
- one country, city or location
- one historical time range
- one or two charts
- clear caveats
- a small interpretive article, not a reporting product
- a source where a reviewed snapshot is safer than a live API
- a topic where context matters more than freshness

Examples:

- a one-month weather context note for Delhi or Bengaluru
- a country-level annual indicator note using a reviewed World Bank snapshot
- a short source-method note explaining why a dataset cannot yet support a claim
- a historical context note using one official release or one versioned table

Do not use a data essay when the claim requires:

- live monitoring
- current operational status
- facility compliance conclusions
- company reporting outputs
- calculator outputs
- source permissions that are still unresolved
- broad claims from a small or partial dataset

## 3. Standard Article Structure

A data essay should use a repeatable structure.

### Title

Use a plain title that names the question or context. Avoid making the conclusion sound stronger than the data allows.

### Short Thesis

State the working idea in one or two sentences. The thesis should be framed as an interpretation, not proof.

### Source Note

Identify the source, dataset/version, retrieval date, latest observation, licence status and source readiness status.

### Chart

Show one chart when possible. Use two charts only when the second one adds real interpretive value.

### Interpretation

Explain what pattern is visible and why it matters in ordinary language.

### Caveat

State what the chart cannot prove. Include limits around geography, time, methodology, missing values, source status and live-data claims.

### Method Note

Explain the basic data handling:

- source used
- date range
- geography
- units
- normalization
- snapshot status
- exclusions or missing values

### Further Reading

List source pages, methodology pages, registry files, verification files and relevant background reading.

## 4. Required Chart Metadata

Every chart in a data essay must show:

- source
- dataset/version
- retrieved/downloaded date
- latest observation
- update frequency
- data status
- licence status
- confidence
- caveat

Recommended additional metadata:

- source URL
- dataset URL
- snapshot version
- attribution text
- source readiness status
- transformation notes
- mock fallback dataset
- whether calculator/report use is approved

If any required metadata is unknown, the chart should say `needs verification` rather than hiding the gap.

## 5. Data Status Labels

Use consistent labels across Notes and charts.

### mock data

Synthetic or illustrative data used to test structure, layout or interpretation style. It must not be presented as real measured data.

### reviewed snapshot

A static dataset snapshot that has passed source review and QA for a defined public-preview use. It still needs source, version, caveat and retrieval metadata.

### source-review

Data or source context is being evaluated. Public production use is not approved. Use this label when the essay discusses a source, method or possible dataset but approval remains incomplete.

### production approved

Data is approved for a specific public use case with documented licence, attribution, caching, redistribution, methodology, public display and caveat handling. This label requires explicit approval in the source governance record.

### unavailable

The data is not available, not approved, blocked, missing, incomplete or unsuitable for the intended claim.

## 6. Approved Data Flow

Data essays should follow this flow:

```text
official source
-> snapshot workflow
-> reviewed JSON/CSV
-> note chart component
-> source note/caveat
-> published Note
```

Rules:

- keep raw source files separate from normalized files
- keep reviewed snapshot files separate from mock data
- keep metadata with the snapshot
- route chart data through approved local/static/API paths
- do not call public APIs directly from article components
- preserve mock fallback behavior

## 7. Governance Rules

Every data essay must follow these rules:

- no live API claims
- no real-time claims from snapshots
- no calculator/report outputs
- no source without registry and verification files
- no chart without a caveat
- no public production label unless approved
- no scraping
- no reuse claims based only on public website visibility
- no company-level claims from country-level context data
- no facility-level decisions from gridded, modelled or screening data without local review
- no hiding uncertainty when source status is incomplete

If a data essay cannot satisfy these rules, publish it as a non-data Note or keep it internal until the source review improves.

## 8. First Candidate Essay

Future candidate Note:

**Delhi Weather Context: Temperature And Rainfall From A Reviewed NASA POWER Snapshot**

Alternative shorter title:

**A Month Of Delhi Weather Context**

Planning-only scope:

- source: NASA POWER
- status: `source-review`
- geography: Delhi
- time range: one historical month or 30 historical days
- variables: daily temperature and precipitation/rainfall context
- output: reviewed static JSON/CSV snapshot later, not a live API
- charts: one combined weather context chart, or two small charts if clearer
- caveat: NASA POWER values are gridded weather/climate context, not local station measurements

The essay should ask a modest question, such as:

```text
What did a recent historical month look like in temperature and rainfall context, and what can a reviewed weather snapshot show without becoming a live weather product?
```

This candidate essay must not proceed until the NASA POWER snapshot experiment decision gates are complete.

## 9. Non-Goals

Data essays are not:

- dashboards
- automated connectors
- production calculators
- legal claims of reuse approval
- scraping workflows
- monitoring systems
- reporting products
- official compliance evidence
- private dashboards
- database features
- upload workflows
- payment features

## 10. Review Checklist Before Publishing A Data Essay

### Content Checks

- The question is narrow and clearly stated.
- The article distinguishes interpretation from proof.
- The caveat appears near the chart.
- The conclusion matches the evidence.
- The text avoids unsupported causal claims.
- The article explains what the data cannot show.
- Further reading is included.

### Data Checks

- Source registry file exists.
- Verification checklist exists.
- Snapshot metadata is complete.
- Source status is visible.
- Data status label is correct.
- Date range is documented.
- Geography is documented.
- Units are documented.
- Missing values are documented.
- Transformations are documented.
- Mock fallback remains available.

### Legal/Governance Checks

- Licence status is recorded.
- Attribution text is recorded.
- Commercial reuse status is recorded.
- Redistribution status is recorded.
- Caching/snapshot status is recorded.
- Public display status is recorded.
- Calculator/report use is blocked unless explicitly approved.
- Source is not labelled production approved unless source governance supports it.

### Chart Checks

- Required metadata is visible.
- Chart title is specific.
- Axis labels and units are clear.
- The visual does not imply more precision than the data supports.
- The chart avoids real-time wording unless confirmed.
- The chart can fall back to mock data if the snapshot is unavailable.
- The chart is readable on mobile.
- The chart includes a caveat.

### Accessibility Checks

- Chart has a text summary or nearby interpretation.
- Color is not the only way to understand the pattern.
- Contrast is readable.
- Tables or metadata blocks work on mobile.
- Links have meaningful text.
- The page remains readable without interaction.

Current decision: data essays can be planned now, but real-data publication requires reviewed snapshots, source metadata, caveats and approval gates before replacing mock data.
