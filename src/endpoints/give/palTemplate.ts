import type { PDAPIClient } from "../../client.js";
import type { GivePalTemplateResponse } from "../../types.js";

/**
 * Grant PalTemplateEndpoint to a player.
 * @param {PDAPIClient} client
 * @param {string} playerIdentifier Player UID or username to target.
 * @param {string[]} templates List of pal template identifiers.
 * @returns {Promise<unknown>}
 */
export function givePalTemplateEndpoint(client: PDAPIClient, playerIdentifier: string, templates: string[]) {
    return client.post<GivePalTemplateResponse>(`/give/paltemplate/${encodeURIComponent(playerIdentifier)}`, { PalTemplates: templates });
}
