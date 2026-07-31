import type { PDAPIClient } from "../../client.js";
import type { GuildsResponse } from "../../types.js";

export function guildsEndpoint(client: PDAPIClient) {
    return client.get<GuildsResponse>("/guilds");
}
