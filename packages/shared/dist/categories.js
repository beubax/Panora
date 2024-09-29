"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesVerticals = exports.ConnectorCategory = void 0;
var ConnectorCategory;
(function (ConnectorCategory) {
    ConnectorCategory["Crm"] = "crm";
    ConnectorCategory["Hris"] = "hris";
    ConnectorCategory["Ats"] = "ats";
    ConnectorCategory["Accounting"] = "accounting";
    ConnectorCategory["Ticketing"] = "ticketing";
    ConnectorCategory["MarketingAutomation"] = "marketingautomation";
    ConnectorCategory["FileStorage"] = "filestorage";
    ConnectorCategory["Productivity"] = "productivity";
    ConnectorCategory["Ecommerce"] = "ecommerce";
    ConnectorCategory["Cybersecurity"] = "cybersecurity";
})(ConnectorCategory || (exports.ConnectorCategory = ConnectorCategory = {}));
exports.categoriesVerticals = Object.values(ConnectorCategory);
