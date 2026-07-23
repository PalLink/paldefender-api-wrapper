import type { PDAPIClient } from "../../client.js";
import type { PlayerResponse } from "../../types.js";

/**
 * Fetch a player by identifier from the PalDefender API.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @returns {Promise<unknown>}
 */
export function playerEndpoint(client: PDAPIClient, playerIdentifier: string) {
    return client.get<PlayerResponse>(`/player/${encodeURIComponent(playerIdentifier)}`);
}
