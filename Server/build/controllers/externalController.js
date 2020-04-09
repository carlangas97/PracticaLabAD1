"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class externalController {
    externalAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estado = 1; // pendiente
            const response = yield database_1.default.query('INSERT INTO banca.solicitudes_externas set usuario = ?, cuenta = ?, estado = ?, fecha = ?', [req.body.usuario, req.body.cuenta, estado, req.body.fecha]);
            console.log(response);
            if (response.affectedRows > 0) {
                res.send(true);
            }
            else {
                res.send(false);
            }
        });
    }
    updateExternalAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield database_1.default.query('UPDATE banca.solicitudes_externas SET estado = ? Where usuario = ? and cuenta = ?', [req.body.estado, req.body.usuario, req.body.cuenta]);
            if (response.changedRows > 0) {
                res.send(true);
            }
            else {
                res.send(false);
            }
        });
    }
}
exports.ExternalController = new externalController();
