import type { PDAPIClient } from "../../client.js";
import type { TechsResponse } from "../../types.js";

/**
 * Execute techsEndpoint.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @returns {Promise<unknown>}
 */
export function techsEndpoint(client: PDAPIClient, playerIdentifier: string) {
    return client.get<TechsResponse>(`/techs/${encodeURIComponent(playerIdentifier)}`);
}
