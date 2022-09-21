import { loadAppSettings } from './configuration/index.ts';
import { runHttpsServer } from './server/index.ts';

loadAppSettings();

/**
 * Run the handler for HTTPS requests.
 */
runHttpsServer();
