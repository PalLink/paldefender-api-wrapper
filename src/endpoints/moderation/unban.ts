import type { PDAPIClient } from "../../client.js";
import type { SuccessResponse } from "../../types.js";

export function unbanEndpoint(client: PDAPIClient, userId: string) {
    return client.post<SuccessResponse>(`/unban/${encodeURIComponent(userId)}`);
}
