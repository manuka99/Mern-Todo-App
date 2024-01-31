"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendError = exports.sendSuccess = void 0;
const sendSuccess = (res, data) => {
    sendResponse(res, 200, true, data);
};
exports.sendSuccess = sendSuccess;
const sendError = (res, data, errorCode = 400) => {
    sendResponse(res, errorCode, false, data);
};
exports.sendError = sendError;
const sendResponse = (res, statusCode, success, data) => {
    res.status(statusCode).json({ success, data });
};
//# sourceMappingURL=util.js.map