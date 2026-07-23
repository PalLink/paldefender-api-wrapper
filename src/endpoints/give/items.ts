import type { PDAPIClient } from "../../client.js";
import type { GiveItemGrant, GiveItemsResponse } from "../../types.js";

/**
 * Grant ItemsEndpoint to a player.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {GiveItemGrant[]} grants Grant payload data to send to the API.
 * @returns {Promise<unknown>}
 */
export function giveItemsEndpoint(client: PDAPIClient, playerIdentifier: string, grants: GiveItemGrant[]) {
    return client.post<GiveItemsResponse>(`/give/items/${encodeURIComponent(playerIdentifier)}`, { Items: grants });
}
