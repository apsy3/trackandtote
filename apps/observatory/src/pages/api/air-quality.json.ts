import type { APIRoute } from "astro";
import { readMockDataset } from "@/lib/server/mockData";
import { jsonError, jsonOk } from "@/lib/server/apiResponse";

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const metric = url.searchParams.get("metric") ?? "pm25";
    const fileName = metric === "no2" ? "delhi-no2.json" : "delhi-pm25.json";

    // Future phase: replace with connector calls from packages/public-data.
    const dataset = await readMockDataset(fileName);
    return jsonOk(dataset);
  } catch (error) {
    return jsonError(
      `Unable to read mock air-quality dataset: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
  }
};
