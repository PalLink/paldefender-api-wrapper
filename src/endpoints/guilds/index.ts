import type { PDAPIClient } from "../../client.js";
import { guildsEndpoint } from "./guilds.js";
import { guildEndpoint } from "./guild.js";

export class GuildsAPI {
    constructor(private client: PDAPIClient) { }

    getGuilds() {
        return guildsEndpoint(this.client);
    }

    getGuild(guildId: string) {
        return guildEndpoint(this.client, guildId);
    }
}
