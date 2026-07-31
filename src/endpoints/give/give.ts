import type { PDAPIClient } from "../../client.js";
import type { GiveDeprecatedResponse, GivePayload } from "../../types.js";

export function giveEndpoint(client: PDAPIClient, payload: GivePayload) {
    return client.post<GiveDeprecatedResponse>("/give", payload);
}
