import type { PDAPIClient } from "../../client.js";
import type { SendPlayerMessageRequest, SendPlayerMessageResponse } from "../../types.js";

export function sendPlayerMessageEndpoint(client: PDAPIClient, payload: SendPlayerMessageRequest) {
    return client.post<SendPlayerMessageResponse>("/SendPlayerMessage", payload);
}
