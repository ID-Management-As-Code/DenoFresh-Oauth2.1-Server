/**
 * The type of client interacting with the authorization serfver, based on
 * their ability to authenticate securely with the authorization server.
 */
export enum AuthenticityType {
    /**
     * Clients capable of maintaining the confidentiality of their credentials
     * or capable of secure client authentication using other means.
     */
    Confidential = 'confidential',

    /**
     * Clients incapable of maintaining the confidentiality of their
     * credentials and incapable of secure client authentication via any other
     * means.
     */
    Public = 'public'
}
