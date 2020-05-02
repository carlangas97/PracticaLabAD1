"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const externalController_1 = require("../controllers/externalController");
class externalAccountRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/create-request', externalController_1.ExternalController.externalAccount); // crear solicitud externa
        this.router.put('/update-request', externalController_1.ExternalController.updateExternalAccount); // actualizar estado, solicitud externa
    }
}
const ExternalAccountRoutes = new externalAccountRoutes();
exports.default = ExternalAccountRoutes.router;
