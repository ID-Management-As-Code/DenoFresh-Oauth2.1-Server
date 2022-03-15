export interface HttpResponse {
    body?: BodyInit | null;
    headers?: HeadersInit;
    status?: number;
    statusText?: string;
}
