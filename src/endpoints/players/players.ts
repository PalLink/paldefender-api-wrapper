import type { PDAPIClient } from "../../client.js";
import type { PlayersResponse } from "../../types.js";

export function playersEndpoint(client: PDAPIClient) {
    return client.get<PlayersResponse>("/players");
}

export async function playerByNameEndpoint(client: PDAPIClient, playerName: string) {
    const players = await playersEndpoint(client);
    return players.Players.find(
        (player) => player.Name.toLowerCase() === playerName.toLowerCase(),
    );
}

export async function playerByPartialNameEndpoint(client: PDAPIClient, partialName: string) {
    const players = await playersEndpoint(client);
    const query = partialName.toLowerCase();
    return players.Players.filter(
        (player) => player.Name.toLowerCase().includes(query),
    );
}
