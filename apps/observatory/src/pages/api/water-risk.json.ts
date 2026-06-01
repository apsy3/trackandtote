import type { APIRoute } from "astro";
import { readMockDataset } from "@/lib/server/mockData";
import { jsonError, jsonOk } from "@/lib/server/apiResponse";

export const GET: APIRoute = async () => {
  try {
    // Future phase: replace with Aqueduct/CGWB-style public source connector.
    const dataset = await readMockDataset("india-water-risk.json");
    return jsonOk(dataset);
  } catch (error) {
    return jsonError(
      `Unable to read mock water-risk dataset: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
  }
};
