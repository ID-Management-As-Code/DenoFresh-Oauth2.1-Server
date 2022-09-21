/**
 * A way in which a client obtains a resource owner's authorization and access
 * token with which to access protected resources.
 */
export enum AuthorizationGrantType {
    /**
     * Used to obtain an authorization code by redirecting the user to the
     * authorization server to authenticate without exposting the end-user's
     * credentials. The code can then be used by the client to obtain an access
     * token. This method also authenticates the client with the authorization
     * server.
     */
    AuthorizationCode = 'code',

    /**
     * Used when a client is acting on its own behalf to access its own
     * protected resources.
     */
    ClientCredentials = 'client_credentials',

    /**
     * A simplified version of the @see {@link AuthorizationCode} where a
     * client is issued an access token directly without authenticating the
     * client, though in some cases the client may be identified using the
     * redirect URI.
     */
    Implicit = 'implicit',

    /**
     * Used when other grant types are unavailable. A resource owner gives
     * their credentials directly to the client who then exchanges them for an
     * access token. Credentials can be exchanged for a long-lived access token
     * or refresh token and need not be stored.
     */
    PasswordCredentials = 'password'
}
