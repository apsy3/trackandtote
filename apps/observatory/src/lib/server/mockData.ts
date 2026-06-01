import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { DatasetFreshness, TimeSeriesDataset } from "@india-esg/schemas";

type DatasetIndexItem = {
  key: string;
  fileName: string;
};

const DATASETS: DatasetIndexItem[] = [
  { key: "ghg-emissions", fileName: "india-ghg-emissions.json" },
  { key: "grid-factor", fileName: "india-grid-factor.json" },
  { key: "air-quality-pm25", fileName: "delhi-pm25.json" },
  { key: "air-quality-no2", fileName: "delhi-no2.json" },
  { key: "weather-temperature", fileName: "delhi-temperature.json" },
  { key: "weather-rainfall", fileName: "delhi-rainfall.json" },
  { key: "water-risk", fileName: "india-water-risk.json" },
  { key: "ohse", fileName: "india-ohse.json" },
  { key: "worldbank-indicator", fileName: "india-sdg-indicator.json" },
  { key: "monthly-emissions", fileName: "india-monthly-emissions.json" },
];

function buildMockFileUrl(fileName: string): URL {
  const candidates = [
    resolve(process.cwd(), "data-cache", "mock", fileName),
    resolve(process.cwd(), "..", "data-cache", "mock", fileName),
    resolve(process.cwd(), "..", "..", "data-cache", "mock", fileName),
  ];

  const resolvedPath = candidates.find((candidate) => existsSync(candidate));
  if (!resolvedPath) {
    throw new Error(
      `Mock dataset not found. Tried: ${candidates.join(" | ")}`,
    );
  }

  return pathToFileURL(resolvedPath);
}

export async function readMockDataset(
  fileName: string,
): Promise<TimeSeriesDataset> {
  const raw = await readFile(buildMockFileUrl(fileName), "utf-8");
  return JSON.parse(raw) as TimeSeriesDataset;
}

export async function readMockFreshnessTable(): Promise<DatasetFreshness[]> {
  const rows = await Promise.all(
    DATASETS.map(async (dataset) => {
      const parsed = await readMockDataset(dataset.fileName);
      return {
        dataset: parsed.meta.title,
        source: parsed.meta.source,
        frequency: parsed.meta.frequency,
        latestObservation: parsed.meta.latestObservation,
        retrievedAt: parsed.meta.retrievedAt,
        confidence: parsed.meta.confidence,
        status: parsed.meta.status,
      } satisfies DatasetFreshness;
    }),
  );

  return rows;
}
