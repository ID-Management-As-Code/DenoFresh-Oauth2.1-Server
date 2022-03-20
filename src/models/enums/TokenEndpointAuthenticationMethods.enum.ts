/**
 * Authentication methods used for verifying the authenticity of a client.
 */
export enum TokenEndpointAuthenticationMethods {
    /**
     *
     */
    ClientSecretBasic = 'client_secret_basic',

    /**
     *
     */
    ClientSecretJwt = 'client_secret_jwt',

    /**
     *
     */
    ClientSecretPost = 'client_secret_post',

    /**
     *
     */
    PrivateKeyJwt = 'private_key_jwt'
}
