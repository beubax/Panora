interface AuthParams {
    projectId: string;
    linkedUserId: string;
    providerName: string;
    returnUrl: string;
    apiUrl: string;
    vertical: string;
    redirectUriIngress?: {
        status: boolean;
        value: string | null;
    };
    [key: string]: any;
}
export declare const constructAuthUrl: ({ projectId, linkedUserId, providerName, returnUrl, apiUrl, vertical, additionalParams, redirectUriIngress }: AuthParams) => Promise<string | void>;
export {};
