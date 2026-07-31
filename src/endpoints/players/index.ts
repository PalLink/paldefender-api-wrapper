import type { PDAPIClient } from "../../client.js";
import { playerByNameEndpoint, playerByPartialNameEndpoint, playersEndpoint } from "./players.js";
import { playerEndpoint } from "./player.js";
import { palsEndpoint } from "./pals.js";
import { itemsEndpoint } from "./items.js";
import { progressionEndpoint } from "./progression.js";
import { techsEndpoint } from "./techs.js";

export class PlayersAPI {
    constructor(private client: PDAPIClient) { }

    getPlayers() {
        return playersEndpoint(this.client);
    }

    getPlayer(playerIdentifier: string) {
        return playerEndpoint(this.client, playerIdentifier);
    }

    findPlayerByName(playerName: string) {
        return playerByNameEndpoint(this.client, playerName);
    }

    findPlayerByPartialName(partialName: string) {
        return playerByPartialNameEndpoint(this.client, partialName);
    }

    getPals(playerIdentifier: string) {
        return palsEndpoint(this.client, playerIdentifier);
    }

    getItems(playerIdentifier: string) {
        return itemsEndpoint(this.client, playerIdentifier);
    }

    getProgression(playerIdentifier: string) {
        return progressionEndpoint(this.client, playerIdentifier);
    }

    getTechs(playerIdentifier: string) {
        return techsEndpoint(this.client, playerIdentifier);
    }
}
