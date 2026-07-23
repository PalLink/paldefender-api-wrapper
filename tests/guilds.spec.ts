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

describe("GuildsAPI", () => {
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

    it("calls guilds", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Meta: { GuildCount: 0 }, Guilds: [] }));

        await client.guilds.getGuilds();

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/guilds",
            expect.objectContaining({ method: "GET" }),
        );
    });

    it("calls guild", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Guild: { name: "guild", Level: 1, admin: { id: "admin", name: "Admin" }, member_count: 0, members: [], camp_count: 0, camps: [], items: {}, expeditions: { finished: 0, missions: {} }, laboratory: { current_research: "none", researches: {} } } }));

        await client.guilds.getGuild("gid");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/guild/gid",
            expect.objectContaining({ method: "GET" }),
        );
    });
});
