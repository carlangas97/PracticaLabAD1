"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/analisis/create-user', userController_1.userController.createuser);
        this.router.get('/analisis/list-user', userController_1.userController.listuser);
        this.router.get('/analisis/list-user/:id', userController_1.userController.listone);
        this.router.post('/analisis/login-user', userController_1.userController.userLogin);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
