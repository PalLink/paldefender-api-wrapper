import type { PDAPIClient } from "../../client.js";
import type { SuccessResponse } from "../../types.js";

/**
 * Unban an IP address.
 * @param {PDAPIClient} client
 * @param {string} ip IP address to target.
 * @returns {Promise<unknown>}
 */
export function unbanipEndpoint(client: PDAPIClient, ip: string) {
    return client.post<SuccessResponse>(`/unbanip/${encodeURIComponent(ip)}`);
}
