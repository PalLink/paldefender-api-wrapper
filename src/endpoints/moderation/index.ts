import type { PDAPIClient } from "../../client.js";
import { banEndpoint } from "./ban.js";
import { banipEndpoint } from "./banip.js";
import { kickEndpoint } from "./kick.js";
import { unbanEndpoint } from "./unban.js";
import { unbanipEndpoint } from "./unbanip.js";

export class ModerationAPI {
    constructor(private client: PDAPIClient) { }

    ban(playerIdentifier: string, reason?: string, ip: boolean = false) {
        return banEndpoint(this.client, playerIdentifier, reason, ip);
    }

    banip(ip: string, options?: { Reason?: string; UserId?: string }) {
        return banipEndpoint(this.client, ip, options);
    }

    kick(playerIdentifier: string, reason?: string) {
        return kickEndpoint(this.client, playerIdentifier, reason);
    }

    unban(userId: string) {
        return unbanEndpoint(this.client, userId);
    }

    unbanip(ip: string) {
        return unbanipEndpoint(this.client, ip);
    }
}
