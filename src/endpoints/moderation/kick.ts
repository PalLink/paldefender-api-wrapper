import type { PDAPIClient } from "../../client.js";
import type { KickResponse } from "../../types.js";

export function kickEndpoint(client: PDAPIClient, playerIdentifier: string, reason?: string) {
    return client.post<KickResponse>(`/kick/${encodeURIComponent(playerIdentifier)}`, reason ? { Reason: reason } : undefined);
}
