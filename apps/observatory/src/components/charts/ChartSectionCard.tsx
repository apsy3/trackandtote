import { useEffect, useMemo, useState } from "react";
import type { TimeSeriesDataset } from "@india-esg/schemas";
import SourceBadge from "./SourceBadge";
import TimeSeriesChart from "./TimeSeriesChart";
import MultiLineChart from "./MultiLineChart";
import BarTrendChart from "./BarTrendChart";
import TimeframeSelector from "./TimeframeSelector";
import type { Timeframe } from "./chartUtils";

type Variant = "line" | "multi" | "bar";

type Props = {
  title: string;
  endpoint: string;
  variant?: Variant;
};

function pickChart(dataset: TimeSeriesDataset, timeframe: Timeframe, variant: Variant) {
  switch (variant) {
    case "multi":
      return <MultiLineChart dataset={dataset} timeframe={timeframe} />;
    case "bar":
      return <BarTrendChart dataset={dataset} timeframe={timeframe} />;
    default:
      return <TimeSeriesChart dataset={dataset} timeframe={timeframe} />;
  }
}

export default function ChartSectionCard({
  title,
  endpoint,
  variant = "line",
}: Props) {
  const [dataset, setDataset] = useState<TimeSeriesDataset | null>(null);
  const [timeframe, setTimeframe] = useState<Timeframe>("1Y");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    fetch(endpoint)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Failed to load (${response.status})`);
        }
        return (await response.json()) as TimeSeriesDataset;
      })
      .then((payload) => {
        if (!active) return;
        setDataset(payload);
      })
      .catch((requestError: unknown) => {
        if (!active) return;
        setError(requestError instanceof Error ? requestError.message : "Unknown error");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [endpoint]);

  const chartView = useMemo(() => {
    if (!dataset) {
      return null;
    }
    return pickChart(dataset, timeframe, variant);
  }, [dataset, timeframe, variant]);

  return (
    <section className="chart-card" aria-label={title}>
      <h2>{title}</h2>

      <TimeframeSelector active={timeframe} onSelect={setTimeframe} />

      {loading ? <p className="mock-note">Loading mock dataset…</p> : null}
      {error ? <p className="mock-note">Unable to load dataset: {error}</p> : null}

      {dataset ? (
        <>
          {chartView}
          <SourceBadge meta={dataset.meta} />
          <p className="mock-note">
            Mock data is used in Step 1. Real source connectors and governed snapshots are
            planned in later phases.
          </p>
        </>
      ) : null}
    </section>
  );
}
