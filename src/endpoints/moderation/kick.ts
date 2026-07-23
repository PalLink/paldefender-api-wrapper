import type { PDAPIClient } from "../../client.js";
import type { KickResponse } from "../../types.js";

/**
 * Kick a player from the server.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {string} reason? Parameter for the function.
 * @returns {Promise<unknown>}
 */
export function kickEndpoint(client: PDAPIClient, playerIdentifier: string, reason?: string) {
    return client.post<KickResponse>(`/kick/${encodeURIComponent(playerIdentifier)}`, reason ? { Reason: reason } : undefined);
}
