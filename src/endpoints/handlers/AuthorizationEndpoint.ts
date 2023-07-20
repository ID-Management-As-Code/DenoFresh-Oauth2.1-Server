import { HttpRequest, HttpResponse } from '../../http/index.ts';
import { Endpoint } from '../Endpoint.ts';
import { json } from '~/endpoints/index.ts';

/**
 * The endpoint used by clients to begin authorizing a user.
 */
export class AuthorizationEndpoint extends Endpoint {
    public get path(): string {
        return '/connect/authorize';
    }

    public handler(request: HttpRequest): HttpResponse {
        const url = new URL(request.url);

        return json({
            searchParams: Object.fromEntries(Array(...url.searchParams.entries()))
        });
    }
}
