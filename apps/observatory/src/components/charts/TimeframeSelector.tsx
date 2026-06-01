import type { Timeframe } from "./chartUtils";

const TIMEFRAMES: Timeframe[] = ["1M", "3M", "6M", "1Y", "5Y", "All"];

type Props = {
  active: Timeframe;
  onSelect: (value: Timeframe) => void;
};

export default function TimeframeSelector({ active, onSelect }: Props) {
  return (
    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
      {TIMEFRAMES.map((timeframe) => (
        <button
          key={timeframe}
          type="button"
          onClick={() => onSelect(timeframe)}
          style={{
            border: "1px solid #d9d3c8",
            borderRadius: 8,
            background: active === timeframe ? "#215241" : "#fbf9f5",
            color: active === timeframe ? "#ffffff" : "#1f2a2a",
            padding: "0.3rem 0.6rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {timeframe}
        </button>
      ))}
    </div>
  );
}
