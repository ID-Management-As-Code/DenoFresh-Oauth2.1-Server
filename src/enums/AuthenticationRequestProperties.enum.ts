/**
 * Names of properties used when making authentication requests to the
 * authorization server.
 */
export enum AuthenticationProperties {
    /**
     * *OPTIONAL*. Requested Authentication Context Class Reference values.
     * Space-separated string that specifies the `acr` values that the
     * Authorization Server is being requested to use for processing this
     * Authentication Request, with the values appearing in order of
     * preference.
     *
     * @remarks
     *
     * The Authentication Context Class satisfied by the authentication
     * performed is returned as the `acr` Claim Value. The `acr` Claim is
     * requested as a Voluntary Claim by this parameter.
     */
    AuthenticationContextReference = 'acr_values',

    /**
     * *OPTIONAL*. This parameter is used to request that specific Claims be
     * returned. The value is a JSON object listing the requested Claims.
     */
    Claims = 'claims',

    /**
     * *OPTIONAL*. End-User's preferred languages and scripts for Claims being
     * returned, represented as a space-separated list of BCP47 [RFC5646]
     * language tag values, ordered by preference.
     *
     * @remarks
     *
     * An error *SHOULD NOT* result if some or all of the requested locales are
     * not supported by the OpenID Provider.
     */
    ClaimsLocales = 'claims_locales',

    /**
     * __REQUIRED__. The unique identifier of the client authenticating with
     * the authorization server.
     */
    ClientId = 'client_id',

    /**
     * *OPTIONAL*. ASCII string value that specifies how the Authorization
     * Server displays the authentication and consent user interface pages to
     * the End-User.
     *
     * @remarks
     *
     * The defined values are one of several defined in
     * @see {@link UserDisplay}
     */
    Display = 'display',

    /**
     * *OPTIONAL*. ID Token previously issued by the Authorization Server being
     * passed as a hint about the End-User's current or past authenticated
     * session with the Client.
     *
     * @remarks
     *
     * If the End-User identified by the ID Token is logged in or is logged in
     * by the request, then the Authorization Server returns a positive
     * response; otherwise, it *SHOULD* return an error, such as
     * `login_required`.
     *
     * When possible, an `id_token_hint` *SHOULD* be present when prompt=none
     * is used and an `invalid_request` error *MAY* be returned if it is not;
     * however, the server *SHOULD* respond successfully when possible, even if
     * it is not present.
     *
     * The Authorization Server need not be listed as an audience of the ID
     * Token when it is used as an `id_token_hint` value. If the ID Token
     * received by the Relying Party from the OpenID Provider is encrypted, to
     * use it as an `id_token_hint`, the Client __MUST__ decrypt the signed ID
     * Token contained within the encrypted ID Token. The Client *MAY*
     * re-encrypt the signed ID token to the Authentication Server using a key
     * that enables the server to decrypt the ID Token, and use the
     * re-encrypted ID token as the `id_token_hint` value.
     */
    IdTokenHint = 'id_token_hint',

    /**
     * *OPTIONAL*. Hint to the Authorization Server about the login identifier
     * the End-User might use to log in (if necessary).
     *
     * @remarks
     *
     * This hint can be used by a Relying Party if it first asks the End-User
     * for their e-mail address (or other identifier) and then wants to pass
     * that value as a hint to the discovered authorization service. It is
     * *RECOMMENDED* that the hint value match the value used for discovery.
     * This value *MAY* also be a phone number in the format specified for the
     * `phone_number` Claim. The use of this parameter is left to the OpenID
     * Provider's discretion.
     */
    LoginHint = 'login_hint',

    /**
     * *OPTIONAL*. Maximum Authentication Age. Specifies the allowable elapsed
     * time in seconds since the last time the End-User was actively
     * authenticated by the OP.
     *
     * @remarks
     *
     * If the elapsed time is greater than this value, the OpenID Provider MUST
     * attempt to actively re-authenticate the End-User. When max_age is used,
     * the ID Token returned __MUST__ include an `auth_time` Claim Value.
     */
    MaxAge = 'max_age',

