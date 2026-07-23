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

describe("PlayersAPI", () => {
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

    it("calls players", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Meta: { PlayerCount: 0, OnlineCount: 0 }, Players: [] }));

        await client.players.getPlayers();

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/players",
            expect.objectContaining({ method: "GET" }),
        );
    });

    it("calls player", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Player: { Name: "Test", IP: "1.1.1.1", PlayerUID: "uid", UserId: "uid", GuildName: "guild", GuildUUID: "gid", Status: "Online", WorldLocation: { x: 0, y: 0, z: 0 }, MapLocation: { x: 0, y: 0, z: 0 } } }));

        await client.players.getPlayer("uid");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/player/uid",
            expect.objectContaining({ method: "GET" }),
        );
    });

    it("finds player by exact name", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({
            Meta: { PlayerCount: 2, OnlineCount: 1 }, Players: [
                { Name: "Test Player", IP: "1.1.1.1", PlayerUID: "uid1", UserId: "uid1", GuildName: "guild", GuildUUID: "gid", Status: "Online", WorldLocation: { x: 0, y: 0, z: 0 }, MapLocation: { x: 0, y: 0, z: 0 } },
                { Name: "Other Player", IP: "2.2.2.2", PlayerUID: "uid2", UserId: "uid2", GuildName: "guild2", GuildUUID: "gid2", Status: "Offline", WorldLocation: { x: 1, y: 1, z: 1 }, MapLocation: { x: 1, y: 1, z: 1 } },
            ]
        }));

        const player = await client.players.findPlayerByName("test player");

        expect(player?.Name).toBe("Test Player");
        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/players",
            expect.objectContaining({ method: "GET" }),
        );
    });

    it("finds players by partial name", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({
            Meta: { PlayerCount: 3, OnlineCount: 1 }, Players: [
                { Name: "Test Player", IP: "1.1.1.1", PlayerUID: "uid1", UserId: "uid1", GuildName: "guild", GuildUUID: "gid", Status: "Online", WorldLocation: { x: 0, y: 0, z: 0 }, MapLocation: { x: 0, y: 0, z: 0 } },
                { Name: "Tester", IP: "2.2.2.2", PlayerUID: "uid2", UserId: "uid2", GuildName: "guild2", GuildUUID: "gid2", Status: "Offline", WorldLocation: { x: 1, y: 1, z: 1 }, MapLocation: { x: 1, y: 1, z: 1 } },
                { Name: "Other Player", IP: "3.3.3.3", PlayerUID: "uid3", UserId: "uid3", GuildName: "guild3", GuildUUID: "gid3", Status: "Offline", WorldLocation: { x: 2, y: 2, z: 2 }, MapLocation: { x: 2, y: 2, z: 2 } },
            ]
        }));

        const matches = await client.players.findPlayerByPartialName("test");

        expect(matches).toHaveLength(2);
        expect(matches.map((player) => player.Name)).toEqual(["Test Player", "Tester"]);
        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/players",
            expect.objectContaining({ method: "GET" }),
        );
    });

    it("calls pals", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Meta: { PlayerUID: "uid", Player: "Test", TeamCount: 0, PalboxCount: 0, BaseCampCount: 0 }, Pals: { Team: {}, Palbox: {}, BaseCamps: [] } }));

        await client.players.getPals("uid");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/pals/uid",
            expect.objectContaining({ method: "GET" }),
        );
    });

    it("calls items", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Meta: { PlayerUID: "uid", Player: "Test" }, Inventory: { Items: { Available: true, ContainerID: "id", UsedSlots: 0, MaxSlots: 0, FreeSlots: 0, Slots: {} }, KeyItems: { Available: true, ContainerID: "id", UsedSlots: 0, MaxSlots: 0, FreeSlots: 0, Slots: {} }, Weapons: { Available: true, ContainerID: "id", UsedSlots: 0, MaxSlots: 0, FreeSlots: 0, Slots: {} }, Armor: { Available: true, ContainerID: "id", UsedSlots: 0, MaxSlots: 0, FreeSlots: 0, Slots: {} }, Food: { Available: true, ContainerID: "id", UsedSlots: 0, MaxSlots: 0, FreeSlots: 0, Slots: {} }, DropSlot: { Available: true, ContainerID: "id", UsedSlots: 0, MaxSlots: 0, FreeSlots: 0, Slots: {} } } }));

        await client.players.getItems("uid");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/items/uid",
            expect.objectContaining({ method: "GET" }),
        );
    });

    it("calls progression", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Meta: { PlayerUID: "uid", Player: "Test" }, Progression: {} }));

        await client.players.getProgression("uid");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/progression/uid",
            expect.objectContaining({ method: "GET" }),
        );
    });

    it("calls techs", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Meta: { PlayerUID: "uid", Player: "Test", UnlockedCount: 0, LockedCount: 0, TotalCount: 0 }, Techs: { Unlocked: [] } }));

        await client.players.getTechs("uid");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/techs/uid",
            expect.objectContaining({ method: "GET" }),
        );
    });
});
