import { serveTls } from './deps.ts';
import { serverHandler } from './server/handler.ts';

const certFile = './certificates/cert.pem';
const hostname = 'localhost';
const keyFile = './certificates/key.pem';
const port = 4701;

serveTls(serverHandler, { certFile, hostname, keyFile, port });

console.log(`Server running on: https://${hostname}:${port}`);
