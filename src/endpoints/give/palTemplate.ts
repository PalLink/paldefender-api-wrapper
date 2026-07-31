import type { PDAPIClient } from "../../client.js";
import type { GivePalTemplateResponse } from "../../types.js";

export function givePalTemplateEndpoint(client: PDAPIClient, playerIdentifier: string, templates: string[]) {
    return client.post<GivePalTemplateResponse>(`/give/paltemplate/${encodeURIComponent(playerIdentifier)}`, { PalTemplates: templates });
}
