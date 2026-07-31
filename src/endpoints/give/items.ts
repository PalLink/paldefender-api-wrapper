import type { PDAPIClient } from "../../client.js";
import type { GiveItemGrant, GiveItemsResponse } from "../../types.js";

export function giveItemsEndpoint(client: PDAPIClient, playerIdentifier: string, grants: GiveItemGrant[]) {
    return client.post<GiveItemsResponse>(`/give/items/${encodeURIComponent(playerIdentifier)}`, { Items: grants });
}
