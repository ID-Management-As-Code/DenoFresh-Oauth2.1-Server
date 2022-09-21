import { getAppSettings } from '../configuration/loadAppSettings.ts';
import { serveTls } from '../deps.ts';
import { runMiddleware } from '../middleware/index.ts';
import { configureMiddleware } from './configureMiddleware.ts';

/**
 * Runs the @see {@link serveTls} command to serve up content over HTTPS.
 */
export function runHttpsServer() {
    const appSettings = getAppSettings();

    const serverOptions = {
        certFile: appSettings.server?.publicCertificate,
        hostname: appSettings.server?.hostname || 'localhost',
        keyFile: appSettings.server?.privateKey,
        port: appSettings.server?.port || 4701
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
