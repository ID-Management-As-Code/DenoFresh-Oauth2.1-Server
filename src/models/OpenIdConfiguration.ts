import { OpenIdProviderMetadata } from './enums/OpenIdProviderMetadata.enum.ts';

export interface OpenIdConfiguration {
    [OpenIdProviderMetadata.Issuer]: string;
    [OpenIdProviderMetadata.AuthorizationEndpoint]: string;
    [OpenIdProviderMetadata.TokenEndpoint]: string;
    [OpenIdProviderMetadata.UserInfoEndpoint]?: string;
    [OpenIdProviderMetadata.JsonWebKeySetUri]: string;
    [OpenIdProviderMetadata.RegistrationEndpoint]?: string;
    [OpenIdProviderMetadata.ScopesSupported]?: string[];
    [OpenIdProviderMetadata.ResponseTypesSupported]: string[];
    [OpenIdProviderMetadata.ResponseModesSupported]?: string[];
    [OpenIdProviderMetadata.GrantTypesSupport]?: string[];
    [OpenIdProviderMetadata.AuthenticationContextReferencesSupported]?: string[];
    [OpenIdProviderMetadata.SubjectTypesSupported]: string[];
    [OpenIdProviderMetadata.IdTokenSigningAlgorithmsSupported]: string[];
    [OpenIdProviderMetadata.IdTokenEncryptionAlgorithmsSupported]?: string[];
    [OpenIdProviderMetadata.IdTokenEncryptionValuesSupported]?: string[];
    [OpenIdProviderMetadata.UserInfoSigningAlgorithmsSupported]?: string[];
    [OpenIdProviderMetadata.UserInfoEncryptionAlgorithmsSupported]?: string[];
    [OpenIdProviderMetadata.UserInfoEncryptionValuesSupported]?: string[];
    [OpenIdProviderMetadata.RequestObjectSigningAlgorithmsSupported]?: string[];
    [OpenIdProviderMetadata.RequestObjectEncryptionAlgorithmsSupported]?: string[];
    [OpenIdProviderMetadata.RequestObjectEncryptionValuesSupported]?: string[];
    [OpenIdProviderMetadata.TokenEndpointAuthenticationMethodsSupported]?: string[];
    [OpenIdProviderMetadata.TokenEndpointAuthenticationSigningAlgorithmsSupported]?: string[];
    [OpenIdProviderMetadata.DisplayValuesSupported]?: string[];
    [OpenIdProviderMetadata.ClaimTypesSupported]?: string[];
    [OpenIdProviderMetadata.ClaimsSupported]?: string[];
    [OpenIdProviderMetadata.ServiceDocumentation]?: string;
    [OpenIdProviderMetadata.ClaimsLocalesSupported]?: string[];
    [OpenIdProviderMetadata.UiLocalesSupported]?: string[];
    [OpenIdProviderMetadata.ClaimsParameterSupported]?: boolean;
    [OpenIdProviderMetadata.RequestParameterSupported]?: boolean;
    [OpenIdProviderMetadata.RequestUriParameterSupported]?: boolean;
    [OpenIdProviderMetadata.OpenIdProviderPolicyUri]?: string;
    [OpenIdProviderMetadata.OpenIdProviderTermsOfServiceUri]?: string;
}
