import type { PDAPIClient } from "../../client.js";
import type { LearnTechRequest, LearnTechResponse } from "../../types.js";
import type { TechnologyId } from "../../pal_constants/technology.js";

export function learnTechEndpoint(client: PDAPIClient, playerIdentifier: string, technology: TechnologyId | TechnologyId[] | "All") {
    const body: LearnTechRequest = { Technology: technology };
    return client.post<LearnTechResponse>(`/learntech/${encodeURIComponent(playerIdentifier)}`, body);
}
