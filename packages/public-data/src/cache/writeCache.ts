import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import type { TimeSeriesDataset } from "@india-esg/schemas";

export async function writeCache(
  filePath: string,
  dataset: TimeSeriesDataset,
): Promise<void> {
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(dataset, null, 2), "utf-8");
}
