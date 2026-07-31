import type { PDAPIClient } from "../../client.js";
import type { ForgetTechRequest, ForgetTechResponse } from "../../types.js";
import type { TechnologyId } from "../../pal_constants/technology.js";

export function forgetTechEndpoint(client: PDAPIClient, playerIdentifier: string, technology: TechnologyId | TechnologyId[] | "All") {
    const body: ForgetTechRequest = { Technology: technology };
    return client.post<ForgetTechResponse>(`/forgettech/${encodeURIComponent(playerIdentifier)}`, body);
}
