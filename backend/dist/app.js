"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const handleError_1 = require("./middlewares/handleError");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// parse body
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// routes
app.use("/api", routes_1.default);
/* ERRORS */
app.use(handleError_1.handleError);
exports.default = app;
//# sourceMappingURL=app.js.map