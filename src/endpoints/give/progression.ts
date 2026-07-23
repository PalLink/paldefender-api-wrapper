import type { PDAPIClient } from "../../client.js";
import type { GiveProgressionRequest, GiveProgressionResponse } from "../../types.js";

/**
 * Grant ProgressionEndpoint to a player.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {GiveProgressionRequest} grants Grant payload data to send to the API.
 * @returns {Promise<unknown>}
 */
export function giveProgressionEndpoint(client: PDAPIClient, playerIdentifier: string, grants: GiveProgressionRequest) {
    return client.post<GiveProgressionResponse>(`/give/progression/${encodeURIComponent(playerIdentifier)}`, grants);
}
