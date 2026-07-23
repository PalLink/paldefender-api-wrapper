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

describe("TechnologyAPI", () => {
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

    it("calls learnTech", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ UnlockedCount: 1, Unlocked: ["tech1"], Skipped: [] }));

        await client.technology.learn("uid", "tech1");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/learntech/uid",
            expect.objectContaining({ body: JSON.stringify({ Technology: "tech1" }) }),
        );
    });

    it("calls forgetTech", async () => {
        fetchMock.mockResolvedValueOnce(createResponse({ ForgottenCount: 1, Forgotten: ["tech1"], Skipped: [] }));

        await client.technology.forget("uid", "tech1");

        expect(fetchMock).toHaveBeenCalledWith(
            "http://127.0.0.1:13997/v1/pdapi/forgettech/uid",
            expect.objectContaining({ body: JSON.stringify({ Technology: "tech1" }) }),
        );
    });
});
