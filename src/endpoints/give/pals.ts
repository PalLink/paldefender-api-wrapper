import type { PDAPIClient } from "../../client.js";
import type { GivePalGrant, GivePalsResponse } from "../../types.js";

/**
 * Grant PalsEndpoint to a player.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {GivePalGrant[]} grants Grant payload data to send to the API.
 * @returns {Promise<unknown>}
 */
export function givePalsEndpoint(client: PDAPIClient, playerIdentifier: string, grants: GivePalGrant[]) {
    return client.post<GivePalsResponse>(`/give/pals/${encodeURIComponent(playerIdentifier)}`, { Pals: grants });
}
