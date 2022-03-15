import { addMiddleware, handleMiddleware } from '../middleware/index.ts';
import { getHeaders } from '../utilities/request.utilities.ts';

import { EndpointsMiddleware, EndpointsMiddleware1 } from '../endpoints/index.ts';

export async function httpRequestHandler(request: Request): Promise<Response> {
    console.log(2);
    addMiddleware(EndpointsMiddleware);
    addMiddleware(EndpointsMiddleware1);
    console.log(3);

    const response = await handleMiddleware(request);

    console.log(4);

    return response;
}
