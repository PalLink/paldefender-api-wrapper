import type { PDAPIClient } from "../../client.js";
import type { GivePalGrant, GivePalsResponse } from "../../types.js";

export function givePalsEndpoint(client: PDAPIClient, playerIdentifier: string, grants: GivePalGrant[]) {
    return client.post<GivePalsResponse>(`/give/pals/${encodeURIComponent(playerIdentifier)}`, { Pals: grants });
}
