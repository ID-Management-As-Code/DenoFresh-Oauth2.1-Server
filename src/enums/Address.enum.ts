/**
 * The Address Claim represents a physical mailing address.
 *
 * @remarks
 *
 * Implementations MAY return only a subset of the fields of an address,
 * depending upon the information available and the End-User's privacy
 * preferences. For example, the country and region might be returned without
 * returning more fine-grained address information.
 */
export enum Address {
    /**
     * Country name component.
     */
    Country = 'country',

    /**
     * Full mailing address, formatted for display or use on a mailing label.
     *
     * @remarks
     *
     * This field MAY contain multiple lines, separated by newlines.
     */
    Formatted = 'formatted',

    /**
     * City or locality component.
     */
    Locality = 'locality',

    /**
     * Zip code or postal code component.
     */
    PostalCode = 'postal_code',

    /**
     * State, province, prefecture, or region component.
     */
    Region = 'region',

    /**
     * Full street address component, which MAY include house number, street
     * name, Post Office Box, and multi-line extended street address
     * information.
     *
     * @remarks
     *
     * This field MAY contain multiple lines, separated by newlines.
     */
    StreetAddress = 'street_address'
}
