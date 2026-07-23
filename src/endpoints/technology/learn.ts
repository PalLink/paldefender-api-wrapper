import type { PDAPIClient } from "../../client.js";
import type { LearnTechRequest, LearnTechResponse } from "../../types.js";
import type { TechnologyId } from "../../pal_constants/technology.js";

/**
 * Unlock technology for a player.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {TechnologyId | TechnologyId[] | "All"} technology Technology constant or list of constants, or "All".
 * @returns {Promise<unknown>}
 */
export function learnTechEndpoint(client: PDAPIClient, playerIdentifier: string, technology: TechnologyId | TechnologyId[] | "All") {
    const body: LearnTechRequest = { Technology: technology };
    return client.post<LearnTechResponse>(`/learntech/${encodeURIComponent(playerIdentifier)}`, body);
}
