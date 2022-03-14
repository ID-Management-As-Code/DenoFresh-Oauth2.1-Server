/**
 * ASCII string value that specifies how the Authorization Server displays the
 * authentication and consent user interface pages to the End-User.
 */
export enum Display {
    /**
     * Display the authentication and consent UI consistent with a full
     * User Agent, or browser, page view.
     */
    Page = 'page',

    /**
     * Display the authentication and consent UI consistent with a popup
     * User Agent, or browser, window.
     */
    Popup = 'popup',

    /**
     * Display the authentication and consent UI consistent with a device that
     * leverages a touch interface.
     */
    Touch = 'touch',

    /**
     * Display the authentication and consent UI consistent with a feature,
     * minimalist, or dumb phone type display.
     */
    Wap = 'wap'
}
