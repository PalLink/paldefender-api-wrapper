import type { PDAPIClient } from "../../client.js";
import { alertEndpoint } from "./alert.js";
import { banlistEndpoint } from "./banlist.js";
import { broadcastEndpoint } from "./broadcast.js";
import { deletebaseEndpoint } from "./deletebase.js";
import { reloadconfigEndpoint } from "./reloadconfig.js";
import { sendPlayerMessageEndpoint } from "./sendPlayerMessage.js";
import { versionEndpoint } from "./version.js";

/**
 * ServerAPI wraps a set of PalDefender API endpoints.
 */
export class ServerAPI {
/**
 * Construct a new API wrapper instance.
 * @param {PDAPIClient} client
 */
    constructor(private client: PDAPIClient) { }

/**
 * Send an alert message to the server.
 * @param {string} message Text message to send.
 * @returns {unknown}
 */
    alert(message: string) {
        return alertEndpoint(this.client, message);
    }

/**
 * Retrieve the server banlist.
 * @param {Parameters<typeof banlistEndpoint>[1]} options? Parameter for the function.
 * @returns {unknown}
 */
    banlist(options?: Parameters<typeof banlistEndpoint>[1]) {
        return banlistEndpoint(this.client, options);
    }

/**
 * Broadcast a message to all connected players.
 * @param {string} message Text message to send.
 * @returns {unknown}
 */
    broadcast(message: string) {
        return broadcastEndpoint(this.client, message);
    }

/**
 * Delete a base camp by its ID.
 * @param {string} baseCampId The ID of the base camp to delete.
 * @returns {unknown}
 */
    deletebase(baseCampId: string) {
        return deletebaseEndpoint(this.client, baseCampId);
    }

/**
 * Reload server configuration on the PalDefender server.
 * @returns {unknown}
 */
    reloadconfig() {
        return reloadconfigEndpoint(this.client);
    }

/**
 * Send a private message to a player.
 * @param {Parameters<typeof sendPlayerMessageEndpoint>[1]} payload
 * @returns {unknown}
 */
    sendPlayerMessage(payload: Parameters<typeof sendPlayerMessageEndpoint>[1]) {
        return sendPlayerMessageEndpoint(this.client, payload);
    }

/**
 * Get the current server version information.
 * @returns {unknown}
 */
    version() {
        return versionEndpoint(this.client);
    }
}
