import type { PDAPIClient } from "../../client.js";
import type { Version } from "../../types.js";

/**
 * Get the current server version information.
 * @param {PDAPIClient} client
 * @returns {Promise<unknown>}
 */
export function versionEndpoint(client: PDAPIClient) {
    return client.get<Version>("/version");
}
