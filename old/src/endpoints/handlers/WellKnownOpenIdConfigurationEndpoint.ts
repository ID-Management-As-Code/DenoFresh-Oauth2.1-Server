import { HttpRequest, HttpResponse } from '../../http/index.ts';
import { Endpoint } from '../Endpoint.ts';
import { json } from '../actions/index.ts';
import {
GrantType,
    OpenIdProviderMetadata,
    ResponseMode,
    ResponseType,
    Scopes,
    SigningAlgorithm,
    SubjectType
} from '../../models/index.ts';
import type { OpenIdConfiguration } from '../../models/index.ts';
import { getAppSettings } from '../../configuration/loadAppSettings.ts';

const getGrantTypes = () => [
    GrantType.AuthorizationCode,
    GrantType.ClientCredentials,
    GrantType.RefreshToken
];

const getIdTokenSigningAlgorithms = () => [
    SigningAlgorithm.EcdsaSignatureSha256,
    SigningAlgorithm.EcdsaSignatureSha384,
    SigningAlgorithm.EcdsaSignatureSha512,
    SigningAlgorithm.HmacSignatureSha256,
    SigningAlgorithm.HmacSignatureSha384,
    SigningAlgorithm.HmacSignatureSha512,
    SigningAlgorithm.RsaSignatureSha256,
    SigningAlgorithm.RsaSignatureSha384,
    SigningAlgorithm.RsaSignatureSha512
];

const getResponseModes = () => [
    ResponseMode.FormPost,
    ResponseMode.Fragment,
    ResponseMode.Query
];

const getResponseTypes = () => [
    ResponseType.AuthorizationCode,
    ResponseType.HybridWithId,
    ResponseType.Implicit,
    ResponseType.ImplicitWithToken,
    ResponseType.HybridWithId,
    ResponseType.HybridWithIdAndToken,
    ResponseType.HybridWithToken
];

const getScopes = () => [
    Scopes.OpenId,
    Scopes.Profile,
    Scopes.Email,
    Scopes.Phone,
    Scopes.Address
];

const getSubjectTypes = () => [
    SubjectType.Pairwise,
    SubjectType.Public
];

function buildConfiguration(origin: string): OpenIdConfiguration {
    const settings = getAppSettings();

    return {
        [OpenIdProviderMetadata.Issuer]: origin,
        [OpenIdProviderMetadata.AuthorizationEndpoint]: `${origin}/connect/authorize`,
        [OpenIdProviderMetadata.TokenEndpoint]: `${origin}/connect/token`,
        [OpenIdProviderMetadata.UserInfoEndpoint]: `${origin}/connect/userinfo`,
        [OpenIdProviderMetadata.JsonWebKeySetUri]: `${origin}/connect/jwks`,
        [OpenIdProviderMetadata.RegistrationEndpoint]: `${origin}/connect/register`,
        [OpenIdProviderMetadata.ScopesSupported]: getScopes(),
        [OpenIdProviderMetadata.ResponseTypesSupported]: getResponseTypes(),
        [OpenIdProviderMetadata.ResponseModesSupported]: getResponseModes(),
        [OpenIdProviderMetadata.GrantTypesSupport]: getGrantTypes(),
        [OpenIdProviderMetadata.SubjectTypesSupported]: getSubjectTypes(),
        [OpenIdProviderMetadata.IdTokenSigningAlgorithmsSupported]: getIdTokenSigningAlgorithms(),
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
    };
}

/**
 * The endpoint for generating and returning the OpenID COnnect .well-known
 * OpenID Configuration document.
 */
export class WellKnownOpenIdConfigurationEndpoint extends Endpoint {
    public get path(): string {
        return '/.well-known/openid-configuration';
    }

    public handler(request: HttpRequest): HttpResponse {
        const url = new URL(request.url);
        const origin = url.origin;

        const openIdConfiguration = buildConfiguration(origin);

        return json(openIdConfiguration);
    }
}
