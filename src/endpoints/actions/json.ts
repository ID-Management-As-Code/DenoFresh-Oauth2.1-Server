import { HttpResponse } from '../../http/index.ts';
import { action } from './action.ts';

/**
 * Creates a 404 Not Found response.
 *
 * @param body An optional HTTP response body.
 *
 * @returns An {@link HttpResponse} object for initializing an HTTP response.
 */
export function json<TContent>(content: TContent): HttpResponse {
    const response = action(200, JSON.stringify(content));

    response.headers = {
        ...response.headers,
        'content-type': 'application/json'
    };

    return response;
}
