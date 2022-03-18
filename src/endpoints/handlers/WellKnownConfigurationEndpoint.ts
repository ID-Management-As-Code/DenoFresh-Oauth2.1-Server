import { HttpRequest, HttpResponse } from '../../http/index.ts';
import { Endpoint } from '../Endpoint.ts';

/**
 * The endpoint for generating and returning the OpenID COnnect .well-known
 * OpenID Configuration document.
 */
export class WellKnownConfigurationEndpoint extends Endpoint {
    public get path(): string {
        return '/.well-known/openid-configuration';
    }

    public handler(_: HttpRequest): HttpResponse {
        throw new Error('Method not implemented.');
    }
}
