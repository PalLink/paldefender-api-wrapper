import type { PDAPIClient } from "../../client.js";
import { type ItemId, getRecipeMaterialGrants } from "../../pal_constants/index.js";
import { giveItemsEndpoint } from "./items.js";
import { givePalEggsEndpoint } from "./paleggs.js";
import { givePalsEndpoint } from "./pals.js";
import { givePalTemplateEndpoint } from "./palTemplate.js";
import { giveProgressionEndpoint } from "./progression.js";
import { giveDeprecatedEndpoint } from "./deprecated.js";

/**
 * GiveAPI wraps a set of PalDefender API endpoints.
 */
export class GiveAPI {
    /**
     * Construct a new API wrapper instance.
     * @param {PDAPIClient} client
     */
    constructor(private client: PDAPIClient) { }

    /**
     * Execute items.
     * @param {string} playerIdentifier Player UID or username to target.
     * @param {Parameters<typeof giveItemsEndpoint>[2]} grants Grant payload data to send to the API.
     * @returns {unknown}
     */
    items(playerIdentifier: string, grants: Parameters<typeof giveItemsEndpoint>[2]) {
        return giveItemsEndpoint(this.client, playerIdentifier, grants);
    }

    /**
     * Execute give for all materials required to craft a recipe product.
     * @param {string} playerIdentifier Player UID or username to target.
     * @param {ItemId} product Product item to craft.
     * @param {number} [quantity=1] Number of products to craft.
     * @returns {unknown}
     */
    giveRecipeMaterials(playerIdentifier: string, product: ItemId, quantity = 1) {
        const grants = getRecipeMaterialGrants(product);
        if (!grants) {
            throw new Error(`No recipe found for product "${product}"`);
        }

        const scaledGrants = quantity === 1 ? grants : grants.map(({ ItemID, Count }) => ({ ItemID, Count: Count * quantity }));
        return giveItemsEndpoint(this.client, playerIdentifier, scaledGrants);
    }

    /**
     * Execute paleggs.
     * @param {string} playerIdentifier Player UID or username to target.
     * @param {Parameters<typeof givePalEggsEndpoint>[2]} grants Grant payload data to send to the API.
     * @returns {unknown}
     */
    paleggs(playerIdentifier: string, grants: Parameters<typeof givePalEggsEndpoint>[2]) {
        return givePalEggsEndpoint(this.client, playerIdentifier, grants);
    }

    /**
     * Execute pals.
     * @param {string} playerIdentifier Player UID or username to target.
     * @param {Parameters<typeof givePalsEndpoint>[2]} grants Grant payload data to send to the API.
     * @returns {unknown}
     */
    pals(playerIdentifier: string, grants: Parameters<typeof givePalsEndpoint>[2]) {
        return givePalsEndpoint(this.client, playerIdentifier, grants);
    }

    /**
     * Execute palTemplate.
     * @param {string} playerIdentifier Player UID or username to target.
     * @param {Parameters<typeof givePalTemplateEndpoint>[2]} templates List of pal template identifiers.
     * @returns {unknown}
     */
    palTemplate(playerIdentifier: string, templates: Parameters<typeof givePalTemplateEndpoint>[2]) {
        return givePalTemplateEndpoint(this.client, playerIdentifier, templates);
    }

    /**
     * Execute progression.
     * @param {string} playerIdentifier Player UID or username to target.
     * @param {Parameters<typeof giveProgressionEndpoint>[2]} grants Grant payload data to send to the API.
     * @returns {unknown}
     */
    progression(playerIdentifier: string, grants: Parameters<typeof giveProgressionEndpoint>[2]) {
        return giveProgressionEndpoint(this.client, playerIdentifier, grants);
    }

    /**
     * Execute deprecated.
     * @param {Parameters<typeof giveDeprecatedEndpoint>[1]} payload
     * @returns {unknown}
     */
    deprecated(payload: Parameters<typeof giveDeprecatedEndpoint>[1]) {
        return giveDeprecatedEndpoint(this.client, payload);
    }
}
