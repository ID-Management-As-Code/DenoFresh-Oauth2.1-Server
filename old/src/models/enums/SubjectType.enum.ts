/**
 * A Subject Identifier is a locally unique and never reassigned identifier
 * within the Issuer for the End-User, which is intended to be consumed by the
 * Client. Two Subject Identifier types are defined by this specification
 */
export enum SubjectType {
    /**
     * This provides a different sub value to each Client, so as not to enable
     * Clients to correlate the End-User's activities without permission.
     */
    Pairwise = 'pairwise',

    /**
     * This provides the same `sub` (subject) value to all Clients.
     *
     * @remarks
     *
     * It is the default if the provider has no `subject_types_supported`
     * element in its discovery document.
     */
    Public = 'public'
}
