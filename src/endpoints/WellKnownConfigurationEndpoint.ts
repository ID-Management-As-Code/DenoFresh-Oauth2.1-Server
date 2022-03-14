import { Endpoint } from './Endpoint.ts';

export class WellKnownConfigurationEndpoint extends Endpoint {
    public get Path(): string {
        return '/.well-known/openid-configuration';
    }

    public Handler(request: Request): Response {
        throw new Error("Method not implemented.");
    }
}
