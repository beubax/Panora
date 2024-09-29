"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructAuthUrl = void 0;
const metadata_1 = require("./connectors/metadata");
const envConfig_1 = require("./envConfig");
const types_1 = require("./types");
const utils_1 = require("./utils");
const constructAuthUrl = (_a) => __awaiter(void 0, [_a], void 0, function* ({ projectId, linkedUserId, providerName, returnUrl, apiUrl, vertical, additionalParams, redirectUriIngress }) {
    var _b;
    const config = metadata_1.CONNECTORS_METADATA[vertical.toLowerCase()][providerName];
    if (!config) {
        throw new Error(`Unsupported provider: ${providerName}`);
    }
    let baseRedirectURL = apiUrl;
    if (((_b = config.options) === null || _b === void 0 ? void 0 : _b.local_redirect_uri_in_https) && (redirectUriIngress === null || redirectUriIngress === void 0 ? void 0 : redirectUriIngress.status)) {
        baseRedirectURL = redirectUriIngress.value;
    }
    const encodedRedirectUrl = encodeURIComponent(`${baseRedirectURL}/connections/oauth/callback`);
    let state = encodeURIComponent(JSON.stringify(Object.assign(Object.assign({ projectId, linkedUserId, providerName, vertical }, additionalParams), { returnUrl })));
    if (['deel', 'squarespace'].includes(providerName)) {
        const randomState = (0, utils_1.randomString)();
        state = encodeURIComponent(randomState + `${providerName}_delimiter` + Buffer.from(JSON.stringify(Object.assign({ projectId, linkedUserId, providerName, vertical, returnUrl }, Object.values(additionalParams || {})))).toString('base64'));
    }
    const opts = {};
    if (['snyk', 'klaviyo'].includes(providerName)) {
        const response = yield fetch(`${apiUrl}/auth/s256Codes`);
        const data = yield response.json();
        const { codeChallenge, codeVerifier } = data;
        state = encodeURIComponent(JSON.stringify({
            projectId, linkedUserId, providerName, vertical, returnUrl, code_verifier: codeVerifier
        }));
        opts.codeVerifier = codeVerifier;
        opts.codeChallenge = codeChallenge;
    }
    if (vertical === null) {
        throw new ReferenceError('vertical is null');
    }
    const authStrategy = config.authStrategy.strategy;
    switch (authStrategy) {
        case types_1.AuthStrategy.oauth2:
            return handleOAuth2Url(Object.assign(Object.assign({ providerName, vertical, authStrategy, projectId, config,
                encodedRedirectUrl, state, apiUrl }, Object.values(additionalParams || {})), opts));
        case types_1.AuthStrategy.api_key:
            return handleApiKeyUrl();
        case types_1.AuthStrategy.basic:
            return handleBasicUrl();
    }
});
exports.constructAuthUrl = constructAuthUrl;
const handleOAuth2Url = (_a) => __awaiter(void 0, void 0, void 0, function* () {
    var { providerName, vertical, authStrategy, projectId, config, encodedRedirectUrl, state, apiUrl } = _a, dyn = __rest(_a, ["providerName", "vertical", "authStrategy", "projectId", "config", "encodedRedirectUrl", "state", "apiUrl"]);
    const type = (0, envConfig_1.providerToType)(providerName, vertical, authStrategy);
    const response = yield fetch(`${apiUrl}/connection_strategies/getCredentials?projectId=${projectId}&type=${type}`);
    const data = yield response.json();
    const clientId = data.CLIENT_ID;
    if (!clientId)
        throw new ReferenceError(`No client id for type ${type}`);
    const scopes = data.SCOPE;
    const { urls: { authBaseUrl: baseUrl } } = config;
    if (!baseUrl)
        throw new ReferenceError(`No authBaseUrl found for type ${type}`);
    let BASE_URL;
    if ((0, envConfig_1.needsSubdomain)(providerName, vertical)) {
        BASE_URL = typeof baseUrl === 'string' ? baseUrl : baseUrl(data.SUBDOMAIN);
    }
    else if ((0, envConfig_1.needsEndUserSubdomain)(providerName, vertical)) {
        BASE_URL = typeof baseUrl === 'string' ? baseUrl : baseUrl(...Object.values(dyn || {}));
    }
    else {
        BASE_URL = baseUrl;
    }
    if (!BASE_URL) {
        throw new Error(`Unsupported provider: ${providerName}`);
    }
    let params = `response_type=code&client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodedRedirectUrl}&state=${state}`;
    switch (providerName) {
        case 'helpscout':
            params = `client_id=${encodeURIComponent(clientId)}&state=${state}`;
            break;
        case 'pipedrive':
        case 'shopify':
        case 'squarespace':
            params = `client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodedRedirectUrl}&state=${state}`;
            break;
        case 'faire':
            params = `applicationId=${encodeURIComponent(clientId)}&redirectUrl=${encodedRedirectUrl}&state=${state}`;
            break;
        case 'ebay':
            params = `response_type=code&client_id=${encodeURIComponent(clientId)}&redirect_uri=${data.RUVALUE}&state=${state}`;
            break;
        case 'amazon':
            params = `application_id=${encodeURIComponent(data.APPLICATION_ID)}&state=${state}&version=beta`;
            break;
    }
    if ((0, envConfig_1.needsScope)(providerName, vertical) && scopes) {
        if (providerName === 'slack') {
            params += `&scope=&user_scope=${encodeURIComponent(scopes)}`;
        }
        else if (providerName === 'microsoftdynamicssales') {
            const url = new URL(BASE_URL);
            BASE_URL = url.origin + url.pathname;
            const resource = url.searchParams.get('resource');
            const scopeValue = `https://${resource}/.default offline_access`;
            params += `&scope=${encodeURIComponent(scopeValue)}`;
        }
        else if (providerName === 'deel') {
            params += `&scope=${encodeURIComponent(scopes.replace(/\t/g, ' '))}`;
        }
        else {
            params += `&scope=${encodeURIComponent(scopes)}`;
        }
    }
    switch (providerName) {
        case 'zoho':
        case 'squarespace':
            params += '&access_type=offline';
            break;
        case 'jira':
        case 'jira_service_mgmt':
            params = `audience=api.atlassian.com&${params}&prompt=consent`;
            break;
        case 'gitlab':
            params += '&code_challenge=&code_challenge_method=';
            break;
        case 'gorgias':
            params += `&nonce=${(0, utils_1.randomString)()}`;
            break;
        case 'googledrive':
            params += '&access_type=offline';
            break;
        case 'dropbox':
            params += '&token_access_type=offline';
            break;
        case 'basecamp':
            params += '&type=web_server';
            break;
        case 'lever':
            params += '&audience=https://api.lever.co/v1/';
            break;
        case 'notion':
            params += '&owner=user';
            break;
        case 'snyk':
        case 'klaviyo':
            params += `&code_challenge_method=S256&code_challenge=${dyn.codeChallenge}`;
            break;
    }
    return `${BASE_URL}?${params}`;
});
const handleApiKeyUrl = () => __awaiter(void 0, void 0, void 0, function* () {
    return;
});
const handleBasicUrl = () => __awaiter(void 0, void 0, void 0, function* () {
    return;
});
