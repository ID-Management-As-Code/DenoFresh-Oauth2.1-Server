import { ConnInfo } from '../deps.ts';
import { getHeaders } from "../utilities/request.utilities.ts";

export async function serverHandler(request: Request, connectionInfo: ConnInfo): Promise<Response> {
    const requestBody = await request.json();

    const requestInfo = {
        body: requestBody,
        headers: getHeaders(request.headers),
        method: request.method,
        url: request.url
    };

    const body = `<code><pre>${JSON.stringify(requestInfo, null, 4)}</pre></code>`;

    return new Response(body, {
        headers: {
            'content-type': 'text/html'
        },
        status: 200,
    });
}
