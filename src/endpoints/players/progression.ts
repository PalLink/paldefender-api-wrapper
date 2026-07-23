import type { PDAPIClient } from "../../client.js";
import type { ProgressionResponse } from "../../types.js";

/**
 * Execute progressionEndpoint.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @returns {Promise<unknown>}
 */
export function progressionEndpoint(client: PDAPIClient, playerIdentifier: string) {
    return client.get<ProgressionResponse>(`/progression/${encodeURIComponent(playerIdentifier)}`);
}
