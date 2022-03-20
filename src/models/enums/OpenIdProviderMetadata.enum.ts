/**
 * Metadata describing an OpenID Provider's configuration, used to build the
 * discovery document.
 */
export enum OpenIdProviderMetadata {
    /**
     * *OPTIONAL*. JSON array containing a list of the Authentication Context
     * Class References that this OpenID Provider supports.
     */
    AuthenticationContextReferencesSupported = 'acr_values_supported',

    /**
     * **REQUIRED**. URL of the OpenID Provider's OAuth 2.0 Authorization
     * Endpoint.
     */
    AuthorizationEndpoint = 'authorization_endpoint',

    /**
     * **REQUIRED. URL of an OpenID Provider iframe that supports cross-origin
     * communications for session state information with the Relying Party
     * Client, using the HTML5 postMessage API.
     *
     * @remarks
     *
     * This URL **MUST** use the `https` scheme and *MAY* contain port, path,
     * and query parameter components. The page is loaded from an invisible
     * iframe embedded in an Relying Party page so that it can run in the
     * OpenID Provider's security context. It accepts postMessage requests from
     * the relevant Relying Party iframe and uses postMessage to post back the
     * login status of the End-User at the OpenID Provider.
     */
    CheckSessionIFrame = 'check_session_iframe',

    /**
     * *OPTIONAL*. Languages and scripts supported for values in Claims being
     * returned, represented as a JSON array of BCP47 [RFC5646] language tag
     * values.
     *
     * @remarks
     *
     * Not all languages and scripts are necessarily supported for all Claim
     * values.
     */
    ClaimsLocalesSupported = 'claims_locales_supported',

    /**
     * *OPTIONAL*. Boolean value specifying whether the OpenID Provider
     * supports use of the `claims` parameter, with `true` indicating support.
     * If omitted, the default value is `false`.
     */
    ClaimsParameterSupported = 'claims_parameter_supported',

    /**
     * **RECOMMENDED**. JSON array containing a list of the Claim Names of the
     * Claims that the OpenID Provider *MAY* be able to supply values for.
     *
     * @remarks
     *
     * Note that for privacy or other reasons, this might not be an exhaustive
     * list.
     */
    ClaimsSupported = 'claims_supported',

    /**
     * *OPTIONAL*. JSON array containing a list of the Claim Types that the
     * OpenID Provider supports.
     *
     * @remarks
     *
     * These Claim Types are described in Section 5.6 of OpenID Connect Core
     * 1.0. Values defined by this specification are `normal`, `aggregated`,
     * and `distributed`. If omitted, the implementation supports only
     * `normal` Claims.
     */
    ClaimTypesSupported = 'claim_types_supported',

    /**
     * *OPTIONAL*. JSON array containing a list of the `display` parameter
     * values that the OpenID Provider supports.
     */
    DisplayValuesSupported = 'display_values_supported',

    /**
     * *OPTIONAL*. JSON array containing a list of the OAuth 2.0 Grant Type
     * values that this OpenID Provider supports.
     *
     * @remarks
     *
     * Dynamic OpenID Providers **MUST** support the `authorization_code` and
     * `implicit` Grant Type values and *MAY *support other Grant Types. If
     * omitted, the default value is `["authorization_code", "implicit"]`.
     */
    GrantTypesSupport = 'grant_types_supported',

    /**
     * *OPTIONAL*. JSON array containing a list of the JWE encryption
     * algorithms supported by the OpenID Provider for the ID Token to encode
     * the Claims in a JWT.
     */
    IdTokenEncryptionAlgorithmsSupported = 'id_token_encryption_alg_values_supported',

    /**
     * *OPTIONAL*. JSON array containing a list of the JWE encryption encodings
     * supported by the OpenID Provider for the ID Token to encode the Claims
     * in a JWT.
     */
    IdTokenEncryptionValuesSupported = 'id_token_encryption_enc_values_supported',

    /**
     * **REQUIRED**. JSON array containing a list of the JWS signing algorithms
     * supported by the OpenID Provider for the ID Token to encode the Claims
     * in a JWT.
     *
     * @remarks
     *
     * The algorithm `RS256` **MUST** be included. The value `none` *MAY* be
     * supported, but **MUST NOT** be used unless the Response Type used
     * returns no ID Token from the Authorization Endpoint
     * (such as when using the Authorization Code Flow). The value `none` is
     * not supported for this implementation.
     */
    IdTokenSigningAlgorithmsSupported = 'id_token_signing_alg_values_supported',

