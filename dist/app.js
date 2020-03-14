"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sourceMaps = __importStar(require("source-map-support"));
sourceMaps.install();
var bolt_1 = require("@slack/bolt");
var SlackApp = (function () {
    function SlackApp() {
        this.receiver = new bolt_1.ExpressReceiver({
            signingSecret: process.env.SLACK_SIGNING_SECRET || '1234',
        });
        this.app = new bolt_1.App({
            token: process.env.SLACK_BOT_TOKEN,
            receiver: this.receiver,
            logLevel: bolt_1.LogLevel.INFO,
        });
    }
    return SlackApp;
}());
exports.default = SlackApp;
//# sourceMappingURL=app.js.map