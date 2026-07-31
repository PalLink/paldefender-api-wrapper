import type { PDAPIClient } from "../../client.js";
import type { BanResponse } from "../../types.js";

export function banEndpoint(client: PDAPIClient, playerIdentifier: string, reason?: string, ip: boolean = false) {
    const body: { Reason?: string; IP?: boolean } = {};

    if (reason) body.Reason = reason;
    if (ip) body.IP = true;

    return client.post<BanResponse>(`/ban/${encodeURIComponent(playerIdentifier)}`, body);
}
