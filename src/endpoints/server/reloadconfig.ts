import type { PDAPIClient } from "../../client.js";
import type { SuccessResponse } from "../../types.js";

/**
 * Reload server configuration on the PalDefender server.
 * @param {PDAPIClient} client
 * @returns {Promise<unknown>}
 */
export function reloadconfigEndpoint(client: PDAPIClient) {
    return client.post<SuccessResponse>("/ReloadConfig");
}
