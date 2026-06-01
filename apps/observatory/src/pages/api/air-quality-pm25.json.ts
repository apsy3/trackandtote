import type { APIRoute } from "astro";
import { readMockDataset } from "@/lib/server/mockData";
import { jsonError, jsonOk } from "@/lib/server/apiResponse";

export const GET: APIRoute = async () => {
  try {
    // Step 1: static-friendly endpoint for PM2.5 mock data.
    const dataset = await readMockDataset("delhi-pm25.json");
    return jsonOk(dataset);
  } catch (error) {
    return jsonError(
      `Unable to read mock PM2.5 dataset: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
  }
};
