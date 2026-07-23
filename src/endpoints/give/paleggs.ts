import type { PDAPIClient } from "../../client.js";
import type { GivePalEggGrant, GivePalEggsResponse } from "../../types.js";

/**
 * Grant PalEggsEndpoint to a player.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {GivePalEggGrant[]} grants Grant payload data to send to the API.
 * @returns {Promise<unknown>}
 */
export function givePalEggsEndpoint(client: PDAPIClient, playerIdentifier: string, grants: GivePalEggGrant[]) {
    return client.post<GivePalEggsResponse>(`/give/paleggs/${encodeURIComponent(playerIdentifier)}`, { PalEggs: grants });
}
