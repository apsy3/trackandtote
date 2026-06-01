import type { APIRoute } from "astro";
import { readMockDataset } from "@/lib/server/mockData";
import { jsonError, jsonOk } from "@/lib/server/apiResponse";

export const GET: APIRoute = async () => {
  try {
    // Future phase: replace with CEA/CEA-derived public data connector.
    const dataset = await readMockDataset("india-grid-factor.json");
    return jsonOk(dataset);
  } catch (error) {
    return jsonError(
      `Unable to read mock grid-factor dataset: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
  }
};
