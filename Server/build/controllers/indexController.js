"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json("Conectado");

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class IndexController {
    index(req, res) {
        database_1.default.query('DESCRIBE banca');
        res.json("games");

    }
}
exports.indexController = new IndexController();
