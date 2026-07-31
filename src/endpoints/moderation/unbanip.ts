import type { PDAPIClient } from "../../client.js";
import type { SuccessResponse } from "../../types.js";

export function unbanipEndpoint(client: PDAPIClient, ip: string) {
    return client.post<SuccessResponse>(`/unbanip/${encodeURIComponent(ip)}`);
}
