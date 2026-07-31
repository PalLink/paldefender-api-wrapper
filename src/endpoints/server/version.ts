import type { PDAPIClient } from "../../client.js";
import type { Version } from "../../types.js";

export function versionEndpoint(client: PDAPIClient) {
    return client.get<Version>("/version");
}
