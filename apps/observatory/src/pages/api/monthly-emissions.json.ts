import type { APIRoute } from "astro";
import { readMockDataset } from "@/lib/server/mockData";
import { jsonError, jsonOk } from "@/lib/server/apiResponse";

export const GET: APIRoute = async () => {
  try {
    // Step 1: static-friendly endpoint for monthly emissions context data.
    const dataset = await readMockDataset("india-monthly-emissions.json");
    return jsonOk(dataset);
  } catch (error) {
    return jsonError(
      `Unable to read mock monthly emissions dataset: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
  }
};
