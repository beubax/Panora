"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareMode = exports.AuthStrategy = void 0;
var AuthStrategy;
(function (AuthStrategy) {
    AuthStrategy["oauth2"] = "0Auth2";
    AuthStrategy["api_key"] = "API Key";
    AuthStrategy["basic"] = "Basic Auth";
})(AuthStrategy || (exports.AuthStrategy = AuthStrategy = {}));
var SoftwareMode;
(function (SoftwareMode) {
    SoftwareMode["cloud"] = "CLOUD";
})(SoftwareMode || (exports.SoftwareMode = SoftwareMode = {}));
