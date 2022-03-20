/**
 * Space delimited, case sensitive list of ASCII string values that specifies
 * whether the Authorization Server prompts the End-User for reauthentication
 * and consent.
 */
export enum Prompt {
    /**
     * The Authorization Server *SHOULD* prompt the End-User for consent before
     * returning information to the Client.
     *
     * @remarks
     *
     * If it cannot obtain consent, it __MUST__ return an error, typically
     * `consent_required`.
     */
    Consent = 'consent',

    /**
     * The Authorization Server *SHOULD* prompt the End-User for
     * reauthentication.
     *
     * @remarks
     *
     * If it cannot reauthenticate the End-User, it __MUST__ return an error,
     * typically `login_required`.
     */
    Login = 'login',

    /**
     * The Authorization Server __MUST NOT__ display any authentication or
     * consent user interface pages.
     *
     * @remarks
     *
     * An error is returned if an End-User is not already authenticated or the
     * Client does not have pre-configured consent for the requested Claims or
     * does not fulfill other conditions for processing the request. The error
     * code will typically be `login_required`, `interaction_required`, or
     * another code.
     */
    None = 'none',

    /**
     * The Authorization Server *SHOULD* prompt the End-User to select a user
     * account.
     *
     * @remarks
     *
     * This enables an End-User who has multiple accounts at the Authorization
     * Server to select amongst the multiple accounts that they might have
     * current sessions for. If it cannot obtain an account selection choice
     * made by the End-User, it __MUST__ return an error, typically
     * `account_selection_required`.
     */
    SelectAccount = 'select_account'
}
