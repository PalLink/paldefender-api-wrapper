import type { PDAPIClient } from "../../client.js";
import type { Player, PlayersResponse } from "../../types.js";

/**
 * Fetch a player by identifier from the PalDefender API.
 * @param {PDAPIClient} client
 * @returns {Promise<unknown>}
 */
export function playersEndpoint(client: PDAPIClient) {
    return client.get<PlayersResponse>("/players");
}

/**
 * Find a player by exact name.
 * @param {PDAPIClient} client
 * @param {string} playerName Exact player name to match.
 * @returns {Promise<unknown>}
 */
export async function playerByNameEndpoint(client: PDAPIClient, playerName: string) {
    const players = await playersEndpoint(client);
    return players.Players.find(
        (player) => player.Name.toLowerCase() === playerName.toLowerCase(),
    );
}

/**
 * Find players whose names include the provided substring.
 * @param {PDAPIClient} client
 * @param {string} partialName Partial player name to search for.
 * @returns {Promise<unknown>}
 */
export async function playerByPartialNameEndpoint(client: PDAPIClient, partialName: string) {
    const players = await playersEndpoint(client);
    const query = partialName.toLowerCase();
    return players.Players.filter(
        (player) => player.Name.toLowerCase().includes(query),
    );
}
