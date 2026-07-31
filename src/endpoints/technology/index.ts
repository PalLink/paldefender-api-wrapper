import type { PDAPIClient } from "../../client.js";
import { learnTechEndpoint } from "./learn.js";
import { forgetTechEndpoint } from "./forget.js";

export class TechnologyAPI {
    constructor(private client: PDAPIClient) { }

    learn(playerIdentifier: string, technology: Parameters<typeof learnTechEndpoint>[2]) {
        return learnTechEndpoint(this.client, playerIdentifier, technology);
    }

    forget(playerIdentifier: string, technology: Parameters<typeof forgetTechEndpoint>[2]) {
        return forgetTechEndpoint(this.client, playerIdentifier, technology);
    }
}
