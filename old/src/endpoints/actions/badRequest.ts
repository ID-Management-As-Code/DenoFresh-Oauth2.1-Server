import { HttpResponse } from '../../http/index.ts';
import { action } from './action.ts';

/**
 * Creates a 400 Bad Request response.
 *
 * @param body An optional HTTP response body.
 *
 * @returns An {@link HttpResponse} object for initializing an HTTP response.
 */
export function badRequest(body?: BodyInit | null): HttpResponse {
    return action(400, body);
}
