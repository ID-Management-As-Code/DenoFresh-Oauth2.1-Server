import { HttpResponse } from '../../http/index.ts';

/**
 * Builds an HTTP response for returning from a request.
 *
 * @param status The HTTP response status code
 * @param body The optional HTTP response body
 *
 * @returns An @see {@link HttpResponse} object for initializing an HTTP
 *          response.
 */
export function action(status: number, body?: BodyInit | null): HttpResponse {
    const responseInitializer: HttpResponse = {
        body,
        headers: { },
        status
    };

    return responseInitializer;
}
