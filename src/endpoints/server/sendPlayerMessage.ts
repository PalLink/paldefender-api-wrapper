import type { PDAPIClient } from "../../client.js";
import type { SendPlayerMessageRequest, SendPlayerMessageResponse } from "../../types.js";

/**
 * Send a private message to a player.
 * @param {PDAPIClient} client
 * @param {SendPlayerMessageRequest} payload
 * @returns {Promise<unknown>}
 */
export function sendPlayerMessageEndpoint(client: PDAPIClient, payload: SendPlayerMessageRequest) {
    return client.post<SendPlayerMessageResponse>("/SendPlayerMessage", payload);
}
