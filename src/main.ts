import { ConnInfo, serveTls } from './deps.ts';
import { httpRequestHandler } from './http/httpRequestHandler.ts';

const certFile = './certificates/cert.pem';
const hostname = 'localhost';
const keyFile = './certificates/key.pem';
const port = 4701;

serveTls(async (request: Request, connectionInfo: ConnInfo) => {
    const protocol = request.url.split('://')[0];
    console.log(protocol);

    switch (protocol) {
        case 'http':
        case 'https':
            console.log(1);
            return await httpRequestHandler(request);

        default:
            throw new Error(`Unable to process requests for '${protocol}' protocol.`)
    }
}, { certFile, hostname, keyFile, port });

console.log(`Server running on: https://${hostname}:${port}`);
