import type { PDAPIClient } from "../../client.js";
import type { GiveDeprecatedResponse } from "../../types.js";

/**
 * Grant DeprecatedEndpoint to a player.
 * @param {PDAPIClient} client
 * @param {unknown} payload
 * @returns {Promise<unknown>}
 */
export function giveDeprecatedEndpoint(client: PDAPIClient, payload: unknown) {
    return client.post<GiveDeprecatedResponse>("/give", payload);
}
