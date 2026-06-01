import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const outDir = path.join(root, "data-cache", "mock");
const retrievedAt = "2026-06-02T00:00:00Z";

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function noise(seed, amplitude = 1) {
  return Math.sin(seed * 12.9898) * amplitude;
}

function generateDailySeries({
  startDate,
  endDate,
  baseValue,
  trendPerDay = 0,
  seasonalAmplitude = 0,
  noiseAmplitude = 0,
  minValue = -Infinity,
  maxValue = Infinity,
  unit,
}) {
  const rows = [];
  const start = new Date(`${startDate}T00:00:00Z`);
  const end = new Date(`${endDate}T00:00:00Z`);
  let index = 0;

  for (
    let current = new Date(start);
    current <= end;
    current.setUTCDate(current.getUTCDate() + 1)
  ) {
    const seasonal = seasonalAmplitude * Math.sin((2 * Math.PI * index) / 365);
    const wiggle = noise(index + 1, noiseAmplitude);
    const trend = trendPerDay * index;
    const value = clamp(baseValue + seasonal + wiggle + trend, minValue, maxValue);
    rows.push({
      date: isoDate(current),
      value: Number(value.toFixed(2)),
      unit,
    });
    index += 1;
  }

  return rows;
}

function generateAnnualSeries(startYear, endYear, startValue, step, unit, jitter = 0) {
  const rows = [];
  for (let year = startYear; year <= endYear; year += 1) {
    const offset = year - startYear;
    const value = startValue + step * offset + noise(offset + 3, jitter);
    rows.push({
      date: `${year}-12-31`,
      value: Number(value.toFixed(2)),
      unit,
    });
  }
  return rows;
}

function generateMonthlySeries(
  startYear,
  startMonth,
  count,
  baseValue,
  trendPerMonth,
  seasonalAmplitude,
  unit,
) {
  const rows = [];
  for (let i = 0; i < count; i += 1) {
    const date = new Date(Date.UTC(startYear, startMonth - 1 + i, 1));
    const seasonal = seasonalAmplitude * Math.sin((2 * Math.PI * i) / 12);
    const value = baseValue + trendPerMonth * i + seasonal + noise(i + 9, 3);
    rows.push({
      date: isoDate(date),
      value: Number(value.toFixed(2)),
      unit,
    });
  }
  return rows;
}

function withMeta(meta, data) {
  return {
    meta: {
      ...meta,
      latestObservation: data[data.length - 1]?.date ?? "",
      retrievedAt,
    },
    data,
  };
}

