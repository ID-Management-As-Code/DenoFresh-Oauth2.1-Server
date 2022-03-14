/**
 * Informs the Authorization Server of the desired authorization processing
 * flow, including what parameters are returned from the endpoints used.
 */
export enum ResponseType {
    /**
     * Use the authorization code grant flow.
     */
    AuthorizationCode = 'code',

    /**
     * Use the implicit grant flow and only return the ID token.
     */
    Implicit = 'id_token',

    /**
     * Use the implicit grant flow and return the ID and access token.
     */
    ImplicitWithToken = 'id_token token',

    /**
     * Use the hybrid flow to return an authorization code and ID token.
     */
    HybridWithId = 'code id_token',

    /**
     * Use the hybrid flow to return an authorization code and access token.
     */
    HybridWithToken = 'code token',

    /**
     * Use the hybrid flow to return an authorization code, ID and access
     * token.
     */
    HybridWithIdAndToken = 'code id_token token'
}