    /**
     * **REQUIRED**. URL using the `https` scheme with no query or fragment
     * component that the OP asserts as its Issuer Identifier.
     *
     * @remarks
     *
     * If Issuer discovery is supported, this value **MUST** be identical to
     * the issuer value returned by WebFinger. This also **MUST** be identical
     * to the `iss` Claim value in ID Tokens issued from this Issuer.
     */
    Issuer = 'issuer',

    /**
     * **REQUIRED**. URL of the OpenID Provider's JSON Web Key Set document.
     *
     * @remarks
     *
     * This contains the signing key(s) the Relying Party uses to validate
     * signatures from the OpenID Provider. The JWK Set MAY also contain the
     * Server's encryption key(s), which are used by Relying Partys to encrypt
     * requests to the Server. When both signing and encryption keys are made
     * available, a use (Key Use) parameter value is **REQUIRED** for all keys
     * in the referenced JWK Set to indicate each key's intended usage.
     * Although some algorithms allow the same key to be used for both
     * signatures and encryption, doing so is **NOT RECOMMENDED**, as it is
     * less secure. The JWK `x5c` parameter *MAY* be used to provide X.509
     * representations of keys provided. When used, the bare key values
     * **MUST** still be present and **MUST** match those in the certificate.
     */
    JsonWebKeySetUri = 'jwks_uri',

    /**
     * *OPTIONAL*. URL that the OpenID Provider provides to the person
     * registering the Client to read about the OpenID Provider's requirements
     * on how the Relying Party can use the data provided by the OpenID
     * Provider.
     *
     * @remarks
     *
     * The registration process *SHOULD* display this URL to the person
     * registering the Client if it is given.
     */
    OpenIdProviderPolicyUri = 'op_policy_uri',

    /**
     * *OPTIONAL*. URL that the OpenID Provider provides to the person
     * registering the Client to read about OpenID Provider's terms of service.
     *
     * @remarks
     *
     * The registration process *SHOULD* display this URL to the person
     * registering the Client if it is given.
     */
    OpenIdProviderTermsOfServiceUri = 'op_tos_uri',

    /**
     * **RECOMMENDED**. URL of the OP's Dynamic Client Registration Endpoint.
     */
    RegistrationEndpoint = 'registration_endpoint',

    /**
     * *OPTIONAL*. JSON array containing a list of the JWS signing algorithms
     * supported by the OpenID Provider for Request Objects.
     *
     * @remarks
     *
     * These algorithms are used both when the Request Object is passed by
     * value (using the request parameter) and when it is passed by reference
     * (using the `request_uri` parameter). Servers *SHOULD* support none and
     * `RS256`.
     */
    RequestObjectSigningAlgorithmsSupported = 'request_object_signing_alg_values_supported',

    /**
     * *OPTIONAL*. JSON array containing a list of the JWE encryption
     * algorithms supported by the OP for Request Objects.
     *
     * @remarks
     *
     * These algorithms are used both when the Request Object is passed by
     * value and when it is passed by reference.
     */
    RequestObjectEncryptionAlgorithmsSupported = 'request_object_encryption_alg_values_supported',

    /**
     * *OPTIONAL*. JSON array containing a list of the JWE encryption
     * algorithms supported by the OpenID Provider for Request Objects.
     *
     * @remarks
     *
     * These algorithms are used both when the Request Object is passed by
     * value and when it is passed by reference.
     */
    RequestObjectEncryptionValuesSupported = 'request_object_encryption_enc_values_supported',

    /**
     * OPTIONAL. Boolean value specifying whether the OpenID Provider supports
     * use of the `request` parameter, with `true` indicating support. If
     * omitted, the default value is `false`.
     */
    RequestParameterSupported = 'request_parameter_supported',

    /**
     * *OPTIONAL*. Boolean value specifying whether the OpenID Provider
     * supports use of the `request_uri` parameter, with `true` indicating
     * support. If omitted, the default value is `true`.
     */
    RequestUriParameterSupported = 'request_uri_parameter_supported',

    /**
     * *OPTIONAL*. Boolean value specifying whether the OpenID Provider
     * requires any `request_uri` values used to be pre-registered using the
     * `request_uris` registration parameter. Pre-registration is **REQUIRED**
     * when the value is `true`. If omitted, the default value is `false`.
     */
    RequireRequestUriRegistration = 'require_request_uri_registration',

    /**
     * *OPTIONAL*. JSON array containing a list of the OAuth 2.0
     * `response_mode` values that this OpenID Provider supports, as specified
     * in OAuth 2.0 Multiple Response Type Encoding Practices.
     *
     * @remarks
     *
     * If omitted, the default for Dynamic OpenID Providers is
     * `["query", "fragment"]`.
     */
    ResponseModesSupported = 'response_modes_supported',

