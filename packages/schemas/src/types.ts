export type Frequency =
  | "hourly"
  | "daily"
  | "monthly"
  | "annual"
  | "versioned"
  | "periodic";

export type TimeSeriesPoint = {
  date: string;
  value: number;
  unit: string;
};

export type ChartMeta = {
  title: string;
  metric: string;
  source: string;
  sourceUrl?: string;
  geography: string;
  frequency: Frequency;
  latestObservation: string;
  retrievedAt: string;
  licenseNote?: string;
  confidence: "high" | "medium" | "low";
  status: "mock" | "fresh" | "stale" | "versioned";
};

export type TimeSeriesDataset = {
  meta: ChartMeta;
  data: TimeSeriesPoint[];
};

export type DatasetFreshness = {
  dataset: string;
  source: string;
  frequency: Frequency;
  latestObservation: string;
  retrievedAt: string;
  confidence: ChartMeta["confidence"];
  status: ChartMeta["status"];
};
