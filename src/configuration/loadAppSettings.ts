import { dirname, fromFileUrl, join } from '../deps.ts';
import { AppSettings } from './AppSettings.ts';

let appSettings: AppSettings;

function getAppSettingsPath() {
    const currentFile = fromFileUrl(import.meta.url);
    const currentDirectory = dirname(currentFile);
    const appSettingsPath = join(currentDirectory, '..', 'appSettings.json');

    return appSettingsPath;
}

export function loadAppSettings() {
    const appSettingsPath = getAppSettingsPath();

    appSettings = readAppSettingsFile(appSettingsPath);

    if (!appSettings) {
        throw new Error('Unable to load appSettings');
    }
}

function readAppSettingsFile(appSettingsPath: string) {
    const decoder = new TextDecoder('utf-8');
    const data = Deno.readFileSync(appSettingsPath);
    const appSettingsJson = decoder.decode(data);
    const appSettings = JSON.parse(appSettingsJson);

    return appSettings as AppSettings;
}

export function getAppSettings() {
    if (!appSettings) loadAppSettings();

    return appSettings;
}
