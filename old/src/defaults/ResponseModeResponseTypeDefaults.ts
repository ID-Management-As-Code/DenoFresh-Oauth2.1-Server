import { ResponseMode, ResponseType } from '~/models/enums/index.ts';

export default {
    [ResponseType.AuthorizationCode]: ResponseMode.Query,
    [ResponseType.ImplicitWithToken]: ResponseMode.Fragment,
    [ResponseType.HybridWithIdAndToken]: ResponseMode.Fragment,
    [ResponseType.HybridWithToken]: ResponseMode.Fragment
};
