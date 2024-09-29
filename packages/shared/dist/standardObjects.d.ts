export declare enum CrmObject {
    company = "company",
    contact = "contact",
    deal = "deal",
    note = "note",
    task = "task",
    engagement = "engagement",
    stage = "stage",
    user = "user"
}
export declare enum HrisObject {
    bankinfo = "bankinfo",
    benefit = "benefit",
    company = "company",
    dependent = "dependent",
    employee = "employee",
    employeepayrollrun = "employeepayrollrun",
    employerbenefit = "employerbenefit",
    employment = "employment",
    group = "group",
    location = "location",
    paygroup = "paygroup",
    payrollrun = "payrollrun",
    timeoff = "timeoff",
    timeoffbalance = "timeoffbalance",
    timesheetentry = "timesheetentry"
}
export declare enum AtsObject {
    activity = "activity",
    application = "application",
    attachment = "attachment",
    candidate = "candidate",
    department = "department",
    interview = "interview",
    jobinterviewstage = "jobinterviewstage",
    job = "job",
    offer = "offer",
    office = "office",
    rejectreason = "rejectreason",
    scorecard = "scorecard",
    tag = "tag",
    user = "user",
    eeocs = "eeocs"
}
export declare enum AccountingObject {
    balancesheet = "balancesheet",
    cashflowstatement = "cashflowstatement",
    companyinfo = "companyinfo",
    contact = "contact",
    creditnote = "creditnote",
    expense = "expense",
    incomestatement = "incomestatement",
    invoice = "invoice",
    item = "item",
    journalentry = "journalentry",
    payment = "payment",
    phonenumber = "phonenumber",
    purchaseorder = "purchaseorder",
    taxrate = "taxrate",
    trackingcategory = "trackingcategory",
    transaction = "transaction",
    vendorcredit = "vendorcredit",
    account = "account",
    address = "address",
    attachment = "attachment"
}
export declare enum EcommerceObject {
    order = "order",
    fulfillment = "fulfillment",
    product = "product",
    customer = "customer",
    fulfillmentorders = "fulfillmentorders"
}
export declare enum FileStorageObject {
    file = "file",
    folder = "folder",
    permission = "permission",
    drive = "drive",
    sharedlink = "sharedlink",
    group = "group",
    user = "user"
}
export declare enum MarketingAutomationObject {
    action = "action",
    automation = "automation",
    campaign = "campaign",
    contact = "contact",
    email = "email",
    event = "event",
    list = "list",
    message = "message",
    template = "template",
    user = "user"
}
export declare enum TicketingObject {
    ticket = "ticket",
    comment = "comment",
    user = "user",
    contact = "contact",
    account = "account",
    tag = "tag",
    team = "team",
    collection = "collection"
}
export declare const standardObjects: string[];
export declare function getCrmCommonObjects(): string[];
export declare function getHrisCommonObjects(): string[];
export declare function getAtsCommonObjects(): string[];
export declare function getAccountingCommonObjects(): string[];
export declare function getEcommerceCommonObjects(): string[];
export declare function getFileStorageCommonObjects(): string[];
export declare function getMarketingAutomationCommonObjects(): string[];
export declare function getTicketingCommonObjects(): string[];
export declare function getCommonObjectsForVertical(vertical: string): string[];
