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
class AccountController {
    getSaldo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuenta } = req.params;
            const users = yield database_1.default.query('SELECT saldo_cuenta from practica.Cuenta where no_cuenta=?', [cuenta]);
            if (users.length > 0) {
                res.json(users);
            }
            else {
                res.send(false);
            }
        });
    }
    CreateAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const DPI = req.body.DPI;
            const no_cuenta = req.body.no_cuenta;
            const monto = req.body.monto;
            const a = 1000000000;
            const b = 9999999999;
            const codigo = Math.round(Math.random() * (b - a) + a);
            database_1.default.query('INSERT INTO practica.Cuenta (codigo_usuario,DPI,no_cuenta,saldo_cuenta) values(?,?,?,?)', [codigo, DPI, no_cuenta, monto]);
            console.log(req.body);
            res.json({ message: 'usuario registrado' });
        });
    }
}
exports.accountController = new AccountController();
