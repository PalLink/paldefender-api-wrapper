import type { PDAPIClient } from "../../client.js";
import type { ItemsResponse } from "../../types.js";

export function itemsEndpoint(client: PDAPIClient, playerIdentifier: string) {
    return client.get<ItemsResponse>(`/items/${encodeURIComponent(playerIdentifier)}`);
}
