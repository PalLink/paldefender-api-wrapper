import type { PDAPIClient } from "../../client.js";
import type { PlayerResponse } from "../../types.js";

export function playerEndpoint(client: PDAPIClient, playerIdentifier: string) {
    return client.get<PlayerResponse>(`/player/${encodeURIComponent(playerIdentifier)}`);
}
