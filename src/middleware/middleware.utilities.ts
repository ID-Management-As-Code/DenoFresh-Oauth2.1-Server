import { Middleware } from './Middleware.ts';

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

export const getMiddleware = () => middlewareFunctions;

export function handleMiddleware(request: Request) {
    const
}
