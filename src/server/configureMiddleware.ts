import { addMiddleware } from '../middleware/index.ts';

import { EndpointsMiddleware } from '../endpoints/index.ts';
import { DurationMiddleware } from '../analytics/DurationMiddleware.ts';

export function configureMiddleware() {
    addMiddleware(DurationMiddleware);
    addMiddleware(EndpointsMiddleware);
}
