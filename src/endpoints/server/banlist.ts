import type { PDAPIClient } from "../../client.js";
import type { BanList, BanListQueryOptions } from "../../types.js";

export function banlistEndpoint(client: PDAPIClient, options?: BanListQueryOptions) {
    const query = new URLSearchParams();
    if (options) {
        for (const [key, value] of Object.entries(options)) {
            if (value !== undefined) {
                query.append(key, String(value));
            }
        }
    }

    return client.get<BanList>(`/banlist${query.toString() ? `?${query}` : ""}`);
}
