import { useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { TimeSeriesDataset } from "@india-esg/schemas";
import { compactDate, filterPointsByTimeframe, type Timeframe } from "./chartUtils";

type Props = {
  dataset: TimeSeriesDataset;
  timeframe: Timeframe;
};

type ChartRow = {
  date: string;
  value: number;
  movingAvg: number;
};

function rollingAverage(values: number[], window = 7): number[] {
  return values.map((_, index) => {
    const start = Math.max(0, index - window + 1);
    const slice = values.slice(start, index + 1);
    const total = slice.reduce((sum, value) => sum + value, 0);
    return total / slice.length;
  });
}

export default function MultiLineChart({ dataset, timeframe }: Props) {
  const filtered = useMemo(
    () => filterPointsByTimeframe(dataset, timeframe),
    [dataset, timeframe],
  );

  const chartData = useMemo<ChartRow[]>(() => {
    const values = filtered.map((point) => point.value);
    const avg = rollingAverage(values, 7);
    return filtered.map((point, index) => ({
      date: point.date,
      value: point.value,
      movingAvg: Number(avg[index].toFixed(2)),
    }));
  }, [filtered]);

  const unit = filtered[0]?.unit ?? "";

  return (
    <div style={{ width: "100%", height: 280 }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d9d3c8" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => compactDate(String(date))}
            minTickGap={24}
          />
          <YAxis />
          <Tooltip
            formatter={(value, key) => [
              `${Number(value).toLocaleString()} ${unit}`,
              key === "movingAvg" ? "7-day avg" : "Observed",
            ]}
            labelFormatter={(label) => compactDate(String(label))}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#215241"
            strokeWidth={2}
            dot={false}
            name="Observed"
          />
          <Line
            type="monotone"
            dataKey="movingAvg"
            stroke="#7a8f88"
            strokeWidth={2}
            dot={false}
            name="7-day avg"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
