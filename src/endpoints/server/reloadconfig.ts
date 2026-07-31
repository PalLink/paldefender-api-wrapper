import type { PDAPIClient } from "../../client.js";
import type { SuccessResponse } from "../../types.js";

export function reloadconfigEndpoint(client: PDAPIClient) {
    return client.post<SuccessResponse>("/ReloadConfig");
}
