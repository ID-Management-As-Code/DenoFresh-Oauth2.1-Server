/**
 * Scopes provied by the OAuth 2.0 and OpenID Connect specifications.
 */
export enum Scopes {
    /**
     * *OPTIONAL*. This scope value requests access to the `address` Claim.
     */
    Address = 'address',

    /**
     * *OPTIONAL*. This scope value requests access to the `email` and
     * `email_verified` Claims.
     */
    Email = 'email',

    OpenId = 'openid',

    /**
     * *OPTIONAL*. This scope value requests access to the End-User's default
     * profile Claims, which are: `name`, `family_name`, `given_name`,
     * `middle_name`, `nickname`, `preferred_username`, `profile`, `picture`,
     * `website`, `gender`, `birthdate`, `zoneinfo`, `locale`, and
     * `updated_at`.
     */
    Profile = 'profile',

    /**
     * *OPTIONAL*. This scope value requests access to the `phone_number` and
     * `phone_number_verified` Claims.
     */
    Phone = 'phone'
}
