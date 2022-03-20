/**
 * *OPTIONAL*. Informs the Authorization Server of the mechanism to be used for
 * returning parameters from the Authorization Endpoint.
 */
export enum ResponseMode {
    /**
     * Authorization Response parameters are encoded as HTML form values that
     * are auto-submitted in the User Agent, and thus are transmitted via the
     * HTTP `POST` method to the Client, with the result parameters being
     * encoded in the body using the `application/x-www-form-urlencoded`
     * format.
     *
     * @remarks
     *
     * The action attribute of the form **MUST** be the Client's Redirection
     * URI. The method of the form attribute **MUST** be `POST`. Because the
     * Authorization Response is intended to be used only once, the
     * Authorization Server **MUST** instruct the User Agent (and any
     * intermediaries) not to store or reuse the content of the response. Any
     * technique supported by the User Agent *MAY* be used to cause the
     * submission of the form, and any form content necessary to support this
     * *MAY* be included, such as submit controls and client-side scripting
     * commands. However, the Client **MUST** be able to process the message
     * without regard for the mechanism by which the form submission was
     * initiated.
     */
    FormPost = 'form_post',

    /**
     * Authorization Response parameters are encoded in the fragment added to
     * the `redirect_uri` when redirecting back to the Client.
     */
    Fragment = 'fragment',

    /**
     * Authorization Response parameters are encoded in the query string added
     * to the `redirect_uri` when redirecting back to the Client.
     */
    Query = 'query'
}
