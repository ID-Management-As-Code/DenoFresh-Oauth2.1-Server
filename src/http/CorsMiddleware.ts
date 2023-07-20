import type { HttpContext } from '../http/index.ts';
import type { Middleware, RequestCursor } from '../middleware/index.ts';

export const CorsMiddleware: Middleware = async (context: HttpContext, next: RequestCursor) => {
    await next();

    context.response.headers = {
        ...context.response.headers,
        'Access-Control-Allow-Origin': context.request.headers.get('origin') || ''
    };
}
