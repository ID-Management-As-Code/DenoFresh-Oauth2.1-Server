import { HttpContext } from '../http/index.ts';
import { Middleware, RequestCursor } from '../middleware/index.ts';
import { Endpoint, EndpointHandler } from './index.ts';

import { PingEndpoint } from './handlers/PingEndpoint.ts';
import { WellKnownOpenIdConfigurationEndpoint } from './handlers/WellKnownOpenIdConfigurationEndpoint.ts';

const registeredEndpoints: Endpoint[] = [
    // Maintenance
    new PingEndpoint(),

    // OpenID Connect
    new WellKnownOpenIdConfigurationEndpoint()
];

/**
 * Maps the array of @see {@link Endpoint}s to a record object for faster retrieval.
 * @returns
 */
function buildEndpoints(): Record<string, EndpointHandler> {
    const data: Record<string, EndpointHandler> = {};

    for (const endpoint of registeredEndpoints) {
        data[endpoint.path] = endpoint.handler;
    }

    return data;
}

const endpoints = buildEndpoints();

/**
 * Processes requests for various endpoints in the application.
 *
 * @param context The current HTTP context.
 * @param next The next middleware in the pipeline to execute.
 */
export const EndpointsMiddleware: Middleware = async (context: HttpContext, next: RequestCursor) => {
    const requestUrl = new URL(context.request.url);
    const requestedEndpoint = endpoints[requestUrl.pathname];

    if (!requestedEndpoint) {
        context.response.status = 404;
    } else {
        const endpointResponse = requestedEndpoint(context.request);

        context.response = endpointResponse;
    }

    await next();
}
