"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const util_1 = require("../common/util");
const mongoose_1 = __importDefault(require("mongoose"));
const handleError = (err, req, res, next) => {
    console.error(`Error Handler: ${err.message}`);
    if (err instanceof mongoose_1.default.Error) {
        (0, util_1.sendError)(res, err, 422);
    }
    else {
        (0, util_1.sendError)(res, { message: err.message, err }, 400);
    }
};
exports.handleError = handleError;
//# sourceMappingURL=handleError.js.map