import type { PDAPIClient } from "../../client.js";
import { alertEndpoint } from "./alert.js";
import { banlistEndpoint } from "./banlist.js";
import { broadcastEndpoint } from "./broadcast.js";
import { deletebaseEndpoint } from "./deletebase.js";
import { reloadconfigEndpoint } from "./reloadconfig.js";
import { sendPlayerMessageEndpoint } from "./sendPlayerMessage.js";
import { versionEndpoint } from "./version.js";

export class ServerAPI {
    constructor(private client: PDAPIClient) { }

    alert(message: string) {
        return alertEndpoint(this.client, message);
    }

    banlist(options?: Parameters<typeof banlistEndpoint>[1]) {
        return banlistEndpoint(this.client, options);
    }

    broadcast(message: string) {
        return broadcastEndpoint(this.client, message);
    }

    deletebase(baseCampId: string) {
        return deletebaseEndpoint(this.client, baseCampId);
    }

    reloadconfig() {
        return reloadconfigEndpoint(this.client);
    }

    sendPlayerMessage(payload: Parameters<typeof sendPlayerMessageEndpoint>[1]) {
        return sendPlayerMessageEndpoint(this.client, payload);
    }

    version() {
        return versionEndpoint(this.client);
    }
}
