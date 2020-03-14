"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
var options = {
    transports: [
        new winston_1.default.transports.Console({
            level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
        }),
    ],
};
exports.logger = winston_1.default.createLogger(options);
exports.stream = {
    write: function (message) {
        exports.logger.info(message);
    },
};
if (process.env.NODE_ENV !== 'production') {
    exports.logger.debug('Logginig initialized on debug level');
}
//# sourceMappingURL=logger.js.map