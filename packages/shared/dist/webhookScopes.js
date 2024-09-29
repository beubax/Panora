"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookScopes = exports.scopes = void 0;
exports.scopes = [
    'crm.contact.created',
    'crm.contact.pulled',
    'crm.company.created',
    'crm.company.pulled',
    'crm.deal.created',
    'crm.deal.pulled',
    'crm.engagement.created',
    'crm.engagement.pulled',
    'crm.note.created',
    'crm.note.pulled',
    'crm.stage.pulled',
    'crm.task.pulled',
    'crm.task.created',
    'crm.user.pulled',
    'ticketing.ticket.created',
    'ticketing.ticket.pulled',
    'ticketing.comment.created',
    'ticketing.comment.pulled',
    'ticketing.attachment.created',
    'ticketing.attachment.pulled',
    'ticketing.collection.pulled',
    'ticketing.account.pulled',
    'ticketing.contact.pulled',
    'ticketing.tag.pulled',
    'ticketing.team.pulled',
    'ticketing.user.pulled',
    'ats.activity.created',
    'ats.activity.pulled',
    'ats.application.created',
    'ats.application.pulled',
    'ats.attachment.created',
    'ats.attachment.pulled',
    'ats.candidate.created',
    'ats.candidate.pulled',
    'ats.department.pulled',
    'ats.eecos.pulled',
    'ats.interview.created',
    'ats.interview.pulled',
    'ats.job.pulled',
    'ats.jobinterviewstage.pulled',
    'ats.offer.created',
    'ats.office.pulled',
    'ats.rejectreason.pulled',
    'ats.scorecard.pulled',
    'ats.tag.pulled',
    'ats.user.pulled',
    'filestorage.file.created',
    'filestorage.file.pulled',
    'filestorage.folder.created',
    'filestorage.folder.pulled',
    'filestorage.group.pulled',
    'filestorage.user.pulled',
    'filestorage.drive.pulled',
    'filestorage.permission.pulled',
    'filestorage.sharedlink.pulled',
    'connection.created'
];
var WebhookScopes;
(function (WebhookScopes) {
    WebhookScopes["crm.contact.created"] = "crm.contact.created";
    WebhookScopes["crm.contact.pulled"] = "crm.contact.pulled";
    WebhookScopes["crm.company.created"] = "crm.company.created";
    WebhookScopes["crm.company.pulled"] = "crm.company.pulled";
    WebhookScopes["crm.deal.created"] = "crm.deal.created";
    WebhookScopes["crm.deal.pulled"] = "crm.deal.pulled";
    WebhookScopes["crm.engagement.created"] = "crm.engagement.created";
    WebhookScopes["crm.engagement.pulled"] = "crm.engagement.pulled";
    WebhookScopes["crm.note.created"] = "crm.note.created";
    WebhookScopes["crm.note.pulled"] = "crm.note.pulled";
    WebhookScopes["crm.stage.pulled"] = "crm.stage.pulled";
    WebhookScopes["crm.task.pulled"] = "crm.task.pulled";
    WebhookScopes["crm.task.created"] = "crm.task.created";
    WebhookScopes["crm.user.pulled"] = "crm.user.pulled";
    WebhookScopes["ticketing.ticket.created"] = "ticketing.ticket.created";
    WebhookScopes["ticketing.ticket.pulled"] = "ticketing.ticket.pulled";
    WebhookScopes["ticketing.comment.created"] = "ticketing.comment.created";
    WebhookScopes["ticketing.comment.pulled"] = "ticketing.comment.pulled";
    WebhookScopes["ticketing.attachment.created"] = "ticketing.attachment.created";
    WebhookScopes["ticketing.attachment.pulled"] = "ticketing.attachment.pulled";
    WebhookScopes["ticketing.collection.pulled"] = "ticketing.collection.pulled";
    WebhookScopes["ticketing.account.pulled"] = "ticketing.account.pulled";
    WebhookScopes["ticketing.contact.pulled"] = "ticketing.contact.pulled";
    WebhookScopes["ticketing.tag.pulled"] = "ticketing.tag.pulled";
    WebhookScopes["ticketing.team.pulled"] = "ticketing.team.pulled";
    WebhookScopes["ticketing.user.pulled"] = "ticketing.user.pulled";
    WebhookScopes["ats.activity.created"] = "ats.activity.created";
    WebhookScopes["ats.activity.pulled"] = "ats.activity.pulled";
    WebhookScopes["ats.application.created"] = "ats.application.created";
    WebhookScopes["ats.application.pulled"] = "ats.application.pulled";
    WebhookScopes["ats.attachment.created"] = "ats.attachment.created";
    WebhookScopes["ats.attachment.pulled"] = "ats.attachment.pulled";
    WebhookScopes["ats.candidate.created"] = "ats.candidate.created";
    WebhookScopes["ats.candidate.pulled"] = "ats.candidate.pulled";
    WebhookScopes["ats.department.pulled"] = "ats.department.pulled";
    WebhookScopes["ats.eecos.pulled"] = "ats.eecos.pulled";
    WebhookScopes["ats.interview.created"] = "ats.interview.created";
    WebhookScopes["ats.interview.pulled"] = "ats.interview.pulled";
    WebhookScopes["ats.job.pulled"] = "ats.job.pulled";
    WebhookScopes["ats.jobinterviewstage.pulled"] = "ats.jobinterviewstage.pulled";
    WebhookScopes["ats.offer.created"] = "ats.offer.created";
    WebhookScopes["ats.office.pulled"] = "ats.office.pulled";
    WebhookScopes["ats.rejectreason.pulled"] = "ats.rejectreason.pulled";
    WebhookScopes["ats.scorecard.pulled"] = "ats.scorecard.pulled";
    WebhookScopes["ats.tag.pulled"] = "ats.tag.pulled";
    WebhookScopes["ats.user.pulled"] = "ats.user.pulled";
    WebhookScopes["filestorage.file.created"] = "filestorage.file.created";
    WebhookScopes["filestorage.file.pulled"] = "filestorage.file.pulled";
    WebhookScopes["filestorage.folder.created"] = "filestorage.folder.created";
    WebhookScopes["filestorage.folder.pulled"] = "filestorage.folder.pulled";
    WebhookScopes["filestorage.group.pulled"] = "filestorage.group.pulled";
    WebhookScopes["filestorage.user.pulled"] = "filestorage.user.pulled";
    WebhookScopes["filestorage.drive.pulled"] = "filestorage.drive.pulled";
    WebhookScopes["filestorage.permission.pulled"] = "filestorage.permission.pulled";
    WebhookScopes["filestorage.sharedlink.pulled"] = "filestorage.sharedlink.pulled";
    WebhookScopes["connection.created"] = "connection.created";
})(WebhookScopes || (exports.WebhookScopes = WebhookScopes = {}));
