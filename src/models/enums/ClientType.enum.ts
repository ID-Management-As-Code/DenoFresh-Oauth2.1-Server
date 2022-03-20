/**
 * The type of client application authenticating.
 */
export enum ClientType {
    /**
     * The client uses machine-to-machine functionality. No end-user is
     * involved when authenticating.
     */
    Machine = 'machine',

    /**
     * The client operates on a resource owner's device, such as a phone,
     * laptop, tablet, etc. An end-user is typically involved.
     */
    Native = 'native',

    /**
     * Used predominately with SPA and JavaScript based apps, the user-agent,
     * or browser, is what makes authentication requests.
     */
    Browser = 'browser',

    /**
     * Used when authentication requests are made server-side and not by the
     * user-agent, or browser.
     */
    ServerSide = 'serverside'
}
