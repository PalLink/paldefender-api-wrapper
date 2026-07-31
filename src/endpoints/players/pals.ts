import type { PDAPIClient } from "../../client.js";
import type { PalsResponse } from "../../types.js";

export function palsEndpoint(client: PDAPIClient, playerIdentifier: string) {
    return client.get<PalsResponse>(`/pals/${encodeURIComponent(playerIdentifier)}`);
}
