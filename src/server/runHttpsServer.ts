import { serveTls } from '../deps.ts';
import { runMiddleware } from '../middleware/index.ts';
import { configureMiddleware } from './configureMiddleware.ts';

/**
 * Runs the @see {@link serveTls} command to serve up content over HTTPS.
 */
export function runHttpsServer() {
    const serverOptions = {
        certFile: './certificates/cert.pem',
        hostname: 'localhost',
        keyFile: './certificates/key.pem',
        port: 4701
    };

    configureMiddleware();

    serveTls(
        async (request: Request) => {
            const response = await runMiddleware(request);

             return response;
        },
        serverOptions
    );

    console.log(`Server running on: https://${serverOptions.hostname}:${serverOptions.port}`);
}
