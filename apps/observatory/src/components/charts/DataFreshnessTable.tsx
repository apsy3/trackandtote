import { useEffect, useState } from "react";
import type { DatasetFreshness } from "@india-esg/schemas";

type Props = {
  endpoint: string;
};

export default function DataFreshnessTable({ endpoint }: Props) {
  const [rows, setRows] = useState<DatasetFreshness[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetch(endpoint)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Failed to load (${response.status})`);
        }
        return (await response.json()) as DatasetFreshness[];
      })
      .then((payload) => {
        if (!active) return;
        setRows(payload);
      })
      .catch((requestError: unknown) => {
        if (!active) return;
        setError(requestError instanceof Error ? requestError.message : "Unknown error");
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [endpoint]);

  if (error) {
    return <p className="mock-note">Unable to load freshness table: {error}</p>;
  }

  if (loading) {
    return <p className="mock-note">Loading data freshness table…</p>;
  }

  return (
    <section
      style={{
        marginTop: "1rem",
        background: "#fbf9f5",
        border: "1px solid #d9d3c8",
        borderRadius: 12,
        padding: "1rem",
        overflowX: "auto",
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Data Freshness Snapshot</h2>
      <p className="mock-note" style={{ marginTop: 0 }}>
        {rows.length} datasets listed.
      </p>
      <table>
        <thead>
          <tr>
            <th>Dataset</th>
            <th>Source</th>
            <th>Frequency</th>
            <th>Latest Observation</th>
            <th>Retrieved At</th>
            <th>Confidence</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.dataset}>
              <td>{row.dataset}</td>
              <td>{row.source}</td>
              <td>{row.frequency}</td>
              <td>{row.latestObservation}</td>
              <td>{row.retrievedAt}</td>
              <td>{row.confidence}</td>
              <td>
                <span
                  className="meta-chip meta-chip--status"
                  style={{
                    color:
                      row.status === "fresh"
                        ? "#155724"
                        : row.status === "stale"
                          ? "#721c24"
                          : row.status === "versioned"
                            ? "#0c5460"
                            : "#856404",
                  }}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mock-note" style={{ marginBottom: 0 }}>
        This table reflects mock snapshots only in Step 1.
      </p>
    </section>
  );
}
