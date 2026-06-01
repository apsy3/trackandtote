import type { APIRoute } from "astro";
import { readMockDataset } from "@/lib/server/mockData";
import { jsonError, jsonOk } from "@/lib/server/apiResponse";

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const metric = url.searchParams.get("metric") ?? "indicator";
    const fileName =
      metric === "monthly-emissions"
        ? "india-monthly-emissions.json"
        : "india-sdg-indicator.json";

    // Future phase: replace with World Bank + SDG aligned connector flow.
    const dataset = await readMockDataset(fileName);
    return jsonOk(dataset);
  } catch (error) {
    return jsonError(
      `Unable to read mock World Bank style dataset: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
  }
};
