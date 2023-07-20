import type { HttpContext } from '../http/index.ts';
import type { Middleware, RequestCursor } from '../middleware/index.ts';

export const DurationMiddleware: Middleware = async (context: HttpContext, next: RequestCursor) => {
    const startTime = new Date();

    await next();

    const endTime = new Date();

    const duration = endTime.getTime() - startTime.getTime();

    const updatedHeaders: HeadersInit = {
        ...context.response.headers,
        'Request-Duration': duration.toString() + 'ms'
    }

    context.response.headers = updatedHeaders;
}
