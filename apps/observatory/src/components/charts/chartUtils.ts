import type { TimeSeriesDataset, TimeSeriesPoint } from "@india-esg/schemas";

export type Timeframe = "1M" | "3M" | "6M" | "1Y" | "5Y" | "All";

const MONTHS_BY_TIMEFRAME: Record<Exclude<Timeframe, "All">, number> = {
  "1M": 1,
  "3M": 3,
  "6M": 6,
  "1Y": 12,
  "5Y": 60,
};

export function sortPointsByDate(points: TimeSeriesPoint[]): TimeSeriesPoint[] {
  return [...points].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
}

export function filterPointsByTimeframe(
  dataset: TimeSeriesDataset,
  timeframe: Timeframe,
): TimeSeriesPoint[] {
  const sorted = sortPointsByDate(dataset.data);

  if (timeframe === "All" || sorted.length === 0) {
    return sorted;
  }

  const latestDate = new Date(sorted[sorted.length - 1].date);
  const cutoff = new Date(latestDate);
  cutoff.setMonth(cutoff.getMonth() - MONTHS_BY_TIMEFRAME[timeframe]);

  return sorted.filter((point) => new Date(point.date) >= cutoff);
}

export function compactDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }
  return parsed.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
