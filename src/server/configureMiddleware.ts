import { addMiddleware } from "~/middleware/index.ts";

import { DurationMiddleware } from "~/analytics/DurationMiddleware.ts";
import { EndpointsMiddleware } from "~/endpoints/index.ts";
import { CorsMiddleware } from '~/http/CorsMiddleware.ts';

/**
 * Sets up middleware functions to be consumed by the current request/response
 * pipeline. Order of operations matters.
 */
export function configureMiddleware() {
    addMiddleware(DurationMiddleware);
    addMiddleware(CorsMiddleware)
    addMiddleware(EndpointsMiddleware);
}
