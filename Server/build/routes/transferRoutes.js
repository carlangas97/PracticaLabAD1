"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transferController_1 = require("../controllers/transferController");
class TransferRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/analisis/transfer/general-report', transferController_1.transferController.general_report);
        this.router.get('/analisis/transfer/account-report/:cuenta', transferController_1.transferController.account_report);
    }
}
const transferRoutes = new TransferRoutes();
exports.default = transferRoutes.router;
