import { useMemo } from "react";
import {
  CartesianGrid,
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

export default function TimeSeriesChart({ dataset, timeframe }: Props) {
  const filtered = useMemo(
    () => filterPointsByTimeframe(dataset, timeframe),
    [dataset, timeframe],
  );

  const unit = filtered[0]?.unit ?? "";

  return (
    <div style={{ width: "100%", height: 280 }}>
      <ResponsiveContainer>
        <LineChart data={filtered}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d9d3c8" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => compactDate(String(date))}
            minTickGap={24}
          />
          <YAxis />
          <Tooltip
            formatter={(value) => [`${Number(value).toLocaleString()} ${unit}`, "Value"]}
            labelFormatter={(label) => compactDate(String(label))}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#215241"
            strokeWidth={2.25}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
