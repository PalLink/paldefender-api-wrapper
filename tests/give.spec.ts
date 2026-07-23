import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { PDAPIClient } from "../src/client.js";
import { ItemId, PalId } from "../src/pal_constants/index.js";

type MockFetch = ReturnType<typeof vi.fn>;

const createResponse = (payload: unknown, ok = true, status = 200, statusText = "OK") =>
    Promise.resolve({
        ok,
        status,
        statusText,
        json: () => Promise.resolve(payload),
        text: () => Promise.resolve(JSON.stringify(payload)),
    } as unknown as Response);

describe("GiveAPI", () => {
    let fetchMock: MockFetch;
    let client: PDAPIClient;

    beforeEach(() => {
        fetchMock = vi.fn();
        vi.stubGlobal("fetch", fetchMock);
        client = new PDAPIClient({ host: "127.0.0.1", port: 13997, token: "test-token" });
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it("calls give items", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Granted: { Items: 1 } }));

        await client.give.items("uid", [{ ItemID: "Stone", Count: 2 }]);

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/give/items/uid",
            expect.objectContaining({ body: JSON.stringify({ Items: [{ ItemID: "Stone", Count: 2 }] }) }),
        );
    });

    it("calls give recipe materials", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Granted: { Items: 1 } }));

        await client.give.giveRecipeMaterials("uid", ItemId.MegaSphere, 2);

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/give/items/uid",
            expect.objectContaining({
                body: JSON.stringify({
                    Items: [
                        { ItemID: ItemId.PaldiumFragment, Count: 2 },
                        { ItemID: ItemId.Ingot, Count: 2 },
                        { ItemID: ItemId.Wood, Count: 6 },
                        { ItemID: ItemId.Stone, Count: 6 },
                    ]
                })
            }),
        );
    });

    it("calls give paleggs", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Granted: { PalEggs: 1 } }));

        await client.give.paleggs("uid", [{ EggID: "PalEgg_Dark_01", PalID: "Alpaca" }]);

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/give/paleggs/uid",
            expect.objectContaining({ body: JSON.stringify({ PalEggs: [{ EggID: "PalEgg_Dark_01", PalID: "Alpaca" }] }) }),
        );
    });

    it("calls give pals", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Granted: { Pals: 1 } }));

        await client.give.pals("uid", [{ PalID: "Alpaca", Level: 10 }]);

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/give/pals/uid",
            expect.objectContaining({ body: JSON.stringify({ Pals: [{ PalID: "Alpaca", Level: 10 }] }) }),
        );
    });

    it("calls give palTemplate", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Granted: { PalTemplates: 1 } }));

        await client.give.palTemplate("uid", ["sekhmut"]);

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/give/paltemplate/uid",
            expect.objectContaining({ body: JSON.stringify({ PalTemplates: ["sekhmut"] }) }),
        );
    });

    it("calls give progression", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Granted: { EXP: 10 }, Totals: { EXP: 10 } }));

        await client.give.progression("uid", { EXP: 10 });

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/give/progression/uid",
            expect.objectContaining({ body: JSON.stringify({ EXP: 10 }) }),
        );
    });
});
