"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json("Conectado");
    }
}
exports.indexController = new IndexController();
