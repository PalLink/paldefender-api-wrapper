import type { PDAPIClient } from "../../client.js";
import type { GivePalEggGrant, GivePalEggsResponse } from "../../types.js";

export function givePalEggsEndpoint(client: PDAPIClient, playerIdentifier: string, grants: GivePalEggGrant[]) {
    return client.post<GivePalEggsResponse>(`/give/paleggs/${encodeURIComponent(playerIdentifier)}`, { PalEggs: grants });
}
