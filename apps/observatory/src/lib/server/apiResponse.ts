export function jsonOk(payload: unknown): Response {
  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export function jsonError(message: string, status = 500): Response {
  return new Response(
    JSON.stringify({
      error: message,
    }),
    {
      status,
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    },
  );
}
