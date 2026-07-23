import type { PDAPIClient } from "../../client.js";
import { learnTechEndpoint } from "./learn.js";
import { forgetTechEndpoint } from "./forget.js";

/**
 * TechnologyAPI wraps a set of PalDefender API endpoints.
 */
export class TechnologyAPI {
/**
 * Construct a new API wrapper instance.
 * @param {PDAPIClient} client
 */
    constructor(private client: PDAPIClient) { }

/**
 * Unlock technology for a player.
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {Parameters<typeof learnTechEndpoint>[2]} technology Technology name or list of names, or "All".
 * @returns {unknown}
 */
    learn(playerIdentifier: string, technology: Parameters<typeof learnTechEndpoint>[2]) {
        return learnTechEndpoint(this.client, playerIdentifier, technology);
    }

/**
 * Forget technology for a player.
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {Parameters<typeof forgetTechEndpoint>[2]} technology Technology name or list of names, or "All".
 * @returns {unknown}
 */
    forget(playerIdentifier: string, technology: Parameters<typeof forgetTechEndpoint>[2]) {
        return forgetTechEndpoint(this.client, playerIdentifier, technology);
    }
}
