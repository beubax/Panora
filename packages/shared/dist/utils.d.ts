import { AuthType, DynamicApiUrl, DynamicAuthorization, StaticApiUrl, StringAuthorization } from './types';
import { ConnectorCategory } from './categories';
export declare const randomString: () => string;
export declare const getDescription: (name: string) => string | null;
export interface Provider {
    vertical?: string;
    name: string;
    urls: {
        docsUrl: string;
        apiUrl: StaticApiUrl | DynamicApiUrl;
        authBaseUrl?: StringAuthorization | DynamicAuthorization;
    };
    scopes?: string;
    logoPath: string;
    description?: string;
    authStrategy: AuthType;
}
export declare function providersArray(vertical?: string): Provider[];
export declare const findConnectorCategory: (providerName: string) => string | null;
export declare function findProviderByName(providerName: string): Provider | null;
export declare function getLogoURL(providerName: string): string;
export declare function mergeAllProviders(...arrays: string[][]): {
    vertical: string;
    value: string;
}[];
export declare const ALL_PROVIDERS: {
    vertical: string;
    value: string;
}[];
export declare function slugFromCategory(category: ConnectorCategory): "crm" | "hris" | "ats" | "tcg" | "mktg" | "fs" | "actng" | "ecom";
export declare function categoryFromSlug(slug: string): ConnectorCategory | null;
