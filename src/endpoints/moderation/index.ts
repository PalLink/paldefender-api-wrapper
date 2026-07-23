import type { PDAPIClient } from "../../client.js";
import { banEndpoint } from "./ban.js";
import { banipEndpoint } from "./banip.js";
import { kickEndpoint } from "./kick.js";
import { unbanEndpoint } from "./unban.js";
import { unbanipEndpoint } from "./unbanip.js";

/**
 * ModerationAPI wraps a set of PalDefender API endpoints.
 */
export class ModerationAPI {
/**
 * Construct a new API wrapper instance.
 * @param {PDAPIClient} client
 */
    constructor(private client: PDAPIClient) { }

/**
 * Ban a player or IP address.
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {string} reason? Parameter for the function.
 * @param {boolean = false} ip IP address to target.
 * @returns {unknown}
 */
    ban(playerIdentifier: string, reason?: string, ip: boolean = false) {
        return banEndpoint(this.client, playerIdentifier, reason, ip);
    }

/**
 * Ban an IP address.
 * @param {string} ip IP address to target.
 * @param {{ Reason?: string; UserId?: string }} options? Parameter for the function.
 * @returns {unknown}
 */
    banip(ip: string, options?: { Reason?: string; UserId?: string }) {
        return banipEndpoint(this.client, ip, options);
    }

/**
 * Kick a player from the server.
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {string} reason? Parameter for the function.
 * @returns {unknown}
 */
    kick(playerIdentifier: string, reason?: string) {
        return kickEndpoint(this.client, playerIdentifier, reason);
    }

/**
 * Unban a player.
 * @param {string} userId User identifier to target.
 * @returns {unknown}
 */
    unban(userId: string) {
        return unbanEndpoint(this.client, userId);
    }

/**
 * Unban an IP address.
 * @param {string} ip IP address to target.
 * @returns {unknown}
 */
    unbanip(ip: string) {
        return unbanipEndpoint(this.client, ip);
    }
}
