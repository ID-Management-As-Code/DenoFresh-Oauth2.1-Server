import type { ConnInfo } from './deps.ts';
import { serveTls } from './deps.ts';
import { httpRequestHandler } from './http/index.ts';
import { addMiddleware } from './middleware/index.ts';

import { EndpointsMiddleware, EndpointsMiddleware1, EndpointsMiddleware2, EndpointsMiddleware3, EndpointsMiddleware4 } from './endpoints/index.ts';
import { DurationMiddleware } from './analytics/DurationMiddleware.ts';

const certFile = './certificates/cert.pem';
const hostname = 'localhost';
const keyFile = './certificates/key.pem';
const port = 4701;

addMiddleware(DurationMiddleware);
addMiddleware(EndpointsMiddleware);
addMiddleware(EndpointsMiddleware1);
addMiddleware(EndpointsMiddleware2);
addMiddleware(EndpointsMiddleware3);
addMiddleware(EndpointsMiddleware4);

serveTls(async (request: Request, connectionInfo: ConnInfo) => {
    const protocol = request.url.split('://')[0];
    console.log(protocol);

    switch (protocol) {
        case 'http':
        case 'https':
            return await httpRequestHandler(request);

        default:
            throw new Error(`Unable to process requests for '${protocol}' protocol.`)
    }
}, { certFile, hostname, keyFile, port });

console.log(`Server running on: https://${hostname}:${port}`);
