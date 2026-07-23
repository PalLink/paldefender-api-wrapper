import type { PDAPIClient } from "../../client.js";
import type { GuildResponse } from "../../types.js";

/**
 * Fetch a single guild by identifier.
 * @param {PDAPIClient} client
 * @param {string} guildId Parameter for the function.
 * @returns {Promise<unknown>}
 */
export function guildEndpoint(client: PDAPIClient, guildId: string) {
    return client.get<GuildResponse>(`/guild/${encodeURIComponent(guildId)}`);
}
