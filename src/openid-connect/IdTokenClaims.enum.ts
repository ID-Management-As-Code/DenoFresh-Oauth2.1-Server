/**
 * Claims used within the ID token for all OAuth 2.0 flows initiated by an
 * OpenID Connect provider.
 */
export enum IdTokenClaims {
    /**
     * *OPTIONAL*. Its value is the `base64url` encoding of the left-most half
     * of the hash of the octets of the ASCII representation of the
     * `access_token` value, where the hash algorithm used is the hash
     * algorithm used in the `alg` Header Parameter of the ID Token's JOSE
     * Header.
     *
     * @remarks
     *
     * The `at_hash` value is a case sensitive string.
     *
     * For instance, if the `alg` is RS256, hash the `access_token`
     * value with SHA-256, then take the left-most 128 bits and `base64url`
     * encode them.
     */
    AccessTokenHash = 'at_hash',

    /**
     * __REQUIRED__. Audience(s) that the ID token is intended for.
     *
     * @remarks
     *
     * Must contain the client ID (that is to say, the ID of the Relying Party
     * which will make use of the token). It may also contain IDs for other
     * audiences. The value may be a single case-insitive string, or array of
     * case-insensitive strings.
     */
    Audiences = 'aud',

    /**
     * *OPTIONAL*. A string specifying an Authentication Context Class
     * Reference value that identifies the Authentication Context Class that
     * the authentication performed satisfied.
     *
     * @remarks
     *
     * The value `0` indicates the End-User authentication did not meet the
     * requirements of ISO/IEC 29115 [ISO29115] level 1. Authentication using a
     * long-lived browser cookie, for instance, is one example where the use of
     * "level 0" is appropriate. Authentications with level 0 SHOULD NOT be
     * used to authorize access to any resource of any monetary value. (This
     * corresponds to the OpenID 2.0 PAPE [OpenID.PAPE] nist_auth_level 0.) An
     * absolute URI or an RFC 6711 [RFC6711] registered name SHOULD be used as
     * the acr value; registered names MUST NOT be used with a different
     * meaning than that which is registered. Parties using this claim will
     * need to agree upon the meanings of the values used, which may be
     * context-specific. The acr value is a case sensitive string.
     */
    AuthenticationContextClassReference = 'acr',

    /**
     * *OPTIONAL*. JSON array of strings that are identifiers for
     * authentication methods used in the authentication.
     *
     * @remarks
     *
     * For instance, values might indicate that both password and OTP
     * authentication methods were used.
     */
    AuthenticationMethodsReferences = 'amr',

    /**
     * *OPTIONAL*. The party to which the ID Token was issued.
     *
     * @remarks
     *
     * The value is a case sensitive string containing a StringOrURI value.
     *
     * If present, it MUST contain the OAuth 2.0 Client ID of this party. This
     * Claim is only needed when the ID Token has a single audience value and
     * that audience is different than the authorized party. It MAY be included
     * even when the authorized party is the same as the sole audience.
     */
    AuthorizedParty = 'azp',

    /**
     * Time when the End-User authentication occurred.
     *
     * @remarks
     *
     * Its value is a JSON number representing the number of seconds from
     * `1970-01-01T0:0:0Z` as measured in UTC. When a `max_age` request is made
     * or when `auth_time` is requested as an Essential Claim, then this Claim
     * is REQUIRED; otherwise, its inclusion is OPTIONAL.
     */
    AuthTime = 'auth_time',

    /**
     * Its value is the `base64url` encoding of the left-most half of the hash
     * of the octets of the ASCII representation of the code value, where the
     * hash algorithm used is the hash algorithm used in the `alg` Header
     * Parameter of the ID Token's JOSE Header.
     *
     * @remarks
     *
     * The `c_hash` value is a case sensitive string.
     *
     * For instance, if the alg is HS512, hash the code value with SHA-512,
     * then take the left-most 256 bits and base64url encode them. If the ID
     * Token is issued from the Authorization Endpoint with a code, which is
     * the case for the `response_type` values `code id_token` and
     * `code id_token token`, this is __REQUIRED__; otherwise, its inclusion
     * is *OPTIONAL*.
     */
    CodeHash = 'c_hash',

    /**
     * __REQUIRED__. Expiration time on or after which the ID Token MUST NOT be
     * accepted for processing.
     *
     * @remarks
     *
     * Its value is a JSON number representing the number of seconds from
     * `1970-01-01T0:0:0Z` as measured in UTC.
     */
    ExpiresAt = 'exp',

    /**
     * __REQUIRED__. Time at which the JWT was issued.
     *
     * @remarks
     *
     * Its value is a JSON number representing the number of seconds from
     * `1970-01-01T0:0:0Z` as measured in UTC.
     */
    IssuedAt = 'iat',

    /**
     * __REQUIRED__. Identifier for the Issuer of the response.
     *
     * @remarks
     *
     * A case-sensitive URL for the Issuer of the response using
     * the `https` scheme that contains scheme, host, and optionally, port and
     * path components and no query or fragment components.
     */
    IssuerIdentifier = 'iss',

    /**
     * String value used to associate a Client session with an ID Token, and to
     * mitigate replay attacks.
     *
     * @remarks
     *
     * If present in the ID Token, Clients MUST verify that the nonce Claim
     * Value is equal to the value of the nonce parameter sent in the
     * Authentication Request. If present in the Authentication Request,
     * Authorization Servers MUST include a nonce Claim in the ID Token with
     * the Claim Value being the nonce value sent in the Authentication
     * Request. Authorization Servers SHOULD perform no other processing on
     * nonce values used. The nonce value is a case sensitive string.
     */
    Nonce = 'nonce',

    /**
     * __REQUIRED__. A locally unique and never reassigned identifier within
     * the Issuer for the End-User, which is intended to be consumed by the
     * Client.
     *
     * @remarks
     *
     * The value is a case-sensitive string and MUST NOT exceed 255 ASCII
     * characters in length.
     */
    SubjectIdentifier = 'sub'
}
