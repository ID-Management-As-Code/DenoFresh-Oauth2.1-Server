import { HttpResponse } from '../../http/index.ts';
import { action } from './action.ts';

/**
 * Creates a 200 OK response.
 *
 * @param body An optional HTTP response body.
 *
 * @returns An {@link HttpResponse} object for initializing an HTTP response.
 */
export function ok(body?: BodyInit | null): HttpResponse {
    return action(200, body);
}
