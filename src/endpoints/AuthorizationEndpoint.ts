import { Endpoint } from './Endpoint.ts';

export class AuthorizationEndpoint extends Endpoint {
    public get Path(): string {
        return '/connection/authorize';
    }

    public Handler(request: Request): Response {
        return new Response(request.url);
    }
}
