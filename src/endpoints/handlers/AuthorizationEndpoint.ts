import { HttpRequest, HttpResponse } from '../../http/index.ts';
import { Endpoint } from '../Endpoint.ts';

/**
 * The endpoint used by clients to begin authorizing a user.
 */
export class AuthorizationEndpoint extends Endpoint {
    public get path(): string {
        return '/connection/authorize';
    }

    public handler(request: HttpRequest): HttpResponse {
        return new Response(request.url);
    }
}
