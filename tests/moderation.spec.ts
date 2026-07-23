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

describe("ModerationAPI", () => {
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

    it("calls Ban", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Success: true, UserId: "uid", IP: true, BannedIP: "1.2.3.4", Kicked: 1 }));

        await client.moderation.ban("uid", "reason", true);

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/ban/uid",
            expect.objectContaining({ body: JSON.stringify({ Reason: "reason", IP: true }) }),
        );
    });

    it("calls BanIP", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Success: true, IP: "1.2.3.4", Kicked: 1 }));

        await client.moderation.banip("1.2.3.4", { Reason: "spam", UserId: "uid" });

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/banip/1.2.3.4",
            expect.objectContaining({ body: JSON.stringify({ Reason: "spam", UserId: "uid" }) }),
        );
    });

    it("calls Kick", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Success: true, UserId: "uid" }));

        await client.moderation.kick("uid", "reason");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/kick/uid",
            expect.objectContaining({ body: JSON.stringify({ Reason: "reason" }) }),
        );
    });

    it("calls Unban", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Success: true }));

        await client.moderation.unban("uid");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/unban/uid",
            expect.objectContaining({ method: "POST" }),
        );
    });

    it("calls UnbanIP", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ Success: true }));

        await client.moderation.unbanip("1.2.3.4");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/unbanip/1.2.3.4",
            expect.objectContaining({ method: "POST" }),
        );
    });
});
