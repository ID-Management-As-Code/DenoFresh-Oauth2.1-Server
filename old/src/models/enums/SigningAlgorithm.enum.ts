/**
 * Algorithms to use when signing web tokens.
 */
export enum SigningAlgorithm {
    /**
     * Denotes the use of ECDSA using P-256 and SHA-256.
     */
    EcdsaSignatureSha256 = 'ES256',

    /**
     * Denotes the use of ECDSA using P-256 and SHA-384.
     */
    EcdsaSignatureSha384 = 'ES384',

    /**
     * Denotes the use of ECDSA using P-256 and SHA-512.
     */
    EcdsaSignatureSha512 = 'ES512',

    /**
     * Denotes the use of the HMAC with SHA-256.
     */
    HmacSignatureSha256 = 'HS256',

    /**
     * Denotes the use of the HMAC with SHA-384.
     */
    HmacSignatureSha384 = 'HS384',

    /**
     * Denotes the use of the HMAC with SHA-512.
     */
    HmacSignatureSha512 = 'HS512',

    /**
     * Denotes the use of RSASSA-PKCS1-v1_5 with SHA-256.
     */
    RsaSignatureSha256 = 'RS256',

    /**
     * Denotes the use of RSASSA-PKCS1-v1_5 with SHA-384.
     */
    RsaSignatureSha384 = 'RS384',

    /**
     * Denotes the use of RSASSA-PKCS1-v1_5 with SHA-512.
     */
    RsaSignatureSha512 = 'RS512'
}
