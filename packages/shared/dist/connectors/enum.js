"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilestorageConnectors = exports.TicketingConnectors = exports.EcommerceConnectors = exports.CrmConnectors = void 0;
var CrmConnectors;
(function (CrmConnectors) {
    CrmConnectors["ZOHO"] = "zoho";
    CrmConnectors["ZENDESK"] = "zendesk";
    CrmConnectors["HUBSPOT"] = "hubspot";
    CrmConnectors["PIPEDRIVE"] = "pipedrive";
    CrmConnectors["ATTIO"] = "attio";
    CrmConnectors["CLOSE"] = "close";
    CrmConnectors["MICROSOFTDYNAMICSSALES"] = "microsoftdynamicssales";
})(CrmConnectors || (exports.CrmConnectors = CrmConnectors = {}));
var EcommerceConnectors;
(function (EcommerceConnectors) {
    EcommerceConnectors["SHOPIFY"] = "shopify";
    EcommerceConnectors["WOOCOMMERCE"] = "woocommerce";
    EcommerceConnectors["SQUARESPACE"] = "squarespace";
    EcommerceConnectors["AMAZON"] = "amazon";
    EcommerceConnectors["WEBFLOW"] = "webflow";
})(EcommerceConnectors || (exports.EcommerceConnectors = EcommerceConnectors = {}));
var TicketingConnectors;
(function (TicketingConnectors) {
    TicketingConnectors["ZENDESK"] = "zendesk";
    TicketingConnectors["FRONT"] = "front";
    TicketingConnectors["JIRA"] = "jira";
    TicketingConnectors["GITHUB"] = "github";
    TicketingConnectors["GITLAB"] = "gitlab";
    TicketingConnectors["LINEAR"] = "linear";
})(TicketingConnectors || (exports.TicketingConnectors = TicketingConnectors = {}));
var FilestorageConnectors;
(function (FilestorageConnectors) {
    FilestorageConnectors["BOX"] = "box";
    FilestorageConnectors["DROPBOX"] = "dropbox";
    FilestorageConnectors["ONEDRIVE"] = "onedrive";
    FilestorageConnectors["SHAREPOINT"] = "sharepoint";
    FilestorageConnectors["GOOGLEDRIVE"] = "googledrive";
})(FilestorageConnectors || (exports.FilestorageConnectors = FilestorageConnectors = {}));
