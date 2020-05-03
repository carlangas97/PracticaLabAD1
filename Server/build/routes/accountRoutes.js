"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountController_1 = require("../controllers/accountController");
class AccountRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/analisis/account/get-saldo/:cuenta', accountController_1.accountController.getSaldo);
        //this.router.post('/analisis/account/create-account', accountController.CreateAccount);
        this.router.get('/analisis/account/get-cuenta', accountController_1.accountController.getCuenta);
        this.router.post('/analisis/transferencia', accountController_1.accountController.maketransaction);
    }
}
const accountRoutes = new AccountRoutes();
exports.default = accountRoutes.router;
