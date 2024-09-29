export declare enum AuthStrategy {
    oauth2 = "0Auth2",
    api_key = "API Key",
    basic = "Basic Auth"
}
export type AuthType = {
    strategy: AuthStrategy;
    properties?: string[];
    authStructure?: {
        headerParamName: string;
        prefix?: string;
        valueName?: string;
        reqFormat?: 'MUTLIPART';
    }[];
};
export declare enum SoftwareMode {
    cloud = "CLOUD"
}
export type StringAuthorization = string;
export type DynamicAuthorization = ((...args: string[]) => string);
export type StaticApiUrl = string;
export type DynamicApiUrl = ((...args: string[]) => string);
export type ProviderConfig = {
    scopes?: string;
    logoPath: string;
    description: string;
    active?: boolean;
    customPropertiesUrl?: string;
    authStrategy: AuthType;
    primaryColor?: string;
    urls: {
        docsUrl: string;
        apiUrl: StaticApiUrl | DynamicApiUrl;
        authBaseUrl?: StringAuthorization | DynamicAuthorization;
        customPropertiesUrl?: string;
    };
    options?: {
        end_user_domain?: boolean;
        company_subdomain?: boolean;
        local_redirect_uri_in_https?: boolean;
        oauth_attributes?: string[];
    };
    realTimeWebhookMetadata?: {
        method?: 'API' | 'MANUAL';
        events?: string[];
    };
};
export type VerticalConfig = {
    [key: string]: ProviderConfig;
};
export type ProvidersConfig = {
    [vertical: string]: VerticalConfig;
};
