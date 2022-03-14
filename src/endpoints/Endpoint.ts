/**
 * Represents an endpoint that is served up by the server for interaction over
 * HTTP.
 */
export abstract class Endpoint {
    /**
     * The path the endpoint should handle.
     */
    public abstract get Path(): string;

    /**
     * The logic used to handle requests for this endpoint.
     *
     * @param request The request to build the response from.
     */
    public abstract Handler(request: Request): Response;
}
