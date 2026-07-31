import type { PDAPIClient } from "../../client.js";
import type { SuccessResponse } from "../../types.js";

export async function broadcastEndpoint(client: PDAPIClient, message: string) {
    if (!message.trim()) {
        const error = new Error("message is required");
        await client.reportError(error, { path: "/Broadcast", method: "POST", body: { Message: message } });
        throw error;
    }

    return client.post<SuccessResponse>("/Broadcast", { Message: message });
}
