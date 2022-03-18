import { Endpoint } from '../Endpoint.ts';
import { ok } from '../actions/index.ts';
import { HttpRequest, HttpResponse } from '../../http/index.ts';

/**
 * An endpoint used to determine if the server is still running.
 */
export class PingEndpoint extends Endpoint {
    public get path(): string {
        return '/ping';
    }

    public handler(_: HttpRequest): HttpResponse {
        return ok();
    }
}
