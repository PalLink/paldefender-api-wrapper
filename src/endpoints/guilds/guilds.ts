import type { PDAPIClient } from "../../client.js";
import type { GuildsResponse } from "../../types.js";

/**
 * Fetch the list of guilds.
 * @param {PDAPIClient} client
 * @returns {Promise<unknown>}
 */
export function guildsEndpoint(client: PDAPIClient) {
    return client.get<GuildsResponse>("/guilds");
}
