import { loadAppSettings } from './configuration/index.ts';
import { runHttpsServer } from './server/index.ts';

await loadAppSettings();

/**
 * Run the handler for HTTPS requests.
 */
await runHttpsServer();
