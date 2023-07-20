import { join } from 'std/path/mod.ts';
import { AppSettings } from './AppSettings.ts';

/**
 * The appsettings object.
 */
let appSettings: AppSettings;

/**
 * Builds the appsettings path.
 *
 * @returns {string} The file path as a string.
 */
function getAppSettingsPath() {
    return join(Deno.cwd(), 'appSettings.json');
}

/**
 * Reads the appsettings file and attempts to convert it to a JSON object.
 *
 * @param appSettingsPath The file path to the appsettings.json file.
 *
 * @returns The AppSettings object.
 */
async function readAppSettingsFile(appSettingsPath: string): Promise<AppSettings> {
    const appSettingsJson = await Deno.readTextFile(appSettingsPath);

    const appSettings = JSON.parse(appSettingsJson);

    return appSettings as AppSettings;
}

/**
 * Loads the appsettings object into memory.
 */
export async function loadAppSettings() {
    const appSettingsPath = getAppSettingsPath();

    appSettings = await readAppSettingsFile(appSettingsPath);

    if (!appSettings) {
        throw new Error('Unable to load appSettings');
    }
}

/**
 * Retrieves the appsettings from memory, or loads it into memory if not
 * already.
 *
 * @param force Forces the appsettings to be re-read from the file.
 *
 * @returns The AppSettings object.
 */
export async function getAppSettings(force = false) {
    if (!appSettings || force) await loadAppSettings();

    return appSettings;
}
