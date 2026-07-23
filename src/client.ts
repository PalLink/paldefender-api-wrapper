import { GiveAPI, GuildsAPI, ModerationAPI, PlayersAPI, ServerAPI, TechnologyAPI } from "./endpoints/index.js";
import type { PDClientErrorHandler, PDClientErrorContext, PDClientOptions } from "./types.js";

/**
 * Primary PalDefender API client. Use this class to access grouped endpoint helpers.
 */
export class PDAPIClient {
    private readonly baseUrl: string;
    private readonly authHeader: string;
    private errorHandler: PDClientErrorHandler | undefined;
    public readonly players: PlayersAPI;
    public readonly server: ServerAPI;
    public readonly guilds: GuildsAPI;
    public readonly moderation: ModerationAPI;
    public readonly give: GiveAPI;
    public readonly technology: TechnologyAPI;

/**
 * Create a new PalDefender client instance.
 * @param {PDClientOptions} options
 */
    constructor(options: PDClientOptions) {
        const host = options.host ?? "127.0.0.1";
        const port = options.port ?? 13997;
        const token = options.token ?? "";

/**
 * Execute if.
 * @returns {unknown}
 */
        if (!host || !port) {
            throw new Error('PALDEFENDER_IP and PALDEFENDER_PORT must be set');
        }
/**
 * Execute if.
 * @returns {unknown}
 */
        if (!token) {
            throw new Error('PALDEFENDER_TOKEN must be set');
        }

        this.baseUrl = `http://${host}:${port}/v1/pdapi`;
        this.authHeader = `Bearer ${token}`;
        this.errorHandler = options.errorHandler;
        this.players = new PlayersAPI(this);
        this.server = new ServerAPI(this);
        this.guilds = new GuildsAPI(this);
        this.moderation = new ModerationAPI(this);
        this.give = new GiveAPI(this);
        this.technology = new TechnologyAPI(this);
    }

    public async request<TResponse, TBody = never>(
        path: string,
        method: "GET" | "POST" = "GET",
        body?: TBody,
    ): Promise<TResponse> {
        const controller = new AbortController();

        const timeout = setTimeout(() => controller.abort(), 30_000);

        const handleError = async (error: Error, context: PDClientErrorContext) => {
/**
 * Execute if.
 * @returns {unknown}
 */
            if (!this.errorHandler) return;
            try {
                await this.errorHandler(error, context);
            }
            catch {
                // Do not let error handler failures mask the original error.
            }
        };

        try {
            const res = await fetch(`${this.baseUrl}${path}`, {
                method,
                headers: {
                    Authorization: this.authHeader,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: body ? JSON.stringify(body) : null,
                signal: controller.signal,
            });

/**
 * Execute if.
 * @returns {unknown}
 */
            if (!res.ok) {
                const responseText = await res.text();
                const error = new Error(`PalDefender ${res.status}: ${responseText}`);
                await handleError(error, {
                    path,
                    method,
                    body,
                    status: res.status,
                    statusText: res.statusText,
                    responseText,
                });
                throw error;
            }

/**
 * Execute if.
 * @returns {unknown}
 */
            if (res.status === 204)
                return undefined as TResponse;

            return await res.json() as TResponse;
        }
/**
 * Execute catch.
 * @returns {unknown}
 */
        catch (error) {
/**
 * Execute if.
 * @returns {unknown}
 */
            if (error instanceof Error) {
                await handleError(error, { path, method, body });
            }
            throw error;
        }
        finally {
/**
 * Execute clearTimeout.
 * @returns {unknown}
 */
            clearTimeout(timeout);
        }
    }

/**
 * Report an error to the configured client error handler.
 * @param {Error} error Parameter for the function.
 * @param {PDClientErrorContext} context
 * @returns {Promise<unknown>}
 */
    public async reportError(error: Error, context: PDClientErrorContext) {
/**
 * Execute if.
 * @returns {unknown}
 */
        if (!this.errorHandler) return;

        try {
            await this.errorHandler(error, context);
        }
        catch {
            // ignore handler failures
        }
    }

/**
 * Register an error handler for the client.
 * @param {PDClientErrorHandler} handler
 * @returns {unknown}
 */
    public onError(handler: PDClientErrorHandler) {
        this.errorHandler = handler;
        return this;
    }

    public get<TResponse>(path: string): Promise<TResponse> {
        return this.request<TResponse>(path, "GET");
    }

    public post<TResponse, TBody = unknown>(path: string, body?: TBody): Promise<TResponse> {
        return this.request<TResponse, TBody>(path, "POST", body);
    }
}
