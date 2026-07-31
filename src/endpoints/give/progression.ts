import type { PDAPIClient } from "../../client.js";
import type { GiveProgressionRequest, GiveProgressionResponse } from "../../types.js";

export function giveProgressionEndpoint(client: PDAPIClient, playerIdentifier: string, grants: GiveProgressionRequest) {
    return client.post<GiveProgressionResponse>(`/give/progression/${encodeURIComponent(playerIdentifier)}`, grants);
}
