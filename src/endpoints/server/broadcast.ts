import type { PDAPIClient } from "../../client.js";
import type { SuccessResponse } from "../../types.js";

/**
 * Broadcast a message to all connected players.
 * @param {PDAPIClient} client
 * @param {string} message Text message to send.
 * @returns {Promise<unknown>}
 */
export async function broadcastEndpoint(client: PDAPIClient, message: string) {
/**
 * Execute if.
 * @returns {unknown}
 */
    if (!message.trim()) {
        const error = new Error("message is required");
        await client.reportError(error, { path: "/Broadcast", method: "POST", body: { Message: message } });
        throw error;
    }

    return client.post<SuccessResponse>("/Broadcast", { Message: message });
}
