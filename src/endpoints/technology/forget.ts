import type { PDAPIClient } from "../../client.js";
import type { ForgetTechRequest, ForgetTechResponse } from "../../types.js";
import type { TechnologyId } from "../../pal_constants/technology.js";

/**
 * Forget technology for a player.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {TechnologyId | TechnologyId[] | "All"} technology Technology constant or list of constants, or "All".
 * @returns {Promise<unknown>}
 */
export function forgetTechEndpoint(client: PDAPIClient, playerIdentifier: string, technology: TechnologyId | TechnologyId[] | "All") {
    const body: ForgetTechRequest = { Technology: technology };
    return client.post<ForgetTechResponse>(`/forgettech/${encodeURIComponent(playerIdentifier)}`, body);
}
