import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { PDAPIClient } from "../src/client.js";

type MockFetch = ReturnType<typeof vi.fn>;

const createResponse = (payload: unknown, ok = true, status = 200, statusText = "OK") =>
    Promise.resolve({
        ok,
        status,
        statusText,
        json: () => Promise.resolve(payload),
        text: () => Promise.resolve(JSON.stringify(payload)),
    } as unknown as Response);

describe("ServerAPI", () => {
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

    it("calls Alert", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Success: true }));

        const result = await client.server.alert("Hello");

        expect(result).toEqual({ Success: true });
        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/Alert",
            expect.objectContaining({
                method: "POST",
                body: JSON.stringify({ Message: "Hello" }),
            }),
        );
    });

    it("calls banlist", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Banlist: {} }));

        await client.server.banlist({ active: true, userId: "123" });

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/banlist?active=true&userId=123",
            expect.objectContaining({ method: "GET" }),
        );
    });

    it("calls Broadcast", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Success: true }));

        await client.server.broadcast("Broadcast message");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/Broadcast",
            expect.objectContaining({
                body: JSON.stringify({ Message: "Broadcast message" }),
            }),
        );
    });

    it("calls DeleteBase", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ BaseCamp: { Id: "1", Summary: "Deleted" }, Deleted: { BaseCampPals: 0, StorageContainers: 0, ItemStacks: 0, ItemCount: 0, Buildings: 0, DropItems: 0, DefenseModels: 0, OtherMapObjects: 0, PalBox: false }, Archive: "archive" }));

        await client.server.deletebase("base/1");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/deletebase/base%2F1",
            expect.objectContaining({ method: "POST" }),
        );
    });

    it("calls SendPlayerMessage", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Success: true, SentCount: 1 }));

        await client.server.sendPlayerMessage({ SendType: "Message", Message: "Hi", UserID: "uid" });

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/SendPlayerMessage",
            expect.objectContaining({
                body: JSON.stringify({ SendType: "Message", Message: "Hi", UserID: "uid" }),
            }),
        );
    });

    it("calls Version", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Major: 1, Minor: 0, Patch: 0, Build: 1, Version: "1.0.0", VersionLong: "1.0.0", Beta: false }));

        await client.server.version();

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/version",
            expect.objectContaining({ method: "GET" }),
        );
    });
});
