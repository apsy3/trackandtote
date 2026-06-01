import type {
  ChartMeta,
  TimeSeriesDataset,
  TimeSeriesPoint,
} from "@india-esg/schemas";

export function toTimeSeries(
  meta: ChartMeta,
  points: Array<{ date: string; value: number; unit: string }>,
): TimeSeriesDataset {
  const data: TimeSeriesPoint[] = points.map((point) => ({
    date: point.date,
    value: point.value,
    unit: point.unit,
  }));

  return { meta, data };
}
