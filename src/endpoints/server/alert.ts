import type { PDAPIClient } from "../../client.js";
import type { SuccessResponse } from "../../types.js";

/**
 * Send an alert message to the server.
 * @param {PDAPIClient} client
 * @param {string} message Text message to send.
 * @returns {Promise<unknown>}
 */
export async function alertEndpoint(client: PDAPIClient, message: string) {
/**
 * Execute if.
 * @returns {unknown}
 */
    if (!message.trim()) {
        const error = new Error("message is required");
        await client.reportError(error, { path: "/Alert", method: "POST", body: { Message: message } });
        throw error;
    }

    return client.post<SuccessResponse>("/Alert", { Message: message });
}
