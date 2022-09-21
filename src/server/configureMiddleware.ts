import { addMiddleware } from '../middleware/index.ts';

import { EndpointsMiddleware } from '../endpoints/index.ts';
import { DurationMiddleware } from '../analytics/DurationMiddleware.ts';

/**
 * Sets up middleware functions to be consumed by the current request/response
 * pipeline. Order of operations matters.
 */
export function configureMiddleware() {
    addMiddleware(DurationMiddleware);
    addMiddleware(EndpointsMiddleware);
}
