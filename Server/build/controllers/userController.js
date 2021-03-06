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
class UserController {
    createuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const DPI = req.body.DPI;
            const nombre = req.body.nombre;
            const apellidos = req.body.apellidos;
            const correo = req.body.correo;
            const pass = req.body.pass;
            const tipo_usuario = req.body.tipo_usuario;
            const no_cuenta = req.body.no_cuenta;
            const monto = req.body.monto;
            const a = 100000000;
            const b = 999999999;
            const codigo = Math.round(Math.random() * (b - a) + a);
            yield database_1.default.query('INSERT INTO practica.Usuario (DPI,nombre,apellidos,correo,pass,tipo_usuario) values(?,?,?,?,?,?)', [DPI, nombre, apellidos, correo, pass, tipo_usuario]);
            const comando = 'INSERT INTO practica.Cuenta (codigo_usuario,DPI,no_cuenta,saldo_cuenta) values(' + codigo + ',' + DPI + ',' + no_cuenta + ',' + monto + ')';
            yield database_1.default.query(comando, function sync(err) {
                if (!err) {
                    res.json({ 'message': 'Se guardo el usuario' });
                }
                else {
                    res.json({ 'message': err });
                }
            });
        });
    }
    listuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * from practica.Usuario');
            res.json(users);
        });
    }
    listone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT * from practica.Usuario where DPI=?', [id]);
            res.json(users);
        });
    }
    userLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * from practica.Usuario where DPI=? and pass = ?', [req.body.DPI, req.body.pass]);
            if (users.length > 0) {
                const resp = yield database_1.default.query('SELECT * from practica.Cuenta WHERE DPI=?', [req.body.DPI]);
                res.json(resp);
            }
            else {
                res.send(false);
            }
        });
    }
}
exports.userController = new UserController();
