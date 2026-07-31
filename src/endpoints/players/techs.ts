import type { PDAPIClient } from "../../client.js";
import type { TechsResponse } from "../../types.js";

export function techsEndpoint(client: PDAPIClient, playerIdentifier: string) {
    return client.get<TechsResponse>(`/techs/${encodeURIComponent(playerIdentifier)}`);
}
