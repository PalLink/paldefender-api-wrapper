import { describe, expect, it } from "vitest";
import { ItemId } from "../src/pal_constants/items.js";
import { getRecipeMaterialGrants, getRecipeMaterials } from "../src/pal_constants/recipes.js";

describe("recipes helper", () => {
    it("returns material grants for a known recipe", () => {
        const grants = getRecipeMaterialGrants(ItemId.MegaSphere);

        expect(grants).toEqual([
            { ItemID: ItemId.PaldiumFragment, Count: 1 },
            { ItemID: ItemId.Ingot, Count: 1 },
            { ItemID: ItemId.Wood, Count: 3 },
            { ItemID: ItemId.Stone, Count: 3 },
        ]);
    });

    it("returns undefined for an unknown recipe", () => {
        expect(getRecipeMaterialGrants("UnknownItem" as ItemId)).toBeUndefined();
    });

    it("returns a material map for a known recipe", () => {
        expect(getRecipeMaterials(ItemId.GoldCoin)).toEqual({ [ItemId.Ingot]: 30 });
    });
});
