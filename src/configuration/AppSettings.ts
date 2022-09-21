interface Server {
    hostname?: string;
    port?: number;
    privateKey?: string;
    publicCertificate?: string;
}

interface Identity {

}

export interface AppSettings {
    identity?: Identity;
    server?: Server;
}
