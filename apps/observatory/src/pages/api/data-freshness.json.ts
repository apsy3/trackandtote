import type { APIRoute } from "astro";
import { readMockFreshnessTable } from "@/lib/server/mockData";
import { jsonError, jsonOk } from "@/lib/server/apiResponse";

export const GET: APIRoute = async () => {
  try {
    const rows = await readMockFreshnessTable();
    return jsonOk(rows);
  } catch (error) {
    return jsonError(
      `Unable to build data freshness table: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
  }
};
