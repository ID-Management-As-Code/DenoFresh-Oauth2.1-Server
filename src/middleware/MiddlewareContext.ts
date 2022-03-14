/**
 * The current context used to manage an HTTP request/response from the server.
 */
export interface MiddlewareContext {
    /**
     * The HTTP request.
     *
     * @see {@link Request}
     */
    request: Request;

    /**
     * The HTTP response.
     *
     * @see {@link Response}
     */
    response: Response;
}
