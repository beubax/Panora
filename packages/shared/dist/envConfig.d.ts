import { AuthStrategy, SoftwareMode } from './types';
export type BasicAuthData = {
    USERNAME: string;
    SECRET: string;
    SUBDOMAIN?: string;
};
export type ApiAuthData = {
    API_KEY: string;
    SUBDOMAIN?: string;
};
export type OAuth2AuthData = {
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    SCOPE?: string;
    SUBDOMAIN?: string;
    [key: string]: any;
};
export type AuthData = BasicAuthData | ApiAuthData | OAuth2AuthData;
export declare function extractProvider(type: string): string;
export declare function extractVertical(type: string): string;
export declare function extractSoftwareMode(type: string): string;
export declare function providerToType(providerName: string, vertical: string, authMode: AuthStrategy, softwareMode?: SoftwareMode): string;
export declare function extractAuthMode(type: string): AuthStrategy;
export declare function needsSubdomain(provider: string, vertical: string): boolean;
export declare function needsScope(provider: string, vertical: string): boolean;
export declare function needsEndUserSubdomain(provider: string, vertical: string): boolean;
