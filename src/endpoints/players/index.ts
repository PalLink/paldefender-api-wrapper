import type { PDAPIClient } from "../../client.js";
import { playerByNameEndpoint, playerByPartialNameEndpoint, playersEndpoint } from "./players.js";
import { playerEndpoint } from "./player.js";
import { palsEndpoint } from "./pals.js";
import { itemsEndpoint } from "./items.js";
import { progressionEndpoint } from "./progression.js";
import { techsEndpoint } from "./techs.js";

/**
 * PlayersAPI wraps a set of PalDefender API endpoints.
 */
export class PlayersAPI {
/**
 * Construct a new API wrapper instance.
 * @param {PDAPIClient} client
 */
    constructor(private client: PDAPIClient) { }

/**
 * Fetch Players from the PalDefender API.
 * @returns {unknown}
 */
    getPlayers() {
        return playersEndpoint(this.client);
    }

/**
 * Fetch Player from the PalDefender API.
 * @param {string} playerIdentifier Player UID or username to target.
 * @returns {unknown}
 */
    getPlayer(playerIdentifier: string) {
        return playerEndpoint(this.client, playerIdentifier);
    }

/**
 * Find PlayerByName in the PalDefender API.
 * @param {string} playerName Exact player name to match.
 * @returns {unknown}
 */
    findPlayerByName(playerName: string) {
        return playerByNameEndpoint(this.client, playerName);
    }

/**
 * Find PlayerByPartialName in the PalDefender API.
 * @param {string} partialName Partial player name to search for.
 * @returns {unknown}
 */
    findPlayerByPartialName(partialName: string) {
        return playerByPartialNameEndpoint(this.client, partialName);
    }

/**
 * Fetch Pals from the PalDefender API.
 * @param {string} playerIdentifier Player UID or username to target.
 * @returns {unknown}
 */
    getPals(playerIdentifier: string) {
        return palsEndpoint(this.client, playerIdentifier);
    }

/**
 * Fetch Items from the PalDefender API.
 * @param {string} playerIdentifier Player UID or username to target.
 * @returns {unknown}
 */
    getItems(playerIdentifier: string) {
        return itemsEndpoint(this.client, playerIdentifier);
    }

/**
 * Fetch Progression from the PalDefender API.
 * @param {string} playerIdentifier Player UID or username to target.
 * @returns {unknown}
 */
    getProgression(playerIdentifier: string) {
        return progressionEndpoint(this.client, playerIdentifier);
    }

/**
 * Fetch Techs from the PalDefender API.
 * @param {string} playerIdentifier Player UID or username to target.
 * @returns {unknown}
 */
    getTechs(playerIdentifier: string) {
        return techsEndpoint(this.client, playerIdentifier);
    }
}
