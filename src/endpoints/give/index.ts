import type { PDAPIClient } from "../../client.js";
import { type ItemId, getRecipeMaterialGrants } from "../../pal_constants/index.js";
import { giveItemsEndpoint } from "./items.js";
import { givePalEggsEndpoint } from "./paleggs.js";
import { givePalsEndpoint } from "./pals.js";
import { givePalTemplateEndpoint } from "./palTemplate.js";
import { giveProgressionEndpoint } from "./progression.js";
import { giveEndpoint } from "./give.js";

export class GiveAPI {
    constructor(private client: PDAPIClient) { }

    items(playerIdentifier: string, grants: Parameters<typeof giveItemsEndpoint>[2]) {
        return giveItemsEndpoint(this.client, playerIdentifier, grants);
    }

    giveRecipeMaterials(playerIdentifier: string, product: ItemId, quantity = 1) {
        const grants = getRecipeMaterialGrants(product);
        if (!grants) {
            throw new Error(`No recipe found for product "${product}"`);
        }

        const scaledGrants = quantity === 1 ? grants : grants.map(({ ItemID, Count }) => ({ ItemID, Count: Count * quantity }));
        return giveItemsEndpoint(this.client, playerIdentifier, scaledGrants);
    }

    paleggs(playerIdentifier: string, grants: Parameters<typeof givePalEggsEndpoint>[2]) {
        return givePalEggsEndpoint(this.client, playerIdentifier, grants);
    }

    pals(playerIdentifier: string, grants: Parameters<typeof givePalsEndpoint>[2]) {
        return givePalsEndpoint(this.client, playerIdentifier, grants);
    }

    palTemplate(playerIdentifier: string, templates: Parameters<typeof givePalTemplateEndpoint>[2]) {
        return givePalTemplateEndpoint(this.client, playerIdentifier, templates);
    }

    progression(playerIdentifier: string, grants: Parameters<typeof giveProgressionEndpoint>[2]) {
        return giveProgressionEndpoint(this.client, playerIdentifier, grants);
    }

    /**
    * 
    * @deprecated Use specific give endpoints instead.
    */
    give(payload: Parameters<typeof giveEndpoint>[1]) {
        return giveEndpoint(this.client, payload);
    }
}
