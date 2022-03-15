import { Middleware, MiddlewareContext, RequestCursor } from '../middleware/index.ts';

/**
 * Processes requests for various endpoints in the application.
 *
 * @param request The HTTP request to process.
 * @param connectionInfo Information about the connection the request arrived
 *                       on.
 */
export const EndpointsMiddleware: Middleware = async (context: MiddlewareContext, next: RequestCursor) => {
    console.log('pre endpoint middleware');
    await next();
    console.log('post endpoint middleware');
}

export const EndpointsMiddleware1: Middleware = async (context: MiddlewareContext, next: RequestCursor) => {
    console.log('pre endpoint1 middleware');
    await next();
    console.log('post endpoint1 middleware');
}

export const EndpointsMiddleware2: Middleware = async (context: MiddlewareContext, next: RequestCursor) => {
    console.log('pre endpoint2 middleware');
    await next();
    console.log('post endpoint2 middleware');
}

export const EndpointsMiddleware3: Middleware = async (context: MiddlewareContext, next: RequestCursor) => {
    console.log('pre endpoint3 middleware');
    await next();
    console.log('post endpoint3 middleware');
}

export const EndpointsMiddleware4: Middleware = async (context: MiddlewareContext, next: RequestCursor) => {
    console.log('pre endpoint4 middleware');
    await next();
    console.log('post endpoint4 middleware');
}
