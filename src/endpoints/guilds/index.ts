import type { PDAPIClient } from "../../client.js";
import { guildsEndpoint } from "./guilds.js";
import { guildEndpoint } from "./guild.js";

/**
 * GuildsAPI wraps a set of PalDefender API endpoints.
 */
export class GuildsAPI {
/**
 * Construct a new API wrapper instance.
 * @param {PDAPIClient} client
 */
    constructor(private client: PDAPIClient) { }

/**
 * Fetch Guilds from the PalDefender API.
 * @returns {unknown}
 */
    getGuilds() {
        return guildsEndpoint(this.client);
    }

/**
 * Fetch Guild from the PalDefender API.
 * @param {string} guildId Parameter for the function.
 * @returns {unknown}
 */
    getGuild(guildId: string) {
        return guildEndpoint(this.client, guildId);
    }
}
