# Delhi Weather Data Essay Plan

Last updated: 2026-06-09

Status: planning only

Data status: `source-review`

Production approval: `not approved yet`

## 1. Purpose

This document plans the first Track & Tote data essay before any real data is downloaded, connected or published.

The goal is to create a clear article frame that can later use a reviewed NASA POWER snapshot. The essay should test the Track & Tote method: small question, careful chart, source note, caveat and plain-language interpretation.

This plan does not publish the essay, call any API, download real data, build a connector, create snapshot files or change chart logic.

## 2. Working Title

Preferred title:

**A Month Of Delhi Weather Context**

Alternative title:

**Delhi Weather Context: Temperature And Rainfall From A Reviewed Snapshot**

Working subtitle:

**What one historical month of temperature and rainfall can show, and what it cannot prove.**

## 3. Core Question

What did one historical month in Delhi look like in daily temperature and rainfall context, and how should a reader interpret that pattern without treating it as live weather, climate proof or policy evidence?

## 4. Short Thesis

A small reviewed weather snapshot can help readers see daily variation, dry stretches, wet days and warmer or cooler spells. It cannot prove climate change, represent every neighbourhood, replace local station data or support real-time claims.

## 5. Why This Essay Fits Track & Tote

This is a good first data essay because:

- the question is narrow
- the geography is one city
- the time range is small
- the planned source is already documented
- the chart can stay simple
- the caveats are easy to explain to general readers
- it teaches the public method before making bigger claims

The essay should feel like public writing with evidence, not a dashboard.

## 6. Audience

Primary audience:

- general readers interested in weather, cities, sustainability and public data

Secondary audience:

- readers with policy, sustainability, ESG, OHSE or reporting interests who want to see how source-governed data can support public notes

The writing should stay readable, but the method should be explicit enough for a technical reader to audit the claim.

## 7. Planned Source

Planned source: NASA POWER

Current readiness: `researching-license`

Production approval: `not approved yet`

Relevant docs:

- [NASA POWER Source Registry Entry](../sources/nasa-power.md)
- [NASA POWER Licence And API Verification Checklist](../sources/nasa-power-verification.md)
- [NASA POWER Snapshot Experiment Plan](nasa-power-snapshot-experiment.md)
- [Snapshot Data Workflow](../SNAPSHOT_DATA_WORKFLOW.md)
- [Data Essay Workflow](../DATA_ESSAY_WORKFLOW.md)

NASA POWER should be treated as gridded weather/climate context, not local station measurement and not live weather.

## 8. Proposed Geography And Time Window

Geography:

- Delhi, India

Coordinate choice:

- to be selected later during source review
- must record latitude and longitude
- must explain whether the point represents city center or another defined reference point

Time window:

- one historical month, or
- 30 consecutive historical days

The final date range should avoid the most recent days unless NASA POWER latency and revision caveats are resolved.

## 9. Proposed Variables

Use no more than two variables:

- daily temperature context
- daily precipitation/rainfall context

NASA POWER parameter codes, units, time standard and source product should be selected later during source review. Do not invent final parameter codes in the essay.

## 10. Proposed Chart

Preferred visual:

- one combined daily chart showing temperature and rainfall together

Possible structure:

- temperature as a line
- rainfall/precipitation as bars
- x-axis as daily dates
- y-axis labels clear and separate if units differ

Alternative:

- two small stacked charts: temperature above, rainfall below

Use the alternative if the combined chart makes the units confusing.

## 11. Required Chart Metadata

The chart must show:

- source
- dataset/version
- retrieved/downloaded date
- latest observation
- update frequency
- data status
- licence status
- confidence
- caveat

NASA POWER-specific metadata should also show:

- access path
- service/version where available
- selected parameter codes
- units
- time standard
- latitude and longitude
- snapshot version
- attribution/citation text
- source readiness status

If any field is unresolved, show `needs verification`.

## 12. Draft Article Structure

### Opening

Start with the ordinary experience of weather:

Weather is one of the ways public data becomes personal. A hot stretch, a dry run or a sudden wet day can change work, travel, health and household routines before it becomes part of a policy conversation.

### The Question

Introduce the narrow question:

This note asks what one historical month in Delhi looked like in daily temperature and rainfall context.

### Source Note

State the source status clearly:

The planned source is NASA POWER. Track & Tote has not yet approved it for production public charts. This essay will only use a reviewed snapshot after licence, attribution, caching, redistribution and caveat checks are complete.

### Chart

Show the temperature/rainfall chart only after the snapshot workflow is approved. Until then, keep any visual mock-labelled.

### Interpretation

Explain visible patterns:

- warmer stretches
- cooler intervals
- dry days
- rainfall days
- whether heat and rainfall appear separated or clustered in the selected month

Avoid causal claims.

### Caveat

State limits:

- one month is not climate trend evidence
- NASA POWER values are gridded/model or satellite-derived context
- values are not local station observations
- the chart is not live weather
- the chart is not a city-wide risk assessment
- the chart is not a policy conclusion

### Method Note

Explain:

- source
- location point
- date range
- variables
- units
- snapshot version
- retrieval date
- transformation notes
- status label

### Closing

End with the Track & Tote method:

The point is not to make one chart carry a large conclusion. The point is to show how a small, source-aware chart can make public context easier to read while keeping the limits visible.

## 13. Claims We Can Make Later

Only after a reviewed snapshot exists, the essay may say:

- this chart shows the selected NASA POWER values for the chosen point and date range
- the selected month had visible day-to-day variation
- the chart helps compare warmer days, cooler days, wet days and dry days within the chosen window
- the data is historical context, not a live feed

## 14. Claims We Should Not Make

Do not claim:

- Delhi is getting hotter based on one month
- rainfall patterns have changed based on one month
- NASA POWER proves local station conditions
- the chart represents every part of Delhi
- the chart is live or real-time
- the source is production approved
- the data is approved for calculator or reporting output
- the data supports a facility-level or policy conclusion

## 15. Governance Gates Before Writing The Public Note

Before drafting the public MDX Note with real data:

1. NASA POWER verification checklist is updated.
2. Snapshot experiment gates are reviewed.
3. Parameter codes and units are selected.
4. Coordinate choice is documented.
5. Historical date range is selected.
6. Snapshot metadata fields are defined.
7. Attribution text is drafted.
8. Caveat text is drafted.
9. Mock fallback is identified.
10. Public display status is recorded.

Before publishing real-data charts:

1. Snapshot is collected only if permitted.
2. Raw and normalized files are separated.
3. Metadata file is complete.
4. QA review is complete.
5. UI label is `source-review` or `reviewed snapshot`.
6. Production approval remains `not approved yet` unless separately approved.
7. Rollback to mock data is available.

## 16. Editorial Questions To Improve The Essay

Use these questions when we draft the article:

- What is the human reason to read this note?
- Is the question small enough?
- Does the chart answer the question or merely decorate it?
- What will a general reader learn in one minute?
- What will a technical reader want to audit?
- Is every caveat close enough to the claim?
- Are we avoiding false certainty?
- Is the source status visible?
- Is the ending modest but useful?

## 17. Next Step

Next recommended step:

Draft the public Note in MDX as a mock-first article skeleton. The draft should include article text, source-review labels and chart placeholder language, but no real NASA POWER data.

Current decision: this essay is ready for drafting as a mock-first Note skeleton, not for real-data publication.
