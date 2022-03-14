import { MiddlewareContext } from './MiddlewareContext.ts';
import { RequestCursor } from './RequestCursor.ts';

/**
 * Represents a middleware function for building a request/response pipeline.
 *
 * @param {MiddlewareContext} context The context of the current request to the
 *                                    server.
 * @param {RequestCursor} next A function which calls the next piece of
 *                             middleware in the pipeline.
 */
export type Middleware = (context: MiddlewareContext, next: RequestCursor) => Promise<void>;
