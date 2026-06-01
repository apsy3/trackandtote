import type { APIRoute } from "astro";
import { readMockDataset } from "@/lib/server/mockData";
import { jsonError, jsonOk } from "@/lib/server/apiResponse";

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const metric = url.searchParams.get("metric") ?? "temperature";
    const fileName =
      metric === "rainfall" ? "delhi-rainfall.json" : "delhi-temperature.json";

    // Future phase: replace with IMD/NASA POWER connector orchestration.
    const dataset = await readMockDataset(fileName);
    return jsonOk(dataset);
  } catch (error) {
    return jsonError(
      `Unable to read mock weather dataset: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
  }
};
