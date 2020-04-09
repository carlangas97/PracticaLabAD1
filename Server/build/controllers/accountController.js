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
class accountController {
    withdraw_account(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carnet } = req.params;
            const cuenta = req.body.no_cuenta;
            const retiro = req.body.retiro;
            const response = yield database_1.default.query('UPDATE banca.cuenta SET saldo = saldo - ?'
                + ' where usuario_carnet = ? and no_cuenta = ? and estado = 1 and saldo >= ?', [retiro, carnet, cuenta, retiro]);
            if (response.changedRows > 0) {
                res.send(true);
            }
            else {
                res.send(false);
            }
        });
    }
    create_sufis(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const no_cuenta = req.body.no_cuenta;
            const curso = req.body.curso;
            const descripcion = req.body.descripcion;
            const fecha = req.body.fecha;
            yield database_1.default.query('INSERT INTO banca.historial_pagos (no_cuenta,tipo_id,monto,curso,descripcion,fecha) values (?,3,20,?,?,?)', [no_cuenta, curso, descripcion, fecha]);
            res.json({ text: 'pago de suficiencia agregado' });
        });
    }
    create_vacas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const usuario = req.body.usuario;
            const curso_semestre = req.body.curso_semestre;
            const fecha = req.body.fecha;
            const total = req.body.total;
            yield database_1.default.query('INSERT INTO banca.asignacion(usuario,curso_semestre,fecha,total) values (?,?,?,?)', [usuario, curso_semestre, fecha, total]);
            res.json({ text: 'asignacion escuela de vacaciones exitosa' });
        });
    }
    list_pagos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const curso = yield database_1.default.query('SELECT * FROM  banca.historial_pagos');
            res.json(curso);
        });
    }
    list_vacas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const curso = yield database_1.default.query('SELECT * FROM  banca.asignacion');
            res.json(curso);
        });
    }
    deposit_account(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carnet } = req.params;
            const cuenta = req.body.no_cuenta;
            const deposito = req.body.deposito;
            const response = yield database_1.default.query('UPDATE banca.cuenta SET saldo = saldo + ?'
                + ' where usuario_carnet = ? and no_cuenta = ? and estado = 1', [deposito, carnet, cuenta]);
            if (response.changedRows > 0) {
                res.send(true);
            }
            else {
                res.send(false);
            }
        });
    }
    get_account(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carnet } = req.params;
            const response = yield database_1.default.query('SELECT * from banca.cuenta where usuario_carnet = ? ', [carnet]);
            if (response.length > 0) {
                res.send(response);
            }
            else {
                res.send(false);
            }
        });
    }
}
exports.AccountController = new accountController();
