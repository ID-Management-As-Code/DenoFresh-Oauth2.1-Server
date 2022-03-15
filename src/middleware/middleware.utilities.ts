import { Middleware } from './Middleware.ts';
import { MiddlewareContext } from './MiddlewareContext.ts';

const middlewareFunctions: Middleware[] = [];

/**
 * Adds the next piece of middleware to the pipeline.
 *
 * @param middleware The next piece of middleware to add to the pipeline. Order
 *                   is FIFO.
 */
export function addMiddleware(middleware: Middleware) {
    middlewareFunctions.push(middleware);
}

/**
 * Passes the request and response
 *
 * @param request The HTTP request to process in the middleware pipeline.
 * @returns A promise with a response.
 */
export async function handleMiddleware(request: Request): Promise<Response> {
    const middlewareContext: MiddlewareContext = {
        request,
        response: {}
    };

    const middlewareCursor = 0;

    const run = getNextMiddleware(middlewareCursor, middlewareContext);

    await run();

    const { response } = middlewareContext;

    return new Response(response.body, {
        headers: response.headers,
        status: response.status,
        statusText: response.statusText
    });
}

function getNextMiddleware(cursor: number, context: MiddlewareContext): () => Promise<void> {
    const defaultRequestCursor = () => new Promise<void>((resolve) => resolve());
    const hasNext: boolean = cursor < middlewareFunctions.length - 1;
    const isOnly = cursor === 0 && middlewareFunctions.length === 1;

    if (hasNext) {
        const nextCursor = cursor + 1;
        const nextMiddleware = middlewareFunctions[nextCursor];

        return async () => await nextMiddleware(context, getNextMiddleware(nextCursor, context));
    }

    if (isOnly) {
        const onlyMiddleware = middlewareFunctions[cursor];

        return async () => await onlyMiddleware(context, defaultRequestCursor);
    }

    return defaultRequestCursor;
}
