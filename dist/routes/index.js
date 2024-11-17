"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const machineRoutes_1 = __importDefault(require("./machineRoutes"));
const machineGetRouters_1 = __importDefault(require("./machineGetRouters"));
const router = express_1.default.Router();
exports.default = () => {
    (0, machineRoutes_1.default)(router);
    (0, machineGetRouters_1.default)(router);
    return router;
};
