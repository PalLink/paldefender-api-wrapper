import type { PDAPIClient } from "../../client.js";
import type { SuccessResponse } from "../../types.js";

/**
 * Unban a player.
 * @param {PDAPIClient} client
 * @param {string} userId User identifier to target.
 * @returns {Promise<unknown>}
 */
export function unbanEndpoint(client: PDAPIClient, userId: string) {
    return client.post<SuccessResponse>(`/unban/${encodeURIComponent(userId)}`);
}
