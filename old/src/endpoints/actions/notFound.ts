import { HttpResponse } from '../../http/index.ts';
import { action } from './action.ts';

/**
 * Creates a 404 Not Found response.
 *
 * @param body An optional HTTP response body.
 *
 * @returns An {@link HttpResponse} object for initializing an HTTP response.
 */
export function notFound(body?: BodyInit | null): HttpResponse {
    return action(404, body);
}
