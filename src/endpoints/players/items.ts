import type { PDAPIClient } from "../../client.js";
import type { ItemsResponse } from "../../types.js";

/**
 * Execute itemsEndpoint.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @returns {Promise<unknown>}
 */
export function itemsEndpoint(client: PDAPIClient, playerIdentifier: string) {
    return client.get<ItemsResponse>(`/items/${encodeURIComponent(playerIdentifier)}`);
}
