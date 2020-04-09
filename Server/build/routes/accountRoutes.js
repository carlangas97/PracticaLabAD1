"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountController_1 = require("../controllers/accountController");
class accountRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.put('/withdraw-account/:carnet', accountController_1.AccountController.withdraw_account); // retiro de dinero
        this.router.put('/deposit-account/:carnet', accountController_1.AccountController.deposit_account); // deposito de dinero
        this.router.get('/get-account/:carnet', accountController_1.AccountController.get_account); // obtener cuenta
        this.router.post('/create-sufis', accountController_1.AccountController.create_sufis); // pagar una suficiencia
        this.router.post('/asignar-vacas', accountController_1.AccountController.create_vacas); // asignar curso de vacas
        this.router.get('/create-sufis', accountController_1.AccountController.list_pagos); // listado de pagos
        this.router.get('/listado-vacas', accountController_1.AccountController.list_vacas); // listado de cursos asignados vacasgeneral
    }
}
const AccountRoutes = new accountRoutes();
exports.default = AccountRoutes.router;
