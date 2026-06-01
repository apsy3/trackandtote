import type { TimeSeriesDataset } from "@india-esg/schemas";

export function validateSeries(dataset: TimeSeriesDataset): boolean {
  if (!dataset.meta || !Array.isArray(dataset.data)) {
    return false;
  }

  return dataset.data.every(
    (point) =>
      typeof point.date === "string" &&
      Number.isFinite(point.value) &&
      typeof point.unit === "string",
  );
}
