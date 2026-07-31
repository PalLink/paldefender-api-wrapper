import type { PDAPIClient } from "../../client.js";
import type { DeleteBaseResponse } from "../../types.js";

export function deletebaseEndpoint(client: PDAPIClient, baseCampId: string) {
    if (!baseCampId.trim()) {
        throw new Error("baseCampId is required");
    }

    return client.post<DeleteBaseResponse>(`/deletebase/${encodeURIComponent(baseCampId)}`);
}
