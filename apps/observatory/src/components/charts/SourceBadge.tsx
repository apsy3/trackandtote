import type { ChartMeta } from "@india-esg/schemas";
import { compactDate } from "./chartUtils";

type Props = {
  meta: ChartMeta;
};

const STATUS_COLORS: Record<ChartMeta["status"], string> = {
  mock: "#856404",
  fresh: "#155724",
  stale: "#721c24",
  versioned: "#0c5460",
};

export default function SourceBadge({ meta }: Props) {
  const latestObservation = compactDate(meta.latestObservation);
  const parsedRetrievedAt = new Date(meta.retrievedAt);
  const retrievedAt = Number.isNaN(parsedRetrievedAt.getTime())
    ? meta.retrievedAt
    : parsedRetrievedAt.toLocaleString("en-IN", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

  return (
    <div className="meta-row">
      <span className="meta-chip meta-chip--source">
        Source:{" "}
        {meta.sourceUrl ? (
          <a href={meta.sourceUrl} target="_blank" rel="noreferrer">
            {meta.source}
          </a>
        ) : (
          meta.source
        )}
      </span>
      <span className="meta-chip">
        Frequency: {meta.frequency}
      </span>
      <span className="meta-chip">
        Latest: {latestObservation}
      </span>
      <span className="meta-chip">
        Retrieved: {retrievedAt}
      </span>
      <span className="meta-chip">
        Confidence: {meta.confidence}
      </span>
      <span
        className="meta-chip meta-chip--status"
        style={{ color: STATUS_COLORS[meta.status] }}
      >
        Status: {meta.status}
      </span>
    </div>
  );
}
