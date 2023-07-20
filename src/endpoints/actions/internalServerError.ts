import { HttpResponse } from '../../http/index.ts';
import { action } from './action.ts';

/**
 * Creates a 500 Internal Server Error response.
 *
 * @param body An optional HTTP response body.
 *
 * @returns An {@link HttpResponse} object for initializing an HTTP response.
 */
export function internalServerError(body?: BodyInit | null): HttpResponse {
    return action(500, body);
}
