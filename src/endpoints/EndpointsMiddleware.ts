import { Middleware, MiddlewareContext, RequestCursor } from '../middleware/index.ts';

/**
 * Processes requests for various endpoints in the application.
 *
 * @param request The HTTP request to process.
 * @param connectionInfo Information about the connection the request arrived
 *                       on.
 */
export const EndpointsMiddleware: Middleware = async (context: MiddlewareContext, next: RequestCursor) => {
    await next();
}
