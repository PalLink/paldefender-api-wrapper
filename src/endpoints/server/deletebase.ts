import type { PDAPIClient } from "../../client.js";
import type { DeleteBaseResponse } from "../../types.js";

/**
 * Delete a base camp by its ID.
 * @param {PDAPIClient} client
 * @param {string} baseCampId The ID of the base camp to delete.
 * @returns {Promise<unknown>}
 */
export function deletebaseEndpoint(client: PDAPIClient, baseCampId: string) {
/**
 * Execute if.
 * @returns {unknown}
 */
    if (!baseCampId.trim()) {
        throw new Error("baseCampId is required");
    }

    return client.post<DeleteBaseResponse>(`/deletebase/${encodeURIComponent(baseCampId)}`);
}
