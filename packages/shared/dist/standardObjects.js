"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardObjects = exports.TicketingObject = exports.MarketingAutomationObject = exports.FileStorageObject = exports.EcommerceObject = exports.AccountingObject = exports.AtsObject = exports.HrisObject = exports.CrmObject = void 0;
exports.getCrmCommonObjects = getCrmCommonObjects;
exports.getHrisCommonObjects = getHrisCommonObjects;
exports.getAtsCommonObjects = getAtsCommonObjects;
exports.getAccountingCommonObjects = getAccountingCommonObjects;
exports.getEcommerceCommonObjects = getEcommerceCommonObjects;
exports.getFileStorageCommonObjects = getFileStorageCommonObjects;
exports.getMarketingAutomationCommonObjects = getMarketingAutomationCommonObjects;
exports.getTicketingCommonObjects = getTicketingCommonObjects;
exports.getCommonObjectsForVertical = getCommonObjectsForVertical;
var CrmObject;
(function (CrmObject) {
    CrmObject["company"] = "company";
    CrmObject["contact"] = "contact";
    CrmObject["deal"] = "deal";
    CrmObject["note"] = "note";
    CrmObject["task"] = "task";
    CrmObject["engagement"] = "engagement";
    CrmObject["stage"] = "stage";
    CrmObject["user"] = "user";
})(CrmObject || (exports.CrmObject = CrmObject = {}));
var HrisObject;
(function (HrisObject) {
    HrisObject["bankinfo"] = "bankinfo";
    HrisObject["benefit"] = "benefit";
    HrisObject["company"] = "company";
    HrisObject["dependent"] = "dependent";
    HrisObject["employee"] = "employee";
    HrisObject["employeepayrollrun"] = "employeepayrollrun";
    HrisObject["employerbenefit"] = "employerbenefit";
    HrisObject["employment"] = "employment";
    HrisObject["group"] = "group";
    HrisObject["location"] = "location";
    HrisObject["paygroup"] = "paygroup";
    HrisObject["payrollrun"] = "payrollrun";
    HrisObject["timeoff"] = "timeoff";
    HrisObject["timeoffbalance"] = "timeoffbalance";
    HrisObject["timesheetentry"] = "timesheetentry";
})(HrisObject || (exports.HrisObject = HrisObject = {}));
var AtsObject;
(function (AtsObject) {
    AtsObject["activity"] = "activity";
    AtsObject["application"] = "application";
    AtsObject["attachment"] = "attachment";
    AtsObject["candidate"] = "candidate";
    AtsObject["department"] = "department";
    AtsObject["interview"] = "interview";
    AtsObject["jobinterviewstage"] = "jobinterviewstage";
    AtsObject["job"] = "job";
    AtsObject["offer"] = "offer";
    AtsObject["office"] = "office";
    AtsObject["rejectreason"] = "rejectreason";
    AtsObject["scorecard"] = "scorecard";
    AtsObject["tag"] = "tag";
    AtsObject["user"] = "user";
    AtsObject["eeocs"] = "eeocs";
})(AtsObject || (exports.AtsObject = AtsObject = {}));
var AccountingObject;
(function (AccountingObject) {
    AccountingObject["balancesheet"] = "balancesheet";
    AccountingObject["cashflowstatement"] = "cashflowstatement";
    AccountingObject["companyinfo"] = "companyinfo";
    AccountingObject["contact"] = "contact";
    AccountingObject["creditnote"] = "creditnote";
    AccountingObject["expense"] = "expense";
    AccountingObject["incomestatement"] = "incomestatement";
    AccountingObject["invoice"] = "invoice";
    AccountingObject["item"] = "item";
    AccountingObject["journalentry"] = "journalentry";
    AccountingObject["payment"] = "payment";
    AccountingObject["phonenumber"] = "phonenumber";
    AccountingObject["purchaseorder"] = "purchaseorder";
    AccountingObject["taxrate"] = "taxrate";
    AccountingObject["trackingcategory"] = "trackingcategory";
    AccountingObject["transaction"] = "transaction";
    AccountingObject["vendorcredit"] = "vendorcredit";
    AccountingObject["account"] = "account";
    AccountingObject["address"] = "address";
    AccountingObject["attachment"] = "attachment";
})(AccountingObject || (exports.AccountingObject = AccountingObject = {}));
var EcommerceObject;
(function (EcommerceObject) {
    EcommerceObject["order"] = "order";
    EcommerceObject["fulfillment"] = "fulfillment";
    EcommerceObject["product"] = "product";
    EcommerceObject["customer"] = "customer";
    EcommerceObject["fulfillmentorders"] = "fulfillmentorders";
})(EcommerceObject || (exports.EcommerceObject = EcommerceObject = {}));
var FileStorageObject;
(function (FileStorageObject) {
    FileStorageObject["file"] = "file";
    FileStorageObject["folder"] = "folder";
    FileStorageObject["permission"] = "permission";
    FileStorageObject["drive"] = "drive";
    FileStorageObject["sharedlink"] = "sharedlink";
    FileStorageObject["group"] = "group";
    FileStorageObject["user"] = "user";
})(FileStorageObject || (exports.FileStorageObject = FileStorageObject = {}));
var MarketingAutomationObject;
(function (MarketingAutomationObject) {
    MarketingAutomationObject["action"] = "action";
    MarketingAutomationObject["automation"] = "automation";
    MarketingAutomationObject["campaign"] = "campaign";
    MarketingAutomationObject["contact"] = "contact";
    MarketingAutomationObject["email"] = "email";
    MarketingAutomationObject["event"] = "event";
    MarketingAutomationObject["list"] = "list";
    MarketingAutomationObject["message"] = "message";
    MarketingAutomationObject["template"] = "template";
    MarketingAutomationObject["user"] = "user";
})(MarketingAutomationObject || (exports.MarketingAutomationObject = MarketingAutomationObject = {}));
var TicketingObject;
(function (TicketingObject) {
    TicketingObject["ticket"] = "ticket";
    TicketingObject["comment"] = "comment";
    TicketingObject["user"] = "user";
    TicketingObject["contact"] = "contact";
    TicketingObject["account"] = "account";
    TicketingObject["tag"] = "tag";
    TicketingObject["team"] = "team";
    TicketingObject["collection"] = "collection";
})(TicketingObject || (exports.TicketingObject = TicketingObject = {}));
const prependPrefixToEnumValues = (prefix, enumObj) => {
    return Object.values(enumObj).map(value => `${prefix}.${value}`);
};
exports.standardObjects = [
    ...prependPrefixToEnumValues('crm', CrmObject),
    ...prependPrefixToEnumValues('ticketing', TicketingObject),
    ...prependPrefixToEnumValues('filestorage', FileStorageObject),
    ...prependPrefixToEnumValues('ats', AtsObject),
    ...prependPrefixToEnumValues('ecommerce', EcommerceObject),
];
function getCrmCommonObjects() {
    return Object.values(CrmObject);
}
function getHrisCommonObjects() {
    return Object.values(HrisObject);
}
function getAtsCommonObjects() {
    return Object.values(AtsObject);
}
function getAccountingCommonObjects() {
    return Object.values(AccountingObject);
}
function getEcommerceCommonObjects() {
    return Object.values(EcommerceObject);
}
function getFileStorageCommonObjects() {
    return Object.values(FileStorageObject);
}
function getMarketingAutomationCommonObjects() {
    return Object.values(MarketingAutomationObject);
}
function getTicketingCommonObjects() {
    return Object.values(TicketingObject);
}
function getCommonObjectsForVertical(vertical) {
    switch (vertical.toLowerCase()) {
        case 'crm':
            return getCrmCommonObjects();
        case 'hris':
            return getHrisCommonObjects();
        case 'ats':
            return getAtsCommonObjects();
        case 'accounting':
            return getAccountingCommonObjects();
        case 'ecommerce':
            return getEcommerceCommonObjects();
        case 'filestorage':
            return getFileStorageCommonObjects();
        case 'marketingautomation':
            return getMarketingAutomationCommonObjects();
        case 'ticketing':
            return getTicketingCommonObjects();
        default:
            throw new Error(`Unknown vertical: ${vertical}`);
    }
}
