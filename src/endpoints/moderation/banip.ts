import type { PDAPIClient } from "../../client.js";
import type { BanIPResponse } from "../../types.js";

export function banipEndpoint(client: PDAPIClient, ip: string, options?: { Reason?: string; UserId?: string }) {
    return client.post<BanIPResponse>(`/banip/${encodeURIComponent(ip)}`, options ?? {});
}
