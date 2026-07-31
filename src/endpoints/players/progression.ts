import type { PDAPIClient } from "../../client.js";
import type { ProgressionResponse } from "../../types.js";

export function progressionEndpoint(client: PDAPIClient, playerIdentifier: string) {
    return client.get<ProgressionResponse>(`/progression/${encodeURIComponent(playerIdentifier)}`);
}
