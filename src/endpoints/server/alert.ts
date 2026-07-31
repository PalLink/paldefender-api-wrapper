import type { PDAPIClient } from "../../client.js";
import type { SuccessResponse } from "../../types.js";

export async function alertEndpoint(client: PDAPIClient, message: string) {
    if (!message.trim()) {
        const error = new Error("message is required");
        await client.reportError(error, { path: "/Alert", method: "POST", body: { Message: message } });
        throw error;
    }

    return client.post<SuccessResponse>("/Alert", { Message: message });
}
