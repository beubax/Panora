"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractProvider = extractProvider;
exports.extractVertical = extractVertical;
exports.extractSoftwareMode = extractSoftwareMode;
exports.providerToType = providerToType;
exports.extractAuthMode = extractAuthMode;
exports.needsSubdomain = needsSubdomain;
exports.needsScope = needsScope;
exports.needsEndUserSubdomain = needsEndUserSubdomain;
const metadata_1 = require("./connectors/metadata");
const types_1 = require("./types");
function extractProvider(type) {
    const parts = type.split('_');
    return parts[0];
}
function extractVertical(type) {
    const parts = type.split('_');
    return parts[1];
}
function extractSoftwareMode(type) {
    const parts = type.split('_');
    return parts[2];
}
function providerToType(providerName, vertical, authMode, softwareMode) {
    const software = softwareMode ? softwareMode.toUpperCase() : types_1.SoftwareMode.cloud;
    switch (authMode) {
        case types_1.AuthStrategy.api_key:
            return `${providerName.toUpperCase()}_${vertical.toUpperCase()}_${software}_APIKEY`;
        case types_1.AuthStrategy.oauth2:
            return `${providerName.toUpperCase()}_${vertical.toUpperCase()}_${software}_OAUTH`;
        case types_1.AuthStrategy.basic:
            return `${providerName.toUpperCase()}_${vertical.toUpperCase()}_${software}_BASIC`;
    }
}
function extractAuthMode(type) {
    const parts = type.split('_');
    const authMode = parts[parts.length - 1];
    switch (authMode) {
        case 'OAUTH':
            return types_1.AuthStrategy.oauth2;
        case 'APIKEY':
            return types_1.AuthStrategy.api_key;
        case 'BASIC':
            return types_1.AuthStrategy.basic;
        default:
            throw new ReferenceError('Auth mode not found');
    }
}
function needsSubdomain(provider, vertical) {
    if (!metadata_1.CONNECTORS_METADATA[vertical]) {
        console.error(`Vertical ${vertical} not found in CONNECTORS_METADATA.`);
        return false;
    }
    if (!metadata_1.CONNECTORS_METADATA[vertical][provider]) {
        console.error(`Provider ${provider} not found under vertical ${vertical}.`);
        return false;
    }
    const providerConfig = metadata_1.CONNECTORS_METADATA[vertical][provider];
    if (providerConfig.options && providerConfig.options.company_subdomain) {
        return providerConfig.options.company_subdomain;
    }
    return false;
}
function needsScope(provider, vertical) {
    if (!metadata_1.CONNECTORS_METADATA[vertical]) {
        console.error(`Vertical ${vertical} not found in CONNECTORS_METADATA.`);
        return false;
    }
    if (!metadata_1.CONNECTORS_METADATA[vertical][provider]) {
        console.error(`Provider ${provider} not found under vertical ${vertical}.`);
        return false;
    }
    const providerConfig = metadata_1.CONNECTORS_METADATA[vertical][provider];
    if (!providerConfig.scopes) {
        return false;
    }
    return true;
}
function needsEndUserSubdomain(provider, vertical) {
    if (!metadata_1.CONNECTORS_METADATA[vertical]) {
        console.error(`Vertical ${vertical} not found in CONNECTORS_METADATA.`);
        return false;
    }
    if (!metadata_1.CONNECTORS_METADATA[vertical][provider]) {
        console.error(`Provider ${provider} not found under vertical ${vertical}.`);
        return false;
    }
    const providerConfig = metadata_1.CONNECTORS_METADATA[vertical][provider];
    if (providerConfig.options && providerConfig.options.end_user_domain) {
        return providerConfig.options.end_user_domain;
    }
    return false;
}
