import { serve } from "./deps.ts";
import { serverHandler } from "./server/handler.ts";

const enableSecurity = false;
const hostname = 'localhost';
const port = 4701;
const protocol = enableSecurity ? 'http' : 'https';

serve(serverHandler, { hostname, port });

console.log(`Server running on: ${protocol}://${hostname}:${port}`);
