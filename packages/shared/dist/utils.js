"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_PROVIDERS = exports.findConnectorCategory = exports.getDescription = exports.randomString = void 0;
exports.providersArray = providersArray;
exports.findProviderByName = findProviderByName;
exports.getLogoURL = getLogoURL;
exports.mergeAllProviders = mergeAllProviders;
exports.slugFromCategory = slugFromCategory;
exports.categoryFromSlug = categoryFromSlug;
const metadata_1 = require("./connectors/metadata");
const connectors_1 = require("./connectors");
const categories_1 = require("./categories");
const randomString = () => {
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        result += charSet[randomIndex];
    }
    return result;
};
exports.randomString = randomString;
function getActiveProvidersForVertical(vertical) {
    const verticalConfig = metadata_1.CONNECTORS_METADATA[vertical.toLowerCase()];
    if (!verticalConfig) {
        return {};
    }
    const activeProviders = {};
    for (const [providerName, config] of Object.entries(verticalConfig)) {
        if (config.active !== false) {
            activeProviders[providerName] = config;
        }
    }
    return activeProviders;
}
const getDescription = (name) => {
    const vertical = (0, exports.findConnectorCategory)(name);
    if (vertical == null) {
        return null;
    }
    const activeProviders = getActiveProvidersForVertical(vertical);
    const provider = activeProviders[name];
    return provider ? provider.description : null;
};
exports.getDescription = getDescription;
;
function providersArray(vertical) {
    if (vertical) {
        const activeProviders = getActiveProvidersForVertical(vertical);
        return Object.entries(activeProviders).map(([providerName, config]) => ({
            vertical: vertical.toLowerCase(),
            name: providerName,
            urls: {
                docsUrl: config.urls.docsUrl,
                apiUrl: config.urls.apiUrl,
                authBaseUrl: config.urls.authBaseUrl,
            },
            scopes: config.scopes,
            logoPath: config.logoPath,
            description: config.description,
            authStrategy: {
                strategy: config.authStrategy.strategy,
                properties: config.authStrategy.properties ? config.authStrategy.properties : [],
            }
        }));
    }
    else {
        let allProviders = [];
        categories_1.categoriesVerticals.forEach(vertical => {
            const activeProviders = getActiveProvidersForVertical(vertical);
            const providersForVertical = Object.entries(activeProviders).map(([providerName, config]) => ({
                vertical: vertical.toLowerCase(),
                name: providerName,
                urls: {
                    docsUrl: config.urls.docsUrl,
                    apiUrl: config.urls.apiUrl,
                    authBaseUrl: config.urls.authBaseUrl,
                },
                scopes: config.scopes,
                logoPath: config.logoPath,
                description: config.description,
                authStrategy: {
                    strategy: config.authStrategy.strategy,
                    properties: config.authStrategy.properties ? config.authStrategy.properties : [],
                }
            }));
            allProviders = allProviders.concat(providersForVertical);
        });
        return allProviders;
    }
}
const findConnectorCategory = (providerName) => {
    for (const [vertical, providers] of Object.entries(metadata_1.CONNECTORS_METADATA)) {
        if (providers.hasOwnProperty.call(providers, providerName.toLowerCase())) {
            return vertical;
        }
    }
    return null;
};
exports.findConnectorCategory = findConnectorCategory;
function findProviderByName(providerName) {
    for (const vertical in metadata_1.CONNECTORS_METADATA) {
        if (metadata_1.CONNECTORS_METADATA.hasOwnProperty.call(metadata_1.CONNECTORS_METADATA, vertical)) {
            const activeProviders = getActiveProvidersForVertical(vertical);
            if (activeProviders.hasOwnProperty.call(activeProviders, providerName)) {
                const providerDetails = activeProviders[providerName];
                return Object.assign({ name: providerName }, providerDetails);
            }
        }
    }
    return null;
}
function getLogoURL(providerName) {
    const vertical = (0, exports.findConnectorCategory)(providerName);
    if (vertical !== null) {
        return metadata_1.CONNECTORS_METADATA[vertical][providerName].logoPath;
    }
    return '';
}
function mergeAllProviders(...arrays) {
    const result = [];
    arrays.forEach((arr, index) => {
        const arrayName = Object.keys({ CRM_PROVIDERS: connectors_1.CRM_PROVIDERS, HRIS_PROVIDERS: connectors_1.HRIS_PROVIDERS, ATS_PROVIDERS: connectors_1.ATS_PROVIDERS, ACCOUNTING_PROVIDERS: connectors_1.ACCOUNTING_PROVIDERS, TICKETING_PROVIDERS: connectors_1.TICKETING_PROVIDERS, MARKETINGAUTOMATION_PROVIDERS: connectors_1.MARKETINGAUTOMATION_PROVIDERS, FILESTORAGE_PROVIDERS: connectors_1.FILESTORAGE_PROVIDERS, ECOMMERCE_PROVIDERS: connectors_1.ECOMMERCE_PROVIDERS })[index];
        arr.forEach(item => {
            if (item !== '') {
                result.push({ vertical: arrayName.split('_')[0], value: item });
            }
        });
    });
    return result;
}
exports.ALL_PROVIDERS = mergeAllProviders(connectors_1.CRM_PROVIDERS, connectors_1.HRIS_PROVIDERS, connectors_1.ATS_PROVIDERS, connectors_1.ACCOUNTING_PROVIDERS, connectors_1.TICKETING_PROVIDERS, connectors_1.MARKETINGAUTOMATION_PROVIDERS, connectors_1.FILESTORAGE_PROVIDERS, connectors_1.ECOMMERCE_PROVIDERS);
function slugFromCategory(category) {
    switch (category) {
        case categories_1.ConnectorCategory.Crm:
            return 'crm';
        case categories_1.ConnectorCategory.Hris:
            return 'hris';
        case categories_1.ConnectorCategory.Ats:
            return 'ats';
        case categories_1.ConnectorCategory.Ticketing:
            return 'tcg';
        case categories_1.ConnectorCategory.MarketingAutomation:
            return 'mktg';
        case categories_1.ConnectorCategory.FileStorage:
            return 'fs';
        case categories_1.ConnectorCategory.Accounting:
            return 'actng';
        case categories_1.ConnectorCategory.Ecommerce:
            return 'ecom';
        default:
            return null;
    }
}
function categoryFromSlug(slug) {
    switch (slug) {
        case 'crm':
            return categories_1.ConnectorCategory.Crm;
        case 'hris':
            return categories_1.ConnectorCategory.Hris;
        case 'ats':
            return categories_1.ConnectorCategory.Ats;
        case 'tcg':
            return categories_1.ConnectorCategory.Ticketing;
        case 'mktg':
            return categories_1.ConnectorCategory.MarketingAutomation;
        case 'fs':
            return categories_1.ConnectorCategory.FileStorage;
        case 'actng':
            return categories_1.ConnectorCategory.Accounting;
        case 'ecom':
            return categories_1.ConnectorCategory.Ecommerce;
        default:
            return null;
    }
}