    /**
     * **REQUIRED**. JSON array containing a list of the OAuth 2.0
     * `response_type` values that this OpenID Provider supports
     *
     * @remarks
     *
     * Dynamic OpenID Providers **MUST** support the `code`, `id_token`, and
     * the `token id_token` Response Type values.
     */
    ResponseTypesSupported = 'response_types_supported',

    /**
     * **RECOMMENDED**. JSON array containing a list of the OAuth 2.0 [RFC6749]
     * scope values that this server supports.
     *
     * @remarks
     *
     * The server **MUST** support the `openid` scope value. Servers *MAY*
     * choose not to advertise some supported scope values even when this
     * parameter is used, although those defined in [OpenID.Core] *SHOULD* be
     * listed, if supported.
     */
    ScopesSupported = 'scopes_supported',

    /**
     * *OPTIONAL*. URL of a page containing human-readable information that
     * developers might want or need to know when using the OpenID Provider.
     *
     * @remarks
     *
     * In particular, if the OpenID Provider does not support Dynamic Client
     * Registration, then information on how to register Clients needs to be
     * provided in this documentation.
     */
    ServiceDocumentation = 'service_documentation',

    /**
     * **REQUIRED**. JSON array containing a list of the Subject Identifier
     * types that this OpenID Provider supports.
     *
     * @remarks
     *
     * Valid types include `pairwise` and `public`.
     */
    SubjectTypesSupported = 'subject_types_supported',

    /**
     * URL of the OenID Provider's OAuth 2.0 Token Endpoint.
     *
     * @remarks
     *
     * This is **REQUIRED** unless only the Implicit Flow is used.
     */
    TokenEndpoint = 'token_endpoint',

    /**
     * *OPTIONAL*. JSON array containing a list of Client Authentication
     * methods supported by this Token Endpoint.
     *
     * @remarks
     *
     * The options are `client_secret_post`, `client_secret_basic`,
     * `client_secret_jwt`, and `private_key_jwt`. Other authentication methods
     * *MAY* be defined by extensions. If omitted, the default is
     * `client_secret_basic` -- the HTTP Basic Authentication Scheme specified
     * in Section 2.3.1 of OAuth 2.0 [RFC6749].
     */
    TokenEndpointAuthenticationMethodsSupported = 'token_endpoint_auth_methods_supported',

    /**
     * *OPTIONAL*. JSON array containing a list of the JWS signing algorithms
     * supported by the Token Endpoint for the signature on the JWT used to
     * authenticate the Client at the Token Endpoint for the `private_key_jwt`
     * and `client_secret_jwt` authentication methods.
     *
     * @remarks
     *
     * Servers *SHOULD* support `RS256`. The value `none` **MUST NOT** be used
     * and is not supported by this implementation.
     */
    TokenEndpointAuthenticationSigningAlgorithmsSupported = 'token_endpoint_auth_signing_alg_values_supported',

    /**
     * *OPTIONAL*. Languages and scripts supported for the user interface,
     * represented as a JSON array of BCP47 [RFC5646] language tag values.
     */
    UiLocalesSupported = 'ui_locales_supported',

    /**
     * **RECOMMENDED**. URL of the OpenID Provider's UserInfo Endpoint.
     *
     * @remarks
     *
     * This URL **MUST** use the `https` scheme and *MAY* contain port, path,
     * and query parameter components.
     */
    UserInfoEndpoint = 'userinfo_endpoint',

    /**
     * *OPTIONAL*. JSON array containing a list of the JWS signing algorithms
     * supported by the UserInfo Endpoint to encode the Claims in a JWT.
     *
     * @remarks
     *
     * The value `none` *MAY* be included, however, is not supported this
     * implementation.
     */
    UserInfoSigningAlgorithmsSupported = 'userinfo_signing_alg_values_supported',

    /**
     * *OPTIONAL*. JSON array containing a list of the JWE encryption
     * algorithms supported by the UserInfo Endpoint to encode the Claims in a
     * JWT.
     */
    UserInfoEncryptionAlgorithmsSupported = 'userinfo_encryption_alg_values_supported',

    /**
     * *OPTIONAL*. JSON array containing a list of the JWE encryption encodings
     * supported by the UserInfo Endpoint to encode the Claims in a JWT.
     */
    UserInfoEncryptionValuesSupported = 'userinfo_encryption_enc_values_supported'
}
