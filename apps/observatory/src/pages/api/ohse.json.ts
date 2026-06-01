import type { APIRoute } from "astro";
import { readMockDataset } from "@/lib/server/mockData";
import { jsonError, jsonOk } from "@/lib/server/apiResponse";

export const GET: APIRoute = async () => {
  try {
    // Future phase: replace with ILOSTAT + India labor/public OHSE source connectors.
    const dataset = await readMockDataset("india-ohse.json");
    return jsonOk(dataset);
  } catch (error) {
    return jsonError(
      `Unable to read mock OHSE dataset: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
  }
};
