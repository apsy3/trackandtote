import type { APIRoute } from "astro";
import { readMockDataset } from "@/lib/server/mockData";
import { jsonError, jsonOk } from "@/lib/server/apiResponse";

export const GET: APIRoute = async () => {
  try {
    // Future phase: replace with EDGAR / Climate Trace connector orchestration.
    const dataset = await readMockDataset("india-ghg-emissions.json");
    return jsonOk(dataset);
  } catch (error) {
    return jsonError(
      `Unable to read mock GHG emissions dataset: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
  }
};
