import { runMiddleware } from '../middleware/index.ts';
import { getHeaders } from '../utilities/request.utilities.ts';

export async function httpRequestHandler(request: Request): Promise<Response> {
    const response = await runMiddleware(request);

    return response;
}
