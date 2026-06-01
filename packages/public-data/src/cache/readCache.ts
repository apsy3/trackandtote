import { readFile } from "node:fs/promises";
import type { TimeSeriesDataset } from "@india-esg/schemas";

export async function readCache(filePath: string): Promise<TimeSeriesDataset> {
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as TimeSeriesDataset;
}
