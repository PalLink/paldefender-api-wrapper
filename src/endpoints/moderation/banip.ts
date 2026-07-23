import type { PDAPIClient } from "../../client.js";
import type { BanIPResponse } from "../../types.js";

/**
 * Ban an IP address.
 * @param {PDAPIClient} client
 * @param {string} ip IP address to target.
 * @param {{ Reason?: string; UserId?: string }} options? Parameter for the function.
 * @returns {Promise<unknown>}
 */
export function banipEndpoint(client: PDAPIClient, ip: string, options?: { Reason?: string; UserId?: string }) {
    return client.post<BanIPResponse>(`/banip/${encodeURIComponent(ip)}`, options ?? {});
}
