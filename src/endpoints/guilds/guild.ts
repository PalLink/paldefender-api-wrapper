import type { PDAPIClient } from "../../client.js";
import type { GuildResponse } from "../../types.js";

export function guildEndpoint(client: PDAPIClient, guildId: string) {
    return client.get<GuildResponse>(`/guild/${encodeURIComponent(guildId)}`);
}
