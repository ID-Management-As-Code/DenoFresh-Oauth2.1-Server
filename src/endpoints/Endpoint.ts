import { HttpRequest, HttpResponse } from '../http/index.ts';

/**
 * The type used for the handler function of an endpoint.
 */
export type EndpointHandler = (request: HttpRequest) => HttpResponse;

/**
 * Represents an endpoint that is served up by the server for interaction over
 * HTTP.
 */
export abstract class Endpoint {
    /**
     * The path the endpoint should handle.
     */
    public abstract get path(): string;

    /**
     * The logic used to handle requests for this endpoint.
     *
     * @param request The request to build the response from.
     */
    public abstract handler(request: HttpRequest): HttpResponse;
}
