import { HttpRequest, HttpResponse } from '../../http/index.ts';
import { Endpoint } from '../Endpoint.ts';
import { json } from '../actions/index.ts';
import { OpenIdProviderMetadata, ResponseType, SigningAlgorithm, SubjectType } from '../../models/index.ts';
import type { OpenIdConfiguration } from '../../models/index.ts';

const getResponseTypes = () => [
    ResponseType.AuthorizationCode,
    ResponseType.HybridWithId,
    ResponseType.Implicit,
    ResponseType.ImplicitWithToken
];

const getSubjectTypes = () => [
    SubjectType.Pairwise,
    SubjectType.Public
];

const getIdTokenSigningAlgorithms = () => [
    SigningAlgorithm.RsaSignatureSha256
];

function buildConfiguration(origin: string): OpenIdConfiguration {
    return {
        [OpenIdProviderMetadata.Issuer]: origin,
        [OpenIdProviderMetadata.JsonWebKeySetUri]: `${origin}/jwks`,
        [OpenIdProviderMetadata.AuthorizationEndpoint]: `${origin}/connect/authorize`,
        [OpenIdProviderMetadata.TokenEndpoint]: `${origin}/connect/token`,
        [OpenIdProviderMetadata.UserInfoEndpoint]: `${origin}/connect/userinfo`,
        // [OpenIdProviderMetadata]
        [OpenIdProviderMetadata.ResponseTypesSupported]: getResponseTypes(),
        [OpenIdProviderMetadata.SubjectTypesSupported]: getSubjectTypes(),
        [OpenIdProviderMetadata.IdTokenSigningAlgorithmsSupported]: getIdTokenSigningAlgorithms(),
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
        // [OpenIdProviderMetadata]: ,
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