    /**
     * *OPTIONAL*. String value used to associate a Client session with an ID
     * Token, and to mitigate replay attacks.
     *
     * @remarks
     *
     * The value is passed through unmodified from the Authentication Request
     * to the ID Token. Sufficient entropy __MUST__ be present in the nonce
     * values used to prevent attackers from guessing values.
     */
    Nonce = 'nonce',

    /**
     * *OPTIONAL*. Space delimited, case sensitive list of ASCII string values
     * that specifies whether the Authorization Server prompts the End-User for
     * reauthentication and consent.
     *
     * @remarks
     *
     * The defined values are listed in @see {@link Prompt}.
     */
    Prompt = 'prompt',

    /**
     * __REQUIRED__. Redirection URI to which the response will be sent.
     *
     * @remarks
     *
     * This URI MUST exactly match one of the Redirection URI values for the
     * Client pre-registered at the OpenID Provider.
     */
    RedirectUri = 'redirect_uri',

    /**
     * *OPTIONAL*. This parameter is used by the Client to provide information
     * about itself to a Self-Issued OpenID Provider that would normally be
     * provided to an OpenID Procider during Dynamic Client Registration.
     *
     * @remarks
     *
     * The value is a JSON object containing Client metadata values. The
     * registration parameter *SHOULD NOT* be used when the OpenID Provider is
     * not a Self-Issued OpenID Provider.
     */
    Registration = 'registration',

    /**
     * *OPTIONAL*. This parameter enables OpenID Connect requests to be passed
     * in a single, self-contained parameter and to be optionally signed and/or
     * encrypted. The parameter value is a Request Object value. It represents
     * the request as a JWT whose Claims are the request parameters.
     */
    Request = 'request',

    /**
     * *OPTIONAL*. This parameter enables OpenID Connect requests to be passed
     * by reference, rather than by value. The request_uri value is a URL using the https scheme referencing a resource containing a Request Object value, which is a JWT containing the request parameters.
     */
    RequestUri = 'request_uri',

    /**
     * *OPTIONAL*. Informs the Authorization Server of the mechanism to be used
     * for returning parameters from the Authorization Endpoint.
     *
     * @remarks
     *
     * This use of this parameter is __NOT RECOMMENDED__ when the Response Mode
     * that would be requested is the default mode specified for the Response
     * Type.
     */
    ResponseMode = 'response_mode',

    /**
     * __REQUIRED__. Informs the Authorization Server of the desired
     * authorization processing flow, including what parameters are returned
     * from the endpoints used.
     */
    ResponseType = 'response_type',

    /**
     * __REQUIRED__. OpenID Connect requests MUST contain the `openid` scope
     * value. If the openid scope value is not present, the behavior is
     * entirely unspecified.
     *
     * @remarks
     *
     * Other scope values MAY be present. Scope values used that are not
     * understood by an implementation *SHOULD* be ignored.
     */
    Scope = 'scope',

    /**
     * __RECOMMENDED__. Opaque value used to maintain state between the request
     * and the callback.
     *
     * @remarks
     *
     * Typically, Cross-Site Request Forgery (CSRF, XSRF) mitigation is done by
     * cryptographically binding the value of this parameter with a browser
     * cookie.
     */
    State = 'state',

    /**
     * *OPTIONAL*. End-User's preferred languages and scripts for the user
     * interface, represented as a space-separated list of BCP47 [RFC5646]
     * language tag values, ordered by preference.
     *
     * @remarks
     *
     * For instance, the value "fr-CA fr en" represents a preference for French
     * as spoken in Canada, then French (without a region designation),
     * followed by English (without a region designation). An error
     * *SHOULD NOT* result if some or all of the requested locales are not
     * supported by the OpenID Provider.
     */
    UiLocales = 'ui_locales'
}
