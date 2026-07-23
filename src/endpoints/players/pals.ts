import type { PDAPIClient } from "../../client.js";
import type { PalsResponse } from "../../types.js";

/**
 * Execute palsEndpoint.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @returns {Promise<unknown>}
 */
export function palsEndpoint(client: PDAPIClient, playerIdentifier: string) {
    return client.get<PalsResponse>(`/pals/${encodeURIComponent(playerIdentifier)}`);
}
