import type { PDAPIClient } from "../../client.js";
import type { BanResponse } from "../../types.js";

/**
 * Ban a player or IP address.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {string} reason? Parameter for the function.
 * @param {boolean = false} ip IP address to target.
 * @returns {Promise<unknown>}
 */
export function banEndpoint(client: PDAPIClient, playerIdentifier: string, reason?: string, ip: boolean = false) {
    const body: { Reason?: string; IP?: boolean } = {};
/**
 * Execute if.
 * @returns {unknown}
 */
    if (reason) body.Reason = reason;
/**
 * Execute if.
 * @returns {unknown}
 */
    if (ip) body.IP = true;

    return client.post<BanResponse>(`/ban/${encodeURIComponent(playerIdentifier)}`, body);
}