const datasets = {
  "india-ghg-emissions.json": withMeta(
    {
      title: "India total GHG emissions trend",
      metric: "Total greenhouse gas emissions",
      source: "Mocked EDGAR style annual inventory",
      sourceUrl: "https://edgar.jrc.ec.europa.eu/",
      geography: "India",
      frequency: "annual",
      licenseNote: "Mock data for Step 1 observatory UX only.",
      confidence: "medium",
      status: "mock",
    },
    generateAnnualSeries(2015, 2024, 2550, 75, "MtCO2e", 18),
  ),

  "india-grid-factor.json": withMeta(
    {
      title: "India power-sector/grid CO2 factor trend",
      metric: "Grid emission factor",
      source: "Mocked CEA-style published factor",
      sourceUrl: "https://cea.nic.in/",
      geography: "India",
      frequency: "versioned",
      licenseNote: "Mock data for Step 1 observatory UX only.",
      confidence: "medium",
      status: "versioned",
    },
    generateAnnualSeries(2015, 2024, 0.82, -0.015, "tCO2/MWh", 0.01),
  ),

  "delhi-pm25.json": withMeta(
    {
      title: "Delhi PM2.5 air quality trend",
      metric: "PM2.5 concentration",
      source: "Mocked CPCB/OpenAQ style station aggregation",
      sourceUrl: "https://openaq.org/",
      geography: "Delhi",
      frequency: "daily",
      licenseNote: "Mock data for Step 1 observatory UX only.",
      confidence: "medium",
      status: "mock",
    },
    generateDailySeries({
      startDate: "2025-01-01",
      endDate: "2026-06-30",
      baseValue: 82,
      trendPerDay: -0.01,
      seasonalAmplitude: 22,
      noiseAmplitude: 6,
      minValue: 18,
      maxValue: 240,
      unit: "ug/m3",
    }),
  ),

  "delhi-no2.json": withMeta(
    {
      title: "Delhi NO2 air quality trend",
      metric: "NO2 concentration",
      source: "Mocked CPCB/OpenAQ style station aggregation",
      sourceUrl: "https://openaq.org/",
      geography: "Delhi",
      frequency: "daily",
      licenseNote: "Mock data for Step 1 observatory UX only.",
      confidence: "medium",
      status: "mock",
    },
    generateDailySeries({
      startDate: "2025-01-01",
      endDate: "2026-06-30",
      baseValue: 44,
      trendPerDay: -0.002,
      seasonalAmplitude: 12,
      noiseAmplitude: 4,
      minValue: 8,
      maxValue: 130,
      unit: "ug/m3",
    }),
  ),

  "delhi-temperature.json": withMeta(
    {
      title: "Delhi temperature / heat trend",
      metric: "Average daily temperature",
      source: "Mocked NASA POWER style daily weather series",
      sourceUrl: "https://power.larc.nasa.gov/",
      geography: "Delhi",
      frequency: "daily",
      licenseNote: "Mock data for Step 1 observatory UX only.",
      confidence: "medium",
      status: "mock",
    },
    generateDailySeries({
      startDate: "2025-01-01",
      endDate: "2026-06-30",
      baseValue: 29.5,
      trendPerDay: 0.0035,
      seasonalAmplitude: 9,
      noiseAmplitude: 1.7,
      minValue: 6,
      maxValue: 46,
      unit: "degC",
    }),
  ),

  "delhi-rainfall.json": withMeta(
    {
      title: "Delhi rainfall trend",
      metric: "Daily rainfall",
      source: "Mocked IMD style rainfall series",
      sourceUrl: "https://mausam.imd.gov.in/",
      geography: "Delhi",
      frequency: "daily",
      licenseNote: "Mock data for Step 1 observatory UX only.",
      confidence: "medium",
      status: "mock",
    },
    generateDailySeries({
      startDate: "2025-01-01",
      endDate: "2026-06-30",
      baseValue: 4,
      trendPerDay: 0,
      seasonalAmplitude: 18,
      noiseAmplitude: 8,
      minValue: 0,
      maxValue: 145,
      unit: "mm",
    }),
  ),

  "india-water-risk.json": withMeta(
    {
      title: "India water stress risk",
      metric: "Water stress index",
      source: "Mocked Aqueduct-style risk profile",
      sourceUrl: "https://www.wri.org/aqueduct",
      geography: "India",
      frequency: "periodic",
      licenseNote: "Mock data for Step 1 observatory UX only.",
      confidence: "low",
      status: "mock",
    },
    generateAnnualSeries(2015, 2024, 0.56, 0.008, "index", 0.01),
  ),

  "india-ohse.json": withMeta(
    {
      title: "India OHSE benchmark trend",
      metric: "Reported occupational incidents per 100k workers",
      source: "Mocked ILOSTAT + national labor summary blend",
      sourceUrl: "https://ilostat.ilo.org/",
      geography: "India",
      frequency: "annual",
      licenseNote: "Mock data for Step 1 observatory UX only.",
      confidence: "low",
      status: "mock",
    },
    generateAnnualSeries(2015, 2024, 6.3, -0.15, "incidents/100k", 0.18),
  ),

  "india-sdg-indicator.json": withMeta(
    {
      title: "India ESG or SDG country indicator trend",
      metric: "Composite SDG-aligned index",
      source: "Mocked World Bank SDG style indicator",
      sourceUrl: "https://data.worldbank.org/",
      geography: "India",
      frequency: "annual",
      licenseNote: "Mock data for Step 1 observatory UX only.",
      confidence: "medium",
      status: "mock",
    },
    generateAnnualSeries(2015, 2024, 52, 1.55, "index", 0.35),
  ),

  "india-monthly-emissions.json": withMeta(
    {
      title: "India monthly emissions context",
      metric: "Monthly emissions context indicator",
      source: "Mocked monthly emissions context feed",
      sourceUrl: "https://www.climatewatchdata.org/",
      geography: "India",
      frequency: "monthly",
      licenseNote: "Mock data for Step 1 observatory UX only.",
      confidence: "low",
      status: "mock",
    },
    generateMonthlySeries(2024, 1, 24, 241, 1.1, 14, "MtCO2"),
  ),
};

await mkdir(outDir, { recursive: true });

await Promise.all(
  Object.entries(datasets).map(async ([fileName, payload]) => {
    const destination = path.join(outDir, fileName);
    await writeFile(destination, JSON.stringify(payload, null, 2), "utf-8");
  }),
);

console.log(`Generated ${Object.keys(datasets).length} mock datasets in ${outDir}`);
