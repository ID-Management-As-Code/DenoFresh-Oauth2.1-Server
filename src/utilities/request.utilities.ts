export function getHeaders(headers: Headers) {
    const headerKeyValues: Record<string, unknown> = {};

    for (const [key, value] of headers.entries()) {
        headerKeyValues[key] = value;
    }

    return headerKeyValues;
}
