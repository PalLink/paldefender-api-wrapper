import type { PDAPIClient } from "../../client.js";
import type { BanList, BanListQueryOptions } from "../../types.js";

/**
 * Retrieve the server banlist.
 * @param {PDAPIClient} client
 * @param {BanListQueryOptions} options? Parameter for the function.
 * @returns {Promise<unknown>}
 */
export function banlistEndpoint(client: PDAPIClient, options?: BanListQueryOptions) {
    const query = new URLSearchParams();
/**
 * Execute if.
 * @returns {unknown}
 */
    if (options) {
/**
 * Execute for.
 * @returns {unknown}
 */
        for (const [key, value] of Object.entries(options)) {
/**
 * Execute if.
 * @returns {unknown}
 */
            if (value !== undefined) {
                query.append(key, String(value));
            }
        }
    }

    return client.get<BanList>(`/banlist${query.toString() ? `?${query}` : ""}`);
}
