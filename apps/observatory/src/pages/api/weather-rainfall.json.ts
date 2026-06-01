import type { APIRoute } from "astro";
import { readMockDataset } from "@/lib/server/mockData";
import { jsonError, jsonOk } from "@/lib/server/apiResponse";

export const GET: APIRoute = async () => {
  try {
    // Step 1: static-friendly endpoint for rainfall mock data.
    const dataset = await readMockDataset("delhi-rainfall.json");
    return jsonOk(dataset);
  } catch (error) {
    return jsonError(
      `Unable to read mock rainfall dataset: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
  }
};
